/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // container
      container: {
        screens: {
          "2xl": "1204px",
        },
      },
      colors: {
        primary: "#14b8a6"
      },
    },
  },
  plugins: [],
}

