
import { DayLesson } from "../types";

export const day68: DayLesson = {
  day: 68,
  title: "JavaScript Loops",
  category: "JavaScript Basics",
  description: "Master the art of repetition by using loops to execute a block of code multiple times.",
  learningObjectives: [
    "Use the `for` loop for situations where the number of iterations is known.",
    "Use the `while` loop for situations where the loop continues as long as a condition is true.",
    "Iterate over arrays using a `for...of` loop.",
    "Iterate over the properties of an object using a `for...in` loop."
  ],
  detailedExplanation: `
Loops are a fundamental control structure in programming that allow you to repeat a block of code.

### The \`for\` Loop
The \`for\` loop is the most common type of loop. It's perfect when you know exactly how many times you want to iterate. It consists of three parts, separated by semicolons: initialization, condition, and final expression.

\`\`\`
for (initialization; condition; finalExpression) {
  // code to be executed
}
\`\`\`
- **Initialization:** Executed once before the loop starts. Typically used to declare and initialize a counter variable (e.g., \`let i = 0\`).
- **Condition:** Evaluated before each iteration. If it's true, the loop continues. If it's false, the loop ends.
- **Final Expression:** Executed at the end of each iteration. Typically used to increment the counter (\`i++\`).

\`\`\`javascript
// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("The number is " + i);
}
\`\`\`

### The \`while\` Loop
The \`while\` loop is simpler. It continues to run as long as its condition remains true. It's useful when you don't know in advance how many times you need to loop.

\`\`\`javascript
let count = 0;
while (count < 3) {
  console.log("Looping...");
  count++; // Important: Don't forget to change the condition variable!
}
\`\`\`
**Warning:** Be careful with \`while\` loops. If the condition never becomes false, you will create an **infinite loop**, which will crash your browser or program.

### The \`for...of\` Loop (ES6)
This loop provides a modern, cleaner way to iterate over **iterable objects**, like arrays and strings.

\`\`\`javascript
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}
// Outputs: "red", then "green", then "blue"

const message = "hello";
for (const char of message) {
  console.log(char);
}
// Outputs: "h", "e", "l", "l", "o"
\`\`\`

### The \`for...in\` Loop
This loop is used to iterate over the **properties (keys) of an object**.

\`\`\`javascript
const user = {
  name: "Alice",
  age: 25,
  city: "Wonderland"
};

for (const key in user) {
  // 'key' will be "name", then "age", then "city"
  // We use bracket notation to get the value
  const value = user[key];
  console.log(key + ": " + value);
}
\`\`\`
**Note:** While you can use \`for...in\` on an array, it's not recommended because it iterates over array indices as strings and can include other properties. For arrays, always prefer \`for...of\` or array methods like \`forEach\`.
`,
  keyTerms: [
    { term: "Loop", definition: "A control structure that repeats a block of code until a specified condition is met." },
    { term: "for Loop", definition: "A loop that consists of an initializer, a condition, and a final expression, ideal for when the number of iterations is known." },
    { term: "while Loop", definition: "A loop that continues as long as a specified condition is true, ideal for when the number of iterations is unknown." },
    { term: "for...of Loop", definition: "A modern loop for iterating over the values of an iterable object, such as an array." },
    { term: "for...in Loop", definition: "A loop for iterating over the enumerable properties (keys) of an object." },
    { term: "Iteration", definition: "A single execution of the code block within a loop." },
    { term: "Infinite Loop", definition: "A loop whose condition always remains true, causing it to run forever and crash the program." }
  ],
  exercises: [
    {
      id: 1,
      title: "Countdown",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Use a `for` loop to count down from 10 to 1.",
        "Log each number to the console.",
        "After the loop, log 'Blast off!'."
      ]
    },
    {
      id: 2,
      title: "Iterate Over an Array",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an array of your favorite hobbies.",
        "Use a `for...of` loop to iterate through the array.",
        "Log each hobby to the console."
      ]
    },
    {
      id: 3,
      title: "Summing Numbers in an Array",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create an array of numbers, e.g., `[10, 20, 30, 40]`.",
        "Initialize a variable `sum` to 0.",
        "Use a `for` loop or a `for...of` loop to iterate through the array.",
        "In each iteration, add the current number to the `sum` variable.",
        "After the loop, log the final `sum`."
      ]
    },
    {
      id: 4,
      title: "Displaying Object Properties",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create an object representing a car with properties like `make`, `model`, and `year`.",
        "Use a `for...in` loop to iterate over the object's properties.",
        "Inside the loop, log each key-value pair to the console in the format `key: value`."
      ]
    }
  ]
};
