
import { DayLesson } from "../types";

export const day40: DayLesson = {
  day: 40,
  title: "Introduction to CSS Grid: The Two-Dimensional Layout",
  category: "CSS Grid & Flexbox",
  description: "Discover the power of CSS Grid for creating complex, two-dimensional layouts with rows and columns simultaneously.",
  learningObjectives: [
    "Establish a grid container with `display: grid`.",
    "Define columns and rows using `grid-template-columns` and `grid-template-rows`.",
    "Utilize the `fr` unit for flexible, proportional grid tracks.",
    "Control spacing between grid cells with the `gap` property.",
    "Place items onto the grid using line-based placement with `grid-column` and `grid-row`."
  ],
  detailedExplanation: `
While Flexbox excels at one-dimensional layouts, CSS Grid was designed specifically for two-dimensional layouts—controlling rows and columns at the same time. This makes it incredibly powerful for overall page layouts.

### Grid vs. Flexbox: When to Use Which?
- **Flexbox (1D)**: Best for distributing items along a single axis. Think navigation bars, lists of cards, or aligning items within a component.
- **Grid (2D)**: Best for the overall layout of a page or a significant component that requires alignment in both rows and columns. Think a full page layout with a header, sidebar, and content, or a complex photo gallery. They also work great together!

### The Grid Container

To begin, you apply \`display: grid\` to a container. This does not visually change anything on its own. You must define a grid structure.

\`\`\`css
.container {
  display: grid;
}
\`\`\`

### Defining the Grid Structure

**1. \`grid-template-columns\` and \`grid-template-rows\`**
These properties define the tracks (columns and rows) of your grid.
- \`grid-template-columns\`: Defines the number and width of columns.
- \`grid-template-rows\`: Defines the number and height of rows.

You can use standard units like \`px\`, \`%\`, or \`em\`.

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px; /* Three 200px columns */
  grid-template-rows: 100px 100px; /* Two 100px rows */
}
\`\`\`

**2. The \`fr\` Unit**
The fractional unit (\`fr\`) is a new length unit designed for Grid. It represents a fraction of the available space in the grid container. This makes creating flexible grids incredibly easy.

\`\`\`css
.container {
  display: grid;
  /* A sidebar, a main content area that takes remaining space, and another sidebar */
  grid-template-columns: 150px 1fr 150px;
}
\`\`\`

**3. The \`repeat()\` function**
For grids with many identical tracks, the \`repeat()\` notation simplifies the code.

\`\`\`css
.container {
  display: grid;
  /* Creates 12 columns, each taking 1 fraction of the space */
  grid-template-columns: repeat(12, 1fr);
}
\`\`\`

**4. \`gap\`**
The \`gap\` property (and its longhand versions \`row-gap\` and \`column-gap\`) defines the size of the gutters between grid tracks.

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; /* 20px gap between all rows and columns */
}
\`\`\`

### Placing Items on the Grid

Grid items are automatically placed into the cells you've defined. However, you can explicitly place them using grid lines. A grid with 3 columns has 4 vertical grid lines.

**1. Line-based Placement**
- \`grid-column-start\`, \`grid-column-end\`, \`grid-row-start\`, \`grid-row-end\`
These properties define where an item starts and ends on the grid.

**2. Shorthands: \`grid-column\` and \`grid-row\`**
These are shorthands for the start/end properties.
\`\`\`css
.item-a {
  /* Start on column line 1, end on column line 3 */
  grid-column: 1 / 3;

  /* Start on row line 1, end on row line 2 */
  grid-row: 1 / 2;
}
\`\`\`

You can also use the \`span\` keyword to define how many tracks an item should occupy.
\`\`\`css
.item-b {
  /* Start on column line 2 and span 2 columns */
  grid-column: 2 / span 2;
  grid-row: 2 / span 1;
}
\`\`\`
`,
  keyTerms: [
    { term: "Grid Container", definition: "The element on which `display: grid` is applied." },
    { term: "Grid Item", definition: "A direct child of a grid container." },
    { term: "Grid Track", definition: "The space between two adjacent grid lines. These are your columns or rows." },
    { term: "Grid Cell", definition: "The space between two adjacent row and two adjacent column grid lines. It's a single 'unit' of the grid." },
    { term: "Grid Line", definition: "The dividing lines that make up the structure of the grid. They can be horizontal or vertical." },
    { term: "fr Unit", definition: "A fractional unit that represents a fraction of the available space in the grid container." },
    { term: "gap", definition: "A CSS property that defines the size of the space between grid tracks." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple 3x2 Grid",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a container `<div>` and six child `<div>`s inside it.",
        "Apply `display: grid;` to the container.",
        "Use `grid-template-columns: repeat(3, 1fr);` to create three equal-width columns.",
        "Use `grid-template-rows: repeat(2, 100px);` to create two rows, each 100px tall.",
        "Add `gap: 1rem;` to create space between the items.",
        "Give each child `<div>` a different background color and some text to see the result."
      ]
    },
    {
      id: 2,
      title: "Featured Gallery Item",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a 3x3 grid container with 9 items, similar to the first exercise.",
        "Target the first item in your CSS.",
        "Use `grid-column: 1 / 3;` to make it span the first two columns.",
        "Use `grid-row: 1 / 3;` to make it also span the first two rows.",
        "Observe how the other grid items automatically flow into the remaining available cells."
      ]
    },
    {
      id: 3,
      title: "The Holy Grail Layout",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create an HTML structure with a container holding a `<header>`, `<nav>`, `<main>`, `<aside>`, and `<footer>`.",
        "Apply `display: grid;` to the container.",
        "Define your columns: `grid-template-columns: 150px 1fr 150px;` for a nav, main content, and sidebar.",
        "Define your rows: `grid-template-rows: auto 1fr auto;` for a header, a flexible content area, and a footer.",
        "Place the header: `grid-column: 1 / 4;` so it spans all three columns.",
        "Place the footer similarly: `grid-column: 1 / 4;`.",
        "The nav, main, and aside should fall into place automatically on the middle row. You can explicitly place them if you wish."
      ]
    },
    {
      id: 4,
      title: "Responsive Product Grid",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a grid container with 12 product card `<div>`s.",
        "Use a media query for large screens (e.g., `min-width: 1024px`) to set `grid-template-columns: repeat(4, 1fr);`.",
        "Use a media query for medium screens (e.g., `min-width: 768px`) to set `grid-template-columns: repeat(2, 1fr);`.",
        "For small screens (the default), set `grid-template-columns: 1fr;`.",
        "Resize your browser to see the product grid adapt from 4 columns to 2, and then to 1."
      ]
    }
  ]
};
