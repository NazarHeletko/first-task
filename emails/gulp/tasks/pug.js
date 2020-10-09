module.exports = function() {
    $.gulp.task('pug', ()=>  {
        return $.gulp.src('./src/pug/emails/**/*.pug')
            .pipe($.gp.pug({
                locals : {
                    // sidebar: JSON.parse($.fs.readFileSync('./src/data/sidebar.json', 'utf8'))
                },
                pretty: true
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            }))
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};
