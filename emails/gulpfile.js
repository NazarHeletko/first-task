global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    buffer: require('vinyl-buffer'),
    merge: require('merge-stream'),
    fs: require('fs'),
    ld: require('lodash'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')(),
    serve: require('gulp-serve'),
    emailB: require('gulp-email-builder'),
    rep: require('gulp-replace-image-src'),
    replace: require('gulp-replace'),
    gutil: require('gulp-util'),
    ftp: require('vinyl-ftp'),
    cfg: require('./gulp/config.json')
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel('styles:dev', 'pug', 'img:dev'),
    'htmlIndex'
    /*'emailBuilder'*/
    )
);

$.gulp.task('emailTest', $.gulp.series(
    'clean',
    $.gulp.parallel('styles:build', 'pug', 'img:build'),
    'emailBuilder',
    'replaceImgSrc',
    // 'ftp',
    'sendEmail'
    )
);

$.gulp.task('srcUpload', $.gulp.series(
    'ftp'
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('styles:build', 'pug', 'img:build'),
    'emailBuilder',
    'htmlIndex'
    )
);

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
