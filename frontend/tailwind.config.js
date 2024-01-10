/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      correct: '#6BAA63',
      nearly: '#C9B458',
      inCorrect: '#787C7E'
    }
  },
  plugins: [],
}

