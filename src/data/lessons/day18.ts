
import { DayLesson } from "../types";

export const day18: DayLesson = {
  day: 18,
  title: "CSS Selectors - Targeting Elements Precisely",
  category: "CSS Basics",
  description: "Master different types of CSS selectors to target specific elements and create more precise and efficient styles.",
  learningObjectives: [
    "Understand and use element, class, and ID selectors effectively.",
    "Learn descendant and child selectors for targeting nested elements.",
    "Master attribute selectors for more specific targeting.",
    "Understand selector specificity and how it affects styling."
  ],
  detailedExplanation: `
CSS selectors are patterns that determine which HTML elements to style. Understanding selectors is crucial for effective CSS.

## Basic Selectors Review

### Universal Selector
Targets all elements:
\\\`\\\`\\\`css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
\\\`\\\`\\\`

### Element Selector
Targets all elements of a specific type:
\\\`\\\`\\\`css
h1 { color: blue; }
p { font-size: 16px; }
a { text-decoration: none; }
\\\`\\\`\\\`

### Class Selector
Targets elements with specific class:
\\\`\\\`\\\`css
.button { background-color: blue; }
.highlight { background-color: yellow; }
.large-text { font-size: 24px; }
\\\`\\\`\\\`

### ID Selector
Targets element with specific ID:
\\\`\\\`\\\`css
#header { background-color: navy; }
#navigation { position: fixed; }
#footer { text-align: center; }
\\\`\\\`\\\`

## Combination Selectors

### Multiple Selectors
Apply same styles to multiple elements:
\\\`\\\`\\\`css
h1, h2, h3 {
  font-family: 'Arial', sans-serif;
  color: #333;
}

.button, .link, .nav-item {
  text-decoration: none;
  padding: 10px;
}
\\\`\\\`\\\`

### Descendant Selector (Space)
Targets elements nested inside other elements:
\\\`\\\`\\\`css
/* Targets all p elements inside article elements */
article p {
  line-height: 1.6;
  margin-bottom: 15px;
}

/* Targets all links inside navigation */
nav a {
  color: white;
  font-weight: bold;
}
\\\`\\\`\\\`

**HTML:**
\\\`\\\`\\\`html
<article>
  <p>This paragraph will be styled.</p>
  <div>
    <p>This nested paragraph will also be styled.</p>
  </div>
</article>
\\\`\\\`\\\`

### Child Selector (>)
Targets direct children only:
\\\`\\\`\\\`css
/* Only direct li children of ul */
ul > li {
  list-style-type: square;
}

/* Only direct p children of main */
main > p {
  font-size: 18px;
}
\\\`\\\`\\\`

**HTML:**
\\\`\\\`\\\`html
<ul>
  <li>Direct child - styled</li>
  <li>Direct child - styled
    <ul>
      <li>Nested child - not styled by ul > li</li>
    </ul>
  </li>
</ul>
\\\`\\\`\\\`

## Attribute Selectors

### Basic Attribute Selector
Targets elements with specific attributes:
\\\`\\\`\\\`css
/* All elements with title attribute */
[title] {
  border-bottom: 1px dotted;
}

/* All inputs with required attribute */
[required] {
  border: 2px solid red;
}
\\\`\\\`\\\`

### Attribute Value Selectors
\\\`\\\`\\\`css
/* Exact match */
[type="text"] {
  border: 1px solid #ccc;
}

/* Contains word */
[class~="button"] {
  padding: 10px 20px;
}

/* Starts with */
[href^="https"] {
  color: green;
}

/* Ends with */
[href$=".pdf"] {
  background: url('pdf-icon.png') no-repeat left;
  padding-left: 20px;
}

/* Contains substring */
[href*="google"] {
  color: #4285f4;
}
\\\`\\\`\\\`

## Advanced Selectors

### Adjacent Sibling Selector (+)
Targets element immediately following another:
\\\`\\\`\\\`css
/* p immediately after h2 */
h2 + p {
  font-weight: bold;
  margin-top: 0;
}
\\\`\\\`\\\`

### General Sibling Selector (~)
Targets all siblings after an element:
\\\`\\\`\\\`css
/* All p elements after h2 */
h2 ~ p {
  color: #666;
}
\\\`\\\`\\\`

## Selector Specificity
CSS applies styles based on specificity rules:

1. **Inline styles** (style attribute) - Highest specificity
2. **IDs** - High specificity  
3. **Classes, attributes, pseudo-classes** - Medium specificity
4. **Elements** - Low specificity

\\\`\\\`\\\`css
/* Specificity: 0,0,1,1 (1 class, 1 element) */
p.highlight { color: red; }

/* Specificity: 0,1,0,1 (1 ID, 1 element) */  
#content p { color: blue; }

/* The ID selector wins - text will be blue */
\\\`\\\`\\\`

## Practical Examples

### Navigation Styling
\\\`\\\`\\\`css
/* Main navigation */
nav ul {
  list-style: none;
  display: flex;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav ul li a:hover {
  color: #007bff;
}
\\\`\\\`\\\`

### Form Styling
\\\`\\\`\\\`css
/* All form inputs */
input, textarea, select {
  font-family: inherit;
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ddd;
}

/* Required fields */
input[required] {
  border-left: 4px solid #ff6b6b;
}

/* Specific input types */
input[type="email"] {
  background: url('email-icon.png') no-repeat right 10px center;
  padding-right: 35px;
}

input[type="submit"] {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
\\\`\\\`\\\`

### Card Component Styling
\\\`\\\`\\\`css
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.card h3 {
  margin-top: 0;
  color: #333;
}

.card p {
  color: #666;
  line-height: 1.5;
}

.card .button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
}
\\\`\\\`\\\`
    `,
  keyTerms: [
    { term: "Selector", definition: "A pattern that matches HTML elements to apply styles to them." },
    { term: "Descendant Selector", definition: "Selects elements nested inside other elements (using space)." },
    { term: "Child Selector", definition: "Selects direct children of an element (using >)." },
    { term: "Attribute Selector", definition: "Selects elements based on their attributes or attribute values." },
    { term: "Specificity", definition: "The weight given to CSS selectors to determine which styles apply." },
    { term: "Sibling Selector", definition: "Selects elements that share the same parent (+ for adjacent, ~ for general)." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Selector Practice",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'selector-practice.html' with various HTML elements.",
        "Add headings, paragraphs, lists, and links.",
        "Create CSS that styles elements using different selector types.",
        "Use element selectors, class selectors, and ID selectors.",
        "Test that all selectors work as expected."
      ]
    },
    {
      id: 2,
      title: "Navigation Menu Styling",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'navigation.html' with a complete navigation menu.",
        "Use nested ul and li elements for the menu structure.",
        "Apply CSS using descendant selectors to style the navigation.",
        "Style links differently when they're inside the navigation.",
        "Use child selectors to target specific menu levels."
      ]
    },
    {
      id: 3,
      title: "Form Styling with Attribute Selectors",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'contact-form.html' with a comprehensive contact form.",
        "Include various input types: text, email, tel, textarea, submit.",
        "Use attribute selectors to style different input types differently.",
        "Style required fields with special visual indicators.",
        "Use descendant selectors to organize form section styling.",
        "Create a visually appealing and user-friendly form."
      ]
    }
  ]
};
