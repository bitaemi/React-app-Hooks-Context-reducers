<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1. JavaScript Essentials](#1-javascript-essentials)
- [2. ES6 Essentials](#2-es6-essentials)
- [2.0 Arrow functions](#20-arrow-functions)
- [2.1 Assignment with let const](#21-assignment-with-let-const)
- [2.2 Number checking](#22-number-checking)
- [2.3 Block Scoping](#23-block-scoping)
- [2.4 Destructuring Assignment](#24-destructuring-assignment)
- [2.5 Map Filter](#25-map-filter)
- [2.6 Modules](#26-modules)
- [2.7 Spread Rest](#27-spread-rest)
- [2.8 String Helpers](#28-string-helpers)
- [2.9 Template Literals](#29-template-literals)
- [3. Data Structures](#3-data-structures)
- [4. Closures](#4-closures)
- [5. Classes](#5-classes)
- [6. Generators](#6-generators)
- [7. Promises](#7-promises)
- [Quiz:](#quiz)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


- [Read a list of features existing or coming in ES6](https://github.com/lukehoban/es6features)

### 1. JavaScript Essentials

    JS and DOM:

```JavaScript
    // part 1:
    console.log(document);

    // part 2:
    console.log(typeof document);

    // part 3:
    document.getElementById('example').innerHTML = 'JavaScript rules!';
```
### 2. ES6 Essentials

### 2.0 Arrow functions

```JavaScript
    // part 1:
    function cheer() {
    console.log("Woohoo!")
    }

    // part 2:
    var cheer = function() {
    console.log("Woohoo!")
    }

    // part 3:
    setTimeout(() => {
    console.log("Woohoo!")
    }, 3000);

    // part 4:
    let cheer = () => {
    console.log("Woohoo!");
    }

    // all parts above:
    cheer();
```
- [Variables and Assignment](./js_essentials/README.md#variables-and-assignment)
- [Arrays](./js_essentials/README.md#arrays)
- [Booleans](./js_essentials/README.md#booleans)
- [Syntax statements and data types](./js_essentials/README.md#syntax-statements-and-data-types)
- [Operators](./js_essentials/README.md#operators)
- [For loops](./js_essentials/README.md#for-loops)
- [Functions](./js_essentials/README.md#functions)
- [If statements](./js_essentials/README.md#if-statements)
- [Objects](./js_essentials/README.md#objects)
- [While loops](./js_essentials/README.md#while-loops)
- [Switch statements](./js_essentials/README.md#switch-statements)

### 2.1 Assignment with let const

```JavaScript
    //* pre-es6 assignment
    // part 1:
    var limit = 100;
    console.log(limit);

    //* let
    // part 2:
    let limit = 100;
    // limit += 100;
    limit = 200;
    console.log(limit);

    //* const
    // part 3:
    const limit = 200;
    // limit += 100;
    console.log(limit);

    //* scoping
    // part 4:
    const emails = ['frodo@email.com', 'samwise@example.com', 'merry@example.com'];
    // emails = []; // error;
    emails.push('pippin@example.com'); // valid!
    console.log(emails);
```
### 2.2 Number checking

```JavaScript
    // parts 1-2:
    const addToCart = (item, number) => {
    return Number.isFinite(number);
    }

    // part 1:
    console.log(addToCart('shirt', 5));

    // part 2:
    console.log(addToCart('shirt', Infinity));

    // part 3:
    console.log(addToCart('shirt', Math.pow(2, 54)));

    // part 4:
    const addToCart = (item, number) => {
    return Number.isSafeInteger(number);
    }

    console.log(addToCart('shirt', Math.pow(2, 54)));
```
### 2.3 Block Scoping

```JavaScript
    
    let limit = 200;
    console.log(limit);

    var limit2 = 200;
    {
    var limit2 = 10; // error, changes the original limit.
    console.log('backstage limit', limit);
    }
    console.log('venue limit', limit);

    const limit3 = 200;
    {
    const limit3 = 10; // valid!
    console.log('backstage limit', limit);
    }
    console.log('venue limit', limit);

    function hello() {
    let message = "Hello!";
    console.log(message);
    }

    function greeting() {
    let message = "How are you?";
    console.log(message);
    }

    hello();
    greeting();
```
### 2.4 Destructuring Assignment

```JavaScript
    // part 1:
    let z = [4, 5, 6];
    // let four = z[0];
    // let five = z[1];
    let [four, five] = z;
    console.log(four, five);

    // part 2:
    let animals = ["Simba", "Zazu", "Ed"];
    let [lion, bird] = animals;
    console.log(lion, bird);

    // part 3:
    let king = { name: 'Mufasa', kids: 1 };
    // let name = king.name;
    // let kids = king.kids;
    let { name, kids } = king;
    console.log(name, kids);

    // part 4:
    let son = { name: 'Simba', parents: 2 };
    let name, parents;
    // { name, parents } = son; // error; standalone block, not destructuring assigment.
    ({ name, parents } = son); // valid destructuring assignment
    console.log(name, parents);
```
### 2.5 Map Filter

```JavaScript
    //* map helper method
    parts 1-3:
    let values = [20, 30, 40];

    // part 1:
    let double = (n) => {
    return n*2;
    }
    let doubled = values.map(double);


    // part 2:
    let doubled = values.map((n) => {
    return n*2;
    });

    // part 3:
    let doubled = values.map(n => n*2);

    all parts above:
    console.log(doubled);

    //* filter helper method
    //parts 4-5:
    let points = [7, 16, 21, 4, 3, 22, 5];

    //part 4:
    let highScores = points.filter((n) => {
    return n > 15;
    });

    // part 5:
    let highScores = points.filter(n => n>15);

    // parts 4-5:
    console.log(highScores);
```
### 2.6 Modules

index.js:
```JavaScript
    // part 1:
    import { fellowship } from './fellowship';
    console.log(fellowship);

    // part 2:
    import { fellowship, total } from './fellowship';
    console.log(fellowship, total);

    // part 3:
    import { add, multiply } from './math';
    console.log(add(5, 10));

    // part 4:
    import { add, multiply } from './math';
    console.log(multiply(5, 10));

    // part 5:
    import multiply from './math';
    console.log(multiply(5, 10));
```
felowship.js:
```JavaScript
    // part 1:
    const fellowship = ['Frodo', 'Samwise', 'Gandalf'];
    export { fellowship };

    // part 2:
    const fellowship = ['Frodo', 'Samwise', 'Gandalf'];
    const total = fellowship.length;
    export { fellowship, total };
```
math.js file:
```JavaScript
    const add = (a, b) => {
    return a+b;
    }

    const multiply = (a, b) => {
    return a*b;
    }

    export { add, multiply };

    export default multiply;
```
### 2.7 Spread Rest

```JavaScript
// * spread operators
let a = [20, 30, 40];
let b = [10, 50];

let a2 = [20, 30, 40];
let b2 = [10, ...a2, 50];
console.log(b2);

let a3 = ['Dana', 'Erik', 'Frank'];
let b3 = ['Alice', 'Bob', 'Carl', ...3];
console.log(3);

//rest parameters
function collect(...a) {
  console.log(a);
}

collect(1, 2, 3, 4, 5);
```
### 2.8 String Helpers

```JavaScript
    // part 1:
    let b = "wooh" + "oo".repeat(50);
    console.log(b);

    // part 2:
    let b = "wooh" + " ".repeat(50) + "oo";
    console.log(b);

    // part 3:
    console.log("butterfly".startsWith("butter")); // true

    // part 4:
    console.log("butterfly".startsWith("fly")); // false

    // part 5:
    console.log("butterfly".endsWith("fly")); // true

    // part 6:
    console.log("butterfly".includes("fly")); // true

    // part 7:
    console.log("butterfly".includes("butter")); // true

    // part 8:
    console.log("butterfly".includes("caterpillar")); // false
```
### 2.9 Template Literals

```JavaScript
    // all parts:
    let a = `good`;

    // part 1:
    console.log(a);

    let greeting = `${a} morning`;
    console.log(greeting);

    let greeting2 = a + " morning";
    console.log(greeting2);

    let b = 'birthday';
    let c = `Happy ${b}!`
    console.log(c);
```
### 3. Data Structures

Data Structures in computer science refer to the programming storage of data for efficient usage in applications and algorithms.

- [1. Sets](./data_structures/README.md#1-sets)
- [2. Maps](./data_structures/README.md#2-maps)

This wraps this section on the new clean and shiny data structures that es6 provided for us. This marks only the beginning of an extensive field of computer science that deals with data structures and algorithms. After all, these highly optimized seemingly theoretical concepts actually power large enterprise applications. Efficiency in time and resources has a monetary value. Therefore, companies and programmers alike highly appreciate the benefits of implementing data structures for their many benefits.

### 4. Closures
- [1. Closures - Scopeing](./closures/README.md#1-closures---scopeing)
- [2. Function Factories](./closures/README.md#2-function-factories)
- [3. Private methods](./closures/README.md#3-private-methods)
- [4.Quiz:](./closures/README.md#4quiz)

### 5. Classes

- [1. Class definition](./classes/README.md/#1-class-definition)
- [2. Inheritance](./classes/README.md/##2-inheritance)
- [3. Prototypes](./classes/README.md/##3-prototypes)
- [4. Static Methods](./classes/README.md/##4-static-methods)

### 6. Generators

- [Defining generators](./generators/README.md/#defining-generators)
- [Generators - Control Flow](./generators/README.md/#generators---control-flow)
- [Generators - Iterators](./generators/README.md/#generators---iterators)
- [Quiz: Generators in ES6](./generators/README.md/#quiz-generators-in-es6)

### 7. Promises

- [1. Promise creation](./promises/README.md#1-promise-creation)
- [2. .fetch method](./promises/README.md#2-fetch-method)

### Quiz: 

1)The 'var' keyword allows for block scoping?

**a) false** - The 'var' keyword actually does not allow block scoping. Re-using the same variable with 'var' twice in coding blocks will overwrite data.

b) true - The 'var' keyword actually does not allow block scoping. Re-using the same variable with 'var' twice in coding blocks will overwrite data.


2) Which es6 keyword declares a variable that cannot be re-assigned or re-declared?

a) let - variables declared with 'let' can be re-assigned.

b) var - variables declared with 'var' can be re-assigned.

**c) const**  - The 'const' keyword restricts data from re-assignment.

3) Which choice correctly uses the spread operator?

a) ```let c = [1, ...a..., b];``` - This is invalid syntax. The spread operator is denoted by: ...

b) ```let c = ...[a, b];``` - This will throw an error because the spread operator expects a variable, not an array.

**c) ```let c = [a, ...b];```** - This is valid syntax for the spread operator.


4) Say I had, b = 'blastoff'. Which line uses a template literal to set a 'message' variable to '3...2...1... blastoff!'

a) let message = '3...2...1...' + ' ' + b + '!'; - Although this creates the correct string, this does not use template literals but string concatenation.

b) let message = `3...2...1... {b}!` - The correct syntax for embedding expressions into a template literal includes a dollar sign: ${...}

c) **let message = `3...2...1... ${b}!`** - This properly sets message to the desired string with a template literal.

Quiz: Methods and Modules

1) Arrow functions are anonymous by default?

    Arrow functions are always anonymous because they do not use the 'function declaration'.

2) Which es6 helper method allows us to create arrays by calling a specific function on each element within an initial array?

**a) map**

b) filter -  this helper method creates new arrays on individual values of an array based on a certain test

3) Which choice shows valid use of the 'default' keyword?

a) export by default multiply; - The default keyword does not follow a 'by' keyword.

**b) ```export default multiply;```**  - Valid syntax and use of the default keyword.

c) ```export { default, multiply }``` - This would export two methods named default and multiply. But it would not export multiply as the default method.

4) Which built-in helper method could I use to check if a number is a not greater than 2^53 in JavaScript?

**a) Number.isSafeInteger()** - JavaScript limits safe integers to values up to 2^53, which is checked by Number.isSafeInteger()

b) Number.isFinite() - Numbers beyond 2^53 can be finite, but are they safe?
