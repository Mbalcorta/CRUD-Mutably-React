
## Initialize NPM

In your project directory, run:

```
npm init --y
```

## Install Dependencies

```
npm install --save webpack react react-dom babel-core babel-loader babel-preset-es2015 babel-preset-react
```

## Configure Webpack()
- Make a file in your project directory: `webpack.config.js` and paste the following
```
var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./app.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};

```

- Add a `webpack` script for webpack to your `package.json` (`"webpack": "webpack --watch"`)


* Run `npm run webpack` in your terminal, then open `index.html`. Congratulations:
you're up and running!
