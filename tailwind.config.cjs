
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary": "#005CFF",
        "primary-hover": "#1a58c2",
        black: "#2C2C2C",
        "black-hover": "#343434",
        grey: "#A3A3A3",
        white: "#E2E2E2",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    backgroundImage: {
      "detail-1": "url('./assets/detail-1.png')",
      "detail-2": "url('./assets/detail-2.png')",

    }
  },
  plugins: [],
}
