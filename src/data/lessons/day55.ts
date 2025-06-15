
import { DayLesson } from "../types";

export const day55: DayLesson = {
  day: 55,
  title: "CSS Pseudo-elements: Styling Parts of an Element",
  category: "Advanced CSS",
  description: "Learn to style specific parts of an element, or even insert generated content, using the power of CSS pseudo-elements like `::before` and `::after`.",
  learningObjectives: [
    "Understand the key difference between pseudo-classes and pseudo-elements.",
    "Master `::before` and `::after` to insert and style generated content for decorative purposes.",
    "Style the first line or first letter of a text block with `::first-line` and `::first-letter`.",
    "Customize the appearance of user-selected text with `::selection`.",
    "Style form element placeholders and list markers with `::placeholder` and `::marker`."
  ],
  detailedExplanation: `
While pseudo-classes style an element based on its *state*, a pseudo-element lets you style a specific *part* of an element. It's like a 'phantom' element that you can style independently.

The standard syntax is a double colon (\\\`::\\\`) to distinguish them from pseudo-classes (e.g., \\\`p::first-line\\\`). While browsers support single-colon for legacy reasons, it's best practice to use the double colon for pseudo-elements.

### \\\`::before\\\` and \\\`::after\\\`
These are the most powerful and common pseudo-elements. They create a new 'element' just before or just after the *content* of the selected element.

**They have one critical requirement: the \\\`content\\\` property.** Even if you want it to be empty, you must declare \\\`content: '';\\\`.

\\\`\\\`\\\`css
/* Adding quotation marks to a blockquote */
blockquote::before {
  content: '"';
  font-size: 3em;
  margin-right: 0.1em;
}
blockquote::after {
  content: '"';
  font-size: 3em;
  margin-left: 0.1em;
}

/* Creating a decorative overlay on an image container */
.image-container::after {
  content: ''; /* Must be present! */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  /* You can transition this on hover for cool effects */
}
\\\`\\\`\\\`
**Important:** Content added with \\\`::before\\\`/\`::after\\\` is **not** in the DOM. Screen readers may ignore it, so it should only be used for decorative purposes, not for important content.

### Typographic Pseudo-elements
These give you fine-grained control over text blocks.

- \\\`::first-letter\\\`: Styles the first letter of a block-level element. Perfect for creating "drop caps".
- \\\`::first-line\\\`: Styles the first line of a block-level element. The length of the line depends on the container's width.

\\\`\\\`\\\`css
p::first-letter {
  font-size: 3rem;
  font-weight: bold;
  float: left;
  margin-right: 0.5rem;
}

p::first-line {
  font-weight: bold;
  letter-spacing: 1px;
}
\\\`\\\`\\\`

### UI Pseudo-elements
These target parts of the browser's user interface.

- \\\`::selection\\\`: Styles the portion of the document that has been highlighted by the user (e.g., by clicking and dragging).
- \\\`::placeholder\\\`: Styles the placeholder text in an \\\`<input>\\\` or \\\`<textarea>\\\`.
- \\\`::marker\\\`: Styles the bullet point or number of a list item (\\\`<li>\\\`).

\\\`\\\`\\\`css
/* Custom selection styles */
::selection {
  background-color: #ffb7b7; /* A nice pink */
  color: #a50000;
}

/* Custom placeholder */
input::placeholder {
  color: #aaa;
  font-style: italic;
}

/* Custom list markers */
li::marker {
  color: blue;
  font-size: 1.2em;
}
\\\`\\\`\\\`
`,
  keyTerms: [
    { term: "Pseudo-element", definition: "A keyword added to a selector that lets you style a specific part of the selected element(s), such as `::first-letter` or `::before`." },
    { term: "::before / ::after", definition: "Pseudo-elements that create a child element within the selected element, before or after its actual content. Requires the `content` property." },
    { term: "Generated Content", definition: "Content that is not in the HTML source code but is inserted into the document via the CSS `content` property. It's not read by screen readers." },
    { term: "::first-letter / ::first-line", definition: "Typographic pseudo-elements that style the first letter or first line of a text block, respectively." },
    { term: "::selection", definition: "A pseudo-element that styles the part of a document currently highlighted by the user." },
    { term: "::marker", definition: "A pseudo-element that styles the marker (bullet or number) of a list item." }
  ],
  exercises: [
    {
      id: 1,
      title: "Custom List Bullets",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an unordered list `<ul>`.",
        "Use `list-style-type: none;` to remove the default bullets.",
        "Use the `::before` pseudo-element on the `<li>` tags.",
        "In the `::before` rule, set `content: '→ ';` (or any other character you like).",
        "Add some color and margin to your new pseudo-element bullet."
      ]
    },
    {
      id: 2,
      title: "Link with Underline Effect",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an `<a>` tag.",
        "Remove the default underline with `text-decoration: none;` and set `position: relative;`.",
        "Use the `::after` pseudo-element on the link.",
        "Style the `::after` to be an absolutely positioned block at the bottom of the link, with a height of 2px and a background color.",
        "Set its initial width to 0 and `transform-origin: left;`.",
        "On `a:hover::after`, change the width to 100%. Add a `transition` to the `::after` element for a smooth effect."
      ]
    },
    {
      id: 3,
      title: "Styling a Pull-Quote",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a `<blockquote>` element.",
        "Use the `::before` and `::after` pseudo-elements to add large, stylized quotation marks.",
        "Position the `::before` quote at the top-left of the blockquote and the `::after` quote at the bottom-right.",
        "Use `position: absolute` on the pseudo-elements and `position: relative` on the blockquote to achieve this.",
        "Give them a low opacity and a large font size for a professional look."
      ]
    },
    {
      id: 4,
      title: "Branded UI Styling",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Create a page with some text and an input field with a placeholder.",
        "Use the `::selection` pseudo-element to change the background and text color of highlighted text to match your brand's colors.",
        "Use the `::placeholder` pseudo-element to change the color and style of the input's placeholder text."
      ]
    }
  ]
};
