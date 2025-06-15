
import { DayLesson } from "../types";

export const day83: DayLesson = {
  day: 83,
  title: "Introduction to Promises",
  category: "Asynchronous JavaScript",
  description: "Learn what Promises are, why they are an improvement over callbacks, and how to create and use them to handle asynchronous operations.",
  learningObjectives: [
    "Explain what a Promise is and the problem it solves.",
    "Understand the three states of a Promise: pending, fulfilled, and rejected.",
    "Create a new Promise using the `Promise` constructor.",
    "Consume a Promise using the `.then()` method for success and `.catch()` for failure.",
    "Chain multiple `.then()` calls to perform sequential asynchronous operations."
  ],
  detailedExplanation: `
A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It's a powerful way to manage async code, avoiding the "Callback Hell" we saw previously.

A Promise can be in one of three states:
*   **Pending**: The initial state; neither fulfilled nor rejected.
*   **Fulfilled**: The operation completed successfully. The promise has a resulting value.
*   **Rejected**: The operation failed. The promise has a reason for the failure.

Once a promise is fulfilled or rejected, it is **settled** and its state cannot change.

### Consuming a Promise
Most of the time, you'll be working with functions that *return* a promise (like the \`fetch\` API). You handle the result using the \`.then()\` and \`.catch()\` methods.

\\\`\\\`\\\`javascript
// fetch returns a promise
fetch('https://api.example.com/data')
  .then(response => {
    // This first .then() handles the fulfillment of the fetch promise.
    // The response object itself has a .json() method which ALSO returns a promise.
    return response.json(); 
  })
  .then(data => {
    // This second .then() handles the fulfillment of the response.json() promise.
    console.log("Here is the data:", data);
  })
  .catch(error => {
    // .catch() will be triggered if fetch() fails (e.g., network error)
    // or if response.json() fails (e.g., invalid JSON).
    console.error("Something went wrong:", error);
  });
\\\`\\\`\\\`
This is called **promise chaining** and it's a clean way to handle a sequence of async tasks.

### Creating a Promise
You can create your own promises using the \`Promise\` constructor. It takes a function (called the "executor") with two arguments: \`resolve\` and \`reject\`.

\\\`\\\`\\\`javascript
const myPromise = new Promise((resolve, reject) => {
  console.log("Executor function starts...");
  
  setTimeout(() => {
    const success = true; // Change this to false to see the rejection
    
    if (success) {
      // If the operation is successful, call resolve() with the result.
      resolve("The operation was a success!"); 
    } else {
      // If it fails, call reject() with an error.
      reject(new Error("The operation failed."));
    }
  }, 2000); // Simulate a 2-second delay
});

console.log("Promise has been created.");

myPromise
  .then(result => {
    console.log("Fulfilled:", result); // "The operation was a success!"
  })
  .catch(error => {
    console.error("Rejected:", error.message); // "The operation failed."
  });
\\\`\\\`\\\`
`,
  keyTerms: [
    { term: "Promise", definition: "An object representing the eventual completion or failure of an asynchronous operation." },
    { term: "Pending", definition: "The initial state of a promise, before it has been fulfilled or rejected." },
    { term: "Fulfilled", definition: "The state of a promise representing a successful operation. Also called 'resolved'." },
    { term: "Rejected", definition: "The state of a promise representing a failed operation." },
    { term: ".then()", definition: "A promise method for handling the fulfilled state. It takes a callback function that receives the result." },
    { term: ".catch()", definition: "A promise method for handling the rejected state. It takes a callback that receives the error/reason." },
    { term: "Promise Chaining", definition: "The act of linking multiple .then() calls together to perform a sequence of asynchronous operations." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create a Simple Promise",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new Promise called `willWaterPlants`.",
        "The promise should resolve with the string 'Plants have been watered.' after a 1-second delay (use `setTimeout`).",
        "Use `.then()` to log the success message to the console."
      ]
    },
    {
      id: 2,
      title: "Create a Failing Promise",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new Promise called `willForgetWatering`.",
        "This promise should immediately reject with an `Error` object containing the message 'Forgot to water the plants!'.",
        "Use `.catch()` to log the error message to the console."
      ]
    },
    {
      id: 3,
      title: "Promise Chaining",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a promise that resolves with the number `10` after 1 second.",
        "Chain a `.then()` to it. Inside this first `.then()`, receive the number, multiply it by 2, and return the new value.",
        "Chain a second `.then()`. Inside it, receive the result from the previous step and log it to the console. It should log `20`."
      ]
    },
    {
      id: 4,
      title: "Simulating an API Call",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Write a function `fetchUserData(userId)` that returns a promise.",
        "Inside the promise, use `setTimeout` to simulate a network delay.",
        "After 2 seconds, check if the `userId` is valid (e.g., a positive number).",
        "If valid, resolve with a user object: `{ id: userId, name: 'John Doe', email: 'john@example.com' }`.",
        "If invalid, reject with an error message: 'Invalid User ID'.",
        "Test your function by calling it with a valid ID and an invalid ID, using `.then()` and `.catch()` to handle the outcomes."
      ]
    }
  ]
};
