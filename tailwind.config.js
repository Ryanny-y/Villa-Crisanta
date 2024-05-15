/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'gold-1': "#DD9603",
        'black-1': '#202020',
        'white-1': '#FAFAFA'
      },
      height: {
        '5-h': '31rem',
      },
      spacing: {
        '66': '17.5rem',
        '68': '19rem'
      }
    },
  },
  plugins: [],
}

