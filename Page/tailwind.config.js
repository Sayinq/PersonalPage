const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {},
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2440px',
      },
      colors: {
        'coolblack': '#0D0D0D',
        'offwhite-bg': '#EFEFED',
        'offwhite': '#B7AB98',
        'rusticoffwhite': '#5B554C',
        'beachblue': '#BDE7F3',
      }
    },
  },
  darkmode: "class",
  plugins: [nextui()],
};

