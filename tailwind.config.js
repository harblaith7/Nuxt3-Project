/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      width: {
        "3/10": "30%",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
