module.exports = function () {
    let styles = [
        './src/static/scss/**/*.scss'
    ]
    $.gulp.task('styles:build', () => {
        return $.gulp.src(styles, { base: ''})
            .pipe($.gp.plumber())
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer())
            .pipe($.gp.useref())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./build/css/'))
    });

    $.gulp.task('styles:dev', () => {
        return $.gulp.src(styles)
            .pipe($.gp.plumber())
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Stylus',
                    message: error.message
                };
            }))
            .pipe($.gulp.dest('./build/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
