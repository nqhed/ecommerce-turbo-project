/** @type {import('tailwindcss').Config} */
const {
  container,
  colors,
  boxShadow,
  fontWeight,
  fontSize,
  screens,
} = require("../../packages/ui/configs/tailwind-custom.config.js");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: fontWeight,
    },
    screens: screens,
    boxShadow: boxShadow,
    container: container,
    colors: colors,
    fontSize: fontSize,
  },
  plugins: [],
};
