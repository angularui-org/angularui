/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./projects/components/src/**/*.{html,ts,css,scss}"
    
  ],
  safelist: [
    {
      pattern: /bg-(red|green|blue|orange|emerald)-(100|500|700)/, // You can display all the colors that you need
    },
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        'primary': { ...colors.indigo, DEFAULT: colors.indigo['700'] },
        'primary-foreground': colors.white,
        'secondary': { ...colors.indigo, DEFAULT: colors.indigo['900'] },
        'secondary-foreground': colors.white,
        'success': { ...colors.green, DEFAULT: colors.green['700'] },
        'success-foreground': colors.white,
        'warning': { ...colors.yellow, DEFAULT: colors.yellow['700'] },
        'warning-foreground': colors.white,
        'danger': { ...colors.red, DEFAULT: colors.red['700'] },
        'danger-foreground': colors.white
      }
      // backgroundColor: {
      //   primary: {...colors.slate, DEFAULT: colors.slate['700']}
      // },
      // textColor: {
      //   'primary': colors.white
      // }
    },
  },
  plugins: [],
}

