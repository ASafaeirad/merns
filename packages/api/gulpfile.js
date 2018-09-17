const gulp = require('gulp');
const plumber = require('gulp-plumber');
const through = require('through2');
const newer = require('gulp-newer');
const babel = require('gulp-babel');
const gulpWatch = require('gulp-watch');
const nodemon = require('gulp-nodemon');
const { Signale, chProcessing } = require('@fem/logger');

const gulpLogger = Signale('gulp');
const source = './src/**/*.js';

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
  .pipe(babel())
  .pipe(gulp.dest('./dist'));

const watchBuild = () => gulpWatch(source, { debounceDelay: 200 }, gulp.task('build'));

const startServer = () => {
  nodemon({ script: './dist' });
};

gulp.task('start', startServer);

gulp.task('build', build);

gulp.task('watch', gulp.series('build', watchBuild));

gulp.task('default', gulp.series('build'));

gulp.task('dev', gulp.series('build', gulp.parallel('start', watchBuild)));
