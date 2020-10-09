module.exports = function() {
    $.gulp.task('ftp', () => {
        var conn = $.ftp.create( {
            host:     'files.000webhost.com',
            user:     'dhoster',
            password: 'OhYKmviBO@Wj&c&Nqi%s',
            parallel: 10,
            log:      $.gutil.log
        } );

        return $.gulp.src(['./build/img/**'])
            .pipe( conn.newer( '/public_html/emails/fpp' ) ) // only upload newer files
            .pipe( conn.dest( '/public_html/emails/fpp' ) );
    });
};
