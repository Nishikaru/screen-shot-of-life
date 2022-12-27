/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        skin:{
          light:'var(--MainText-color-light)',
          dark:'var(--MainText-color-dark)'
        }
      },
      backgroundColor:{
        skin:{
          LightMain:'var(--MainBg-color-light)',
          LightSec:'var(--SecBg-color-light)',
          DarkMain:'var(--MainBg-color-dark)',
          DarkSec:'var(--SecBg-color-dark)'
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
