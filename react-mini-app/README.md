Just download this react-mini-app folder and run:
```npm install``` to get the node_modules forder with all the packages specified in package.json (and all dependencies)

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