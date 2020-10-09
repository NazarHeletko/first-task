module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./src/static/img/**/*.{png,jpg,gif,ico,svg}')
            .pipe($.gulp.dest('./build/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./src/static/img/**/*.{png,jpg,gif,ico,svg}')
            .pipe($.gp.imagemin({
                progressive: true,
                svgminPlugins: [{removeViewBox: true}],
                use: [$.gp.pngquant()]
            }))
            .pipe($.gulp.dest('./build/img/'));
    });
};
