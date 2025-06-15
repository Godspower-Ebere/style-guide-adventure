
import { DayLesson } from "../types";

export const day92: DayLesson = {
  day: 92,
  title: "Modern JavaScript: Metaprogramming with Proxy and Reflect",
  category: "Modern JavaScript",
  description: "Unlock the power of metaprogramming in JavaScript by using Proxy objects to intercept and customize fundamental language operations.",
  learningObjectives: [
    "Define metaprogramming and its purpose in JavaScript.",
    "Create a `Proxy` to wrap a target object.",
    "Implement handlers (traps) like `get`, `set`, and `has` to intercept operations.",
    "Understand the role of the `Reflect` API and its relationship with `Proxy` handlers.",
    "Identify practical use cases for Proxies, such as validation, logging, and data binding."
  ],
  detailedExplanation: `
**Metaprogramming** is the idea of code that can inspect, analyze, and modify other code. JavaScript provides a powerful tool for this called **Proxy**. A Proxy object wraps another object (the "target") and allows you to intercept fundamental operations like property access, assignment, function calls, and more.

### Creating a Proxy
The syntax is straightforward: \`const proxy = new Proxy(target, handler);\`.
*   **target**: The original object you want to wrap.
*   **handler**: An object that contains "traps"—methods that will be called when an operation is performed on the proxy.

### Traps and Handlers
Let's look at the two most common traps: \`get\` and \`set\`.

\`\`\`javascript
const user = {
  name: "Alice",
  age: 30
};

const handler = {
  // Trap for getting a property's value
  get(target, property) {
    console.log(\`Accessed property: \${property}\`);
    // Forward the operation to the original object
    return target[property];
  },

  // Trap for setting a property's value
  set(target, property, value) {
    if (property === 'age' && typeof value !== 'number') {
      throw new TypeError("Age must be a number.");
    }
    console.log(\`Set property \${property} to \${value}\`);
    // Forward the operation
    target[property] = value;
    return true; // The set trap must return a boolean indicating success
  }
};

const userProxy = new Proxy(user, handler);

console.log(userProxy.name); // Logs "Accessed property: name" then "Alice"
userProxy.age = 31;          // Logs "Set property age to 31"
userProxy.age = "thirty-two";  // Throws TypeError
\`\`\`

### The Role of \`Reflect\`
In the example above, we accessed the target directly with \`target[property]\`. This works, but it's not ideal. The modern best practice is to use the **\`Reflect\`** API.

\`Reflect\` is a built-in object that provides methods for interceptable JavaScript operations. Its methods have the same names as the proxy traps (e.g., \`Reflect.get()\`, \`Reflect.set()\`). Using \`Reflect\` ensures that the operation is forwarded correctly, preserving the original behavior, including the correct handling of \`this\`.

Here is the previous handler, rewritten with \`Reflect\`:
\`\`\`javascript
const reflectHandler = {
  get(target, property, receiver) {
    console.log(\`Accessed property: \${property}\`);
    // Use Reflect.get to forward the operation
    return Reflect.get(target, property, receiver);
  },
  set(target, property, value, receiver) {
    if (property === 'age' && typeof value !== 'number') {
        throw new TypeError("Age must be a number.");
    }
    console.log(\`Set property \${property} to \${value}\`);
    // Use Reflect.set to forward the operation
    return Reflect.set(target, property, value, receiver);
  }
};
\`\`\`
Proxies are the foundation of many modern libraries and frameworks (like Vue.js reactivity system) for tasks like data binding, validation, and debugging.
`,
  keyTerms: [
    { term: "Metaprogramming", definition: "Code that operates on other code. In JavaScript, Proxies enable this by letting you intercept and redefine fundamental language operations." },
    { term: "Proxy", definition: "An object that wraps another object (the target) and allows you to intercept operations on it." },
    { term: "Target", definition: "The original object that a proxy is wrapping." },
    { term: "Handler", definition: "An object containing traps (methods) that define the custom behavior for a proxy." },
    { term: "Trap", definition: "A method on a handler object that intercepts a specific operation, like `get` for property access or `set` for property assignment." },
    { term: "Reflect", definition: "A built-in object that provides methods for JavaScript's fundamental operations, designed to be used with proxies." }
  ],
  exercises: [
    {
      id: 1,
      title: "Logging Property Access",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an object `data = { value: 42 }`.",
        "Create a proxy for this object.",
        "Implement the `get` trap on the handler.",
        "Inside the `get` trap, log a message like `Fetching property: [property name]` to the console before returning the actual value.",
        "Use `Reflect.get` to return the value.",
        "Test it by accessing `proxy.value`."
      ]
    },
    {
      id: 2,
      title: "Validation with a Setter",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an object `user = { name: '', email: '' }`.",
        "Create a proxy for this object with a `set` trap.",
        "Inside the `set` trap, add validation: if the property being set is `email`, check if the new value includes an '@' symbol.",
        "If the email is invalid, throw an `Error`. Otherwise, allow the change.",
        "Use `Reflect.set` to perform the actual assignment.",
        "Test it by trying to set a valid and an invalid email on `proxy.email`."
      ]
    },
    {
      id: 3,
      title: "Default Property Values",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a proxy for any object.",
        "Implement the `get` trap.",
        "Inside the trap, check if the property exists on the target object (you can use `Reflect.has`).",
        "If the property exists, return its value.",
        "If it does not exist, return the string 'Property not found'.",
        "Test it by accessing both an existing and a non-existing property."
      ]
    },
    {
      id: 4,
      title: "Read-Only View",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a proxy that makes an object read-only.",
        "The `get` trap should work as normal, returning the property value.",
        "The `set` trap should always throw an `Error` with the message 'This object is read-only'.",
        "The `deleteProperty` trap should also throw an `Error`.",
        "Test your proxy by trying to read, set, and delete a property."
      ]
    }
  ]
};
