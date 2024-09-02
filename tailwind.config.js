/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Yanone: ['Yanone Kaffeesatz', 'sans-serif'],
        Rubik: ['Rubik', 'sans-serif'],
      },

    },
  },
  plugins: [],
}