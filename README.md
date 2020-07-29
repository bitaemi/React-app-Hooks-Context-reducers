<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [1. React development](#1-react-development)
- [2. React Todo App implemented with HOOKS and CONTEXT, REDUCERS](#2-react-todo-app-implemented-with-hooks-and-context-reducers)
- [3. Next.js DEMO](#3-nextjs-demo)
- [0. The Full JavaScript & ES6 Tutorial - (including ES7, ES8, understanding libraries & React mini app)](#0-the-full-javascript--es6-tutorial---including-es7-es8-understanding-libraries--react-mini-app)
  - [I) JavaScript the weird parts](#i-javascript-the-weird-parts)
  - [II) ECMAScript 6 Features](#ii-ecmascript-6-features)
  - [III) ECMAScript 7](#iii-ecmascript-7)
  - [IV) ECMAScript 8](#iv-ecmascript-8)
- [Webpack Configuration - notes](#webpack-configuration---notes)
  - [Usefull development external references](#usefull-development-external-references)
- [Advice for Software Developers](#advice-for-software-developers)
- [Web Dev Interviews Advice](#web-dev-interviews-advice)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 1. React development

- [React app some basics](./hooks-todo-app/README.md#react-app-some-basics)
  - [Usefull libraries:](./hooks-todo-app/README.md#usefull-libraries)
  - [Props have children](./hooks-todo-app/README.md#props-have-children)
  - [State vs props](./hooks-todo-app/README.md#state-vs-props)
  - [Search field filter with functional component](./hooks-todo-app/README.md#search-field-filter-with-functional-component)
  - [JSS withStyles:](./hooks-todo-app/README.md#jss-withstyles)
  - [Store website in github for free - deploy](./hooks-todo-app/README.md#store-website-in-github-for-free---deploy)

# 2. React Todo App implemented with HOOKS and CONTEXT, REDUCERS

Follow the link below to go to the React implementation that includes :
- TODO app implemented with HOOKS + CONTEXT
- responsive login app implemented using JSS with Material UI libraries + CONTEXT - from [Colt's repo](https://github.com/Colt/todos-context-usereducer)
- [React Hooks - are great!](./hooks-todo-app/README.md#react-hooks---are-great)
- [Context in React is about passing properties between a component and distant components (in the component tree)](./hooks-todo-app/README.md#context-in-react-is-about-passing-properties-between-a-component-and-distant-components-in-the-component-tree)
- [Transform the previous class based components into function=hooks based components - clean implementation](./hooks-todo-app/README.md#transform-the-previous-class-based-components-into-functionhooks-based-components---clean-implementation)
- [State Management w/ useReducer and useContext](./hooks-todo-app/README.md#state-management-w-usereducer-and-usecontext)
  - [Add in Todo Context](./hooks-todo-app/README.md#add-in-todo-context)
  - [Consuming the Todo Context](./hooks-todo-app/README.md#consuming-the-todo-context)
- [Introduce a new pattern - instead of multiple methods write a single function - a reducer - fix reloading issue](./hooks-todo-app/README.md#introduce-a-new-pattern---instead-of-multiple-methods-write-a-single-function---a-reducer---fix-reloading-issue)
- [Memo - Higher Order Component built into React - To Speed Up the App](./hooks-todo-app/README.md#memo---higher-order-component-built-into-react---to-speed-up-the-app)
- [Use Custom Hook: Reducer + LocalStorage](./hooks-todo-app/README.md#use-custom-hook-reducer--localstorage)

[./hooks-todo-app/README.md#react-hooks](./hooks-todo-app/README.md#react-hooks)

# 3. Next.js DEMO

- [Next.js - a framework using React library](./next-js-demo-app/README.md#nextjs---a-framework-using-react-library)
- [Init a Next.js app](./next-js-demo-app/README.md#init-a-nextjs-app)
- [Next.js pages](./next-js-demo-app/README.md#nextjs-pages)
- [Next's Link Component](./next-js-demo-app/README.md#nexts-link-component)
- [Next  fetching and Server API](./next-js-demo-app/README.md#next--fetching-and-server-api)


# 0. The Full JavaScript & ES6 Tutorial - (including ES7, ES8, understanding libraries & React mini app)
ECMAScript 2015 -  ES6 is a significant update to JavaScript language, and the first update to the language since ES5 was standardized in 2009. 

## [I) JavaScript the weird parts](./javascript-weird-parts/README.md)
- [0. Intro](./javascript-weird-parts/README.md#0-intro)
- [1. The Console - how to use it - clear data](./javascript-weird-parts/README.md#1-the-console---how-to-use-it---clear-data)
- [2. Syntax Parsers, Lexical Environments](./javascript-weird-parts/README.md#2-syntax-parsers-lexical-environments)
- [3. Execution Context - Creation and Hoisting](./javascript-weird-parts/README.md#3-execution-context---creation-and-hoisting)
- [4. The Global Environment and the Global Object](./javascript-weird-parts/README.md#4-the-global-environment-and-the-global-object)
- [5. Name Value Pairs and OBJECTS](./javascript-weird-parts/README.md#5-name-value-pairs-and-objects)
- [6. 'undefined' variale in Javascript](./javascript-weird-parts/README.md#6-undefined-variale-in-javascript)
- [7. Single Threded, Synchronous execution](./javascript-weird-parts/README.md#7-single-threded-synchronous-execution)
- [8. Functions invocation and execution stack](./javascript-weird-parts/README.md#8-functions-invocation-and-execution-stack)
- [9. Functions, Context, Variable environments](./javascript-weird-parts/README.md#9-functions-context-variable-environments)
- [10. The Scope Chain](./javascript-weird-parts/README.md#10-the-scope-chain)
- [11. Scope, ES6 and let](./javascript-weird-parts/README.md#11-scope-es6-and-let)
- [12. Asynchronous Callbacks](./javascript-weird-parts/README.md#12-asynchronous-callbacks)
- [13. Types and Javascript](./javascript-weird-parts/README.md#13-types-and-javascript)
- [14. Primitive Types](./javascript-weird-parts/README.md#14-primitive-types)
- [15. Operators, Operators Precedence and Associativity](./javascript-weird-parts/README.md#15-operators-operators-precedence-and-associativity)
- [16. Coercion, Comparison Operators](./javascript-weird-parts/README.md#16-coercion-comparison-operators)
- [17. Existence and Booleans](./javascript-weird-parts/README.md#17-existence-and-booleans)
- [18. Defaut Values](./javascript-weird-parts/README.md#18-defaut-values)
- [19. Framework Aside: Default Values](./javascript-weird-parts/README.md#19-framework-aside-default-values)
- [20. Objects and the DOT](./javascript-weird-parts/README.md#20-objects-and-the-dot)
- [21. Object Literals](./javascript-weird-parts/README.md#21-object-literals)
- [22. Framework Aside: Faking Namespaces](./javascript-weird-parts/README.md#22-framework-aside-faking-namespaces)
- [23. JSON and Object Literals](./javascript-weird-parts/README.md#23-json-and-object-literals)
- [24. Functions are Objects](./javascript-weird-parts/README.md#24-functions-are-objects)
- [25. Function Statements and Function Expressions](./javascript-weird-parts/README.md#25-function-statements-and-function-expressions)
- [26. By Value vs. By Reference](./javascript-weird-parts/README.md#26-by-value-vs-by-reference)
- [27. Objects, Functions and 'this'](./javascript-weird-parts/README.md#27-objects-functions-and-this)
- [28. Arrays = Collections of anything](./javascript-weird-parts/README.md#28-arrays--collections-of-anything)
- [29. Arguments and 'spread'](./javascript-weird-parts/README.md#29-arguments-and-spread)
- [30. Functions overloading](./javascript-weird-parts/README.md#30-functions-overloading)
- [31. DANGER: Automatic Semicolon Insertion](./javascript-weird-parts/README.md#31-danger-automatic-semicolon-insertion)
- [32. WhiteSpace](./javascript-weird-parts/README.md#32-whitespace)
- [33. Immediately invoked Functions Expressions (IIFEs) and Safe Code](./javascript-weird-parts/README.md#33-immediately-invoked-functions-expressions-iifes-and-safe-code)
- [34. Closures](./javascript-weird-parts/README.md#34-closures)
- [35. Function Factories](./javascript-weird-parts/README.md#35-function-factories)
- [36. Closures and Callbacks](./javascript-weird-parts/README.md#36-closures-and-callbacks)
- [37. call(), apply() and bind()](./javascript-weird-parts/README.md#37-call-apply-and-bind)
- [38. FUNCTIONAL PROGRAMMING](./javascript-weird-parts/README.md#38-functional-programming)
- [39. Classical vs.  Prototypal Inheritance](./javascript-weird-parts/README.md#39-classical-vs--prototypal-inheritance)
- [40. Everything is an object or a primitive](./javascript-weird-parts/README.md#40-everything-is-an-object-or-a-primitive)
- [41. REFLEXION AND EXTEND](./javascript-weird-parts/README.md#41-reflexion-and-extend)
- [42. Building = Constructing Objects](./javascript-weird-parts/README.md#42-building--constructing-objects)
- [44. Function Constructors and '.prototype'](./javascript-weird-parts/README.md#44-function-constructors-and-prototype)
- [45. DANGER: 'new' and Functions](./javascript-weird-parts/README.md#45-danger-new-and-functions)
- [46. Built-In Function Constructors](./javascript-weird-parts/README.md#46-built-in-function-constructors)
- [47. Dangerous for..in Array  iteration](./javascript-weird-parts/README.md#47-dangerous-forin-array--iteration)
- [48. Object.create and Pure Prototypal Inheritance](./javascript-weird-parts/README.md#48-objectcreate-and-pure-prototypal-inheritance)
- [49. ES6 and Classes](./javascript-weird-parts/README.md#49-es6-and-classes)
- [50. Odds and Ends - Initialization](./javascript-weird-parts/README.md#50-odds-and-ends---initialization)
- [51. 'typeof', 'instanceof' and Figuring Out What Something is](./javascript-weird-parts/README.md#51-typeof-instanceof-and-figuring-out-what-something-is)
- [52. "use strict" mode](./javascript-weird-parts/README.md#52-use-strict-mode)
- [53. Examine Famous Frameworks and Libraries](./javascript-weird-parts/README.md#53-examine-famous-frameworks-and-libraries)
- [53.a. Deep Dive into jQuery source code](./understanding-libraries/README.md#1-deep-dive-into-jquery-code)
- [54. Build a Framework  Library](./understanding-libraries/README.md#2-build-my-own-library)
- [55.  Throttle](./javascript-weird-parts/README.md#55--throttle)
- [55. TypeScript, ES6, Transpiled Languages](./javascript-weird-parts/README.md#56-typescript-es6-transpiled-languages)


## [II) ECMAScript 6 Features](./es6-in-depth/README.md)

- [1. JavaScript Essentials](./es6-in-depth/README.md#1-javascript-essentials)
- [2. ES6 Essentials](./es6-in-depth/README.md#2-es6-essentials)
- [2.0 Arrow functions](./es6-in-depth/README.md#20-arrow-functions)
- [2.1 Assignment with let const](./es6-in-depth/README.md#21-assignment-with-let-const)
- [2.2 Number checking](./es6-in-depth/README.md#22-number-checking)
- [2.3 Block Scoping](./es6-in-depth/README.md#23-block-scoping)
- [2.4 Destructuring Assignment](./es6-in-depth/README.md#24-destructuring-assignment)
- [2.5 Map Filter](./es6-in-depth/README.md#25-map-filter)
- [2.6 Modules](./es6-in-depth/README.md#26-modules)
- [2.7 Spread Rest](./es6-in-depth/README.md#27-spread-rest)
- [2.8 String Helpers](./es6-in-depth/README.md#28-string-helpers)
- [2.9 Template Literals](./es6-in-depth/README.md#29-template-literals)
- [3. Data Structures](./es6-in-depth/README.md#3-data-structures)
- [4. Closures](./es6-in-depth/README.md#4-closures)
- [5. Classes](./es6-in-depth/README.md#5-classes)
- [6. Generators](./es6-in-depth/README.md#6-generators)
- [7. Promises](./es6-in-depth/README.md#7-promises)
- [Quiz:](./es6-in-depth/README.md#quiz)


## III) ECMAScript 7
[./es7/README.md](./es7/README.md)

## IV) ECMAScript 8
[./es8/README.md](./es8/README.md)

# Webpack Configuration - notes

The mini-app with documented configuration:

[Webpack config documentation](./webpack-configs-apps/README.md#full-configuration-tutorial-for--webpack)

## Usefull development external references

- [Write Html fast using CSS syntax and the emmet features available in VS Code](https://docs.emmet.io/cheat-sheet/)

- [Implementation of ES6 features in major JavaScript engines](http://kangax.github.io/es5-compat-table/es6/).

- [ES6 standard - full specification of the ECMAScript 6 language](http://www.ecma-international.org/ecma-262/6.0/)

See more references:
    Transpiled Languages:

 - [Typescript](http://www.typescriptlang.org)
 - [try out writing Typescript code in your browser](http://www.typescriptlang.org/Playground)
 - [more on Traceur](https://github.com/google/traceur-compiler)
 - [writing ES6 code in Traceur in your browser](https://google.github.io/traceur-compiler/demo/repl.html#)


 - [Read a list of features existing or coming in ES6](https://github.com/lukehoban/es6features)
 - [JavaScript the weird Parts](https://www.udemy.com/understand-javascript/)
 - [ES6 in depth](https://www.udemy.com/es6-in-depth/)
- [The complete guide for starting React App with Webpack 4 with Babel 7](https://www.valentinog.com/blog/react-webpack-babel/)
- [Details on html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/blob/master/README.md)

Use my gists:

- [Some usefull shell commands](https://gist.github.com/bitaemi/bfbbe734467d11b1483b9bdb0ef08f2f)

- [Build a starter project for es6 in webpack](https://gist.github.com/bitaemi/d429293325696eb11aaba058fd094f67)

- [ES6 features](https://gist.github.com/bitaemi/f9fd607d0903efe5fe9ac3082153eddb)

- [Transpilers](https://gist.github.com/bitaemi/d0818d10862ac23a751ada7c5521657e)

- [Set-up Webpack and Babel for your web-server](https://gist.github.com/bitaemi/d429293325696eb11aaba058fd094f67)

# Advice for Software Developers

- [Lesson learned - life is far easier when you have clarity and structure in your life! Be organized!](./development-advice/README.md#lesson-learned---life-is-far-easier-when-you-have-clarity-and-structure-in-your-life-be-organized)
- [How to provide tasks estimations](./development-advice/README.md#how-to-provide-tasks-estimations)
- [How to increase your productivity](./development-advice/README.md#how-to-increase-your-productivity)

# Web Dev Interviews Advice

- [JavaScript Interview Questions](./javascript-interviews/README.md#javascript-interview-questions)

