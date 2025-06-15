import { DayLesson } from "../types";

export const day80: DayLesson = {
  day: 80,
  title: "JS Data Structures: Map and Set",
  category: "JavaScript Advanced",
  description: "Explore the powerful ES6 data structures, Map and Set, for more efficient ways to handle collections of data.",
  learningObjectives: [
    "Understand the advantages of using `Set` for storing unique values.",
    "Use common `Set` methods like `add`, `has`, `delete`, and `clear`.",
    "Understand the advantages of `Map` for key-value pairs where keys can be any data type.",
    "Use common `Map` methods like `set`, `get`, `has`, `delete`, and `clear`.",
    "Iterate over `Map` and `Set` objects."
  ],
  detailedExplanation: `
ES6 introduced two new data structures, \`Set\` and \`Map\`, which provide more specialized and often more efficient ways to handle collections of data compared to plain objects and arrays.

### Set
A \`Set\` is a collection of **unique** values. A value in a Set may only occur once; it is unique in the Set's collection. You can store any type of value, whether primitive values or object references.

**Key Use Case:** Removing duplicates from an array or quickly checking for the presence of an item in a collection.

// Creating a Set
const mySet = new Set();

// Adding values
mySet.add(1);
mySet.add(5);
mySet.add("some text");
mySet.add({ a: 1 });

// Adding a duplicate value does nothing
mySet.add(5); 

console.log(mySet.size); // 4

// Checking for a value (much faster than Array.includes for large collections)
console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false

// Deleting a value
mySet.delete(5);

// Iterating over a Set
for (let item of mySet) {
  console.log(item);
}

// A common use case: remove duplicates from an array
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [2, 3, 4, 5, 6, 7]

### Map
A \`Map\` is a collection of key-value pairs where **any value (both objects and primitive values) may be used as either a key or a value**. This is a significant advantage over plain objects, which are limited to using strings or symbols as keys.

**Key Use Case:** When you need to associate data with a specific object, or when you need keys that aren't strings.

// Creating a Map
const myMap = new Map();

const keyString = "a string";
const keyObject = {};
const keyFunction = function() {};

// Setting values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObject, "value associated with keyObject");
myMap.set(keyFunction, "value associated with keyFunction");

console.log(myMap.size); // 3

// Getting values
console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObject)); // "value associated with keyObject"

// Checking for a key
console.log(myMap.has(keyFunction)); // true

// Iterating over a Map
// Using .entries() or for...of
for (let [key, value] of myMap) {
  console.log(\`\\\${key} = \\\${value}\`);
}

// Using .keys()
for (let key of myMap.keys()) {
  console.log(key);
}

// Using .values()
for (let value of myMap.values()) {
  console.log(value);
}

### Map vs. Object - Key Differences
| Feature | Map | Object |
| :--- | :--- | :--- |
| **Key Types** | Any value (object, primitive) | String or Symbol |
| **Key Order** | Keys are ordered by insertion | Keys are not guaranteed to be in order |
| **Size** | Easily get size with \`.size\` property | Must manually calculate size (e.g., \`Object.keys(obj).length\`) |
| **Iteration** | Directly iterable (e.g., \`for...of\`) | Not directly iterable (must use \`Object.keys\`, etc.) |
| **Performance** | Optimized for frequent additions and removals | Not optimized for frequent additions and removals |
`,
  keyTerms: [
    { term: "Set", definition: "An ES6 data structure that represents a collection of unique values." },
    { term: "Map", definition: "An ES6 data structure that represents a collection of key-value pairs, where keys can be of any data type." },
    { term: ".add()", definition: "A method on a Set to add a new element." },
    { term: ".has()", definition: "A method on a Set or Map to check for the presence of an element or key." },
    { term: ".set()", definition: "A method on a Map to add or update a key-value pair." },
    { term: ".get()", definition: "A method on a Map to retrieve the value associated with a key." }
  ],
  exercises: [
    {
      id: 1,
      title: "De-duplicating an Array",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an array of strings with several duplicate values.",
        "Use a `Set` to create a new array containing only the unique values from the original array.",
        "Log the new, de-duplicated array to the console."
      ]
    },
    {
      id: 2,
      title: "Tagging System with a Set",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a `Set` to store tags for a blog post.",
        "Add several tags like 'javascript', 'es6', 'webdev'.",
        "Try to add 'javascript' again and observe that the set size doesn't change.",
        "Check if the set `has()` the tag 'css'.",
        "Log the final size of the set."
      ]
    },
    {
      id: 3,
      title: "User Roles with a Map",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create two user objects, `user1` and `user2`.",
        "Create a `Map` called `userRoles`.",
        "Use the user objects themselves as keys in the map.",
        "Set the value for `user1` to 'Admin' and for `user2` to 'Editor'.",
        "Write a function `getRole(user)` that takes a user object and returns their role from the map.",
        "Test the function with both users."
      ]
    },
    {
      id: 4,
      title: "Counting Word Frequency",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Take a sentence (string of text).",
        "Create a `Map` to store the frequency of each word.",
        "Iterate over the words in the sentence.",
        "For each word, use it as a key in the map. If the word is already in the map, increment its value (count). If not, add it to the map with a value of 1.",
        "After processing the whole sentence, log the map to see the word counts."
      ]
    }
  ]
};
