<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Full configuration tutorial for  Webpack](#full-configuration-tutorial-for--webpack)
  - [1) install for dev env the packages - the webpack bundling functionality and cli 2 distinct libraries](#1-install-for-dev-env-the-packages---the-webpack-bundling-functionality-and-cli-2-distinct-libraries)
  - [2) in package.json file add the following scripts:](#2-in-packagejson-file-add-the-following-scripts)
    - [2a) in your terminal window (eg; git.bash) invoke webpack for your env:](#2a-in-your-terminal-window-eg-gitbash-invoke-webpack-for-your-env)
  - [3)To configure webpack create a webpack.config.js](#3to-configure-webpack-create-a-webpackconfigjs)
    - [3a)run the start command](#3arun-the-start-command)
  - [4)For dev env we should be able to develop without runnig all the time the start command-  for this we install webpack-dev-server:](#4for-dev-env-we-should-be-able-to-develop-without-runnig-all-the-time-the-start-command---for-this-we-install-webpack-dev-server)
    - [4a) modify the start script from package.json](#4a-modify-the-start-script-from-packagejson)
    - [4b) add an index.html file into build output folder and include inside the bundle.js](#4b-add-an-indexhtml-file-into-build-output-folder-and-include-inside-the-bundlejs)
    - [4c) in the config js file add:](#4c-in-the-config-js-file-add)
    - [4d) run npm start and inspect at http://localhost:3000](#4d-run-npm-start-and-inspect-at-httplocalhost3000)
  - [5) Install babel transpiler libraries:](#5-install-babel-transpiler-libraries)
    - [5a)for babel we add into the config file the rules for the module](#5afor-babel-we-add-into-the-config-file-the-rules-for-the-module)
    - [5b) Create the file .babelrc and add as prerequisite the "env" variable](#5b-create-the-file-babelrc-and-add-as-prerequisite-the-env-variable)
  - [Other notes:](#other-notes)
- [Colt's webpack config](#colts-webpack-config)
  - [package.json includes](#packagejson-includes)
  - [Webpack.common.js is the following](#webpackcommonjs-is-the-following)
  - [webpack.dev.js:](#webpackdevjs)
  - [And webpack.prod.js config file is:](#and-webpackprodjs-config-file-is)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Full configuration tutorial for  Webpack

- use it with Babel in order to  convert any ES6 file into Js files that browser can handle.
- bundles modules into one .js file  
- handles dependencies, very configurable
- improves considerably the loading time of pages and prevents errors
- comes with a dev-server
- https://github.com/webpack/webpack
to have npm, install node on your sistem from node.js website
cd in the new dir for your prj and init node package manager:

``npm init -y``

## 1) install for dev env the packages - the webpack bundling functionality and cli 2 distinct libraries

 ``npm i webpack@4.12.0 webpack-cli@3.0.3 --save-dev ``
 - to open the dir in Visual Studio Code Editor type: `` code .``

## 2) in package.json file add the following scripts:

```bash
  "start": "webpack --mode development",
  "build": "webpack --mode production"
```
### 2a) in your terminal window (eg; git.bash) invoke webpack for your env:
  
```bash
  npm run start # this will run the first script and generate the dist folder with a main.js for dev - make sure you have a .js file inside your src folder
  npm run build  # runs the second script and the main.js generated file in dist folder is a minified one - for use in production
```

## 3)To configure webpack create a webpack.config.js

  webpack.config.js contains:
 - the inclusion of module path
 - an object with the following properties:
 - the entry - the src folder for compilation
 - the outup - the destination folder and js file
    
    https://github.com/bitaemi/es6-in-depth-tutorial/blob/master/webpack.config.js
    
### 3a)run the start command 
 - this time will use your configuration parameters (you can delete now the dist folder because the  output  from config will be used from now on):
    ``npm run start``
## 4)For dev env we should be able to develop without runnig all the time the start command-  for this we install webpack-dev-server:


`` npm i webpack-dev-server@3.1.4 --save-dev``
  
### 4a) modify the start script from package.json
  ```"start": "webpack-dev-server --mode development"```
  ### 4b) add an index.html file into build output folder and include inside the bundle.js
  ### 4c) in the config js file add:
  ```JavaScript 
  devServer: {
    port: 3000,
    contentBase: path.resolve(_dirname, 'build')
    }
  };
  ```

### 4d) run npm start and inspect at http://localhost:3000
 - you will see that your browser refreshes automaticaly when you save your files in code editor

## 5) Install babel transpiler libraries:

```bash
  npm i babel-core@6.26.3 babel-loader@7.1.4 babel-preset-env@1.7.0 --save-dev
```
### 5a)for babel we add into the config file the rules for the module
  ```JavaScript
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
  ```
### 5b) Create the file .babelrc and add as prerequisite the "env" variable

Create inside the project directory, the hidden file, .babelrc and add as prerequisite the "env" variable.

## Other notes:

These mini apps were made in scope of Webpack learning purpose.

Just download this webpack-config-babel folder and run:
```npm install``` to get the node_modules forder with all the packages specified in package.json (and all dependencies)

# Colt's webpack config 

Another webpack config is here:
[https://github.com/bitaemi/webpack-demo-app](https://github.com/bitaemi/webpack-demo-app) where:

## package.json includes

In  package.json we need:
```json
"main": "index.js",
  "scripts": {
    "start": "webpack-dev-server  --config webpack.dev.js --open",
    "build": "webpack --config webpack.prod.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
     "bootstrap": "^4.3.1",
    "css-loader": "^2.1.0",
    "file-loader": "^3.0.1", 
    "html-loader": "^0.5.5",// this helps with image loading - should have images in src/assets
    "html-webpack-plugin": "^3.2.0",
    "jquery": "^3.3.1",
    "mini-css-extract-plugin": "^0.5.0",
    "node-sass": "^4.11.0",
    "optimize-css-assets-webpack-plugin": "^5.0.1",
    "popper.js": "^1.14.7",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.2.3",
    "webpack-dev-server": "^3.2.1",
    "webpack-merge": "^4.2.1"
  },
  "dependencies": {
    "clean-webpack-plugin": "^2.0.0" // after each build deletes the old generated main.js files
  }
  ```
## Webpack.common.js is the following

```JavaScript
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs" // make copies  of images into dist/imgs folder
          }
        }
      }
    ]
  }
};
```
## webpack.dev.js:
```JavaScript
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM - to speed up development(page reload) !!! we do not want this in prod
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});
```
## And webpack.prod.js config file is:

```JavaScript
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin"); // this plugin is used by default by Webpack in order to minify files
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});

```

[The complete guide for starting React App with Webpack 4 with Babel 7](https://www.valentinog.com/blog/react-webpack-babel/)

[Details on html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/blob/master/README.md)

Now you'll also notice that it seems like we're using HTML in our Javascript file.

However this isn't actually HTML, it's called JSX.

JSX and ES6 adds XML like or HTML like syntax markup to Javascript, in order to mirror components of the screen.

JSX is a structure that we use within React to create our components.

Notice that our React application div shows up.

Next up let's export this logic into another module.

We'll get React a show-up from outside the index.js file, from an external component.

You can also add packages allong your development,  running commands like:

```npm install babel-preset-react react react-dom react-bootstrap --save-dev```

This will install the presets that tell our webpack configuration file to transpile react files.

It will install React itself and the React DOM, which handles rendering react components onto the browser user

interface and it will also give us the React Bootstrap package which makes selling easier in React projects.