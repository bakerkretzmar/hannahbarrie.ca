const defaults = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './source/**/*.blade.php',
        './source/**/*.md',
    ],
    theme: {
        extend: {
            screens: {
                xs: '420px',
            },
            colors: {
                theme: {
                    cream: '#fbf4e9',
                },
                gray: colors.trueGray,
            },
            fontFamily: {
                sans: ['"Mabry Pro"', ...defaults.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
