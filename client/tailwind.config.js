/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0B0A0F',
        'dark-card': '#232327',
        'dark-border': '#3C3B3F',
        'text-primary': '#FCFCFC',
        'text-secondary': '#CECECF',
        'text-tertiary': '#9D9D9F',
        'text-disabled': '#6D6C6F',
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
