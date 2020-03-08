// Librerías
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index.js",
  mode: isProduction ? "production" : "development",
  output: {
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.ico",
      manifest: "/public.manifest.json"
    })
  ],
  devServer: {
    hot: true,
    contentBase: "./build",
    historyApiFallback: true,
    port: 3000,
    proxy: [
      {
        context: ["/songs", "/albums", "/images", "/music"],
        target: "http://localhost:3001"
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      Components: path.resolve(__dirname, "src/Application/components/")
    }
  }
};
