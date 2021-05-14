const defaults = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: [
        './source/**/*.blade.php',
        './source/**/*.md',
        './resources/js/cms.js'
    ],
    theme: {
        extend: {
            screens: {
                xs: '420px',
            },
            colors: {
                cream: '#fdfaf6',
                gray: colors.trueGray,
            },
            fontFamily: {
                sans: ['"Mabry"', ...defaults.fontFamily.sans],
                serif: ['"Editorial New"', ...defaults.fontFamily.serif],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
