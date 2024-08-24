/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const { nextui } = require("@nextui-org/react");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      noto: "'Noto Sans Arabic', sans-serif",
    },
    colors: {
      white: "#F6F8FC",
      blue: "#D4E7FF",
      buttonBlue: "#2E6FF4",
      darckBlue: "#2E6FF4",
      gray: "#E0E6EE",
      darkGray: "#262F44",
      lightGray: "#EEF4FA",
      lightText: "#58647C",
      tableHead: "#050B19",
      statusGreen: "#66E6B0",
      statusRed: "#F9979B",
      statusY: "#FAD141",
      borderTable: "#C6D0E0",
    },
  },
  darkMode: "class",

  plugins: [nextui],
});
