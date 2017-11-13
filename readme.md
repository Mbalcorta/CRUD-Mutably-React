
## Initialize NPM

In your project directory, run:

```
npm init -y
```

## Install Dependencies

```
npm install --save webpack react react-dom babel-core babel-loader babel-preset-es2015 babel-preset-react
```

## Configure Webpack()
- Make a file `webpack.config.js` and paste the following

``` js
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

- Create `index.html` and paste the following 

```html
<!DOCTYPE html>
<html>
<head>
	<title>CRUD Mutably</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css">
	<link href="https://fonts.googleapis.com/css?family=Anonymous+Pro" rel="stylesheet">
	<link rel="stylesheet" href="./index.css">
	<script src="bundle.js"></script>
</head>
<body>
	<div id='root'/>
</body>
</html>
```

- Create a file `index.css` and paste the following 

``` css
body {
  background: deepskyblue;
}
```

- Create a file `app.jsx` and paste the following 

```js
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(
	<div>
    <h1>Welcome To React</h1>
	</div>, root);
});
```

* Run `npm run webpack` in your terminal, then open `index.html`. Congratulations:
you're up and running!
