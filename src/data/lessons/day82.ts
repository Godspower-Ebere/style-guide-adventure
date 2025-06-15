
import { DayLesson } from "../types";

export const day82: DayLesson = {
  day: 82,
  title: "Asynchronous JS: Promises",
  category: "Asynchronous JavaScript",
  description: "Learn to manage asynchronous operations in a cleaner, more readable way using Promises, the modern alternative to callbacks.",
  learningObjectives: [
    "Understand the three states of a Promise: pending, fulfilled, and rejected.",
    "Create a new Promise using the `new Promise()` constructor.",
    "Handle successful outcomes using `.then()`.",
    "Handle errors using `.catch()`.",
    "Chain multiple `.then()` calls to perform sequential asynchronous operations.",
    "Use `Promise.all()` to run multiple promises concurrently."
  ],
  detailedExplanation: `
A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It provides a much cleaner and more robust way to handle async code than callbacks.

A Promise can be in one of three states:
*   **Pending:** The initial state; neither fulfilled nor rejected.
*   **Fulfilled (or Resolved):** The operation completed successfully, and the promise has a resulting value.
*   **Rejected:** The operation failed, and the promise has a reason for the failure (an error).

Once a promise is fulfilled or rejected, it is **settled** and its state can never change again.

### Creating and Using a Promise
You can create a promise with its constructor, which takes a function (the "executor") with two arguments: \`resolve\` and \`reject\`.

\`\`\`javascript
const myPromise = new Promise((resolve, reject) => {
  console.log("Performing an async operation...");
  setTimeout(() => {
    const success = true; // Simulate success or failure
    if (success) {
      resolve("Operation was successful!"); // Fulfills the promise
    } else {
      reject(new Error("Operation failed.")); // Rejects the promise
    }
  }, 2000);
});

console.log(myPromise); // Promise { <pending> }

myPromise
  .then((successMessage) => {
    // This block runs if the promise is resolved
    console.log("Success:", successMessage);
  })
  .catch((errorMessage) => {
    // This block runs if the promise is rejected
    console.error("Error:", errorMessage.message);
  })
  .finally(() => {
    // This block runs regardless of success or failure
    console.log("Operation finished.");
  });
\`\`\`

### Chaining Promises
The real power of promises comes from chaining. The \`.then()\` method itself returns a new promise, allowing you to chain asynchronous actions in a flat, readable sequence, avoiding callback hell.

\`\`\`javascript
function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 1 Complete"), 500);
  });
}

function stepTwo(dataFromStepOne) {
  console.log(dataFromStepOne); // "Step 1 Complete"
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 2 Complete"), 500);
  });
}

function stepThree(dataFromStepTwo) {
  console.log(dataFromStepTwo); // "Step 2 Complete"
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 3 Complete"), 500);
  });
}

stepOne()
  .then(stepTwo)
  .then(stepThree)
  .then((finalResult) => {
    console.log(finalResult); // "Step 3 Complete"
    console.log("All steps are done!");
  })
  .catch((error) => {
    console.error("An error occurred in the chain:", error);
  });
\`\`\`
Notice how much cleaner this is compared to nested callbacks. A single \`.catch()\` at the end can handle an error from any point in the chain.

### \`Promise.all()\`
If you have multiple promises and you don't care about their order, but you need to wait for all of them to complete, \`Promise.all()\` is perfect. It takes an array of promises and returns a new promise that resolves when all input promises have resolved.

\`\`\`javascript
const p1 = Promise.resolve(3);
const p2 = 42; // Not a promise, will be treated as a resolved promise
const p3 = new Promise((resolve) => setTimeout(() => resolve("foo"), 100));

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 42, "foo"]
});
\`\`\`
If any of the promises in the array reject, \`Promise.all()\` immediately rejects with the error of that promise.
`,
  keyTerms: [
    { term: "Promise", definition: "An object representing the eventual completion or failure of an asynchronous operation." },
    { term: "Pending", definition: "The initial state of a Promise, before it is settled." },
    { term: "Fulfilled / Resolved", definition: "The state of a Promise representing a successful operation." },
    { term: "Rejected", definition: "The state of a Promise representing a failed operation." },
    { term: ".then()", definition: "A Promise method to handle the fulfilled state, attaching a callback for the success case." },
    { term: ".catch()", definition: "A Promise method to handle the rejected state, attaching a callback for the failure case." },
    { term: "Chaining", definition: "The process of linking promises together using `.then()` to create a sequence of asynchronous steps." },
    { term: "Promise.all()", definition: "A helper function that returns a single promise that resolves when all of the promises in an iterable argument have resolved." }
  ],
  exercises: [
    {
      id: 1,
      title: "Creating a Simple Promise",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a function `willGetNewPhone` that returns a Promise.",
        "The promise should resolve with a message like 'Got a new phone!' after a 1-second delay (use `setTimeout`).",
        "Create another version of the function where the promise rejects with an Error object 'No new phone :('.",
        "Use `.then()` and `.catch()` to handle both scenarios."
      ]
    },
    {
      id: 2,
      title: "Refactor Callback to Promise",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Take the `getUser` function you created in the previous day's exercise (the one using a callback).",
        "Rewrite it to return a promise instead. The promise should resolve with the user object.",
        "Call the new promise-based function and use `.then()` to log the user object."
      ]
    },
    {
      id: 3,
      title: "Promise Chaining",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Write three functions: `orderPizza`, `bakePizza`, `deliverPizza`.",
        "Each function should return a promise that resolves after a short delay (e.g., 500ms, 1000ms, 700ms).",
        "The promises should resolve with a status message (e.g., 'Pizza ordered', 'Pizza baked', 'Pizza delivered').",
        "Chain these three functions together using `.then()`.",
        "Log the message from each step and a final 'Enjoy your pizza!' message at the end."
      ]
    },
    {
      id: 4,
      title: "Concurrent Downloads",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create three separate functions, `downloadImage1`, `downloadImage2`, and `downloadImage3`.",
        "Each function should return a promise that resolves with a string like 'Image 1 downloaded' after a random delay between 500ms and 2000ms.",
        "Use `Promise.all()` to wait for all three 'downloads' to complete.",
        "Once all promises have resolved, log a message 'All images downloaded successfully!' and the array of results."
      ]
    }
  ]
};
