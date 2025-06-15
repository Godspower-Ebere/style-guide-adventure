
import { DayLesson } from "../types";

export const day48: DayLesson = {
  day: 48,
  title: "Mastering Flexbox Alignment",
  category: "CSS Grid & Flexbox",
  description: "Gain full control over your layouts by mastering the powerful alignment properties of Flexbox for positioning items along both axes.",
  learningObjectives: [
    "Master `justify-content` to align and distribute space between items along the main axis.",
    "Utilize `align-items` to precisely position items along the cross axis.",
    "Understand how `align-content` works to distribute space between multiple lines of flex items.",
    "Use `align-self` to override the default alignment for individual flex items."
  ],
  detailedExplanation: `
Flexbox's true power comes from its alignment capabilities. These properties give you fine-grained control over how items are positioned and how space is distributed.

### Aligning on the Main Axis: \`justify-content\`
This property defines how flex items are laid out along the **main axis**. It helps distribute extra free space.

- \`flex-start\` (default): Items are packed toward the start of the main axis.
- \`flex-end\`: Items are packed toward the end of the main axis.
- \`center\`: Items are centered along the main axis.
- \`space-between\`: Items are evenly distributed; the first item is on the start line, the last item on the end line.
- \`space-around\`: Items are evenly distributed with equal space around them. The space before the first item and after the last item is half the size of the space between two items.
- \`space-evenly\`: Items are distributed so that the spacing between any two items (and the space to the edges) is equal.

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
}
\`\`\`

### Aligning on the Cross Axis: \`align-items\`
This property defines the default behavior for how flex items are laid out along the **cross axis** on the current line.

- \`stretch\` (default): Items are stretched to fill the container (still respects min/max-width).
- \`flex-start\`: Items are placed at the start of the cross axis.
- \`flex-end\`: Items are placed at the end of the cross axis.
- \`center\`: Items are centered in the cross-axis.
- \`baseline\`: Items are aligned such as their baselines align.

\`\`\`css
.container {
  display: flex;
  height: 200px; /* Container needs a height to see the effect */
  align-items: center;
}
\`\`\`

### Aligning Multiple Lines: \`align-content\`
This property aligns a flex container’s lines within when there is extra space in the cross-axis. **Note: This property only takes effect on multi-line flexible containers, where \`flex-wrap\` is set to either \`wrap\` or \`wrap-reverse\`**.

Its values are similar to \`justify-content\`: \`flex-start\`, \`flex-end\`, \`center\`, \`space-between\`, \`space-around\`, \`space-evenly\`, and \`stretch\` (default).

\`\`\`css
.container {
  display: flex;
  flex-wrap: wrap;
  height: 400px; /* Container needs a height */
  align-content: center; /* Centers all the lines of items vertically */
}
\`\`\`

### Overriding Alignment: \`align-self\`
This property allows the default alignment (or the one specified by \`align-items\`) to be overridden for individual flex items.

It accepts the same values as \`align-items\` plus \`auto\` (default), which inherits the value from \`align-items\`.

\`\`\`css
.item-1 {
  align-self: flex-end; /* This specific item will be at the bottom */
}
.item-2 {
  align-self: center; /* This specific item will be centered */
}
\`\`\`
This is incredibly useful for creating exceptions in your layout without needing extra wrappers or complex selectors.
`,
  keyTerms: [
    { term: "justify-content", definition: "A flex container property that aligns flex items along the main axis, controlling the distribution of space." },
    { term: "align-items", definition: "A flex container property that aligns flex items along the cross axis within a single line." },
    { term: "align-content", definition: "A flex container property that aligns multiple lines of flex items along the cross axis. Requires `flex-wrap: wrap`." },
    { term: "align-self", definition: "A flex item property that overrides the container's `align-items` value for a single item." },
    { term: "Main Axis Alignment", definition: "Positioning of items horizontally (in a row) or vertically (in a column), controlled by `justify-content`." },
    { term: "Cross Axis Alignment", definition: "Positioning of items perpendicular to the main axis, controlled by `align-items` and `align-content`." }
  ],
  exercises: [
    {
      id: 1,
      title: "Perfect Centering",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a parent `<div>` with a class of `parent`. Give it a fixed height (e.g., `300px`) and a border.",
        "Inside, place a smaller `<div>` with a class of `child`.",
        "Apply `display: flex;` to the `parent`.",
        "To center the `child` horizontally, use `justify-content: center;`.",
        "To center the `child` vertically, use `align-items: center;`.",
        "You have now perfectly centered an item with just three lines of CSS!"
      ]
    },
    {
      id: 2,
      title: "Header Layout",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a `<header>` element. Inside, place a 'Logo' div, a `<nav>` element, and a 'Buttons' div.",
        "Apply `display: flex;` to the `<header>`.",
        "Use `justify-content: space-between;` to push the logo and buttons to the edges, leaving the nav in the middle.",
        "Use `align-items: center;` to ensure all three elements are vertically aligned in the center of the header.",
        "Give the `<nav>` `display: flex` as well to align its internal links."
      ]
    },
    {
      id: 3,
      title: "Card with Sticky Footer",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a `<div>` for a card with a fixed height (e.g. `400px`).",
        "Inside the card, add a header, a main content area, and a footer.",
        "Apply `display: flex;` and `flex-direction: column;` to the card.",
        "Give the main content area `flex-grow: 1;`. This will make it expand to take up all available vertical space.",
        "The header and footer will stay at their natural height, and the footer will be 'pushed' to the bottom of the card, regardless of the content's height."
      ]
    },
    {
      id: 4,
      title: "Individual Alignment",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a flex container with five items inside. Give the container a height.",
        "By default, all items will stretch. Set `align-items: flex-start;` on the container to move them all to the top.",
        "Give the second item a class and apply `align-self: center;`.",
        "Give the fourth item a different class and apply `align-self: flex-end;`.",
        "Observe how you can individually control the alignment of specific items."
      ]
    }
  ]
};
