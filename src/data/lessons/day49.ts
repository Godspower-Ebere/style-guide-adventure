
import { DayLesson } from "../types";

export const day49: DayLesson = {
  day: 49,
  title: "Advanced Flexbox: Ordering and Spacing",
  category: "CSS Grid & Flexbox",
  description: "Explore advanced Flexbox features like reordering elements visually and using the `gap` property for clean, consistent spacing.",
  learningObjectives: [
    "Reorder flex items visually using the `order` property without changing the HTML.",
    "Understand the critical accessibility implications of using the `order` property.",
    "Utilize the `gap` property to create consistent spacing between flex items.",
    "Combine various flexbox properties to create complex and responsive layouts."
  ],
  detailedExplanation: `
Beyond sizing and alignment, Flexbox offers powerful features for controlling the visual order of elements and the space between them.

### Visual Reordering with the \`order\` Property
The \`order\` property is applied to **flex items** and controls the order in which they appear in the flex container. All flex items have a default \`order\` value of \`0\`.

Items are rendered in ascending order of their \`order\` value. Items with the same \`order\` value are rendered in their source order.

\`\`\`html
<div class="container">
  <div class="item-a">First in HTML</div>
  <div class="item-b">Second in HTML</div>
  <div class="item-c">Third in HTML</div>
</div>
\`\`\`
\`\`\`css
.item-a { order: 2; } /* Will appear last */
.item-b { order: 3; } /* Will appear after item-a */
.item-c { order: 1; } /* Will appear first */
\`\`\`
You can also use negative values. For example, \`order: -1;\` will place an item before any items with the default \`order: 0;\`. This is extremely powerful for responsive design, where you might want a sidebar to appear after the main content on mobile but on the side on desktop.

**⚠️ CRITICAL ACCESSIBILITY WARNING**
The \`order\` property **only changes the visual rendering**. It does not change the logical order or the HTML source order. This means that:
- Screen readers will still read the content in the source order.
- A user navigating with a keyboard (using the Tab key) will tab through elements in their source order, not the visual order.

This can create a confusing and inaccessible experience if not used carefully. Only use \`order\` for purely visual changes that do not affect the logical flow of the content.

### Simplified Spacing with the \`gap\` Property
For years, adding space between flex items required using margins, which could be clumsy (e.g., needing to remove the margin from the last item). The \`gap\` property, applied to the **flex container**, solves this elegantly.

The \`gap\` property is a shorthand for \`row-gap\` and \`column-gap\`.

- \`gap: 20px;\`: Sets a 20px gap for both rows and columns.
- \`gap: 30px 10px;\`: Sets a 30px row gap and a 10px column gap.
- \`row-gap: 30px;\`: Sets only the gap between rows (for wrapped items).
- \`column-gap: 10px;\`: Sets only the gap between columns.

\`\`\`css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* Adds a 1rem space between all items, horizontally and vertically */
}
\`\`\`
This is much cleaner than applying margins to the flex items themselves, as the space is only applied *between* items, not on the outer edges of the container. Browser support is now excellent, making it the standard way to space flex items.
`,
  keyTerms: [
    { term: "order", definition: "A flex item property that controls the visual order in which items appear in the flex container." },
    { term: "gap", definition: "A flex container property that defines the size of the space between flex items' rows and columns." },
    { term: "row-gap", definition: "A flex container property that defines the space between rows of flex items." },
    { term: "column-gap", definition: "A flex container property that defines the space between columns of flex items." },
    { term: "Visual Order", definition: "The order in which elements are displayed on the screen." },
    { term: "Source Order", definition: "The order in which elements appear in the HTML document. This is the order used by screen readers and keyboard navigation." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Reordering",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a flex container with three items labeled '1', '2', and '3'.",
        "By default, they will appear in the order 1, 2, 3.",
        "Give the first item `order: 3;`.",
        "Give the second item `order: 1;`.",
        "Give the third item `order: 2;`.",
        "Observe how the visual order changes to 2, 3, 1."
      ]
    },
    {
      id: 2,
      title: "Using `gap` for a Grid",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a flex container with nine items inside.",
        "Set the container to `display: flex;` and `flex-wrap: wrap;`.",
        "Give each item a `flex-basis` of `30%` so they form a 3x3 grid.",
        "Instead of using margins for spacing, apply `gap: 1rem;` to the container.",
        "Notice how perfectly the spacing is applied between all items without any extra CSS."
      ]
    },
    {
      id: 3,
      title: "Responsive Content-Sidebar Swap",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create an HTML layout with a `<main>` content area and an `<aside>` sidebar, inside a container.",
        "In the HTML, place the `<main>` element first, then the `<aside>`.",
        "Apply `display: flex;` to the container.",
        "For the mobile-first view, you don't need to do anything. The content will correctly appear above the sidebar (`flex-direction: column;` or default block layout).",
        "Create a media query for wider screens (e.g., `min-width: 800px`).",
        "Inside the media query, change the container to `flex-direction: row;`.",
        "Now, give the `<main>` content `order: 2;` and the `<aside>` sidebar `order: 1;`.",
        "The sidebar will now appear to the left of the content on wide screens, even though it comes after it in the HTML. (Remember the accessibility warning!)."
      ]
    },
    {
      id: 4,
      title: "Article Layout",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create an article layout with a header, main content, and a footer.",
        "Make the parent container a flex container with `flex-direction: column;` and a `gap: 2rem;`.",
        "The header itself should be a flex container. Inside, place a title on the left and author info on the right. Use `justify-content: space-between;` for this.",
        "The footer should also be a flex container with some action buttons (Like, Share, Comment) spaced out using `gap`."
      ]
    }
  ]
};
