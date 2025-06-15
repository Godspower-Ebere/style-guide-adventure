
import { DayLesson } from "../types";

export const day63: DayLesson = {
  day: 63,
  title: "JavaScript Conditional Statements",
  category: "JavaScript Basics",
  description: "Learn how to make decisions and execute different blocks of code based on specific conditions.",
  learningObjectives: [
    "Use the `if`, `else if`, and `else` statements to control the flow of your program.",
    "Understand how to use the `switch` statement for handling multiple distinct cases.",
    "Write concise conditional logic using the ternary operator.",
    "Grasp the concept of 'truthy' and 'falsy' values in conditional checks."
  ],
  detailedExplanation: `
Conditional statements are the building blocks of logic in programming. They allow your code to take different paths based on whether an expression evaluates to true or false.

### The \`if...else\` Statement
This is the most common conditional structure.

\`\`\`javascript
let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature > 20) {
  console.log("It's a pleasant day.");
} else {
  console.log("It's a bit chilly.");
}
// Outputs: "It's a pleasant day."
\`\`\`
- The \`if\` block runs if its condition is true.
- The \`else if\` blocks are checked only if the preceding \`if\` was false. You can have multiple \`else if\` blocks.
- The \`else\` block runs if all preceding conditions were false.

### The \`switch\` Statement
The \`switch\` statement is a useful alternative to a long chain of \`if...else if\` statements when you are checking a single variable against multiple possible values.

\`\`\`javascript
let dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("Time to start the week!");
    break; // The 'break' keyword is crucial!
  case "Friday":
    console.log("Weekend is almost here!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("It's a regular weekday.");
}
\`\`\`
- The value of the variable in the \`switch()\` is compared against each \`case\`.
- If a match is found, the code in that case executes.
- **Important:** The \`break\` statement stops the execution from "falling through" to the next case. Without it, the code for all subsequent cases would also run.
- The \`default\` case runs if no other case matches.

### The Ternary Operator
The conditional (ternary) operator is a shortcut for a simple \`if...else\` statement. It's the only JavaScript operator that takes three operands.

\`\`\`
condition ? expressionIfTrue : expressionIfFalse;
\`\`\`

\`\`\`javascript
let age = 20;
let canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log(canVote); // Outputs: "Yes, can vote"
\`\`\`
This is much more concise than writing the full \`if...else\` block, making it great for variable assignments based on a condition.

### Truthy and Falsy Values
In JavaScript, conditions don't strictly have to be \`true\` or \`false\`. All values have an inherent "truthiness". When a non-boolean value is used in a condition, it's coerced into a boolean.

**Falsy Values:** There are only a few values that are considered "falsy". Everything else is "truthy".
- \`false\`
- \`0\` (the number zero)
- \`""\` or \`''\` (an empty string)
- \`null\`
- \`undefined\`
- \`NaN\` (Not a Number)

\`\`\`javascript
let username = "";
if (username) {
  console.log("Welcome, " + username);
} else {
  console.log("Welcome, guest!"); // This block runs because "" is falsy.
}

let itemsInCart = 5;
if (itemsInCart) {
  console.log("Proceed to checkout."); // This block runs because 5 is truthy.
}
\`\`\`
Understanding truthy/falsy values allows you to write more concise and idiomatic JavaScript.
`,
  keyTerms: [
    { term: "Conditional Statement", definition: "A programming feature that performs different computations or actions depending on whether a programmer-specified boolean condition evaluates to true or false." },
    { term: "if...else", definition: "A control flow statement that executes a block of code if a condition is true, and another block if it's false." },
    { term: "switch", definition: "A control flow statement that allows a variable to be tested for equality against a list of values (cases)." },
    { term: "Ternary Operator", definition: "A concise conditional operator that takes three operands: a condition, an expression for true, and an expression for false." },
    { term: "Truthy / Falsy", definition: "The concept that every value in JavaScript can be evaluated in a boolean context. Values like 0, null, and \"\" are 'falsy', while most other values are 'truthy'." }
  ],
  exercises: [
    {
      id: 1,
      title: "Grade Assigner",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Declare a variable `score` with a value between 0 and 100.",
        "Write an `if...else if...else` statement to determine the letter grade.",
        "A (90+), B (80-89), C (70-79), D (60-69), F (<60).",
        "Log the corresponding letter grade to the console."
      ]
    },
    {
      id: 2,
      title: "T-Shirt Sizer",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Declare a variable `size` with a number value (e.g., representing chest measurement).",
        "Use the ternary operator to assign a t-shirt size ('S', 'M', 'L') to a new variable `tShirtSize`.",
        "Condition: if size < 20, it's 'S'; if size < 30, it's 'M'; otherwise it's 'L'. (Hint: You might need to nest the ternary operator).",
        "Log the `tShirtSize` to the console."
      ]
    },
    {
      id: 3,
      title: "Simple Vending Machine",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Declare a variable `selection` with a string value (e.g., 'A1', 'B2').",
        "Use a `switch` statement to handle different selections.",
        "Case 'A1': log 'Vending Cola'.",
        "Case 'A2': log 'Vending Chips'.",
        "Case 'B1', 'B2': log 'Vending Candy'.",
        "Include a `default` case that logs 'Invalid Selection'."
      ]
    },
    {
      id: 4,
      title: "Truthy/Falsy Check",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Declare a variable `userInput`.",
        "Assign it one of the falsy values (e.g., `0`, `null`, `""`).",
        "Write an `if` statement that checks `if (userInput)`.",
        "In the `if` block, log 'Input is valid'. In the `else` block, log 'Please provide input'.",
        "Test this with different falsy and truthy values (like a non-empty string or a non-zero number)."
      ]
    }
  ]
};
