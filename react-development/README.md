<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [About app generation](#about-app-generation)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)
  - [Learn More](#learn-more)
    - [Code Splitting](#code-splitting)
    - [Analyzing the Bundle Size](#analyzing-the-bundle-size)
    - [Making a Progressive Web App](#making-a-progressive-web-app)
    - [Advanced Configuration](#advanced-configuration)
    - [Deployment](#deployment)
    - [`npm run build` fails to minify](#npm-run-build-fails-to-minify)
- [React app development - some basics](#react-app-development---some-basics)
  - [Usefull libraries:](#usefull-libraries)
  - [Props have children](#props-have-children)
  - [State vs props](#state-vs-props)
  - [Search field filter with functional component](#search-field-filter-with-functional-component)
  - [JSS withStyles:](#jss-withstyles)
  - [Store website in github for free - deploy](#store-website-in-github-for-free---deploy)
  - [Update packages for security reasons](#update-packages-for-security-reasons)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# About app generation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# React app development - some basics

```CSS
.alignedItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
``` 

## Usefull libraries:

```bash
# react is the engine, and for different views we install allong, different libraries, like react-dom, react-native
# react-native is used in mobile development to render android or iOS views
npm i --save reactstrap react react-dom # for desktop browsers we use  react-dom
npm i --save chroma-js
npm i --save bootstrap jquery popper.js
npm i --save react-router-dom
npm i --save copy-to-clipboard
npm i --save chroma-js
npm i --save @material/core @material-ui/core @material-ui/icons
npm i --save chroma-js
npm i --save uuid # generate unique ids
npm i axios # for ajax calls
npm i --save react-router-dom # use it with <BrowserRouter> component and <Switch><Route path=''></Switch>
```
## Props have children

Each component has the `props` object. If there are any elements given in between the starting and closing tag of a component, the the `props.children` object contains those elements

## State vs props

The state is an object that we pass down ( in the components tree) to child components - child components recevive the state as `props`
 NOTES:
1) minimize state and use has() method of Set type state...has(lt) could be checked with state.includes(lt)
2) parent component should be stateFULL, child components should be stateLESS, because each time the state changes, component reloads, all functions of that component are recreated
3) we architect  the component tree so that we put the state of the apropriate level ( only if there are child components interested in that state we move the state up so that all components requiring the state have access to it)

![lucidChart](./lucidChart-diagram.JPG)

* Use Google Fonts ( [fonts.google.com](fonts.google.com))

## Search field filter with functional component

A simple component that just takes some props and returns some HTML;
Use it if you think you do not need internal state, nor access life cicle methods because it is easier to test, smaller and easier to read.
Beacause we put the search field functionality inside a dedicated component we can easily reuse the component.

```JSX
const searchBox = ({ placeholder, handleChange }) => (

  <input type="search"
   placeholder = { placeholder }
   // use `onChange` syntetic event from JSX not `onchange` event from HTML
   onChange = { handleChange } /> // we DO NOT call methods or functions on events - React will call the functions/methods when render() happens -  just specify wich function should be called when the event happens
)
// ..
this.state = {
  monsters: [],
  searchField: ''
}

render() {
  const { monsters, searchField } = state;
  const filteredMonsters = monsters.filter(monster => monster.name.toLowercase().includes(searchField.toLowerCase()));
  return (
    <SearchBox 
      placeholder = 'search monsters'
      handleChange = { e =>
          this.setState=({ searchField: e.target.value }), // setState is a async function and we give a second param a callback fc
          () => {
            // .. this callback function runs immediatly after the setState finishes
          }
     }/>
    <RenderListComponent monstersProp={filteredMonster} />
  )
}
```

Thus, we have the state at some parent component level, where all the others component also have access to the state and we use the event handler system  of React - whenever a change happens, a handle event will update the state.

##  JSS withStyles:

```JavaScript

myArray.find(x=> x.id===id);
// JSS withStyles:
const styles = {
    backgroundColor: "pink";
    "& h4": {
        color: "white";
    }
}

// and use css classes grab it from of props:
const {classess} = this.props;
<div className={classes.backgroundColor}>
</div>
// pass properties to minipalet componet using destructuring
<Minipalet {...pallete} /> 

<Link to="./" onClick="(e) => e.stopPropagation()" > // after click go to page and stop executing any other functionality for onClick
```

## Store website in github for free - deploy

```bash
# connect the project to the repo, e.g. :
git remote add origin git@github.com:bitaemi/React-app-Hooks-Context-reducers.git # or use https instead of ssh
# include the github-pages package:
yarn add gh-pages
```
after this in package.json add:

```JSON
# the package.json file requires to be in the root of your repo
  "homepage": "https://bitaemi/github.io/React-app-Hooks-Context-reducers", 

// in "scripts" add:
// ..
    "predeploy": "yarn build", // build before deploy
    "deploy": "gh-pages -d build" // is going to serve that build to our github project
```
After that, run: 

```bash
yarn deploy # this will first predeploy and after that publish and create/update the gh-pages branch in your remote repo``
git add . # add your files and commit those on github
git commit -m "added github pages"
git push origin master # you do not have gh-pages branch on your local reppo archive
```
Go in the github interface and in repo's Settings -> Check that Source for gh-pages points to gh-pages branch - if not, set it up to do so.

## Update packages for security reasons

Make sure in your yarn.lock file the libraries/packages versions have the `^` caret symbol that means that whenever you install using `yarn install` it will try to get the latest version of the library.
The yarn.lock file ensures that everyone in the team uses a consisten version of these dependencies, listed in the instalation file.

```bash
yarn list react react-dom # list all packages you want to find about their version info
# in package-lock.json or yarn.lock add the `^` caret symbol to each lib you need the latest version
yarn install # reinstall dependencies
```