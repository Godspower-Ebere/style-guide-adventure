
import { DayLesson } from "../types";

export const day76: DayLesson = {
  day: 76,
  title: "JavaScript Modules: import/export",
  category: "JavaScript Advanced",
  description: "Learn how to organize your code into reusable, separate files using ES6 modules.",
  learningObjectives: [
    "Understand the benefits of modular programming.",
    "Export variables, functions, and classes using named exports.",
    "Use a single default export per module.",
    "Import code from other modules using `import`.",
    "Understand how to use modules in a web browser."
  ],
  detailedExplanation: `
As your applications grow, keeping all your code in one file becomes unmanageable. Modules allow you to split your code across multiple files, making it organized, reusable, and easier to maintain. ES6 introduced a standardized module system into JavaScript.

### The Core Idea
- Each file is its own module.
- You can choose what code to expose from a module (export).
- You can use that exposed code in other modules (import).

**Important Note for Browsers:** To use ES6 modules in a browser, you must tell the browser that your script is a module. You do this by adding \`type="module"\` to your \`<script>\` tag.
\`\`\`html
<script type="module" src="main.js"></script>
\`\`\`
This enables \`import\` and \`export\` statements and also changes some default behaviors (e.g., modules are automatically in strict mode).

### Exporting
There are two main types of exports: **named** and **default**.

#### 1. Named Exports
You can have multiple named exports per module. They are useful for exporting several utility functions or constants.

**Method 1: Inline**
\`\`\`javascript
// 📁 utils.js
export const PI = 3.14;

export function add(a, b) {
  return a + b;
}

export class Person {
  // ...
}
\`\`\`

**Method 2: At the end**
\`\`\`javascript
// 📁 utils.js
const PI = 3.14;
function add(a, b) { /* ... */ }
class Person { /* ... */ }

export { PI, add, Person };
\`\`\`

#### 2. Default Export
You can only have **one** default export per module. It's often used for the "main" thing a module exports, like a class or a primary function.

\`\`\`javascript
// 📁 User.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}
\`\`\`
Or for a function:
\`\`\`javascript
// 📁 greet.js
export default function(name) {
  console.log(\`Hello, \${name}\`);
}
\`\`\`

### Importing
You use the \`import\` statement to bring exported code into another module.

#### Importing Named Exports
You must use the exact names of the exports, wrapped in curly braces.

\`\`\`javascript
// 📁 main.js
import { PI, add } from './utils.js';

console.log(PI); // 3.14
console.log(add(2, 3)); // 5

// You can also rename imports
import { add as sum } from './utils.js';
console.log(sum(5, 5)); // 10

// Import everything as a single object
import * as utils from './utils.js';
console.log(utils.PI);
console.log(utils.add(1, 1));
\`\`\`

#### Importing a Default Export
You can give the import any name you like.

\`\`\`javascript
// 📁 main.js
import MyUser from './User.js'; // The name 'MyUser' is arbitrary
const user = new MyUser("Alice");

import sayHi from './greet.js'; // The name 'sayHi' is arbitrary
sayHi("Bob");
\`\`\`

#### Mixing Imports
You can import default and named exports in a single statement.

\`\`\`javascript
// 📁 some-module.js has a default export and a named export 'version'
import MyComponent, { version } from './some-module.js';
\`\`\`
`,
  keyTerms: [
    { term: "Module", definition: "A self-contained file of JavaScript code that can export its functionality and import functionality from other modules." },
    { term: "export", definition: "A keyword used to make variables, functions, or classes available to other modules." },
    { term: "import", definition: "A keyword used to bring in code that has been exported from another module." },
    { term: "Named Export", definition: "An export that is identified by its original name. A module can have multiple named exports." },
    { term: "Default Export", definition: "A special type of export for the primary value of a module. A module can only have one default export." },
    { term: `<script type="module">`, definition: "An attribute on the HTML script tag that tells the browser to treat the JavaScript file as an ES6 module." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create a Math Utility Module",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a file named `math.js`.",
        "In `math.js`, create and export two named functions: `sum(a, b)` and `subtract(a, b)`.",
        "Create another file named `main.js`.",
        "In `main.js`, import both functions from `math.js`.",
        "Use the imported functions and log the results to the console."
      ]
    },
    {
      id: 2,
      title: "Default Export a Class",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a file `Car.js`.",
        "In `Car.js`, define a `Car` class with a constructor for `make` and `model`.",
        "Export the `Car` class as the default export.",
        "In `main.js`, import the `Car` class.",
        "Create a new instance of your `Car` and log it."
      ]
    },
    {
      id: 3,
      title: "Combining Exports",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a module `config.js`.",
        "Export a constant `API_URL` as a named export.",
        "Export an object `settings` as the default export. The object should have properties like `theme` and `language`.",
        "In `main.js`, import both the default export and the named export.",
        "Log both imported values to the console."
      ]
    },
    {
      id: 4,
      title: "Importing with an Alias",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Use the `math.js` module from the first exercise.",
        "In `main.js`, import the `sum` function, but rename it to `addNumbers` using the `as` keyword.",
        "Call the function using its new alias `addNumbers` and log the result."
      ]
    }
  ]
};
