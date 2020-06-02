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

Solution: use getInitialProps from next.js to fetch the data (first fetch server-side, but when navigating between pages, fetches will be on client-side)

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

For custom routs we use query strings:

``<link href={`post?id=${post.id}`}>