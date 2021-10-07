module.exports = {
  syntax: "postcss-scss",
  purge: ["./src/public/**/*.html", "./src/public/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  parser: "postcss-scss",
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
