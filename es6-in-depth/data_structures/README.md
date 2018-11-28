<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1. Sets](#1-sets)
- [2. Maps](#2-maps)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 1. Sets

A Set compares to a more advanced array that has all unique elements and no duplicate values.

Set iteration frequently occurs through the values() helper method.


```JavaScript

// parts 1-4:
var a = new Set();

a.add(5);
a.add(43);

a.add("woohoo");

a.add({ x: 50, y: 200 });

// part 1:
console.log(a);

// part 2:
console.log(a.size);

// part 3:
console.log(a.has(5));

// part 4:
console.log(a.has(7));

// parts 5-6:
let numbers = [5, 7, 8, 13, 17];
let numSet = new Set(numbers);

// // part 5:
// console.log(numSet);

// part 6:
for (let element of numSet.values()) {
  console.log(element);
}

// part 7:
let chars = "aweifawjeoanehmwofeuawhfhwuei";
let chars_arr = chars.split("");
let chars_set = new Set(chars_arr);
console.log(chars_set);
```
So Tony walks into this bar, called “the Set Saloon”. And he gets in just fine.

Dana then takes a stroll in to join Tony. She enters “the Set Saloon” - no problem too.

Her identical twin Lana goes for the door.

But the bartender says…

“Sorry miss, you’ll have to go. We at “the Set Saloon”, don’t accept duplicates.”
### 2. Maps

A Map represents a more advanced object in es6 with key-value pairs that can have non-string keys.

Map iterate frequently occurs through the entries() helper method.
```JavaScript
// parts 1-2:
let a = new Map();
let key_1 = 'string key';
a.set(key_1, 'return value for a string key');

// part 1:
console.log(a); 

// part 2:
let key_2 = { a: 'key '};
let key_3 = function() {};
a.set(key_2, 'return value for an object');
a.set(key_3, 'return value for a function');
console.log(a); 

// part 3:
let twoDee = [[1, 'one'], [2, 'two'], [3, 'three']];
let valMap = new Map(twoDee);
console.log(valMap);//Map(3) {1 => "one", 2 => "two", 3 => "three"}

// part 4:
let twoDee = [[1, 'one'], [2, 'two'], [3, 'three']];
let valMap = new Map(twoDee);
for (let [key, value] of valMap.entries()) {
  console.log(`${key} => ${value}`);
}

// part 5:
let string = "oewiuraowehpamennoawponeienuaperunaewopinu";
let letters = new Map();
for (let i=0; i<string.length; i++) {
  let letter = string[i];
  if (letters.has(letter == false)) {
    letters.set(letter, 1);
  } else {
    letters.set(letter, letters.get(letter) + 1);
  }
}
console.log(letters);
```

