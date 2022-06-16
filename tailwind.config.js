const theme = require('./theme.json')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: theme,  // https://www.color-hex.com/color/00bfa6
  },
  plugins: [],
}
