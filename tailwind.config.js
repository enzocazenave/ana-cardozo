/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      '1440': '1440px',
      '1366': '1366px',
      '1280': '1280px',
      '1024': '1024px',
      '800': '800px',
      '520': '520px'
    },
    extend: {
      colors: {
        'light-pink': '#FFE6E9',
        'pink': '#B76E77'
      },
      lineHeight: {
        sans: '28px',
        serif: '96px'
      }
    },
    fontFamily: {
      'sans': ['Nunito Sans'],
      'serif': ['Playfair Display']
    }
  },
  plugins: [],
}