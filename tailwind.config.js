/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
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