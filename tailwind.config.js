/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js','./public/*{html}'],
  theme: {
    extend: {},
    colors: {
      "green_dark":"#122620",
      "green_light":"#54B093",
      "text_white":"#FAFAFA",
      "text_black":"#1D1D1D",
    },
    fontFamily:{
      "cormorant":'Cormorant Garamond, serif',
      "proza":"Proza Libre, sans-serif"
    }
  },
  
  plugins: [],
}
