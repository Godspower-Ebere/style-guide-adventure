
import { DayLesson } from "../types";

export const day87: DayLesson = {
  day: 87,
  title: "Web APIs: Local Storage & Session Storage",
  category: "Web APIs",
  description: "Learn how to persist data in the user's browser using the Web Storage API, making your applications feel faster and more stateful.",
  learningObjectives: [
    "Understand the purpose of web storage for saving data on the client-side.",
    "Differentiate between `localStorage` and `sessionStorage`.",
    "Use `setItem()` to save a key-value pair.",
    "Use `getItem()` to retrieve a value by its key.",
    "Use `removeItem()` to delete a specific item.",
    "Use `clear()` to remove all items.",
    "Store complex data (like objects or arrays) by using `JSON.stringify()` and `JSON.parse()`."
  ],
  detailedExplanation: `
The Web Storage API provides mechanisms by which browsers can store key/value pairs, in a much more intuitive way than working with cookies. There are two mechanisms within Web Storage:

*   **`sessionStorage`**: Maintains a separate storage area for each given origin that's available for the duration of the page session (as long as the browser is open, including page reloads and restores). Data is cleared when the tab or browser is closed.
*   **`localStorage`**: Does the same thing, but persists even when the browser is closed and reopened. The data has no expiration time.

Both `sessionStorage` and `localStorage` share the same API methods and properties. The only difference is their persistence. We'll use \`localStorage\` for the examples, but you can substitute \`sessionStorage\` and it will work the same way.

### Basic Usage
The API is very simple and works with key-value pairs. **Both keys and values must be strings.**

\`\`\`javascript
// 1. Save data to localStorage
localStorage.setItem('username', 'JohnDoe');
localStorage.setItem('theme', 'dark');

// 2. Get data from localStorage
const username = localStorage.getItem('username');
console.log(username); // "JohnDoe"

// If the key doesn't exist, getItem() returns null
const nonExistent = localStorage.getItem('favoriteColor');
console.log(nonExistent); // null

// 3. Remove a specific item
localStorage.removeItem('theme');
console.log(localStorage.getItem('theme')); // null

// 4. Remove all items from localStorage
localStorage.clear();
console.log(localStorage.getItem('username')); // null
\`\`\`

### Storing Complex Data
Since web storage can only store strings, what if you want to save an object or an array? You need to serialize it. The most common way is to use `JSON`.
*   **`JSON.stringify()`**: Converts a JavaScript object into a JSON string.
*   **`JSON.parse()`**: Converts a JSON string back into a JavaScript object.

\`\`\`javascript
const userSettings = {
  theme: 'dark',
  notifications: true,
  layout: 'compact'
};

// Storing the object
localStorage.setItem('settings', JSON.stringify(userSettings));

// Retrieving and parsing the object
const storedSettingsString = localStorage.getItem('settings');
const parsedSettings = JSON.parse(storedSettingsString);

console.log(parsedSettings); // { theme: 'dark', notifications: true, layout: 'compact' }
console.log(parsedSettings.theme); // "dark"
\`\`\`
This stringify/parse pattern is essential for working with web storage effectively.

### Use Cases
*   **`localStorage`**: Saving user preferences (like a theme), keeping a user logged in (by storing a token), or saving the contents of a shopping cart.
*   **`sessionStorage`**: Storing temporary data for a multi-page form, so if the user refreshes, their input isn't lost.

**Important Note:** Web storage is insecure and should **never** be used to store sensitive information like passwords or credit card numbers. All data in web storage is easily accessible to anyone with access to the browser, including through cross-site scripting (XSS) attacks.
`,
  keyTerms: [
    { term: "Web Storage API", definition: "A browser API for storing key-value pairs of data on the client-side." },
    { term: "localStorage", definition: "A web storage mechanism that stores data with no expiration date." },
    { term: "sessionStorage", definition: "A web storage mechanism that stores data for one session (until the browser tab is closed)." },
    { term: "setItem(key, value)", definition: "Method to add or update a key-value pair in storage." },
    { term: "getItem(key)", definition: "Method to retrieve an item from storage by its key." },
    { term: "removeItem(key)", definition: "Method to delete a specific item from storage." },
    { term: "JSON.stringify()", definition: "Converts a JavaScript object to a JSON string, necessary for storing it in web storage." },
    { term: "JSON.parse()", definition: "Converts a JSON string from web storage back into a JavaScript object." }
  ],
  exercises: [
    {
      id: 1,
      title: "Save a User's Name",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML page with an `<input>` field and a 'Save' button.",
        "When the user clicks 'Save', get the value from the input field.",
        "Save this value to `localStorage` with the key `'userName'`.",
        "Add a 'Load' button that retrieves the name from `localStorage` and logs it to the console."
      ]
    },
    {
      id: 2,
      title: "Remember a Theme Preference",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an HTML page with two buttons: 'Light Theme' and 'Dark Theme'.",
        "When 'Dark Theme' is clicked, save the string `'dark'` to `localStorage` with the key `'theme'` and add a class `dark-mode` to the `<body>`.",
        "When 'Light Theme' is clicked, save `'light'` and remove the `dark-mode` class.",
        "Write a script that runs when the page loads. It should check `localStorage` for the saved theme and apply the `dark-mode` class if necessary. This will make the theme persist across reloads."
      ]
    },
    {
      id: 3,
      title: "Shopping Cart",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a simple product list in HTML. Each item should have an 'Add to Cart' button.",
        "When a button is clicked, get the product's name and price.",
        "Retrieve the current cart from `localStorage` (it will be an array). If it doesn't exist, start with an empty array.",
        "Add the new product object `{ name, price }` to the array.",
        "Save the updated cart array back to `localStorage`. Remember to use `JSON.stringify()`.",
        "Add a 'View Cart' button that retrieves the cart, parses it, and logs the contents to the console."
      ]
    },
    {
      id: 4,
      title: "Form Data with Session Storage",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a multi-field form (e.g., name, email, message).",
        "Add an `input` event listener to each form field.",
        "Whenever a field's value changes, save its value to `sessionStorage`.",
        "Write a script that runs on page load. It should check `sessionStorage` for any saved form data and populate the input fields with it.",
        "This way, if the user accidentally refreshes the page, their progress is not lost."
      ]
    }
  ]
};
