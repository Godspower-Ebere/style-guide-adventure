
import { DayLesson } from "../types";

export const day90: DayLesson = {
  day: 90,
  title: "Modern JavaScript: Advanced Object Techniques",
  category: "Modern JavaScript",
  description: "Learn modern ES6+ syntax for working with objects, including destructuring, spread/rest syntax, and new operators for safer property access.",
  learningObjectives: [
    "Use destructuring assignment to unpack values from objects.",
    "Use the spread syntax (`...`) to expand an object into another object.",
    "Use the rest parameter (`...`) to collect remaining properties into a new object.",
    "Safely access nested properties using optional chaining (`?.`).",
    "Provide default values for nullish variables using the nullish coalescing operator (`??`)."
  ],
  detailedExplanation: `
ES6 and subsequent versions of JavaScript have added powerful new syntax for making object manipulation cleaner and more expressive.

### Destructuring Assignment
Destructuring allows you to extract properties from an object and bind them to variables.

\`\`\`javascript
const user = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  settings: {
    theme: 'dark'
  }
};

// Old way
// const name = user.name;
// const email = user.email;

// New way with destructuring
const { name, email } = user;
console.log(name); // 'Alice'
console.log(email); // 'alice@example.com'

// You can also rename variables
const { name: userName } = user;
console.log(userName); // 'Alice'

// And destructure nested objects
const { settings: { theme } } = user;
console.log(theme); // 'dark'

// And provide default values
const { name, role = 'user' } = user;
console.log(role); // 'user'
\`\`\`
This is extremely useful for unpacking props in components or handling function parameters.

### Spread (`...`) and Rest (`...`) Syntax
The three dots (`...`) can be used for two different but related operations.

#### Spread Syntax
The spread syntax "expands" an iterable (like an object or array) into its individual elements. It's perfect for making shallow copies or merging objects.

\`\`\`javascript
const defaults = { color: 'blue', size: 'medium' };
const custom = { size: 'large', weight: 50 };

// Merge objects. Properties from later objects overwrite earlier ones.
const merged = { ...defaults, ...custom };
console.log(merged); // { color: 'blue', size: 'large', weight: 50 }

// Create a shallow copy
const userCopy = { ...user };
\`\`\`

#### Rest Parameter
When used in destructuring, the rest syntax collects all *remaining* properties into a new object.

\`\`\`javascript
const player = {
  name: 'Player 1',
  score: 100,
  x: 50,
  y: 20,
  z: 10
};

// Extract name and score, put the rest into a 'position' object
const { name, score, ...position } = player;
console.log(name);     // 'Player 1'
console.log(score);    // 100
console.log(position); // { x: 50, y: 20, z: 10 }
\`\`\`

### Optional Chaining (`?.`)
This operator prevents errors when you try to access a property of a value that is \`null\` or \`undefined\`. Instead of throwing a \`TypeError\`, it short-circuits and returns \`undefined\`.

\`\`\`javascript
const data = {
  user: {
    name: 'Bob',
    // address is missing
  }
};

// Old way (error-prone or verbose)
// const street = data.user.address.street; // Throws TypeError
// const streetSafe = data && data.user && data.user.address && data.user.address.street;

// New way with optional chaining
const street = data.user?.address?.street;
console.log(street); // undefined (no error!)
\`\`\`
This drastically cleans up code that deals with deeply nested data from APIs, which might have missing fields.

### Nullish Coalescing Operator (`??`)
This logical operator returns its right-hand side operand when its left-hand side operand is \`null\` or \`undefined\`, and otherwise returns its left-hand side operand.

This is a safer alternative to the OR operator (`||`) for providing default values, because \`||\` also triggers on other "falsy" values like \`0\`, \`''\` (empty string), and \`false\`, which you might want to consider valid.

\`\`\`javascript
let volume = 0;
let userVolume = volume || 50; // Oops, userVolume is 50 because 0 is falsy
let userVolumeSafe = volume ?? 50; // Correct, userVolumeSafe is 0

let name = '';
let userName = name || 'Guest'; // 'Guest'
let userNameSafe = name ?? 'Guest'; // '' (empty string is a valid name)
\`\`\`
Use \`??\` when you specifically want to provide a fallback for only \`null\` and \`undefined\`.
`,
  keyTerms: [
    { term: "Destructuring", definition: "A syntax that allows unpacking values from arrays or properties from objects into distinct variables." },
    { term: "Spread Syntax (...)", definition: "Expands an iterable (like an object) into its individual elements, used for copying or merging." },
    { term: "Rest Parameter (...)", definition: "Collects multiple elements or properties into a single variable, typically used in function parameters or destructuring." },
    { term: "Optional Chaining (?.)", definition: "Permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid." },
    { term: "Nullish Coalescing Operator (??)", definition: "A logical operator that returns its right-hand side operand only when the left-hand side is `null` or `undefined`." }
  ],
  exercises: [
    {
      id: 1,
      title: "Destructure Function Parameters",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a function `displayUser` that accepts a user object as its only argument.",
        "Instead of writing `function displayUser(user)`, use destructuring in the parameter list itself: `function displayUser({ name, email })`.",
        "The function should log a string like `'Name: ..., Email: ...'`.
        "Create a user object and call the function to test it."
      ]
    },
    {
      id: 2,
      title: "Merge and Clone",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a `baseConfig` object with some default settings.",
        "Create an `overrideConfig` object with one or two different settings.",
        "Use the spread syntax to merge them into a `finalConfig` object, with the override settings taking precedence.",
        "Then, create a separate clone of the `finalConfig` object, also using the spread syntax."
      ]
    },
    {
      id: 3,
      title: "Safe Navigation",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "You receive an API response object that might be incomplete.",
        `const response = { data: { user: { profile: { name: 'Dev' } } } };`,
        `const brokenResponse = { data: { user: null } };`,
        "Write a function `getUserName(apiResponse)`.",
        "Inside the function, use optional chaining (`?.`) to safely access `apiResponse.data.user.profile.name`.",
        "Use the nullish coalescing operator (`??`) to return `'Guest'` if the name is not found.",
        "Test your function with both the complete and broken response objects."
      ]
    },
    {
      id: 4,
      title: "Separate Config with Rest",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "You have a single large object containing both user data and UI settings: `{ name: '...', email: '...', theme: '...', language: '...' }`.",
        "Use destructuring with the rest syntax to separate the object.",
        "Pull out `theme` and `language` into their own variables.",
        "Collect the remaining properties (`name`, `email`, etc.) into a `userData` object.",
        "Log the `theme`, `language`, and the `userData` object to verify they were separated correctly."
      ]
    }
  ]
};
