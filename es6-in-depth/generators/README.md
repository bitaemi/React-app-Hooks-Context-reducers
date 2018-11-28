<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Defining generators](#defining-generators)
- [Generators - Control Flow](#generators---control-flow)
- [Generators - Iterators](#generators---iterators)
- [Quiz: Generators in ES6](#quiz-generators-in-es6)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### Defining generators

```JavaScript
    // parts 1-2:
    function* letterMaker() {
    yield 'a';
    yield 'b';
    yield 'c';
    }

    let letterGen = letterMaker();

    // part 1:
    console.log(letterGen.next().value);

    // part 2:
    console.log(letterGen.next().value);
    console.log(letterGen.next().value);

    // part 3:
    function* countMaker() {
    let count = 0;
    while (count < 3) {
        yield count += 1;
    }
    }

    let countGen = countMaker();
    console.log(countGen.next().value);
    console.log(countGen.next().value);
    console.log(countGen.next().value);
    console.log(countGen.next().value); // undefined

```
### Generators - Control Flow
```JavaScript
    // part 1:
    function* evens() {
    let count = 0;
    while(true) {
        count += 2;
        yield count;
    }
    }

    let sequence = evens();
    console.log(sequence.next().value);
    console.log(sequence.next().value);

    // part 2:
    function* evens() {
    let count = 0;
    while(true) {
        count += 2;
        var reset = yield count;
        if (reset) {
        count = 0;
        }
    }
    }

    let sequence = evens();
    console.log(sequence.next().value);
    console.log(sequence.next().value);
    console.log(sequence.next(true).value);
    console.log(sequence.next().value);
```
### Generators - Iterators

```JavaScript
    // part 1:
    const arrayIterator = (array) => {
    let index = 0;

    return {
        next: () => {
        if (index < array.length) {
            let next = array[index];
            index += 1;
            return next;
        }
        }
    }
    }

    var it = arrayIterator([1, 2, 3]);
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());

    // part 2:
    function* arrayIterator() {
    yield arguments;
    }

    var it = arrayIterator(1, 2, 3);
    console.log(it.next().value);

    // part 3:
    function* arrayIterator() {
    for (let arg of arguments) {
        yield arg
    }
    }

    var it = arrayIterator(1, 2, 3);

    // part 4:
    function* arrayIterator() {
    yield* arguments;
    }

    var it = arrayIterator(1, 2, 3);

    // part 5:
    var array = [1, 2, 3];
    var it = arrayIterator(...array);

    // parts 2-5:
    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value);
```

### Quiz: Generators in ES6


1) Do generators follow the typical "run to completion" model of normal functions?

**a) No** - Generators break the "run to completion" model and introduce functions that can start, pause, and reset!


2) Which of the following lines demonstrates a proper instance of a generator?

a) ```const gen = new generator();``` - Generators actually do not use the 'new' keyword to instantiate.

**b) ```const gen = generator();```**  - Generators actually do not use the 'new' keyword to instantiate.


3) Which keyword is used within a generator to tell it to 'pause'?

a) halt - This is not an ES6 keyword.

b) stop - This is not an ES6 keyword.

**c) yield** - Correct!
