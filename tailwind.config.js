const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.jsx",
    "./src/pages/order/*.{jsx, html, js}",
    "./src/**/**/*.{jsx, js, html}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
      body: ["Roboto", "sans-serif"],
    },
    extend: {},

    colors: {
      slate: "#0f172a",
    },
  },
  plugins: [],
});
