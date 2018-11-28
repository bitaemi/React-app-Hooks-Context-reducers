<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1. Deep dive into jQuery code](#1-deep-dive-into-jquery-code)
- [2. Build my own library](#2-build-my-own-library)
  - [2.0. Establish requirements](#20-establish-requirements)
  - [2.1. Structuring Safe Code](#21-structuring-safe-code)
  - [2.2. Setup the Object and Its Prototype](#22-setup-the-object-and-its-prototype)
  - [2.2.1. What I want?](#221-what-i-want)
  - [2.2.2. What I use? Wich pattern?](#222-what-i-use-wich-pattern)
- [2.3. Properties and Chainable Methods](#23-properties-and-chainable-methods)
- [2.4. Adding jQuery Support](#24-adding-jquery-support)
- [2.5. Good Commenting](#25-good-commenting)
- [2.6. Let's Use Our Framework](#26-lets-use-our-framework)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 1. Deep dive into jQuery code

    jQuery doesn't add any other features to JS, but it makes easier to type things.
    
    jQuery can manipulate the structure of the HTML page, after is been loaded, by manipulating the DOM( the tree like structure of the page) that's in memory.

    jQuery handles Cross-browser incompatibilities.

    Include the jQuery script in your .html, to use jQury in your JavaScript:

```JavaScript
    var q = $("ul.people li");
    console.log(q); //jQuery.fn.init[3] and __proto__ is a jQuery object full of methods available
```
- All the features of jQuery are inside a function call wich takes 2 parameters: the Global Object and a Function Factory;
- When Factory is invoked I get a new execution context and it starts creating some variables
- **jQuery variable is a function** that receives 2 parameters - the selector we use (```$``` simbol) and the context
- jQuery function is just the 'init' method enhanced, returns ```new jQuery.fn.init(selector, context)```

```jQuery.fn = jQuery.prototype``` - jQuery.fn is a reference =  is pointing at the same spot in memory as the prototype (the empty Object) = an aliass = giving two names to the same function
- This prototype of the jQuery Object has some methods like each, map, that get as parameters some callback functions
```jQuery.extend = jQuery.fn.extend``` does the same thing as the extend method from underscore.js library : is taking properties and methods of one object and adding them to another.
- Uses the .extend to add properties and methods to the jQuery Object

- Adds the variable sizzle to incorporate the benefits of the [Sizzle CSS Selector Engine](http://sizzlejs.com)

- Adds another immediatly invoked function, inside the immediatly invoked function, for the Sizzle library - observe the PATTERN to INCLUDE AN ENTIRE LIBRARY INSIDE A LIBRARY

- ```jQuery.find = Sizzle``` - jQuery.find is the same with Sizzle because points to the same space in memory

- ```init = jQuery.fn.init``` - this init method creates a jQuery object by returning the object after altering with some .makeArray method:
```return jQuery.makeArray(selector, this);``` - is OK to return like this from a constructor, as long as you pass the 'this' variable, wich in the case of a constructor, is the empty Object of that kind

- Gives the init function the jQuery prototype for later instantiation:
```init.prototype = jQuery.fn;``` - this is how init method helps to avoid using the new keyword out, where I'm using the library

```JavaScript
    var q = $("ul.people li").addClass("newclass").removeClass("people"); //METHOD CHAINING
    console.log(q); //jQuery.fn.init[3] and __proto__ is a jQuery object full of methods available
```
METHOD CHAINING - Call one method after another, and each method affects the parent object

- We are able to chain the .addClass, .removeClass and others because these methods ```return this``` and 'this' point to the originated Object, the oane that makes the call

- Exposes the jQuery Object so that I am able to use it outside: ```window.jQuery = window.$ = jQuery```

### 2. Build my own library

#### 2.0. Establish requirements

    - how to call the library: GREETR
    - scope: generate greetings
    - details for input: first name, last name, optional language
    - details for output: generates formal and informal greetings for En and ES languages
    - other requirements: should be reusable 
    - easy to type structure, jQuery like:  G$ instead of $
    - should support jQuery
    - for each requirement iterate in: {what I want?,  what I use?)
    

#### 2.1. Structuring Safe Code

    Create an immediatly invoked object and pass to it the window object and the jQuery selector:

```JavaScript
    
    (function(global, $) {
    
    }(window, jQuery));
```

#### 2.2. Setup the Object and Its Prototype

 #### 2.2.1. What I want?
    I want to use my $G function object like I use jQuery:
```var g = G$(firstName, lastName, language);```
 #### 2.2.2. What I use? Wich pattern?
    I use the pattern observed in jQuery

```JavaScript

    (function(global, $) {
        
        var Greetr = function(firstName, lastName, language) {
            return new Greetr.init(firstName, lastName, language)
        }
        //set the prototype property to an empty object (wich has available __proto__ 's members/properties):
        Greetr.prototype = {};
        //make the constructor:
        Greetr.init = function(firstName, lastName, language) {
        
            var self =  this;

            self.firstName = firstName || '';
            self.lastName = lastName || '';
            self.language = language || 'en';
        };

        //any object created with this .init method should point to the same space in memory as any Greetr Object, meaning should have the same prototype chain
        Greetr.init.prototype = Greetr.prototype; 
        // the init method of the Greetr Object will have as Prototype the Prototype of Greet Object, and that's how it will have available all the methods of a Greetr Object
        
        //I want to attach this object to the Global environment and also create the aliass (G$):
        //on the global Object the two names will point to Greetr Object
        global.Greetr = global.G$ = Greetr;

    }(window, jQuery));
```
### 2.3. Properties and Chainable Methods

 ###2.3.1. Where Should I put my Properties?

     Of course, inside my immediatly invokable, outer function, immediatly after the constructor property:

 ```JavaScript

;(function(global, $) {
    
    var Greetr = function(firstName, lastName, language) {
            return new Greetr.init(firstName, lastName, language)
    }

    // hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['en', 'es'];
    
    //add 3 objects, not exposed to the outside world, until I desire so:
    // 1.informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    // 2.formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    // 3. logger messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };
    
    // prototype holds methods (to save memory space)
    //let's add members (properties and methods) to the prototype:
    Greetr.prototype = {
        
        // 'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName;   
        },
        
        validate: function() {
            // check that is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
             if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";   
             }
        },
        
        // retrieve messages from object by referring to properties using [] syntax
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();  
        },
        
        // chainable methods return their own containing object
        greet: function(formal) {
            var msg;
            
            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();  
            }
            else {
                msg = this.greeting();  
            }
            // console is an object, if is not available will be undefined
            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
            //returns the calling object mutated by greet invocation
        },
        
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }
            
            // make the log method chainable
            return this;
        },
                            
        setLang: function(lang) {
            
            // set the language
            this.language = lang;
        
            // validate
            this.validate();
            
            // make chainable
            return this;
        }
        //... some other properties

    }(window, jQuery));
```

### 2.4. Adding jQuery Support

Add a variable property for DOM operation support offered by jQuery enabling chainable methods:

```JavaScript
var HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';   
            }
            
            if (!selector) {
                throw 'Missing jQuery selector';   
            }
            
            // determine the message
            var msg;
            if (formal) {
                msg = this.formalGreeting();   
            }
            else {
                msg = this.greeting();   
            }
            
            // inject the message in the chosen place in the DOM
            $(selector).html(msg);
            
            // make chainable
            return this;
        }
```        
and include the jQuery library in your HTML;

### 2.5. Good Commenting

    JavaScript is not a verbose language and that's why is better to comment your code, to understand it later, when you or someone else has to use/change it again!

### 2.6. Let's Use Our Framework

Because is very small, is not a framework, but rather a library.

Use the Greetr in order to call the  ```<h1 id='greeting'></h1>``` HTML element and have the language set appropriately.

```JavaScript
// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('John', 'Doe');

// use our chainable methods
g.greet().setLang('es').greet(true).log();

// let's use our object on the click of the login button
$('#login').click(function() {
   
    // create a new 'Greetr' object (let's pretend we know the name from the login)
    var loginGrtr = G$('John', 'Doe');
    
     // hide the login on the screen
    $('#logindiv').hide();
    
     // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
    
});
```