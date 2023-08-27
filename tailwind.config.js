/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    colors: {
      "timber": "#E7DCDA",
      "sky-dark": {
        100: "#A7CDBD",
        200: "#97C4B1",
        300: "#7CB69E",
        400: "#62A78A",
        500: "#519075",
        600: "#42765F",
        700: "#335B49",
        800: "#254134",
        900: "#16271F",
        950: "#161413",
      },
    },
    extend: {
      backgroundImage: {
        'milky-way': "url('/public/milky-way.png')",
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
