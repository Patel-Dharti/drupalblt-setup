const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compile Sass to CSS
gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')  // Update the path to your Sass files
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));       // Update the destination path
});

// Watch for changes in Sass files
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));  // Update the path to your Sass files
});

// Default task
gulp.task('default', gulp.series('sass', 'watch'));
