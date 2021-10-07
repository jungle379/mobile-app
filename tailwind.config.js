// import tailwindMobile config
import tailwindMobile from 'tailwind-mobile/config';

// wrap config with tailwindMobile config
export default tailwindMobile({
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