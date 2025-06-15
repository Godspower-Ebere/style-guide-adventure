
import { DayLesson } from "../types";

export const day74: DayLesson = {
  day: 74,
  title: "Asynchronous JavaScript: Callbacks and Promises",
  category: "JavaScript Advanced",
  description: "Understand the fundamentals of asynchronous programming in JavaScript, starting with callbacks and moving to the more robust Promises.",
  learningObjectives: [
    "Understand the difference between synchronous and asynchronous code execution.",
    "Recognize and handle asynchronous operations using callback functions.",
    "Identify the problems with callbacks, such as 'Callback Hell'.",
    "Create and consume Promises to manage asynchronous operations more cleanly.",
    "Chain multiple asynchronous operations together using `.then()`."
  ],
  detailedExplanation: `
JavaScript is single-threaded, meaning it can only do one thing at a time. However, many operations, like network requests or file system reads, can take a long time. If the code waited for these to complete, the entire application would freeze. This is where asynchronous programming comes in.

### Synchronous vs. Asynchronous
- **Synchronous:** Code is executed line by line, in order. Each task must finish before the next one starts.
\`\`\`javascript
console.log("First");
console.log("Second"); // This runs only after "First" is done.
console.log("Third");
\`\`\`
- **Asynchronous:** Some tasks are started, and the program continues to execute other code without waiting for them to finish. When the async task is complete, a function is called to handle the result.
\`\`\`javascript
console.log("First");
setTimeout(() => {
  console.log("Second (after 2 seconds)");
}, 2000);
console.log("Third"); // This runs immediately, not waiting for setTimeout.
// Output: First, Third, Second (after 2 seconds)
\`\`\`

### 1. Callbacks
A callback is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action. This is the traditional way to handle async operations.

\`\`\`javascript
function fetchData(callback) {
  // Simulating a network request
  setTimeout(() => {
    const data = { id: 1, name: "Sample Data" };
    callback(null, data); // Standard pattern: (error, result)
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Data received:", data);
  }
});
\`\`\`
**Callback Hell:** When you need to perform multiple dependent asynchronous operations, you end up nesting callbacks inside each other, leading to deeply indented, hard-to-read code often called "Callback Hell" or the "Pyramid of Doom".

### 2. Promises
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It provides a cleaner, more robust way to handle async code.

A Promise can be in one of three states:
- **Pending:** The initial state; neither fulfilled nor rejected.
- **Fulfilled (or Resolved):** The operation completed successfully.
- **Rejected:** The operation failed.

#### Creating a Promise
You create a promise with a constructor that takes an "executor" function. This function has two parameters: \`resolve\` and \`reject\`, which are functions you call to change the promise's state.

\`\`\`javascript
const myPromise = new Promise((resolve, reject) => {
  // Perform an async operation
  const success = true; // or false
  setTimeout(() => {
    if (success) {
      resolve("The operation was successful!");
    } else {
      reject("The operation failed.");
    }
  }, 1000);
});
\`\`\`

#### Consuming a Promise
You use the \`.then()\` and \`.catch()\` methods to handle the outcome.
- \`.then(onFulfilled, onRejected)\`: Takes two optional functions. The first runs if the promise is fulfilled, the second if it's rejected.
- \`.catch(onRejected)\`: A shorthand for \`.then(null, onRejected)\`. It's the standard way to handle errors.
- \`.finally(onFinally)\`: Executes when the promise is settled (either fulfilled or rejected).

\`\`\`javascript
myPromise
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Promise has settled.");
  });
\`\`\`
**Chaining Promises:** The real power of promises is chaining. The \`.then()\` method returns a *new* promise, allowing you to chain multiple async operations together in a flat, readable way, avoiding Callback Hell.

\`\`\`javascript
fetchDataPromise()
  .then(data => {
    console.log("Step 1 done.");
    return processDataPromise(data); // Returns another promise
  })
  .then(processedData => {
    console.log("Step 2 done.");
    return save_data(processedData); // Returns another promise
  })
  .then(saveResult => {
    console.log("All done!", saveResult);
  })
  .catch(error => {
    console.error("An error occurred at some step:", error);
  });
\`\`\`
`,
  keyTerms: [
    { term: "Asynchronous", definition: "Code execution where tasks can run in the background, allowing the main program to continue without waiting for them to complete." },
    { term: "Callback", definition: "A function passed as an argument to another function, to be executed after an operation has completed." },
    { term: "Callback Hell", definition: "A situation where multiple nested callbacks create deeply indented and hard-to-read code." },
    { term: "Promise", definition: "An object that represents the eventual result of an asynchronous operation. It can be pending, fulfilled, or rejected." },
    { term: ".then()", definition: "A method on a Promise that schedules a callback to be executed when the promise is fulfilled." },
    { term: ".catch()", definition: "A method on a Promise that schedules a callback to be executed when the promise is rejected." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simulate a Callback",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Write a function `delayedGreeting(name, callback)`.",
        "Inside, use `setTimeout` to wait for 2 seconds.",
        "After 2 seconds, call the `callback` function with a string 'Hello, [name]!'.",
        "Call `delayedGreeting` with your name and a callback function that logs the result to the console."
      ]
    },
    {
      id: 2,
      title: "Create a Simple Promise",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a function `checkNumber(num)` that returns a new Promise.",
        "The promise should resolve with the string 'Number is greater than 10' if `num` is greater than 10.",
        "The promise should reject with the string 'Number is not greater than 10' otherwise.",
        "Test your function with numbers both greater and less than 10, using `.then()` and `.catch()` to log the results."
      ]
    },
    {
      id: 3,
      title: "Chaining Promises",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a function `doubleNumber(num)` that returns a promise.",
        "The promise should resolve with the number doubled after 1 second.",
        "Chain three calls to this function together using `.then()`.",
        "Start with the number 5. The final result in the last `.then()` should be 40 (5 * 2 * 2 * 2).",
        "Log the result at each step of the chain."
      ]
    },
    {
      id: 4,
      title: "Convert a Callback to a Promise",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Take the `delayedGreeting` function from the first exercise.",
        "Rewrite it as a new function `delayedGreetingPromise(name)` that returns a promise instead of using a callback.",
        "The promise should resolve with the greeting string after 2 seconds.",
        "Call the new function and use `.then()` to log the result."
      ]
    }
  ]
};
