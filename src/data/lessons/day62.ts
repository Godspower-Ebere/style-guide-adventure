
import { DayLesson } from "../types";

export const day62: DayLesson = {
  day: 62,
  title: "JavaScript Operators and Type Coercion",
  category: "JavaScript Basics",
  description: "Learn how to perform operations on data using operators and understand how JavaScript automatically converts data types.",
  learningObjectives: [
    "Use arithmetic operators to perform mathematical calculations.",
    "Use assignment operators to assign values to variables.",
    "Use comparison operators to compare values and logical operators to combine boolean expressions.",
    "Understand the concept of type coercion and how it can lead to unexpected results."
  ],
  detailedExplanation: `
Operators are the symbols we use to perform actions on our variables and values. Understanding them is fundamental to writing any logic.

### Arithmetic Operators
These are used for performing standard mathematical calculations.
- \`+\` (Addition)
- \`-\` (Subtraction)
- \`*\` (Multiplication)
- \`/\` (Division)
- \`%\` (Modulus - returns the remainder of a division)
- \`**\` (Exponentiation - raises to the power of)

\`\`\`javascript
let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.333...
console.log(x % y); // 1 (10 divided by 3 is 3 with a remainder of 1)
console.log(y ** 2); // 9 (3 squared)
\`\`\`

### Assignment Operators
These are used to assign values to variables.
- \`=\` (Assign)
- \`+=\` (Add and assign)
- \`-=\` (Subtract and assign)
- \`*=\` (Multiply and assign)
- \`/=\` (Divide and assign)

\`\`\`javascript
let score = 100;
score += 50; // same as score = score + 50; Now score is 150
score -= 25; // Now score is 125
\`\`\`

### Comparison and Logical Operators
These are crucial for decision making. They evaluate to a boolean (\`true\` or \`false\`).

**Comparison Operators:**
- \`==\` (Equal to): Checks for equality after doing type coercion. **Avoid using this.**
- \`===\` (Strictly equal to): Checks for equality without type coercion. **Always prefer this.**
- \`!=\` (Not equal to)
- \`!==\` (Strictly not equal to)
- \`>\` (Greater than), \`<\` (Less than)
- \`>=\` (Greater than or equal to), \`<= \` (Less than or equal to)

**Logical Operators:**
- \`&&\` (AND): True if both operands are true.
- \`||\` (OR): True if at least one operand is true.
- \`!\` (NOT): Inverts the boolean value.

\`\`\`javascript
let age = 25;
let hasLicense = true;

console.log(age > 18 && hasLicense); // true
console.log(age < 21 || hasLicense); // true
console.log(!hasLicense); // false
\`\`\`

### Type Coercion
Type coercion is the automatic or implicit conversion of values from one data type to another. JavaScript is a "loosely typed" language, which means it does this frequently. This can be convenient but also a major source of bugs.

The double equals (\`==\`) operator is the classic example.
\`\`\`javascript
console.log(5 == "5");   // true (String "5" is coerced to number 5)
console.log(5 === "5");  // false (Types are different, no coercion happens)

console.log(true == 1);   // true
console.log(true === 1);  // false

console.log(null == undefined); // true
console.log(null === undefined); // false
\`\`\`
Because of this unpredictable behavior, **it is strongly recommended to always use the strict equality operators (\`===\` and \`!==\`)** to avoid bugs related to type coercion.
`,
  keyTerms: [
    { term: "Operator", definition: "A symbol that performs an operation on one or more operands (values or variables)." },
    { term: "Arithmetic Operator", definition: "Operators used for mathematical calculations, like `+`, `-`, `*`, `/`." },
    { term: "Comparison Operator", definition: "Operators that compare two values and return a boolean result, like `===`, `>`." },
    { term: "Logical Operator", definition: "Operators that combine or invert boolean values, like `&&`, `||`, `!`." },
    { term: "Type Coercion", definition: "The automatic conversion of a value from one data type to another by the JavaScript engine." },
    { term: "Strict Equality (===)", definition: "A comparison operator that checks if two values are equal in both value and type, without performing type coercion." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Calculator",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Declare two variables, `num1` and `num2`, with number values.",
        "Perform addition, subtraction, multiplication, and division on them.",
        "Use `console.log` to print the result of each operation with a descriptive string, e.g., `console.log('Addition:', num1 + num2);`."
      ]
    },
    {
      id: 2,
      title: "Admission Checker",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Declare a variable `age` and a boolean `isMember`.",
        "Write a single `console.log` statement that uses logical operators to check if a person is either over 18 or is a member.",
        "Write another `console.log` to check if a person is between 21 and 65 years old (inclusive).",
        "Test with different values for `age` and `isMember`."
      ]
    },
    {
      id: 3,
      title: "Coercion Mysteries",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Use `console.log` to predict and then check the result of the following comparisons:",
        "`'2' > 1`",
        "`'2' < '12'` (Hint: strings are compared character by character)",
        "`0 == false`",
        "`null == 0`",
        "`'' == false`",
        "For each one, add a comment explaining why the result is what it is."
      ]
    },
    {
      id: 4,
      title: "Running Total",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Declare a variable `totalCost` and initialize it to 0.",
        "Imagine a shopping cart. Use assignment operators (`+=`) to add the cost of three different items to the total.",
        "Declare a `taxRate` constant (e.g., 0.08 for 8%).",
        "Calculate the tax amount and add it to the total cost.",
        "Log the final `totalCost` to the console."
      ]
    }
  ]
};
