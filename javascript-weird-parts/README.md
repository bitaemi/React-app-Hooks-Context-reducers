<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1. Intro](#1-intro)
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
- [15. Operators, Operators Precedence and Associativity](#15-operators-operators-precedence-and-associativity)
- [16. Coercion, Comparison Operators](#16-coercion-comparison-operators)
- [17. Existence and Booleans](#17-existence-and-booleans)
- [18. Defaut Values](#18-defaut-values)
- [19. Framework Aside: Default Values](#19-framework-aside-default-values)
- [20. Objects and the DOT](#20-objects-and-the-dot)
- [21. Object Literals](#21-object-literals)
- [22. Framework Aside: Faking Namespaces](#22-framework-aside-faking-namespaces)
- [23. JSON and Object Literals](#23-json-and-object-literals)
- [24. Functions are Objects](#24-functions-are-objects)
- [25. Function Statements and Function Expressions](#25-function-statements-and-function-expressions)
- [26. By Value vs. By Reference](#26-by-value-vs-by-reference)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### 1. Intro

Simple NOTES (in my own words) or a Cheet Sheet to remind us about what we learned in [Javascript - Understanding the weird parts couse](https://www.udemy.com/understand-javascript/)

### 2. Syntax Parsers, Lexical Environments

    - Syntax Parser = a program that:

            - reads your code and tells if is valid grammer;

            - interprets and returns something ( intermediates );

    - Lexical environment = where something sits physicaly in the code you write

            - where you write something is IMPORTANT!

```JavaScript 
function privateEnv() {
    var a = 'I am a variable not visible outside the privateEnv function because I sit inside this function';
}
console.log(a);//logs undefined because in the creation phase memory space gets alocated for var a;
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

    In JavaScript if we just declare a variable: ```var a;``` this var will be automatically assigned the value of 'undefined' (in the Creation Phase), however "Uncauth ReferenceError: a is not defined" will show when using the variable without declaring it or assigning a value.

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
        console.log(myVar); // - this will log 1, the value at the global  level, because myVar is not defined in b's exe context and b is declared at the Global Exe Context
    }

    function a() {
        var myVar = 2; 
        b();
    }

    var myVar = 1;
    a();
```
When you invoke a function, JS engine looks where your function was declared (Lexical Env) and creates an outer reference for each variable from the scripts.

My EXECUTION STACK here:

    b()
    a()
    Global Scope

A SCOPE CHAIN is created from top to bottom of the EXECUTION STACK because each function has a REFERENCE to the OUTER ENVIRONMENT.

The OUTER ENVIRONMENT = where the function was phisically declared.

If your variable is not declared inside a function but I use it, JS engine will go down the EXECUTION STACK and look into function's OUTER ENVIRONMENT and will get the value from there.

```JavaScript

    function a() {

        function b() {
        console.log(myVar); // - this will log 2, the value from a's Execution Context, WHERE b function is declared,  because in b's execution context variable was not declared
        }

        var myVar = 2; // delete this line and the log will be the value from Global Execution Environmet
        b();
    }

    var myVar = 1;
    a();
```

If myVar is not declared inside a() JS engine will go down into the EXECUTION STACK, one more time where a() was declared.

If we had functions inside functions inside functions, JS Engine will go down as many time as needed to find variable's declaration.

This is how the SCOPE CHAIN is created.

### 11. Scope, ES6 and let

SCOPE = where a variable is available in your code

let keyword introduced in ES6 allows JS Engine to use BLOCK SCOPING

```JavaScript
if (a < b) {
    let c = "I'm a variable available ony inside  this block of code and only after this line runs";
}
```
```JavaScript

for (var i = 0, i < 4, i++) {
    let changingVariable = "I change each time this loop is running, a am different, so  Iget some alocated memory space each time";
}
```

### 12. Asynchronous Callbacks

JavaScript runs only synchronously.

The BROWSER = (Rendering Engine <-> JAVASCRIPT ENGINE <-> HTTP Request )

Besides the EXECUTION STACK, we have another list that sits inside the JS Engine: the EVENT QUEUE.

EVENT QUEUE = full of events, notification events that might be happening. 

When the BROWSER, somewhere outside the JS Engine has an event that we want to be notified of, it gets placed on the queue.

Whether or not we actually have a function that needs to respond to this event, it gets placed in the EVENT QUEUE.

JS Engine starts looking in the EVENT QUEUE only after the EXECUTION STACK is empty. That's how JS Engines handles events asynchromously.

If the EXECUTION STACK is empty, JS Engine periodically looks at the EVENT QUEUE. It waits for something to be there.

And if something is there, it looks to see  if a particular function should be run when that event was triggered.

So it sees a click event, it processes that click event and knows, hey, there's a function that needs to be run for that event.

So it creates the execution context for whatever function when that event happened, and JS Engine will return to the next event from the EVENT QUEUE, only after the execution context is removed from EXECUTION STACK and the stack is empty.

Other parts of the BROWSER are running and looking at the code while the JS Engine is still running, the BROWSER asynchronously is putting things in the EVENT QUEUE.

Long executing functions may delay the events executions = long-running functions can actually interrupt events being handled.

But this how JavaScript synchronously is dealing with the fact that asynchronous events are happening,

```JavaScript

function wait3Sec() {
    var milisecondsAfter3sec = 3000 + new Date().getTime();
    while (new Date() < milisecondsAfter3sec) {}
    console.log("I show in console after 3 seconds - first (I)");
}

function clickHandler() {
    console.log('I show after click, whend the execution of GLOBAL ENV ends, if nothing else is in the EXECUTION STACK - last (III)');
}

//listen for the click event
document.addEventListener('click', clickHandler);

wait3Sec();
console.log('I show after wait3sec finishes running, or any other function on top of the Global ENV - second (II)');

```

### 13. Types and Javascript

DYNAMIC TYPING = you don't tell the JavaScript Engine what type of data variable holds

Instead, the engine figures it out while your code is running, while it's executing.

So a single variable can, at different times during the execution of your code, hold different types of values, because it's all figured out during execution.

DYNAMIC TYPING:

```JavaScript
var aVariable = true;
aVariable = 'Now i am able to change my type to string!';
aVariable = 1; //no errors
```
STATIC TYPING

``` bool aVariable = 'I CANNOT BE a JavaScript variable - this throws an error';```


### 14. Primitive Types

PRIMITIVE TYPE = type of data that represents a single value = NOT AN OBJECT

PRIMITIVE TYPES <> OBJECT

    - undefined  = lack of existence //do not set vars to undefined
    
    - NULL = lack of existence //You can use this
    
    - number //floating point number
    
    - string //sequence of caracters
    
    - symbol //introduced in ES6
    

### 15. Operators, Operators Precedence and Associativity

    OPERATORS = just functions that are syntactically (written) differently and run the code
    Operators PRECEDENCE = which operator function gets called  first
    Operators ASSOCIATIVITY  = in what order operator functions get called in : LEFT-TO-RIGHT or RIGHT-TO-LEFT

- [Operator Precedence and Associativity Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

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

### 18. Defaut Values

```JavaScript
function greet(name) {
    console.log('Hello' + name);
}

greet(); // will consider as defalt value undefiend  logs the string: 'Hello undefined '
```
```JavaScript
function greet(name) {
    name = name || '<Your name here>';
    console.log('Hello' + name);
}

//this time we have set a default value for name and if no parameter is defined default is used
greet(); //name = false || 
greet(0); //0 converts to false and default value is used once again
greet('Tony');// string converts to true, parameter is used
```

### 19. Framework Aside: Default Values


In some JS frameworks (like Angular) or some JS libraries (like jQuery), if we have the same variable declared in more than one included script in the running script:

```JavaScript
<script src="previouslyIncluded.js"></src>
<script src="includedSubsequently.js"></src>
```
where previouslyIncluded.js contains a declaration of variableName:

```JavaScript
var variableName = "First declaration creates the variableName for the Global object=window";
```
includedSubsequently.js script should check to see if the variable is used in previouslyIncluded.js, if so

```JavaScript
//if Global object doesn't have the variableName property, will get a value in the subsequently included script
window.variableName = window.variableName || "Declaration of that variable name in the subsequently included script";

```
### 20. Objects and the DOT

An OBJECT is a COLLECTION of KEY=NAME/VALUE PAIRS wich sits in memory.

VALUES = MEMBERS of the object = can be:

    -  PROPERTIES (PRIMITIVES or OBJECTS)

    -  FUNCTIONS (METHODS)

The OBJECT has references to these different properties and methods wich are also sitting in memory.

[] OPERATOR:

```JavaScript

var objectName = new Object();
objectName["someProperty"] = "Some property value"; //primitive - set the property firstname

//[] is an operator wich takes the object objectName and looks for someProperty and assigns the above value to that property
// [] operator has left-to-right precedence:
console.log(objectName["someInnerObject"]["somePropertyOfTheInnerObject"]); //logs the value of the somePropertyOfTheInnerObject
```
DOT OPERATOR - the prefered way for accessing members:

```JavaScript
objectName.someProperty //. operator goes out to find someProperty's value using the reference to the member someProperty  of the objectName

objectName.someInnerObject = new Object(); // add the someInnerObject property of type Object to my objectName object

objectName.someInnerObject.somePropertyOfTheInnerObject = 'The value for somePropertyOfTheInnerObject member of the someInnerObject';

//. operator's associativity is left-to-right so first looks into the objectName for the someInnerObject, than into somoInnerPropertyOfTheInnerObject
// .. keep adding/accessing members to objects or inner objects

```
### 21. Object Literals

{} = OBJECT LITERAL 

```JavaScript

var newObject = {}; // {} is not an operator, is just a shorthand that creates a new object
//or I can initialize my object
var newObject = {
    firstProp: 'Val for first prop',
    secondProp: 'Val for second prop',
    lastProp: {
        propOfInnerObj: 'val for inner prop',
        lastInnerProp: 434214
    }
}

function methodWithSomeObjectAsParameter(someObject) {
   //...
}
 //we can call the function like:

methodWithSomeObjectAsParameter(newObject);
//or passing directly the object - create the object on the fly:

methodWithSomeObjectAsParameter({
    firstProp: 'Val for first prop',
    secondProp: 'Val for second prop',
    lastProp: {
        propOfInnerObj: 'val for inner prop',
        lastInnerProp: 434214
    }
});

```
### 22. Framework Aside: Faking Namespaces

JS doesn't have namespaces, that's why we fake it creating different objects, as containers, with the same propery names, for different spaces:

```JavaScript
var namespace1 = { identicalPropertyName: value1}; //container for namespace1 to keep variable identicalPropertyName separated from any other code
var namespace2 = { identicalPropertyName: value2};//container for namespace2
//access identicalPropertyName from namespace1:

console.log(namespace1.identicalPropertyName);//logs value1
```

### 23. JSON and Object Literals

```JavaScript

var objectLiteral = {
    firstProp: 'Val for first prop',
    secondProp: 'Val for second prop'
}

var objectLiteralValidJSON = JSON.stringify(objectLiteral);
console.log(objectLiteralValidJSON);
/*logs the following JSON
{
    "firstProp": 'Val for first prop',
    "secondProp": 'Val for second prop'
}

look!: ALL PROPERTIES HAVE TO BE STRINGS :-)
*/

var jsonValue = aJavaScriptObject = JSON.parse(objectLiteralValidJson); //is the exact objectLiteral

```
### 24. Functions are Objects

OBJECTS = FIRST CLASS FUNCTIONS

I can attach different properties to a FUNCTION:

    - primitives
    - objects
    - functions

The FUNCTION has some hidden properies:

    - name (optional, can be anonymous)
    - CODE property (the actual code that you write inside the function) - the invocable property that runs the code of that function
```JavaScript

function a() {
    console.log("Hi");
}

a.someProperty = "Some string"; //in other programming languages this is not possible
console.log(a); //logs the a's CODE value - not so usefull
```

### 25. Function Statements and Function Expressions

EXPRESSION = a unit of code that results  in a value
STATEMENT = a unit that does some work


```JavaScript

    //in invoke function's code like this:
    anonymousGreet(); //throws 'undefined is  not a function'! becase in the creation phase memory space is alocated for variable anonymousGreet
    //the code after the = operator, in this case, is an expression, not a statement
    //and functions's expression  aren't hoisted
    var anonymousGreet = function() {
        console.log('hi');
    }
    //the = operator is putting the anonymous function in memory
    //the variable anonymousGreet is pointing to where the function  lives

    //FUNCTIONAL PROGRAMMING- availabable because functions are objects:
    function log(a) {
        a()
    }

    function log(function() {
        console.log('fd');
    })
```
### 26. By Value vs. By Reference









 








     





