//npm install --save-dev 'name'

var gulp = require('gulp'),                                                 // npm install --save-dev gulp
    sass = require('gulp-sass'), // for sass                                // npm install gulp-sass --save-dev
    uglify = require('gulp-uglify'), // minifide js                         // npm install --save-dev gulp-uglify
    autoprefixer = require('gulp-autoprefixer'), // for css autoprefixer    // npm install --save-dev gulp-autoprefixer
    browserSync = require('browser-sync').create();//live-reload analog     // npm install browser-sync gulp --save-dev

var input = './sass/**/*.scss';
var output = './css';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded' //compressed
};

function errorLog(error){
    console.error.bind(error);
    this.emit('end');
}


gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "thursdaylend/" //gulp-main - path to folder
    });
});

gulp.task('scripts',function(){
    gulp.src('js/*.js')//выбираю все скрипты в этой папке
    .on('error',errorLog)
    .pipe(uglify())//применяю функ. uglify();
    .pipe(gulp.dest('minjs'));//создаю папку minjs и помищяю туда все минифицированные скрипты.

    // Вызов - 'gulp scripts'
});

gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    .pipe(sass(sassOptions).on('error', sass.logError))
    // Run Sass on those files
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output))
    .pipe(browserSync.stream());
});

//Смотрю за изменением JS
gulp.task('watch',function(){
    //gulp.watch('js/*.js', ['scripts']);
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch("*.php").on('change', browserSync.reload);
});


gulp.task('default', ['sass','watch','browser-sync']);