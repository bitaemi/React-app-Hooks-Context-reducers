<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Variables and Assignment](#variables-and-assignment)
- [Arrays](#arrays)
- [Booleans](#booleans)
- [Syntax statements and data types](#syntax-statements-and-data-types)
- [Operators](#operators)
- [For loops](#for-loops)
- [Functions](#functions)
- [If statements](#if-statements)
- [Objects](#objects)
- [While loops](#while-loops)
- [Switch statements](#switch-statements)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Variables and Assignment

```JavaScript
    var a = 30;

    //var var = 30;

    //var 1a = 30;

    var $_a = 30;

    // var first greeting = 'hello';


    var first_greeting = 'hello';


    var firstGreeting = 'hello';
```

### Arrays

```JavaScript
    // part 1:
    var points = [25, 16, 7, 9, 31];
    console.log(points);

    // part 2:
    var points = [25, 16, 7, 9, 31];
    points.push(8);
    console.log(points);

    // part 3:
    var points = [25, 16, 7, 9, 31];
    var last = points.pop();
    console.log(points, last);

    // part 4:
    var points = [25, 16, 7, 9, 31];
    var first = points[0];
    console.log(first);

    // part 4:
    var points = [25, 16, 7, 9, 31];
    console.log(points.length);
```
### Booleans

```JavaScript
    // part 1:
    var a = true;
    console.log(a);

    // part 2:
    var a = false;
    console.log(a);

    // part 3:
    var a = 5 == 5;
    console.log(a);

    // part 4:
    var a = 5 == 7;
    console.log(a);

    // part 5:
    var a = 5 < 7;
    console.log(a);

    // part 6:
    var a = 5 > 7;
    console.log(a);

    // part 7:
    var a = 5 <= 7;
    console.log(a);

    // part 8:
    var a = 5 >= 7;
    console.log(a);
```
### Syntax statements and data types

```JavaScript
    // part 1:
    var a, b;
    a = 'hello';
    b = a + ' world';
    // b = 'hello world'

    // part 2:
    var a, b;
    a = "hello";
    b = a + " world";
    // b = 'hello world'

    // part 3:
    var a, b;
    a = 1;
    b = a + 5.5;
    // b = 6.5;

    // part 4:
    /*
    This comment
    spans multiple lines
    */

```
### Operators

```JavaScript
    // part 1:
    var z = 10 + 5 - 2;
    console.log(z);

    // part 2:
    var z = 10 * 5 / 2;
    console.log(z);

    // part 3:
    var a = "Good" + " " + "day";
    console.log(a);

    // part 4:
    var b = 11 % 3;
    console.log(b);

    // // part 5:
    var b = 9 % 3;
    console.log(b);
```

### For loops

```JavaScript
    // part 1:
    console.log(1);
    console.log(2);
    console.log(3);
    // ...

    // part 2:
    for (var i=0; i<5; i = i+1) {
    console.log(i);
    }

    // part 3:
    for (var i=0; i<5; i += 1) {
    console.log(i);
    }

    // part 4:
    for (var i=0; i<5; i++) {
    console.log(i);
    }

    // part 5:
    var names = ["Frodo", "Sam", "Merry", "Pippin"];
    for (var i=0; i<names.length; i++) {
    console.log(names[i]);
    }

```
### Functions

```JavaScript
    // part 1:
    function print() {
    console.log("A working function!");
    }
    print();

    // part 2:
    function print(a) {
    console.log(a);
    }
    print("A great argument!");

    // part 3:
    function print(a, b, c) {
    console.log(a + b + c);
    }
    print("One ", "Two ", "Three");

    // part 4:
    var multiply = function(a, b) {
    return a*b;
    }
    var product = multiply(5, 10);
    console.log(product);
```
### If statements

```JavaScript
    // part 1:
    if (boolean) {

    }

    // part 2:
    if (8 > 5) {
    console.log("8 is greater!");
    }

    // part 3:
    if (8 > 13) {
    console.log("8 is greater!");
    }

    // part 4:
    if (8 > 13) {
    console.log("8 is greater!");
    } else {
    console.log("8 is not greater.");
    }

    // part 4:
    var x = 10;
    if (8 > x) {
    console.log("8 is greater!");
    } else if (15 > x) {
    console.log("15 is greater!");
    } else {
    console.log("8 is not greater.");
    }

    // part 5:
    function check(number) {
    if (number % 2 == 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
    }

    check(4);
    check(7);
```
### Objects

```JavaScript
    // parts 1-2:
    var dog = {
    name: "Buddy",
    breed: "Golden Retriever",
    weight: 60
    };

    // part 1:
    console.log(dog);

    // part 2:
    console.log(dog.breed);

    // part 3:
    console.log(dog["breed"]);

    // part 4:
    var dog = {
    name: "Buddy",
    breed: "Golden Retriever",
    weight: 60,
    bark: function() {
        console.log("Woof!");
    }
    };
    dog.bark();
```
### While loops

```JavaScript
// // all parts:
    var names = ["Frodo", "Sam", "Merry", "Pippin"];
    for (var i=0; i<names.length; i++) {
    console.log(names[i]);
    }

    // part 1:
    var i = 0;
    while (i < names.length) {
    console.log(names[i]);
    i++;
    }

    // part 2:
    while (i < names.length) {
    console.log(names[i]);
    // i++; // infinite loop!
    }

    // part 3:
    var i = 0;
    do {
    console.log(names[i]);
    i++;
    } while (i < names.length);

    // part 3:
    var i = 0;
    do {
    console.log(names[i]); // still executed once
    i++;
    } while (i < 0);

    // part 4:
    var i = 0;
    while (i < 0) {
    console.log(names[i]); // never reached
    i++;
    }
```
### Switch statements

```JavaScript
// part 1:
var x = 3;
switch(x) {
  case 1:
    console.log("The number is one!");
  case 2:
    console.log("The number is two!");
  case 3:
    console.log("The number is three!");
}

// part 2:
var x = 1;
switch(x) {
  case 1:
    console.log("The number is one!");
    break;
  case 2:
    console.log("The number is two!");
    break;
  case 3:
    console.log("The number is three!");
    break;
}

// part 3:
var x = 13;
switch(x) {
  case 1:
    console.log("The number is one!");
    break;
  case 2:
    console.log("The number is two!");
    break;
  case 3:
    console.log("The number is three!");
    break;
  default:
    console.log("The number is " + x);
    break;
}
```