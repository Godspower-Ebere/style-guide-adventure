
import { DayLesson } from "../types";

export const day91: DayLesson = {
  day: 91,
  title: "Modern JavaScript: Iterators & Generators",
  category: "Modern JavaScript",
  description: "Dive deep into JavaScript's iteration protocols and learn how to create custom iterables and powerful, pausable functions with generators.",
  learningObjectives: [
    "Explain the iterator protocol and the iterable protocol.",
    "Implement a custom iterator for your own objects.",
    "Understand what a generator function is and how it differs from a regular function.",
    "Use the `function*` syntax and the `yield` keyword to create generators.",
    "Leverage generators to handle asynchronous operations in a clean, synchronous-looking style."
  ],
  detailedExplanation: `
JavaScript's \`for...of\` loop is a powerful tool, but how does it actually work? The magic behind it is the **iteration protocols**. Understanding them allows you to make your own objects iterable and use advanced features like **generators**.

### The Iteration Protocols
There are two protocols:
1.  **The iterable protocol**: An object is "iterable" if it has a special property with the key \`[Symbol.iterator]\`. This property must be a function that returns an iterator. Arrays, Strings, Maps, and Sets are all built-in iterables.
2.  **The iterator protocol**: An "iterator" is an object that knows how to access items from a collection one at a time. It must have a \`next()\` method. This method returns an object with two properties: \`value\` (the next value in the sequence) and \`done\` (a boolean that is \`true\` if the sequence is finished).

\`\`\`javascript
// Example of a custom iterable object
const myIterable = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    
    // The iterator is returned here
    return {
      next: () => {
        if (current <= last) {
          return { done: false, value: current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (const num of myIterable) {
  console.log(num); // 1, 2, 3
}
\`\`\`

### Generator Functions
Manually creating an iterator object can be complex. **Generator functions** provide a much easier way to define iterative algorithms.

A generator is a special function declared with \`function*\` that can be paused and resumed. The \`yield\` keyword is used to pause the function and return a value.

\`\`\`javascript
// A generator function
function* countToThree() {
  console.log("Generator starts");
  yield 1;
  console.log("Resumed after 1");
  yield 2;
  console.log("Resumed after 2");
  yield 3;
  console.log("Generator ends");
}

const generator = countToThree(); // Calling it doesn't run the code, it returns a generator object

console.log(generator.next()); // { value: 1, done: false } -> Runs until the first yield
console.log(generator.next()); // { value: 2, done: false } -> Resumes, runs until the second yield
console.log(generator.next()); // { value: 3, done: false } -> Resumes, runs until the third yield
console.log(generator.next()); // { value: undefined, done: true } -> Resumes, runs to the end

// Generators are also iterables, so you can use for...of
for (const num of countToThree()) {
    console.log(num); // Logs 1, 2, 3
}
\`\`\`
Generators are powerful because they can manage their own state, making them excellent for creating iterators, handling infinite data streams, and even simplifying asynchronous code.
`,
  keyTerms: [
    { term: "Iterable Protocol", definition: "A protocol that defines how an object can be iterated over. Requires a `[Symbol.iterator]` method." },
    { term: "Iterator Protocol", definition: "A protocol that defines a standard way to produce a sequence of values. Requires a `next()` method that returns an object with `value` and `done` properties." },
    { term: "Generator Function", definition: "A special function declared with `function*` that can be paused and resumed, producing a sequence of values." },
    { term: "yield", definition: "A keyword used inside generator functions to pause execution and return a value from the iterator." },
    { term: "next()", definition: "The method on an iterator object that resumes execution of a generator and returns the next `{ value, done }` pair." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Countdown Generator",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a generator function called `countdown(start)`.",
        "It should take a number `start` and `yield` numbers from `start` down to 1.",
        "Use a `for...of` loop to iterate over `countdown(5)` and log the values to the console."
      ]
    },
    {
      id: 2,
      title: "Make a `range` Object Iterable",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an object `range` with `from` and `to` properties.",
        "Instead of manually creating the iterator, make its `[Symbol.iterator]` property a generator function.",
        "The generator should `yield` all numbers from `from` to `to` (inclusive).",
        "Test it with `for (const num of range) { ... }`."
      ]
    },
    {
      id: 3,
      title: "Infinite ID Generator",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Write a generator function `idGenerator()`.",
        "This generator should run forever, yielding a unique, incrementing ID (1, 2, 3, ...).",
        "Create an instance of the generator.",
        "Call `.next().value` on it three times and log the result each time to show that it works."
      ]
    },
    {
      id: 4,
      title: "Take N Items from an Iterable",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Write a generator function `take(n, iterable)`.",
        "This function should `yield` the first `n` items from the given `iterable` and then stop.",
        "Use `yield*` to delegate yielding to another generator or iterable if you wish, or use a `for...of` loop.",
        "Test it by creating an array of 10 items and using your `take` generator to get the first 3."
      ]
    }
  ]
};
