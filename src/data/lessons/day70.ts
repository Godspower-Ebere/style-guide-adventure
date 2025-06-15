
import { DayLesson } from "../types";

export const day70: DayLesson = {
  day: 70,
  title: "Manipulating the DOM",
  category: "JavaScript Basics",
  description: "Bring your pages to life by learning how to dynamically change content, styles, and attributes of HTML elements with JavaScript.",
  learningObjectives: [
    "Change the text and HTML content of an element using `textContent` and `innerHTML`.",
    "Modify element attributes like `src` or `href`.",
    "Manipulate CSS classes on an element using the `classList` property.",
    "Create, add, and remove elements from the DOM."
  ],
  detailedExplanation: `
Once you've selected an element from the DOM, you can change almost everything about it.

### Changing Content
There are two main properties for changing the content inside an element:

**1. \`.textContent\`**
This property gets or sets the text content of an element and all its descendants. It's fast and safe because it treats all content as plain text.

\`\`\`html
<h1 id="greeting">Hello, World!</h1>
\`\`\`
\`\`\`javascript
const greeting = document.getElementById("greeting");
greeting.textContent = "Welcome to the DOM!";
\`\`\`

**2. \`.innerHTML\`**
This property gets or sets the HTML markup contained within an element. It's more powerful than \`textContent\` but should be used with caution.

\`\`\`html
<div id="container"></div>
\`\`\`
\`\`\`javascript
const container = document.getElementById("container");
container.innerHTML = "<h2>New Title</h2><p>This was added by JavaScript.</p>";
\`\`\`
**Security Warning:** Only use \`innerHTML\` with content that you trust. Setting it with user-provided content can expose you to Cross-Site Scripting (XSS) attacks if the content contains malicious scripts. For plain text, always prefer \`textContent\`.

### Manipulating Attributes
You can easily get and set attributes like \`href\`, \`src\`, \`id\`, etc.

\`\`\`html
<img id="main-image" src="image1.jpg" alt="A placeholder image">
<a id="my-link" href="https://example.com">Visit Site</a>
\`\`\`
\`\`\`javascript
const image = document.getElementById("main-image");
image.src = "image2.jpg"; // Changes the image displayed
image.alt = "A new image";

const link = document.getElementById("my-link");
link.href = "https://developer.mozilla.org";
\`\`\`

### Manipulating Styles and Classes
While you can change styles directly (\`element.style.color = 'red'\`), it's often better practice to manipulate CSS classes. This keeps your styling logic in your CSS files.

The **\`classList\`** property is an object with helpful methods:
- \`.add('className')\`: Adds a class.
- \`.remove('className')\`: Removes a class.
- \`.toggle('className')\`: Adds the class if it's not present, removes it if it is.
- \`.contains('className')\`: Checks if the class exists, returns \`true\` or \`false\`.

\`\`\`css
/* style.css */
.highlight {
  background-color: yellow;
  border: 2px solid red;
}
\`\`\`
\`\`\`javascript
const element = document.getElementById("my-element");
element.classList.add("highlight");    // Adds the highlight styles
element.classList.remove("highlight"); // Removes them
element.classList.toggle("highlight"); // Toggles them on/off
\`\`\`

### Creating and Adding Elements
You can create new elements from scratch and add them to the DOM.

1.  **\`document.createElement(tagName)\`**: Creates a new element.
2.  **\`parentNode.appendChild(childNode)\`**: Adds the new element as the last child of a parent element.

\`\`\`html
<ul id="my-list"></ul>
\`\`\`
\`\`\`javascript
// 1. Select the parent
const list = document.getElementById("my-list");

// 2. Create the new element
const newLi = document.createElement("li");

// 3. Add content to it
newLi.textContent = "New item from JS";

// 4. Append it to the parent
list.appendChild(newLi);
\`\`\`
You can also use \`element.remove()\` to remove an element from the DOM.
`,
  keyTerms: [
    { term: "textContent", definition: "A property of a DOM node that represents the text content of the node and its descendants. It treats content as plain text." },
    { term: "innerHTML", definition: "A property that gets or sets the HTML syntax describing an element's descendants. It parses content as HTML." },
    { term: "Attribute", definition: "A value that provides additional information about an HTML element (e.g., `src`, `href`, `class`)." },
    { term: "classList", definition: "A property of an element that provides methods (`add`, `remove`, `toggle`, `contains`) to easily manipulate its CSS classes." },
    { term: "createElement()", definition: "A `document` method used to create a new HTML element node." },
    { term: "appendChild()", definition: "A method that adds a node to the end of the list of children of a specified parent node." }
  ],
  exercises: [
    {
      id: 1,
      title: "Change the Title",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML file with an `<h1>` with an `id`.",
        "Write a script to select the `<h1>`.",
        "Use `textContent` to change its text to something new."
      ]
    },
    {
      id: 2,
      title: "Dark Mode Toggle",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "In your CSS, create a `.dark-mode` class that sets a dark background and light text color on the `<body>`.",
        "Create a button in your HTML.",
        "Write a script that selects the `<body>` and the button.",
        "When the button is clicked, use `classList.toggle('dark-mode')` on the `<body>` element."
      ]
    },
    {
      id: 3,
      title: "Dynamic List Creation",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create an HTML file with an empty `<ul>`.",
        "Create an array of strings in your JavaScript, e.g., `['Apples', 'Oranges', 'Bananas']`.",
        "Loop through the array.",
        "For each item in the array, create a new `<li>` element, set its `textContent` to the array item, and `appendChild` it to the `<ul>`."
      ]
    },
    {
      id: 4,
      title: "Image Cycler",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create an HTML file with an `<img>` tag and a 'Next' button.",
        "In your JavaScript, create an array of image URLs (you can use placeholder services like picsum.photos).",
        "Keep track of the current image index.",
        "When the 'Next' button is clicked, increment the index and update the `src` attribute of the `<img>` tag to show the next image in the array. (Remember to loop back to the start if you reach the end!)."
      ]
    }
  ]
};
