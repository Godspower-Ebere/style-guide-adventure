
import { DayLesson } from "../types";

export const day65: DayLesson = {
  day: 65,
  title: "JavaScript Scope",
  category: "JavaScript Basics",
  description: "Understand how JavaScript determines the accessibility of variables in different parts of your code.",
  learningObjectives: [
    "Differentiate between Global Scope and Function (Local) Scope.",
    "Understand Block Scope and how `let` and `const` create it.",
    "Grasp the concept of a 'closure', where a function remembers its outer scope.",
    "Recognize the 'scope chain' and how JavaScript looks for variables."
  ],
  detailedExplanation: `
Scope in JavaScript refers to the context in which variables are declared and can be accessed. Understanding scope is crucial for writing bug-free and maintainable code.

### Global Scope
A variable declared outside of any function has **Global Scope**. It can be accessed from anywhere in your code, including inside functions.

\`\`\`javascript
const globalMessage = "I am global!";

function showMessage() {
  console.log(globalMessage); // Accessible here
}

showMessage();
console.log(globalMessage); // Also accessible here
\`\`\`
Relying too much on global variables is generally considered bad practice as it can lead to naming conflicts and make code harder to reason about.

### Function Scope (Local Scope)
Variables declared inside a function have **Function Scope**. They are only accessible from within that function and any functions nested inside it.

\`\`\`javascript
function calculate() {
  const localResult = 42; // localResult has function scope
  console.log(localResult); // Accessible here
}

calculate();
// console.log(localResult); // This would cause a ReferenceError
\`\`\`

### Block Scope (ES6)
With the introduction of \`let\` and \`const\` in ES6, JavaScript gained **Block Scope**. A block is any code wrapped in curly braces \`{}\`, such as in an \`if\` statement, a \`for\` loop, or a standalone block.

\`\`\`javascript
if (true) {
  let blockVar = "I am in a block";
  const blockConst = "Me too!";
  var oldVar = "I am not!"; // 'var' ignores block scope!

  console.log(blockVar);   // OK
  console.log(blockConst); // OK
  console.log(oldVar);     // OK
}

// console.log(blockVar);   // ReferenceError
// console.log(blockConst); // ReferenceError
console.log(oldVar);     // OK - This is why 'var' can be confusing.
\`\`\`
This behavior makes \`let\` and \`const\` much more predictable and is a primary reason they are preferred over \`var\`.

### Scope Chain and Closures
When your code tries to access a variable, JavaScript looks for it in the current scope. If it can't find it, it looks in the outer scope, and then the scope outside of that, and so on, all the way up to the global scope. This process is called the **scope chain**.

A **closure** is a powerful feature that leverages this. A closure occurs when a function is defined inside another function, allowing the inner function to access the variables of the outer function, even after the outer function has finished executing.

\`\`\`javascript
function createCounter() {
  let count = 0; // 'count' is in the outer function's scope

  // The inner function 'closes over' the 'count' variable
  return function() {
    count++;
    console.log(count);
  };
}

const myCounter = createCounter(); // createCounter() runs and returns the inner function
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3

// The 'count' variable is "private" and cannot be accessed directly from outside
// console.log(count); // ReferenceError
\`\`\`
In this example, the inner function "remembers" its lexical scope, which includes the \`count\` variable. Each time we call \`myCounter\`, it can still access and modify \`count\`. This is a fundamental concept used extensively in advanced JavaScript patterns.
`,
  keyTerms: [
    { term: "Scope", definition: "The context that determines the accessibility of variables and other resources in code." },
    { term: "Global Scope", definition: "The outermost scope. Variables declared here are accessible from anywhere in the program." },
    { term: "Function Scope", definition: "Variables declared within a function are only accessible inside that function." },
    { term: "Block Scope", definition: "Variables declared with `let` or `const` inside a block (`{...}`) are only accessible within that block." },
    { term: "Scope Chain", definition: "The hierarchy of scopes that JavaScript searches through to find a variable." },
    { term: "Closure", definition: "A feature where an inner function has access to its outer function's variables, even after the outer function has completed execution." }
  ],
  exercises: [
    {
      id: 1,
      title: "Scope Detective",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Declare a global variable `hero`.",
        "Create a function `getHero` that declares a local variable `hero` with a different value.",
        "Inside `getHero`, log the local `hero` to the console.",
        "Outside the function, log the global `hero` to the console.",
        "Observe how the two variables with the same name do not conflict due to scope."
      ]
    },
    {
      id: 2,
      title: "Block Scope with Loops",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a `for` loop that runs 3 times.",
        "Inside the loop, declare a variable `i` using `let`.",
        "Also inside the loop, use `const` to declare a variable `message` that includes the value of `i`.",
        "Log `message` inside the loop.",
        "Try to log `i` and `message` outside the loop and observe the ReferenceError."
      ]
    },
    {
      id: 3,
      title: "Simple Closure",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Write a function `createGreeter` that takes one argument, `greeting`.",
        "This function should `return` another function.",
        "The returned function should take one argument, `name`, and log a string combining the `greeting` from the outer function and the `name` from the inner function.",
        "Create two greeters: `const sayHello = createGreeter('Hello');` and `const sayHowdy = createGreeter('Howdy');`.",
        "Call both new functions with a name to see the closure in action: `sayHello('Alice');` and `sayHowdy('Bob');`."
      ]
    },
    {
      id: 4,
      title: "Fix the Scope",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "You are given a piece of code that uses `var` and has a bug related to scope.",
        "The goal is that for each iteration of a loop, a function is created that logs the loop's counter number. But it logs the final number every time.",
        "Rewrite the code using `let` to correctly capture the counter for each iteration, fixing the bug.",
        "Example buggy code: `for (var i = 0; i < 3; i++) { setTimeout(function() { console.log(i); }, 100); }` (This logs 3, 3, 3)."
      ]
    }
  ]
};
