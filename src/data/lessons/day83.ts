
import { DayLesson } from "../types";

export const day83: DayLesson = {
  day: 83,
  title: "Asynchronous JS: Async/Await",
  category: "Asynchronous JavaScript",
  description: "Master the most modern and readable syntax for handling Promises: async/await. Write asynchronous code that looks and behaves like synchronous code.",
  learningObjectives: [
    "Understand that async/await is syntactic sugar over Promises.",
    "Declare an asynchronous function using the `async` keyword.",
    "Pause function execution to wait for a Promise to settle using the `await` keyword.",
    "Handle successful results from awaited Promises.",
    "Handle errors from awaited Promises using `try...catch` blocks."
  ],
  detailedExplanation: `
ES2017 introduced \`async\` and \`await\`, which provide a huge improvement in the syntax of asynchronous programming. They allow you to write promise-based code as if it were synchronous, but without blocking the main thread.

### The \`async\` Keyword
Placing the \`async\` keyword before a function declaration turns it into an **async function**. An async function always returns a Promise. If the function returns a value, the Promise will be resolved with that value. If the function throws an error, the Promise will be rejected with that error.

\`\`\`javascript
async function myFunc() {
  return "Hello";
}

myFunc().then(console.log); // Logs "Hello"

// Is equivalent to:
function myFuncEquivalent() {
  return Promise.resolve("Hello");
}
\`\`\`

### The \`await\` Keyword
The real magic happens with \`await\`. The \`await\` operator can only be used **inside an \`async\` function**. It makes JavaScript wait until the Promise settles and returns its result.

\`\`\`javascript
function getMessage() {
  return new Promise(resolve => {
    setTimeout(() => resolve("This is the message!"), 1500);
  });
}

async function logMessage() {
  console.log("Waiting for message...");
  const message = await getMessage(); // Pauses execution here until the promise resolves
  console.log(message); // "This is the message!" - runs after 1.5 seconds
  console.log("Done.");
}

logMessage();
\`\`\`
Behind the scenes, \`await\` is just a cleaner way to write \`.then()\`. The code above is much easier to read than its promise-chaining equivalent.

### Error Handling with \`try...catch\`
What happens if an awaited promise rejects? The \`await\` expression throws an error. You can handle these errors using a standard, synchronous-style \`try...catch\` block.

\`\`\`javascript
function mightFail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate failure
      reject(new Error("Something went wrong!"));
    }, 1000);
  });
}

async function process() {
  try {
    console.log("Attempting operation...");
    const result = await mightFail();
    console.log("Success:", result); // This line will not be reached
  } catch (error) {
    console.error("Caught an error:", error.message);
  } finally {
    console.log("Operation complete.");
  }
}

process();
\`\`\`
This is often preferred over a \`.catch()\` block because it allows you to handle errors from both synchronous and asynchronous code within the same block, making the logic much more straightforward.

### Sequential vs. Concurrent Execution
A common mistake is to \`await\` promises sequentially when they could be run in parallel.

\`\`\`javascript
// SLOW: Sequential
async function getABC_Slow() {
  const A = await getValueA(); // waits
  const B = await getValueB(); // then waits
  const C = await getValueC(); // then waits
  return [A, B, C];
}

// FAST: Concurrent
async function getABC_Fast() {
  // Start all three operations without awaiting
  const promiseA = getValueA();
  const promiseB = getValueB();
  const promiseC = getValueC();
  
  // Now await them all at once
  const [A, B, C] = await Promise.all([promiseA, promiseB, promiseC]);
  return [A, B, C];
}
\`\`\`
If the operations don't depend on each other, running them concurrently with \`Promise.all()\` is much more efficient.
`,
  keyTerms: [
    { term: "async", definition: "A keyword that declares a function as asynchronous, causing it to implicitly return a Promise." },
    { term: "await", definition: "An operator used inside an async function to pause execution and wait for a Promise to resolve or reject." },
    { term: "Syntactic Sugar", definition: "Syntax within a programming language that is designed to make things easier to read or to express, while not introducing any new functionality." },
    { term: "try...catch", definition: "A statement that allows you to define a block of code to be tested for errors while it is being executed (the `try` block) and a block of code to be executed if an error occurs (the `catch` block)." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Async Function",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an `async` function called `greet`.
        "Inside `greet`, create a promise that resolves with the string 'Hello, Async World!' after a 1-second delay.",
        "Use `await` to get the result from the promise.",
        "Log the result to the console.",
        "Call your `greet` function."
      ]
    },
    {
      id: 2,
      title: "Refactor Promise Chain to Async/Await",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Take the promise-chaining exercise from the previous day (`orderPizza`, `bakePizza`, `deliverPizza`).",
        "Create a new `async` function called `handlePizzaOrder`.",
        "Inside this function, call and `await` each of the three pizza functions in sequence.",
        "Log the result of each step.",
        "Compare the readability of the async/await version to the `.then()` chain."
      ]
    },
    {
      id: 3,
      title: "Handling Errors with try/catch",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a function `fetchData` that returns a promise.",
        "The promise should randomly either resolve with `{ data: 'some data' }` or reject with `new Error('Network Error')` after a 1-second delay. (Use `Math.random() > 0.5`).",
        "Create an `async` function `processData`.",
        "Inside `processData`, use a `try...catch` block to `await` the result of `fetchData()`.",
        "In the `try` block, log the successful data. In the `catch` block, log the error message.",
        "Run `processData` several times to see both outcomes."
      ]
    },
    {
      id: 4,
      title: "Concurrent Awaits with Promise.all",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create two `async` functions: `fetchUser(id)` and `fetchPosts(id)`.
        "Both should return promises that resolve with mock data after a delay (`{id: 1, name: '...'}` and `[{...}, {...}]`).",
        "Create a third `async` function `getUserProfileData(id)`.",
        "Inside `getUserProfileData`, call `fetchUser` and `fetchPosts` concurrently (without awaiting them individually).",
        "Use `await Promise.all([...])` to wait for both promises to resolve.",
        "Log the combined results (user and posts)."
      ]
    }
  ]
};
