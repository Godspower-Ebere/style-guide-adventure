
import { DayLesson } from "../types";

export const day84: DayLesson = {
  day: 84,
  title: "Advanced Promises: Combinators",
  category: "Asynchronous JavaScript",
  description: "Learn how to handle multiple promises at once using powerful combinator methods like Promise.all, Promise.race, and Promise.allSettled.",
  learningObjectives: [
    "Run multiple promises in parallel and wait for all to complete using `Promise.all`.",
    "Handle scenarios where one or more promises might reject when using `Promise.all`.",
    "Wait for the first promise to settle using `Promise.race`.",
    "Wait for all promises to settle, regardless of success or failure, using `Promise.allSettled`."
  ],
  detailedExplanation: `
Often, you need to manage several asynchronous operations at once. Promise combinators are static methods on the \`Promise\` object that help you do this efficiently.

### \`Promise.all()\`
This is one of the most common combinators. It takes an array of promises and returns a single new promise. This new promise fulfills when **all** of the input promises have fulfilled. The result is an array of the fulfilled values, in the same order as the input promises.

**Important:** If **any** of the input promises reject, \`Promise.all()\` immediately rejects with the reason of the first promise that rejected. It's an "all or nothing" deal.

\\\`\\\`\\\`javascript
const p1 = Promise.resolve(3);
const p2 = 42; // Not a promise, but treated as a resolved promise
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 42, "foo"]
});

const p4 = Promise.reject('Error!');
Promise.all([p1, p4, p3])
  .then(values => {
    // This won't run
  })
  .catch(error => {
    console.error(error); // "Error!"
  });
\\\`\\\`\\\`

### \`Promise.race()\`
This combinator also takes an array of promises. It returns a new promise that settles (fulfills or rejects) as soon as the **first** promise in the array settles. It's a "winner takes all" race.

\\\`\\\`\\\`javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two'); // This one is faster
});

Promise.race([promise1, promise2]).then(value => {
  console.log(value); // "two"
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 200, 'I failed first');
});
Promise.race([promise1, promise3]).catch(error => {
    console.error(error); // "I failed first"
});
\\\`\\\`\\\`

### \`Promise.allSettled()\` (ES2020)
This is a safer alternative to \`Promise.all\`. It waits for **all** promises to settle, regardless of whether they fulfilled or rejected. It never rejects itself.

It returns a promise that fulfills with an array of objects, each describing the outcome of one promise. Each outcome object has a \`status\` ('fulfilled' or 'rejected') and either a \`value\` (if fulfilled) or a \`reason\` (if rejected).

This is perfect when you have multiple independent tasks and you want to know the result of each one, even if some fail.

\\\`\\\`\\\`javascript
const promiseA = Promise.resolve('Success');
const promiseB = Promise.reject('Failure');

Promise.allSettled([promiseA, promiseB])
  .then(results => {
    console.log(results);
    // [
    //   { status: 'fulfilled', value: 'Success' },
    //   { status: 'rejected', reason: 'Failure' }
    // ]
  });
\\\`\\\`\\\`
`,
  keyTerms: [
    { term: "Promise Combinator", definition: "A helper method on the Promise object for handling multiple promises at once." },
    { term: "Promise.all()", definition: "A combinator that waits for all promises to fulfill, or rejects if any single promise rejects." },
    { term: "Promise.race()", definition: "A combinator that settles as soon as the first of the input promises settles (either fulfills or rejects)." },
    { term: "Promise.allSettled()", definition: "A combinator that waits for all promises to settle (fulfill or reject) and returns an array of their outcomes." },
    { term: "Parallel Execution", definition: "Running multiple asynchronous operations concurrently, rather than one after another." }
  ],
  exercises: [
    {
      id: 1,
      title: "Fetch Multiple Users",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "You are given two user IDs: 1 and 2.",
        "Create two fetch promises, one for `https://jsonplaceholder.typicode.com/users/1` and another for `https://jsonplaceholder.typicode.com/users/2`.",
        "Use `Promise.all` to wait for both fetches to complete.",
        "When they are both done, log the array of user data to the console."
      ]
    },
    {
      id: 2,
      title: "Handling Rejection in `Promise.all`",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an array of three promises.",
        "The first resolves with 'Success 1'.",
        "The second rejects with 'Error!'.",
        "The third resolves with 'Success 3'.",
        "Use `Promise.all` and a `.catch` block to handle the rejection. Your `.catch` block should log the error."
      ]
    },
    {
      id: 3,
      title: "Fastest API Server",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create two promises.",
        "The first promise should fetch from `https://jsonplaceholder.typicode.com/posts/1`.",
        "The second promise should fetch from a (slower) public API, e.g., `https://api.publicapis.org/random`.",
        "Use `Promise.race` to see which server responds first.",
        "Log a message indicating which one won, e.g., 'JSONPlaceholder won the race!'."
      ]
    },
    {
      id: 4,
      title: "Check API Statuses",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create an array of three API endpoints (strings). Make one of them invalid, e.g., `https://jsonplaceholder.typicode.com/invalid-url`.",
        "Map this array to an array of `fetch` promises.",
        "Use `Promise.allSettled` to wait for all requests to complete.",
        "Iterate over the results. For each result, log whether the API call was a 'SUCCESS' (fulfilled) or 'FAILURE' (rejected), along with the value or reason."
      ]
    }
  ]
};
