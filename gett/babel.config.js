module.exports = {
  presets: ["@vue/app"],
  ignore: [
    "./src/lib/MUI/js/mui.js",
    "./src/lib/MUI/js/mui.min.js"
    ],
  plugins: ["transform-remove-strict-mode"]
};
