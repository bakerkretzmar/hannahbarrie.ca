const defaults = require('tailwindcss/defaultTheme');

module.exports = {
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
    experimental: {
        applyComplexClasses: true,
        defaultLineHeights: true,
        extendedFontSizeScale: true,
        extendedSpacingScale: true,
    },
    purge: [
        './source/**/*.blade.php',
        './source/**/*.md',
    ],
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
};
