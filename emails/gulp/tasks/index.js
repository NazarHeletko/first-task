module.exports = function() {
    $.gulp.task('htmlIndex', () => {
        return $.gulp.src([
            './build/**/*.html',
            '!./build/index.html'
        ])
            .pipe($.gp.index({
                // written out before index contents
                'prepend-to-output': () => `<head><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui"><link rel="stylesheet" href="static/css/style.css"></head><body><div class="container">`,
                // written out after index contents
                'append-to-output': () => `</div></body>`,
                // Title for the index page
                'title': 'All pages:',
                // Title template function used to construct the title section
                'title-template': (title) =>`<h1 class="index__title">${title}</h1>`,
                // Section heading function used to construct each section heading
                'section-heading-template': (heading) => ``,
                'list-template': (listContent) => `<ul class="list-unstyled">${listContent}</ul>`,
                'relativePath': './build'
            }))
            .pipe($.gulp.dest('./build/'));
    });
};
