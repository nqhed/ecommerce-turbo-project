/** @type {import('tailwindcss').Config} */
const {
  container,
  fontWeight,
  fontSize,
  screens,
} = require("../../packages/ui/site-storefront/configs/tailwind-custom.config.js");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/site-storefront/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: fontWeight,
    },
    screens: screens,
    container: container,
    fontSize: fontSize,
  },
  plugins: [],
};
