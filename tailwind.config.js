module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: ['hover', 'focus'],
      screens: {
        'xxm': '500px', // min-width
        'xx300': '300px', // min-width
      },
    }
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    function ({addUtilities}) {
      const extendUnderline = {
          '.underline': {
              'textDecoration': 'underline',
              'text-decoration-color': '#9e9e9e'
          },
      }
      addUtilities(extendUnderline)
  }
  ],
}
