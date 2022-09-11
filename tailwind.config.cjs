/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { "jm-yellow": "#ffcb08", "jm-blue": "#0e4ca1" },
    },
  },
  plugins: [],
};
