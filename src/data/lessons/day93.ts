
import { DayLesson } from "../types";

export const day93: DayLesson = {
  day: 93,
  title: "JavaScript Modules: `import` and `export`",
  category: "Modern JavaScript",
  description: "Learn how to organize your code into reusable and maintainable modules using the native ES6 `import` and `export` syntax.",
  learningObjectives: [
    "Understand the benefits of modular programming for code organization and reuse.",
    "Use the `export` keyword to make variables, functions, and classes available to other files.",
    "Differentiate between named exports and default exports and know when to use each.",
    "Use the `import` keyword to use exported code in another module.",
    "Learn how to alias imports and import all exports from a module as an object."
  ],
  detailedExplanation: `
As applications grow, keeping all your code in one file becomes unmanageable. **Modules** in JavaScript solve this problem by allowing you to split your code into separate, reusable files. Each file is a module with its own scope, preventing global scope pollution.

### Why Use Modules?
*   **Organization**: Keep related code together.
*   **Reusability**: Write a function once and use it anywhere.
*   **Maintainability**: Smaller, focused files are easier to debug and update.
*   **Dependency Management**: It's clear what code a module needs to run.

### Exporting from a Module
To make code available to other modules, you must **export** it. There are two types of exports:

#### 1. Named Exports
You can have multiple named exports per module. They are distinguished by their specific names.

\`\`\`javascript
// 📁 utils.js

// Exporting variables
export const PI = 3.14159;

// Exporting a function
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Exporting a class
export class User {
  constructor(name) {
    this.name = name;
  }
}
\`\`\`

#### 2. Default Export
You can only have **one** default export per module. It's used for the primary feature of a module.

\`\`\`javascript
// 📁 calculator.js

// This class is the main thing this module provides
export default class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
}
\`\`\`

### Importing into a Module
To use exported code, you **import** it.

#### Importing Named Exports
You import named exports by using their exact names inside curly braces \`{ }\`.

\`\`\`javascript
// 📁 main.js
import { PI, capitalize } from './utils.js';

console.log(PI); // 3.14159
console.log(capitalize('hello')); // Hello
\`\`\`

#### Importing a Default Export
You can give any name you want to a default import.

\`\`\`javascript
// 📁 main.js
import MyCalculator from './calculator.js'; // 'MyCalculator' is an arbitrary name

const calc = new MyCalculator();
console.log(calc.add(5, 3)); // 8
\`\`\`

### Advanced Importing

*   **Aliasing**: Rename an import to avoid naming conflicts.
    \`\`\`javascript
    import { capitalize as makeFirstLetterUpper } from './utils.js';
    \`\`\`

*   **Module Object**: Import everything from a module into a single object.
    \`\`\`javascript
    import * as utils from './utils.js';
    
    console.log(utils.PI);
    const user = new utils.User('Alice');
    \`\`\`
`,
  keyTerms: [
    { term: "Module", definition: "A self-contained file of JavaScript code with its own scope, designed to be reusable." },
    { term: "export", definition: "A keyword used to make functions, objects, or primitive values available to other modules." },
    { term: "import", definition: "A keyword used to bring exported functionality from another module into the current module's scope." },
    { term: "Named Export", definition: "An export that is identified by its name. A module can have multiple named exports." },
    { term: "Default Export", definition: "A special export that represents the main value of a module. A module can only have one default export." },
    { term: "Module Specifier", definition: "The string that identifies the location of a module, typically a relative path (e.g., './utils.js')." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create a Math Utilities Module",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a file named `math.js`.",
        "In `math.js`, create and export two named functions: `sum(a, b)` which returns their sum, and `product(a, b)` which returns their product.",
        "Create a second file `app.js`.",
        "In `app.js`, import both functions from `math.js` and use them to calculate and log the sum of 5 and 10, and the product of 3 and 7."
      ]
    },
    {
      id: 2,
      title: "Default Export for a Class",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a file named `Person.js`.",
        "Inside, define a `Person` class with a constructor that accepts `name` and `age` and a method `greet()` that logs a greeting.",
        "Export the `Person` class as the default export.",
        "In another file, import the `Person` class, create a new instance of it, and call the `greet()` method."
      ]
    },
    {
      id: 3,
      title: "Mixed Exports and Aliasing",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a `config.js` module.",
        "In this module, export a variable `apiKey` as a default export.",
        "Also, export a named variable `apiEndpoint` with the value 'https://api.example.com'.",
        "In a separate file, import the default export as `key` and the named export `apiEndpoint` with an alias `endpointUrl`.",
        "Log both imported values to the console to verify."
      ]
    },
    {
      id: 4,
      title: "Refactor to a Module Object",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Imagine you have a `validators.js` file with three named export functions: `isEmail(str)`, `isPhoneNumber(str)`, and `isNotEmpty(str)`.",
        "First, create this `validators.js` file and implement simple versions of these functions.",
        "In a second file, use the `import * as ...` syntax to import all validators into a single object called `Validator`.",
        "Use the functions from the `Validator` object to check a few example strings and log the results."
      ]
    }
  ]
};
