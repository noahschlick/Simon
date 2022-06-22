/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PressStart2P: ["Press Start 2P", "cursive"]
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}