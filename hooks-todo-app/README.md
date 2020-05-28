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
- [React Hooks - are great!](#react-hooks---are-great)

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


#----------------------------------------- The modern React Bootcamp notes -----------------------------------------

```CSS
.alignedItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
``` 

 NOTES:
1) minimize state and use has() method of Set type state...has(lt) could be checked with state.includes(lt)
2) parent component should be stateFULL, child components should be stateLESS, because each time the state changes, component reloads, all functions of that component are recreated

![lucidChart](./lucidChart-diagram.JPG)

* Use Google Fonts


```bash
# Usefull libraries:
npm i --save reactstrap react react-dom
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

# React Hooks - are great!

```JavaScript
import React, { useState, useEffect } from "react";
import axios from "axios";

function SWMovies() {
  // number is the property from state that changes with the callback of setNumber ??
  const [number, setNumber] = useState(1); // initial state is 1
  const [movie, setMovie] = useState("");
  
  // useEffect is = to ngOnChanges from Angular - executes wach time detects a change and first time before ngOnInit
 
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://swapi.co/api/films/${number}/`);
      setMovie(response.data);
    }
    getData();
  // thus pay attention when fetching data inside useEffect !!! Always pass the second parameter - the condition to
  // execute the async function only when one of the elements from second parameter change (here : 'number')
  }, [number]);

  return (
    <div>
      <h1>Pick A Movie</h1>
      <h4>{movie.title}</h4>
      <p>{movie.opening_crawl}</p>
      <select value={number} onChange={e => setNumber(e.target.value)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>
    </div>
  );
}
export default SWMovies;
```

# Context in React is about passing properties between a component and distant components (in the component tree)