/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                dm: ['"DM Sans"', 'sans-serif'],
                bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}