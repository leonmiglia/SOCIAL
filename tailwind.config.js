/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'like': 'like .7s ease-out'
      },
      keyframes: {
        'like': {
          '0%': {transform: 'scale(1.5)'},
          '50%': {transform: 'scale(2.5)'},
          '100%': {transform: 'scale(1)'}
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

