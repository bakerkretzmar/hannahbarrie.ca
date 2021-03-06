const mix = require('laravel-mix');
require('laravel-mix-jigsaw');

mix.disableNotifications();
mix.setPublicPath('source/assets/build');

mix.jigsaw()
    .browserSync({ open: false, server: 'build_local', files: ['build_*/**'] })
    .js('resources/js/main.js', 'js')
    .js('resources/js/cms.js', 'js').react()
    .postCss('resources/css/main.css', 'css', [require('tailwindcss')])
    .version();
