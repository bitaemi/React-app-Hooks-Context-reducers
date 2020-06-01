<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Next.js - a framework using React library](#nextjs---a-framework-using-react-library)
- [Init a Next.js app](#init-a-nextjs-app)
- [Next.js pages](#nextjs-pages)
- [Next's Link Component](#nexts-link-component)
- [Next  fetching and Server API](#next--fetching-and-server-api)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# Next.js - a framework using React library

- enables page construction on Server side that has the benefits:
  1) speed for those small, slow devices, or very bad internet connection -  page is not created client side, there are less requests to the server
  2) for SEO resons - from server can be received a full HTML structure where BOTS cand search and find data

# Init a Next.js app

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
# Next.js pages 
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
To create links, inside the <Link> component you have to put the text for the link, inside a <a> tag.

# Next's Link Component
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

# Next  fetching and Server API
