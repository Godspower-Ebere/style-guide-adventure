
import { DayLesson } from "../types";

export const day56: DayLesson = {
  day: 56,
  title: "Z-Index and Stacking Context",
  category: "Advanced CSS",
  description: "Master the `z-index` property and understand the concept of stacking contexts to control how overlapping elements are displayed on the z-axis.",
  learningObjectives: [
    "Understand how elements are rendered on the z-axis (closer or farther from the viewer).",
    "Use the `z-index` property to explicitly control the stacking order of positioned elements.",
    "Learn what a 'stacking context' is and which properties create one.",
    "Diagnose and solve common `z-index` issues where an element doesn't appear on top as expected."
  ],
  detailedExplanation: `
Normally, elements on a webpage are rendered in the order they appear in the HTML. However, when elements overlap (often due to CSS positioning), you need a way to control which one appears on top. This is where \`z-index\` comes in.

### The \`z-index\` Property
The \`z-index\` property specifies the stack order of a *positioned* element. An element with a greater stack order is always in front of an element with a lower stack order.

**Crucial Rule:** \`z-index\` **only works on positioned elements**. A positioned element is one whose \`position\` value is anything other than \`static\` (the default). So, it must be \`relative\`, \`absolute\`, \`fixed\`, or \`sticky\`.

\\\`\\\`\\\`css
.box {
  position: absolute;
  width: 100px;
  height: 100px;
}
.red-box {
  background-color: red;
  top: 10px;
  left: 10px;
  z-index: 1; /* Appears on top of the blue box */
}
.blue-box {
  background-color: blue;
  top: 30px;
  left: 30px;
  z-index: 0; /* Appears below the red box */
}
\\\`\\\`\\\`
The \`z-index\` can be a positive or negative integer. Elements with a higher \`z-index\` value are stacked on top of elements with a lower value.

### The Stacking Context
This is the most confusing but most important concept for mastering \`z-index\`. A stacking context is an element that contains a set of layers. **Within a stacking context, the \`z-index\` values of its children only have meaning for stacking within that context.**

Think of it like groups in Photoshop. You can order layers within a group, but the entire group has its own stacking order relative to other groups and layers.

**What creates a stacking context?**
Many properties do, but the most common are:
- The root element (\`<html>\`).
- An element with a \`position\` of \`absolute\` or \`relative\` and a \`z-index\` other than \`auto\`.
- An element with a \`position\` of \`fixed\` or \`sticky\`.
- An element with an \`opacity\` less than 1.
- An element with a \`transform\`, \`filter\`, or \`perspective\` value other than \`none\`.

**The "Z-Index Doesn't Work" Problem**
This almost always happens because of stacking contexts. Imagine this HTML:
\\\`\\\`\\\`html
<div class="parent-A">
  <div class="child-A">I have z-index: 9999!</div>
</div>
<div class="parent-B">
  <div class="child-B">I have z-index: 1</div>
</div>
\\\`\\\`\\\`
And this CSS:
\\\`\\\`\\\`css
.parent-A {
  position: relative;
  z-index: 0; /* Creates a stacking context! */
  opacity: 0.99; /* Also creates a stacking context! */
}
.child-A {
  position: absolute;
  z-index: 9999; /* This z-index is only relative to other items inside parent-A */
}

.parent-B {
  position: relative;
  z-index: 1; /* Creates a new stacking context */
}
.child-B {
  position: absolute;
  z-index: 1;
}
\\\`\\\`\\\`
Even though \`child-A\` has a \`z-index\` of 9999, it will appear **behind** \`child-B\`. Why? Because \`parent-A\` creates its own stacking context with a \`z-index\` of 0. \`parent-B\` creates a stacking context with a \`z-index\` of 1. Since \`parent-B\` is on top of \`parent-A\`, everything inside \`parent-B\` will also be on top of everything inside \`parent-A\`, regardless of the children's \`z-index\` values.
`,
  keyTerms: [
    { term: "z-index", definition: "A CSS property that sets the stack order of a positioned element. Higher values are stacked in front of lower values." },
    { term: "Positioned Element", definition: "An element whose CSS `position` property is set to `relative`, `absolute`, `fixed`, or `sticky`." },
    { term: "Stacking Context", definition: "A conceptual group of layers created by certain CSS properties. The `z-index` of child elements are only compared within the same stacking context." },
    { term: "Stacking Order", definition: "The order in which elements are painted on the screen. Within a stacking context, this is determined by `z-index` and other rules." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Z-Index Stacking",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create three `<div>` elements.",
        "Give them all `position: absolute`, and different `width`, `height`, and `background-color` values.",
        "Overlap them using `top` and `left` properties.",
        "Use `z-index: 1;`, `z-index: 2;`, and `z-index: 3;` to control which one appears on top."
      ]
    },
    {
      id: 2,
      title: "Breaking Out of a Stacking Context",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Recreate the 'Z-Index Doesn't Work' example from the explanation.",
        "Create two parent divs, each with a child div inside.",
        "Give the first parent `position: relative` and `z-index: 1`.",
        "Give its child an extremely high `z-index`, like `999`.",
        "Give the second parent `position: relative` and a higher `z-index`, like `z-index: 2`.",
        "Give its child a low `z-index`, like `1`.",
        "Observe that the second parent's child is on top, despite its low z-index. To 'fix' this, you would need to adjust the z-index of the parent elements, not the children."
      ]
    },
    {
      id: 3,
      title: "Modal/Overlay Z-Index",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a simple page layout with a header, main content, and footer.",
        "Create a modal overlay `div` that covers the entire screen (use `position: fixed`, `top: 0`, `left: 0`, `width: 100%`, `height: 100%`, and a semi-transparent `background-color`).",
        "Create a modal content `div` that sits inside the overlay.",
        "Ensure your header has a `position: relative` and a `z-index` (e.g., `10`).",
        "Give the modal overlay a higher `z-index` (e.g., `50`) and the modal content an even higher one (e.g., `51`) to ensure they appear above all other page content."
      ]
    }
  ]
};
