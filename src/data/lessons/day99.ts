
import { DayLesson } from "../types";

export const day99: DayLesson = {
  day: 99,
  title: "Performance Optimization and Memory Management",
  category: "JavaScript Advanced",
  description: "Learn techniques to make your JavaScript code run faster and more efficiently by understanding the event loop, optimizing loops, and managing memory.",
  learningObjectives: [
    "Understand the role of the JavaScript event loop, call stack, and task queue.",
    "Identify common performance bottlenecks like slow loops and excessive DOM manipulation.",
    "Learn and implement debouncing and throttling to limit the rate of function execution.",
    "Understand the basics of memory management and garbage collection in JavaScript.",
    "Identify and learn how to prevent common memory leaks."
  ],
  detailedExplanation: `
Writing code that works is the first step. Writing code that works *efficiently* is the mark of an experienced developer. Performance optimization focuses on speed and responsiveness, while memory management focuses on preventing your app from consuming too many resources and crashing.

### The Event Loop
JavaScript's concurrency model is based on an **event loop**.
*   **Call Stack**: Where functions are executed. One function at a time.
*   **Task Queue (or Message Queue)**: A waiting area for messages (like events or callbacks) to be processed.
*   **Event Loop**: Its job is to look at the Task Queue and push the first callback function onto the Call Stack once the stack is empty.

This is why a long-running synchronous task freezes the browser: it hogs the Call Stack, and the Event Loop can't push new tasks (like UI updates or click handlers) onto it.

### Common Performance Bottlenecks
*   **Excessive DOM Manipulation**: Reading from or writing to the DOM is slow. Batch your updates. Instead of changing 100 elements in a loop, create a document fragment, add elements to it, and then append the fragment to the DOM once.
*   **Slow Loops**: Avoid doing complex calculations or synchronous API calls inside loops.
*   **Large Data Payloads**: Fetching and processing huge amounts of data can block the main thread. Use pagination, lazy loading, and consider Web Workers for processing.

### Debouncing and Throttling
These are two techniques to control how often a function is executed.
*   **Debouncing**: Groups a burst of events into one. A debounced function will only be called after a certain period of inactivity. Useful for search input fields, where you only want to search after the user has stopped typing.
\`\`\`javascript
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}
\`\`\`
*   **Throttling**: Ensures a function is called at most once per specified period. Useful for scroll or resize events, where you don't need to react to every single pixel change.
\`\`\`javascript
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
\`\`\`

### Memory Management
JavaScript has automatic memory management via a process called **Garbage Collection (GC)**. The garbage collector's job is to find and reclaim memory that is no longer being used by the application.
An object is considered "garbage" when it is no longer reachable from the root objects (like the \`window\` object).

### Memory Leaks
A memory leak occurs when your application allocates memory but fails to release it when it's no longer needed.
Common causes of memory leaks:
*   **Accidental Global Variables**: If you forget \`let\` or \`const\`, a variable can be created on the global \`window\` object, which never gets collected.
*   **Forgotten Timers or Callbacks**: If you have a \`setInterval\` that references objects, those objects will never be collected unless you explicitly clear the interval with \`clearInterval\`.
*   **Detached DOM Elements**: If you remove a DOM element from the page but still hold a reference to it in your JavaScript code, the element and its children cannot be garbage collected. Always nullify references to DOM elements you've removed.
`,
  keyTerms: [
    { term: "Event Loop", definition: "A process in JavaScript's runtime that constantly checks if the call stack is empty and pushes tasks from the task queue to the stack." },
    { term: "Call Stack", definition: "A data structure that records where in the program we are. If we step into a function, we put it on top of the stack." },
    { term: "Task Queue", definition: "A list of messages to be processed. Each message has an associated function that gets called to handle the message." },
    { term: "Debouncing", definition: "A technique to limit the rate of function execution by only invoking it after a specified period of inactivity." },
    { term: "Throttling", definition: "A technique to ensure a function is executed at most once every specified time period." },
    { term: "Garbage Collection", definition: "The process of automatically finding and freeing up memory that is no longer in use by the program." },
    { term: "Memory Leak", definition: "A situation where a program allocates memory but fails to release it, leading to a gradual loss of available memory." }
  ],
  exercises: [
    {
      id: 1,
      title: "Implement Debounce for a Search Input",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a text input field in your HTML.",
        "Write a `debounce` function from scratch.",
        "Create a function `handleSearch(query)` that logs 'Searching for...' to the console.",
        "Attach an `input` event listener to the text field.",
        "Use your `debounce` function to wrap `handleSearch` so that it only fires 500ms after the user stops typing."
      ]
    },
    {
      id: 2,
      title: "Implement Throttle for a Window Resize Event",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Write a `throttle` function from scratch.",
        "Create a function `handleResize()` that logs the window's current width and height.",
        "Attach a `resize` event listener to the `window` object.",
        "Use your `throttle` function to wrap `handleResize` so that it only logs the dimensions at most once every 1 second, no matter how rapidly the window is resized."
      ]
    },
    {
      id: 3,
      title: "Identify a Memory Leak",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a function `createLeakyData()`.",
        "Inside this function, create a large object or array.",
        "Attach this data to an event listener on a button, but in a way that creates a closure that can't be collected.",
        "For example, have an outer function that creates the data and an inner function (the listener) that references it.",
        "Create another button that, when clicked, removes the event listener from the first button.",
        "In the comments, explain why a memory leak might still occur even after removing the listener and how you would fix it (e.g., by nullifying references)."
      ]
    }
  ]
};
