/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '770px', // Start at 770px
        'lg': '1025px',    // End at 1025px
      },
    },
  },
  plugins: [],
}