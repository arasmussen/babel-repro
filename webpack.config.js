const path = require("path");

const webpack = require("webpack");
const TerserJSPlugin = require("terser-webpack-plugin");

const WebpackConfig = {
  bail: true,

  devtool: "source-map",

  entry: {
    app: "./index.js",
  },

  mode: "production",

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        include: [path.resolve(`${__dirname}`)],
        use: [
          {
            loader: "babel-loader",
            options: {
              // plugins: [
              //   ["@babel/plugin-transform-class-properties", { loose: true }],
              //   ['@babel/plugin-transform-nullish-coalescing-operator', { loose: true }],
              //   '@babel/plugin-transform-numeric-separator',
              //   ['@babel/plugin-transform-optional-chaining', { loose: true }],
              // ],
              presets: [
                [
                  "@babel/preset-env",
                  {
                    bugfixes: true,
                    corejs: "3.36",
                    debug: true,
                    loose: true,
                    shippedProposals: true,
                    useBuiltIns: "usage",
                  },
                ],
                // "@babel/preset-react",
                // "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
        extractComments: false,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },

  output: {
    filename: "[name].js",
    path: path.resolve(`${__dirname}/build`),
    publicPath: "https://example.com",
    sourceMapFilename: `[name].js.map`,
  },
};

module.exports = WebpackConfig;
