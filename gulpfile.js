//////////////////////////
//Required
//////////////////////////

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

//////////////////////////
//Scripts Task
//////////////////////////
gulp.task('scripts', function(){
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(reload({stream:true}));
});


//////////////////////////
//Styles Tasks
//////////////////////////
gulp.task('styles', function(){
    gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(reload({stream:true}));
});


//////////////////////////
//HTML Tasks
//////////////////////////
gulp.task('html', function(){
    gulp.src('index.html')
    .pipe(reload({stream:true}));
});


//////////////////////////
//BrowserSync Tasks
//////////////////////////
gulp.task('browser-sync', function(){
    browserSync({
        server:{
            baseDir: ""
        }
    });
});



//////////////////////////
//Watch Tasks
//////////////////////////
gulp.task('watch', function(){
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('scss/*.scss', ['styles']);
    gulp.watch('index.html', ['html']);
});



//////////////////////////
//Default Task
//////////////////////////
gulp.task('default', ['scripts', 'browser-sync', 'html', 'watch']);
