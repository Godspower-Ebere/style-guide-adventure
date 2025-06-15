
import { DayLesson } from "../types";

export const day47: DayLesson = {
  day: 47,
  title: "A Deep Dive into Flexbox",
  category: "CSS Grid & Flexbox",
  description: "Unlock the power of modern CSS layouts by learning Flexbox, a one-dimensional layout model for arranging items in rows or columns with ease.",
  learningObjectives: [
    "Understand the core concepts of a flex container and flex items.",
    "Master the `flex-direction` property to control the main layout axis.",
    "Use `flex-wrap` to allow items to wrap onto multiple lines, creating responsive layouts.",
    "Control the size and flexibility of items using `flex-grow`, `flex-shrink`, and `flex-basis`."
  ],
  detailedExplanation: `
The Flexible Box Layout Module, commonly known as Flexbox, was designed as a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic.

### The Two Key Components: Container and Items
The Flexbox model is based on a parent-child relationship:
- **The Flex Container**: This is the parent element on which you set \`display: flex;\`. This action initializes the flex context for its direct children.
- **The Flex Items**: These are the direct children of the flex container. They are the elements that you want to arrange.

\`\`\`html
<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
</div>
\`\`\`
\`\`\`css
.flex-container {
  display: flex;
}
\`\`\`

Once \`display: flex\` is applied, the direct children immediately become flex items and are arranged in a row by default.

### The Main Axis and Cross Axis
Flexbox works along two axes:
- **Main Axis**: This is the primary axis along which flex items are laid out. It is defined by the \`flex-direction\` property.
- **Cross Axis**: This axis is perpendicular to the main axis.

### Flex Container Properties

**1. \`flex-direction\`**
This property establishes the main-axis, thus defining the direction flex items are placed in the flex container.
- \`row\` (default): Items are laid out horizontally, from left to right.
- \`row-reverse\`: Items are laid out horizontally, from right to left.
- \`column\`: Items are laid out vertically, from top to bottom.
- \`column-reverse\`: Items are laid out vertically, from bottom to top.

**2. \`flex-wrap\`**
By default, flex items will try to fit onto one line. You can change that and allow the items to wrap as needed with this property.
- \`nowrap\` (default): All flex items will be on one line.
- \`wrap\`: Flex items will wrap onto multiple lines, from top to bottom.
- \`wrap-reverse\`: Flex items will wrap onto multiple lines from bottom to top.

**3. \`flex-flow\` (Shorthand)**
This is a shorthand for the \`flex-direction\` and \`flex-wrap\` properties.
\`\`\`css
.container {
  flex-flow: row wrap; /* Direction is row, wrapping is enabled */
}
\`\`\`

### Flex Item Properties

These properties are applied to the children (the flex items).

**1. \`flex-grow\`**
This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the remaining space in the flex container should be assigned to the item.
\`\`\`css
.item-1 { flex-grow: 1; }
.item-2 { flex-grow: 2; } /* Item 2 will take up twice as much available space as Item 1 */
\`\`\`

**2. \`flex-shrink\`**
This defines the ability for a flex item to shrink if necessary. It's the opposite of \`flex-grow\`.
\`\`\`css
.item { flex-shrink: 0; } /* This item will not shrink, even if the container is too small */
\`\`\`

**3. \`flex-basis\`**
This defines the default size of an element before the remaining space is distributed. It can be a length (e.g., 20%, 5rem, etc.) or the keyword \`auto\`.

**4. \`flex\` (Shorthand)**
This is the shorthand for \`flex-grow\`, \`flex-shrink\` and \`flex-basis\`. The default is \`0 1 auto\`. It's recommended that you use this shorthand property.
\`\`\`css
.item {
  flex: 1 0 200px; /* grow: 1, shrink: 0, basis: 200px */
}
\`\`\`
A common pattern is \`flex: 1;\` which is short for \`flex: 1 1 0%\`. This allows an item to grow and shrink from a zero basis, distributing space evenly among all items with this setting.
`,
  keyTerms: [
    { term: "Flex Container", definition: "The parent HTML element with `display: flex` applied, which contains the flex items." },
    { term: "Flex Item", definition: "A direct child of a flex container, which is arranged according to the flex layout model." },
    { term: "Main Axis", definition: "The primary axis of a flex container, determined by `flex-direction`, along which flex items are distributed." },
    { term: "Cross Axis", definition: "The axis perpendicular to the main axis." },
    { term: "flex-direction", definition: "CSS property that sets how flex items are placed in the flex container, defining the main axis." },
    { term: "flex-wrap", definition: "CSS property that controls whether flex items are forced onto one line or can wrap onto multiple lines." },
    { term: "flex-grow", definition: "A flex item property that dictates how much the item will grow relative to other items if there is extra space." },
    { term: "flex-shrink", definition: "A flex item property that dictates how much the item will shrink relative to other items if there is not enough space." },
    { term: "flex-basis", definition: "A flex item property that sets the initial main size of a flex item before free space is distributed." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Flex Container",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML file with a parent `<div>` and three child `<div>`s inside.",
        "Give the parent div a class of `container` and the children a class of `item`.",
        "Style the `container` with a border so you can see its boundaries.",
        "Style the `item`s with a background color, padding, and a minimum height.",
        "Apply `display: flex;` to the `container` and observe how the items align in a row."
      ]
    },
    {
      id: 2,
      title: "Navigation Bar Layout",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a `<nav>` element with an unordered list `<ul>` inside. The `<ul>` should contain several list items `<li>` with links `<a>`.",
        "Apply `display: flex;` to the `<ul>` element to arrange the list items horizontally.",
        "Remove the default list bullets using `list-style: none;`.",
        "Give one of the list items a class of `push-right`.",
        "Apply `margin-left: auto;` to the `push-right` class. This is a common trick to push one item all the way to the right end of the flex container."
      ]
    },
    {
      id: 3,
      title: "Flexible Box Sizing",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a container with three child items.",
        "Apply `display: flex;` to the container.",
        "Give the first item `flex: 1;` (shorthand for `flex: 1 1 0%`).",
        "Give the second item `flex: 2;` (shorthand for `flex: 2 1 0%`).",
        "Give the third item `flex: 1;`.",
        "Observe how the second item takes up twice as much space as the other two. Resize your browser to see how they adapt."
      ]
    },
    {
      id: 4,
      title: "Responsive Wrapping Cards",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a container `<div>` with six child `<div>`s styled as cards (give them a width, height, border, etc.).",
        "Apply `display: flex;` to the container.",
        "To make them wrap, apply `flex-wrap: wrap;` to the container.",
        "Give each card a `flex-basis` of around `250px`. This will be their ideal width.",
        "To ensure they grow to fill space but don't get too small, give each card `flex-grow: 1;`.",
        "Add a `gap` to the container (e.g., `gap: 1rem;`) for spacing. Resize your browser to see the cards wrap into a responsive grid."
      ]
    }
  ]
};
