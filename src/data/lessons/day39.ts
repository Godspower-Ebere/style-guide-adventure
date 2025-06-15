
import { DayLesson } from "../types";

export const day39: DayLesson = {
  day: 39,
  title: "Advanced Flexbox: Sizing, Wrapping, and Ordering",
  category: "CSS Grid & Flexbox",
  description: "Master the sizing, growing, shrinking, and wrapping of flex items to build truly responsive and flexible layouts.",
  learningObjectives: [
    "Control wrapping of flex items onto multiple lines with `flex-wrap`.",
    "Manage the alignment of wrapped lines using `align-content`.",
    "Control item flexibility with `flex-grow`, `flex-shrink`, and `flex-basis`.",
    "Utilize the `flex` shorthand property for concise code.",
    "Reorder items visually with the `order` property.",
    "Override alignment for individual items with `align-self`."
  ],
  detailedExplanation: `
Once you've mastered the basics of Flexbox, you can unlock its true power by controlling how flex items wrap, grow, and shrink.

### Multi-line Flex Containers

**1. \`flex-wrap\`**
By default, flex items try to fit onto one line. The \`flex-wrap\` property allows them to wrap onto multiple lines.
- \`nowrap\` (default): All items are on one line.
- \`wrap\`: Items wrap onto multiple lines, from top to bottom.
- \`wrap-reverse\`: Items wrap onto multiple lines, from bottom to top.

**2. \`align-content\`**
This property is for multi-line flex containers (\`flex-wrap: wrap\`). It aligns the container's lines when there is extra space in the cross-axis. It has no effect on single-line containers.
- \`flex-start\`: Lines packed to the start of the container.
- \`flex-end\`: Lines packed to the end of the container.
- \`center\`: Lines packed to the center of the container.
- \`space-between\`: Lines evenly distributed; first line at the start, last at the end.
- \`space-around\`: Lines evenly distributed with equal space around each line.
- \`stretch\` (default): Lines stretch to take up the remaining space.

### The Children (Flex Items) Properties

These properties are applied directly to the flex items (the children).

**1. Sizing and Flexibility: \`flex-grow\`, \`flex-shrink\`, \`flex-basis\`**
- \`flex-basis\`: Defines the default size of an item before the remaining space is distributed. It can be a length (e.g., 20%, 5rem) or \`auto\` (looks at its width or height property).
- \`flex-grow\`: A unitless number that dictates how much an item will grow relative to the other items if there is extra space. A value of \`1\` means it will take up an equal share of the available space. A value of \`2\` means it will take up twice as much space as items with \`flex-grow: 1\`.
- \`flex-shrink\`: A unitless number that dictates how much an item will shrink if there isn't enough space. The default is \`1\`.

**2. The \`flex\` Shorthand**
This is the shorthand for \`flex-grow\`, \`flex-shrink\`, and \`flex-basis\`.
\`\`\`css
.item {
  flex: <flex-grow> <flex-shrink> <flex-basis>;
}
\`\`\`
Common values:
- \`flex: 0 1 auto;\` (default value)
- \`flex: 1;\` (shorthand for \`flex: 1 1 0\`) - The item will grow and shrink as needed, starting from a zero basis. Great for making items share space equally.
- \`flex: auto;\` (shorthand for \`flex: 1 1 auto\`)
- \`flex: none;\` (shorthand for \`flex: 0 0 auto\`) - The item is fully inflexible.

**3. \`order\`**
By default, flex items are laid out in the source order. The \`order\` property allows you to change this. The default value is \`0\`. Items with lower order values appear first.
\`\`\`css
.item-1 { order: 2; } /* Moves to the end */
.item-2 { order: 1; } /* Stays in middle */
.item-3 { order: 0; } /* Moves to the start */
\`\`\`

**4. \`align-self\`**
This allows the default alignment (or the one specified by \`align-items\`) to be overridden for individual flex items. It accepts the same values as \`align-items\`.
`,
  keyTerms: [
    { term: "flex-wrap", definition: "A CSS property that specifies whether flex items are forced onto one line or can wrap onto multiple lines." },
    { term: "align-content", definition: "A CSS property that aligns a flex container's lines within when there is extra space in the cross-axis, similar to how `justify-content` aligns individual items within the main-axis." },
    { term: "flex-grow", definition: "Defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion." },
    { term: "flex-shrink", definition: "Defines the ability for a flex item to shrink if necessary." },
    { term: "flex-basis", definition: "Defines the default size of an element before the remaining space is distributed." },
    { term: "flex (shorthand)", definition: "A shorthand property for `flex-grow`, `flex-shrink`, and `flex-basis`." },
    { term: "order", definition: "A CSS property that controls the order in which flex items appear in the flex container." },
    { term: "align-self", definition: "A CSS property that allows the default alignment (or the one specified by `align-items`) to be overridden for individual flex items." }
  ],
  exercises: [
    {
      id: 1,
      title: "Responsive Image Gallery",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a container `<div>` and place 10 `<img>` elements inside it.",
        "Apply `display: flex;` to the container.",
        "Add `flex-wrap: wrap;` to allow the images to wrap onto new lines.",
        "Use `justify-content: center;` to center the images on each line.",
        "Give each image a specific width (e.g., `width: 150px;`) and some `margin`. Observe how the gallery is responsive when you resize the browser."
      ]
    },
    {
      id: 2,
      title: "Flexible Content, Fixed Sidebar",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create a main container `<div>` and apply `display: flex;`.",
        "Inside, create two children: `<main>` and `<aside>`.",
        "Give the `<aside>` a fixed width, for example `flex: 0 0 200px;` (This means it won't grow, won't shrink, and has a basis of 200px).",
        "Give the `<main>` element `flex: 1 1 0;` (or the shorthand `flex: 1;`). This tells it to grow and fill the remaining available space.",
        "Add background colors to both to see the effect. The main content will expand to fill the space left by the sidebar."
      ]
    },
    {
      id: 3,
      title: "Reordering with `order`",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a flex container with three child `<div>`s labeled 'First', 'Second', and 'Third'.",
        "By default, they appear in that order.",
        "Using the `order` property, make 'Third' appear first.",
        "Then, make 'First' appear last.",
        "The final visual order should be: 'Third', 'Second', 'First'."
      ]
    },
    {
      id: 4,
      title: "Sticky Footer with Flexbox",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create an HTML structure with `<body>`, `<main>`, and `<footer>`.",
        "The goal is to make the footer stick to the bottom of the viewport, even on pages with little content.",
        "Set the `<body>` to `display: flex;` and `flex-direction: column;`.",
        "Give the `<body>` a `min-height: 100vh;`.",
        "Target the `<main>` element and give it `flex: 1;` (or `flex-grow: 1;`). This makes the main content area expand to push the footer down.",
        "Add some content to the main and footer to see the result. Test it on a page with a lot of content and a page with very little content."
      ]
    }
  ]
};
