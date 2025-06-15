
import { DayLesson } from "../types";

export const day52: DayLesson = {
  day: 52,
  title: "Grid vs. Flexbox: Which One Should You Use?",
  category: "CSS Grid & Flexbox",
  description: "Learn the key differences between CSS Grid and Flexbox and develop the intuition to know which tool is right for the job, and how to use them together.",
  learningObjectives: [
    "Understand the fundamental difference: one-dimensional (Flexbox) vs. two-dimensional (Grid) layout.",
    "Identify use cases where Flexbox is the ideal choice (component-level layout).",
    "Identify use cases where Grid is the superior solution (page-level layout).",
    "Learn how to combine Grid and Flexbox effectively in a single, complex layout."
  ],
  detailedExplanation: `
One of the most common questions in modern CSS is, "Should I use Grid or Flexbox?" The answer is rarely one or the other; it's most often **both**. Understanding their core differences is key to using them effectively.

### The Core Difference: 1D vs. 2D

*   **Flexbox is for one-dimensional layouts.**
    Think of Flexbox as a tool for arranging items in a single line, either a row or a column. You can wrap these lines, but you can't easily control the alignment between items on different lines. Its primary purpose is to distribute space along a single axis.

*   **Grid is for two-dimensional layouts.**
    Think of Grid as a tool for arranging items in a grid with both rows AND columns. It gives you simultaneous control over both the vertical and horizontal axes. It's designed for creating structured, overlapping, and aligned layouts.

### A Simple Analogy
- **Flexbox** is like arranging items on a **shelf**. You can line them up, space them out, and center them, but they are all on that one shelf.
- **Grid** is like arranging items in a **bookshelf with multiple shelves and dividers**. You can place an item in a specific cell (e.g., "third row, second column").

### When to Use Flexbox
Flexbox excels at **component-level layout**. It's the perfect tool for arranging the items *inside* a small part of your UI.

**Common Use Cases:**
-   **Navigation Bars:** Aligning a logo, nav links, and a search bar in a row.
-   **Buttons with Icons:** Vertically centering an icon and text inside a button.
-   **Card Components:** Aligning a card's header, content, and footer vertically.
-   **Form Elements:** Placing a label and an input side-by-side.
-   **Distributing a set of items** evenly along a single axis.

Basically, if you're thinking, "I need to line these things up," Flexbox is probably your answer.

### When to Use Grid
Grid excels at **page-level layout**. It's the perfect tool for defining the main structure of your entire page or a large, complex section.

**Common Use Cases:**
-   **The "Holy Grail" Layout:** Creating a header, footer, main content area, and sidebars.
-   **Image Galleries:** Arranging images in a strict grid.
-   **Dashboard Interfaces:** Creating complex widgets that align in both rows and columns.
-   **Magazine or Newspaper Layouts:** Where elements need to span multiple columns or rows and potentially overlap.

Basically, if you're thinking, "I need to create a specific structure for my page," Grid is your answer.

### The Best of Both Worlds: Using Them Together
The real power comes when you combine them. You use Grid for the macro layout and Flexbox for the micro layout.

\`\`\`html
<body class="grid-container">
  <header class="flex-container">
    <!-- Use Flexbox here to align logo and nav -->
  </header>
  <main>Main Content</main>
  <aside>Sidebar</aside>
  <footer class="flex-container">
    <!-- Use Flexbox here to space out footer links -->
  </footer>
</body>
\`\`\`
\`\`\`css
/* MACRO LAYOUT (Page Structure) */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "main   aside"
    "footer footer";
}

/* MICRO LAYOUT (Component) */
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`
In this example, Grid defines the overall page structure, while Flexbox is used inside the header and footer to arrange their internal items. This is the modern, standard approach to web layout.
`,
  keyTerms: [
    { term: "One-Dimensional (1D) Layout", definition: "Arranging items in a single direction, either as a row or a column. This is the domain of Flexbox." },
    { term: "Two-Dimensional (2D) Layout", definition: "Arranging items across both rows and columns simultaneously. This is the domain of Grid." },
    { term: "Page-Level Layout", definition: "The overall structure of a web page (header, footer, sidebars, etc.). Best handled by CSS Grid." },
    { term: "Component-Level Layout", definition: "The internal layout of a small, self-contained UI element (a card, a button, etc.). Best handled by Flexbox." },
    { term: "Content-First", definition: "A characteristic of Flexbox where the layout is primarily determined by the size and nature of the content items." },
    { term: "Layout-First", definition: "A characteristic of Grid where the layout structure is defined first, and content is then placed into that structure." }
  ],
  exercises: [
    {
      id: 1,
      title: "Component Card with Flexbox",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a `div` with a class of `card`.",
        "Inside the card, create a header, a content paragraph, and a footer.",
        "Use `display: flex` and `flex-direction: column` on the card to stack the items vertically.",
        "Give the content paragraph `flex-grow: 1;` to make it take up all available space, pushing the footer to the bottom.",
        "In the card's footer, add three buttons. Use `display: flex` on the footer to align the buttons in a row."
      ]
    },
    {
      id: 2,
      title: "Dashboard Layout with Grid",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a container for a dashboard.",
        "Inside, add a header, a sidebar, a main content area, and a footer.",
        "Use `display: grid` to create a two-column layout.",
        "The header and footer should span both columns (`grid-column: 1 / -1;`).",
        "The sidebar should take up the first column and the main content the second."
      ]
    },
    {
      id: 3,
      title: "Combining Grid and Flexbox",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a full page layout for an e-commerce site.",
        "Use **Grid** to define the main page structure: a header, a sidebar for filters, a main area for products, and a footer.",
        "The main product area should itself be a **Grid** to display product cards in a responsive grid (using `repeat(auto-fit, minmax(250px, 1fr))`).",
        "Each individual product card should use **Flexbox** for its internal layout (e.g., to stack the image, title, and price vertically and push the 'Add to Cart' button to the bottom)."
      ]
    },
    {
      id: 4,
      title: "Analysis: Deconstruct a Website",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Pick a favorite website (like Twitter, a news site, or a documentation site).",
        "Take a screenshot and use an image editor to draw boxes on it.",
        "For each box, decide if you would use Grid or Flexbox to build that part of the layout.",
        "Write a short explanation for your choices (e.g., 'I would use Grid for the main page because it's a 2D layout. I would use Flexbox for the navigation bar to align the links horizontally.')."
      ]
    }
  ]
};
