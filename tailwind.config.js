import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            transitionProperty: {
                'colors-shadow': 'background-color, border-color, color, fill, stroke, box-shadow',
            },
        },
    },
    plugins: [
        scrollbarHide
    ],
};