/** @type {import('tailwindcss').Config} */
const {
  container,
  fontWeight,
  fontSize,
  screens,
} = require("ui/configs/tailwind-custom.config");
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/component/**/*.{ts,tsx}",
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
