
import { DayLesson } from "../types";

export const day75: DayLesson = {
  day: 75,
  title: "Asynchronous JavaScript: Async/Await",
  category: "JavaScript Advanced",
  description: "Master the modern `async/await` syntax, which provides a clean and intuitive way to write asynchronous code that looks synchronous.",
  learningObjectives: [
    "Understand how `async/await` is syntactic sugar over Promises.",
    "Declare an async function using the `async` keyword.",
    "Pause function execution to wait for a Promise to resolve using the `await` keyword.",
    "Handle errors in async functions using `try...catch` blocks.",
    "Run multiple promises concurrently using `Promise.all()`."
  ],
  detailedExplanation: `
\`async/await\` is a modern feature introduced in ES2017 that makes working with promises even easier and more readable. It allows you to write asynchronous code that looks and behaves like synchronous code, which helps avoid long chains of \`.then()\`.

### The \`async\` Keyword
The \`async\` keyword is placed before a function declaration. It does two things:
1. It ensures the function implicitly returns a Promise. If you return a value from an \`async\` function, it will be automatically wrapped in a resolved Promise.
2. It allows you to use the \`await\` keyword inside that function.

\`\`\`javascript
async function sayHello() {
  return "Hello"; // This is automatically wrapped: Promise.resolve("Hello")
}

sayHello().then(console.log); // logs "Hello"
\`\`\`

### The \`await\` Keyword
The \`await\` keyword can only be used inside an \`async\` function. It makes JavaScript wait until a Promise settles (is either fulfilled or rejected) and returns its result. While it's waiting, the JavaScript engine is free to execute other code, so the page remains responsive.

Let's refactor a promise chain from the previous lesson:

**Promise Chain (.then):**
\`\`\`javascript
function fetchData() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}
\`\`\`

**Equivalent with async/await:**
\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json(); // await another promise
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
\`\`\`
The \`async/await\` version is often considered much easier to read and reason about, as it resembles standard synchronous code.

### Error Handling with \`try...catch\`
With \`async/await\`, you handle errors using the familiar synchronous \`try...catch\` block. If a promise that you \`await\` rejects, it throws an error, which can be caught by the \`catch\` block. This provides a single, unified way to handle both synchronous and asynchronous errors.

\`\`\`javascript
async function getUser(id) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${id}\`);
    if (!response.ok) {
      // Manually throw an error for bad HTTP responses (e.g., 404)
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Could not fetch user:", error);
    // You could re-throw the error or return a default value
    return null;
  }
}
\`\`\`

### Running Promises in Parallel
Sometimes you need to run multiple asynchronous operations at the same time and wait for all of them to complete. Running them one by one with \`await\` would be inefficient. This is where \`Promise.all()\` comes in.

\`Promise.all()\` takes an array of promises and returns a single new promise. This new promise resolves when *all* the input promises have resolved, and it provides an array of their results. If *any* of the input promises reject, the entire \`Promise.all()\` promise rejects immediately with that error.

\`\`\`javascript
async function fetchPostAndComments(postId) {
  try {
    const [post, comments] = await Promise.all([
      fetch(\`https://api.example.com/posts/\${postId}\`).then(res => res.json()),
      fetch(\`https://api.example.com/posts/\${postId}/comments\`).then(res => res.json())
    ]);

    console.log("Post:", post);
    console.log("Comments:", comments);
  } catch (error) {
    console.error("Failed to fetch post and comments:", error);
  }
}
\`\`\`
This is much faster than awaiting each fetch call sequentially.
`,
  keyTerms: [
    { term: "async", definition: "A keyword that declares a function as asynchronous, allowing the use of `await` and ensuring it returns a Promise." },
    { term: "await", definition: "A keyword used inside an `async` function to pause its execution and wait for a Promise to settle before resuming." },
    { term: "Syntactic Sugar", definition: "Syntax within a programming language that is designed to make things easier to read or to express, while not introducing new functionality." },
    { term: "try...catch", definition: "A standard error handling block in JavaScript. With async/await, it's used to catch errors from rejected promises." },
    { term: "Promise.all()", definition: "A method that takes an array of promises and returns a single promise that resolves when all of the input promises have resolved." }
  ],
  exercises: [
    {
      id: 1,
      title: "Convert `.then` to `async/await`",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "You are given a function `fetchUser(id)` that returns a promise, resolving with a user object.",
        "Write an `async` function `displayUser(id)`.",
        "Inside `displayUser`, `await` the result of `fetchUser(id)`.",
        "Log the user object to the console.",
        "Don't forget to wrap your code in a `try...catch` block."
      ]
    },
    {
      id: 2,
      title: "Sequential `await`",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Write an async function `getPostDetails()`.",
        "First, `await` a fetch call to get a list of posts (e.g., from `https://jsonplaceholder.typicode.com/posts`).",
        "Take the ID of the first post from the result.",
        "Then, `await` another fetch call to get the comments for that specific post ID (e.g., `.../posts/1/comments`).",
        "Log both the post and its comments."
      ]
    },
    {
      id: 3,
      title: "Parallel fetching with `Promise.all`",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Write an async function `getMultipleUsers()`.",
        "Create an array of user IDs (e.g., `[1, 2, 3]`).",
        "Create an array of fetch promises, one for each user ID (e.g., `https://jsonplaceholder.typicode.com/users/[id]`).",
        "Use `Promise.all()` to `await` all the promises at once.",
        "Log the array of user data that `Promise.all` returns."
      ]
    },
    {
      id: 4,
      title: "Error Handling Practice",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Write an async function `fetchDataWithErrorHandling()`.",
        "Inside a `try` block, attempt to `await` a fetch call to an invalid URL (e.g., `https://invalid.url/data`).",
        "In the `catch` block, log a user-friendly error message like 'Failed to fetch data. Please try again later.'",
        "Add a `finally` block to your `try...catch` that logs 'Fetch attempt finished.' regardless of success or failure."
      ]
    }
  ]
};
