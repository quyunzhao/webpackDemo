const path = require("path");

module.exports = (env) => {
  // Use env.<YOUR VARIABLE> here:
  console.log("Goal: ", env.goal); // 'local'
  console.log("Production: ", env.production); // true

  return {
    mode: "development",
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
  };
};
