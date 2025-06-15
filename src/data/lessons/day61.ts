
import { DayLesson } from "../types";

export const day61: DayLesson = {
  day: 61,
  title: "Introduction to JavaScript: The Language of the Web",
  category: "JavaScript Basics",
  description: "Begin your journey into JavaScript, the scripting language that brings interactivity and dynamic behavior to websites.",
  learningObjectives: [
    "Understand what JavaScript is and its role in web development.",
    "Learn how to include JavaScript in an HTML file.",
    "Declare variables using `var`, `let`, and `const` and understand their differences.",
    "Identify and use basic JavaScript data types: String, Number, Boolean, Null, and Undefined."
  ],
  detailedExplanation: `
JavaScript (JS) is a high-level, interpreted programming language that, alongside HTML and CSS, is one of the core technologies of the World Wide Web. While HTML provides the structure and CSS the style, JavaScript provides the interactivity. Everything from validating a form to building a complex single-page application is done with JavaScript.

### How to Add JavaScript to a Page

There are two primary ways to include JavaScript:

**1. Internal JavaScript (in a \`<script>\` tag):**
You can write JS directly within your HTML file inside \`<script>\` tags. This is good for small, page-specific scripts.

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <script>
    // JavaScript code goes here
    console.log("This message is from the internal script!");
    alert("Welcome!");
  </script>
</body>
</html>
\`\`\`
**Note:** It's best practice to place the \`<script>\` tag just before the closing \`</body>\` tag. This ensures the HTML content is parsed and rendered before the browser executes the script, preventing errors and improving perceived load time.

**2. External JavaScript (linking a \`.js\` file):**
For larger scripts or code you want to reuse across multiple pages, you should use an external file.

\`\`\`html
<!-- index.html -->
...
<body>
  ...
  <script src="myscript.js"></script>
</body>
</html>
\`\`\`
\`\`\`javascript
// myscript.js
console.log("This message is from the external file!");
\`\`\`

### Variables: Storing Data

Variables are containers for storing data values. In JavaScript, you can declare variables using three keywords:

- **\`var\`**: The original way to declare variables. It has function scope, not block scope, which can lead to confusing behavior. Its use is generally discouraged in modern JavaScript.
- **\`let\`**: Introduced in ES6 (2015). It allows you to declare variables that are limited to the scope of a block statement (block scope), which is much more predictable. You can reassign a \`let\` variable.
- **\`const\`**: Also introduced in ES6. It also has block scope. A \`const\` variable cannot be reassigned after it's declared. This is useful for values that should not change, like a mathematical constant or an API key.

\`\`\`javascript
// 'var' has function scope
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Outputs 10, even though x was declared inside the if-block
}

// 'let' has block scope
function testLet() {
  if (true) {
    let y = 20;
    console.log(y); // Outputs 20
  }
  // console.log(y); // This would cause an error, y is not defined here
}

// 'const' cannot be reassigned
const pi = 3.14;
// pi = 3.14159; // This would throw an error
\`\`\`

### Basic Data Types

JavaScript has several primitive data types:
- **String**: A sequence of characters, written in single or double quotes. e.g., \`"Hello, World!"\`.
- **Number**: Both integers and floating-point numbers. e.g., \`100\`, \`3.14\`.
- **Boolean**: Represents a logical entity and can have two values: \`true\` or \`false\`.
- **Undefined**: A variable that has been declared but not assigned a value has the value \`undefined\`.
- **Null**: Represents the intentional absence of any object value. It must be explicitly assigned. e.g., \`let myVar = null;\`.

\`\`\`javascript
let name = "Alice";      // String
let age = 30;            // Number
let isStudent = true;    // Boolean
let car;                 // Undefined
let wallet = null;       // Null
\`\`\`
`,
  keyTerms: [
    { term: "JavaScript (JS)", definition: "A programming language that enables interactive web pages." },
    { term: "Variable", definition: "A named container for storing data." },
    { term: "let", definition: "A keyword to declare a block-scoped variable that can be reassigned." },
    { term: "const", definition: "A keyword to declare a block-scoped variable that cannot be reassigned." },
    { term: "Data Type", definition: "The classification of a particular type of data, such as a String, Number, or Boolean." }
  ],
  exercises: [
    {
      id: 1,
      title: "Your First Script",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML file.",
        "Inside the `<body>`, add a `<script>` tag.",
        "Inside the script, use `console.log()` to print your name to the browser console.",
        "Use `alert()` to show a popup message saying 'Hello from JavaScript!'."
      ]
    },
    {
      id: 2,
      title: "Variable Declaration",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "In a script, declare a variable named `favoriteFood` using `let` and assign it your favorite food as a string.",
        "Declare a variable named `birthYear` using `const` and assign it your birth year as a number.",
        "Use `console.log()` to print both variables.",
        "Try to reassign `birthYear` to a new value and observe the error in the console."
      ]
    },
    {
      id: 3,
      title: "Data Types Exploration",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Declare five variables, one for each data type: String, Number, Boolean, Undefined, and Null.",
        "Use the `typeof` operator in `console.log()` to check the type of each variable.",
        "For example: `console.log(typeof myStringVariable);`",
        "Write a comment next to each `console.log` explaining the output."
      ]
    },
    {
      id: 4,
      title: "External Script",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Create an HTML file and a separate `script.js` file.",
        "Link the `script.js` file to your HTML file using the `<script>` tag with the `src` attribute.",
        "In `script.js`, declare a constant `courseName` with the value '100 Days of Code'.",
        "Use `console.log()` to print a message like: `Welcome to the 100 Days of Code challenge!`."
      ]
    }
  ]
};
