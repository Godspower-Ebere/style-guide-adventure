
import { DayLesson } from "../types";

export const day80: DayLesson = {
  day: 80,
  title: "JS Data Structures: Map and Set",
  category: "JavaScript Advanced",
  description: "Explore the powerful ES6 data structures, Map and Set, for handling unique collections and keyed data more effectively than with plain objects or arrays.",
  learningObjectives: [
    "Understand the differences between Map and Object.",
    "Create and manipulate data in a Map using `set`, `get`, `has`, and `delete`.",
    "Iterate over Maps using `forEach` or `for...of`.",
    "Understand the use case for Set to store unique values.",
    "Add, check for, and remove items from a Set.",
    "Convert between Sets and Arrays to leverage the strengths of both."
  ],
  detailedExplanation: `
ES6 introduced two new and incredibly useful data structures to JavaScript: **Set** and **Map**. They provide more specialized and powerful ways to handle collections of data compared to traditional arrays and objects.

### Set
A **Set** is a collection of **unique values**. Any single value can only appear once in a Set, which makes them perfect for tasks like removing duplicates.

Key features of a Set:
*   **Uniqueness**: Automatically handles uniqueness. You cannot add a duplicate value.
*   **Any Data Type**: Values in a Set can be of any type, from primitives to objects.
*   **Iterable**: You can easily loop over a Set using \`for...of\` or \`forEach\`.

\`\`\`javascript
// Create a new Set
const uniqueNumbers = new Set();

// Add values using the .add() method
uniqueNumbers.add(5);
uniqueNumbers.add(10);
uniqueNumbers.add(5); // This will be ignored, as 5 is already in the Set

console.log(uniqueNumbers); // Set(2) { 5, 10 }

// Check if a value exists with .has()
console.log(uniqueNumbers.has(10)); // true
console.log(uniqueNumbers.has(15)); // false

// Get the number of items with the .size property
console.log(uniqueNumbers.size); // 2

// A common use case: removing duplicates from an array
const numberList = [1, 2, 3, 2, 4, 1, 5];
const uniqueList = [...new Set(numberList)]; // Use spread syntax to convert back to an array
console.log(uniqueList); // [1, 2, 3, 4, 5]
\`\`\`

### Map
A **Map** is a collection of **keyed data items**, just like an Object. However, Maps have some significant advantages:
*   **Any Key Type**: Map keys can be of **any data type** (even an object or a function), whereas object keys are limited to strings and symbols.
*   **Iterable**: Maps are directly iterable. You can reliably loop over their \`[key, value]\` pairs in insertion order.
*   **Size Property**: Maps have a \`.size\` property that easily gives you the number of key-value pairs.
*   **Performance**: Maps are optimized for frequent additions and removals of key-value pairs.

\`\`\`javascript
// Create a new Map
const userRoles = new Map();

// Add key-value pairs with .set()
userRoles.set('alice', 'admin');
userRoles.set('bob', 'editor');
userRoles.set('charlie', 'viewer');

// Get a value by its key with .get()
console.log(userRoles.get('alice')); // "admin"

// Check if a key exists with .has()
console.log(userRoles.has('bob')); // true

// Get the size
console.log(userRoles.size); // 3

// Iterate over a Map
for (const [user, role] of userRoles) {
  console.log(\`\${user} has the role: \${role}\`);
}
\`\`\`

In summary:
*   Use a **Set** when you need a list of unique items and order doesn't matter as much.
*   Use a **Map** when you need a key-value store, especially if your keys are not strings or if you need to iterate over the collection frequently.
`,
  keyTerms: [
    { term: "Set", definition: "A data structure that stores a collection of unique values of any type." },
    { term: "Map", definition: "A data structure that stores key-value pairs where keys can be of any data type." },
    { term: "Uniqueness", definition: "The property of a Set where each value can only appear once." },
    { term: "Key-Value Pair", definition: "The fundamental unit of data in a Map, associating a key with a value." },
    { term: "Iterable", definition: "An object that can be looped over in a predictable order, like Map and Set." }
  ],
  exercises: [
    {
      id: 1,
      title: "Remove Duplicate Tags",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "You have an array of tags with duplicates: `['javascript', 'react', 'css', 'javascript', 'html', 'css']`.",
        "Use a `Set` to create a new array containing only the unique tags.",
        "Log the final unique array to the console."
      ]
    },
    {
      id: 2,
      title: "Basic User Preferences Map",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new `Map` called `userPrefs`.",
        "Use the `set()` method to store the following preferences: `theme` -> `'dark'`, `fontSize` -> `16`, `showAvatars` -> `true`.",
        "Use the `get()` method to retrieve and log the `theme` preference.",
        "Use the `has()` method to check if a preference for `fontSize` exists and log the result.",
        "Log the `size` of the map."
      ]
    },
    {
      id: 3,
      title: "Counting Word Frequencies",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "You are given a string of text: `'hello world this is a test hello world'`.",
        "Create a function `countWords(text)`.",
        "Inside the function, split the text into an array of words.",
        "Use a `Map` to store the frequency of each word. The word should be the key and its count should be the value.",
        "Iterate over the array of words. For each word, update its count in the map.",
        "Return the map and log it to the console."
      ]
    },
    {
      id: 4,
      title: "Managing a Class Roster",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a `Map` to act as a class roster where the key is the student ID (number) and the value is the student's name (string).",
        "Add 3 students to the roster with IDs 101, 102, and 103.",
        "A student drops the class. Remove the student with ID 102 from the roster using the `delete()` method.",
        "A new student enrolls. Add a new student with ID 104.",
        "Iterate over the final roster using a `for...of` loop and log each student's ID and name to the console."
      ]
    }
  ]
};
