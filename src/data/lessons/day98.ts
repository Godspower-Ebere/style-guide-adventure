
import { DayLesson } from "../types";

export const day98: DayLesson = {
  day: 98,
  title: "Advanced Error Handling in JavaScript",
  category: "JavaScript Advanced",
  description: "Go beyond basic `try...catch`. Learn how to create custom error types, handle asynchronous errors, and implement a global error handling strategy.",
  learningObjectives: [
    "Review the `try...catch...finally` block.",
    "Create custom error classes by extending the built-in `Error` object.",
    "Handle errors in Promises using `.catch()` and in `async/await` with `try...catch`.",
    "Implement global error handling using `window.onerror` and `window.onunhandledrejection`.",
    "Differentiate between operational errors and programmer errors."
  ],
  detailedExplanation: `
Proper error handling is essential for building robust and reliable applications. It allows your program to gracefully handle unexpected situations instead of crashing.

### The Basics: \`try...catch...finally\`
This is the fundamental synchronous error handling mechanism in JavaScript.
-   **\`try\`**: Contains code that might throw an error.
-   **\`catch\`**: Executes if an error is thrown in the \`try\` block. It receives the error object.
-   **\`finally\`**: Always executes, regardless of whether an error occurred. It's perfect for cleanup tasks like closing a file or database connection.

\`\`\`javascript
try {
  console.log("Opening a resource...");
  // let user = JSON.parse("{ 'name': 'Alice' }"); // Invalid JSON
  throw new Error("Something went wrong!");
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log("Closing the resource.");
}
\`\`\`

### Creating Custom Errors
Sometimes, the generic \`Error\` object isn't specific enough. You can create your own error types by extending the \`Error\` class. This allows you to handle different types of errors differently.

\`\`\`javascript
class ValidationError extends Error {
  constructor(message) {
    super(message); // Pass message to the parent constructor
    this.name = "ValidationError"; // Custom error name
  }
}

function validateUser(user) {
  if (!user.name) {
    throw new ValidationError("User name is required.");
  }
  console.log("User is valid.");
}

try {
  validateUser({});
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(\`Validation failed: \${error.message}\`);
  } else {
    console.error(\`An unexpected error occurred: \${error.message}\`);
  }
}
\`\`\`

### Handling Asynchronous Errors

#### 1. Promises with \`.catch()\`
For promise-based operations, you chain a \`.catch()\` block to handle any rejections that occur anywhere in the promise chain.

\`\`\`javascript
fetch('https://invalid.url/data.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    // Handles network errors or JSON parsing errors
    console.error("Failed to fetch data:", error);
  });
\`\`\`

#### 2. \`async/await\` with \`try...catch\`
\`async/await\` allows you to write asynchronous code that looks synchronous. You can wrap \`await\` calls in a standard \`try...catch\` block to handle rejected promises. This is often considered more readable.

\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('https://invalid.url/data.json');
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();
\`\`\`

### Global Error Handling
For a production application, you should have a centralized place to catch all unhandled errors. This is useful for logging errors to a service for analysis.

*   **\`window.onerror\`**: Catches runtime errors in scripts.
    \`\`\`javascript
    window.onerror = function(message, source, lineno, colno, error) {
      console.log("Global error handler caught:", message);
      // You could send this error to a logging service here
      return true; // Prevents the default browser error handling (e.g., logging to console)
    };
    \`\`\`

*   **\`window.onunhandledrejection\`**: Catches promises that are rejected but do not have a \`.catch()\` handler.
    \`\`\`javascript
    window.onunhandledrejection = function(event) {
      console.log("Unhandled promise rejection:", event.reason);
      // event.preventDefault(); // Prevents logging to the console
    };
    \`\`\`
`,
  keyTerms: [
    { term: "try...catch...finally", definition: "A construct for handling synchronous exceptions in code." },
    { term: "Custom Error", definition: "An error class created by extending the base `Error` class to represent specific error conditions in an application." },
    { term: "Operational Error", definition: "Runtime errors that are expected parts of an application's operation (e.g., invalid input, network failure), which should be handled gracefully." },
    { term: "Programmer Error", definition: "Bugs in the code that are unexpected and indicate a fault in the program logic (e.g., reading a property of `undefined`)." },
    { term: "window.onerror", definition: "A global event handler that is triggered for unhandled runtime errors." },
    { term: "window.onunhandledrejection", definition: "A global event handler that is triggered for unhandled promise rejections." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create a `NetworkError` Custom Class",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a custom error class named `NetworkError` that extends `Error`.",
        "Create a function `fetchData(url)` that simulates a network request.",
        "Inside the function, if the provided URL does not start with 'https://', throw a new `NetworkError` with an appropriate message.",
        "Wrap the function call in a `try...catch` block and specifically check if the caught error is an `instanceof NetworkError`, logging different messages for network errors vs. other errors."
      ]
    },
    {
      id: 2,
      title: "Handle API Errors with `async/await`",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Write an `async` function `getUser(id)` that fetches from 'https://jsonplaceholder.typicode.com/users/id'.",
        "Use a `try...catch` block to handle potential errors.",
        "Inside the `try` block, check if `response.ok` is false. If so, throw a new error with the HTTP status.",
        "Call the function with a valid ID (e.g., 1) and an invalid ID (e.g., 999) to see both the success and error paths work correctly."
      ]
    },
    {
      id: 3,
      title: "Implement a Global Error Logger",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Set up a `window.onerror` handler.",
        "This handler should take the error details and format them into a string: `Error: [message] at [source]:[lineno]`.",
        "For demonstration, create a function that will deliberately cause an error (e.g., calling a method on an undefined variable).",
        "Call this function inside a `setTimeout` to simulate an error happening later.",
        "Verify that your global error handler catches and logs the formatted error message."
      ]
    }
  ]
};
