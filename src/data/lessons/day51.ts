
import { DayLesson } from "../types";

export const day51: DayLesson = {
  day: 51,
  title: "Advanced CSS Grid: Naming, Templating, and Auto-Placement",
  category: "CSS Grid & Flexbox",
  description: "Unlock the full potential of CSS Grid with named lines, grid template areas, and auto-placement superpowers for creating complex, maintainable layouts.",
  learningObjectives: [
    "Name grid lines for more readable and maintainable layouts.",
    "Define entire grid layouts visually using the `grid-template-areas` property.",
    "Understand and control the auto-placement algorithm with `grid-auto-flow`.",
    "Use `minmax()` and `auto-fit`/`auto-fill` to create powerful, intrinsically responsive grids."
  ],
  detailedExplanation: `
Beyond basic row and column definitions, CSS Grid offers advanced features that make building complex layouts more intuitive and powerful.

### Visual Layouts with \`grid-template-areas\`
This property is one of Grid's most powerful features. It allows you to define the entire structure of your grid in a visual, ASCII-art-like format.

1.  **Name your areas:** First, assign names to your grid items using the \`grid-area\` property.
2.  **Define the template:** On the grid container, use \`grid-template-areas\` to draw your layout. Use a dot (\`.\`) for an empty cell.

\`\`\`html
<div class="container">
  <header class="h">Header</header>
  <nav class="n">Nav</nav>
  <main class="m">Main</main>
  <footer class="f">Footer</footer>
</div>
\`\`\`
\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "h h"
    "n m"
    "f f";
}
.h { grid-area: h; }
.n { grid-area: n; }
.m { grid-area: m; }
.f { grid-area: f; }
\`\`\`
This makes your CSS incredibly easy to read and modify, especially for responsive designs where you can redefine the template inside a media query.

### Readable Layouts with Named Grid Lines
Instead of relying on numbers, you can name your grid lines for easier placement. You define names in square brackets when setting up your columns and rows.

\`\`\`css
.container {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 200px [main-end];
  grid-template-rows: [header-start] 100px [header-end content-start] 1fr [content-end];
}
.item {
  /* Place the item using the names instead of numbers */
  grid-column-start: main-start;
  grid-column-end: content-start;
}
\`\`\`

### Controlling Auto-Placement with \`grid-auto-flow\`
When you have more grid items than cells you've defined, Grid's auto-placement algorithm kicks in. The \`grid-auto-flow\` property controls this.
- \`row\` (default): Fills each row, adding new rows as needed.
- \`column\`: Fills each column, adding new columns as needed.
- \`dense\`: This is the magic keyword. If a smaller item appears later, Grid will backtrack and place it into an earlier empty slot if it fits. This is great for creating tightly-packed "masonry" style layouts without leaving gaps.

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  grid-auto-flow: row dense; /* The "dense" keyword is key here */
}
.item-large {
  grid-column: span 2;
  grid-row: span 2;
}
\`\`\`

### Intrinsically Responsive Grids with \`minmax()\` and \`auto-fit\`/\`auto-fill\`
This is the ultimate technique for creating responsive component grids (like a card gallery) without media queries.
- \`minmax(min, max)\`: Defines a size range. The track can flex between these values.
- \`auto-fill\`: Fills the row with as many columns as will fit. It will create empty tracks if there aren't enough items.
- \`auto-fit\`: Behaves like \`auto-fill\`, but collapses empty tracks down to 0, allowing the filled tracks to grow and take up the available space.

\`\`\`css
.gallery {
  display: grid;
  /* 
    Create as many columns as will fit.
    Each column will be a minimum of 250px wide.
    They will share the remaining space equally.
  */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`
This single line of CSS creates a fully responsive grid that reflows automatically based on the container's width.
`,
  keyTerms: [
    { term: "grid-template-areas", definition: "A property that defines a grid template by referencing the names of the grid areas, allowing for a visual representation of the layout." },
    { term: "grid-area", definition: "A property that assigns a grid item to a named area." },
    { term: "Named Grid Lines", definition: "Custom names assigned to grid lines, making item placement more descriptive and maintainable than using numbers." },
    { term: "grid-auto-flow", definition: "A property that controls how auto-placed grid items are inserted. The `dense` value allows for filling in gaps." },
    { term: "minmax()", definition: "A CSS function that defines a size range, with a minimum and maximum value, for a grid track." },
    { term: "auto-fit / auto-fill", definition: "Keywords used with the `repeat()` function to create a responsive number of tracks in a grid container." }
  ],
  exercises: [
    {
      id: 1,
      title: "Holy Grail Layout with Template Areas",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an HTML structure with a header, nav, main, aside, and footer.",
        "On a container, set up a grid and use `grid-template-areas` to create a classic 'Holy Grail' layout.",
        "The header and footer should span the full width.",
        "The nav, main content, and aside should be in a row in the middle.",
        "Write a media query to stack all areas into a single column on small screens by redefining `grid-template-areas`."
      ]
    },
    {
      id: 2,
      title: "Responsive Gallery with `auto-fit`",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a container with 10-12 child divs representing gallery items.",
        "Apply `display: grid;` and a `gap` to the container.",
        "Use `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));` on the container.",
        "Resize your browser and watch the items reflow into different column counts without any media queries."
      ]
    },
    {
      id: 3,
      title: "Gap-filling with `dense`",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a grid container with many items (e.g., 15-20).",
        "Set up a grid with `grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));` and `grid-auto-rows: 50px;`.",
        "Use `:nth-child()` selectors to make some items larger (e.g., `grid-column: span 2;`, `grid-row: span 2;`).",
        "Observe the gaps that are left.",
        "Now add `grid-auto-flow: row dense;` to the container and see how Grid backfills the gaps with smaller items."
      ]
    },
    {
      id: 4,
      title: "Magazine Layout with Named Lines",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a grid container with several items (headline, main image, body text, pull-quote).",
        "Define a 4-column grid and name the lines (e.g., `[col1-start]`, `[col2-start]`, etc.).",
        "Place your items onto the grid using your custom line names instead of numbers.",
        "For example, place the body text from `col1-start` to `col3-end` and the pull-quote from `col4-start` to `col4-end`."
      ]
    }
  ]
};
