
import { DayLesson } from "../types";

export const day56: DayLesson = {
  day: 56,
  title: "Demystifying Z-index and the Stacking Context",
  category: "Advanced CSS",
  description: "Master the `z-index` property and understand the rules of the stacking context to gain full control over how elements overlap on the z-axis.",
  learningObjectives: [
    "Understand how `z-index` controls the stacking order of positioned elements.",
    "Define what a 'stacking context' is and identify the CSS properties that create one.",
    "Learn the specific stacking rules for how elements are painted within a single stacking context.",
    "Troubleshoot common `z-index` issues where an element stubbornly won't appear on top."
  ],
  detailedExplanation: `
\`z-index\` seems simple: a higher number means it's on top. But when it doesn't work, it's usually because of a misunderstood concept: the **stacking context**.

### What is \`z-index\`?
The \`z-index\` property specifies the stack order of an element. An element with a greater stack order is always in front of an element with a lower stack order.

**There is one HUGE rule:** \`z-index\` **only works on positioned elements**. A positioned element is one whose \`position\` value is anything other than \`static\` (the default). So, it must be \`relative\`, \`absolute\`, \`fixed\`, or \`sticky\`.

\`\`\`css
.on-top {
  position: absolute; /* or relative, fixed, sticky */
  z-index: 10;
}
.underneath {
  position: absolute;
  z-index: 5;
}
\`\`\`

### What is a Stacking Context?
This is the key concept. A stacking context is like a new, independent "layer group" on the page. Inside this group, the children have their own \`z-index\` values that are only compared against each other. The entire group is then positioned in its parent's stacking context.

**Think of it like Photoshop Layer Groups.** You can have layers inside a group. Moving the entire group moves all the layers inside it together, above or below other groups. A layer with `z-index: 999` inside a group with `z-index: 1` will *never* appear above something in a different group with `z-index: 2`.

**What creates a new stacking context?**
- The root element (\`<html>\`).
- An element with \`position: absolute\` or \`relative\` and a \`z-index\` other than \`auto\`.
- An element with \`position: fixed\` or \`sticky\`.
- An element that is a child of a flex or grid container, with a \`z-index\` other than \`auto\`.
- An element with an \`opacity\` less than 1.
- An element with a \`transform\`, \`filter\`, \`clip-path\`, or \`perspective\` value other than \`none\`.

### Stacking Order Within a Context
Within a single stacking context, elements are painted in this specific order, from bottom to top:
1.  The background and borders of the element forming the stacking context.
2.  Child stacking contexts with negative \`z-index\` values (lower values are further back).
3.  Non-positioned, non-floated, block-level elements (in source order).
4.  Non-positioned floats.
5.  Non-positioned, inline-level elements (in source order).
6.  Child stacking contexts with \`z-index: 0\` or \`auto\`.
7.  Child stacking contexts with positive \`z-index\` values (higher values are further forward).

### The "It's Not Working!" Problem - Solved
**Problem:** You have a dropdown menu with \`z-index: 9999;\`, but it's appearing *underneath* another element with \`z-index: 10;\`.

**Cause:** Your dropdown menu is inside a container that has created a new stacking context (e.g., it has \`transform: scale(1)\` or \`opacity: 0.99\`). This container's parent has a lower \`z-index\` than the other element. The dropdown's \`z-index: 9999\` is trapped inside its stacking context.

**Solution:** Find what's creating the stacking context on the parent and remove it if possible. Or, restructure your HTML so the dropdown is not inside that container (often by moving it to the end of the \`<body>\` and positioning it with JavaScript).
`,
  keyTerms: [
    { term: "z-index", definition: "A CSS property that sets the stack order (z-axis) of a positioned element. Higher numbers are closer to the viewer." },
    { term: "Stacking Context", definition: "A conceptual group of layers. An element's `z-index` is only compared to other elements within the same stacking context." },
    { term: "Positioned Element", definition: "An element whose `position` property is `relative`, `absolute`, `fixed`, or `sticky`. `z-index` only affects these elements." },
    { term: "Root Stacking Context", definition: "The default stacking context created by the `<html>` element that contains all other elements." },
    { term: "Stacking Order", definition: "The set of rules that determines how elements and stacking contexts are painted from back to front on the page." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple z-index Ordering",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create three colored `div` squares.",
        "Give them all `position: absolute;`.",
        "Position them so they overlap.",
        "Give them `z-index` values of 1, 2, and 3 respectively and observe the stacking.",
        "Change the z-index of the first box to be the highest and see how it moves to the front."
      ]
    },
    {
      id: 2,
      title: "Creating a Modal Overlay",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a page with some text content.",
        "Create a `div` for a modal overlay (`position: fixed`, covers the whole screen, semi-transparent background) and another `div` inside it for the modal content.",
        "Give the overlay a high `z-index` (e.g., 100) and the content an even higher one (e.g., 101) to ensure they appear on top of all other page content."
      ]
    },
    {
      id: 3,
      title: "The Stacking Context Trap",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create two parent `div`s, `parent-1` and `parent-2`.",
        "Give `parent-1` `position: relative; z-index: 1;` and a background color.",
        "Give `parent-2` `position: relative; z-index: 2;` and a different background color. Position it to overlap `parent-1`.",
        "Inside `parent-1`, create a `child` div. Give it `position: absolute;` and `z-index: 999;`.",
        "Position the `child` to overlap with `parent-2`.",
        "Observe that even with `z-index: 999`, the child cannot escape its parent's stacking context and appears underneath `parent-2`."
      ]
    },
    {
      id: 4,
      title: "Fixing a Broken Dropdown",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a header with `position: relative` and `z-index: 10`.",
        "Create a main content area. Inside it, create a wrapper `div` that has `transform: rotate(0deg);` (this creates a stacking context!).",
        "Inside the wrapper, create a button and a dropdown menu (`position: absolute; z-index: 999;`).",
        "Observe how the dropdown appears underneath the header.",
        "To fix it, remove the `transform` property from the wrapper `div`. Now the dropdown will respect its high z-index and appear over the header."
      ]
    }
  ]
};
