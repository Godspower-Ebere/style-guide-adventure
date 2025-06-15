
import { DayLesson } from "../types";

export const day86: DayLesson = {
  day: 86,
  title: "Error Handling in Asynchronous JavaScript",
  category: "Asynchronous JavaScript",
  description: "Learn robust strategies for catching and managing errors in promise-based code, ensuring your applications are resilient and user-friendly.",
  learningObjectives: [
    "Differentiate between operational errors and programmer errors.",
    "Use the `.catch()` method to handle rejections in a promise chain.",
    "Use a `try...catch` block to handle errors from `await`-ed promises.",
    "Understand how `Promise.all()` and `Promise.allSettled()` handle errors differently.",
    "Create and throw custom errors for better error reporting."
  ],
  detailedExplanation: `
Proper error handling is critical for building reliable applications. In asynchronous JavaScript, unhandled errors can crash your program or lead to silent failures.

### Errors in Promise Chains (`.then/.catch`)
A key feature of promise chains is that a single \`.catch()\` at the end can handle a rejection from any of the preceding promises.

\`\`\`javascript
step1() // This might reject
  .then(result1 => step2(result1)) // Or this might reject
  .then(result2 => step3(result2)) // Or this one
  .then(finalResult => console.log(finalResult))
  .catch(error => {
    // This one block will catch a failure from step1, step2, OR step3.
    // The chain stops as soon as a rejection occurs.
    console.error("An error occurred in the process:", error);
  });
\`\`\`
This makes promise chains much cleaner than nested `try/catch` blocks or checking for error arguments in every callback.

### Errors with Async/Await (`try...catch`)
As we saw previously, \`async/await\` allows us to use the standard synchronous \`try...catch\` syntax, which is often more intuitive.

\`\`\`javascript
async function processData() {
  try {
    const data = await fetchData();
    if (!isValid(data)) {
      // You can also throw your own errors
      throw new Error("Received invalid data from server.");
    }
    const result = await processThatData(data);
    console.log("Success!", result);
  } catch (error) {
    // This single catch block handles:
    // 1. Rejection from fetchData()
    // 2. Rejection from processThatData()
    // 3. The custom error we threw ourselves
    console.error("Failed to process data:", error.message);
  }
}
\`\`\`

### Handling Multiple Promises
When working with multiple promises, the error handling strategy depends on your goal.

#### `Promise.all()` - Fail-Fast
\`Promise.all()\` is fail-fast. If any single promise in the array rejects, the entire \`Promise.all()\` immediately rejects with that error, and you won't get the results of the promises that did succeed.

\`\`\`javascript
const p1 = Promise.resolve("Success 1");
const p2 = Promise.reject("FAILURE!");
const p3 = Promise.resolve("Success 3");

Promise.all([p1, p2, p3])
  .then(results => console.log(results)) // This will not run
  .catch(error => console.error(error)); // "FAILURE!"
\`\`\`

#### `Promise.allSettled()` - Wait for All
Introduced in ES2020, \`Promise.allSettled()\` waits for *all* promises to settle (either fulfilled or rejected). It never rejects itself. It returns a promise that resolves to an array of objects, each describing the outcome of a promise.

\`\`\`javascript
Promise.allSettled([p1, p2, p3])
  .then(results => {
    console.log(results);
    /* Output:
    [
      { status: 'fulfilled', value: 'Success 1' },
      { status: 'rejected', reason: 'FAILURE!' },
      { status: 'fulfilled', value: 'Success 3' }
    ]
    */
  });
\`\`\`
This is incredibly useful when you need to perform several independent operations and want to know the result of each one, even if some of them fail. You can then loop through the results array to handle successes and failures accordingly.
`,
  keyTerms: [
    { term: "Operational Error", definition: "An error that occurs during the normal operation of a program, such as a network failure or invalid user input. These are often recoverable." },
    { term: "Programmer Error", definition: "A bug in the code, such as a typo or logic mistake. These should ideally be fixed, not just handled." },
    { term: "try...catch", definition: "A statement for handling errors in a block of code, works seamlessly with async/await." },
    { term: ".catch()", definition: "A promise method for handling rejections in a promise chain." },
    { term: "Promise.all()", definition: "A promise combinator that rejects as soon as one of the input promises rejects (fail-fast)." },
    { term: "Promise.allSettled()", definition: "A promise combinator that waits for all promises to settle and returns an array of their outcomes." }
  ],
  exercises: [
    {
      id: 1,
      title: "Catching a Fetch Error",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Use `fetch` to request data from an invalid URL (e.g., `https://invalid-url.xyz`).",
        "This will cause a network error and reject the fetch promise.",
        "Use a `.catch()` block to catch the error.",
        "Log a user-friendly message like 'Could not connect to the server. Please check your internet connection.'"
      ]
    },
    {
      id: 2,
      title: "try/catch with an Invalid API Request",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Write an `async` function `fetchPost(postId)`.",
        "Inside a `try` block, fetch data from `https://jsonplaceholder.typicode.com/posts/{postId}`.",
        "Check if `response.ok` is false. If it is, `throw new Error('Post not found')`.",
        "In the `catch` block, log the error's message.",
        "Test your function by calling it with a valid ID (e.g., 1) and an invalid ID (e.g., 200)."
      ]
    },
    {
      id: 3,
      title: "Using `Promise.allSettled`",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create an array of three API endpoints.",
        "Make one of the endpoints invalid (e.g., `https://jsonplaceholder.typicode.com/invalid-path`).",
        "Map over the array of endpoints to create an array of `fetch` promises.",
        "Use `Promise.allSettled()` to wait for all requests to complete.",
        "Iterate over the results array. For each result, check its `status`. If it's `'fulfilled'`, log the data. If it's `'rejected'`, log the error reason."
      ]
    },
    {
      id: 4,
      title: "Error Handling in a Chain",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create two promise-returning functions, `step1` and `step2`.",
        "In `step1`, randomly decide whether to resolve or reject.",
        "Chain them: `step1().then(step2).catch(...)`.",
        "Ensure your single `.catch()` block can handle the rejection whether it comes from `step1` or `step2` (if you modify `step2` to also fail sometimes).",
        "Log a message indicating where the failure occurred if possible."
      ]
    }
  ]
};
