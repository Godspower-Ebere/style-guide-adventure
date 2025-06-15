
import { DayLesson } from "../types";

export const day95: DayLesson = {
  day: 95,
  title: "Functional Programming Concepts in JavaScript",
  category: "JavaScript Advanced",
  description: "Learn the core principles of functional programming (FP) and how to apply them in JavaScript to write cleaner, more predictable, and more maintainable code.",
  learningObjectives: [
    "Define functional programming and its core concepts of pure functions and immutability.",
    "Understand and write pure functions, and explain their benefits for predictability and testing.",
    "Explain the concept of immutability and how to work with data immutably using techniques like the spread syntax.",
    "Utilize higher-order functions like `map`, `filter`, and `reduce` for declarative data manipulation.",
    "Grasp the idea of function composition to build complex logic from simple, reusable pieces."
  ],
  detailedExplanation: `
**Functional Programming (FP)** is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.

### Core Concepts of Functional Programming

#### 1. Pure Functions
A function is "pure" if it meets two criteria:
*   **Same input, same output**: Given the same input, it will always return the same output.
*   **No side effects**: It does not modify anything outside of its own scope. It doesn't change other variables, log to the console, or write to a file.

\`\`\`javascript
// Pure function: predictable and testable
function square(x) {
  return x * x;
}

// Impure function: has a side effect (modifies an external variable)
let value = 5;
function squareAndAdd() {
  value = value * value; // Side effect!
  return value;
}
\`\`\`
Pure functions are easy to test, reason about, and run in parallel.

#### 2. Immutability
Immutability means that once data is created, it cannot be changed. Instead of modifying an existing object or array, you create a *new* one with the desired changes. JavaScript doesn't enforce immutability, but you can follow this principle using common patterns.

\`\`\`javascript
const user = { name: 'Alice', age: 30 };

// Instead of mutating: user.age = 31; (BAD)
// Create a new object with the change:
const updatedUser = { ...user, age: 31 }; // Using spread syntax

const numbers = [1, 2, 3, 4];

// Instead of mutating: numbers.push(5); (BAD)
// Create a new array:
const newNumbers = [...numbers, 5];
\`\`\`
Immutability prevents hard-to-find bugs where data is unexpectedly changed somewhere in your application.

#### 3. Higher-Order Functions
A function that either takes one or more functions as arguments, or returns a function as its result. We've already seen these: \`map\`, \`filter\`, and \`reduce\` are prime examples. They allow us to write **declarative** code (what to do) instead of **imperative** code (how to do it).

\`\`\`javascript
// Imperative: "how"
const arr = [1, 2, 3];
const doubled = [];
for (let i = 0; i < arr.length; i++) {
  doubled.push(arr[i] * 2);
}

// Declarative: "what"
const arr2 = [1, 2, 3];
const doubled2 = arr2.map(n => n * 2);
\`\`\`

#### 4. Function Composition
The process of combining two or more functions to produce a new function. Composing functions is like creating a pipeline where the output of one function becomes the input of the next.

\`\`\`javascript
const capitalize = (str) => str.toUpperCase();
const exclaim = (str) => \`\${str}!\`;

const shout = (str) => exclaim(capitalize(str));

console.log(shout('hello')); // "HELLO!"
\`\`\`
This allows you to build complex logic from small, simple, and reusable functions.
`,
  keyTerms: [
    { term: "Functional Programming (FP)", definition: "A programming paradigm based on composing pure functions and avoiding shared state and mutable data." },
    { term: "Pure Function", definition: "A function that always returns the same output for the same input and has no side effects." },
    { term: "Side Effect", definition: "Any interaction by a function with the outside world, such as modifying a global variable, logging, or making a network request." },
    { term: "Immutability", definition: "The principle that data should not be changed after it is created. New data is created instead of modifying existing data." },
    { term: "Higher-Order Function (HOF)", definition: "A function that takes another function as an argument, returns a function, or both." },
    { term: "Declarative vs. Imperative", definition: "Declarative programming focuses on *what* the program should accomplish, while imperative programming focuses on *how* to accomplish it." }
  ],
  exercises: [
    {
      id: 1,
      title: "Identify Pure and Impure Functions",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Write a pure function called `add(a, b)` that returns the sum of two numbers.",
        "Write an impure function `addToTotal(num)` that adds a number to a global `total` variable.",
        "In comments, explain why the first function is pure and the second is impure."
      ]
    },
    {
      id: 2,
      title: "Immutable Array Update",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an array of strings: `['apple', 'banana', 'cherry']`.",
        "Write a function `addFruit(fruits, fruit)` that takes an array and a new fruit string.",
        "The function should return a new array with the new fruit added to the end, without modifying the original array.",
        "Use the spread syntax `...` to achieve this.",
        "Log the original array and the new array to prove the original was not changed."
      ]
    },
    {
      id: 3,
      title: "Declarative Data Transformation",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Start with an array of user objects: `[{ id: 1, name: 'Alice', isActive: true }, { id: 2, name: 'Bob', isActive: false }, { id: 3, name: 'Charlie', isActive: true }]`.",
        "Using a chain of `.filter()` and `.map()`, create a new array containing only the names of the active users, converted to uppercase.",
        "The final result should be `['ALICE', 'CHARLIE']`.",
        "Do this in a single line of code after the initial array definition."
      ]
    },
    {
      id: 4,
      title: "Basic Function Composition",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create two simple, pure functions: `trim(str)` which removes leading/trailing whitespace, and `sanitize(str)` which converts the string to lowercase.",
        "Create a third function `prepareString(str)` that composes the other two.",
        "It should first trim the string, and then sanitize the result.",
        "Test `prepareString` with an input like '  HELLO WORLD  ' and verify the output is 'hello world'."
      ]
    }
  ]
};
