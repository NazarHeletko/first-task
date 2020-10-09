module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch(['./src/pug/**/*.pug', './data/**/*.json'], $.gulp.series('pug'));
        $.gulp.watch('./src/static/scss/**/*.scss', $.gulp.series('styles:dev'));
        $.gulp.watch(['./src/static/img/**/*.{png,jpg,gif,svg}'], $.gulp.series('img:dev'));
        $.gulp.watch('./src/pug/**/*.pug', { usePolling: true }, $.gulp.registry().get('htmlIndex'));
    });
};
