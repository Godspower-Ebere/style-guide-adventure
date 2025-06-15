import { DayLesson } from "../types";

export const day89: DayLesson = {
  day: 89,
  title: "Modern JavaScript: Advanced Array Methods",
  category: "Modern JavaScript",
  description: "Go beyond `forEach` and `map` to master powerful, declarative array methods like `filter`, `reduce`, `find`, `some`, and `every`.",
  learningObjectives: [
    "Use `.filter()` to create a new array with elements that pass a test.",
    "Use `.find()` to get the first element in an array that satisfies a condition.",
    "Use `.reduce()` to execute a reducer function on each element, resulting in a single output value.",
    "Use `.some()` to check if at least one element in an array passes a test.",
    "Use `.every()` to check if all elements in an array pass a test.",
    "Chain multiple array methods together to perform complex data transformations."
  ],
  detailedExplanation: `
Modern JavaScript provides a rich set of array methods that allow you to write expressive, declarative code and avoid manual \`for\` loops.

### \`.filter()\`
Creates a new array with all elements that pass the test implemented by the provided callback function.

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 },
];
const affordableProducts = products.filter(product => product.price < 100);
console.log(affordableProducts); // [{ name: 'Mouse', ... }, { name: 'Keyboard', ... }]
\`\`\`

### \`.find()\`
Returns the **value of the first element** in the array that satisfies the provided testing function. Otherwise \`undefined\` is returned.

\`\`\`javascript
const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
const userBob = users.find(user => user.name === 'Bob');
console.log(userBob); // { id: 2, name: 'Bob' }
\`\`\`

### \`.some()\` and \`.every()\`
These methods test the elements of an array and return a boolean.
*   **\`.some()\`**: returns \`true\` if **at least one** element passes the test.
*   **\`.every()\`**: returns \`true\` if **all** elements pass the test.

\`\`\`javascript
const scores = [85, 92, 78, 65, 95];
const hasFailingScore = scores.some(score => score < 70);
console.log(hasFailingScore); // true

const allPassingScores = scores.every(score => score >= 60);
console.log(allPassingScores); // true
\`\`\`

### \`.reduce()\`
This is the most powerful and often most confusing array method. It executes a "reducer" function on each element of the array, resulting in a single output value. It's great for summing up values, flattening arrays, or grouping objects.

The reducer function takes two main arguments:
1.  **Accumulator**: The value resulting from the previous iteration.
2.  **Current Value**: The current element being processed.

\`reduce\` also takes an optional second argument: the **initial value** for the accumulator.

\`\`\`javascript
// Summing an array
const numsToSum = [1, 2, 3, 4, 5];
const sum = numsToSum.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 is the initial value for the accumulator
console.log(sum); // 15

// Tallying items in an array
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'apple'];
const fruitTally = fruits.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {}); // {} is the initial value (an empty object)
console.log(fruitTally); // { apple: 3, banana: 1, orange: 2 }
\`\`\`

### Chaining Methods
You can chain these methods together to perform complex data manipulations in a clean, readable way.

\`\`\`javascript
const transactions = [
  { id: 1, type: 'income', amount: 1000 },
  { id: 2, type: 'expense', amount: 50 },
  { id: 3, type: 'income', amount: 200 },
  { id: 4, type: 'expense', amount: 120 },
];

// Calculate total expenses
const totalExpenses = transactions
  .filter(t => t.type === 'expense') // Get only expenses
  .map(t => t.amount)                // Get their amounts
  .reduce((sum, amount) => sum + amount, 0); // Sum them up

console.log(totalExpenses); // 170
\`\`\`
`,
  keyTerms: [
    { term: ".filter()", definition: "Creates a new array with all elements that pass a test provided by a callback function." },
    { term: ".find()", definition: "Returns the first element in an array that satisfies a testing function." },
    { term: ".reduce()", definition: "Executes a reducer function on each element of an array to produce a single output value." },
    { term: "Accumulator", definition: "The value that accumulates the result in the `reduce` method's callback function." },
    { term: ".some()", definition: "Tests whether at least one element in the array passes the test." },
    { term: ".every()", definition: "Tests whether all elements in the array pass the test." },
    { term: "Chaining", definition: "The practice of calling methods one after another on an object, often used with array methods for data transformation." }
  ],
  exercises: [
    {
      id: 1,
      title: "Filter Active Users",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an array of user objects. Each object should have a `name` and an `isActive` (boolean) property.",
        "Use the `.filter()` method to create a new array containing only the active users.",
        "Log the new array to the console."
      ]
    },
    {
      id: 2,
      title: "Find a Product by ID",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an array of product objects, each with an `id` and a `name`.",
        "Use the `.find()` method to find the product with a specific ID (e.g., `id: 3`).",
        "Log the found product object to the console."
      ]
    },
    {
      id: 3,
      title: "Calculate Total Price of a Shopping Cart",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create an array of items in a shopping cart. Each item should be an object with a `name`, `price`, and `quantity`.",
        "Use the `.reduce()` method to calculate the total cost of the cart.",
        "The total cost is the sum of `price * quantity` for each item.",
        "Your initial value for the accumulator should be 0.",
        "Log the final total to the console."
      ]
    },
    {
      id: 4,
      title: "Complex Data Transformation Chain",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "You have an array of student objects, each with `name`, `grade` (a number from 0-100), and `year` (e.g., 'Freshman', 'Sophomore').",
        "Your task is to get a list of the names of all 'Sophomore' students who have a passing grade (>= 70).",
        "Chain array methods to solve this.",
        "Step 1: `.filter()` to get only sophomores with passing grades.",
        "Step 2: `.map()` to extract just the names of those students.",
        "Log the final array of names."
      ]
    }
  ]
};
