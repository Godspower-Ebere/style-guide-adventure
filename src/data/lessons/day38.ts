
import { DayLesson } from "../types";

export const day38: DayLesson = {
  day: 38,
  title: "Introduction to Flexbox: The One-Dimensional Layout",
  category: "CSS Grid & Flexbox",
  description: "A deep dive into the foundational concepts of Flexbox for creating powerful, flexible, one-dimensional layouts.",
  learningObjectives: [
    "Define a flex container and understand its role.",
    "Control the primary layout direction with `flex-direction`.",
    "Master main-axis alignment using `justify-content`.",
    "Master cross-axis alignment using `align-items`.",
    "Distinguish clearly between the main axis and the cross axis."
  ],
  detailedExplanation: `
Flexbox, short for the Flexible Box Layout Module, is a CSS layout model designed for one-dimensional layouts—either a row or a column. It provides an efficient way to distribute space among items in a container, even when their size is unknown or dynamic.

### Core Concepts: The Two Axes

The power of Flexbox comes from its two axes:
- **Main Axis**: The primary axis along which flex items are laid out. Its direction is controlled by the \`flex-direction\` property.
- **Cross Axis**: The axis perpendicular to the main axis.

Understanding which axis is which is crucial. If \`flex-direction: row;\`, the main axis is horizontal, and the cross axis is vertical. If \`flex-direction: column;\`, the main axis is vertical, and the cross axis is horizontal.

### The Parent (Flex Container) Properties

To start using Flexbox, you apply \`display: flex\` to a container element. This enables a flex context for all its direct children.

\`\`\`css
.container {
  display: flex;
}
\`\`\`

Here are the essential container properties:

**1. \`flex-direction\`**
This property establishes the main axis, thus defining the direction flex items are placed.
- \`row\` (default): Left to right.
- \`row-reverse\`: Right to left.
- \`column\`: Top to bottom.
- \`column-reverse\`: Bottom to top.

**2. \`justify-content\`**
This aligns flex items along the **main axis**. It helps distribute extra free space.
- \`flex-start\` (default): Items are packed toward the start line.
- \`flex-end\`: Items are packed toward the end line.
- \`center\`: Items are centered along the line.
- \`space-between\`: Items are evenly distributed; the first item is on the start line, the last on the end line.
- \`space-around\`: Items are evenly distributed with equal space around them.
- \`space-evenly\`: Items are distributed so that the spacing between any two items is equal.

**3. \`align-items\`**
This aligns flex items along the **cross axis**.
- \`stretch\` (default): Items stretch to fill the container (still respecting min/max-width).
- \`flex-start\`: Items are placed at the start of the cross axis.
- \`flex-end\`: Items are placed at theend of the cross axis.
- \`center\`: Items are centered in the cross-axis.
- \`baseline\`: Items are aligned such as their baselines align.

**Example: Perfect Centering**
To perfectly center a child element inside a parent, you can make the parent a flex container and use both \`justify-content\` and \`align-items\`.

\`\`\`css
.parent {
  display: flex;
  justify-content: center; /* Center on main axis (horizontal) */
  align-items: center;    /* Center on cross axis (vertical) */
  height: 300px;
  border: 1px solid black;
}
\`\`\`
`,
  keyTerms: [
    { term: "Flex Container", definition: "The parent element on which `display: flex` is applied." },
    { term: "Flex Item", definition: "A direct child of a flex container." },
    { term: "Main Axis", definition: "The primary axis of a flex container, determined by `flex-direction`. Items are laid out along this axis." },
    { term: "Cross Axis", definition: "The axis perpendicular to the main axis. `align-items` works along this axis." },
    { term: "justify-content", definition: "A CSS property that defines how the browser distributes space between and around content items along the main-axis of a flex container." },
    { term: "align-items", definition: "A CSS property that defines the default behavior for how flex items are laid out along the cross axis on the current line." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Horizontal Navigation",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML file with a `<nav>` element containing a `<ul>`.",
        "Inside the `<ul>`, add five `<li>` elements, each with an `<a>` tag for navigation links (e.g., Home, About, Services).",
        "In your CSS, remove the default list styling (e.g., `list-style: none; padding: 0;`).",
        "Apply `display: flex;` to the `<ul>` element.",
        "Add `justify-content: space-around;` to the `<ul>` to space the links out evenly.",
        "Add a background color and padding to the `<nav>` to make it look like a typical nav bar."
      ]
    },
    {
      id: 2,
      title: "Perfectly Centered Login Box",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a parent `<div>` with the class `container` and give it a specific height (e.g., `height: 100vh;` to fill the viewport).",
        "Inside, create a child `<div>` with the class `login-box` and give it a fixed width and height (e.g., 300px by 200px) and a border.",
        "Apply `display: flex;` to the `.container`.",
        "Use `justify-content: center;` to align the box horizontally.",
        "Use `align-items: center;` to align the box vertically. The login box should now be perfectly centered on the page."
      ]
    },
    {
      id: 3,
      title: "Header Layout",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a `<header>` element.",
        "Inside, add a `<div>` for a logo and a `<nav>` for navigation links.",
        "Apply `display: flex;` to the `<header>` element.",
        "Use `justify-content: space-between;` to push the logo to the far left and the navigation to the far right.",
        "Use `align-items: center;` to vertically align the logo and navigation links in the middle of the header.",
        "Add padding to the header for spacing."
      ]
    },
    {
      id: 4,
      title: "Column-based Card",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a `<div>` with a class `card` and a fixed height and width.",
        "Inside the card, add an `<img>`, an `<h2>` for a title, a `<p>` for a description, and a `<button>`.",
        "Apply `display: flex;` and `flex-direction: column;` to the `.card`.",
        "Use `justify-content: space-between;` to push the content to the top and the button to the bottom.",
        "This will not work as expected. The image, title, and paragraph will be grouped at the top. To fix this, wrap the image, title, and paragraph in their own div. This demonstrates how nesting flexbox can solve complex layouts."
      ]
    }
  ]
};
