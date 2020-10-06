const mix = require('laravel-mix');
require('laravel-mix-jigsaw');

mix.disableNotifications();
mix.setPublicPath('source/assets/build');

mix.jigsaw()
    .js('source/_assets/js/main.js', 'js')
    .postCss('source/_assets/css/main.css', 'css', [require('tailwindcss')])
    .version();
