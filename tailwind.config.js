/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          500: "#FFD700", // Gold
          600: "#E6C200", // Slightly darker gold
        },
        gray: {
          900: "#1A1A1A", // Dark grey
          800: "#2A2A2A", // Slightly lighter dark grey
          700: "#3A3A3A", // lightest dark grey
        },
      },
    },
  },
  plugins: [],
};