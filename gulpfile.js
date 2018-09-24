const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const through = require('through2');
const newer = require('gulp-newer');
const babel = require('gulp-babel');
const gulpWatch = require('gulp-watch');
const merge = require('merge-stream');
const sourcemaps = require('gulp-sourcemaps');
const nodemon = require('gulp-nodemon');
const { Signale, chalks } = require('@frontendmonster/dev-utils/logger');

const gulpLogger = Signale('gulp');

const sources = [
  'packages/api',
  'packages/common',
  'packages/dal',
];

// WARNING: This method is not flexible and just work for this file structures
const getBabelConfigs = packages => packages.map((source) => {
  const config = JSON.parse(fs.readFileSync(path.join(source, '.babelrc'), 'utf8'));
  let extendsConfig = {};

  if (config.extends) {
    extendsConfig = JSON.parse(fs.readFileSync(path.join(source, config.extends), 'utf8'));
  }

  delete config.extends;
  return Object.assign({}, extendsConfig, config);
});

const babelConfigs = getBabelConfigs(sources);

function swapSrcWithDist(srcPath) {
  const parts = srcPath.split(path.sep);
  const srcIndex = parts.findIndex(part => part === 'src');

  parts[srcIndex] = 'dist';
  return parts.join(path.sep);
}

function getGlobFromSource(source) {
  return `./${source}/src/**/*.js`;
}

const compilationLogger = () => through.obj((file, _, callback) => {
  gulpLogger.success(`Compiling '${chalks.processing(file.relative)}'...`);
  callback(null, file);
});

const logErrors = () => plumber({
  errorHandler(err) {
    gulpLogger.error(err.stack);
  },
});

function rename(fn) {
  return through.obj((file, enc, callback) => {
    file.path = fn(file);
    callback(null, file);
  });
}

function build() {
  return merge(
    sources.map((source, i) => {
      const base = path.join(__dirname, source);

      return gulp
        .src(getGlobFromSource(source), { base })
        .pipe(logErrors())
        .pipe(newer({ dest: base, map: swapSrcWithDist }))
        .pipe(compilationLogger())
        .pipe(sourcemaps.init())
        .pipe(babel(babelConfigs[i]))
        .pipe(sourcemaps.write('.'))
        // Passing 'file.relative' because newer() above uses a relative path and this keeps it consistent.
        .pipe(rename(file => path.resolve(file.base, swapSrcWithDist(file.relative))))
        .pipe(gulp.dest(base));
    }),
  );
}

const watchBuild = () => gulpWatch(sources, { debounceDelay: 200 }, gulp.task('build'));

const startServer = () => {
  nodemon({ script: './packages/api/dist', watch: [getGlobFromSource(sources)], quiet: true, verbose: false });
};

gulp.task('start', startServer);

gulp.task('build', build);

gulp.task('watch', gulp.series('build', watchBuild));

gulp.task('default', gulp.series('build'));

gulp.task('dev', gulp.series('build', gulp.parallel('start', watchBuild)));
