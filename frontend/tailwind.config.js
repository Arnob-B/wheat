/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        istok: ['"Istok Web"', 'sans-serif'],
      },
      backgroundImage: {
        'wheatBg': "url('./src/assets/recipe.jpg')"
      }
    },
  },
  plugins: [],
}

