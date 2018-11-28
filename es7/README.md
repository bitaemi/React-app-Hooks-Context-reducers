<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1. ES7 fetures](#1-es7-fetures)
- [2. Proposals - Async](#2-proposals---async)
- [3. Proposals - Objects](#3-proposals---objects)
- [Recap](#recap)
- [Quiz](#quiz)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 1. ES7 fetures

```JavaScript
    // part 1:
    let a = Math.pow(2, 5);
    console.log(a);

    // part 2:
    let a = 2**5;
    console.log(a);

    // part 3:
    let b = "wonderful".includes("wonder");
    console.log(b);

    // part 3:
    let b = [2, 3, 4, 5, 6].includes(7);
    console.log(b);

```
### 2. Proposals - Async

```JavaScript
    // all parts:
    async function async_one() {
    return "one";
    }

    // part 1:
    async_one().then(response => console.log(response));

    // part 2:
    async function async_two() {
    throw new Error('Issue with async!');
    }
    async_two().catch(error => console.log(error));

    // part 3:
    async function async_two() {
    return "two"
    }

    // part 4:
    async function async_three() {
    const one = await async_one();
    console.log(one);
    const two = await async_two();
    console.log(two);
    }
    // async_three();

    // part 5:
    async function async_four() {
    const [res_one, res_two] = await Promise.all([
        async_one(), async_two()
    ])
    console.log(res_one, res_two);
    }
    async_four();
```
### 3. Proposals - Objects

```JavaScript
    // parts 1-2:
    let obj = {
    a: 'one',
    b: 'two',
    c: 'three'
    }

    // part 1:
    let keys = Object.keys(obj);
    console.log(keys);

    // part 2:
    let values = Object.values(obj);
    console.log(values);

    // part 3:
    let entries = Object.entries(obj);
    console.log(entries);

    // part 4:
    for (let entry of entries) {
    console.log(`key: ${entry[0]} | value: ${entry[1]}`);
    }
```
In order to work with ES7 and respectively ES8 features you have to run:

`npm install babel-preset-latest --save-dev`

### Recap

ES7 released the new exponent operator which replaces ```Math.pow(x, y)``` with ```x ** y```;

ES7 standardized the ```.includes()``` method for arrays which checks if an element exists within an array collection.

```Object.values()``` returns an array of an object’s values as part of the new ES proposal to improve the Object prototype.

```Object.entries()``` returns an array of an **object’s keys** and values as part of the new ES proposal to improve the Object prototype.

The ```async``` keyword introduces async functions in ecmascript and **allow for more controlled flow of asynchronous functions**.

The ```await``` keyword adds blocking to asynchronous functions in order to temporarily stop the execution of statements and logic until certain data finishes returning a response.

Overall, knowing the features of ES7 and understanding some of the major ES proposals will undoubtedly put you in an advantage as a modern JavaScript developer. Knowing ES6 thoroughly already adds a substantial piece to your skillset, but ES7 and pre-ES8 wisdom will open even more doors!

With this newfound knowledge, you must merely await for all the awesome opportunities in store!

ES6 ** ES7 = awesomeness! :)

### Quiz

1)Which method within ES7 checks if an element exists in an array?

a) contains()  - Previous versions of JavaScript actually supported a method called contains() for strings.

**b) includes()** 

c) has() method checks for values within Maps and Sets but not arrays


2) Which of the following method within the ES7 Object prototype can return both keys and values for an object?

**a) entries()** - This function will return an array of two-length arrays that represent the keys and values of an object.

b) values() - returns an array of values for the object.

c) keys() -  returns an array of keys for the object.


3) Which keyword tells an async function to wait for a resolved value before continuing to execute code?

a) async - this keyword actually declares an async function.

**b) await** - this keyword will block an async function from continuing until the 'awaited' value returns a valid response.
