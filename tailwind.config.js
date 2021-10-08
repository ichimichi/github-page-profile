module.exports = {
  purge: { enabled: true, content: ["./src/**/*.html", "./src/**/*.js"] },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ["top", "left"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
