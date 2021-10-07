// import tailwindMobile config
const tailwindMobile = require('tailwind-mobile/config');

// wrap config with tailwindMobile config
module.exports = tailwindMobile({
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
});