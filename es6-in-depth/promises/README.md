<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1. Promise creation](#1-promise-creation)
- [2. .fetch method](#2-fetch-method)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

- Synchronous programming refers to programs that run sequentially, from top to bottom, line by line, that may or may not encounter blocking operations that affect the run time.

- Asynchronous programming refers to programs that run on a looped operation and divert blocking operations to handlers in order maintain the run time.

- User interfaces and browsers implements systems based on asynchronous programming in order to handle the unpredictability of user events such as clicks, mouse moves, and more.

- HTTP or HyperText Transfer Protocol defines the foundation for data communication over the world wide web.

    HTTP Request methods include:

    - GET for retrieving data from a server

    - POST for sending data to a server

    - HEAD, DELETE, PATCH, and more…

### 1. Promise creation

- ES6 promises allow programs to handle asynchronous processes by representing values that will return at some point in the future.

- Promises can exist in one of the three following states: pending, fulfilled, and rejected.

```JavaScript
    // part 1:
    let promise1 = new Promise((resolve, reject) => {
    resolve('Resolved promise data');
    });

    promise1.then(response => console.log(response));

    // part 2:
    let promise2 = new Promise((resolve, reject) => {
    reject('Rejected promise data');
    });

    promise2.then(response => console.log(response))
    .catch(error => console.log(error));

    // part 3:
    let ppromise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolved promise data'), 3000);
    });

    promise3.then(response => console.log(response));
    console.log("after promise consumption");
```

### 2. .fetch method

The **Fetch** method begins to provide access in ES6 to HTTP request methods and grab data from APIs by returning a **PROMISE** that stands in for **resulting data**.

```JavaScript
    const root = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

    fetch(root, {method: 'GET'})
    .then(response => {
        // console.log(response);
        return response.json();
    })
    .then(json => console.log(json));
```

Quiz: 

1) Which HTTP request method retrieves data from a resource and has no secondary effect?

**a) GET** 

b) POST - HTTP request method sends data to a server for it to update existing resources.

c) HEAD - HTTP request method finds meta-information such as the title of a resource.


2) Which of the following demonstrates a proper use of the fetch API function? Assume that 'root' is defined: root = 'https://exampleapi/posts/1'.

**a) ``` fetch(root, {method: 'GET'})```**  - To consume the promised data, add a couple .then() statements to the fetch.

b) ```fetch().then(root).then(data => data.json())``` - The fetch function takes a path as its first parameter, and any specifications in an object as the optional second parameter.

Overall, all ES6 programmers must understand how to implement promises in ES6. But when you reduce the **Promise** down to the simple idea of **a stand in value for pending, fulfilled, and rejected state**, the concept becomes clear.

Plus, with promises you have the full power of the Internet’s vast array of APIs at your disposal. And when you can combine more than one API, you’ll have a truly awesome project on your hands.

That’s a closing promise!