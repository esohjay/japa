/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1100px",
      xl: "1440px",
    },
    extend: {
      colors: {
        mainColor: "#175616",
        textColor: "#282829",
        lightText: "#636466",
        bodyBg: "#F1F2F2",
        grayHoverColor: "#E4E6E6",
        hoverColor: "#F7F7F8",
        grayText: "#939598",
        sectionBg: "#F7F7F7",
      },
    },
  },
  plugins: [],
};
