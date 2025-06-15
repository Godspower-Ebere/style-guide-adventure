
import { DayLesson } from "../types";

export const day29: DayLesson = {
  day: 29,
  title: "CSS Selectors - Advanced",
  category: "Advanced CSS",
  description: "Dive deeper into CSS selectors with combinators, attribute selectors, pseudo-classes, and pseudo-elements for precise styling control.",
  learningObjectives: [
    "Master combinator selectors to target elements based on their relationship.",
    "Utilize attribute selectors to style elements based on their attributes and values.",
    "Understand and apply pseudo-classes to style elements in specific states (e.g., :hover, :nth-child).",
    "Learn to use pseudo-elements to style specific parts of an element (e.g., ::before, ::after)."
  ],
  detailedExplanation: `
Advanced CSS selectors give you the power to target elements with incredible precision, leading to cleaner HTML and more maintainable stylesheets.

## Combinator Selectors
Combinators define the relationship between selectors.

### 1. Descendant Selector (space)
Selects all elements that are descendants of a specified element.
\`\`\`css
/* Selects all <p> elements inside a <div> */
div p {
  color: blue;
}
\`\`\`

### 2. Child Selector (>)
Selects all elements that are the direct children of a specified element.
\`\`\`css
/* Selects only <p> elements that are direct children of a <div> */
div > p {
  border-left: 3px solid red;
}
\`\`\`

### 3. Adjacent Sibling Selector (+)
Selects an element that is immediately preceded by a specified element.
\`\`\`css
/* Selects the first <p> that comes right after an <h1> */
h1 + p {
  font-style: italic;
}
\`\`\`

### 4. General Sibling Selector (~)
Selects all elements that are siblings of a specified element.
\`\`\`css
/* Selects all <p> elements that are siblings of and come after an <h1> */
h1 ~ p {
  text-decoration: underline;
}
\`\`\`

## Attribute Selectors
Style elements based on their attributes and attribute values.

\`\`\`html
<a href="https://example.com" target="_blank">External Link</a>
<a href="/about">Internal Link</a>
<a href="document.pdf" download>Download Link</a>
\`\`\`

\`\`\`css
/* Has the target attribute */
a[target] {
  background-color: yellow;
}

/* target attribute equals "_blank" */
a[target="_blank"] {
  font-weight: bold;
}

/* href attribute contains "example" */
a[href*="example"] {
  color: green;
}

/* href attribute starts with "https" */
a[href^="https"] {
  padding-right: 15px;
}

/* href attribute ends with ".pdf" */
a[href$=".pdf"] {
  color: red;
}
\`\`\`

## Pseudo-Classes
A pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s).

### User Action Pseudo-classes
\`\`\`css
a:hover { color: red; } /* When mouse is over it */
input:focus { border-color: blue; } /* When it has focus */
button:active { transform: translateY(1px); } /* When it is being clicked */
\`\`\`

### Structural Pseudo-classes
\`\`\`css
li:first-child { font-weight: bold; } /* First <li> in a list */
li:last-child { color: gray; } /* Last <li> in a list */
p:nth-child(2) { color: navy; } /* The second child, if it's a <p> */
tr:nth-child(odd) { background-color: #f2f2f2; } /* Odd rows in a table */
p:not(.fancy) { font-family: sans-serif; } /* Any <p> without the .fancy class */
\`\`\`

## Pseudo-Elements
A pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s).

\`\`\`css
/* Style the first line of every <p> element */
p::first-line {
  font-size: 1.2em;
  font-weight: bold;
}

/* Style the first letter of every <p> element */
p::first-letter {
  font-size: 3em;
  float: left;
  margin-right: 5px;
}

/* Insert content before every <p> element */
p::before {
  content: "-> ";
  color: green;
}

/* Insert content after every <a> with a specific attribute */
a[target="_blank"]::after {
  content: " (opens in new tab)";
  font-size: 0.8em;
  color: #555;
}

/* Style selected text */
::selection {
  background-color: #3498db;
  color: white;
}
\`\`\`

## Complete Example
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Advanced Selectors Demo</title>
  <style>
    body { font-family: sans-serif; }
    article > p { line-height: 1.6; }
    h2 + p { margin-top: 0; }
    a[href$=".pdf"]::after { content: ' (PDF)'; color: red; }
    ul li:nth-child(even) { background-color: #eef; }
    ul li:hover { background-color: #ddf; }
    p::first-letter {
      font-size: 200%;
      color: #8A2BE2;
      font-weight: bold;
    }
    p:not(.special)::selection {
        background: yellow;
        color: black;
    }
    .special { color: green; }
  </style>
</head>
<body>
  <article>
    <h2>Article Title</h2>
    <p class="special">This is the first paragraph. It is special.</p>
    <p>This is the second paragraph. It will have a drop-cap first letter.</p>
    <div>
      <p>This paragraph is inside a div, but is still a direct child of the article.</p>
    </div>
  </article>
  
  <ul>
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
    <li>List Item 4</li>
  </ul>

  <a href="https://example.com" target="_blank">External Site</a>
  <a href="report.pdf">Download Report</a>
</body>
</html>
\`\`\`
`,
  keyTerms: [
    { term: "Combinator", definition: "A character that sits between two selectors to define a relationship between them (e.g., '>', '+', '~')." },
    { term: "Pseudo-class", definition: "A keyword added to a selector to define a special state of an element (e.g., :hover, :nth-child)." },
    { term: "Pseudo-element", definition: "A keyword added to a selector to style a specific part of an element (e.g., ::before, ::first-letter)." },
    { term: "Attribute Selector", definition: "A selector that targets elements based on the presence or value of an HTML attribute." },
    { term: "Specificity", definition: "The set of rules browsers use to determine which CSS style is applied to an element when multiple conflicting styles exist." }
  ],
  exercises: [
    {
      id: 1,
      title: "Styling a Navigation Menu",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML file with a <nav> element containing an unordered list (<ul>) of links (<a>).",
        "Use a child combinator (>) to style only the <ul> that is a direct child of the <nav>.",
        "Use the :hover pseudo-class to change the background color of list items when the user mouses over them.",
        "Use the :first-child and :last-child pseudo-classes to give the first and last list items unique styles (e.g., rounded corners).",
        "Use an attribute selector to style any link that goes to an external site (e.g., `a[target=\"_blank\"]`)."
      ]
    },
    {
      id: 2,
      title: "Zebra-Striping a Table",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an HTML file with a <table> containing a <thead>, <tbody>, and at least 6 rows of data.",
        "Use the :nth-child(odd) or :nth-child(even) pseudo-class to apply a light background color to alternating rows in the <tbody>.",
        "Use the adjacent sibling combinator (+) to add a top border to the <tbody> that directly follows the <thead>.",
        "Style the first column of the table differently. (Hint: Use `td:first-child`).",
        "Add a hover effect to table rows within the <tbody>."
      ]
    },
    {
      id: 3,
      title: "Custom List Bullets and Quotes",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create an HTML file with an unordered list (<ul>).",
        "Remove the default list bullets using `list-style-type: none;`.",
        "Use the ::before pseudo-element on the list items (<li>) to add custom bullets (e.g., a Unicode character like '✔' or an image using `content: url(...)`).",
        "Create a <blockquote> element with a paragraph inside.",
        "Use the ::before and ::after pseudo-elements on the <blockquote> to add decorative quotation marks.",
        "Use the ::selection pseudo-element to change the text and background color when a user highlights text on the page."
      ]
    },
    {
      id: 4,
      title: "Advanced Form Styling",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create an HTML form with various input types: text, email, password, and a checkbox.",
        "Use attribute selectors to style inputs based on their type (e.g., `input[type=\"text\"]`).",
        "Use the :focus pseudo-class to change the border and box-shadow of an input when it's active.",
        "Use the :required pseudo-class to add a visual indicator (like a red asterisk with ::after) to required fields.",
        "Use the :checked pseudo-class with the adjacent sibling combinator (+) to change the style of a <label> when its associated checkbox is checked."
      ]
    },
    {
      id: 5,
      title: "Creating a Stylish Article Layout",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create an HTML document structured like a blog article with <h1>, <h2>, and multiple <p> tags.",
        "Use the ::first-letter pseudo-element on the first paragraph after the <h1> to create a large drop cap.",
        "Use the ::first-line pseudo-element to make the first line of every paragraph bold.",
        "Use the general sibling combinator (~) to apply a specific style (e.g., `font-style: italic`) to all paragraphs that follow an <h2> tag.",
        "Use the :not() pseudo-class to apply a style to all paragraphs except one with a special class (e.g., `.intro`).",
        "Use attribute selectors to find all links that end with '.pdf' and add a PDF icon using the ::after pseudo-element."
      ]
    }
  ]
};
