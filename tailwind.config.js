/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0038ba',
        secondary: '#282828',
        secondarygray: '#f5f5f5',
      },
      fontFamily: {
        primary: ['Outfit','sans-serif'],
        secondary: ['Outfit','sans-serif'], 
      },
    },
  },
  plugins: [],
}

