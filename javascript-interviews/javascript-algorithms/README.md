<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Intermediate Algorithm Scripting: Sum All Numbers in a Range](#intermediate-algorithm-scripting-sum-all-numbers-in-a-range)
- [Intermediate Algorithm Scripting: Diff Two Arrays](#intermediate-algorithm-scripting-diff-two-arrays)
- [Intermediate Algorithm Scripting: Seek and Destroy](#intermediate-algorithm-scripting-seek-and-destroy)
- [Intermediate Algorithm Scripting: Wherefore art thou](#intermediate-algorithm-scripting-wherefore-art-thou)
- [Intermediate Algorithm Scripting: Spinal Tap Case](#intermediate-algorithm-scripting-spinal-tap-case)
- [Intermediate Algorithm Scripting: Pig Latin](#intermediate-algorithm-scripting-pig-latin)
- [Intermediate Algorithm Scripting: Search and Replace](#intermediate-algorithm-scripting-search-and-replace)
- [Intermediate Algorithm Scripting: DNA Pairing](#intermediate-algorithm-scripting-dna-pairing)
- [Intermediate Algorithm Scripting: Missing letters](#intermediate-algorithm-scripting-missing-letters)
- [Intermediate Algorithm Scripting: Sorted Union](#intermediate-algorithm-scripting-sorted-union)
- [Intermediate Algorithm Scripting: Convert HTML Entities](#intermediate-algorithm-scripting-convert-html-entities)
- [Intermediate Algorithm Scripting: Convert HTML Entities](#intermediate-algorithm-scripting-convert-html-entities-1)
- [Intermediate Algorithm Scripting: Sum All Primes](#intermediate-algorithm-scripting-sum-all-primes)
- [Intermediate Algorithm Scripting: Smallest Common Multiple=Cel mai mic multiplu comun](#intermediate-algorithm-scripting-smallest-common-multiplecel-mai-mic-multiplu-comun)
- [Intermediate Algorithm Scripting: Drop it](#intermediate-algorithm-scripting-drop-it)
- [Intermediate Algorithm Scripting: Steamroller](#intermediate-algorithm-scripting-steamroller)
- [Intermediate Algorithm Scripting: Binary Agents](#intermediate-algorithm-scripting-binary-agents)
- [Intermediate Algorithm Scripting: Everything Be True](#intermediate-algorithm-scripting-everything-be-true)
- [Intermediate Algorithm Scripting: Arguments Optional](#intermediate-algorithm-scripting-arguments-optional)
- [Intermediate Algorithm Scripting: Make a Person](#intermediate-algorithm-scripting-make-a-person)
- [Intermediate Algorithm Scripting: Map the Debris](#intermediate-algorithm-scripting-map-the-debris)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Intermediate Algorithm Scripting: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
Nov '19
Sum All Numbers in a Range 10
________________________________________
Problem Explanation
You need to create a program that will take an array of two numbers who are not necessarily in order, and then add not just those numbers but any numbers in between. For example, [3,1] will be the same as 1+2+3 and not just 3+1
________________________________________
Hints
Hint 1
Use Math.max() to find the maximum value of two numbers.
Hint 2
Use Math.min() to find the minimum value of two numbers.
Hint 3
Remember to that you must add all the numbers in between so this would require a way to get those numbers.
________________________________________
Solutions
Solution 1 
```JavaScript

function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var temp = 0;
  for (var i = min; i <= max; i++) {
    temp += i;
  }
  return temp;
}

sumAll([1, 4]);
```
Code Explanation
•	First create a variable to store the max number between two.
•	The same as before for the Smallest number.
•	We create a temporary variable to add the numbers.
Since the numbers might not be always in order, using max() and min() will help organize.
Relevant Links
•	Math.max() 97
•	Math.min() 17
•	For Loops 50

Solution 2 
```JavaScript

const sumAll = arr => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};
```
Code Explanation
•	The formula for calculating the sum of a continuous range is “(startNum + endNum) * numCount / 2”.
•	arr[0] and arr[1] can either be startNum or endNum, order doesn’t matter.
•	We can get the count of numbers in range by “Math.abs(arr[0] - arr[1]) + 1”.
•	Applying the formula by plugging in the numbers.
Relevant Links
•	Array.sort() 47
•	Arithmetic Progression summing formula 208
•	ES6 arrow function 105
Solution 3 
```JavaScript

function sumAll(arr) {
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
```
Code Explanation
•	Creating a variable sum to store the sum of the elements.
•	Starting iteration of the loop from min element of given array and stopping when it reaches the max element.
•	Using a spread operator (…arr) allows passing the actual array to the function instead of one-by-one elements.
Relevant Links
•	Spread Operator 349
•	Using Spread Operator in Math.max() 150
Solution 4 
```JavaScript

Recursive Solution
function sumAll([ first, last ] ) {
 const step = first - last < 0 ? 1 : -1;
 return first !== last
   ? first + sumAll([ first + step, last ])
   : first;
}
```
## Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
Note
You can return the array with its elements in any order.
function diffArray(arr1, arr2) {
  var newArr = [];
  // console.log(arr2.filter((item2)=> item2 !== 3))
  // Same, same; but different.
  function filterItems(item, arr2) {
    arr2.filter((crt) => crt !== item);
  }
  newArr = arr2.filter(elem => !arr1.includes(elem)).concat(arr1.filter(elem => !arr2.includes(elem)))

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

Hint 1
Merge the list to make it easy to compare functions.
Hint 2
Use filter to get the new array, you will need to create a callback function.
Hint 3
The best way to go about the callback function is to check if the number from the new merged array is not in both original arrays and return it.
________________________________________
Solutions
Solution 1 
```JavaScript

(Imperative Solution)
function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```
Code Explanation
Read the comments in the code.
Relevant Links
•	for Loop (Devdocs) 402

Solution 2 
```JavaScript

(Declarative Solution):
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```
Code Explanation
Explain solution here and add any relevant links
Relevant Links
•	Array.prototype.concat (Devdocs) 435
•	Array.prototype.filter (Devdocs) 816
•	Array.prototype.includes (Devdocs) 2.1k
Solution 3 

```JavaScript

(Declarative Solution)
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}
```
Rele
•	Array.prototype.includes (Devdocs) 2.1k
•	Array.prototype.filter (Devdocs) 816
•	Array.prototype.concat (Devdocs) 435
15
```JavaScript
function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  // Same, same; but different.
  newArr=newArr.filter(function(el){
    if(arr1.indexOf(el)>-1){
      if(arr2.indexOf(el)>-1){
        console.log(el+"Present in Both");
        return false;
      }
      else{
        return true;
      }
    }
    if(arr2.indexOf(el)>-1){
      if(arr1.indexOf(el)>-1){
        console.log(el+"Present in Both");
        return false;        
      }
      else{
        return true;
      }
    }
  });
  return newArr;
}
```

## Intermediate Algorithm Scripting: Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
Note
You have to use the arguments object.
function destroyer(arr) {
  // Remove all the values
  let elemsToRemove = [];
  Object.keys(arguments).forEach(arg => {
  if (arg != 0) {elemsToRemove.push(arguments[arg])}

  });
  return arr.filter(elem => !elemsToRemove.includes(elem));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
Hint 1
You need to work with arguments as if it was a regular array. The best way is to convert it into one.
Hint 2
You need to filter, this also means you need to create a callback function. You can use various methods like: indexOf(), includes(). If you need another approach, reduce() might also be of use; keep reading those docs!
Hint 3
To convert arguments into an array use this code var args = Array.prototype.slice.call(arguments);
________________________________________
Solutions
Solution 1 
```JavaScript

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}
```
Code Explanation
1.	Create an array of arguments using Array.prototype.slice.call() and store it in the variable args. We’ll use this to check against arr.
2.	Start a basic for loop to iterate through arr. Nest another for loop inside the first, changing the integer variable j and arr to args. This second loop will iterate through args .
o	Within the second loop create an if statement, checking strictly === that the current val of arr[i] is equal to args[j].
o	If the value at the current index is equal in both arrays, use delete to remove it from arr.
3.	Outside of the nested loops: return the modified array using the Boolean object as a filter for any null's created by the delete operator.
Relevant Links
•	[arguments
•	Array.filter() 641
•	delete 580
•	Boolean 185

Solution 2 
```JavaScript

function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}
```
Code Explanation
1.	Declare a variable named args and set it equal to a new Array object from() the arguments passed into the function. On the same or next line, use the slice() method on args starting from the second index, 1. This separates the arguments used for filtering into their own array of args.
2.	Return the filtered array, using includes() in the callback function to check if val is not in args; returning true to keep the value in the original array or false to remove it.
Relevant Links
•	arguments 1.9k
•	Array.slice() 139
•	Array.includes() 798
Solution 3 

```JavaScript

const destroyer = (arr, ...valsToRemove) => arr.filter(elem => !valuesToRemove.includes(elem));
```
Code Explanation
•	Code using ES6 syntax to declare function using arrow functions.
•	Using spread operator to retrieve the arguments.
•	Return the filtered array, using includes().
Relevant Links
•	Spread Operator 28

## Intermediate Algorithm Scripting: Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.


Problem Explanation
Write an algorithm that will take an array for the first argument and return an array with all the objects that matches all the properties and values in the Object passed as second parameter.
Relevant Links
•	For Loops 50
•	Array.prototype.filter() 139
•	Object.hasOwnProperty() 911
Object.keys() 252
________________________________________
Hints
Hint 1
You may use for loop or the Array.prototype.filter method.
Hint 2
Try to use the Object.prototype.hasOwnProperty method to know if the property name exists in an object (as its own property).
Hint 3
Check equivalence of Object in collection with Object passed as second parameter to whatIsInAName function.
________________________________________
Solutions
Solution 1 
```JavaScript

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
```
Code Explanation
•	We filter through the array using .filter().
•	Using a for loop we loop through each item in the object.
•	We use a if statement to check if the object in the collection doesn’t have the key and the property value doesn’t match the value in source.
•	We return false if the above if statement is correct. Otherwise, we return true;
Relevant Links
•	For Loops
•	Array.prototype.filter()
•	Object.hasOwnProperty() 911

Solution 2 
```JavaScript

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
```
Code Explanation
•	We filter through the collection using .filter().
•	Next, we return a Boolean value for the .filter() method.
•	Finally, we reduce to Boolean value to be returned for the .every() method.
Relevant Links
•	Array.prototype.filter()
•	Array.prototype.every()
•	Object.hasOwnProperty() 911
Solution 3 
```JavaScript

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
```
Code Explanation
•	We start by filtering through collection using Array.filter().
•	Next, we map through all keys and return Boolean values based on the check conditions: both the key and its corresponding value must exist within the object we are filtering through.
•	Then we reduce the mapped Boolean values to a single Boolean that indicates whether all srcKeys pass the conditions checked above.
•	This single Boolean will be used to filter through the collection.
Relevant Links
•	Array.prototype.filter()
•	Array.prototype.reduce()
•	Object.hasOwnProperty() 911

## Intermediate Algorithm Scripting: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
Hint 1
Create a regular expression for all white spaces and underscores.
Hint 2
You will also have to make everything lowercase.
Hint 3
The tricky part is getting the regular expression part to work, once you do that then just turn the uppercase to lowercase and replace spaces with underscores using replace().
________________________________________
Solutions
Solution 1 
```JavaScript

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

// test here
spinalCase("This Is Spinal Tap");
```
Code Explanation
•	regex contains the regular expression /\s+|_+/g, which will select all white spaces and underscores.
•	The first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
•	While returning the string, another replace() replaces spaces and underscores with dashes using regex.

Solution 2 
```JavaScript

function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}

// test here
spinalCase("This Is Spinal Tap");
```
Code Explanation
•	Similar to the first solution, the first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
•	Instead of using replace() here to replace whitespace and underscores with dashes, the string is split() on the regular expression /(?:_| )+/ and join()-ed on -.
Relevant Links
•	JS String Prototype Split 15
•	JS Array Prototype Join 7
Solution 3 
```JavaScript

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
```
Code Explanation
•	Split the string at one of the following conditions (converted to an array)
o	a whitespace character [\s] is encountered
o	underscore character [_] is encountered
o	or is followed by an uppercase letter [(?=[A-Z])]
•	Join the array using a hyphen (-)
•	Lowercase the whole resulting string
Relevant Links
•	String#split 19
•	RegExp 74
•	Arrray#join 6
•	String#toLowerCase 3

## Intermediate Algorithm Scripting: Pig Latin
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
If a word does not contain a vowel, just add "ay" to the end.
Input strings are guaranteed to be English words in all lowercase.
Problem Explanation
You need to create a program that will translate from English to Pig Latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an “ay”. If a word begins with a vowel you just add “way” to the end. It might not be obvious but you need to remove all the consonants up to the first vowel in case the word does not start with a vowel.
Relevant Links
•	Pig Latin 419
•	JS String Prototype Match 480
________________________________________
Hints
Hint 1
You will probably want to use regular expressions. This will allow you to convert the words easily.
Hint 2
If the first character is a vowel, then take that whole word and add ‘way’ at the end. Otherwise comes the tricky part, take the consonant(s) before the first vowel and move it to the end and add ‘ay’. This might be confusing but, it is not just the first consonant but all of them before the first vowel.
Hint 3
You will need to use everything you know about string manipulation to get the last part right. However, it can be done with substr alone.
________________________________________
Solutions
Solution 1 
```JavaScript

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");
```
Code Explanation
•	start at beginning and get longest match of everything not a vowel (consonants)
•	if regex pattern found, it saves the match; else, it returns null
•	if regex pattern found (starts with consonants), it deletes match, adds the match to the end, and adds “ay” to the end
•	if regex pattern not found (starts with vowels), it just adds “way” to the ending
Relevant Links
•	Regex Match 38
•	Ternary Operator 19
•	concat() 11

Solution 2 

```JavaScript
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = "";
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + "ay";
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }

  return pigLatin;
}

// test here
translatePigLatin("consonant");
```
Code Explanation
•	Make an empty string to hold your Pig Latin word.
•	Assign your appropriate regular expression to a variable.
•	If the first character is a vowel, just add way to end of string and return it.
•	If the first character is not a vowel:
o	Find number of consonants before first vowel with help of indexOf(), match() and regex.
o	Start Pig Latin string with first vowel till the end.
o	Add letters before first vowel to end of string.
o	substr() is used for string manipulation here.
o	Add ay to end of string and return it.
Relevant Links
•	JS Regex Resources
•	JS String Prototype IndexOf 31
•	JS String Prototype Substr 58
Solution 3 
```JavaScript

function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

// test here
translatePigLatin("consonant");
```
Code Explanation
•	First, check to see if the string begins with a vowel.
o	The regex looks at the beginning of the string ^ for one of the specified characters [aeiou]
o	If it does, you only need to return the original string with “way” appended on the end.
•	If the string does not start with a vowel, we want to build a string which contains every consonant before the first vowel in the provided string.
o	To do this, look at the beginning of a string ^ for one or more characters + NOT specified [^aeiou].
o	If there is a match (and in this case, there always will be), match() returns an Array with the matched string as the first element, which is all we want. Grab it with [0].
•	Now, we can start building our Pig Latin string to return. This can be built in three parts:
o	The first part contains all of the characters in the original string, starting from the first vowel. We can easily get these characters by creating a substring of the original string, with its starting index being the first vowel.
o	The second part contains the consonant string we just built. (If you add the second and first parts of this string together, you will get the original string.)
o	The final part contains “ay”.
Relevant Links
•	JS Regex Resources
•	String.prototype.match() 8
•	JS String Prototype Substr 58
Solution 4 
```JavaScript

function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// test here
translatePigLatin("consonant");
```
Code Explanation
•	Use replace() on the string, using a regular expression to check if the first letter is a consonant and adding way at the end in this case. If the first letter is a consonant nothing will happen at this point.
•	Use replace() again to check for consonants at the beginning of the word and to move it or them to the end of the word and add ay at the end.
Relevant Links
•	Regular Expressions Reference 41
•	Regular Expressions Resources 17```
## Intermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Hint 1
•	Find the index where before is in the string.
Hint 2
•	Check first letter case.
Hint 3
•	Strings are immutable, you will need to save the edits on another variable, even if you must reuse the same one just to make it look like the changes where done using just that one variable.
________________________________________
Solutions
Solution 1 
```JavaScript

function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```
Code Explanation
•	Use indexOf() to find location of before in string.
•	If first letter of before is capitalized, change first letter of after to uppercase.
•	Replace before in the string with after.
•	Return the new string.
Relevant Links
•	JS String Prototype IndexOf 42
•	JS String Prototype ToUpperCase 10
•	JS String Prototype CharAt 24
•	JS String Prototype Slice 38

Solution 2 
```JavaScript

function myReplace(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substr(1)
  } else {
    after = after[0].toLowerCase() + after.substr(1)
  }

  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after);
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```
Code Explanation
•	In this solution, regular expression ^[A-Z] is used to check (test) if the first character of before is uppercase.
•	If first letter of before is capitalized, change the first letter of after to uppercase.
•	Else: If first letter of before is lowercase, change the first letter of after to lowercase
•	Return the new string replacing before with after.
Relevant Links
•	JS Regex Resources 9
Solution 3 
```JavaScript

function myReplace(str, before, after) {
  // create a function that will change the casing of any number of letter in parameter "target"
  // matching parameter "source"
  function applyCasing(source, target) {
    // split the source and target strings to array of letters
    var targetArr = target.split("");
    var sourceArr = source.split("");
    // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
    for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
      // find out the casing of every letter from sourceArr using regular expression
      // if sourceArr[i] is upper case then convert targetArr[i] to upper case
      if (/[A-Z]/.test(sourceArr[i])) {
        targetArr[i] = targetArr[i].toUpperCase();
      }
      // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
      else targetArr[i] = targetArr[i].toLowerCase();
    }
    // join modified targetArr to string and return
    return targetArr.join("");
  }

  // replace "before" with "after" with "before"-casing
  return str.replace(before, applyCasing(before, after));
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```
Code Explanation
•	Both the before and after are passed as arguments to applyCasing().
•	The function applyCasing() is used to change the case of respective characters in targetArr i.e., after in accordance with that of characters in sourceArr i.e., before.
•	replace() is used to replace before with after, whose casing is same as before.
Solution 4 
```JavaScript

// Add new method to the String object, not overriding it if one exists already
String.prototype.capitalize =
  String.prototype.capitalize ||
  function() {
    return this[0].toUpperCase() + this.slice(1);
  };

const Util = (function() {
  // Create utility module to hold helper functions
  function textCase(str, tCase) {
    // Depending if the tCase argument is passed we either set the case of the
    // given string or we get it.
    // Those functions can be expanded for other text cases.

    if (tCase) {
      return setCase(str, tCase);
    } else {
      return getCase(str);
    }

    function setCase(str, tCase) {
      switch (tCase) {
        case "uppercase":
          return str.toUpperCase();
        case "lowercase":
          return str.toLowerCase();
        case "capitalized":
          return str.capitalize();
        default:
          return str;
      }
    }

    function getCase(str) {
      if (str === str.toUpperCase()) {
        return "uppercase";
      }
      if (str === str.toLowerCase()) {
        return "lowercase";
      }
      if (str === str.capitalize()) {
        return "capitalized";
      }
      return "normal";
    }
  }

  return {
    textCase
  };
})();

function myReplace(str, before, after) {
  const { textCase } = Util;
  const regex = new RegExp(before, "gi");
  const replacingStr = textCase(after, textCase(before));

  return str.replace(regex, replacingStr);
}
```
Solution 5 
```JavaScript

function myReplace(str, before, after) {
  const myArr = str.split(" ");
  const [wordToReplace] = myArr.filter(item => item === before);
  return wordToReplace[0].toUpperCase() !== wordToReplace[0]
    ? myArr.map(item => (item === before ? after : item)).join(" ")
    : myArr
        .map(item =>
          item === before ? after[0].toUpperCase() + after.slice(1) : item
        )
        .join(" ");
}

// test:
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```
Relevant Links
•	JS String Prototype Split 4
•	JS For Loops Explained 2
•	JS Math Min 4
•	String.length
•	JS String Prototype ToLowerCase 4
•	JS Array Prototype Join

## Intermediate Algorithm Scripting: DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
Hint 1
•	There are two base case, A-T and C-G, these go both way. You can use regular expression, if statements of anything that you can think of.
Hint 2
•	I would recommend using a switch, as it makes things a lot smoother.
Hint 3
•	The result must be an array of arrays, so keep that in mind when pushing things.
________________________________________
Solutions
Solution 1 
```JavaScript

function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
pairElement("GCG");
```
Code Explanation
•	The program is very simple, the best solution that I have come up with is to use a switch to catch all the possible four elements. Using if statements would take too much code. You could also use Regular Expressions.
•	Since we have to the original and the pair, I decided to take all four cases instead of the base two.
•	Create an empty array and use the search function to push the right values to the array and return them.
Relevant Links
•	Switch Statements 75

Solution 2 
```JavaScript

function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}

//test here
pairElement("GCG");
```
Code Explanation
•	First define an object with all pair possibilities, this allows us to easily find by key or value.
•	Split str into a characters array so we can use each letter to find its pair.
•	Use the map function to map each character in the array to an array with the character and its matching pair, creating a 2D array.
Relevant Links
•	Array.prototype.map() 8
•	Property accessors 7
•	Arrow functions 2
11```
## Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
 There is currently no test case for the string missing more than one letter, but if there was one, recursion would be used. Also, the letters are always provided in order so there is no need to sort them.
Relevant Links
•	String global object 298
•	JS String Prototype CharCodeAt 425
•	String.fromCharCode
________________________________________
Hints
Hint 1
You will need to convert from character to ASCII code using the two methods provided in the description.
Hint 2
You will have to check for the difference in ASCII code as they are in order. Using a chart would be very helpful.
Hint 3
You will need to figure out where the missing letter is, along with handling the case that there is not missing letter as it needs an specific return value.
________________________________________
Solutions
Solution 1 
```JavaScript

function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");
```
Code Explanation
•	This solutions makes use of a for loop.
•	Code of encountered character is stored in code.
•	It is checked if code of current character is the expected one (no characters are skipped) by using the logic - code of current character = code of first character + number of iterations.
•	If a character is missing, the missing character is found and the final string is returned.
•	undefined is returned if there is no missing character in the string.
Relevant Links
•	JS For Loops Explained 12
•	String.length

Solution 2 
```JavaScript

// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter(str) {
  var compare = str.charCodeAt(0),
    missing;

  str.split("").map(function(letter, index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// test here
fearNotLetter("abce");
```
Code Explanation
•	First we define variables to store the character code for the first letter in the string, and to store whatever missing letters we may find.
•	We turn the string to an array in order to map through it instead of using for and while loops.
•	As we map through our letters’ character codes, we go comparing with the one that should be in that position.
•	If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.
•	If not, the missing letter will be assigned to the missing variable, which will be returned after the map is finished.
•	If there are no missing characters, return undefined.
Relevant Links
•	JS String Prototype Split 10
•	JS Array Prototype Map 40
Solution 3 
```JavaScript

function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
```
Code Explanation
•	Loop over the string
•	Check if the difference in char codes between adjacent characters in the string is more than 1 (check ASCII table)
•	Return the missing character ( +1 from where the gap was detected)

```JavaScript
function fearNotLetter(str) {
  var allChars = "";
  var notChars = new RegExp("[^" + str + "]", "g");

  for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars)
    ? allChars.match(notChars).join("")
    : undefined;
}

// test here
fearNotLetter("abce");
```
Code Explanation
•	A new string allChars is created.
•	Create a regular expression notChars which selects everything except str.
•	The for loop is used to add all the letters in the range to allChars.
•	match() is used to strip off the str letters from the newly created string and it is returned.
•	If there are no missing characters, return undefined.
Relevant Links
•	JS Regex Resources
•	JS Ternary 15
•	JS String Prototype Match 9
•	JS Array Prototype Join 1```
## Intermediate Algorithm Scripting: Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.

Problem Explanation
The program has to return a new array of unique values from two original arrays in the order they show up. So there is not sorting required, and there shouldn’t be any duplicates.
Relevant Links
•	JS Arguments 383
________________________________________
Hints
Hint 1
Since you have no idea how many parameters were passed, it would be best to loop through the arguments before looping through the arrays.
Hint 2
It isn’t necessary to use loops. You can use functions such as map(), reduce() or others if you want.
Hint 3
You will have to check if the current value is already on the array to be returned for every value.
________________________________________
Solutions
Solution 1 
```JavaScript

function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly make the program work with two or more arrays
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```
Code Explanation
•	Create empty array finalResult to store the final result.
•	Loop through the arguments object in the outer loop and store it in arrayArguments.
•	The inner loop is used to loop through individual array elements.
•	If the element doesn’t already exist in finalArray, add it.
•	Return finalArray.
Relevant Links
•	JS For Loops Explained 7
•	array.length 3
•	JS String Prototype IndexOf 27
•	JS Array Prototype Push 4

Solution 2 
```JavaScript

function uniteUnique(arr) {
  var args = [...arguments];
  var result = [];
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```
Solution 3 
```JavaScript

function uniteUnique(arr1, arr2, arr3) {
  var newArr;
  //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce function to flatten the array
  newArr = args.reduce(function(arrA, arrB) {
    //Apply filter to remove the duplicate elements in the array
    return arrA.concat(
      arrB.filter(function(i) {
        return arrA.indexOf(i) === -1;
      })
    );
  });

  return newArr;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```
Code Explanation
•	arguments object is converted into an array using slice().
•	reduce() function is used to flatten the array i.e., for every element that is in the array (or nested arrays), extract it’s elements into one-dimensional array.
•	After flattening the array, filter() is used to remove duplicate elements from newArr.```
## Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Relevant Links
•	JS Array Prototype Slice 27
•	JS Array Prototype Reduce 23
•	JS Array Prototype Concat 19
•	JS Array Prototype Filter 28
Solution 4 
```JavaScript

function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]) {
    concatArr = concatArr.concat(arguments[i]);
    i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```
Code Explanation
•	Number of arguments can change dynamically, so we don’t need to bother providing our function uniteUnique() with arguments at all.
•	We use a while loop to concatenate all the arguments into one array called concatArr.
•	We use filter() to remove the duplicate elements by checking the index of each element and removing same elements with different positions.
•	Ordering will be preserved here.
Relevant Links
•	JS While Loop
Solution 5 
```JavaScript

Alternative Code Solution using ES2015
//jshint esversion:6

function uniteUnique(...arrays) {
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regulat set and not a multiset
  return [...new Set(flatArray)];
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```
Code Explanation
•	We first use concat() with an empty array as a starting point and the spread operator ... to create an array out of the Arguments object and to flatten it at the same time
•	then we use the new ES2015 Set object to store only unique values
Relevant Links
•	Array.prototype.concat 19
•	Arguments 19
•	Set 140
```JavaScript
function uniteUnique(arr) {
 // return arr;
 let kk = [];
 for (let i = 0; i < arguments.length; i++) {
   for (let j = 0; j < arguments[i].length; j++) {
     if (!kk.includes(arguments[i][j])) {
       kk.push(arguments[i][j])
     }
   }
 }
 return kk;
}
```
## Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
Problem Explanation
•	You have to create a program that will convert HTML entities from string to their corresponding HTML entities. There are only a few so you can use different methods.
________________________________________
Hints
Hint 1
•	You can use regular Expressions however I didn’t in this case.
Hint 2
•	You will benefit from a chart with all the html entities so you know which ones are the right ones to put.
Hint 3
•	You should separate the string and work with each character to convert the right ones and then join everything back up.
________________________________________
Solutions
Solution 1 
```JavaScript

function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

//test here
convertHTML("Dolce & Gabbana");
```
Code Explanation
•	Assign temp to str.split(''), which creates an array containing each individual character in the passed in string.
•	Pass each character in the newly created array into a switch() statement.
•	Replace the HTML entities with their corresponding HTML entity string (i.e. '&' becomes '&amp;' in line 51)
•	temp.join('') converts the array of characters into a string to be returned.
Relevant Links
•	str.split() 23
•	arr.join() 13
•	switch statement 25

Solution 2 
```JavaScript

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

// test here
convertHTML("Dolce & Gabbana");
```
Code Explanation
•	Create an object to use the Lookup functionality and easily find the characters.
•	Use replace() to replace characters with regex.
•	The first argument for replace() is a regex that catches all the target characters and puts them into a capturing group.
•	The second arguments for replace() is a function with the matched character as a parameter. It returns the correspondant entity from htmlEntities.
Relevant Links
•	str.replace() 25
•	Regular Expressions 25
Solution 3 
```JavaScript

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");
```
Code Explanation
•	Create an object to use the Lookup functionality and easily find the characters.
•	Split the original string by characters and use map to check for the changed html entity or use the same one.
•	The a function is added which is what returns the converted entity or the original one if there is no conversion.
•	Lastly we join all the characters once again.
Note that if you went the regex route then you don’t need to join anything, just make sure you return the whole operation or save it to a variable and then return it.
Relevant Links
•	str.split() 23
•	arr.map() 57
•	arr.join() 13
Sum All Odd Fibonacci Numbers 8
________________________________________
Problem Explanation
You will need to gather all the Fibonacci numbers and then check for the odd ones. Once you get the odd ones then you will add them all. The last number should be the number given as a parameter if it actually happens to be an off Fibonacci number.
Relevant Links
•	Fibonacci number 755
________________________________________
Hints
Hint 1
To get the next number of the series, you need to add the current one to the previous and that will give you the next one.
Hint 2
To check if a number is even all you have to check is if number % 2 == 0.
Hint 3
As you get the next odd one, don’t forget to add it to a global variable that can be returned at the end. result += currNumber; will do the trick.
________________________________________
Solutions
Solution 1 
```JavaScript

function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);
```
Code Explanation
•	Create a variable to keep record of the current and previous numbers along with the result that will be returned.
•	Use a while loop to make sure we do not go over the number given as parameter.
•	We use the modulo operand to check if the current number is odd or even. If it is odd, add it to the result.
•	Complete the Fibonacci circle by rotating getting the next number and swapping values after.
•	Return the result.
Relevant Links
•	JS while Loop

Solution 2 
```JavaScript

function sumFibs(num) {
  // Perform checks for the validity of the input
  if (num < 0) return -1;
  if (num === 0 || num === 1) return 1;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

// test here
sumFibs(4);
```
Code Explanation
•	Create an array of fibonacci numbers till num.
•	Use filter() method to filter out even numbers.
•	Use reduce() method to sum the remaining (odd) values.
•	Return the sum.
Relevant Links
•	JS Array Prototype Push 2
•	JS For Loops Explained
•	JS Array Prototype Filter
•	JS Array Prototype Reduce 13

## Intermediate Algorithm Scripting: Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
Hint 1
Generate a list of all the numbers up to and including the one you got as a parameter. This will be needed to determine which numbers are prime or not.
Hint 2
Check this link 326 if you prefer to find a solution for finding primes, or try learning and implementing your own Sieve of Eratosthenes 1.7k
Hint 3
This problem is hard if you have to create your own code to check for primes, so don’t feel bad if you had to use someone’s code for that bit. Either way, you are most likely using array, so once you generate an array of primes, then just add them all up and return the number you get.
________________________________________
Solutions
Solution 1 
```JavaScript

function sumPrimes(num) {
  var res = 0;

  // Function to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }

  return res;
}

// test here
sumPrimes(10);
```
Code Explanation
•	Create a function that generates the numbers from 1 to num and check if they are prime along the way.
•	Declare the variables that will be needed.
•	Start with 2, if it has not been marked and added to the sieve array then it is a prime and we add it to the prime array.
•	Add the others to the sieve array.
•	Return the primes
•	Loop through the returned array and add all the elements to then return the final value.
Relevant Links
•	JS For Loops Explained 18

Solution 2 
```JavaScript

function sumPrimes(num) {
  let i = 1;
  let sum = 0;
  while (i <= num) {
    if (isPrime(i)) {
      sum += i;
    }
    i++;
  }
  return sum;
}
//function to check if a number is prime or not
function isPrime(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return x !== 1 && x !== 0;
}
//test here
sumPrimes(10);
```
Code Explanation
•	Create a function to check if a number is prime or not.
•	Declare two variables. One to keep us within the limit of the given number and the other to store the sum of numbers to be returned.
•	Create a loop to check all numbers lesser than or equal to the given number.
•	Check if a number is prime and add it to the value of sum.
•	Return the value of sum once the loop exits.
Solution 3 
```JavaScript

function sumPrimes(num) {
  // function to check if the number presented is prime
  function isPrime(number) {
    for (i = 2; i <= number; i++) {
      if (number % i === 0 && number != i) {
        // return true if it is divisible by any number that is not itself.
        return false;
      }
    }
    // if it passes the for loops conditions it is a prime
    return true;
  }
  // 1 is not a prime, so return nothing, also stops the recursive calls.
  if (num === 1) {
    return 0;
  }
  // Check if your number is not prime
  if (isPrime(num) === false) {
    // for non primes check the next number down from your maximum number, do not add anything to your answer
    return sumPrimes(num - 1);
  }

  // Check if your number is prime
  if (isPrime(num) === true) {
    // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
    return num + sumPrimes(num - 1);
  }
}
// test here
sumPrimes(10);
```
Code Explanation
•	The function isPrime checks if a particular number is prime or not.
•	If num is 1, return 0 since 1 is not a prime number.
•	If num is not prime, check next number down from maximum number.
•	If num is prime, add it to next number in the sequence through recursion to sumPrimes function.
Relevant Links
•	Functions - Recursion 55
Solution 4 
```JavaScript

function sumPrimes(num) {
  let nums = Array.from({ length: num + 1 })
    .map((_, i) => i)
    .slice(2);
  for (let n in nums) {
    nums = nums.filter(val => val == nums[n] || val % nums[n] != 0);
  }
  return nums.reduce((prevSum, cur) => prevSum + cur);
}
// test here
sumPrimes(13);
```
Code Explanation
•	Use Array.from() to generate a sequence of numbers up to and including num. Combine with .slice() to slice off first two indices [0, 1] since all prime numbers must be greater than 1.
•	If a number is not prime, it is divided by number > 1 other smaller than himself.
Solution 5 
```JavaScript

function sumPrimes(num) {
  // step 1
  let arr = Array.from({ length: num + 1 }, (v, k) => k).slice(2);
  // step 2
  let onlyPrimes = arr.filter(n => {
    let m = n - 1;
    while (m > 1 && m >= Math.sqrt(n)) {
      if (n % m === 0) return false;
      m--;
    }
    return true;
  });
  // step 3
  return onlyPrimes.reduce((a, b) => a + b);
}
// test here
sumPrimes(977);
```
Code Explanation
•	Step 1: Use Array.from() to generate a sequence of numbers up to and including num. Combine with .slice() to slice off first two indices [0, 1] since all prime numbers must be greater than 1.
•	Step 2: Filter all numbers off of arr that are not prime by subjecting each element to the “trial division test” which “consists of dividing n by each integer m that is greater than 1 and less than or equal to the square root of n”. This test returns false if any number less than the element being operated on (m) produces no remainder when said element (n) is divided by it. See link below for more on this.
•	Step 3: Return the sum of all remaining elements of arr using .reduce().
Relevant Links
•	Trial Division Test 160
•	Array.from() 69
•	Array.filter() 13```
## Intermediate Algorithm Scripting: Smallest Common Multiple=Cel mai mic multiplu comun
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
Problem Explanation
The smallest common multiple between two numbers is the smallest number that both numbers can divide into. This concept can be extended to more than two numbers as well.
We can first start with just finding the smallest common multiple between two numbers. Naively, you can start writing out multiple of each number until you write a multiple that exists from both numbers.
An example would be the numbers 3 and 4. The multiples of 3 are 3, 6, 9, 12, 15, 18, ... and the multiples of 4 are 4, 8, 12, 16, 20, .... The first smallest number we run into in both lists is 12 so this is the smallest common multiple between 3 and 4.
This problem can be confusing because most people look for the smallest common multiple of just the two numbers but forget the keyword range. However, this means that if you are given [1,5], then you have to check for the smallest common multiple for all the numbers [1,2,3,4,5] that is evenly divisible by all of them.
Relevant Links
•	Least (Smallest) Common Multiple 955
________________________________________
Hints
Hint 1
Create an array with all the numbers that are missing from the original array to make it easier to check when having to check for even division.
Hint 2
You can use remainder operator (%) to check if the reminder of a division is 0, which means it is evenly divisible.
Hint 3
If you sort the array from greatest to smallest, then you can use the first two numbers as a first check for the smallest common multiple. This is because they are more likely to be the smallest common multiple than the lower numbers.
________________________________________
Solutions
Solution 1 
```JavaScript

function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

// test here
smallestCommons([1, 5]);
```
Code Explanation
•	Because of the possibility of the smallest common denominator being among the two biggest numbers, it makes sense to check those first, so sort the array.
•	Create a new array to sort all the numbers, newArr.
•	Use a descending for loop (var i = arr[0]; i >= arr[1]; i--) to add the numbers from the biggest to the smallest in the new array.
•	Declare the variables for the quotient so we can access them outside the loop:
o	the quotient that’ll be our smallest common multiple (quot)
o	the loop number we’re checking (loop)
o	the index of the array of numbers (n)
•	Use a do whileloop to check what we need whilen is not the same length as the new array.
•	In the do part, we are going to multiply the very first number, times the number of loops, times the second number (quot = newArr[0] * loop * newArr[1];).
•	The loop part will allows us to increase the number we’re checking beyond the greatest number we have without having to change the algorithm.
•	We enter a for loop that will go from n being 2 and going up by one (loop++) while it is smaller than the array with all the numbers (n < newArr.length).
•	If the quotient does not divide evenly (quot % newArr[n] !== 0), then stop the loop (break;). If it is even, then check for the next elements (n++) in the array until it is not even or we find our answer.
•	Outside the loop, increase the value of loop (loop++).
•	At the end of the loop return the quotient (return quot;).
Note: If the array only has two elements, then the for loop never gets used and the return value is the product of said numbers.
Relevant Links
•	JS Array Prototype Sort 28
•	JS For Loops Explained 15
•	JS Array Prototype Push 3
•	JS Do While Loop 48
•	String.length

Solution 2 
```JavaScript

function smallestCommons(arr) {
  var range = [];
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }

  // can use reduce() in place of this block
  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  function gcd(x, y) {
    // Implements the Euclidean Algorithm
    if (y === 0) return x;
    else return gcd(y, x % y);
  }
}

// test here
smallestCommons([1, 5]);
```
Code Explanation
•	The first, basic solution requires over 2,000 loops to calculate the test case smallestCommons([1,13]), and over 4 million loops to calculate smallestCommons([1,25]). This solution evaluates smallestCommons([1,13]) in around 20 loops and smallestCommons([1,25]) in 40, by using a more efficient algorithm.
•	Make an empty array range.
•	All numbers between the given range are pushed to range using a for loop.
•	The next block of code implements the Euclidean algorithm, which is used for finding smallest common multiples.
Relevant Links
•	Euclidean algorithm 597
•	JS Math Max 23
•	JS Math Min 11
Solution 3 
```JavaScript

function smallestCommons(arr) {
  // Euclidean algorithm for the greatest common divisor.
  // ref: https://en.wikipedia.org/wiki/Euclidean_algorithm
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Least Common Multiple for two numbers based on GCD
  const lcm = (a, b) => (a * b) / gcd(a, b);

  // range
  let [min, max] = arr.sort((a, b) => a - b);
  let currentLCM = min;

  while (min < max) {
    currentLCM = lcm(currentLCM, ++min);
  }

  return currentLCM;
}

// test here
smallestCommons([1, 5]);
```
Code Explanation
•	Extract minimum and maximum from provided arr by sorting and grabbing the first and last values.
•	Initialise smallestCommon with the LCM of first two numbers.
•	Loop through range computing LCM of current LCM and next number in range lcm(a, b, c) = lcm(lcm(a, b), c).
Relevant Links
•	Prefix increment operator ++ 14
Solution 4 
```JavaScript

const smallestCommons = arr => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  // Initially the solution is assigned to the highest value of the array
  let sol = max;

  for (let i = max - 1; i >= min; i--) {
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
    if (sol % i) {
      sol += max;
      i = max;
    }
  }
  return sol;
};

// test here
smallestCommons([1, 5]);
```
Code Explanation
•	Extract min and max from arr using Math.min() and Math.max(), respectively. As the arguments to these functions are integers, it is necessary to spread ... the array.
•	As a first guess, let’s say that the solution is max. (we will increment this value later on if it is not the solution)
•	Confirm that our solution is a multiple of all the values between max and min using a for loop.
•	In case it isn’t a solution, increment max to our solution (i.e. get the next multiple of the arr highest value) and restart the loop i = max. Note that it isn’t i = max - 1 since the for loop hasn’t finished yet. Once it is finished, the loop itself will execute i--. It is also worth mentioning now that we started the loop at i = max and decremented i throughout instead of starting at i = min and then increment it in order to minimize the number of iterations.
•	The if statement never being true means that all numbers between min and max are divisible by our solution
Relevant Links
•	Prefix decrement operator (–) 3
•	Remainder operator (%) 5
•	Math.min() 1
•	Math.max() 1
•	Spread syntax (…) 6```
## Intermediate Algorithm Scripting: Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
Problem Explanation
Basically while the second argument is not true, you will have to remove the first element from the left of the array that was passed as the first argument.
Relevant Links
•	Arguments object 74
•	Array.shift() 146
•	Array.slice() 43
________________________________________
Hints
Hint 1
You can use Array.prototype.shift() or filter that you should be more familiar with to solve this problem in a few lines of code.
Hint 2
Shift returns the element that was removed which we don’t really need, all we need is the modified array that is left.
Hint 3
If you still can’t figure out how to solve it with shift, then try solving it with filter, and check how filter works, if you become familiar with it, then you can make the code with shift.
________________________________________
Solutions
Solution 1 
```JavaScript

function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});
```
Code Explanation
•	Create a for loop to check each element.
•	Then check for the function given if true then stop, otherwise remove that element.
•	return the array.
Relevant Links
•	For Loops 8
•	More about for loops 15

Solution 2 
```JavaScript

function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});
```
Code Explanation
•	Use ES6 findIndex() function to find the index of the element that passes the condition
•	Slice the array from the found index until the end
•	There is one edge case! if the condition is not met against any of the elements ‘findIndex’ will return -1 which messes up the input to slice(). In this case use a simple conditional operator to return false instead of -1. And the ternary operator returns the found index of required elements when the condition is true, and the length of the array otherwise so that the return value is an empty array as is instructed.
Relevant Links
•	findIndex() 51
•	Conditional Operator 33
Solution 3 
```JavaScript

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});
```
Code Explanation
•	Use a while loop with Array.prototype.shift() to continue checking and dropping the first element of the array until the function returns true. It also makes sure the array is not empty first to avoid infinite loops.
•	Return the filtered array.
Relevant Links
•	While loops 4
Solution 4 
```JavaScript

function dropElements(arr, func, i = 0) {
  return i < arr.length && !func(arr[i])
    ? (dropElements(arr.slice(i + 1), func, i))
    : arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});
```
Code Explanation
•	Use recursion to solve the challenge

## Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.
This problem seems simple but you need to make sure to flatten any array, regardless of the level which is what adds a bit of difficulty to the problem.
Relevant Links
•	Array.isArray() 297
________________________________________
Hints
Hint 1
You need to check if an element is an array or not.
Hint 2
If you are dealing with an array, then you need flatten it by getting the value inside of the array. This means if you have [[4]] then instead of returning [4] you need to return 4. If you get [[[4]]] then the same, you want the 4. You can access it with arr[index1][index2] to go a level deeper.
Hint 3
You will definitely need recursion or another way to go beyond two level arrays to make the code flexible and not hard-coded to the answers needed. Have fun!
________________________________________
Solutions
Solution 1 
```JavaScript

function steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);
```
Code Explanation
•	Create a new variable to keep flattened arrays.
•	Create a function that will add non-array elements to the new variable, and for the ones that are array, loop through them to get the element.
•	It does that by using recursion, if the element is an array then call the function again with a layer of array deeper to check if it is an array or not. If it is not then push that non-array element to the variable that gets returned. Otherwise, keep going deeper.
•	Invoke the function, the first time you will always pass it an array, so it always falls into the isArray branch
•	Return the flattened array.
Relevant Links
•	Array.push() 7
•	Array.forEach() 79

Solution 2 
```JavaScript

function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
```
Code Explanation
•	Use spread operator to concatenate each element of arr with an empty array
•	Use Array.some() method to find out if the new array contains an array still
•	If it does, use recursion to call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
•	If it does not, return the flattened array
Relevant Links
•	Array.some 222
•	Array.concat 44
•	Spread operator 144
•	Ternary Operator (condition ? a : b) 72
Solution 3 
```JavaScript

function steamrollArray(arr) {
  while (arr.some(element => Array.isArray(element))) {
    arr = arr.flat();
  }
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
```
Code Explanation
•	Use Array.some() method to find out if the new array contains an array still, if it does flatten the array
•	Repeats until there are no more arrays inside arr.
Relevant Links
•	Array.some 222
•	Array.flat 54
Solution 4 
```JavaScript

function steamrollArray(arr) {
  return arr
    .toString()
    .replace(",,", ",") // "1,2,,3" => "1,2,3"
    .split(",") // ['1','2','3']
    .map(function(v) {
      if (v == "[object Object]") {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });
}
```
Code Explanation
•	First we turn the array to a string, which will give us a string of numbers separated by a comma, double comma if there was an empty array and literal object text if there was an object, which we can fix later in our if statement.
•	We replace the double comma with one, then split it back into an array.
•	map through the array and fix object values and convert string numbers to regular numbers.
Solution 5 
```JavaScript

function steamrollArray(val,flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}
```
Solution 6 
```JavaScript

function steamrollArray(arr, flatArr = []) {
  const elem = arr.pop();
  return elem
    ? !Array.isArray(elem)
      ? steamrollArray(arr, [elem, ...flatArr])
      : steamrollArray(arr.concat(elem), flatArr)
    : flatArr;
}
```
## Intermediate Algorithm Scripting: Binary Agents
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
Problem Explanation
This problem is very straight forward - you start with a string that represents a sentence in binary code, and you need to translate that into words. There is not a direct way to do this so you will have to translate twice.
Relevant Links
•	String.prototype.charCodeAt 252
•	String.fromCharCode 143
________________________________________
Hints
Hint 1
You should first convert from binary to decimal before translating those values into characters.
Hint 2
Things are easier when focusing on smaller parts, divide the input to focus on one letter at a time.
Hint 3
Make sure that each time you transcode a character from binary to decimal, you reset whatever variable you used to keep track of the ones. Also do not forget to turn everything back into one string.
________________________________________
Solutions
Solution 1 
```JavaScript

function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return uniString.join("");
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
```
Code Explanation
•	Separate the string into an array of strings separated by whitespace.
•	Create some variables that you will use along the way - the names are self explanatory for the most part.
•	Iterate through each binary string in the new array.
•	Convert to decimal by using parseInt(_binary_, 2). Use the second parameter to specify the base of the input numbers.
•	At the end, return the converted message.
Relevant Links
•	String.prototype.split 13
•	parseInt 19

Solution 2 
```JavaScript

function binaryAgent(str) {
  // Separate the binary code by space.
  str = str.split(" ");
  var power;
  var decValue = 0;
  var sentence = "";

  // Check each binary number from the array.
  for (var s = 0; s < str.length; s++) {
    // Check each bit from binary number
    for (var t = 0; t < str[s].length; t++) {
      // This only takes into consideration the active ones.
      if (str[s][t] == 1) {
        // This is quivalent to 2 ** position
        power = Math.pow(2, +str[s].length - t - 1);
        decValue += power;

        // Record the decimal value by adding the number to the previous one.
      }
    }

    // After the binary number is converted to decimal, convert it to string and store
    sentence += String.fromCharCode(decValue);

    // Reset decimal value for next binary number.
    decValue = 0;
  }

  return sentence;
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
```
Code Explanation
•	For each of these binary strings, check for the ones and ignore the zeroes.
•	For those that are one or active then convert them to decimal, this takes into account the position and the right power it needs to be raised to.
•	Store the power into the power variable by adding it to any previous ones on the variable decValue. This variable will add and add the powers of the active ones until the end of the loop and then return the decimal number.
•	Convert the final decimal outside of the inner loop and then convert it to ASCII and saving it to sentence along with any other text string already converted and stored.
•	Reset the variable decValue to avoid getting wrong decimals before continuing to the outer loop.
Relevant Links
•	Math.pow 21
•	String.length 5
Solution 3 
```JavaScript

function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function(char) {
      return parseInt(char, 2);
    })
  );
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
```
Code Explanation
•	First we use split() to be able to work on each character as an Array element
•	Then use map() to process each element from binary to decimal using pareseInt()
•	Last we can use String.fromCharCode() to convert each ASCII number into the corresponding character
•	However fromCharCode() expects a series of numbers rather than an Array! We can use ES6 Spread Operator to pass in an Array of numbers as individual numbers. See here for more info; Spread Operator 56
Relevant Links
•	Array.prototype.map 12
Alternative Advanced Code Solution:
```JavaScript
  const binaryAgent = str => str.replace(/\d+./g, char => String.fromCharCode(`0b${char}`));
       
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```
Code Explanation
•	Find all groups of one or more digits followed by one other character
•	Replace with a string created from the specified sequence of UTF-16 code units
•	Use 0b to lead the code unit to express that a binary integer literal is being converted.
Relevant Links
•	String.fromCharCode() 143
•	String.prototype.replace() 1
•	Convert a string of binary characters to the ASCII equivalents 4
•	Grammar and types/Numeric Literals 2
```JavaScript
return 
str.split(" ").map(function(char=> String.fromCharCode(parseInt(char, 2)).join(“”)
```
## Intermediate Algorithm Scripting: Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
Remember, you can access object properties through either dot notation or [] notation.
Problem Explanation
The program needs to check if the second argument is a truthy 862 element, and it must check this for each object in the first argument.
Relevant Links
•	JavaScript Truthy 862
•	JavaScript Arguments 302
________________________________________
Hints
Hint 1
Remember to iterate through the first argument to check each object.
Hint 2
Only if all of them are truthy will we return true, so make sure all of them check.
Hint 3
You could use loops or callback functions, there are multiple ways to solve this problem.
________________________________________
Solutions
Solution 1 
```JavaScript

Using for-in loop & hasOwnProperty
function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

// test here
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
```
Code Explanation
•	First I create a counter to check how many cases are actually true.
•	Then check for each object if the value is truthy
•	Outside the loop, I check to see if the counter variable has the same value as the length of collection, if true then return true, otherwise, return false
Relevant Links
•	JS Loops 16
•	Object.prototype.hasOwnProperty() 58

Solution 2 
```JavaScript

Using Array.every()
function truthCheck(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// test here
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
```
Code Explanation
•	Uses the native “every” method to test whether all elements in the array pass the test.
•	This link will help Array.prototype.every() 255
Relevant Links
•	JS Array.prototype.every() 61
•	MDN Array.prototype.every() 255
Solution 3 
```JavaScript

function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
```
Code Explanation
•	For every object in the collection array, check the truthiness of object’s property passed in pre parameter
•	Array#every method internally checks if the value returned from the callback is truthy.
•	Return true if it passes for every object. Otherwise, return false.
Relevant Links
•	Array#every 100```
## Intermediate Algorithm Scripting: Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
Problem Explanation
It can be quite complicated to understand what needs to be done. There are always many ways to do something when coding but regardless of the algorithm used, we have to create a program that does the following:
•	It has to add two numbers passed as parameters and return the sum.
•	It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
•	It has to check if it has one or two arguments passed. More are ignored.
•	If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.
Relevant Links
•	Arrays 118
•	Typeof 651
•	Arguments Object 404
________________________________________
Hints
Hint 1
Every time you deal with an argument, you have to check if it is a number or not. For this a function that handles this task will save you repeated code.
Hint 2
When working on the case that it needs to return the function, it is wise to check if the first and only argument is a number again and base the code on that.
Hint 3
In the case that only one argument was passed, do not worry about how to prompt input for the second one, just make the function definition properly and things will work out the way they should.
________________________________________
Solutions
Solution 1 
```JavaScript

function addTogether() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  var checkNum = function(num) {
    if (typeof num !== "number") {
      return undefined;
    } else return num;
  };

  // Check if we have two parameters, check if they are numbers
  // handle the case where one is not
  // returns the addition.
  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    var c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function(arg2) {
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // if numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}

// test here
addTogether(2, 3);
```
Code Explanation
•	First, I create a function with the sole purpose of checking if a number is actually a number and returns undefined if it is not. It uses typeof to check.
•	Check if we have two parameters, if so, then check if they are numbers or not using the checkNum function I created.
•	If they are not undefined then add them and return the addition. If they any of them is undefined then return undefined.
•	In the case that we only have one argument, then we return a new function that expects two parameters. For this we store the first argument before going into a new scope to avoid our arguments being overwritten.
•	Still inside the big else, we need to check the argument we saved, if it is a number then we return the function expecting a second argument.
•	Now inside the function we are returning, we have to check for non numbers again just as at the beginning using checkNum if undefined then return that, otherwise if numbers add them and return the addition.
Relevant Links
•	Typeof 651
•	Arguments Object 404

Solution 2 
```JavaScript

function addTogether(first, second) {
  if (typeof first !== "number") {
    return undefined;
  }
  const sum = second =>
    typeof second === "number" ? first + second : undefined;
  return typeof second === "undefined" ? second => sum(second) : sum(second);
}
// test here
addTogether(2, 3);
```
Code Explanation
•	Return undefined if first argument is not a number or second argument is defined, but not a number.
•	Return sum of the arguments if both are provided otherwise return a sum function.
Relevant Links
•	Typeof 651
•	Arguments Object 404
Solution 3 
```JavaScript

//jshint esversion: 6
function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => (acc += n), 0)
    : n => (typeof n === "number" ? n + args[0] : undefined);
}

// test here
addTogether(2, 3);
```
Code Explanation
•	First I iterate through the arguments and check for arguments that are not a number and return undefined
•	If it’s not I then check if the arguments length is above 1, if it is I sum the arguments using Array.prototype.reduce
•	Else I return a function that checks if the passed in argument is a number and sum it, if not return undefined
Relevant Links
•	Array.prototype.reduce 2
•	Array.prototype.some 7
•	Array.from 51
6```
## Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

```JavaScript
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();
```
## Intermediate Algorithm Scripting: Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
You can read about orbital periods on Wikipedia.
The values should be rounded to the nearest whole number. The body being orbited is Earth.
The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
Problem Explanation
The first thing to do is to get familiar with what the program is for by knowing what Orbital period exactly is. You’ve to return a new array that transforms the element’s average altitude into their orbital periods. The parts generally found hard are finding the formula, implementing it and for some people, modifying objects by the key. However, something that is not very clear is the fact that your program has to be able to check for any number of objects in the array; This is what is tested on the second part.
Relevant Links
•	Orbital period 321
•	JS Objects 216
•	Math.PI 339
•	JS Math Pow 176
•	Math.sqrt() 257
•	Math.round() 200
________________________________________
Hints
Hint 1
The formula needed is:
 
Hint 2
Use Math.round() to round up to the next whole number as requested. Using Math.ceil() will let you pass the first test but fail the second one.
Hint 3
Find out how to remove and add key to a JavaScript object.
Solution 1 
```JavaScript

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;
  var newArr = [];
  var getOrbPeriod = function(obj) {
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

  for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
```
Code Explanation
•	GM and earthRadius are both given to us.
•	To make the code easier to edit and read, each part of the equation is written separately.
•	Create newArr to store the orbPeriod's.
•	a is 2 times pi. The part that is a constant is on the global scope while the rest is part of a function.
•	Create a function, gerOrbPeriod() that will do the required work for any amount of objects.
•	c is (earthRadius + avgAlt) to the cube.
•	b is the square root of c divided by GM.
•	Create orbPeriod to store the product of a and b, with the Math.round() function applied to round up to the next whole number.
•	Then we delete the key avgAlt, and add the new key and its value.
Relevant Links
•	JS For In Loop 12
•	JS Array Prototype Push 4

Solution 2 
```JavaScript

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  //Looping through each key in arr object
  for (var prop in arr) {
    //Rounding off the orbital period value
    var orbitalPer = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM)
    );
    //deleting the avgAlt property
    delete arr[prop].avgAlt;
    //adding orbitalPeriod property
    arr[prop].orbitalPeriod = orbitalPer;
  }

  return arr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
```
Code Explanation
•	GM and earthRadius are both given to us.
•	A for..in loop is used to iterate through each value in given array arr.
•	orbitalPer holds the value of orbital period for each iteration calculated using the formula.
•	The key avgAlt is deleted, and orbitalPer found is assigned in arr.
Solution 3 
```JavaScript

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  // Loop through each item in the array arr
  arr.forEach(function(item) {
    // Calculate the Orbital period value
    var tmp = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
    );
    //Delete the avgAlt property
    delete item.avgAlt;
    //Add orbitalPeriod property
    item.orbitalPeriod = tmp;
  });
  return arr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
```
Code Explanation
•	GM and earthRadius are both given to us.
•	The forEach() method is used to execute the function once per element (item) in arr.
•	tmp holds the value of orbital period for each element calculated using the formula.
•	The key avgAlt is deleted, and orbital period (tmp) found is assigned to the key orbitalPeriod.
Relevant Links
•	JS Array Prototype ForEach

