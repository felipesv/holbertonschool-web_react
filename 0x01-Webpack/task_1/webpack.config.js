const path = require("path");

module.exports = {
  mode: 'production',
  entry: {
    app: './js/dashboard_main.js',
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
