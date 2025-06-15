
import { DayLesson } from "../types";

export const day84: DayLesson = {
  day: 84,
  title: "Web APIs: Fetch API for GET Requests",
  category: "Web APIs",
  description: "Learn to retrieve data from servers and APIs using the modern, promise-based Fetch API.",
  learningObjectives: [
    "Understand the purpose of the Fetch API for making HTTP requests.",
    "Make a basic `GET` request using `fetch()`.",
    "Process the `Response` object returned by `fetch()`.",
    "Use the `.json()` method to parse JSON data from a response.",
    "Combine `fetch()` with `async/await` for clean and readable data fetching code."
  ],
  detailedExplanation: `
The **Fetch API** is a modern interface that allows you to make HTTP requests to servers from web browsers. It is a more powerful and flexible replacement for the older \`XMLHttpRequest\`. Fetch is promise-based, which makes it a perfect fit for \`async/await\`.

### Making a Basic GET Request
A simple \`GET\` request, used to retrieve data, is the most common operation. The \`fetch()\` function takes one mandatory argument: the URL of the resource you want to fetch. It returns a Promise that resolves to the \`Response\` object representing the response to the request.

\`\`\`javascript
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Using .then() chain
fetch(apiUrl)
  .then(response => {
    // The 'response' object contains metadata like status code, headers, etc.
    // It does NOT contain the actual data yet.
    console.log(response);

    // To read the body of the response, you need to use one of its methods, like .json()
    // .json() also returns a promise!
    return response.json();
  })
  .then(data => {
    // This is the actual JSON data from the API
    console.log(data);
  })
  .catch(error => {
    // This catches network errors, but not HTTP errors like 404 or 500
    console.error('Fetch Error:', error);
  });
\`\`\`

### The Response Object
The \`Response\` object is a representation of the entire HTTP response. It has useful properties and methods:
*   \`response.ok\`: A boolean that is \`true\` if the HTTP status code is in the 200-299 range.
*   \`response.status\`: The numerical status code (e.g., 200, 404).
*   \`response.statusText\`: The status message (e.g., "OK", "Not Found").
*   \`response.headers\`: A Headers object to inspect response headers.
*   \`response.json()\`: Reads the response stream to completion and parses the body text as JSON.
*   \`response.text()\`: Reads the response stream and parses it as plain text.

**Important:** The \`fetch()\` promise only rejects when a network error occurs (e.g., no internet connection). It does **not** reject on HTTP error statuses like 404 (Not Found) or 500 (Internal Server Error). You must check \`response.ok\` or \`response.status\` to handle these cases yourself.

### Using Fetch with Async/Await
Async/await makes fetch requests much more readable.

\`\`\`javascript
const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

const fetchUser = async () => {
  try {
    const response = await fetch(apiUrl);

    // Manually check for HTTP errors
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Could not fetch user:", error);
  }
};

fetchUser();
\`\`\`
This structure—a `try/catch` block, an `await fetch()`, a check for `response.ok`, and an `await response.json()`—is a very common and robust pattern for making GET requests.
`,
  keyTerms: [
    { term: "Fetch API", definition: "A browser interface for making HTTP requests to servers." },
    { term: "HTTP Request", definition: "A message sent by a client to a server, e.g., to request data (GET) or submit data (POST)." },
    { term: "GET", definition: "An HTTP method used to request data from a specified resource." },
    { term: "Response Object", definition: "An object returned by `fetch()` that represents the server's response to a request." },
    { term: "JSON (JavaScript Object Notation)", definition: "A lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate." },
    { term: "API (Application Programming Interface)", definition: "A set of rules and protocols for building and interacting with software applications." }
  ],
  exercises: [
    {
      id: 1,
      title: "Fetch a Random Dog Image",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "The Dog CEO API provides random dog images.",
        "The URL for a random image is: `https://dog.ceo/api/breeds/image/random`",
        "Use `fetch()` to make a GET request to this URL.",
        "Parse the JSON response.",
        "The response object will have a `message` property containing the image URL. Log this URL to the console."
      ]
    },
    {
      id: 2,
      title: "Fetch To-Do List Items",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Use the JSONPlaceholder API: `https://jsonplaceholder.typicode.com/todos`",
        "Create an `async` function `fetchTodos`.",
        "Inside the function, fetch the list of to-dos from the URL.",
        "Remember to check if `response.ok` is true and throw an error if it's not.",
        "Parse the JSON data, which will be an array of to-do objects.",
        "Log the first 5 to-do items from the resulting array."
      ]
    },
    {
      id: 3,
      title: "Handling a 404 Error",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Write an `async` function to fetch data from a URL that you know will result in a 404 Not Found error.",
        "Use this URL: `https://jsonplaceholder.typicode.com/posts/999999`",
        "Inside your function, use a `try...catch` block.",
        "Check for `response.ok` and if it's false, throw a custom error message.",
        "Your `catch` block should log a user-friendly message like 'Sorry, that post could not be found.'."
      ]
    },
    {
      id: 4,
      title: "Fetch and Display User Data",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create an HTML file with a `div` element with an id `user-info`.",
        "Write an `async` function `displayUser(userId)` that takes a user ID as an argument.",
        "The function should fetch data for that user from `https://jsonplaceholder.typicode.com/users/{userId}`.",
        "Once you have the user data (name, email, phone, website), create HTML elements (`h2`, `p`, etc.) to display this information.",
        "Append these new elements to the `user-info` div in your HTML.",
        "Call `displayUser(2)` to see the result on your page."
      ]
    }
  ]
};
