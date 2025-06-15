
import { DayLesson } from "../types";

export const day97: DayLesson = {
  day: 97,
  title: "Web Workers for Background Processing",
  category: "Web APIs",
  description: "Learn how to use Web Workers to run scripts in the background, preventing your UI from freezing during intensive computations.",
  learningObjectives: [
    "Understand what a Web Worker is and the problem it solves (blocking the main thread).",
    "Create and terminate a Web Worker.",
    "Communicate between the main thread and a worker using `postMessage()` and the `onmessage` event handler.",
    "Handle errors within a Web Worker.",
    "Know the limitations of Web Workers (e.g., no DOM access)."
  ],
  detailedExplanation: `
JavaScript is single-threaded, which means it can only do one thing at a time. If you run a long, complex calculation on the main thread, the entire user interface (UI) will freeze until it's finished. This leads to a terrible user experience.

**Web Workers** solve this problem by allowing you to run a script on a background thread, separate from the main execution thread. This means you can perform intensive tasks without affecting the responsiveness of your webpage.

### How Web Workers Work
1.  **Main Script**: Your main application code.
2.  **Worker Script**: A separate JavaScript file containing the code you want to run in the background.

The main script creates the worker and communicates with it by sending and receiving messages.

### Creating a Worker
You create a new worker by passing the URL of the worker script to the \`Worker\` constructor.

\`\`\`javascript
// 📁 main.js
const myWorker = new Worker('worker.js');
\`\`\`

### Communication: \`postMessage()\` and \`onmessage\`
Communication between the main thread and the worker is handled through an event-based system.

*   To send data from the main script to the worker, you use \`worker.postMessage(data)\`.
*   To listen for messages from the worker in the main script, you use \`worker.onmessage\`.
*   To send data from the worker back to the main script, you use \`self.postMessage(data)\` (or just \`postMessage\`).
*   To listen for messages from the main script in the worker, you use \`self.onmessage\` (or just \`onmessage\`).

**Example:**

\`\`\`javascript
// 📁 main.js
const myWorker = new Worker('worker.js');

// Send a message to the worker
myWorker.postMessage([5, 10]);
console.log('Message posted to worker');

// Listen for messages from the worker
myWorker.onmessage = function(e) {
  console.log('Message received from worker:', e.data); // e.data contains the message
}

// 📁 worker.js
console.log('Worker script loaded');

self.onmessage = function(e) {
  console.log('Message received from main script:', e.data);
  const result = e.data[0] * e.data[1];
  
  // Send the result back to the main script
  self.postMessage(result);
}
\`\`\`

### Error Handling
You can listen for errors in the worker from the main thread using the \`onerror\` event handler.

\`\`\`javascript
// 📁 main.js
myWorker.onerror = function(error) {
  console.error(\`Error in worker: \${error.message}\`);
};
\`\`\`
Inside the worker, you can use a standard \`try...catch\` block to handle errors.

### Terminating a Worker
To stop a worker from the main thread, you can call \`worker.terminate()\`. To stop it from within the worker itself, call \`self.close()\`.

\`\`\`javascript
// From main script
myWorker.terminate();

// From worker script
self.close();
\`\`\`

### Limitations
Web Workers operate in a separate context from the main thread and have no access to:
*   The DOM (you can't manipulate HTML elements).
*   The \`window\` object (but they have \`self\`).
*   The \`document\` object.
*   The \`parent\` object.

They are designed purely for computation.
`,
  keyTerms: [
    { term: "Main Thread", definition: "The single thread where most JavaScript code is executed in a browser, responsible for UI updates and user interactions." },
    { term: "Web Worker", definition: "A JavaScript script that runs in the background on a separate thread, allowing for concurrent processing." },
    { term: "postMessage()", definition: "The method used to send messages between the main thread and a worker thread." },
    { term: "onmessage", definition: "An event handler property for receiving messages sent via `postMessage()`." },
    { term: "self", definition: "A keyword within a worker's scope that refers to the global worker context, similar to `window` in the main thread." },
    { term: "Concurrency", definition: "The ability of different parts of a program to be executed out-of-order or in partial order, without affecting the final outcome." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Prime Number Checker",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create `main.js` and `prime-worker.js`.",
        "In `main.js`, create a worker from `prime-worker.js`.",
        "Send a number to the worker.",
        "In `prime-worker.js`, create a function to check if a number is prime (a slow, intensive calculation for large numbers).",
        "The worker should calculate if the number is prime and post a message back to the main thread with the result (e.g., `'Number X is prime'`).",
        "Log the result in `main.js`."
      ]
    },
    {
      id: 2,
      title: "Data Processing Worker",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a large array of objects in `main.js`, e.g., `[{value: 1}, {value: 2}, ...]` up to 1,000,000.",
        "Send this array to a worker.",
        "The worker should iterate over the array, perform a calculation on each object's value (e.g., square it), and return the sum of all new values.",
        "Add a button in your HTML to start the process. Notice that the UI remains responsive while the worker is busy.",
        "Log the final sum in `main.js`."
      ]
    },
    {
      id: 3,
      title: "Worker with Error Handling",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a worker that expects to receive an object with two numbers, `a` and `b`.",
        "In `main.js`, set up an `onerror` handler for the worker.",
        "First, send a valid message like `{a: 10, b: 5}`. The worker should calculate `a / b` and send back the result.",
        "Next, send a message that will cause an error, like `{a: 10, b: 0}` (division by zero).",
        "The worker should throw an error. Verify that the `onerror` handler in `main.js` catches and logs this error."
      ]
    }
  ]
};
