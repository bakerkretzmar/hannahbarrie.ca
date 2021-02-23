const defaults = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './source/**/*.blade.php',
        './source/**/*.md',
    ],
    theme: {
        extend: {
            fontFamily: ['"Mabry Pro"', ...defaults.fontFamily.sans],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
