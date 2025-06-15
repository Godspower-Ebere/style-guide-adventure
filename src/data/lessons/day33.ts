
import { DayLesson } from "../types";

export const day33: DayLesson = {
  day: 33,
  title: "CSS Margins and Padding",
  category: "CSS Basics",
  description: "Deep dive into controlling space inside and outside elements with margin and padding, and understand the concept of margin collapsing.",
  learningObjectives: [
    "Differentiate between margin and padding.",
    "Use shorthand and longhand properties for margin and padding.",
    "Understand how margin collapsing works and how to manage it.",
    "Apply negative margins for creative layouts."
  ],
  detailedExplanation: `
Margin and padding are two of the most commonly used properties in CSS for controlling layout and spacing. They are part of the CSS Box Model.

- **Padding**: The space between the content of an element and its border. It's the *inner space*.
- **Margin**: The space outside an element's border. It's the *outer space* that separates it from other elements.

## Padding Properties
You can control the padding on all four sides of an element.

\`\`\`css
.box {
  /* Longhand properties */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;

  /* Shorthand: top right bottom left */
  padding: 10px 20px 10px 20px;

  /* Shorthand: top/bottom left/right */
  padding: 10px 20px;

  /* Shorthand: all four sides equal */
  padding: 15px;
}
\`\`\`

## Margin Properties
Margin properties work just like padding properties, but they control the space outside the border.

\`\`\`css
.box {
  /* Longhand properties */
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;

  /* Shorthand properties work the same as padding */
  margin: 10px 20px;
}
\`\`\`

## Margin Collapsing
This is a key concept that can be confusing at first. When the vertical margins of two elements touch, they can "collapse" into a single margin whose size is the *largest* of the individual margins.

This happens in three main scenarios:

1.  **Adjacent Siblings**: The bottom margin of one element collapses with the top margin of the next element.
    \`\`\`html
    <p class="top">Margin bottom of 20px</p>
    <p class="bottom">Margin top of 30px</p>
    <style>
      .top { margin-bottom: 20px; }
      .bottom { margin-top: 30px; }
      /* The space between them will be 30px, not 50px */
    </style>
    \`\`\`
2.  **Parent and First/Last Child**: If there is no padding or border between a parent and its first child, their top margins collapse. The same happens for the bottom margins of a parent and its last child.
3.  **Empty Blocks**: If a block has no content, padding, or border, its top and bottom margins collapse.

**How to prevent margin collapse?** Add a border or padding to the parent element, or change its display property (e.g. to \`flex\`).

## Centering with Margin
A common trick is to center a block-level element horizontally by setting its left and right margins to \`auto\`.
\`\`\`css
.container {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  /* Shorthand: */
  margin: 0 auto;
}
\`\`\`

## Negative Margins
You can use negative values for margins to pull elements closer together or create overlapping effects.
\`\`\`css
.item1 {
  margin-bottom: 20px;
}
.item2 {
  /* Pull item2 up by 10px, overlapping item1 */
  margin-top: -10px;
}
\`\`\`
This can be useful for advanced layout techniques but should be used with care.
`,
  keyTerms: [
    { term: "Padding", definition: "The inner space of an element, between its content and its border." },
    { term: "Margin", definition: "The outer space of an element, which separates it from neighboring elements." },
    { term: "Margin Collapsing", definition: "The behavior where adjacent vertical margins of elements combine into a single margin." },
    { term: "Shorthand Properties", definition: "CSS properties that let you set the values of multiple other CSS properties simultaneously (e.g., `margin` or `padding`)." },
    { term: "margin: 0 auto", definition: "A common CSS pattern used to horizontally center a block-level element that has a defined width." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Spacing with a Card",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML file with a <div> with the class 'card'.",
        "Give the card a width and a border so you can see its edges.",
        "Add an <h1> and a <p> inside the card.",
        "Use `padding` on the card to create space between the text and the border.",
        "Use `margin` on the card to create space between the card and the edge of the browser window."
      ]
    },
    {
      id: 2,
      title: "Shorthand Practice",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create another card element.",
        "Use the `padding` shorthand to set 20px of padding on the top and bottom, and 40px on the left and right.",
        "Use the `margin` shorthand to set 50px of margin on all sides.",
        "Inspect the element in your browser's dev tools to confirm the values were applied correctly."
      ]
    },
    {
      id: 3,
      title: "Observing Margin Collapse",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create an HTML file with two <p> elements, one after the other.",
        "Give the first paragraph a `margin-bottom` of 30px.",
        "Give the second paragraph a `margin-top` of 40px.",
        "Inspect the space between them. Notice that the total margin is 40px (the larger of the two), not 70px.",
        "Now, wrap the second paragraph in a `div`. Add `padding-top: 1px` to the div. Observe how this prevents the margins from collapsing."
      ]
    },
    {
      id: 4,
      title: "Creating a Button Bar",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create an HTML file with three <button> elements inside a <div>.",
        "Use `padding` on the buttons to make their clickable area larger (e.g., 10px vertically and 20px horizontally).",
        "Use `margin` on the buttons to create space *between* them (e.g., `margin-right: 10px` on all but the last button).",
        "Use `margin: 0 auto` on the container <div> to center the entire button bar on the page."
      ]
    },
    {
      id: 5,
      title: "Overlapping Profile Pictures",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a list of profile pictures using <img> tags.",
        "Give each image a circular border and a fixed size (e.g., width and height of 50px).",
        "Set `display: inline-block` on the images.",
        "Apply a negative `margin-left` (e.g., -15px) to all images *except the first one*.",
        "This will cause the images to overlap, creating a stacked effect common in UI design."
      ]
    }
  ]
};
