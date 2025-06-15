
import { DayLesson } from "../types";

export const day73: DayLesson = {
  day: 73,
  title: "JavaScript Classes (ES6)",
  category: "JavaScript Advanced",
  description: "Learn the modern, cleaner syntax for creating objects and handling inheritance with the `class` keyword.",
  learningObjectives: [
    "Define a class using the `class` keyword.",
    "Understand the role of the `constructor` method.",
    "Create and call instance methods and static methods.",
    "Implement inheritance using the `extends` and `super` keywords.",
    "Use getters and setters to define computed properties."
  ],
  detailedExplanation: `
ES6 introduced the \`class\` keyword, which provides a much clearer and more familiar syntax for creating object-oriented structures in JavaScript. It's important to remember that JavaScript classes are primarily **syntactic sugar** over the existing prototype-based inheritance. They do not introduce a new object-oriented inheritance model.

### Basic Class Definition
A class is a blueprint for creating objects. The \`constructor\` method is a special method for creating and initializing an object created with a class.

\`\`\`javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // This is an instance method
  getArea() {
    return this.height * this.width;
  }
}

const rect1 = new Rectangle(10, 20);
console.log(rect1.getArea()); // 200
\`\`\`

### Inheritance with \`extends\` and \`super\`
The \`extends\` keyword is used to create a child class that inherits from a parent class.

The \`super\` keyword is used to call the parent's constructor. **You must call \`super()\` in the child class's constructor before using the \`this\` keyword.**

\`\`\`javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\`\${this.name} makes a noise.\`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent constructor
    this.breed = breed;
  }

  // Override the parent's speak method
  speak() {
    console.log(\`\${this.name} barks.\`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); // "Buddy barks."
\`\`\`

### Getters and Setters
Getters and setters allow you to define properties that are computed dynamically. They look like regular properties when accessed, but they are actually methods.

\`\`\`javascript
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter
  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }

  // Setter
  set fullName(name) {
    const parts = name.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

const user = new User("John", "Doe");
console.log(user.fullName); // "John Doe" (accessing it like a property)

user.fullName = "Jane Smith"; // Using the setter
console.log(user.firstName); // "Jane"
console.log(user.lastName);  // "Smith"
\`\`\`

### Static Methods
Static methods are called on the class itself, not on an instance of the class. They are often used for utility functions related to the class.

\`\`\`javascript
class MathHelper {
  static PI = 3.14159;

  static double(n) {
    return n * 2;
  }
}

console.log(MathHelper.PI);         // 3.14159
console.log(MathHelper.double(5));  // 10

// You cannot call a static method on an instance
const instance = new MathHelper();
// instance.double(5); // This would throw a TypeError
\`\`\`
`,
  keyTerms: [
    { term: "class", definition: "A keyword used to define a blueprint for creating objects. It is syntactic sugar over prototypal inheritance." },
    { term: "constructor", definition: "A special method within a class for creating and initializing an object instance." },
    { term: "extends", definition: "A keyword used in a class declaration to create a child class that inherits from a parent class." },
    { term: "super", definition: "A keyword used to call methods on an object's parent, typically the parent's constructor." },
    { term: "static", definition: "A keyword that defines a method or property on the class itself, rather than on the instances of the class." },
    { term: "getter/setter", definition: "Special methods that allow you to define computed properties, providing read and write access that looks like a regular property." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create a `Person` Class",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Define a class named `Person`.",
        "The constructor should accept `name` and `age` and set them as properties.",
        "Add an instance method `introduce()` that logs a string like 'Hi, my name is [name] and I am [age] years old.'",
        "Create an instance of the `Person` class and call the `introduce()` method."
      ]
    },
    {
      id: 2,
      title: "Inheritance: `Student` Class",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a `Student` class that `extends` the `Person` class from the previous exercise.",
        "The `Student` constructor should accept `name`, `age`, and `studentId`.",
        "Call the parent constructor using `super()`.",
        "Add a new method `study()` that logs 'Studying...'",
        "Create an instance of `Student` and call both `introduce()` and `study()`."
      ]
    },
    {
      id: 3,
      title: "Class with Getters and Setters",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a `Circle` class.",
        "The constructor should accept a `radius`.",
        "Create a getter `diameter` that returns the radius * 2.",
        "Create a setter `diameter` that takes a new diameter and correctly sets the radius.",
        "Create a getter `area` that returns the area of the circle (π * r²).",
        "Test your class by creating a circle, getting its diameter and area, then setting a new diameter and checking the values again."
      ]
    },
    {
      id: 4,
      title: "Static Utility Method",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a `Point` class with `x` and `y` properties in its constructor.",
        "Create a static method on the `Point` class called `distance(pointA, pointB)`.",
        "This method should take two `Point` instances as arguments and calculate the Euclidean distance between them.",
        "The formula is: √((x2 − x1)² + (y2 − y1)²). You can use `Math.sqrt()` and `Math.pow()`.",
        "Create two points and use the static method to calculate and log the distance between them."
      ]
    }
  ]
};
