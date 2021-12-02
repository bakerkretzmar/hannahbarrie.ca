const defaults = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './content/_components/*.{html,md,php}',
        './content/_layouts/*.{html,md,php}',
        './content/_pages/*.{html,md,php}',
        './content/admin/*.{html,md,php}',
        './resources/js/cms.js',
    ],
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
