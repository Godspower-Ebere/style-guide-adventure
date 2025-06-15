
import { DayLesson } from "../types";

export const day36: DayLesson = {
  day: 36,
  title: "Mastering the CSS Position Property",
  category: "CSS Layouts",
  description: "Gain control over element placement with `static`, `relative`, `absolute`, `fixed`, and `sticky` positioning.",
  learningObjectives: [
    "Understand the default `static` positioning.",
    "Use `position: relative` to create a new positioning context.",
    "Leverage `position: absolute` to place elements with precision relative to an ancestor.",
    "Create viewport-fixed elements with `position: fixed`.",
    "Implement 'sticky' elements that toggle between relative and fixed positioning."
  ],
  detailedExplanation: `
The \`position\` property, in combination with the offset properties (\`top\`, \`right\`, \`bottom\`, \`left\`), allows you to move an element from its default place in the document flow.

### \`position: static\`
This is the default value for every element. Statically positioned elements are laid out in the normal document flow. The offset properties have no effect.

### \`position: relative\`
Relative positioning is a subtle but powerful tool.
- **Behavior**: The element is first placed in the normal flow. Then, you can use offset properties to move it *relative to its static position*.
- **Layout Impact**: Critically, the space the element *would have* occupied is preserved. Other elements are not affected and will not move to fill the gap.
- **Positioning Context**: Its most important feature is that it creates a **positioning context** for its child elements. This means any child with \`position: absolute\` will be positioned relative to this parent.

\`\`\`css
.relative-box {
  position: relative;
  top: 20px; /* Moves 20px down from its original spot */
  left: 20px; /* Moves 20px right from its original spot */
}
\`\`\`

### \`position: absolute\`
Absolute positioning removes the element from the normal document flow entirely.
- **Behavior**: Other elements behave as if the absolutely positioned element doesn't exist. It does not occupy any space.
- **Positioning**: It is positioned relative to its **nearest positioned ancestor** (any ancestor with a \`position\` value other than \`static\`). If no such ancestor exists, it is positioned relative to the initial containing block (the \`<html>\` element).
- **Use Case**: Perfect for overlays, tooltips, and custom captions on images.

\`\`\`css
.container {
  position: relative; /* Establishes positioning context */
  width: 200px;
  height: 200px;
}
.absolute-box {
  position: absolute;
  top: 10px;
  right: 10px;
  /* This box is now 10px from the top and 10px from the right *of .container* */
}
\`\`\`

### \`position: fixed\`
Fixed positioning also removes the element from the document flow.
- **Behavior**: It is positioned relative to the **viewport** (the browser window).
- **Layout Impact**: It does not move when the page is scrolled, making it ideal for elements that should always be visible, like navigation bars, headers, or "Back to Top" buttons.

\`\`\`css
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 100; /* Ensures it stays on top */
}
\`\`\`

### \`position: sticky\`
Sticky positioning is a hybrid of relative and fixed.
- **Behavior**: The element is treated as \`position: relative\` until it scrolls to a specific offset threshold (e.g., \`top: 0\`). At that point, it "sticks" and behaves like \`position: fixed\`.
- **Use Case**: Excellent for navigation bars that start in the page flow but stick to the top on scroll, or for table headers in a long, scrollable table.

\`\`\`css
.sticky-nav {
  position: sticky;
  top: 0; /* Sticks to the top of the viewport when scrolled past */
}
\`\`\`

### The \`z-index\` Property
When elements are positioned, they can overlap. The \`z-index\` property controls their stacking order. A higher \`z-index\` value brings an element closer to the front. It only works on positioned elements (anything other than \`static\`).
`,
  keyTerms: [
    { term: "positioning context", definition: "An area established by a positioned element (relative, absolute, fixed, or sticky) within which its absolutely positioned descendants are contained." },
    { term: "document flow", definition: "The default order and space that elements take up on a web page." },
    { term: "viewport", definition: "The visible area of the web page in the browser window." },
    { term: "z-index", definition: "A CSS property that sets the stack order of a positioned element. An element with a greater stack order is always in front of an element with a lower stack order." }
  ],
  exercises: [
    {
      id: 1,
      title: "Relative vs. Static",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create three colored \`<div>\` boxes in a row.",
        "Target the middle box with CSS and give it \`position: relative\`.",
        "Apply \`top: 20px\` and \`left: 20px\` to the middle box.",
        "Observe how it moves relative to its original position, but the other two boxes do not shift to fill the gap."
      ]
    },
    {
      id: 2,
      title: "Image with a Caption",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a \`<div>\` with the class 'image-container'. Set its \`position: relative\` and \`display: inline-block\`.",
        "Place an \`<img>\` inside it.",
        "Place a \`<span>\` with the class 'caption' inside it as well. This will be the caption text.",
        "Give the 'caption' \`position: absolute\`, a background color, and some padding.",
        "Position the caption at the bottom of the container using \`bottom: 0\` and \`left: 0\`. It should now sit on top of the image."
      ]
    },
    {
      id: 3,
      title: "Fixed 'Back to Top' Button",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create a long page with enough content to require scrolling.",
        "Create a button or link with the text 'Top'.",
        "Use CSS to give it \`position: fixed\`.",
        "Position it in the bottom-right corner of the viewport using \`bottom: 20px\` and \`right: 20px\`.",
        "Set a high \`z-index\` (e.g., \`99\`) to ensure it's always on top. The button should remain in place as you scroll."
      ]
    },
    {
      id: 4,
      title: "Sticky Navigation Bar",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a page with a header, a navigation bar, and a main content area below it.",
        "Make the main content area long enough to scroll.",
        "Target the navigation bar with CSS and apply \`position: sticky\`.",
        "Set \`top: 0;\`. This tells the browser when to 'stick' the element.",
        "Scroll the page. The navigation bar should scroll normally until it hits the top of the viewport, at which point it should stick there."
      ]
    },
    {
      id: 5,
      title: "Z-Index Stacking Challenge",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create three overlapping \`<div>\`s using \`position: absolute\`.",
        "Give each div a different background color and a different size.",
        "Without using \`z-index\`, observe their default stacking order (the last element in the HTML is on top).",
        "Now, use the \`z-index\` property to explicitly set their stacking order. For example, make the first div appear on top of the third one.",
        "Experiment with positive, negative, and zero values for \`z-index\`."
      ]
    }
  ]
};
