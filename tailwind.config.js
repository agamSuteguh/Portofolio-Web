/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.vue',
  ],

  theme: {
    extend: {
      colors: {
        navy: '#3C486B', // menambahkan warna 
        ylw:'#F9D949',
        rd:'#F45050'
      },
    },
  },
  plugins: [],
}

