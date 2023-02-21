/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#7465ff",
        PrimaryDark: "#151932",
        Success: "#34c38f",
        Error: "#e11d48",
        Warning: "#f7b848",
        Background: "#0A0D1C",
        Active: '#314C77'
      },
      fontFamily: {
        Inter: ["Inter"],
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
  },
  plugins: [],
};
