
import { DayLesson } from "../types";

export const day35: DayLesson = {
  day: 35,
  title: "The CSS Display Property",
  category: "CSS Layouts",
  description: "Master the `display` property, the cornerstone of CSS layout, controlling how elements are rendered and interact with each other.",
  learningObjectives: [
    "Distinguish between block-level and inline-level elements.",
    "Utilize `display: block`, `inline`, and `inline-block` to control element layout.",
    "Understand the box-model effects of each display type.",
    "Use `display: none` to effectively hide elements from both the user and the document flow."
  ],
  detailedExplanation: `
The \`display\` property is one of the most important in CSS, as it defines how an element should be treated in the document's layout flow. Every element has a default display value, but you can override it to change its behavior.

## Core Display Values

### \`display: block\`
Block-level elements are the structural building blocks of a webpage.
- **Behavior**: They start on a new line and take up the full width available to them, pushing other elements to a new line below them.
- **Box Model**: You can explicitly set their \`width\`, \`height\`, \`margin\`, and \`padding\`.
- **Common Elements**: \`<div>\`, \`<p>\`, \`<h1>\`-\`<h6>\`, \`<ul>\`, \`<li>\`, \`<form>\`.

\`\`\`html
<div style="background: lightblue; display: block;">I am a block element.</div>
<div style="background: lightcoral; display: block;">So am I.</div>
\`\`\`

### \`display: inline\`
Inline elements flow with the text content of a page.
- **Behavior**: They do not start on a new line and only take up as much width as their content requires. Multiple inline elements will sit next to each other on the same line.
- **Box Model**: \`width\` and \`height\` properties have no effect. Vertical margins (\`margin-top\`, \`margin-bottom\`) are also ignored, though horizontal margins and all padding properties work.
- **Common Elements**: \`<span>\`, \`<a>\`, \`<strong>\`, \`<em>\`, \`<img>\`.

\`\`\`html
<span style="background: lightgreen; display: inline;">I am an inline element.</span>
<span style="background: gold; display: inline;">I sit on the same line.</span>
\`\`\`

### \`display: inline-block\`
This value provides a powerful hybrid of block and inline behaviors.
- **Behavior**: Like an inline element, it flows with surrounding content and does not start on a new line.
- **Box Model**: Like a block element, you can set its \`width\`, \`height\`, and apply all margin and padding properties.
- **Use Case**: Perfect for creating UI elements like buttons, navigation links, or gallery items that need to sit side-by-side but also require specific dimensions and spacing.

\`\`\`html
<div style="display: inline-block; width: 100px; height: 100px; background: mediumpurple;">Box 1</div>
<div style="display: inline-block; width: 100px; height: 100px; background: orange;">Box 2</div>
\`\`\`

### \`display: none\`
This property completely removes an element from the page.
- **Behavior**: The element is not rendered, and it takes up no space in the document layout. It's as if it doesn't exist in the HTML.
- **Difference from \`visibility: hidden\`**: An element with \`visibility: hidden\` is invisible, but it still occupies its space in the layout. \`display: none\` removes it entirely.
- **Use Case**: Commonly used in JavaScript to show and hide elements dynamically, such as modals, dropdown menus, or alerts.

\`\`\`html
<div>Visible</div>
<div style="display: none;">I am completely gone!</div>
<div>Visible Again</div>
\`\`\`

Understanding these four values is crucial for controlling basic document flow. While modern layouts heavily rely on Flexbox (\`display: flex\`) and Grid (\`display: grid\`), they all build upon these fundamental display concepts.
`,
  keyTerms: [
    { term: "display", definition: "A CSS property that specifies the type of rendering box used for an element." },
    { term: "block-level element", definition: "An element that starts on a new line and takes up the full width available." },
    { term: "inline-level element", definition: "An element that flows within text and does not start on a new line." },
    { term: "inline-block", definition: "An element that flows like an inline element but can have its width, height, and vertical margins set like a block element." },
    { term: "document flow", definition: "The default arrangement of elements on a webpage, where block elements stack vertically and inline elements flow horizontally." }
  ],
  exercises: [
    {
      id: 1,
      title: "Display Properties in Action",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML file with two \`<span>\` elements and two \`<div>\` elements.",
        "Give each element a different background color so you can see its boundaries.",
        "Observe their default `display` behavior in the browser.",
        "Use CSS to change the first \`<span>\` to \`display: block\`.",
        "Change the first \`<div>\` to \`display: inline\`. Observe how they now behave."
      ]
    },
    {
      id: 2,
      title: "Building a Navigation Bar",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an HTML \`<nav>\` element containing an unordered list \`<ul>\` of navigation links \`<a>\`.",
        "By default, the \`<li>\` elements are block-level. Use CSS to target the list items.",
        "Change the list items' display to \`inline-block\`.",
        "Add padding (e.g., \`15px\`) and a horizontal margin (e.g., \`margin-right: 10px\`) to each list item.",
        "Notice how you can now control their spacing and size, which wouldn't be possible with \`display: inline\`."
      ]
    },
    {
      id: 3,
      title: "Toggle Visibility with JavaScript",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create an HTML file with a \`<button>\` and a \`<div>\` with the id 'alert-box'.",
        "Style the 'alert-box' with a border and some text content. Initially, set its style to \`display: none;\` in your CSS.",
        "Write a small JavaScript snippet.",
        "Add an event listener to the button.",
        "When the button is clicked, write a function that toggles the 'alert-box' display property between \`none\` and \`block\`."
      ]
    },
    {
      id: 4,
      title: "Simple Product Grid",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a container \`<div>\`.",
        "Inside, create several 'product card' \`<div>\`s.",
        "Set the display of each product card to \`inline-block\`.",
        "Give each card a fixed width (e.g., \`200px\`), a border, and some padding.",
        "Add an image and a product name inside each card. The cards should line up horizontally and wrap to the next line if there isn't enough space."
      ]
    },
    {
      id: 5,
      title: "Comparing `display: none` and `visibility: hidden`",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create an HTML file with three \`<div>\`s in a row, each with a different background color and a fixed height/width.",
        "In your CSS, target the middle \`<div>\` and set its \`display\` to \`none\`.",
        "Observe how the third div moves up to take the space of the second div.",
        "Now, comment out \`display: none;\` and instead apply \`visibility: hidden;\` to the middle div.",
        "Observe how the middle div disappears, but the layout remains the same, leaving an empty space. Document this difference with comments in your CSS."
      ]
    }
  ]
};
