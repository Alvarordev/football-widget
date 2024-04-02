/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        light:['Light'],
        regular:['Regular'],
        medium:['Medium'],
        bold:['Bold']
      }
    },
  },
  plugins: [],
}

