/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backg':'#f5f5f4',
        'primary': '#c084fc',
        'secondary': '#9333ea',
        'tertiary': '#7e22ce',
      },
      fontFamily: {
      },
    },
  },
  plugins: [],
}