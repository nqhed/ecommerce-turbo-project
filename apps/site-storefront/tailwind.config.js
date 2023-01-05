/** @type {import('tailwindcss').Config} */
const storefrontUIConfigs = require("ui/site-storefront/configs/tailwind-custom.config");
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/site-storefront/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      //sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... } Tablet

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1600px",
      // => @media (min-width: 1600px) { ... }
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5.75rem",
        "2xl": "6rem",
      },
    },
    fontSize: storefrontUIConfigs.fontSize,
  },
  plugins: [],
};
