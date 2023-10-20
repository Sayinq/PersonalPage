/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {},
    extend: {
      backgroundImage: {
        'hero-video': "url('./src/assets/Predicted.mp4')",
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
  plugins: [],
}

