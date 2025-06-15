
import { DayLesson } from "../types";

export const day69: DayLesson = {
  day: 69,
  title: "Introduction to the DOM",
  category: "JavaScript Basics",
  description: "Learn what the Document Object Model (DOM) is and how to use JavaScript to select and interact with HTML elements on a page.",
  learningObjectives: [
    "Understand that the DOM is a tree-like representation of an HTML document.",
    "Select a single element using `getElementById`.",
    "Select a single element using `querySelector` with CSS selectors.",
    "Select multiple elements using `getElementsByClassName`, `getElementsByTagName`, and `querySelectorAll`."
  ],
  detailedExplanation: `
The **Document Object Model (DOM)** is the bridge between your HTML document and your JavaScript code. When a web browser loads an HTML document, it creates a model of the page in memory. This model is the DOM. It represents the document as a tree of "nodes" and "objects," where every HTML element is a node.

By using JavaScript to interact with the DOM, you can add, remove, and change any of the HTML elements and attributes on the page. This is how you make web pages dynamic and interactive.

### The Document Object
The entry point to the DOM is the global \`document\` object. This object has many methods that allow you to find and select elements.

### Selecting a Single Element

**1. \`document.getElementById(id)\`**
This is the fastest and most reliable way to find a single element, provided it has a unique ID.

\`\`\`html
<h1 id="main-title">Hello, DOM!</h1>
\`\`\`
\`\`\`javascript
// Select the h1 element
const titleElement = document.getElementById("main-title");

console.log(titleElement); // Logs the <h1> element object
\`\`\`

**2. \`document.querySelector(selector)\`**
This is a more modern and powerful method. It uses CSS selector syntax to find the **first** element that matches the selector.

\`\`\`html
<div class="content">
  <p>First paragraph.</p>
  <p class="special">Second paragraph.</p>
</div>
\`\`\`
\`\`\`javascript
// Select the first p tag inside the div with class "content"
const firstP = document.querySelector(".content p");

// Select the element with the class "special"
const specialP = document.querySelector(".special");
\`\`\`

### Selecting Multiple Elements
Sometimes you need to grab a collection of elements.

**1. \`document.querySelectorAll(selector)\`**
This is the modern way. It returns a **static NodeList** containing all elements that match the specified CSS selector. A NodeList is array-like, but not a true array (though you can loop over it with \`forEach\`).

\`\`\`html
<ul>
  <li class="item">One</li>
  <li class="item">Two</li>
  <li class="item">Three</li>
</ul>
\`\`\`
\`\`\`javascript
const listItems = document.querySelectorAll(".item");

console.log(listItems.length); // 3

listItems.forEach(function(item) {
  console.log(item); // Logs each <li> element
});
\`\`\`

**2. Older Methods (Live Collections)**
- \`getElementsByClassName(className)\`: Returns a live HTMLCollection of elements with a given class.
- \`getElementsByTagName(tagName)\`: Returns a live HTMLCollection of elements with a given tag name.

An **HTMLCollection** is "live," meaning if you add or remove elements from the DOM that match the selector, the collection automatically updates. This can be powerful but also lead to unexpected behavior. In modern development, \`querySelectorAll\` is usually preferred for its predictability.
`,
  keyTerms: [
    { term: "DOM (Document Object Model)", definition: "A programming interface for web documents. It represents the page so that programs can change the document structure, style, and content." },
    { term: "Node", definition: "Any single object in the DOM tree, such as an element, attribute, or text." },
    { term: "document object", definition: "The global object in the browser that serves as the entry point to the DOM." },
    { term: "getElementById()", definition: "A method of the `document` object that returns the element with a specified ID." },
    { term: "querySelector()", definition: "A method that returns the first element matching a specified CSS selector." },
    { term: "querySelectorAll()", definition: "A method that returns a static NodeList of all elements matching a specified CSS selector." },
    { term: "NodeList", definition: "An array-like collection of nodes, such as those returned by `querySelectorAll`." },
    { term: "HTMLCollection", definition: "A live, array-like collection of HTML elements, such as those returned by `getElementsByClassName`." }
  ],
  exercises: [
    {
      id: 1,
      title: "Select by ID",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML file with a `<p>` tag that has a unique `id` like `id='intro-text'`.",
        "Write a script that selects this element using `document.getElementById()`.",
        "Log the selected element to the console."
      ]
    },
    {
      id: 2,
      title: "Select with querySelector",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML file with a `<div>` that has a class of `container`.",
        "Inside the div, place an `<h2>`.",
        "Write a script that selects the `<h2>` using `document.querySelector('.container h2')`.",
        "Log the selected element to the console."
      ]
    },
    {
      id: 3,
      title: "Select All Buttons",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create an HTML file with three `<button>` elements. Give each button a class of `btn`.",
        "Write a script that selects all three buttons using `document.querySelectorAll('.btn')`.",
        "Use `forEach` to loop through the returned NodeList.",
        "Inside the loop, log each button to the console."
      ]
    },
    {
      id: 4,
      title: "Get All Links",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Create an HTML file with several `<a>` tags pointing to different websites.",
        "Write a script that selects all the links on the page using `document.getElementsByTagName('a')`.",
        "Log the resulting HTMLCollection to the console and note its properties."
      ]
    }
  ]
};
