/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nerko': ['Nerko One', 'cursive'],
      },
      colors: {
        'quiz-pink': '#FF69B4',
        'quiz-orange': '#FF8C00',
        'quiz-yellow': '#FFD700',
        'quiz-blue': '#4169E1',
      }
    },
  },
  plugins: [],
}
