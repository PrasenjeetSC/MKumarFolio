/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: '#7c3aed',
        soft: '#fdf4ff'
      }
    }
  },
  plugins: []
};