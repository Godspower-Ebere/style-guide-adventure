
import { DayLesson } from "../types";

export const day77: DayLesson = {
  day: 77,
  title: "The Fetch API for Network Requests",
  category: "JavaScript Advanced",
  description: "Learn how to make HTTP requests to servers to get data or send data using the modern, promise-based Fetch API.",
  learningObjectives: [
    "Make a simple GET request using `fetch()`.",
    "Understand the `Response` object and how to process it (e.g., using `.json()`).",
    "Handle network errors and bad HTTP responses (like 404 or 500).",
    "Configure `fetch()` to make POST, PUT, and DELETE requests with custom headers and a request body."
  ],
  detailedExplanation: `
The Fetch API provides a modern, powerful, and flexible interface for making network requests in the browser. It's a promise-based API, making it a perfect fit for \`async/await\`. It replaces the older \`XMLHttpRequest\` object.

### Making a Simple GET Request
The \`fetch()\` function takes one mandatory argument: the URL of the resource you want to fetch. It returns a Promise that resolves to the \`Response\` object representing the response to your request.

\`\`\`javascript
async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // The Response object has properties and methods to inspect the response.
    console.log(response.ok);      // true if status is 200-299
    console.log(response.status);  // 200
    console.log(response.statusText); // "OK"

    // To get the actual data, you need to use one of the body-reading methods.
    // These methods also return promises!
    const posts = await response.json(); // Parses the response body as JSON
    
    console.log(posts[0]); // { userId: 1, id: 1, title: '...', body: '...' }
  } catch (error) {
    // This only catches network errors (e.g., user is offline).
    // It does NOT catch HTTP errors like 404 or 500.
    console.error('Fetch failed:', error);
  }
}
\`\`\`

### Handling HTTP Errors
A key thing to remember is that \`fetch()\` **only rejects its promise if there's a network error**. It considers a 404 "Not Found" or 500 "Internal Server Error" as a "successful" request because a response was received from the server.

You must manually check the \`response.ok\` property or \`response.status\` to handle these cases.

\`\`\`javascript
async function getUser(userId) {
  try {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);

    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.error('Could not get user:', error);
  }
}
\`\`\`

### Making POST Requests (and others)
To make other types of requests (like POST, PUT, DELETE) or to send data, you pass a second argument to \`fetch()\`: an \`options\` object.

Key properties for the options object:
- \`method\`: The request method, e.g., 'POST', 'PUT', 'DELETE'. Defaults to 'GET'.
- \`headers\`: An object containing request headers, e.g., \`{ 'Content-Type': 'application/json' }\`.
- \`body\`: The body of the request. For sending JSON, you must stringify your object.

\`\`\`javascript
async function createPost(postData) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // Convert the JavaScript object to a JSON string
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    const newPost = await response.json();
    console.log('Post created:', newPost); // The server often returns the created object with an ID
  } catch (error) {
    console.error('Could not create post:', error);
  }
}

// Example usage
createPost({
  title: 'My new post',
  body: 'This is the content of my post.',
  userId: 1
});
\`\`\`
`,
  keyTerms: [
    { term: "Fetch API", definition: "A modern browser interface for making HTTP requests. It is promise-based." },
    { term: "Request", definition: "An object representing a resource request, containing the URL, method, headers, and body." },
    { term: "Response", definition: "An object representing the response to a request, containing the status, headers, and body." },
    { term: ".json()", definition: "A method on the Response object that reads the response stream to completion and parses the body text as JSON. It returns a promise." },
    { term: "Headers", definition: "An object representing the headers of a request or response, allowing you to query them and modify them." },
    { term: "Body", definition: "The data payload of a request or response. For POST/PUT requests, this is where you send your data." }
  ],
  exercises: [
    {
      id: 1,
      title: "Fetch a List of Todos",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Write an async function `getTodos()`.",
        "Use `fetch` to make a GET request to `https://jsonplaceholder.typicode.com/todos`.",
        "Convert the response to JSON.",
        "Log the first 5 todos from the resulting array to the console."
      ]
    },
    {
      id: 2,
      title: "Fetch a Single User with Error Handling",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Write an async function `fetchUser(userId)`.",
        "Fetch a single user from `https://jsonplaceholder.typicode.com/users/[userId]`.",
        "Inside a `try...catch` block, check if `response.ok` is false. If so, throw an error.",
        "If successful, log the user's name and email.",
        "Test your function with a valid ID (e.g., 1) and an invalid ID (e.g., 99) to see the error handling work."
      ]
    },
    {
      id: 3,
      title: "Create a New Post",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Write an async function `submitPost(title, body)`.",
        "The function should make a POST request to `https://jsonplaceholder.typicode.com/posts`.",
        "Include the necessary `method`, `headers` ('Content-Type'), and `body` in the options object.",
        "Remember to `JSON.stringify` the post data for the body.",
        "Log the server's response (the newly created post) to the console."
      ]
    },
    {
      id: 4,
      title: "Update a Post with PUT",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Write an async function `updatePost(postId, updatedData)`.",
        "Make a PUT request to `https://jsonplaceholder.typicode.com/posts/[postId]`.",
        "The `updatedData` should be an object with new `title` and `body` properties.",
        "Configure the `fetch` options for a PUT request, including headers and the stringified body.",
        "Include error handling for non-ok responses.",
        "Log the updated post returned by the server."
      ]
    }
  ]
};
