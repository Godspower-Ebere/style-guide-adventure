
import { DayLesson } from "../types";

export const day72: DayLesson = {
  day: 72,
  title: "Prototypes and Prototypal Inheritance",
  category: "JavaScript Advanced",
  description: "Explore the core mechanism of JavaScript's object-oriented nature: the prototype chain.",
  learningObjectives: [
    "Understand that every JavaScript object has a `[[Prototype]]` property.",
    "Learn how properties and methods are resolved by traversing the prototype chain.",
    "Use `Object.create()` to create objects with a specific prototype.",
    "Inspect an object's prototype using `Object.getPrototypeOf()`."
  ],
  detailedExplanation: `
Before classes were introduced in ES6, JavaScript handled inheritance through a mechanism called **prototypal inheritance**. It's a fundamental concept that still underpins how objects work today.

### What is a Prototype?
Every JavaScript object has a hidden, internal property, written in the specification as \`[[Prototype]]\`. This property is a reference (a link) to another object. This other object is the first object's **prototype**.

When you try to access a property on an object, the JavaScript engine first checks if the property exists directly on that object. If not, it follows the \`[[Prototype]]\` link to the prototype object and checks there. If it's still not found, it continues up the **prototype chain** until it finds the property or reaches the end of the chain. The end of the chain is almost always the built-in \`Object.prototype\`.

\`\`\`javascript
const animal = {
  eats: true,
  walk() {
    console.log("Animal is walking.");
  }
};

// Create a new object 'rabbit' with 'animal' as its prototype
const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats);     // true (inherited from animal)
console.log(rabbit.jumps);    // true (own property)
rabbit.walk();                // "Animal is walking." (inherited from animal)

// The prototype chain: rabbit ---> animal ---> Object.prototype ---> null
\`\`\`

### Creating Objects with Prototypes

#### 1. `Object.create()`
This is the most direct way to create an object with a specified prototype.

\`\`\`javascript
const vehicle = {
  hasEngine: true
};

const car = Object.create(vehicle);
car.wheels = 4;

console.log(car.hasEngine); // true
console.log(Object.getPrototypeOf(car) === vehicle); // true
\`\`\`

#### 2. Constructor Functions
This was the traditional "class-like" way of creating objects before the \`class\` keyword. When you create a function and call it with \`new\`, the new object's \`[[Prototype]]\` is automatically set to the constructor function's \`prototype\` property.

It's important to understand that \`MyConstructor.prototype\` is NOT the prototype of the function itself. It's the object that will become the prototype for all instances created with \`new MyConstructor()\`.

\`\`\`javascript
function Dog(name) {
  this.name = name;
}

// Add a method to the Dog's prototype.
// All instances of Dog will share this method.
Dog.prototype.bark = function() {
  console.log("Woof! My name is " + this.name);
};

const fido = new Dog("Fido");
const fluffy = new Dog("Fluffy");

fido.bark();  // "Woof! My name is Fido"
fluffy.bark(); // "Woof! My name is Fluffy"

// fido doesn't have its own 'bark' method. It finds it on its prototype.
console.log(fido.hasOwnProperty('bark')); // false
console.log(Object.getPrototypeOf(fido) === Dog.prototype); // true
\`\`\`
This is more memory-efficient than putting the \`bark\` method directly on \`this\` inside the constructor, as every dog instance would get its own copy of the function. With prototypes, they all share one.

### Checking Prototypes
- \`Object.getPrototypeOf(obj)\`: Returns the prototype of an object.
- \`obj.hasOwnProperty(prop)\`: Returns \`true\` if \`prop\` is an "own" property of \`obj\` (not inherited).
- \`prop in obj\`: Returns \`true\` if \`prop\` exists anywhere on the prototype chain.
`,
  keyTerms: [
    { term: "Prototype", definition: "An object from which other objects inherit properties. It's the core of JavaScript's inheritance model." },
    { term: "Prototype Chain", definition: "The series of linked objects that JavaScript searches through to find a property or method." },
    { term: "Prototypal Inheritance", definition: "A style of object-oriented programming where behavior is reused by cloning existing objects that serve as prototypes." },
    { term: "Constructor Function", definition: "A function used with the `new` keyword to create and initialize objects. Its `prototype` property defines the prototype of the created instances." },
    { term: "Object.create()", definition: "A method that creates a new object, using an existing object as the prototype of the newly created object." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Inheritance with `Object.create()`",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a `person` object with a method `sayHello()` that logs 'Hello!'",
        "Create a `student` object using `Object.create(person)`.",
        "Add a `major` property to the `student` object.",
        "Log the `student.major` property.",
        "Call the `student.sayHello()` method to confirm it inherited correctly."
      ]
    },
    {
      id: 2,
      title: "Constructor Function and Prototypes",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a constructor function `Book(title, author)`.",
        "Inside the constructor, set the `title` and `author` properties on `this`.",
        "Add a method `getSummary()` to the `Book.prototype`.",
        "The `getSummary()` method should return a string like '[Title] by [Author]'.",
        "Create an instance of `Book` and call its `getSummary()` method."
      ]
    },
    {
      id: 3,
      title: "Inspecting the Chain",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Using the `Book` constructor from the previous exercise, create a new book instance.",
        "Use `Object.getPrototypeOf()` to verify that the instance's prototype is `Book.prototype`.",
        "Use `hasOwnProperty()` to check if `title` is an own property and `getSummary` is not.",
        "Use the `in` operator to check if `getSummary` exists on the object (it will search the prototype chain)."
      ]
    },
    {
      id: 4,
      title: "Multi-level Inheritance",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a base object `GameObject` with properties `x` and `y` (coordinates).",
        "Create a `Player` object that inherits from `GameObject` using `Object.create()` and add a `name` property.",
        "Create a `Warrior` object that inherits from `Player` and add a `weapon` property.",
        "Create an instance of `Warrior`.",
        "Log the warrior's `name`, `weapon`, and `x` coordinate to demonstrate properties being inherited from multiple levels up the chain."
      ]
    }
  ]
};
