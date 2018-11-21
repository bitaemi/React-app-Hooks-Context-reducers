<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1. General](#1-general)
- [2. Syntax Parsers, Lexical Environments](#2-syntax-parsers-lexical-environments)
- [3. Execution Context - Creation and Hoisting](#3-execution-context---creation-and-hoisting)
- [4. The Global Environment and the Global Object](#4-the-global-environment-and-the-global-object)
- [5. Name Value Pairs and OBJECTS](#5-name-value-pairs-and-objects)
- [6. 'undefined' variale in Javascript](#6-undefined-variale-in-javascript)
- [7. Single Threded, Synchronous execution](#7-single-threded-synchronous-execution)
- [8. Functions invocation and execution stack](#8-functions-invocation-and-execution-stack)
- [9. Functions, Context, Variable environments](#9-functions-context-variable-environments)
- [10. The Scope Chain](#10-the-scope-chain)
- [11. Scope, ES6 and let](#11-scope-es6-and-let)
- [12. Asynchronous Callbacks](#12-asynchronous-callbacks)
- [13. Types and Javascript](#13-types-and-javascript)
- [14. Primitive Types](#14-primitive-types)
- [15. Operators Precedence and Associativity](#15-operators-precedence-and-associativity)
- [16. Coercion, Comparison Operators](#16-coercion-comparison-operators)
- [17. Existence and Booleans](#17-existence-and-booleans)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### 1. General

### 2. Syntax Parsers, Lexical Environments

    - Syntax Parsers = a program that:

            - reads your code and tells if is valid grammer;

            - interprets and returns something ( intermediates );

    - Lexical environment = where something sits physicaly in the code you write

            - where you write something is IMPORTANT!

```JavaScript 
function privateEnv() {
    var a = 'I am a variable not visible outside the privateEnv function because I sit inside this function';
}

```


### 3. Execution Context - Creation and Hoisting

    EXE CONTEXT = WRAPPER to manage code that's running

    In the moment you run a Javascript file, an execution context is created

    Current execution context = the only one that runs at a moment in time, can contain things beyond what you've written in your code

    Creation Phase: 
        - execution context is created:
            - Global Object
            - 'this' variable
            - Outer Environment
        - setup Memory Space for Variables and Functions = HOISTING
        
    Execution Phase:

        - in this phase we already have the presets from the creation phase
        - runs the code

```JavaScript
b(); // - this fuction exists in memory from the creation phase
console.log(a); // -  a variable is assigned undefined in the creation phase

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}
```

### 4. The Global Environment and the Global Object

    GLOBAL ENVIRONMENT = GLOBAL EXECUTION CONTEXT = THE BASE EXECUTION CONTEXT

    GLOBAL ENVIRONMENT = ACCESSIBLE EVERYWHERE TO EVERYTHING in your code

    At the Global Execution Context, JavaScript Engine creates the: 
            - GLOBAL OBJECT 
            - special variable: 'this'

    For each opended tab of a BROWSER/NAVIGATOR:
            - the GLOBAL OBJECT = Window object
            - 'this' variable will be the Window
            - this = window


### 5. Name Value Pairs and OBJECTS

NAME/VALUE PAIRS

    - The NAME may be defined more than once, but only can have one value in any given context
    - The VALUE could be other collections of NAME/VALUE PAIRS = OBJECTS
``` Address = ' Str. A. I. Cuza Nr. 38' ``` the name of the variable is address, the value is ' Str. A. I. Cuza Nr. 38'
    - OBJECTS = collections of NAME/VALUE PAIRS
        Address : 
            {
                Street: 'A. I. Cuza',
                Number: 38,
                Apartament:
                    {
                        Floor: 5,
                        Number: 1
                    }
            }

    In the above JavaScript Object (if it was very large = JSON), the name Address has as value another object;
    The name 'Apartament', of the inner object, has as value another object

### 6. 'undefined' variale in Javascript

    In JavaScript if we just declare a variable: ```var a;``` this var will be automatically assigned the value of 'undefined', however "Uncauth ReferenceError: a is not defined" will show when using the variable without declaring it or assigning a value.

### 7. Single Threded, Synchronous execution

    JavaScript is Single Threded, synchronous execution in behavior - see :
    - [Functions invocation and execution stack](#functions-invocation-and-execution-stack)

### 8. Functions invocation and execution stack

```JavaScript 
function a() {
        b(); // -  a new exe context is created and put on top of the execution stack
        var c;// - this line is executed second (II)
    }

    function b() {
        var d; // - thsi line is executed first (I)
    }

    a();
    var d; // - this line is not going to run until b() and a() finish running and are removed from the execution stack
            // - this line, from the global context, is executed the last one (III)
```

    - the lexical order doesn't matter, the execution stack is:
            b() exe context  -  when it finishes goes back to finish a's exe context and is poped up from stack
            a() exe context  
            Global exe context or window

    - that exe context that is currently on top, is the one that is running
    - after runnig an exe context is removed from the stack
    - see above how code is executed, line by line, Synchronously

### 9. Functions, Context, Variable environments

```JavaScript
function b() {
    var myVar; // -  (IV) myVar = undefined in b's environment
}

function a() {
    var myVar = 2; // -  (III) myVar = 2 in a's environment
    b();
}

var myVar = 1; // - executes first (I) myVar = 1;

console.log(myVar); // - here, in the global exe context myVar=1, (II)
a();
console.log(myVar); // - here is the global exe context where myVar = 1 (V) - this line executes the last one

```

    - myVar distinct in each execution context:

- `!stack principle: LIFO (last in, first out - fill from bottom to top, empty from top to bottom)`
- variable values for each exe context/env:

    in b() exe context/env myVar=undefined

    in a() exe context/env myVar=2

    in Global Exe Context myVar=1


### 10. The Scope Chain

    Scope = where can I access the variable

```JavaScript
function b() {
        console.log(myVar); // - this will log 1, the value at the global  level
    }

    function a() {
        var myVar = 2; 
        b();
    }

    var myVar = 1;
    a();
```
### 11. Scope, ES6 and let

### 12. Asynchronous Callbacks

### 13. Types and Javascript

### 14. Primitive Types

### 15. Operators Precedence and Associativity

OPERATORS or just functions that run the code

- [Operator Precedence and Associativity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

### 16. Coercion, Comparison Operators

    - a completion to the above section
    - COERCION = convert a value from one type to another ( Js is dinamically typed - you do not specify the type of your variables )

``` 1 + '2' = 12 ``` - converts 1 to string and concatenates

```Number(undefined) = NaN ``` we cannot convert undefined to a number

```Number(null) = 0 ```

``` 1 < 2 < 3 ``` - true < 3 is true because 1 < 3 

``` 3 < 2 < 1 ``` -  true < 1 is false because 1 = 1

``` false == 0 ``` - true

``` null == 0 ``` - false

``` null < 1 ``` -  this is counter-intuitive

``` "" == 0 ``` - true

``` "" == false ``` - true

``` "3" === 3 ``` - false because we check both value and type


- [Equality Comparison Table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

### 17. Existence and Booleans 

``` a || a === 0 ```

The importance of the dinamic typing above is that we can create if statements

All values that imply the LACK OF EXISTENCE ( is NOTHING) convert to false


``` Boolean("") ``` - false

``` Boolean(0) ``` - false 

``` Boolean(undefined) ``` - false

    So we can use coercion with if statement:

``` if (a || a === 0) ``` 

- because || has [lower precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) than === we evaluate first the last expression

- expresion to evaluate is same as: a || (a === 0)

- expresion from () evaluates first

- if (a || true) = if a exists - we had to check also that a is 0






     





