
import { DayLesson } from "../types";

export const day67: DayLesson = {
  day: 67,
  title: "JavaScript Objects",
  category: "JavaScript Basics",
  description: "Learn to model real-world things by grouping related data and functions into objects.",
  learningObjectives: [
    "Create objects using object literal syntax.",
    "Access, add, and modify object properties using dot notation and bracket notation.",
    "Define and call methods (functions) on an object.",
    "Understand the basic concept of the `this` keyword within an object method."
  ],
  detailedExplanation: `
While arrays are great for ordered lists, **objects** are used for storing unordered collections of related data in the form of **key-value pairs**. They are perfect for describing a single entity, like a user, a car, or a product.

### Creating and Accessing Objects
The most common way to create an object is with an object literal: curly braces \`{}\` containing key-value pairs.

\`\`\`javascript
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isLoggedIn: true,
  favoriteFoods: ["Pizza", "Sushi"] // Properties can even be arrays!
};
\`\`\`
- **Keys** (also called properties) are strings.
- **Values** can be any data type (string, number, boolean, array, even another object).

There are two ways to access the properties of an object:

**1. Dot Notation**
This is the most common and readable way.

\`\`\`javascript
console.log(user.firstName); // "John"
console.log(user.age);       // 30

// You can also update values
user.age = 31;
console.log(user.age); // 31

// And add new properties
user.city = "New York";
console.log(user.city); // "New York"
\`\`\`

**2. Bracket Notation**
This is required when the property key is stored in a variable or contains special characters.

\`\`\`javascript
console.log(user["lastName"]); // "Doe"

let propertyToAccess = "isLoggedIn";
console.log(user[propertyToAccess]); // true
\`\`\`

### Object Methods and \`this\`
A property can also be a function. When a function is a property of an object, it's called a **method**.

\`\`\`javascript
const person = {
  name: "Alice",
  birthYear: 1990,
  greet: function() {
    console.log("Hello!");
  },
  calculateAge: function() {
    const currentYear = new Date().getFullYear();
    // 'this' refers to the object the method is called on
    return currentYear - this.birthYear;
  }
};

person.greet(); // Outputs: "Hello!"
const age = person.calculateAge();
console.log(age); // Outputs the calculated age
\`\`\`

The **\`this\`** keyword is a special identifier that refers to the object that the function is a method of. Inside \`calculateAge\`, \`this.birthYear\` is the same as \`person.birthYear\`. The value of \`this\` is determined by how a function is called, which is a key concept in JavaScript that you'll explore more deeply later. For a simple object method like this, it reliably refers to the object itself.
`,
  keyTerms: [
    { term: "Object", definition: "A data structure that stores a collection of key-value pairs. Used to group related data and functions." },
    { term: "Object Literal", definition: "A syntax for creating an object, consisting of a pair of curly braces surrounding a list of key-value pairs." },
    { term: "Property (or Key)", definition: "The name used to identify a value within an object." },
    { term: "Value", definition: "The data associated with a key in an object." },
    { term: "Method", definition: "A function that is a property of an object." },
    { term: "this", definition: "A keyword that refers to the context in which a function is executed. In an object method, it typically refers to the object itself." },
    { term: "Dot Notation", definition: "A syntax for accessing an object's property using a period (e.g., `object.property`)." },
    { term: "Bracket Notation", definition: "A syntax for accessing an object's property using square brackets (e.g., `object['property']`)." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create a Book Object",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an object named `book`.",
        "Give it properties for `title` (string), `author` (string), and `pageCount` (number).",
        "Log the entire object to the console.",
        "Then, log a sentence to the console like: `The book '...' by ... has ... pages.` using the object's properties."
      ]
    },
    {
      id: 2,
      title: "Add a Method",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Take the `book` object from the previous exercise.",
        "Add a method to it called `displayInfo`.",
        "This method should log the same sentence as before: `The book '...' by ... has ... pages.`",
        "Inside the method, use the `this` keyword to access the `title`, `author`, and `pageCount` properties.",
        "Call the method: `book.displayInfo();`."
      ]
    },
    {
      id: 3,
      title: "Pet Object",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create an object representing your pet (or an imaginary one).",
        "Include properties for `name`, `species`, and an array of `favoriteToys`.",
        "Add a method called `speak` that logs a sound (e.g., 'Woof!' or 'Meow!').",
        "Log the pet's name and its second favorite toy to the console.",
        "Call the `speak` method."
      ]
    },
    {
      id: 4,
      title: "Bracket Notation Practice",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Create a simple object `appConfig`.",
        "Add a property with a space in its name, like `'api key': 'XYZ123'`. You can't use dot notation for this.",
        "Create a variable `settingToAccess` and assign it the string value `'api key'`.",
        "Use bracket notation and the `settingToAccess` variable to log the API key to the console."
      ]
    }
  ]
};
