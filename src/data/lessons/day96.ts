
import { DayLesson } from "../types";

export const day96: DayLesson = {
  day: 96,
  title: "JavaScript Design Patterns",
  category: "JavaScript Advanced",
  description: "Learn common design patterns like Singleton, Factory, and Observer to write more organized, flexible, and reusable code.",
  learningObjectives: [
    "Define what a design pattern is and why it's useful.",
    "Implement the Singleton pattern to ensure a class has only one instance.",
    "Implement the Factory pattern to create objects without specifying the exact class.",
    "Implement the Observer pattern to create a subscription model for components to react to state changes.",
    "Recognize when to apply these patterns in real-world applications."
  ],
  detailedExplanation: `
**Design Patterns** are reusable solutions to commonly occurring problems within a given context in software design. They are not specific pieces of code, but rather general concepts or templates for how to structure your code to solve a problem efficiently and effectively.

### Why Use Design Patterns?
*   **Proven Solutions**: They are battle-tested solutions that have been refined by many developers over time.
*   **Shared Vocabulary**: They provide a common language for developers to communicate about software design.
*   **Code Flexibility**: They often lead to more loosely coupled systems, making your code easier to maintain and extend.

### 1. The Singleton Pattern (Creational)
The Singleton pattern ensures that a class can only have **one instance** and provides a global point of access to that instance. This is useful for managing shared resources like a database connection or a logging service.

\`\`\`javascript
class Database {
  private static instance: Database;
  private constructor() {
    // private constructor prevents direct instantiation
    console.log("Connecting to database...");
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public query(sql: string) {
    console.log(\`Executing query: \${sql}\`);
  }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2); // true - they are the same instance
db1.query("SELECT * FROM users");
\`\`\`

### 2. The Factory Pattern (Creational)
The Factory pattern provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. It's used when you want to create objects without exposing the instantiation logic to the client.

\`\`\`javascript
// The product interface
interface IVehicle {
  drive(): void;
}

// Concrete products
class Car implements IVehicle {
  drive() { console.log("Driving a car..."); }
}
class Truck implements IVehicle {
  drive() { console.log("Driving a truck..."); }
}

// The factory
class VehicleFactory {
  createVehicle(type: 'car' | 'truck'): IVehicle {
    if (type === 'car') {
      return new Car();
    }
    if (type === 'truck') {
      return new Truck();
    }
    throw new Error("Vehicle type not recognized");
  }
}

const factory = new VehicleFactory();
const car = factory.createVehicle('car');
const truck = factory.createVehicle('truck');

car.drive();   // Driving a car...
truck.drive(); // Driving a truck...
\`\`\`

### 3. The Observer Pattern (Behavioral)
The Observer pattern defines a subscription mechanism to notify multiple objects about any events that happen to the object they're observing. This is the foundation of event-driven programming and is used extensively in UI frameworks.

\`\`\`javascript
// The subject (the thing being observed)
class NewsPublisher {
  private observers: Subscriber[] = [];

  subscribe(observer: Subscriber) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Subscriber) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(news: string) {
    this.observers.forEach(observer => observer.update(news));
  }
}

// The observer interface
interface Subscriber {
  update(data: any): void;
}

// Concrete observers
class NewsReader implements Subscriber {
  constructor(private name: string) {}
  update(news: string) {
    console.log(\`\${this.name} received breaking news: \${news}\`);
  }
}

const publisher = new NewsPublisher();
const reader1 = new NewsReader("Alice");
const reader2 = new NewsReader("Bob");

publisher.subscribe(reader1);
publisher.subscribe(reader2);

publisher.notify("The market is up!");
// Alice received breaking news: The market is up!
// Bob received breaking news: The market is up!

publisher.unsubscribe(reader2);
publisher.notify("A new technology was released!");
// Alice received breaking news: A new technology was released!
\`\`\`
`,
  keyTerms: [
    { term: "Design Pattern", definition: "A general, reusable solution to a commonly occurring problem in software design." },
    { term: "Singleton Pattern", definition: "A pattern that restricts the instantiation of a class to a single object." },
    { term: "Factory Pattern", definition: "A pattern used to create objects without specifying the exact class of the object that will be created." },
    { term: "Observer Pattern", definition: "A pattern where an object (the subject) maintains a list of its dependents (observers) and notifies them automatically of any state changes." },
    { term: "Creational Pattern", definition: "Design patterns that deal with object creation mechanisms." },
    { term: "Behavioral Pattern", definition: "Design patterns that identify common communication patterns between objects." }
  ],
  exercises: [
    {
      id: 1,
      title: "Implement a Logger Singleton",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a `Logger` class that follows the Singleton pattern.",
        "The Logger should have a `log(message)` method that adds a timestamped message to a private array of logs.",
        "It should also have a `getLogs()` method to retrieve all logs.",
        "Create two different variables that get the instance of the Logger.",
        "Log a few messages from both variables, and then use one of them to get all logs and print them to the console, proving it's the same instance."
      ]
    },
    {
      id: 2,
      title: "User Profile Factory",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a `UserProfile` factory.",
        "Define two user types: `Admin` and `Guest`.",
        "The factory's `createProfile(type)` method should return an object with a `name` property and a `permissions` array.",
        "Admins should have permissions `['create', 'read', 'update', 'delete']`.",
        "Guests should have permissions `['read']`.",
        "Create one of each profile type and log their permissions to the console."
      ]
    },
    {
      id: 3,
      title: "Weather Station Observer",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a `WeatherStation` (Subject) and `WeatherDisplay` (Observer) system.",
        "The `WeatherStation` should have a method to `setTemperature(temp)`.",
        "When the temperature is set, it should notify all subscribed `WeatherDisplay` observers.",
        "Each `WeatherDisplay` should have a `name` and an `update` method that logs the new temperature, like `'[Display Name]: The new temperature is [temp] degrees.'`.",
        "Create a station, create two displays, subscribe them, and then change the temperature to see the notifications."
      ]
    }
  ]
};
