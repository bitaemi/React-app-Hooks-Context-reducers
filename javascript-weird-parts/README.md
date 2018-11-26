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
- [27. Objects, Functions and 'this'](#27-objects-functions-and-this)
- [28. Arrays = Collections of anything](#28-arrays--collections-of-anything)
- [29. Arguments and 'spread'](#29-arguments-and-spread)
- [30. Functions overloading](#30-functions-overloading)
- [31. DANGER: Automatic Semicolon Insertion](#31-danger-automatic-semicolon-insertion)
- [32. WhiteSpace](#32-whitespace)
- [33. Immediately invoked Functions Expressions (IIFEs) and Safe Code](#33-immediately-invoked-functions-expressions-iifes-and-safe-code)
- [34. Closures](#34-closures)
- [35. Function Factories](#35-function-factories)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### 1. Intro

Simple NOTES (in my own words) or a Cheet Sheet to remind us about what we learned in [Javascript - Understanding the weird parts couse](https://www.udemy.com/understand-javascript/)

### 2. Syntax Parsers, Lexical Environments

    - Syntax Parser = a program that:

            - reads your code, char by char, and tells if is valid grammer;

            - interprets and returns something (intermediates);

            - is part of the JS Engine

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

If I set b = a or pass to a function:

```JavaScript
    var a = 3;
    var b;
    //ALL PRIMITIVES TYPES ARE PASSED BY VALUE:
    b = a; 
    //  b is a copy of primitive a, located in a different place in memory, than is a located
    // let's say a is located at 0x001 address, b is located at 0x002
    a = 2;
    console.log(b); //logs 3, independent of a's value
```

    If a is an object located at 0x001 and I set b = a (or pass to a function)  the new b variable points to the same location in memory that a does.

    NO NEW object is created, NO COPY of the object is created.

    The address of b is the same as a's: 0x001.

    ALL OBJECTS INTERACT BY REFERENCE when setting them EQUAL TO EACH OTHER or passing to a function.

```JavaScript
    //ALL OBJECTS ARE PASSED BY REFERENCE:
    var c = { greeting: 'hi'};
    var d;

    d = c; //d is not a copy of c, simply points to the same address
    c.greeting = 'hello'; // MUTATE = CHANGE greeting's value
    //IMMUTABLE =  cannot be changed
    console.log(d);//logs Object { greeting: 'hello'}
    //BY REFERENCE (as parameter):
    function changeGreeting(obj) {
        obj.greeting = 'Hola'; //mutate
    }
    changeGreeting(d);
    console.log(c);// logs  Object { greeting: 'Holla'}
    //EXCEPTION: 
    c =  { greeting: 'howdy'}; // set up new memory space for the UNEXISTING  object (NEW ADDRESS)
    console.log(c);// logs  Object { greeting: 'howdy'}
    console.log(d);// logs  Object { greeting: 'Holla'}

```
### 27. Objects, Functions and 'this'

Every time  an EXECUTION CONTEX is created, JS Engine gives us 'this' variable.

'this' points to different things, depending on how the function is called.

Inside functions declared in the GLOBAL SCOPE, 'this' will be the Global Object = Window.

```JavaScript
function a() {
    console.log(this);
}
var b = function () {
    this.newProperty = 'I am a value for the new property'; //newProperty gets attached to the Global Object
}

a(); //logs the Global Object

```

Inside functions invoked inside objects, 'this' will be the object wich holds the invoked function.

Inside functions declared inside functions invoked inside objects, 'this' will be the Window Object.

To know the value of 'this'  variable you have to look into it's EXECUTION CONTEXT but it doesn't always follow the SCOPE CHAIN as normal variables:

```JavaScript

var c = {
     name: 'Value for first pair',
     log: function() {
         //this method is able to mutate the object were it lives
         this.name = 'Updated c object'; //this is the c object
         console.log(this); // this is the updated 'c' object

        var setName = function (newName) {
            this.name = newName; //COUNTER-INTUITIVE: name property gets attached to the Window Obj
        }
        setName('Updated again the c object');
        console.log(this.name); // logs 'Updated c object'
        }
     };
```

That's why, for clarity and to make 'this' point to the same thing, use on top of your scope an assignment like : ```var self = this```, for safe usage of this inside that scope.

```JavaScript
 var c = {
     name: 'Value for first pair',
     log: function() {
         //this method is able to mutate the object were it lives
         var self = this; // self inside this function located inside the object is always the object
         self.name = 'Updated c object'; 
         console.log(this); // this is the updated 'c' object

        var setName = function (newName) {
            self.name = newName; //is clear we refere to the c object
        }
        setName('Updated again the c object');
        console.log(self.name); // logs 'Updated again the c object'
        }
     };
```

### 28. Arrays = Collections of anything

```JavaScript
var arr1 = new Array(); //create empty array or:
var arr2 = [];

//each individual item in the array can have a different type:

var array = [
    1,
    false,
    {
        name: 'Item 3 = Inner obj',
        size: 3
    },
    function(name) {
        var greeting = 'Item 4 of arr = inner function receives the ';
        console.log(greeting + name);
    },
    "hello"
]

console.log(arr); //logs Array [ 1, false, Object, function, "hello"]
arr[3](arr[2].name + 'as parameter'); //logs 'Item 4 = inner function receives Item 3 = Inner obj as parameter'
```

### 29. Arguments and 'spread'

    ARGUMENTS = keyword in JS for all parameters you pass to a function (EXECUTION CONTEXT) 

    When you execute a function, a new execution context is created, and the JavaScript engine sets up some things for us, like:
    - a variable environment to hold our variables,

    - an outer environment reference for the scope chain, 

    - the special keyword, 'this', which will point to different things depending on where the function lives or how it's called,

    - another special keyword, called arguments.


    Arguments contains a list of all the values, of all the parameters that you pass to a function.

    So arguments holds all those values that you pass to whatever function you're calling.

```JavaScript

    function func1(param1, param2, param3) {
        console.log(param1);
        console.log(param2);
        console.log(param3);
    }
    
    function func2(param1, param2, param3) {
        if (arguments.length === 0) {
            //in my vs of JS I don't have the lengt property
            console.log('Missing parameters');
        }
        console.log(arguments); //arguments is a spectial keyword
    }
    
    function func3(param1, param2, param3) {
        console.log(arguments[0]); 
    }

    // JS allows call wihout any param
    // param1, param2, param3 are undefined - JS allocates for each parameter
    func1(); // logs undefined, undefined, undefined
    func2(); //logs  'Missing parameters []'
    func2("Ana","Teo"); //logs ["Ana","Teo"]
    func3(); //logs undefined
    func3("hwy"); //logs "hwy"
```

Though ARGUMENTS look and act like an array, they are not and do not have all the features of arrays;
In newer versions of JS ARGUMENTS  will be deprecated and eventualy removed.

### 30. Functions overloading

```JavaScript
    //first class function ??
    function greet(firstname, lastname, language) {
            
        language = language || 'en';
        
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);   
        }
        
        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);   
        }
        
    }

    //overloaded functions ??:
    function greetEnglish(firstname, lastname) {
        greet(firstname, lastname, 'en');   
    }

    function greetSpanish(firstname, lastname) {
        greet(firstname, lastname, 'es');   
    }

    greetEnglish('John', 'Doe');
    greetSpanish('John', 'Doe');
```

### 31. DANGER: Automatic Semicolon Insertion  

    !Always use the ';' inside your code, though the Syntax Parser injects automatically a ';' when it thinks it should be but is missing. 


```JavaScript
    //WRONG:
    function getPerson() {
        return //because here JS ENGINE sees you pressed the return intermediates the result adding a semicolon and func will exit at this line
            {
                firstname: 'Ana'
            }
    }

    console.log(getPerson()); //logs undefined
    //CORRECT
    function getCorrect() {
        return {
            correct: 'dap'
        }
    }
    console.log(getCorrect);//logs Object { correct: 'dap'}
```

### 32. WhiteSpace 

WHITESPACE =  Invisible chars tahat create literal 'SPACE' in your written code

JS is very liberal about whitespace; 
```JavaScript
    var 
        // first name of the person
        firstname, 
        
        // last name of the person
        lastname, 
        
        // the language
        // can be 'en' or 'es'
        language;

    var person = {
        // the first name
        firstname: 'John',
        
        // the last name
        // (always required)
        lastname: 'Doe'
    }

console.log(person);
```
### 33. Immediately invoked Functions Expressions (IIFEs) and Safe Code

```JavaScript
    //using the function  expression
        var greetFunc = function(name ){
            console.log('Hello ' + name);
        };
        greetFunction('John');
    //immediatly invoke the functions expression
    //create a function object
        var immediatlyInvokedFunction = function(name) {
            return 'Hello ' + name;
        }('John'); //we use () to invoke the function expression
    console.log(immediatlyInvokedFunction); //expected result, immediatlyInvokedFunction is the returned valued of a function call
    console.log(immediatlyInvokedFunction()); //logs string is not a function

    3; //A VALID js EXPRESSION,not doing anything with it but NO ERROR!
    //the following throws an error because is not an expression, is a statement:
    function(name) {
            return 'Hello ' + name;
    }
    //SOLUTION, to have an expression, put () around your statement:
    (function(name) {
        return 'Hello ' + name;
    })
    //Another immediatly invoked functions expression:
    (function(name) {
        return 'Hello ' + name;
    })('Ana'); //IIFE
    //same as:
    (function(name) {
        return 'Hello ' + name;
    }('Ana')); //IIFE
```
    SAFE CODE:
```JavaScript
    var greet = 'Put dirrectly at global level';
    (function(global, name) {
        return 'Hello ' + name; 
        // any variable inside the Exe Context of the anonymous function  is not touching the Global Env, is available only inside that execution context
        var global.greet = 'Set at global level from the anonymous fc';
        var greet = 'Inside immediatly invoked function'; //not seen outside, cannot put it accidentaly on the Global Env
    }(window, 'Ana')); //at Global Exe Context I invoke the function

    console.log(greet);// logs 'Set at global level from the anonymous fc'
```
### 34. Closures

```JavaScript
    function greet(whatToSay) {
        return function(name) {
            console.log(whatToSay + ' '  + name);
        }
    }

    console.log(greet('Hi')('Ana'));
    //or:

    var sayHi = greet('Hi');
    sayHi('Ana');
```

    EXE STACK was:

        greet() //returns a new function and after that is popped off the stack

                //the returned fc still takes up space in memory after greet() is gone from the exe stack

                //any function creaated inside has a refference to that function in memory
                
        Global  EXE Context 

    OR, in the second approach:

        greet()
        sayHi() // sayHi still has a reference to the execution context of greet, after greet leaves the stack

                //so that sayHi still be able to go down the scope chain and find the function returned
                
        Global exe context

        The JavaScript engine will always make sure that whatever function I'm running, that it will have access to the variables that it's supposed to have access to.

        That its scope is intact.

```JavaScript
    function buildFunctions() {
        var arr = [];

        for (var i = 0; i < 3; i++) {
            arr.push(
                function() {
                    console.log(i); //this is not executed here, but at function's invokation
                }
            )
        }
        //here i = 3 and that's why JS Engine exists the for loop
        //after the execution stack of .push method i is still in memory
        // at this point var i is still in memory and is remembered with the value 3
    return arr;
    }

var fs = buildFunctions();

fs[0](); //invoke first item from array, wich is a function object and here, at the Global Exe Context, logs i
fs[1]();
fs[2]();
```
    When the script runs (first instance), the Exe Stack is:

    buildFunctions() context //when this is popped off the stack, but we still have access to its variables:
                    
                    // i = 3, arr = [ f0, f1, f2], where f0 - f1 are the anonymous function that logs i

                    //this variables are called FREE VARIABLES - are outside a fc, but we have access to

    Global Exe context  // buildFunctions(), fs

    The stack becomes (second instance):

    console.log() exe context ??
    fs[0]() context // this goes up in the scope chain, where the var i vas created and gets the value of i from there
    Global Exe Context

    The stack becomes (third instance):
                    // fs[0]() context is removed from the stack
    fs[1]() context // this goes up in the scope chain, where the var i vas created and gets the value of i from there
    Global Exe Context

    The stack becomes (fourth instance):
                    // fs[1]() context is removed from the stack
    fs[2]() context // this goes up in the scope chain, where the var i vas created and gets the value of i from there
    Global Exe Context

    ...

    so the the output will be: 
    
    3
    
    3
    
    3
    each time logs i, wich is 3, the value of the variable i

    ```JavaScript
    function buildFunctions() {
        var arr = [];

        for (var i = 0; i < 3; i++) {
            let j = i; //in ES6 to preserve the value of i
            arr.push(
                function() {
                    console.log(j); //this is not executed here, but at function's invokation
                }
            )
        }
        //here i = 3 and that's why JS Engine exists the for loop
        //after the execution stack of .push method i is still in memory
        // at this point var i is still in memory and is remembered with the value 3
    return arr;
    }

var fs = buildFunctions();

fs[0](); //invoke first item from array, wich is a function object and here, at the Global Exe Context, logs i
fs[1]();
fs[2]();
```
the above will output:

0
1
2

Or if I whant the same output I would use immediatly invoked functions:

```JavaScript
    function buildFunctions() {
        var arr = [];

        for (var i = 0; i < 3; i++) {

            arr.push(
                (function(j) {
                    return function() {
                    console.log(j); //this is immediatly invokated in the inner most function
                    };
                })(i)
            )
        }

    return arr;
    }

var fs = buildFunctions();

fs[0](); //the value of fist item from array is a log of 0
fs[1]();
fs[2]();
```
### 35. Function Factories
