<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1. Class definition](#1-class-definition)
- [2. Inheritance](#2-inheritance)
- [3. Prototypes](#3-prototypes)
- [4. Static Methods](#4-static-methods)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### 1. Class definition

```JavaScript
    class Animal {
        constructor(name, height) {
            this.name = name;
            this.height = height;
        }

        hello() {
            console.log(`Hi! I'm ${this.name} from the Animal kingdom!`);
        }
    }

    var king = new Animal("Mufasa", 4.5);
    king.hello();
```
### 2. Inheritance

```JavaScript
    // parts 1-3:
    class Animal {
        constructor(name, height) {
            this.name = name;
            this.height = height;
        }

        hello() {
            console.log(`Hi! I'm ${this.name} from the Animal kingdom!`);
        }
    }


    // part 1:
    class Lion extends Animal {

    }

    let son = new Lion("Simba", 2);
        console.log(son);

    // part 2:
    class Lion extends Animal {
        constructor(name, height, color) {
            super(name, height);
            this.color = color;
        }
    }

    let son = new Lion("Simba", 2, "golden");
        console.log(son);

    // part 3:
    class Lion extends Animal {
        constructor(name, height, color) {
            super(name, height);
            this.color = color;
        }

        hello() {
            console.log(`Hi! I'm ${this.name} from Pride Rock!`);
        }
    }

    let son = new Lion("Simba", 2, "golden");
    son.hello();

    // part 4:
    import Animal from './Animal';

    class Lion extends Animal {
        constructor(name, height, color) {
            super(name, height);
            this.color = color;
        }
    }

    let son = new Lion("Simba", 2, "golden");
    son.hello();
```
Animal.js file:

```JavaScript
class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  hello() {
    console.log(`Hi! I'm ${this.name} from the Animal kingdom!`);
  }
}

export default Animal;
```
### 3. Prototypes

```JavaScript
// part 1:
function Wizard(name, house, pet) {
  this.name = name;
  this.house = house;
  this.pet = pet;
}

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
console.log(harry);

// part 2:
function Wizard(name, house, pet) {
  this.name = name;
  this.house = house;
  this.pet = pet;
  this.greet = () => `I'm ${this.name} from ${this.house}`;
}

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
console.log(harry.greet());

// part 3:
function Wizard(name, house, pet) {
  this.name = name;
  this.house = house;
  this.pet = pet;
  this.greet = () => `I'm ${this.name} from ${this.house}`;
}

Wizard.prototype.pet_name;
let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
harry.pet_name = "Hedwig";
console.log(harry);

//parts 4-5:
function Wizard(name, house, pet) {
  this.name = name;
  this.house = house;
  this.pet = pet;
  this.greet = () => `I'm ${this.name} from ${this.house}`;
}

// part 4:
Wizard.prototype.pet_name;
Wizard.prototype.info;
let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
harry.pet_name = "Hedwig";
harry.info = () => {
  return `I have a ${this.pet} named ${this.pet_name}.`;
}
console.log(harry.info());

// part 4:
Wizard.prototype.pet_name;
Wizard.prototype.info;
let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
harry.pet_name = "Hedwig";
harry.info = function() {
  return `I have a ${this.pet} named ${this.pet_name}.`;
}
console.log(harry.info());
```
### 4. Static Methods

```JavaScript
// part 1:
class Calculator {
  static multiply(a, b) {
    return a*b;
  }
}

let a = Calculator.multiply(5, 7);
console.log(a);


// part 2:
class Calculator {
  static add(a, b) {
    return a+b;
  }

  static multiply(a, b) {
    return a*b;
  }
}

let a = Calculator.add(5, 7);
console.log(a);
```