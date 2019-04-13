var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('browserify', done => {
  browserify('./src/main.jsx', { debug: true })
    .transform(babelify, { presets: [ '@babel/env', '@babel/react' ] })
    .bundle()
    .on('error', function (err) { console.log('Error : ' + err.message); })
    .pipe(source('main.js'))
    .pipe(gulp.dest('./'))
  done()
});

gulp.task('watch', () => {
  gulp.watch('./src/main.jsx', gulp.task('browserify'));
});

gulp.task('default', gulp.series('watch'));
