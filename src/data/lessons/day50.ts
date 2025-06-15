
import { DayLesson } from "../types";

export const day50: DayLesson = {
  day: 50,
  title: "Introduction to CSS Grid Layout",
  category: "CSS Grid & Flexbox",
  description: "Begin your journey with CSS Grid, the powerful two-dimensional layout system designed for creating complex, responsive user interfaces with unprecedented control.",
  learningObjectives: [
    "Understand the fundamental difference between the one-dimensional Flexbox and two-dimensional Grid.",
    "Define a grid container using `display: grid`.",
    "Create rows and columns for your layout using `grid-template-columns` and `grid-template-rows`.",
    "Master the flexible `fr` unit to create proportional grid tracks.",
    "Use the `gap` property to create consistent gutters between grid cells."
  ],
  detailedExplanation: `
While Flexbox is excellent for arranging items in a single dimension (a row or a column), CSS Grid excels at two-dimensional layouts—controlling both rows and columns simultaneously. It's the most powerful layout system available in CSS.

### Flexbox vs. Grid: When to Use Which?
- **Flexbox (1D)**: Best for distributing items along a single axis. Perfect for component-level layouts like navigation bars, form elements, or groups of buttons. Think "content-first".
- **Grid (2D)**: Best for overall page layout, arranging items into a fixed grid structure with rows and columns. Think "layout-first".

The two are not mutually exclusive; in fact, they work brilliantly together. A common pattern is to use Grid for the main page structure (header, sidebar, content, footer) and Flexbox to arrange the content *inside* each of those sections.

### Creating a Grid Container
Just like Flexbox, it all starts with a parent container.
\`\`\`css
.grid-container {
  display: grid;
}
\`\`\`
This one line creates a grid context for all direct children, which become **grid items**. By itself, it won't do much. We need to define the structure of our grid.

### Defining Grid Tracks: Columns and Rows
The core of Grid is defining the tracks (the columns and rows).

**\`grid-template-columns\`**: Defines the number and size of the columns.
**\`grid-template-rows\`**: Defines the number and size of the rows.

You can use standard units like \`px\`, \`%\`, \`rem\`, or \`auto\`.

\`\`\`css
.grid-container {
  display: grid;
  /* Creates three columns: 100px wide, 200px wide, and 100px wide */
  grid-template-columns: 100px 200px 100px;
  /* Creates two rows, each 150px tall */
  grid-template-rows: 150px 150px;
}
\`\`\`

### The Magical \`fr\` Unit
The fractional unit (\`fr\`) is unique to CSS Grid. It represents a fraction of the available space in the grid container. This makes creating flexible, proportional columns incredibly easy.

\`\`\`css
.grid-container {
  display: grid;
  /* Column 2 will be twice as wide as columns 1 and 3 */
  grid-template-columns: 1fr 2fr 1fr;
}
\`\`\`
The browser calculates the total available space, subtracts any non-flexible track sizes, and then divides the remainder among the fractional-unit tracks according to their proportions.

### Simplifying with the \`repeat()\` Function
If you have many tracks of the same size, the \`repeat()\` function is a fantastic shorthand.

\`\`\`css
/* Instead of this: */
grid-template-columns: 1fr 1fr 1fr 1fr;

/* You can write this: */
grid-template-columns: repeat(4, 1fr);
\`\`\`

### Spacing with \`gap\`
The \`gap\` property works exactly like it does in Flexbox, creating space (gutters) between grid tracks. It's applied to the **grid container**.

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px; /* Creates a 16px gap between all columns and rows */
  column-gap: 20px; /* Or specify individually */
  row-gap: 10px;
}
\`\`\`
This is the modern, clean way to create gutters in your grid layouts.
`,
  keyTerms: [
    { term: "CSS Grid", definition: "A two-dimensional layout system for CSS, designed to create complex grid-based user interfaces." },
    { term: "Grid Container", definition: "The parent HTML element with `display: grid` applied, which contains the grid items." },
    { term: "Grid Item", definition: "A direct child of a grid container." },
    { term: "Grid Track", definition: "The space between any two grid lines. You can think of them as the columns or rows of the grid." },
    { term: "Grid Cell", definition: "The space between two adjacent row and two adjacent column grid lines. It's the single 'unit' of a grid." },
    { term: "fr Unit", definition: "A fractional unit that represents a fraction of the available space in the grid container." },
    { term: "grid-template-columns", definition: "A CSS property that defines the line names and track sizing functions of the grid columns." },
    { term: "grid-template-rows", definition: "A CSS property that defines the line names and track sizing functions of the grid rows." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple 3x3 Grid",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a container `<div>` with nine child `<div>`s.",
        "Apply `display: grid;` to the container.",
        "Use `grid-template-columns` to create three equal-width columns. Try using `repeat(3, 1fr);`.",
        "Use `grid-template-rows` to create three rows, each `100px` tall.",
        "Add a `gap` of `1rem` to the container for spacing.",
        "Style the child divs so you can see the resulting grid."
      ]
    },
    {
      id: 2,
      title: "Asymmetrical Layout",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a grid container with a few items.",
        "Define the columns using a mix of units: `grid-template-columns: 200px 1fr 2fr;`.",
        "This creates a layout with a fixed-width sidebar (200px), a main content area, and a secondary content area that is twice as wide as the main one.",
        "Define two rows of different heights: `grid-template-rows: auto 1fr;`."
      ]
    },
    {
      id: 3,
      title: "Basic Page Layout",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create an HTML structure for a page: `<header>`, `<main>`, `<aside>` (sidebar), and `<footer>` inside a wrapper `<div>`.",
        "Apply `display: grid;` to the wrapper.",
        "Define two columns: a sidebar of `250px` and main content that takes the rest (`1fr`). So: `grid-template-columns: 250px 1fr;`.",
        "Define three rows for the header, main content area, and footer: `grid-template-rows: auto 1fr auto;` ('auto' makes the row as tall as its content).",
        "This initial setup will put elements into the grid cells in order. We will learn how to place them precisely in the next lesson!"
      ]
    },
    {
      id: 4,
      title: "Responsive Photo Gallery",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a grid container for a photo gallery.",
        "Use `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`.",
        "Let's break that down: `repeat()` will create as many columns as can fit (`auto-fit`).",
        "`minmax(250px, 1fr)` tells each column that it must be at least `250px` wide, but can grow to fill the available space (`1fr`).",
        "Add a `gap` for spacing.",
        "Resize your browser. You'll see the grid automatically adjusts the number of columns to fit the viewport, creating a fully responsive gallery with one line of CSS."
      ]
    }
  ]
};
