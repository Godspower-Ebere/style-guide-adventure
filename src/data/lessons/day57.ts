
import { DayLesson } from "../types";

export const day57: DayLesson = {
  day: 57,
  title: "Handling Overflow in CSS",
  category: "Advanced CSS",
  description: "Learn how to control what happens when content is too big to fit in its container using the `overflow` property and its variants.",
  learningObjectives: [
    "Understand the default `overflow: visible` behavior.",
    "Use `overflow: hidden` to clip content that extends beyond an element's boundaries.",
    "Implement scrollbars when needed with `overflow: scroll` and `overflow: auto`.",
    "Differentiate between the `overflow`, `overflow-x`, and `overflow-y` properties.",
    "Recognize the relationship between `overflow` and block formatting contexts."
  ],
  detailedExplanation: `
The \`overflow\` property is a shorthand for specifying how to handle content that overflows an element's box. This is a common situation when content is dynamic or when you have fixed-size containers.

### The \`overflow\` Property Values

- \`visible\` (default): This is the default value. Content is not clipped and may be rendered outside the element's box. This can sometimes overlap with other elements, causing layout issues.

- \`hidden\`: The content is clipped, and the rest of the content is hidden. There are no scrollbars. This is useful for hiding parts of an image or creating certain layout effects. It also creates a new block formatting context, which can be used to solve issues like collapsing margins.

- \`scroll\`: The content is clipped, and browsers will display scrollbars whether they are needed or not. This can be useful to prevent the UI from jumping when content changes and a scrollbar suddenly appears. It creates both horizontal and vertical scrollbars.

- \`auto\`: This is usually the most practical option. The browser will only add scrollbars if the content actually overflows the container. If it overflows vertically, a vertical scrollbar appears. If horizontally, a horizontal one appears.

\\\`\\\`\\\`css
.box {
  width: 200px;
  height: 150px;
  border: 1px solid black;
  margin-bottom: 20px;
}

.box-visible {
  overflow: visible; /* Text will flow out of the bottom */
}

.box-hidden {
  overflow: hidden; /* Text will be cut off */
}

.box-scroll {
  overflow: scroll; /* Will have both scrollbars, even if not needed */
}

.box-auto {
  overflow: auto; /* The best of both worlds - scrollbars only when necessary */
}
\\\`\\\`\\\`

### \`overflow-x\` and \`overflow-y\`
The \`overflow\` property is a shorthand. You can control the horizontal and vertical overflow independently using \`overflow-x\` and \`overflow-y\`.

\\\`\\\`\\\`css
.container {
  height: 200px;
  /* Allow vertical scrolling, but hide any horizontal overflow */
  overflow-y: auto;
  overflow-x: hidden;
}

.long-text-no-wrap {
  /* This text will overflow horizontally */
  white-space: nowrap;
}
\\\`\\\`\\\`

### Overflow and Block Formatting Context (BFC)
Setting \`overflow\` to any value other than \`visible\` (i.e., \`hidden\`, \`scroll\`, or \`auto\`) creates a new **Block Formatting Context (BFC)**. This is a powerful, behind-the-scenes concept. A BFC is like a mini-layout within the page where its contents are contained.

A key benefit of this is that it prevents **margin collapse**. If you have two sibling elements with vertical margins, their margins will collapse into one another. However, if one is wrapped in a container with \`overflow: hidden\`, their margins will not collapse.

Another benefit is containing floats. If you have a floated element inside a container, the container's height will collapse to zero. By setting \`overflow: auto\` or \`overflow: hidden\` on the container, you create a BFC which forces the container to expand to contain the floated element. This is a modern alternative to the old "clearfix hack".
`,
  keyTerms: [
    { term: "Overflow", definition: "A state where the content of an element is too large to fit within its designated size." },
    { term: "overflow: hidden", definition: "A value that clips any content outside the element's box and does not provide scrollbars." },
    { term: "overflow: auto", definition: "A value that adds scrollbars to an element only when its content overflows the available space." },
    { term: "overflow: scroll", definition: "A value that adds scrollbars to an element regardless of whether its content overflows or not." },
    { term: "Block Formatting Context (BFC)", definition: "A part of a visual CSS rendering of a web page in which block boxes are laid out. Setting `overflow` to non-visible values is one way to create a BFC." }
  ],
  exercises: [
    {
      id: 1,
      title: "Overflow Playground",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create four identical `<div>` elements with a fixed `width` and `height`.",
        "Place a large paragraph of text inside each one, ensuring the text is long enough to overflow.",
        "Apply `overflow: visible;` to the first, `overflow: hidden;` to the second, `overflow: scroll;` to the third, and `overflow: auto;` to the fourth.",
        "Observe the different behaviors of each."
      ]
    },
    {
      id: 2,
      title: "Controlling Axes",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a `<div>` with a fixed `height`.",
        "Inside it, place a `<p>` with text that is long but has `white-space: nowrap;` applied to it. This will make it overflow horizontally.",
        "On the parent `<div>`, set `overflow-y: auto;` and `overflow-x: scroll;`.",
        "Observe how you can scroll horizontally to see the text, but there's no vertical scrollbar unless you add more paragraphs."
      ]
    },
    {
      id: 3,
      title: "Overflow to Clear Floats",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a parent `<div>` with a border.",
        "Inside it, place an `<img>` and float it to the left.",
        "Also inside, add a `<p>` with some text next to the image.",
        "Observe how the parent `<div>`'s border collapses and doesn't contain the floated image.",
        "Fix this by adding `overflow: auto;` to the parent `<div>`. Notice how the container now magically expands to wrap around its floated children."
      ]
    },
    {
      id: 4,
      title: "Simple Text Carousel",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a container `div` with a fixed width and `overflow: hidden;`.",
        "Inside, create a wrapper `div` that will hold all the 'slides'. Use Flexbox on this wrapper.",
        "Place several 'slide' divs inside the wrapper, each with the same width as the container.",
        "By using CSS transforms (`transform: translateX(...)`) on the inner wrapper, you can programmatically move the slides left and right, with the outer container's `overflow: hidden` ensuring only one slide is visible at a time."
      ]
    }
  ]
};
