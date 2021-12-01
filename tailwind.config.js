const defaults = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./content/**/*.{html,md,php}', './resources/js/cms.js'],
    theme: {
        extend: {
            screens: {
                xs: '420px',
            },
            colors: {
                cream: '#fdfaf6',
            },
            fontFamily: {
                sans: ['"Mabry"', ...defaults.fontFamily.sans],
                serif: ['"Editorial New"', ...defaults.fontFamily.serif],
            },
        },
    },
};
