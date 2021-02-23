const mix = require('laravel-mix');
require('laravel-mix-jigsaw');

mix.disableNotifications();
mix.setPublicPath('source/assets/build');

mix.jigsaw()
    .js('resources/js/main.js', 'js')
    .postCss('resources/css/main.css', 'css', [require('tailwindcss')])
    .version();
