module.exports = {
    // purge: { enabled: true, content: ['./src/**/*.html', './src/**/*.js'] },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        debugScreens: {
            position: ['top', 'left'],
        },
        extend: {
            colors: {
                primary: '#1a1a1a',
                secondary: '#ffffff',
                accent: '#f18983',
                info: '#9fd037',
                warn: '#f7cb00',
                error: '#ff4444',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('tailwindcss-debug-screens')],
};
