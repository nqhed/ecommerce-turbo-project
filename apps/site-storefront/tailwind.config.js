/** @type {import('tailwindcss').Config} */
const {
  container,
  fontWeight,
  fontSize,
  screens,
} = require("ui/site-storefront/configs/tailwind-custom.config");
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
