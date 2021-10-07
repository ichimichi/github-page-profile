module.exports = {
  syntax: "postcss-scss",
  purge: { enabled: true, content: ["./src/**/*.html", "./src/**/*.js"] },
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
