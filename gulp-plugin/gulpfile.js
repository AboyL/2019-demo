var gulp = require('gulp');
var gulpPrefixer = require("./plugin/pre_file");
var transformRpx=require('./plugin/transform_rpx');

gulp.task('pre-fixer', () => {
  return gulp.src('files/**/*.js')
    .pipe(gulpPrefixer('prepended string'))
    .pipe(gulp.dest('modified-files'));
})
gulp.task('pre-fixer', () => {
  return gulp.src('files/**/*.wxss')
    .pipe(transformRpx())
    .pipe(gulp.dest('modified-files'));
})

gulp.task('default', gulp.series(
  'pre-fixer'
));