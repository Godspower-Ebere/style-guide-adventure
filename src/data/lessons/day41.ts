
import { DayLesson } from "../types";

export const day41: DayLesson = {
  day: 41,
  title: "Advanced CSS Grid: Mastering Modern Layouts",
  category: "CSS Grid & Flexbox",
  description: "Go beyond the basics of CSS Grid to create sophisticated, name-based, and auto-responsive layouts with ease.",
  learningObjectives: [
    "Name grid lines and areas for cleaner, more readable item placement.",
    "Utilize `grid-template-areas` for intuitive, visual layout definitions.",
    "Create powerfully responsive layouts with `auto-fit` and `minmax()`.",
    "Align the entire grid and individual items with advanced alignment properties.",
    "Control the placement of auto-generated items with `grid-auto-flow`."
  ],
  detailedExplanation: `
Once you've mastered the basics of CSS Grid, you can unlock its true potential with advanced features that make complex layouts simple and maintainable.

### 1. Visual Layouts with \`grid-template-areas\`
This is arguably the most intuitive way to define a grid layout. It allows you to create a visual representation of your layout directly in your CSS.

**Step 1: Name Grid Areas on Items**
Assign a name to each grid item you want to place.
\`\`\`css
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
\`\`\`

**Step 2: Define the Template on the Container**
Draw your layout using the names you defined. Each string represents a row, and each word in the string represents a column. Use a period (\`.\`) to signify an empty cell.

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
  grid-template-areas:
    "header  header"
    "sidebar content"
    "footer  footer";
}
\`\`\`
This code creates the classic "Holy Grail" layout with just a few lines of declarative CSS.

### 2. Responsive Grids without Media Queries: \`auto-fit\` and \`minmax()\`
You can create fully responsive column layouts that automatically adjust based on available space. This is perfect for photo galleries or card collections.

- **\`minmax(min, max)\`**: A function that defines a size range. The item can be as small as \`min\` but won't get larger than \`max\`.
- **\`auto-fit\`**: A keyword used with \`repeat()\`. It tells the browser to fit as many columns as possible into the available space. If there's extra space, it will stretch the existing columns to fill it.

\`\`\`css
.gallery {
  display: grid;
  /* 
    Create as many columns as will fit.
    Each column will be at least 250px wide.
    If there's extra space, the columns will grow equally to fill it (up to 1fr).
  */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`
This single line of code replaces multiple media queries.

### 3. Controlling Auto-Placement with \`grid-auto-flow\`
When you have grid items that don't have an explicit position, they are auto-placed. \`grid-auto-flow\` controls this behavior.
- **\`row\`** (default): Fills rows one by one.
- **\`column\`**: Fills columns one by one.
- **\`dense\`**: This is a powerful keyword. If a later item in the DOM is small enough to fit into a gap left by an earlier, larger item, the browser will move it up to fill that gap. This is excellent for creating tightly packed, "masonry-style" layouts.

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense; /* The magic keyword */
}

.item-that-spans-two-columns {
  grid-column: span 2;
}
\`\`\`
Without \`dense\`, if the spanning item created a gap, it would remain empty. With \`dense\`, smaller items from later in the DOM can backfill it.

### 4. Advanced Alignment
While \`align-items\` and \`justify-content\` align items within their cells, these properties align the entire grid within its container if the grid tracks are smaller than the container itself.
- **\`align-content\`**: Aligns the grid along the column (vertical) axis.
- **\`justify-content\`**: Aligns the grid along the row (horizontal) axis.
They accept values like \`start\`, \`end\`, \`center\`, \`space-between\`, etc., just like in Flexbox.
`,
  keyTerms: [
    { term: "grid-template-areas", definition: "A CSS property that specifies named grid areas, providing a visual way to structure a grid container." },
    { term: "grid-area", definition: "A shorthand property for `grid-row-start`, `grid-column-start`, `grid-row-end`, and `grid-column-end`, or a way to assign a name to an item for `grid-template-areas`." },
    { term: "minmax()", definition: "A CSS function used in CSS Grid that defines a size range greater than or equal to min and less than or equal to max." },
    { term: "auto-fit", definition: "A keyword used in `repeat()` that fits as many tracks as possible into a grid container by expanding them to fill available space." },
    { term: "auto-fill", definition: "Similar to `auto-fit`, but if tracks don't fill the space, it leaves the extra space empty instead of expanding the tracks." },
    { term: "grid-auto-flow: dense", definition: "An algorithm that attempts to fill in holes in the grid with smaller items that appear later in the document order." }
  ],
  exercises: [
    {
      id: 1,
      title: "Holy Grail Layout with `grid-template-areas`",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an HTML file with a container holding a `<header>`, `<nav>`, `<main>`, `<footer>`.",
        "In your CSS, assign a `grid-area` name to each element (e.g., `header`, `nav`, `main`, `footer`).",
        "On the container, apply `display: grid` and define `grid-template-columns` and `grid-template-rows`.",
        "Use `grid-template-areas` to create a layout where the header and footer span the full width, and the nav and main content sit side-by-side in the middle row.",
        "Add background colors to each area to visualize the layout."
      ]
    },
    {
      id: 2,
      title: "Responsive Gallery with `auto-fit`",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a container `<div>` with about 10 child `<div>`s, each representing a gallery item.",
        "Apply `display: grid` to the container.",
        "Use `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));` to create the responsive columns.",
        "Add a `gap` for spacing.",
        "Give the items a border and some content. Resize your browser window to see the gallery automatically adjust the number of columns."
      ]
    },
    {
      id: 3,
      title: "Packing with `dense`",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a 4-column grid container with several items.",
        "Target a few specific items (e.g., with `:nth-child`) and make them span 2 columns (`grid-column: span 2;`) or 2 rows (`grid-row: span 2;`).",
        "Observe the gaps that appear in the layout.",
        "Now, add `grid-auto-flow: dense;` to the grid container.",
        "Observe how smaller, single-cell items now move up to fill the gaps, creating a more compact layout."
      ]
    },
    {
      id: 4,
      title: "Dashboard Layout",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Design a 12-column grid for a dashboard layout.",
        "Create several 'widget' divs.",
        "Place a 'main-graph' widget that spans 8 columns (`grid-column: 1 / 9;`).",
        "Place a 'sidebar-stats' widget that spans the remaining 4 columns (`grid-column: 9 / 13;`).",
        "Add smaller 'info-card' widgets below, each spanning 4 columns, to create a row of three cards under the main graph.",
        "This exercise simulates a real-world dashboard and practices explicit item placement on a multi-column grid."
      ]
    }
  ]
};
