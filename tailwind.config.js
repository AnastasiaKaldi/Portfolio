/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#1D0515",
        wine: "#350616",
        blood: "#550816",
        crimson: "#6A040F",
        scarlet: "#9A0D1B",
        cream: "#E6CDB5",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
