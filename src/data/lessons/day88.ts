import { DayLesson } from "../types";

export const day88: DayLesson = {
  day: 88,
  title: "Modern JavaScript: Modules",
  category: "Modern JavaScript",
  description: "Learn how to organize your code into clean, reusable, and maintainable pieces using ES6 Modules.",
  learningObjectives: [
    "Understand the benefits of using a module system.",
    "Export variables, functions, and classes using named exports.",
    "Export a single value using a default export.",
    "Import values from other modules using `import`.",
    "Differentiate between named and default imports.",
    "Understand how to use the `type='module'` attribute in a script tag."
  ],
  detailedExplanation: `
As applications grow, keeping all your JavaScript in one file becomes unmanageable. **Modules** allow you to split your code into separate files and share code between them. This improves organization, reusability, and maintainability. ES6 introduced a standardized module system built into the JavaScript language.

To use ES6 modules in the browser, you must tell the browser that a script is a module by adding \\\`type="module"\\\` to the \\\`<script>\\\` tag.
\\\`\\\`\\\`html
<!-- This script will be treated as a module -->
<script type="module" src="app.js"></script>
\\\`\\\`\\\`
Modules have some key characteristics:
*   They are automatically in **strict mode**.
*   Variables declared in a module are **scoped to that module** by default. They are not automatically added to the global scope.
*   You must explicitly \\\`export\\\` what you want to share and \\\`import\\\` what you need.

### Named Exports
You can export multiple values from a single file using the \\\`export\\\` keyword. These are called **named exports**.

\\\`\\\`\\\`javascript
// 📁 utils.js

export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export class User {
  constructor(name) {
    this.name = name;
  }
}
\\\`\\\`\\\`

To import these, you use curly braces \\\`{}\\\` with the exact names of the exports.

\\\`\\\`\\\`javascript
// 📁 app.js

import { PI, add, User } from './utils.js';
// The './' is important to specify a local file path.

console.log(PI); // 3.14159

const sum = add(5, 10);
console.log(sum); // 15

const user = new User('Alice');
console.log(user.name); // 'Alice'

// You can also import everything as a single object
import * as utils from './utils.js';
console.log(utils.PI);
\\\`\\\`\\\`

### Default Export
A module can have **one (and only one) default export**. This is useful for modules that have a primary purpose, like exporting a single class or function.

\\\`\\\`\\\`javascript
// 📁 Greeter.js

export default class Greeter {
  constructor(greeting) {
    this.greeting = greeting;
  }
  greet(name) {
    return \`\\\${this.greeting}, \\\${name}!\`;
  }
}
\\\`\\\`\\\`

When you import a default export, you don't use curly braces, and you can give it any name you like.

\\\`\\\`\\\`javascript
// 📁 app.js

import MyGreeter from './Greeter.js'; // The name 'MyGreeter' is arbitrary

const greeter = new MyGreeter('Hello');
console.log(greeter.greet('World')); // "Hello, World!"
\\\`\\\`\\\`

You can have both named exports and a default export in the same file.
\\\`\\\`\\\`javascript
// 📁 app.js
import MyGreeter, { PI, add } from './someModule.js';
\\\`\\\`\\\`
`,
  keyTerms: [
    { term: "Module", definition: "A self-contained file of JavaScript code that can export and import functionality from other modules." },
    { term: "export", definition: "A keyword used to make variables, functions, or classes available for use in other modules." },
    { term: "import", definition: "A keyword used to bring exported functionality from one module into another." },
    { term: "Named Export", definition: "A way to export multiple values from a module. They are imported using their exact names inside curly braces." },
    { term: "Default Export", definition: "A way to export a single, primary value from a module. It can be imported with any name." },
    { term: "`type='module'`", definition: "An attribute on a `<script>` tag that tells the browser to treat the linked file as an ES6 module." }
  ],
  exercises: [
    {
      id: 1,
      title: "Math Utilities",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a file named `math.js`.",
        "In `math.js`, create and export two functions using named exports: `multiply(a, b)` and `subtract(a, b)`.",
        "Create a main file `app.js`.",
        "In `app.js`, import both functions from `math.js`.",
        "Use the imported functions and log the results to the console."
      ]
    },
    {
      id: 2,
      title: "Default Export Component",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a file `Logger.js`.",
        "In this file, create a class `Logger` with two methods: `log(message)` and `error(message)`, both of which just `console.log` or `console.error` the message with a prefix.",
        "Export this class as the default export.",
        "In a main `app.js` file, import the `Logger` class (give it any name you want).",
        "Create an instance of your logger and test both methods."
      ]
    },
    {
      id: 3,
      title: "Combining Exports",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a file `config.js`.",
        "In this file, define a `const API_KEY = '...';` and a `const API_URL = '...';` as named exports.",
        "Also create a default export which is an object containing some default settings, like `{ theme: 'light', version: '1.0' }`.",
        "In `app.js`, import the default settings and both named constants.",
        "Log all three imported values to the console."
      ]
    },
    {
      id: 4,
      title: "Refactor to Modules",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Imagine you have a single large JS file for a small app. It has functions for API calls (`fetchUser`, `saveSettings`) and functions for DOM manipulation (`updateDOM`, `showError`).",
        "Create two new files: `api.js` and `ui.js`.",
        "Move the API-related functions into `api.js` and export them.",
        "Move the DOM-related functions into `ui.js` and export them.",
        "Create a main `app.js` that imports functions from both modules to orchestrate the application logic (e.g., fetch a user, then update the DOM with the user's data)."
      ]
    }
  ]
};
