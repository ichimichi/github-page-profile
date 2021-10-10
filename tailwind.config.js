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
            backgroundImage: {
                lightImage: `url(
                    "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='21' height='21' patternTransform='scale(4) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(14, 0%, 100%, 1)'/><path d='M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z' transform='translate(0.5,0)' stroke-width='1' stroke='hsla(25, 0%, 0%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-160,-160)' fill='url(%23a)'/></svg>"
                )`,
                darkImage: `url(
                    "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='50' height='50' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 0%, 1)'/><path d='M25 50l-7.187-7.187L10.625 50zm0 0l7.188-7.187L39.375 50zm0-50l-7.187 7.187L10.625 0zm0 0l7.188 7.187L39.375 0zM0 25l7.187 7.187L0 39.375zm0 0l7.187-7.188L0 10.625zm50 0l-7.187 7.187L50 39.375zm0 0l-7.187-7.188L50 10.625z'  stroke-width='1' stroke='none' fill='hsla(259, 0%, 18%, 1)'/><path d='M0 3.542V0h3.542L14.27 10.73l-3.542 3.54zM50 0h-3.542L35.73 10.73l3.542 3.54L50 3.543zM0 46.458V50h3.542L14.27 39.27l-3.542-3.54zM50 50h-3.542L35.73 39.27l3.542-3.54L50 46.457z'  stroke-width='1' stroke='none' fill='hsla(340, 0%, 53%, 1)'/><path d='M25 21.458l-7.083-7.083-3.542 3.542L21.458 25l-7.083 7.083 3.542 3.542L25 28.542l7.083 7.083 3.542-3.542L28.542 25l7.083-7.083-3.542-3.542z'  stroke-width='1' stroke='none' fill='hsla(199, 0%, 23%, 1)'/><path d='M21.458 39.167L25 35.625l3.542 3.542L25 42.708zm0-28.334L25 7.292l3.542 3.541L25 14.375zM35.625 25l3.542-3.542L42.708 25l-3.541 3.542zM7.292 25l3.541-3.542L14.375 25l-3.542 3.542z'  stroke-width='1' stroke='none' fill='hsla(47, 0%, 0%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>"
                )`,
            },
        },
    },
    variants: {
        extend: { backgroundImage: ['dark'] },
    },
    plugins: [require('tailwindcss-debug-screens')],
};
