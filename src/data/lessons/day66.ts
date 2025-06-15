
import { DayLesson } from "../types";

export const day66: DayLesson = {
  day: 66,
  title: "JavaScript Arrays",
  category: "JavaScript Basics",
  description: "Learn to store and manipulate ordered collections of data using arrays and their powerful built-in methods.",
  learningObjectives: [
    "Create and initialize arrays using array literals.",
    "Access and modify elements in an array using index notation.",
    "Understand the `length` property of an array.",
    "Use common array methods like `push`, `pop`, `shift`, and `unshift` to modify arrays.",
    "Iterate over arrays using methods like `forEach` and `map`."
  ],
  detailedExplanation: `
An array is a special type of object used for storing an ordered collection of multiple values in a single variable. The values can be of any data type.

### Creating and Accessing Arrays
The most common way to create an array is with an array literal, which is simply a list of values in square brackets \`[]\`.

\`\`\`javascript
// An array of strings
const fruits = ["Apple", "Banana", "Cherry"];

// An array of numbers
const scores = [98, 85, 91, 78];

// An array with mixed data types
const mixed = ["Text", 123, true, null];
\`\`\`

You can access an element in an array by referring to its **index**, which is its numerical position. Array indexing is **zero-based**, meaning the first element is at index 0.

\`\`\`javascript
console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"

// You can also modify an element by its index
fruits[1] = "Blueberry";
console.log(fruits); // ["Apple", "Blueberry", "Cherry"]
\`\`\`
The \`length\` property tells you how many elements are in the array.
\`\`\`javascript
console.log(fruits.length); // 3
\`\`\`

### Common Array Methods
Arrays come with many built-in methods to make working with them easier.

**Adding/Removing Elements:**
- \`push(item)\`: Adds one or more items to the **end** of an array.
- \`pop()\`: Removes the **last** item from an array and returns it.
- \`unshift(item)\`: Adds one or more items to the **beginning** of an array.
- \`shift()\`: Removes the **first** item from an array and returns it.

\`\`\`javascript
const tasks = ["Study", "Exercise"];
tasks.push("Shop");     // tasks is now ["Study", "Exercise", "Shop"]
tasks.pop();            // tasks is now ["Study", "Exercise"]
tasks.unshift("Wake up"); // tasks is now ["Wake up", "Study", "Exercise"]
tasks.shift();          // tasks is now ["Study", "Exercise"]
\`\`\`

### Iterating Over Arrays
Often you'll want to perform an action for every element in an array.

**1. The \`forEach\` Method**
Executes a provided function once for each array element. It's great for when you just need to "do something" with each item.

\`\`\`javascript
const numbers = [1, 2, 3];
numbers.forEach(function(number, index) {
  console.log("Item at index " + index + " is " + number);
});
\`\`\`

**2. The \`map\` Method**
This is one of the most useful methods. It creates a **new array** populated with the results of calling a provided function on every element in the calling array. It's perfect for when you need to transform data.

\`\`\`javascript
const values = [1, 2, 3, 4, 5];
const doubledValues = values.map(function(value) {
  return value * 2;
});

console.log(doubledValues); // [2, 4, 6, 8, 10]
console.log(values);        // [1, 2, 3, 4, 5] (The original array is unchanged)
\`\`\`
There are many more array methods like \`filter\`, \`reduce\`, \`find\`, and \`slice\`, which you'll encounter as you progress.
`,
  keyTerms: [
    { term: "Array", definition: "A data structure that stores a collection of elements in an ordered list." },
    { term: "Index", definition: "The numerical position of an element in an array, starting from 0." },
    { term: "Array Literal", definition: "A syntax for creating an array, consisting of a pair of square brackets surrounding a list of elements." },
    { term: "Array Method", definition: "A function that is a property of an array object, used to manipulate or inspect the array (e.g., `push`, `map`)." },
    { term: "forEach()", definition: "An array method that executes a provided callback function once for each element in the array." },
    { term: "map()", definition: "An array method that creates a new array by calling a provided callback function on every element and collecting the results." }
  ],
  exercises: [
    {
      id: 1,
      title: "Shopping List",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an array named `shoppingList` with three string items.",
        "Use `push()` to add a fourth item to the end of the list.",
        "Use `pop()` to remove the last item.",
        "Log the final list to the console."
      ]
    },
    {
      id: 2,
      title: "Accessing Elements",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an array of your five favorite movies.",
        "Log the first movie to the console using its index.",
        "Log the third movie to the console.",
        "Log the number of movies in your list using the `length` property."
      ]
    },
    {
      id: 3,
      title: "Temperature Conversion",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create an array of temperatures in Celsius: `[0, 15, 25, 30]`.",
        "Use the `map()` method to create a new array, `fahrenheitTemps`, where each temperature is converted to Fahrenheit.",
        "The formula is: F = (C * 9/5) + 32.",
        "Log the new `fahrenheitTemps` array to the console."
      ]
    },
    {
      id: 4,
      title: "Displaying Groceries",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create an array of grocery items.",
        "Use the `forEach()` method to log each item to the console.",
        "The output for each item should be formatted like: `* Milk`, `* Bread`, etc."
      ]
    }
  ]
};
