module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#fcfcfd',
        secondary: '#9f9eba',
        main: '#0D3883',
        'field-bg': '#0e0558',
        'field-border': '#3b6efe',
        bg: '#090043',
        separator: '#201b61',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
