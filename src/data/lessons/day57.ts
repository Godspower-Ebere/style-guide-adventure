
import { DayLesson } from "../types";

export const day57: DayLesson = {
  day: 57,
  title: "CSS Overflow and Clipping",
  category: "Advanced CSS",
  description: "Learn how to control what happens when content is too big for its container using the `overflow`, `clip-path`, and related properties.",
  learningObjectives: [
    "Master the `overflow` property and its values: `visible`, `hidden`, `scroll`, and `auto`.",
    "Understand the difference between `overflow-x` and `overflow-y` for axis-specific control.",
    "Learn how to create custom-shaped elements and reveal effects using `clip-path`.",
    "Control text overflow with `text-overflow: ellipsis` for cleaner UIs."
  ],
  detailedExplanation: `
Sometimes, your content is larger than the box you've designed for it. The \`overflow\` property and related clipping properties give you precise control over how to handle this situation.

### The \`overflow\` Property
This is the primary property for controlling overflow on block-level elements.

- \`visible\` (default): The content is not clipped and renders outside its container's box. It might overlap other elements.
- \`hidden\`: The content is clipped, and the rest is hidden. There are no scrollbars.
- \`scroll\`: The content is clipped, and browsers display scrollbars whether they are needed or not. This prevents the layout from jumping when content changes and a scrollbar suddenly appears.
- \`auto\`: The browser decides. If the content fits, it looks like \`visible\`. If it overflows, scrollbars are added (like \`scroll\`). This is the most common value to use.

You can also control overflow on each axis independently:
- \`overflow-x\`: Controls overflow on the horizontal axis.
- \`overflow-y\`: Controls overflow on the vertical axis.

\`\`\`css
.chat-window {
  height: 300px;
  width: 250px;
  border: 1px solid #ccc;
  overflow-y: auto; /* Add a vertical scrollbar only if messages exceed 300px */
}

.code-snippet {
  width: 100%;
  background-color: #f4f4f4;
  overflow-x: auto; /* Add a horizontal scrollbar for long lines of code */
  white-space: pre; /* Prevent text from wrapping */
}
\`\`\`
**Note:** For `overflow` to have an effect, the block-level container must have a defined size (e.g., a `height` or `max-height`) or be constrained in some way.

### Clipping with \`clip-path\`
The \`clip-path\` property creates a clipping region that defines what portion of an element is visible. The part inside the region is shown, while the part outside is hidden. This is much more powerful than the boxy clipping of \`overflow: hidden\`.

You can use basic shapes, or even an SVG path for complex shapes.

- \`circle(radius at position)\`: \`clip-path: circle(50% at 50% 50%);\`
- \`ellipse(x-radius y-radius at position)\`: \`clip-path: ellipse(40% 50% at center);\`
- \`polygon(x1 y1, x2 y2, ...)\`: Creates a shape with straight lines. Great for triangles, trapezoids, etc. \`clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\` creates a triangle.
- \`inset(top right bottom left round border-radius)\`: Clips from the edges inwards.

\`\`\`css
.avatar {
  width: 150px;
  height: 150px;
  clip-path: circle(50% at center); /* Creates a circular avatar */
}

.diagonal-cut {
  background-color: blue;
  height: 200px;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%); /* Creates a diagonal cut at the bottom */
}
\`\`\`
`clip-path` is animatable, allowing for incredible reveal and transition effects.

### Handling Text Overflow
For a single line of text that overflows its container, you can create a clean truncation effect with an ellipsis (...).

**This requires three properties to work together:**
1.  \`white-space: nowrap;\`: Prevent the text from wrapping to a new line.
2.  \`overflow: hidden;\`: Hide the text that goes past the container's edge.
3.  \`text-overflow: ellipsis;\`: Display the ellipsis to indicate there is more text.

\`\`\`css
.card-title {
  width: 200px; /* Must have a constrained width */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
\`\`\`
`,
  keyTerms: [
    { term: "overflow", definition: "A CSS property that sets the desired behavior for when content does not fit in its parent's container." },
    { term: "auto", definition: "A value for `overflow` that adds scrollbars only when the content overflows its container." },
    { term: "hidden", definition: "A value for `overflow` that clips the content and makes it inaccessible." },
    { term: "clip-path", definition: "A CSS property that creates a clipping region, hiding the parts of an element that are outside the defined shape." },
    { term: "polygon()", definition: "A function used with `clip-path` to define a custom shape with multiple points." },
    { term: "text-overflow: ellipsis", definition: "A CSS property that truncates overflowing text with an ellipsis (...) character. Requires `overflow: hidden` and `white-space: nowrap`." }
  ],
  exercises: [
    {
      id: 1,
      title: "Scrollable Content Box",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a `div` and give it a fixed `height` of `200px` and a `border`.",
        "Place a large amount of text inside it so the text overflows.",
        "Apply `overflow-y: auto;` to the div.",
        "Observe how a vertical scrollbar appears, allowing you to see all the content."
      ]
    },
    {
      id: 2,
      title: "Truncated Text with Ellipsis",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a `p` tag with a long line of text.",
        "Give the paragraph a `width` of `250px` and a `border` so you can see its bounds.",
        "Apply the three required properties: `white-space: nowrap;`, `overflow: hidden;`, and `text-overflow: ellipsis;`.",
        "Verify that the text is cleanly cut off with '...' at the end."
      ]
    },
    {
      id: 3,
      title: "Creating Shaped Images",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Add an `img` tag to your page.",
        "Use `clip-path: circle(50%);` to make it a perfect circle.",
        "Add another image. Use `clip-path: polygon(...)` to clip it into a hexagon shape.",
        "Hint: A hexagon has 6 points. You can find point coordinates using an online `clip-path` generator."
      ]
    },
    {
      id: 4,
      title: "Hover Reveal with Clip-Path",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a container `div` with a background image and `position: relative`.",
        "Inside it, create another `div` that is an overlay with text content.",
        "On the overlay, set an initial `clip-path: circle(0% at 50% 50%);` and a `transition` for `clip-path`.",
        "On container hover, change the overlay's style to `clip-path: circle(75% at 50% 50%);`.",
        "This will create a smooth circular reveal effect for the overlay text when you hover on the container."
      ]
    }
  ]
};
