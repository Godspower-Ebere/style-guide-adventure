
import { DayLesson } from "../types";

export const day54: DayLesson = {
  day: 54,
  title: "CSS Pseudo-classes: Styling Based on State",
  category: "Advanced CSS",
  description: "Learn to apply styles to elements based on their state or position, such as when they are hovered over, focused, or are the first child in a list.",
  learningObjectives: [
    "Understand what a pseudo-class is and how it differs from a regular class.",
    "Use dynamic pseudo-classes like `:hover`, `:active`, `:focus`, and `:visited` to create interactive UI.",
    "Master structural pseudo-classes like `:first-child`, `:last-child`, and `:nth-child()` for powerful selection.",
    "Use form-related pseudo-classes like `:checked`, `:disabled`, and `:required` to style form controls.",
    "Understand the `:not()` negation pseudo-class to exclude elements from a selection."
  ],
  detailedExplanation: `
A pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). It's not a class you add in your HTML; it's a 'virtual' class that the browser applies based on what's happening. The syntax is a single colon followed by the pseudo-class name (e.g., \`:hover\`).

### Dynamic (User Action) Pseudo-classes
These apply when the user interacts with an element.

- \`:hover\`: Applies when the user's mouse pointer is over an element.
- \`:active\`: Applies when an element is being activated by the user (e.g., while a button is being clicked).
- \`:focus\`: Applies when an element has received focus, either by mouse click or keyboard tabbing. Crucial for accessibility.
- \`:visited\`: Applies to links (\`<a>\`) that the user has already visited.

\\\`\\\`\\\`css
/* Style a button on hover and click */
button:hover {
  background-color: darkblue;
  cursor: pointer;
}
button:active {
  transform: translateY(2px);
}

/* Style an input when it's focused */
input:focus {
  border-color: blue;
  outline: none; /* Often good to remove default outline and apply a custom border or box-shadow */
}
\\\`\\\`\\\`
**Note:** The order matters for link pseudo-classes: **L**o**V**e-**HA**te -> \`:link\`, \`:visited\`, \`:hover\`, \`:active\`.

### Structural Pseudo-classes
These select elements based on their position in the document tree.

- \`:first-child\` & \`:last-child\`: Selects the first or last element among a group of siblings.
- \`:nth-child(n)\`: Selects elements based on a formula. \`n\` can be a number (\`2\`), a keyword (\`odd\`, \`even\`), or a formula (\`2n+1\`).
- \`:nth-of-type(n)\`: Similar to \`:nth-child\`, but it only considers elements of the same type (e.g., only \`<p>\` tags).
- \`:only-child\`: Selects an element that is the only child of its parent.

\\\`\\\`\\\`css
/* Style the first and last items in a list differently */
li:first-child {
  font-weight: bold;
}
li:last-child {
  border-bottom: none;
}

/* Zebra-striping a table */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Select the 3rd paragraph */
p:nth-of-type(3) {
  color: red;
}
\\\`\\\`\\\`

### Form Pseudo-classes
These are specific to form elements.

- \`:checked\`: Selects checkboxes or radio buttons that are checked.
- \`:disabled\` / \`:enabled\`: Selects form elements that are disabled or enabled.
- \`:required\` / \`:optional\`: Selects inputs that have the \`required\` attribute.
- \`:valid\` / \`:invalid\`: Selects inputs based on their content validation (e.g., an \`<input type="email">\` with an invalid address).

### Negation Pseudo-class
- \`:not(selector)\`: Selects every element that is *not* the specified selector.

\\\`\\\`\\\`css
/* Style all inputs that are NOT disabled */
input:not(:disabled) {
  border: 1px solid #ccc;
}
\\\`\\\`\\\`
`,
  keyTerms: [
    { term: "Pseudo-class", definition: "A keyword starting with a colon (:) that is added to a selector to specify a special state of the selected element." },
    { term: ":hover", definition: "A pseudo-class that applies styles when the user's cursor is over an element." },
    { term: ":focus", definition: "A pseudo-class that applies to an element that has received focus (e.g., by clicking or tabbing)." },
    { term: ":nth-child()", definition: "A structural pseudo-class that selects elements based on their position among siblings, using a number, keyword (odd/even), or formula." },
    { term: ":not()", definition: "A negation pseudo-class used to select elements that do not match the selector passed into it." }
  ],
  exercises: [
    {
      id: 1,
      title: "Interactive Button",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a simple `<button>`.",
        "Add a `:hover` state that changes its `background-color` and `color`.",
        "Add a `:focus` state that gives it a distinct `box-shadow` (e.g., `0 0 0 3px lightblue`).",
        "Add an `:active` state that slightly moves the button (e.g., `transform: scale(0.98);`)."
      ]
    },
    {
      id: 2,
      title: "Zebra-Striped List",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an unordered list `<ul>` with at least 5 list items `<li>`.",
        "Use the `:nth-child(odd)` or `:nth-child(even)` pseudo-class to give alternating list items a different background color.",
        "Use `:first-child` to make the text of the first item bold.",
        "Use `:last-child` to remove the bottom border from the final list item."
      ]
    },
    {
      id: 3,
      title: "Styling Form States",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a form with various inputs: a required text input, an optional text input, a disabled input, and a checkbox.",
        "Use `:required` to add a red asterisk after the label of the required input (using a pseudo-element is good for this!).",
        "Use `:disabled` to give the disabled input a greyed-out appearance.",
        "Use `:checked` on the checkbox's label to change its style when the box is checked."
      ]
    },
    {
      id: 4,
      title: "Exclude with :not()",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Create a `<div>` containing several `<p>` elements and one `<blockquote>`.",
        "Write a CSS rule that applies a style to all `<p>` elements inside the div, but NOT the `<blockquote>`.",
        "Then, add another rule that applies a style to all children of the div that are NOT the first child."
      ]
    }
  ]
};
