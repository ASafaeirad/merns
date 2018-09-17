const gulp = require('gulp');
const plumber = require('gulp-plumber');
const through = require('through2');
const newer = require('gulp-newer');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const gulpWatch = require('gulp-watch');
const sourcemaps = require('gulp-sourcemaps');
const { Signale, chProcessing } = require('@fem/logger');

const gulpLogger = Signale('gulp');
const source = './src/**/*.{js,jsx}';

const compilationLogger = () => through.obj((file, _, callback) => {
  gulpLogger.success(`Compiling '${chProcessing(file.relative)}'...`);
  callback(null, file);
});

const logErrors = () => plumber({
  errorHandler(err) {
    gulpLogger.error(err.stack);
  },
});

const build = () => gulp
  .src(source)
  .pipe(logErrors())
  .pipe(newer({ dest: './dist' }))
  .pipe(compilationLogger())
  .pipe(sourcemaps.init())
  .pipe(babel())
  .pipe(rename({ extname: '.js' }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist'));

const watchBuild = () => gulpWatch(source, { debounceDelay: 200 }, gulp.task('build'));

gulp.task('build', build);

gulp.task('watch', gulp.series('build', watchBuild));

gulp.task('default', gulp.series('build'));
