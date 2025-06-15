
import { DayLesson } from "../types";

export const day64: DayLesson = {
  day: 64,
  title: "JavaScript Functions",
  category: "JavaScript Basics",
  description: "Learn to create reusable blocks of code with functions, a core concept in almost every programming language.",
  learningObjectives: [
    "Understand the purpose of functions for code reusability and organization.",
    "Define and call functions using function declarations and function expressions.",
    "Pass data to functions using parameters and receive data back using the `return` statement.",
    "Learn about arrow functions, a more concise syntax for writing functions."
  ],
  detailedExplanation: `
Functions are one of the fundamental building blocks in JavaScript. A function is a reusable set of statements that performs a task or calculates a value.

### Why Use Functions?
- **Reusability (DRY Principle):** Don't Repeat Yourself. Write the code once and use it multiple times.
- **Organization:** Break down complex problems into smaller, more manageable pieces.
- **Abstraction:** Hide complex logic behind a simple interface. You can use a function without needing to know how it works internally.

### Defining and Calling Functions

There are several ways to define a function.

**1. Function Declaration**
This is the classic way. The function is "hoisted," meaning it can be called before it is defined in the code.

\`\`\`javascript
// Defining the function
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Calling the function
greet("Alice"); // Outputs: "Hello, Alice!"
greet("Bob");   // Outputs: "Hello, Bob!"
\`\`\`

**2. Function Expression**
Here, a function is assigned to a variable. These are not hoisted, so you can only call them after they have been defined.

\`\`\`javascript
const farewell = function(name) {
  console.log("Goodbye, " + name + ".");
};

farewell("Charlie"); // Outputs: "Goodbye, Charlie."
\`\`\`

### Parameters and Return Values

- **Parameters** are the named variables listed in the function definition. They act as placeholders for the values you'll pass to the function.
- **Arguments** are the actual values passed to the function when it is called.
- The **\`return\`** statement stops the execution of a function and returns a value. A function can only have one \`return\` statement execute. If no \`return\` statement is used, the function implicitly returns \`undefined\`.

\`\`\`javascript
function add(num1, num2) { // num1 and num2 are parameters
  const sum = num1 + num2;
  return sum; // Returns the calculated value
}

let result = add(5, 10); // 5 and 10 are arguments
console.log(result); // Outputs: 15
\`\`\`

### Arrow Functions (ES6)
Arrow functions provide a more concise syntax for writing function expressions. They are especially useful for short, simple functions.

\`\`\`javascript
// Traditional function expression
const square = function(x) {
  return x * x;
};

// Arrow function equivalent (explicit return)
const squareArrow = (x) => {
  return x * x;
};

// Arrow function with implicit return (for single expressions)
const squareArrowConcise = x => x * x;

console.log(squareArrowConcise(5)); // Outputs: 25

// Arrow function with multiple parameters
const multiply = (a, b) => a * b;
console.log(multiply(4, 3)); // Outputs: 12
\`\`\`
**Note:** Arrow functions have a different behavior with the \`this\` keyword, which is an important distinction we'll cover in a later lesson on objects.
`,
  keyTerms: [
    { term: "Function", definition: "A block of reusable code designed to perform a particular task." },
    { term: "Function Declaration", definition: "A traditional way to define a function using the `function` keyword. Declarations are hoisted." },
    { term: "Function Expression", definition: "Defining a function as part of an expression, typically by assigning it to a variable. Expressions are not hoisted." },
    { term: "Parameter", definition: "A named variable in the definition of a function, acting as a placeholder for an argument." },
    { term: "Argument", definition: "The actual value that is passed to a function when it is called." },
    { term: "Return", definition: "A statement that specifies the value to be returned by a function, ending its execution." },
    { term: "Arrow Function", definition: "A concise syntax for writing functions introduced in ES6, with a different handling of the `this` keyword." }
  ],
  exercises: [
    {
      id: 1,
      title: "Area of a Rectangle",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Write a function declaration named `calculateArea`.",
        "It should accept two parameters: `width` and `height`.",
        "The function should multiply the two parameters and `return` the result.",
        "Call the function with some numbers and log the returned value to the console."
      ]
    },
    {
      id: 2,
      title: "Convert to Arrow Function",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Take the `calculateArea` function you just wrote.",
        "Rewrite it as a function expression assigned to a `const` variable.",
        "Then, rewrite it again as a concise arrow function.",
        "Verify that all three versions produce the same result."
      ]
    },
    {
      id: 3,
      title: "Is It Even?",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Write a function named `isEven` that takes one number as a parameter.",
        "The function should return `true` if the number is even, and `false` if it is odd.",
        "Hint: Use the modulus operator (`%`).",
        "Test your function with several different numbers."
      ]
    },
    {
      id: 4,
      title: "Greeting Generator",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Write a function `createGreeting` that takes a single parameter, `name`.",
        "The function should return a greeting string, e.g., `'Hello, ' + name + '!'`.",
        "The function should have a default value for the `name` parameter so that if it's called without an argument, it returns 'Hello, guest!'.",
        "Hint: You can set default parameter values like this: `function myFunc(param = defaultValue) {...}`.",
        "Test it by calling it with and without an argument."
      ]
    }
  ]
};
