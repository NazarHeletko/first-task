module.exports = function() {
    var options = {
        emailTest: {

            // Email to send to
            to : 'ErsErs0001@mail.ru, e.a.yanushko@gmail.com',
            // pass: 'qwaszx@1'

            // Email sent from
            from: 'forpeep@gmail.com',

            // Your email Subject
            subject : 'ForPeeps Payment',

            // Optional
            nodemailer: {
                transporter: {
                    service: 'Gmail',
                    auth: {
                        user: 'forpeep@gmail.com',
                        pass: 'qwaszx@1'
                    }
                },
                defaults: {}
            }
        }
    };

    $.gulp.task('replaceImgSrc', ()=> {
        return $.gulp.src(['./build/*.html'])
            .pipe($.rep({
                prependSrc : 'http://www.dhoster.tk/emails/fpp/',
                keepOrigin : false
            }))
            .pipe($.replace('background="img/', 'background="http://www.dhoster.tk/emails/fpp/'))
            .pipe($.replace('url(img/', 'url(http://www.dhoster.tk/emails/fpp/'))
            .pipe($.gulp.dest('./build/'));
    });

    $.gulp.task('emailBuilder', ()=> {
        return $.gulp.src(['./build/*.html'])
            .pipe($.emailB().build())
            .pipe($.gulp.dest('./build/'));
    });

    $.gulp.task('sendEmail', ()=> {
        return $.gulp.src([
            './build/verification.html'
        ])
            .pipe($.emailB(options).sendEmailTest());
    });
};
