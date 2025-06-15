
import { DayLesson } from "../types";

export const day90: DayLesson = {
  day: 90,
  title: "Modern JavaScript: Advanced Object Techniques",
  category: "Modern JavaScript",
  description: "Master powerful object-related features in modern JavaScript, including destructuring, spread syntax, optional chaining, and more for cleaner, more efficient code.",
  learningObjectives: [
    "Use destructuring to extract properties from objects.",
    "Use the spread syntax to merge or clone objects.",
    "Safely access nested properties with optional chaining (`?.`).",
    "Use the nullish coalescing operator (`??`) for default values.",
    "Understand and use computed property names.",
    "Define shorthand properties and methods in object literals."
  ],
  detailedExplanation: `
Modern JavaScript provides a rich set of features for working with objects that can make your code significantly more concise and readable.

### Destructuring & Spread Syntax

**Destructuring** allows you to unpack values from objects into distinct variables.
**Spread syntax (\\\`...\\\`)** allows you to expand an object into a new object, perfect for cloning or merging.

\\\`\\\`\\\`javascript
const user = {
  id: 123,
  name: 'Alice',
  profile: {
    email: 'alice@example.com',
    theme: 'dark'
  }
};

// Destructuring
const { name, profile } = user;
console.log(name); // 'Alice'
console.log(profile); // { email: 'alice@...', theme: 'dark' }

// Nested destructuring with renaming
const { profile: { email: userEmail } } = user;
console.log(userEmail); // 'alice@example.com'

// Spread to clone
const userClone = { ...user };

// Spread to merge and add/overwrite properties
const userWithRole = { ...user, role: 'admin', name: 'Alice Smith' };
console.log(userWithRole.name); // 'Alice Smith'
console.log(userWithRole.role); // 'admin'
\\\`\\\`\\\`

### Optional Chaining (\\\`?.\\\`) & Nullish Coalescing (\\\`??\\\`)

These two operators are a powerful combination for safely handling potentially missing data.

**Optional Chaining (\\\`?.\\\`)** stops an expression from throwing an error if a property in the chain is \\\`null\\\` or \\\`undefined\\\`. Instead, it returns \\\`undefined\\\`.

**Nullish Coalescing (\\\`??\\\`)** provides a default value only when the left-hand side is \\\`null\\\` or \\\`undefined\\\` (unlike \\\`||\\\` which also triggers for \\\`0\\\`, \\\`false\\\`, or \\\`''\\\`).

\\\`\\\`\\\`javascript
const user1 = { name: 'Bob' }; // No address
const user2 = { name: 'Charlie', address: { city: 'New York' } };

// Without optional chaining, this would throw an error for user1
console.log(user1.address?.street); // undefined

// With optional chaining, it's safe
console.log(user2.address?.city); // 'New York'

// Using nullish coalescing for a default value
const city = user1.address?.city ?? 'City not provided';
console.log(city); // "City not provided"
\\\`\\\`\\\`

### Shorthand Properties & Computed Property Names

**Shorthand Properties**: If a variable name is the same as the object key, you can just use the variable name.
**Computed Property Names**: You can use an expression in brackets \\\`[]\\\` to define an object key dynamically.

\\\`\\\`\\\`javascript
const username = 'JohnDoe';
const email = 'john.doe@email.com';

// Shorthand properties
const newUser = { username, email };
// Same as: const newUser = { username: username, email: email };

// Computed property name
const key = 'isAdmin';
const userWithStatus = {
  ...newUser,
  [key]: true
};
console.log(userWithStatus.isAdmin); // true
\\\`\\\`\\\`
`,
  keyTerms: [
    { term: "Object Destructuring", definition: "A syntax for unpacking properties from an object into distinct variables." },
    { term: "Spread Syntax (`...`)", definition: "A syntax for expanding an iterable (like an object) into its individual elements, used for cloning and merging." },
    { term: "Optional Chaining (`?.`)", definition: "An operator that allows safe access to deeply nested properties without checking if each level exists." },
    { term: "Nullish Coalescing Operator (`??`)", definition: "A logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`." },
    { term: "Computed Property Names", definition: "A syntax that allows using an expression in brackets to define an object key dynamically." },
    { term: "Shorthand Properties", definition: "A syntax for initializing an object property when the variable name matches the key." }
  ],
  exercises: [
    {
      id: 1,
      title: "Destructure User Data",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Given the object `const user = { name: 'Jane', age: 28, city: 'London' }`.",
        "Use destructuring to create three variables `name`, `age`, and `city` from the object.",
        "Log each variable to the console."
      ]
    },
    {
      id: 2,
      title: "Merge and Update Settings",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "You have two objects: `const defaultSettings = { theme: 'light', notifications: true };` and `const userSettings = { notifications: false, timezone: 'GMT' };`.",
        "Use the spread syntax to create a new `finalSettings` object.",
        "The new object should contain all properties from both, but `userSettings` should override `defaultSettings` if there's a conflict.",
        "Log the `finalSettings` object."
      ]
    },
    {
      id: 3,
      title: "Safely Access Nested Data",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a function `getZipCode(user)`.",
        "The user object might look like `{ info: { address: { zip: '12345' } } }` or it might be missing the `address` or `info` properties.",
        "Inside the function, use optional chaining (`?.`) and the nullish coalescing operator (`??`) to safely get the zip code.",
        "If the zip code exists, return it. If it doesn't exist at any level, return the string 'Zip code not available'.",
        "Test your function with a complete user object and an empty one."
      ]
    },
    {
      id: 4,
      title: "Dynamic Property Creator",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a function `createDynamicObject(key, value)`.",
        "This function should return a new object with a single property.",
        "The property's key should be the `key` argument, and its value should be the `value` argument.",
        "Use computed property names to achieve this.",
        "Test it by calling `createDynamicObject('productID', 456)` and logging the result."
      ]
    }
  ]
};
