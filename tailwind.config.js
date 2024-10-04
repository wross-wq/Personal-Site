const {nextui} = require("@nextui-org/react");

module.exports = {
  content: ["./src/**/*./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],tailwindcss: {},
  autoprefixer: {},
}