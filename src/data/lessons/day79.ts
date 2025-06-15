
import { DayLesson } from "../types";

export const day79: DayLesson = {
  day: 79,
  title: "Local Storage and Session Storage",
  category: "JavaScript Advanced",
  description: "Learn how to store data directly in the user's browser using the Web Storage API, enabling data persistence across page reloads and browser sessions.",
  learningObjectives: [
    "Understand the purpose and limitations of web storage.",
    "Distinguish between Local Storage and Session Storage.",
    "Use `setItem()`, `getItem()`, `removeItem()`, and `clear()` to manage stored data.",
    "Store complex data like objects and arrays by using JSON."
  ],
  detailedExplanation: `
The Web Storage API provides mechanisms by which browsers can store key/value pairs, in a much more intuitive way than using cookies. There are two main types of web storage: Local Storage and Session Storage.

### Key Characteristics
- **Data Format:** Both store data as strings. To store objects or arrays, you must first convert them to a JSON string using \`JSON.stringify()\` and then parse them back with \`JSON.parse()\` upon retrieval.
- **Capacity:** They offer much more storage space (typically 5-10 MB per domain) compared to cookies (around 4 KB).
- **Security:** Data is specific to the protocol (http/https), domain, and port. It is never transferred to the server with HTTP requests, unlike cookies.
- **API:** Both \`localStorage\` and \`sessionStorage\` are properties of the global \`window\` object and share the same methods.

### Local Storage (\`localStorage\`)
Data stored in \`localStorage\` persists even after the browser is closed and reopened. It has no expiration time and will remain until the user manually clears their browser cache or the web app clears the data. It's useful for storing user preferences, a JWT token, or a shopping cart's contents.

### Session Storage (\`sessionStorage\`)
Data stored in \`sessionStorage\` only lasts for the duration of the page session. A page session lasts for as long as the browser is open and survives page reloads and restores. **Closing a tab or window will clear the session storage.** It's useful for data that is relevant for a single user session, like data in a multi-step form.

### The API Methods
The methods are identical for both \`localStorage\` and \`sessionStorage\`.

- **\`setItem(key, value)\`**: Adds a key/value pair to storage.
- **\`getItem(key)\`**: Retrieves the value for a given key. Returns \`null\` if the key does not exist.
- **\`removeItem(key)\`**: Removes a specific key/value pair.
- **\`clear()\`**: Removes all key/value pairs from storage.
- **\`key(index)\`**: Returns the name of the key at a given index.
- **\`length\`**: A property that returns the number of items stored.

### Example: Storing a User Theme Preference
\`\`\`javascript
// Storing the preference
localStorage.setItem('theme', 'dark');

// Retrieving the preference when the page loads
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.className = currentTheme;
}

// Removing the preference
// localStorage.removeItem('theme');

// Clearing all local storage for this domain
// localStorage.clear();
\`\`\`

### Example: Storing a JavaScript Object
You must use JSON to store complex data types.

\`\`\`javascript
const userSettings = {
  username: 'Alice',
  notifications: true,
  volume: 75
};

// 1. Stringify the object before storing
localStorage.setItem('settings', JSON.stringify(userSettings));

// 2. Retrieve the string and parse it back into an object
const storedSettingsString = localStorage.getItem('settings');
const retrievedSettings = JSON.parse(storedSettingsString);

if (retrievedSettings) {
  console.log(retrievedSettings.username); // "Alice"
}
\`\`\`
**Important:** Always check if the value from \`getItem\` is not \`null\` before trying to parse it, as \`JSON.parse(null)\` will result in \`null\` without error, but trying to access properties on it will cause an error.
`,
  keyTerms: [
    { term: "Web Storage API", definition: "A browser API that provides mechanisms for storing key/value data on the client-side." },
    { term: "Local Storage", definition: "A type of web storage where data persists indefinitely, even after the browser is closed." },
    { term: "Session Storage", definition: "A type of web storage where data persists only for the duration of the page session (until the tab is closed)." },
    { term: "setItem()", definition: "A method to add or update a key/value pair in storage." },
    { term: "getItem()", definition: "A method to retrieve a value from storage using its key." },
    { term: "JSON.stringify()", definition: "A method to convert a JavaScript object into a JSON string, necessary for storing objects in web storage." },
    { term: "JSON.parse()", definition: "A method to convert a JSON string into a JavaScript object, used after retrieving data from web storage." }
  ],
  exercises: [
    {
      id: 1,
      title: "Save and Retrieve a Username",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an input field and a 'Save' button.",
        "When the user clicks 'Save', get the value from the input field.",
        "Save this value to `localStorage` with the key 'username'.",
        "Add a function that runs on page load, checks for 'username' in `localStorage`, and if it exists, populates the input field with it."
      ]
    },
    {
      id: 2,
      title: "Session-Based Counter",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a button that says 'Increment'.",
        "Each time the button is clicked, increment a counter value stored in `sessionStorage`.",
        "Display the current count on the page.",
        "The counter should persist if you reload the page, but reset if you close the tab and open a new one."
      ]
    },
    {
      id: 3,
      title: "Store a To-Do List",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a simple to-do list application.",
        "When a user adds a new to-do item, add it to an array.",
        "Use `JSON.stringify` to save the entire to-do list array to `localStorage`.",
        "When the page loads, check `localStorage` for a saved list. If it exists, use `JSON.parse` to retrieve it and render the list on the page.",
        "Implement a 'delete' button for each item that updates the array and re-saves it to `localStorage`."
      ]
    },
    {
      id: 4,
      title: "Remember Form Data",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a multi-field form (e.g., name, email, message).",
        "As the user types into each field, save the form's data to `sessionStorage` as a single object.",
        "On page load, check `sessionStorage` for this data. If it exists, pre-fill the form fields.",
        "This is useful for preventing users from losing their data if they accidentally reload the page."
      ]
    }
  ]
};
