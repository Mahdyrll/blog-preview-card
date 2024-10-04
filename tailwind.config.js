/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      'extrabold': './assets/fonts/static/Figtree-ExtraBold.ttf',
      'semibold': './assets/fonts/static/Figtree-SemiBold.ttf',
      'italic': './assets/fonts/Figtree-Italic-VariableFont_wght.ttf',
      'Figtree': './assets/fonts/Figtree-VariableFont_wght.ttf'
    },
    extend: {
      screens: {
        'laptop': '376px'
      },
    },
  },
  plugins: [],
}

