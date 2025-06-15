
import { DayLesson } from "../types";

export const day81: DayLesson = {
  day: 81,
  title: "Asynchronous JS: The Event Loop & Callbacks",
  category: "Asynchronous JavaScript",
  description: "Understand the foundation of non-blocking operations in JavaScript by exploring the Event Loop, and learn the original pattern for handling async code: callbacks.",
  learningObjectives: [
    "Explain why JavaScript needs to be asynchronous.",
    "Describe the roles of the Call Stack, Web APIs, Callback Queue, and Event Loop.",
    "Understand how `setTimeout` demonstrates the asynchronous model.",
    "Write functions that accept callbacks to handle asynchronous results.",
    "Recognize the problem of 'Callback Hell' and why newer solutions were needed."
  ],
  detailedExplanation: `
JavaScript is a single-threaded language, meaning it can only do one thing at a time. If it has to wait for a long-running task, like fetching data from a network or waiting for a timer, the entire user interface would freeze. To solve this, JavaScript uses an **asynchronous, non-blocking model**.

This model is managed by a few key components working together:

*   **Call Stack:** Where function calls are placed. When a function is called, it's pushed onto the stack. When it returns, it's popped off. It's a "Last-In, First-Out" (LIFO) structure.
*   **Web APIs:** These are features provided by the browser environment (not the JS engine itself), like \`setTimeout\`, DOM events, and the Fetch API. When you call an async function like \`setTimeout\`, the browser's timer API handles it, allowing the Call Stack to clear.
*   **Callback Queue (or Task Queue):** When a Web API finishes its task (e.g., the timer in \`setTimeout\` runs out), the callback function you provided is placed in the Callback Queue. It's a "First-In, First-Out" (FIFO) structure.
*   **Event Loop:** This is the conductor. The Event Loop's job is simple: continuously check if the Call Stack is empty. If it is, it takes the first item from the Callback Queue and pushes it onto the Call Stack, to be executed.

Let's see it in action:
\`\`\`javascript
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout callback");
}, 2000); // Wait 2 seconds

console.log("End");

// Output Order:
// 1. "Start"
// 2. "End"
// 3. (after 2 seconds) "Inside setTimeout callback"
\`\`\`
**Execution Flow:**
1.  \`console.log("Start")\` is pushed to the stack, runs, and is popped.
2.  \`setTimeout\` is pushed to the stack. The browser's Timer API is handed the callback and the 2000ms delay. \`setTimeout\` then pops off the stack.
3.  \`console.log("End")\` is pushed to the stack, runs, and is popped.
4.  The Call Stack is now empty. The script has finished its synchronous work.
5.  After 2 seconds, the Timer API moves the callback function into the Callback Queue.
6.  The Event Loop sees the Call Stack is empty and the Callback Queue has an item. It pushes the callback onto the stack.
7.  The callback runs, logging "Inside setTimeout callback", and is then popped off the stack.

### Callbacks
A **callback** is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action. This was the traditional way to handle asynchronous results.

\`\`\`javascript
function fetchData(url, callback) {
  console.log(\`Fetching from \${url}...\`);
  setTimeout(() => {
    const data = { message: "Data received!" };
    callback(data); // "Call back" with the result
  }, 1500);
}

fetchData("https://api.example.com", (result) => {
  console.log(result);
});
\`\`\`

### Callback Hell
When you have multiple dependent asynchronous operations, you end up nesting callbacks inside each other. This leads to a pattern known as "Callback Hell" or the "Pyramid of Doom," which is hard to read and maintain.

\`\`\`javascript
// Pyramid of Doom
getData(id, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});
\`\`\`
This problem was a major motivation for the introduction of Promises.
`,
  keyTerms: [
    { term: "Asynchronous", definition: "Code that can run in the background without blocking the main thread of execution." },
    { term: "Call Stack", definition: "A data structure that keeps track of function calls in the program." },
    { term: "Event Loop", definition: "A process that constantly checks if the call stack is empty and pushes tasks from the callback queue to the stack." },
    { term: "Callback Queue", definition: "A queue that holds callback functions ready to be executed once the call stack is empty." },
    { term: "Callback Function", definition: "A function passed into another function as an argument, which is then invoked inside the outer function." },
    { term: "Callback Hell", definition: "A situation with deeply nested callbacks, making code hard to read and debug." }
  ],
  exercises: [
    {
      id: 1,
      title: "Predict the Order",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Look at the following code snippet.",
        "Without running the code, write down the order in which you expect the messages to be logged to the console.",
        "Explain your reasoning based on the Event Loop model.",
        "Code: `console.log('A'); setTimeout(() => console.log('B'), 0); console.log('C');`"
      ]
    },
    {
      id: 2,
      title: "Simple User Fetcher",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a function called `getUser` that takes a `userId` and a `callback` function as arguments.",
        "Inside `getUser`, use `setTimeout` to simulate a 1-second network delay.",
        "After the delay, create a mock user object like `{ id: userId, name: 'John Doe' }`.",
        "Call the `callback` function, passing the mock user object as its argument.",
        "Call your `getUser` function with a user ID and a callback that logs the received user object."
      ]
    },
    {
      id: 3,
      title: "Simulating Callback Hell",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create three functions: `fetchProfile`, `fetchPosts`, and `fetchComments`.",
        "Each function should take an ID and a callback.",
        "Inside each, use `setTimeout` to simulate a network request (e.g., 500ms).",
        "Nest the calls: Call `fetchProfile`. In its callback, call `fetchPosts`. In its callback, call `fetchComments`.",
        "Log the results at each step to see the nested structure.",
        "Reflect on why this code structure is difficult to manage."
      ]
    }
  ]
};
