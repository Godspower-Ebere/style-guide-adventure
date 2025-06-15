
import { DayLesson } from "../types";

export const day78: DayLesson = {
  day: 78,
  title: "Error Handling in JavaScript",
  category: "JavaScript Advanced",
  description: "Learn how to anticipate and manage errors gracefully in your code using `try...catch`, `finally`, and custom errors.",
  learningObjectives: [
    "Use the `try...catch` statement to handle runtime errors.",
    "Understand the purpose of the `finally` block.",
    "Throw your own exceptions using the `throw` statement.",
    "Create custom error types by extending the built-in `Error` class."
  ],
  detailedExplanation: `
No matter how good a programmer you are, your code will encounter errors. Proper error handling is crucial for building robust, reliable applications. It prevents your program from crashing and allows you to provide helpful feedback to users.

### The \`try...catch\` Statement
This is the fundamental error handling mechanism in JavaScript.
- **\`try\` block:** You place the code that might throw an error inside the \`try\` block.
- **\`catch\` block:** If an error occurs in the \`try\` block, the control is immediately passed to the \`catch\` block. The code in \`try\` after the error will not execute. The \`catch\` block receives an error object as an argument.

\`\`\`javascript
try {
  console.log("Start of try block");
  let user = { name: "Alice" };
  console.log(user.profile.age); // This will throw a TypeError
  console.log("This message will not be logged.");
} catch (error) {
  console.error("An error occurred!");
  console.error("Error Name:", error.name);     // e.g., "TypeError"
  console.error("Error Message:", error.message); // e.g., "Cannot read properties of undefined (reading 'age')"
  // console.error("Stack Trace:", error.stack); // Full stack trace
}

console.log("Execution continues after try...catch.");
\`\`\`

### The \`finally\` Block
The \`finally\` block contains code that will execute *after* the \`try\` and \`catch\` blocks, regardless of whether an error occurred or not. It's useful for cleanup tasks, like closing a file, disconnecting from a database, or stopping a loading spinner.

\`\`\`javascript
let connection = "open";
try {
  console.log("Opening connection...");
  // throw new Error("Something went wrong!"); // Uncomment to test error case
  console.log("Processing data...");
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  connection = "closed";
  console.log("Closing connection. Status:", connection);
}
\`\`\`

### The \`throw\` Statement
You can create your own errors using the \`throw\` statement. You can throw any value (a string, a number), but it's best practice to always throw an \`Error\` object or an object that extends \`Error\`. This ensures you get a proper stack trace.

\`\`\`javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error(error.message); // "Division by zero is not allowed."
}
\`\`\`

### Custom Errors
For more complex applications, you might want to create your own error types to handle different error scenarios specifically. You can do this by extending the built-in \`Error\` class.

\`\`\`javascript
// A custom error for validation issues
class ValidationError extends Error {
  constructor(message) {
    super(message); // Call the parent constructor
    this.name = "ValidationError";
  }
}

function saveUser(user) {
  if (!user.name) {
    throw new ValidationError("User name is required.");
  }
  if (!user.email) {
    throw new ValidationError("User email is required.");
  }
  console.log("User saved:", user);
}

try {
  saveUser({ name: "Bob" });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation failed:", error.message);
    // You could update the UI to show the specific error
  } else {
    console.error("An unexpected error occurred:", error);
    // A generic error message for other types of errors
  }
}
\`\`\`
`,
  keyTerms: [
    { term: "try", definition: "A block of code to be tested for errors while it is being executed." },
    { term: "catch", definition: "A block of code to be executed if an error occurs in the `try` block." },
    { term: "finally", definition: "A block of code to be executed regardless of the result of the `try...catch` blocks." },
    { term: "throw", definition: "A statement that creates a custom error. When an error is thrown, the current function will stop executing." },
    { term: "Error Object", definition: "A built-in object that contains information about an error, including its name, message, and stack trace." },
    { term: "Exception", definition: "An error or unexpected event that disrupts the normal flow of a program's instructions. Also known as an error." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic `try...catch`",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a function `parseJSON(jsonString)`.",
        "Inside the function, use a `try...catch` block.",
        "In the `try` block, attempt to parse the input string using `JSON.parse()`.",
        "If parsing is successful, return the resulting object.",
        "In the `catch` block, log an error message and return `null`.",
        "Test your function with both a valid and an invalid JSON string."
      ]
    },
    {
      id: 2,
      title: "Throwing a Custom Error",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Write a function `validateAge(age)`.",
        "If the `age` is not a number or is less than 18, `throw` a `new Error('User must be 18 or older.')`.",
        "If the age is valid, log 'Age is valid.'",
        "Call this function inside a `try...catch` block to handle the potential error."
      ]
    },
    {
      id: 3,
      title: "Using `finally` for Cleanup",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Simulate a resource-intensive operation.",
        "Create a function `processResource()`.",
        "At the start of the function, log 'Resource opened.'",
        "Use a `try...catch...finally` block.",
        "In the `try` block, log 'Processing...' and optionally throw an error to test the error path.",
        "In the `catch` block, log the error message.",
        "In the `finally` block, log 'Resource closed.' This message should always appear."
      ]
    },
    {
      id: 4,
      title: "Create a Custom Error Type",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a custom error class `APIError` that extends `Error`.",
        "The constructor should accept a `message` and a `statusCode`.",
        "Inside a function `fetchData(url)`, simulate a fetch call.",
        "If the simulated response status is not 200, `throw new APIError('Failed to fetch data', 404)`.",
        "Wrap the call to `fetchData` in a `try...catch` block.",
        "In the `catch` block, check if the `error` is an `instanceof APIError` and log the message and status code accordingly."
      ]
    }
  ]
};
