
import { DayLesson } from "../types";

export const day32: DayLesson = {
  day: 32,
  title: "CSS Box Model",
  category: "CSS Basics",
  description: "Understand the fundamental CSS Box Model, which governs how elements are sized and spaced on a web page.",
  learningObjectives: [
    "Identify the four components of the box model: content, padding, border, and margin.",
    "Understand the difference between `content-box` and `border-box` sizing.",
    "Apply padding, border, and margin properties to control element spacing.",
    "Debug layout issues related to the box model."
  ],
  detailedExplanation: `
Every element on a web page is a rectangular box. The CSS Box Model describes how this box is structured and how its size is calculated. It is one of the most important concepts in CSS.

## Components of the Box Model
The box model consists of four parts, from the inside out:

1.  **Content**: The actual content of the box, where text and images appear. Its size is defined by \`width\` and \`height\`.
2.  **Padding**: The space between the content and the border. It's transparent.
3.  **Border**: A border that goes around the padding and content.
4.  **Margin**: The space outside the border. It separates the element from other elements.

![Box Model Diagram](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model/box-model-standard.png)

## Box Model Properties

### padding
Sets the padding on all four sides. You can also set them individually.
\\\`\\\`\\\`css
.box {
  padding: 20px; /* 20px on all sides */
  /* padding-top, padding-right, padding-bottom, padding-left */
  padding: 10px 20px 10px 20px; /* Top, Right, Bottom, Left */
  padding: 10px 20px; /* 10px top/bottom, 20px left/right */
}
\\\`\\\`\\\`

### border
A shorthand for \`border-width\`, \`border-style\`, and \`border-color\`.
\\\`\\\`\\\`css
.box {
  border: 2px solid #333;
}
\\\`\\\`\\\`

### margin
Sets the margin on all four sides. Margins of adjacent elements can "collapse".
\\\`\\\`\\\`css
.box {
  margin: 15px; /* 15px on all sides */
  margin: 10px 20px; /* 10px top/bottom, 20px left/right */
}
\\\`\\\`\\\`

## box-sizing: The Key to Sanity
By default, the \`width\` and \`height\` you set applies *only to the content box*. Padding and borders are added *on top* of that, which can make sizing difficult.

### content-box (default)
Total width = \`width\` + \`padding-left\` + \`padding-right\` + \`border-left\` + \`border-right\`

### border-box
Total width = \`width\` (The \`width\` property now includes content, padding, and border).

This is much more intuitive. It's a common best practice to apply this to all elements.
\\\`\\\`\\\`css
* {
  box-sizing: border-box;
}
\\\`\\\`\\\`
With \`box-sizing: border-box;\`, if you set an element's width to 100px, it will always be 100px wide, regardless of its padding or border thickness.

## Example
\\\`\\\`\\\`html
<div class="box1">I am content-box.</div>
<div class="box2">I am border-box.</div>
<style>
  div {
    width: 200px;
    padding: 20px;
    border: 5px solid red;
    margin: 10px;
  }
  .box1 { box-sizing: content-box; } /* Total width: 200 + 40 + 10 = 250px */
  .box2 { box-sizing: border-box; }  /* Total width: 200px */
</style>
\\\`\\\`\\\`
`,
  keyTerms: [
    { term: "Content", definition: "The area of an element's box where text and images appear." },
    { term: "Padding", definition: "The transparent space between an element's content and its border." },
    { term: "Border", definition: "A line that is drawn around the padding of an element's box." },
    { term: "Margin", definition: "The transparent space outside of an element's border, separating it from other elements." },
    { term: "box-sizing", definition: "A CSS property that alters the default CSS box model used to calculate widths and heights of elements." },
    { term: "border-box", definition: "A value for `box-sizing` where an element's specified width and height include its padding and border." }
  ],
  exercises: [
    {
      id: 1,
      title: "Exploring the Box Model",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML file with a single <div>.",
        "Give the div a width, height, padding, border, and margin.",
        "Use your browser's developer tools to inspect the div and see the box model representation.",
        "Change the padding and border values and see how it affects the total size of the element."
      ]
    },
    {
      id: 2,
      title: "Content-box vs. Border-box",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an HTML file with two <div> elements.",
        "Give both divs the exact same width, padding, and border styles.",
        "Set `box-sizing: content-box;` on the first div.",
        "Set `box-sizing: border-box;` on the second div.",
        "Observe the difference in their final rendered widths in the browser."
      ]
    },
    {
      id: 3,
      title: "Building a Card Component",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create an HTML structure for a 'card' (e.g., a div with an image, a heading, and a paragraph).",
        "Set a fixed width for the card.",
        "Use `box-sizing: border-box;` on the card.",
        "Use padding to create internal spacing within the card.",
        "Use margin to create spacing between multiple cards if you create more than one."
      ]
    },
    {
      id: 4,
      title: "Creating a Button",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a <button> element in HTML.",
        "Style the button using padding to make it larger and easier to click.",
        "Add a border to the button.",
        "Use margin to ensure there is space between this button and any adjacent elements.",
        "Ensure the button's size is predictable by using `box-sizing: border-box;`."
      ]
    },
    {
      id: 5,
      title: "Layout with Margins",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create an HTML page with a header, a main content area, and a footer.",
        "Use margins to create vertical space between these three sections.",
        "Inside the main content area, create two columns (as two divs).",
        "Use `margin-right` on the first column to create a gap between it and the second column.",
        "Experiment with `margin: 0 auto;` on a container div to center your layout on the page."
      ]
    }
  ]
};
