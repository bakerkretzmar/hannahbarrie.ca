module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
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
