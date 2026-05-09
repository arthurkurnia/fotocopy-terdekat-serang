/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        dark: '#0F0F0F'
      }
    },
  },
  plugins: [],
}