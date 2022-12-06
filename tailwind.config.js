/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'p-black': 'rgb(20, 20, 20)',
        'p-main': '#ff6600',
        'p-white': 'rgb(235, 235, 235)',
        'p-grey': 'rgb(30, 30, 30)'
      }
    },
  },
  plugins: [],
}
