/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0038ba',
        secondary: '#282828',
        secondarygray: '#f5f5f5',
        darkprimary: '#0a0a0a',
      },
      fontFamily: {
        primary: ['Outfit','sans-serif'],
        secondary: ['Outfit','sans-serif'], 
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        'body': {
          fontFamily: theme('fontFamily.secondary'),
        },
      })
    },
  ],
}
