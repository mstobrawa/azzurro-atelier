/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "azzurro-cream": "#f0e8db",
        "azzurro-brown": "#52220e",
        "azzurro-brown-light": "#7a3d23", // opcjonalnie
        "azzurro-contrast": "#2c1a10", // np. do nagłówków
        "azzurro-white": "#fffaf4", // cieplejszy biały, opcjonalnie
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
