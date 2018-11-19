
## TOC - Javascript the weird parts

    - The execution context - creation and Hoisting(#execution-context)
    - [Operators](#operators)


### Operators
- or just functions that run the code

- [Operator Precedence and Associativity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

- 

- COERCION = convert a value from one type to another ( Js is dinamically typed - you do not specify the type of your variables 

    ``` 1 + '2' = 12 //converts 1 to string and concatenates ```
    ```Number(undefined) = NaN // we cannot convert undefined to a number```
    ```Number(null) = 0 ```
    ``` 1 < 2 < 3 // true < 3 is true because 1 < 3 ```
    ``` 3 < 2 < 1 // true < 1 is false because 1 = 1 ```
    ``` false == 0 //true ```
    ``` null == 0 //false ```
    ``` null < 1 // this is counter-intuitive ```
    ``` "" == 0 //true ```
    ``` "" == false //true```
    ``` "3" === 3 //false because we check both value and type ```

    - [Equality Comparison Table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

    ``` Boolean("") //false ```
    ``` Boolean(0) //false ```
    ``` Boolean(undefined) //false ```
     So we can use coersion with if statement:

     ``` if (a || a === 0) //if (a || true) = if a exists ```





