let mix = require('laravel-mix')

mix.setPublicPath('dist')
    .js('resources/js/filter.js', 'js')
    // .sass('resources/sass/tool.scss', 'css')
