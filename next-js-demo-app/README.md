<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Next.js - a framework using React library](#nextjs---a-framework-using-react-library)
  - [Init a Next.js app](#init-a-nextjs-app)
  - [Next.js pages](#nextjs-pages)
  - [Next's Link Component](#nexts-link-component)
  - [Share code between pages - manual chice](#share-code-between-pages---manual-chice)
  - [Customise APP overriding _app.js](#customise-app-overriding-_appjs)
- [Next  fetching and Server API](#next--fetching-and-server-api)
  - [Use getInitialProps to fetch data APIs](#use-getinitialprops-to-fetch-data-apis)
  - [Query Strings in Next](#query-strings-in-next)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# Next.js - a framework using React library

- enables page construction on Server side that has the benefits:
  1) speed for those small, slow devices, or very bad internet connection -  page is not created client side, there are less requests to the server
  2) for SEO resons - from server can be received a full HTML structure where BOTS cand search and find data

## Init a Next.js app

  ```bash
  npm init -y # generates the package.json
  npm install --save react react-dom next # beacause we do not use create-react-app we need to install react and react-dom
  mkdir pages # the pages dir is required
  cd pages
  touch index.js # the index.js file is required
  ```
  In order to run the app in package.json we need to add some scripts:

  ```JSON
  {
  "name": "next-js-demo-app",
  "version": "1.0.0",
  "description": "Demo for Next.js",
  "main": "index.js",
  "scripts": {
    "dev": "next", // npm run dev
    "build": "next build", // npm run build
    "start": "next start" // npm run start
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
## Next.js pages 
In the index.js we have something like:

```JavaScript
const NameByChoice = () => (
    <div>
        <h1> Here is the APP</h1>
    </div>
);
export default NameByChoice;
```

The URL path has to match the name of the file existent in pages directory.
To create links, inside the <Link> component you have to put the text for the link, inside a <a> tag or a <button>, <card> or something custom.

## Next's Link Component
```JavaScript
import Link from "next/link";

const ContactPageNameByChoice = () => (
    <div>
        <Link href='/'>
        <a>Link to the Index Page</a>
        </Link>
        // ...
```        
The initial pages loads are on server-side. If the user refreshes the page or navigates inside the side, the page loads on client side.
## Share code between pages - manual chice

Add a folder to store all components you need to include in your pages.

```JavaScript
import NavbarComp from "../components/navbar";
const ContactPageNameByChoice = () => (
    <div>
        <NavbarComp/>
        {/* and the rest of the component here ... */}
```  
## Customise APP overriding _app.js

A better way to share components between pages is to customize your APP, by overriding the _app.js file from .next folder. Thus, add the pages/_app.js file.

```JavaScript
// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
```
# Next  fetching and Server API

Fetching data inside componentDidMount (component shows up in the DOM), will get the data only on client-side. In our case, we want to get data on server-side.
Fetching data is not done in the constructor because the calls will be done twice (both client and server side)

## Use getInitialProps to fetch data APIs

Solution: use getInitialProps from next.js to fetch the data (first fetch server-side, but when navigating between pages, fetches will be on client-side).
getInitialProps receives a context object with the following properties: pathname, query, asPath, req, res, err

```JavaScript
const NameByChoice = ({ posts }) => {
    return (
        <div>
            <ul>
                {posts.map(posts => (
                <li key="post.id">
                    {posts.title}
                </li>))}
            </ul>
        </div>
    );
}

NameByChoice.getInitialProps = async () => {
    const response = await axios.get("http://jsonplaceholder.typicode.com/posts");
    const { data } = response;
    return { posts: data, mood: "Happy!!!" }; // the NameByChoice component will have the posts and mood properties
};

```

## Query Strings in Next

For custom routes we use query strings:

```JavaScript
<Link href={`/post?id=${post.id}`}>
  <a>{post.title}></a>
</Link>
```

In this case we could use the query property from the context object of `getInitialProperties`, or better we use the `withRouter`, a higher order component from `next/router`;

```JavaScript
const Post = props => {
    console.log(props);
    return (
        <h1 key={props.id}>
            ({props.id})
        </h1>
    )};
    
export default withRouter(Post);
```
or use the `getInitialProperties`:

```JavaScript
Post.getInitialProps = async ({ query }) => {
    console.log(query);
    const response = await Axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
    const { data } = response;
    return { ...query, comments: data };
};
```

# Custom Server Without Express

Next.js already uses a server in order to handle routes paths according to files names from pages directory.

We override the server configuration by adding a file in the main directory and change the configuration in package.json like this:

```json
 "scripts": {
    "dev": "node basic-server.js",
    "build": "next build",
    "start": "NODE_ENV=production node basic-server.js"
  }
```
And the server side has a CUSTOM SERVER SIDE ROUTE, like shown below:

```JavaScript
// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/chicken') {
        app.render(req, res, '/contact', query);
    }
        else {
              handle(req, res, parsedUrl);
    }
  
  }).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
```
This is a limited, simple version of custom routing - for complicated routes we need regex. Thus, is better to use Express server.

# Match Routes Using Express

All routes are handled by express, excepte custom route:

```JavaScript
    server.get("/p/:id", (req, res) => {
        // app.render(req, res, "/post", {id: req.params.id, color: pink}); // this also works
        app.render(req, res, "/post", {id: req.params}); // params contains the id which is used in the route structure, thus this will work
    });
```    

```JavaScript
// express-server.js
const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express();

    server.get("/p/:id", (req, res) => {
        app.render(req, res, "/post", {id: req.params.id, color: pink});
    });
    server.get("*", (req, res) => {
        return handle(req, res);
    });
    server.listen(3000, (err) => {
        if (err) { throw err; }
        console.log('> Ready on http://localhost:3000')
    })
})
```