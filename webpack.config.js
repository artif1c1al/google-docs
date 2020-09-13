const path = require('path')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const filename = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.ts'],
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // alias: {
    //   '@': path.resolve(__dirname, 'src'),
    //   '@core': path.resolve(__dirname, 'src/core')
    // }
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    port: 3000,
    hot: isDev
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: 'index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      }
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, 'src/favicon.ico'),
      to: path.resolve(__dirname, 'dist')
    }]),
    new MiniCssExtractPlugin({
      filename: filename('css')
    })
  ],
  module: {
    rules: [{
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}





// const path = require("path")
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
// const HTMLWebpackPlugin = require('html-webpack-plugin')
// const {
//   CleanWebpackPlugin
// } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');



// module.exports = {
//   context: path.resolve(__dirname, 'src'),
//   mode: "development",
//   entry: "./index.ts",
//   devtool: "inline-source-map",

//   devServer: {
//     stats: {
//       children: false, // Hide children information
//       maxModules: 0, // Set the maximum number of modules to be shown
//     },
//     // contentBase: './dist',
//     port: 3001,
//   },

//   resolve: {
//     extensions: [".tsx", ".ts", ".js"],
//   },

//   output: {
//     publicPath: "dist", // Как это работает?
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "./dist"),
//   },

//   plugins: [
//     new CleanWebpackPlugin(),
//     new HTMLWebpackPlugin({
//       template: './index.html',
//     }),
//     new MiniCssExtractPlugin({
//       filename: 'bundle.css'
//     })
//   ],

//   optimization: {
//     minimize: true,
//     minimizer: [new CssMinimizerPlugin()],
//   },

//   module: {
//     rules: [{
//         // enforce: "pre",
//         test: /\.js$/,
//         exclude: /node_modules/,
//         // loader: "eslint-loader",
//       },
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env"],
//             plugins: ["@babel/plugin-proposal-object-rest-spread"],
//           },
//         },
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: ["file-loader"],
//       },
//       {
//         test: /\.tsx?$/,
//         use: "ts-loader",
//         include: [path.resolve(__dirname, "src")],
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           // Creates `style` nodes from JS strings
//           "style-loader",
//           // Translates CSS into CommonJS
//           "css-loader",
//           // Compiles Sass to CSS
//           "sass-loader",
//         ],
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: ["file-loader"],
//       },
//     ],
//   },
// };