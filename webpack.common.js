const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// ServiceWorkers
const WorkboxPlugin = require("workbox-webpack-plugin");

// 模块联邦
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  entry: {
    index: "./src/index.ts",
    // home: ["./src/home.js", "./src/home.scss"],
    // account: ["./src/account.js", "./src/account.scss"],
  },
  resolve: {
    // 文件扩展名来解析，此选项会告诉解析器在解析中能够接受那些扩展名（例如 .js，.jsx）。
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  module: {
    rules: [
      { test: /\.css$/, use: "css-loader" },
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({ template: "./src/index.html" }),
    // new WorkboxPlugin.GenerateSW({
    //   // 这些选项帮助快速启用 ServiceWorkers
    //   // 不允许遗留任何“旧的” ServiceWorkers
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        app1: `promise new Promise(resolve => {
          const urlParams = new URLSearchParams(window.location.search)
          const version = urlParams.get('app1VersionParam')
          // This part depends on how you plan on hosting and versioning your federated modules
          const remoteUrlWithVersion = 'http://localhost:3001/' + version + '/remoteEntry.js'
          const script = document.createElement('script')
          script.src = remoteUrlWithVersion
          script.onload = () => {
            // the injected script has loaded and is available on window
            // we can now resolve this Promise
            const proxy = {
              get: (request) => window.app1.get(request),
              init: (arg) => {
                try {
                  return window.app1.init(arg)
                } catch(e) {
                  console.log('remote container already initialized')
                }
              }
            }
            resolve(proxy)
          }
          // inject this script with the src set to the versioned remoteEntry.js
          document.head.appendChild(script);
        })
        `,
      },
      exposes: {
        home: "./src/home",
        account: "./src/account",
      },
    }),
  ],
};
