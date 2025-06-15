
import { DayLesson } from "../types";

export const day54: DayLesson = {
  day: 54,
  title: "Mastering Pseudo-classes: Styling States and Structures",
  category: "Advanced CSS",
  description: "Go beyond simple selectors by using pseudo-classes to style elements based on their state, position, or relation to other elements.",
  learningObjectives: [
    "Master user action pseudo-classes like `:hover`, `:active`, and `:focus` for interactive elements.",
    "Understand how to use link-related pseudo-classes: `:link` and `:visited`.",
    "Utilize structural pseudo-classes like `:first-child`, `:last-child`, and `:nth-child()` to target elements based on their position.",
    "Style form elements based on their state with `:checked`, `:disabled`, and `:valid`/`:invalid`."
  ],
  detailedExplanation: `
A pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). They let you apply styles that aren't based on the document tree, but on external factors like user interaction or element position.

The syntax is a colon (\`:\`) followed by the pseudo-class name (e.g., \`a:hover\`).

### 1. User Action Pseudo-classes
These apply when the user interacts with an element. They are essential for good UX.

- \`:hover\`: When the user's mouse pointer is over an element.
- \`:active\`: When the user is actively clicking or activating an element.
- \`:focus\`: When an element has received focus, either by mouse click or keyboard tabbing. Crucial for accessibility.
- \`:focus-within\`: Applies to a parent element if any of its descendants has focus. Great for highlighting an entire form group when you're typing in an input.

\`\`\`css
/* A well-styled button */
.button {
  transition: all 0.2s ease;
}
.button:hover {
  background-color: #555;
}
.button:active {
  transform: translateY(2px); /* Gives a "pressed" effect */
}
.button:focus {
  outline: 2px solid blue; /* Clear visual indicator for keyboard users */
}
\`\`\`

### 2. Link Pseudo-classes
These relate specifically to hyperlinks. The recommended order to define them is **L**o**V**e/**F**e**HA**te (LVFHA): `:link`, `:visited`, `:focus`, `:hover`, `:active`.

- \`:link\`: An unvisited link.
- \`:visited\`: A link the user has already visited. For privacy reasons, you can only change a limited set of properties, mainly color.

\`\`\`css
a:link { color: blue; }
a:visited { color: purple; }
\`\`\`

### 3. Structural Pseudo-classes
These select elements based on their position in the document structure relative to their siblings.

- \`:first-child\`: The first element among a group of siblings.
- \`:last-child\`: The last element among a group of siblings.
- \`:only-child\`: An element that is the only child of its parent.
- \`:nth-child(n)\`: The most powerful one. Selects an element based on a formula.
  - \`:nth-child(3)\`: The third child.
  - \`:nth-child(odd)\` or \`:nth-child(2n+1)\`: Odd-numbered children (1, 3, 5...).
  - \`:nth-child(even)\` or \`:nth-child(2n)\`: Even-numbered children (2, 4, 6...).
  - \`:nth-child(n+4)\`: Every child from the 4th onwards.
- \`:nth-of-type(n)\`: Similar to \`nth-child\`, but it only considers siblings of the *same element type*. (\`p:nth-of-type(2)\` selects the second paragraph, even if it's the third *child* overall).

\`\`\`css
/* Zebra-striping a list */
li:nth-child(even) {
  background-color: #f2f2f2;
}

/* Remove margin from the last paragraph */
p:last-child {
  margin-bottom: 0;
}
\`\`\`

### 4. Form and Input Pseudo-classes
These style form controls based on their current state.

- \`:checked\`: A checkbox or radio button that is selected.
- \`:disabled\`: An input element that is disabled.
- \`:enabled\`: An input element that is not disabled.
- \`:required\` / \`:optional\`: An input that has the \`required\` attribute or not.
- \`:valid\` / \`:invalid\`: An input whose content validates (or doesn't) against its type (e.g., a valid email address in \`<input type="email">\`).

\`\`\`css
input:invalid {
  border-color: red;
}
input:valid {
  border-color: green;
}
input:disabled {
  background-color: #eee;
  cursor: not-allowed;
}
\`\`\`
`,
  keyTerms: [
    { term: "Pseudo-class", definition: "A keyword added to a selector that specifies a special state of the selected element(s), like `:hover` or `:first-child`." },
    { term: "State", definition: "A temporary condition of an element based on user interaction or its attributes (e.g., hover, focus, checked, disabled)." },
    { term: "Structural Position", definition: "An element's position within the document tree relative to its parent and sibling elements." },
    { term: ":nth-child(n)", definition: "A powerful pseudo-class that selects elements based on their position among siblings using a numeric formula." },
    { term: ":focus-within", definition: "A pseudo-class that applies to a parent element when any of its descendant elements receives focus." },
    { term: "LVFHA Order", definition: "The recommended order for defining link pseudo-classes (`:link`, `:visited`, `:focus`, `:hover`, `:active`) to ensure they work correctly." }
  ],
  exercises: [
    {
      id: 1,
      title: "Styling an Interactive Button",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a `<button>` element.",
        "Add a default style to it.",
        "Add a `:hover` style to change its background color.",
        "Add an `:active` style to slightly move the button down (`transform: translateY(1px);`) to simulate a press.",
        "Add a `:focus` style with a distinct `outline` to show when it's selected via keyboard."
      ]
    },
    {
      id: 2,
      title: "Zebra-Striped Table",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an HTML `<table>` with a `<thead>` and a `<tbody>`.",
        "Populate the table with at least 6 rows (`<tr>`) of data.",
        "Use the `:nth-child(even)` pseudo-class to give every even table row in the `<tbody>` a light gray background color.",
        "Add a hover effect to all rows in the `<tbody>`."
      ]
    },
    {
      id: 3,
      title: "Advanced List Styling",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create an unordered list `<ul>` with 10 list items `<li>`.",
        "Use `:first-child` to make the first item's text bold.",
        "Use `:last-child` to remove the bottom border from the last item.",
        "Use `:nth-child(3)` to give the third item a unique background color.",
        "Use `:nth-child(n+6)` to make the text color of the 6th, 7th, 8th... items light gray."
      ]
    },
    {
      id: 4,
      title: "Interactive Form Highlighting",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a form with several `div`s, each containing a `<label>` and an `<input>`.",
        "Use the `:focus-within` pseudo-class on the parent `div`s.",
        "When an input is focused, make the `:focus-within` style give the parent `div` a subtle box-shadow and a different background color.",
        "This will visually group the label and its input for the user."
      ]
    }
  ]
};
