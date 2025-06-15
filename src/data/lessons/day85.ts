
import { DayLesson } from "../types";

export const day85: DayLesson = {
  day: 85,
  title: "Web APIs: Fetch for POST, PUT, DELETE",
  category: "Web APIs",
  description: "Learn how to modify data on a server by sending `POST`, `PUT`, and `DELETE` requests with the Fetch API.",
  learningObjectives: [
    "Understand the purpose of `POST`, `PUT`, and `DELETE` HTTP methods.",
    "Configure a `fetch` request with a second argument (the `options` object).",
    "Set the `method`, `headers`, and `body` properties in the `options` object.",
    "Properly format data as a JSON string for the request body using `JSON.stringify()`.",
    "Send a `POST` request to create a new resource.",
    "Send a `DELETE` request to remove a resource."
  ],
  detailedExplanation: `
While \`GET\` requests are for retrieving data, other HTTP methods are used to modify it. The most common are:
*   **POST:** Used to create a new resource on the server.
*   **PUT:** Used to update an existing resource completely.
*   **PATCH:** Used to update an existing resource partially.
*   **DELETE:** Used to remove a resource.

To use these methods with \`fetch\`, you need to provide a second argument: an **options object**.

### The Fetch Options Object
This object allows you to configure the request. For modifying data, the key properties are:
*   \`method\`: The HTTP method, e.g., \`'POST'\`, \`'DELETE'\`.
*   \`headers\`: An object specifying the HTTP headers. For sending JSON, you must include \`'Content-Type': 'application/json'\`.
*   \`body\`: The data you want to send. This data must be converted to a string. For JSON APIs, you'll use \`JSON.stringify()\`.

### Example: Creating a Resource with POST
Let's create a new blog post using the JSONPlaceholder API.

\`\`\`javascript
const newPost = {
  title: 'My Awesome New Post',
  body: 'This is the content of the post.',
  userId: 1,
};

const createPost = async (postData) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData), // Convert the JS object to a JSON string
    });

    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    const data = await response.json();
    console.log('Post created successfully:', data);
    // The API will typically respond with the created object, including its new ID.
  } catch (error) {
    console.error('Failed to create post:', error);
  }
};

createPost(newPost);
\`\`\`

### Example: Deleting a Resource with DELETE
The \`DELETE\` method is simpler as it usually doesn't require sending a body. You just need to specify the method and the URL of the resource to delete.

\`\`\`javascript
const deletePost = async (postId) => {
  try {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${postId}\`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    // A successful DELETE request often returns an empty body.
    // The status code (200 OK or 204 No Content) indicates success.
    console.log(\`Post \${postId} deleted successfully. Status: \${response.status}\`);
  } catch (error) {
    console.error('Failed to delete post:', error);
  }
};

deletePost(1);
\`\`\`
The same principles apply to \`PUT\` and \`PATCH\` requests, where you would typically provide an updated version of the resource in the request \`body\`.
`,
  keyTerms: [
    { term: "POST", definition: "An HTTP method for creating a new resource on a server." },
    { term: "PUT", definition: "An HTTP method for completely replacing an existing resource on a server." },
    { term: "DELETE", definition: "An HTTP method for deleting a resource from a server." },
    { term: "Request Options", definition: "An object passed as the second argument to `fetch` to configure the request (e.g., method, headers, body)." },
    { term: "Headers", definition: "Metadata sent with an HTTP request or response. `'Content-Type'` is a common header." },
    { term: "Body", definition: "The data payload of an HTTP request, used with methods like POST and PUT." },
    { term: "JSON.stringify()", definition: "A JavaScript method that converts a JavaScript object or value to a JSON string." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create a New To-Do Item",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an `async` function `addTodo(todoItem)`.",
        "The function should take a to-do object, e.g., `{ title: 'Learn Fetch POST', completed: false, userId: 1 }`.",
        "Make a `POST` request to `https://jsonplaceholder.typicode.com/todos`.",
        "Remember to set the `method`, `headers` ('Content-Type'), and `body` (using `JSON.stringify`).",
        "Log the newly created to-do item that is returned by the API."
      ]
    },
    {
      id: 2,
      title: "Delete a Comment",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an `async` function `deleteComment(commentId)`.",
        "The function should make a `DELETE` request to `https://jsonplaceholder.typicode.com/comments/{commentId}`.",
        "Check the response status to confirm the deletion was successful.",
        "Log a success message to the console, like 'Comment 5 was deleted.'."
      ]
    },
    {
      id: 3,
      title: "Update a User (PUT)",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create an `async` function `updateUser(userId, userData)`.",
        "The function should make a `PUT` request to `https://jsonplaceholder.typicode.com/users/{userId}`.",
        "A `PUT` request should send the *entire* updated object.",
        "Create a `userData` object with updated information for a user (e.g., change their name and email).",
        "Send the request and log the updated user data returned by the API."
      ]
    },
    {
      id: 4,
      title: "Simple Contact Form",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a simple HTML form with fields for `name` and `email` and a submit button.",
        "Add an event listener to the form's `submit` event.",
        "In the event listener, prevent the default form submission.",
        "Get the values from the input fields.",
        "Create an object with the name and email.",
        "Use `fetch` to `POST` this object to `https://jsonplaceholder.typicode.com/users`.",
        "Log the server's response to the console."
      ]
    }
  ]
};
