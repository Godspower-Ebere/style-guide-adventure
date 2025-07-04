
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
CSS selectors are like the GPS of styling - they help you navigate to exactly the right elements on your webpage. Think of them as incredibly precise ways to say "Hey, I want to style THIS specific element, not that one over there."

## Basic Selectors - Your Foundation

### Universal Selector - The "Select Everything" Tool
The asterisk (*) selects every single element on your page:

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

This is super useful for CSS resets - clearing default browser styles to start fresh.

### Element Selectors - By Tag Name
Target all elements of a specific type:

h1 {
    color: #2c3e50;
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 30px;
}

p {
    line-height: 1.8;
    margin-bottom: 20px;
    color: #333;
}

a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #2980b9;
}

### Class Selectors - The Flexible Choice
Classes are like labels you can stick on any element:

.button {
    background-color: #3498db;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #2980b9;
}

.highlight {
    background-color: #f1c40f;
    padding: 15px;
    border-left: 4px solid #f39c12;
    margin: 20px 0;
}

.warning {
    background-color: #e74c3c;
    color: white;
    padding: 15px;
    border-radius: 4px;
    font-weight: bold;
}

**HTML usage:**
<button class="button">Click Me</button>
<div class="highlight">This is highlighted content</div>
<p class="warning">Warning: This is important!</p>

### ID Selectors - The Unique Identifier
IDs are for one-of-a-kind elements:

#header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 60px 0;
    text-align: center;
}

#navigation {
    position: sticky;
    top: 0;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 1000;
}

#footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 40px 0;
    margin-top: 60px;
}

## Combination Selectors - Getting Specific

### Multiple Selectors - Same Style, Different Elements
Apply the same styles to multiple elements:

h1, h2, h3, h4 {
    font-family: 'Georgia', serif;
    color: #2c3e50;
    font-weight: bold;
}

.button, .link-button, .submit-btn {
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.3s ease;
}

### Descendant Selector - Targeting Nested Elements
Use a space to target elements inside other elements:

/* Style all paragraphs inside articles */
article p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 20px;
    text-align: justify;
}

/* Style all links inside navigation */
nav a {
    display: inline-block;
    padding: 15px 20px;
    color: #333;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
}

nav a:hover {
    color: #3498db;
}

/* Style list items inside footer */
footer li {
    display: inline-block;
    margin: 0 15px;
}

**HTML example:**
<article>
    <p>This paragraph will be styled by "article p"</p>
    <div>
        <p>This nested paragraph will also be styled!</p>
    </div>
</article>

<nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
</nav>

### Child Selector - Direct Children Only
Use > to target only direct children:

/* Only direct li children of ul */
ul > li {
    list-style-type: square;
    margin-bottom: 10px;
}

/* Only direct paragraphs of main */
main > p {
    font-size: 18px;
    font-weight: 500;
}

/* Only direct children divs of container */
.container > div {
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #ddd;
}

**HTML example:**
<ul>
    <li>Direct child - styled with square bullet</li>
    <li>Direct child - styled with square bullet
        <ul>
            <li>Nested child - not affected by ul > li</li>
        </ul>
    </li>
</ul>

## Attribute Selectors - Super Specific Targeting

### Basic Attribute Presence
Target elements that have specific attributes:

/* All elements with title attribute */
[title] {
    border-bottom: 1px dotted #999;
    cursor: help;
}

/* All required form fields */
[required] {
    border-left: 4px solid #e74c3c;
    background-color: #fdf2f2;
}

/* All disabled elements */
[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

### Exact Attribute Value Matching
/* All text inputs */
[type="text"] {
    border: 2px solid #bdc3c7;
    padding: 10px;
    border-radius: 4px;
}

/* All email inputs */
[type="email"] {
    background-image: url('email-icon.png');
    background-repeat: no-repeat;
    background-position: right 10px center;
    padding-right: 40px;
}

/* All submit buttons */
[type="submit"] {
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 12px 30px;
    cursor: pointer;
    font-weight: bold;
}

### Advanced Attribute Matching
/* Links that start with https */
[href^="https"] {
    color: #27ae60;
    position: relative;
}

[href^="https"]:after {
    content: " 🔒";
}

/* Links that end with .pdf */
[href$=".pdf"] {
    background: url('pdf-icon.png') no-repeat left center;
    padding-left: 25px;
    color: #e74c3c;
}

/* Links that contain "google" */
[href*="google"] {
    color: #4285f4;
    font-weight: bold;
}

/* Class contains specific word */
[class~="featured"] {
    background-color: #f39c12;
    color: white;
    padding: 15px;
    border-radius: 6px;
}

## Advanced Selectors - Next Level Targeting

### Adjacent Sibling Selector (+)
Target the element immediately following another:

/* Paragraph immediately after h2 */
h2 + p {
    font-size: 18px;
    font-weight: bold;
    color: #7f8c8d;
    margin-top: 0;
}

/* Button immediately after form */
form + button {
    margin-top: 20px;
    background-color: #3498db;
}

### General Sibling Selector (~)
Target all siblings after an element:

/* All paragraphs after h2 */
h2 ~ p {
    color: #555;
    text-indent: 20px;
}

/* All divs after .intro */
.intro ~ div {
    margin-left: 40px;
    border-left: 2px solid #ecf0f1;
    padding-left: 20px;
}

## Pseudo-Classes - States and Positions

### Interactive States
a:hover {
    color: #e74c3c;
    text-decoration: underline;
}

button:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

### Position-based Selectors
/* First child */
li:first-child {
    font-weight: bold;
    color: #2c3e50;
}

/* Last child */
li:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

/* Every other row */
tr:nth-child(even) {
    background-color: #f8f9fa;
}

tr:nth-child(odd) {
    background-color: white;
}

/* First 3 items */
.gallery img:nth-child(-n+3) {
    border: 3px solid #f39c12;
}

## Understanding Selector Specificity

CSS applies styles based on specificity - some selectors are more "powerful" than others:

1. **Inline styles** (style="...") - 1000 points
2. **IDs** (#header) - 100 points
3. **Classes** (.button), **attributes** ([type="text"]), **pseudo-classes** (:hover) - 10 points
4. **Elements** (p, div, a) - 1 point

/* Specificity: 1 (element) */
p { color: black; }

/* Specificity: 10 (class) */
.intro { color: blue; }

/* Specificity: 11 (class + element) */
p.intro { color: red; }

/* Specificity: 100 (ID) */
#main-content { color: green; }

/* Specificity: 111 (ID + class + element) */
#main-content p.intro { color: purple; }

The rule with highest specificity wins!

## Real-World Examples

### Navigation Menu Styling
nav {
    background-color: #2c3e50;
    padding: 0;
}

nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

nav ul li {
    position: relative;
}

nav ul li a {
    display: block;
    padding: 20px 25px;
    color: white;
    text-decoration: none;
    transition: background-color 0.3s;
}

nav ul li a:hover {
    background-color: #34495e;
}

nav ul li:first-child a {
    border-left: none;
}

nav ul li:last-child a {
    border-right: none;
}

### Form Styling with Selectors
form {
    max-width: 500px;
    margin: 0 auto;
    padding: 30px;
    background-color: #f8f9fa;
    border-radius: 8px;
}

/* All text inputs and textareas */
input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #bdc3c7;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 20px;
    transition: border-color 0.3s;
}

/* Focus state for all form inputs */
input:focus,
textarea:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

/* Required fields */
input[required],
textarea[required] {
    border-left: 4px solid #e74c3c;
}

/* Valid fields */
input:valid {
    border-left: 4px solid #27ae60;
}

/* Submit button */
input[type="submit"] {
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
}

input[type="submit"]:hover {
    background-color: #219a52;
}

### Card Component Styling
.card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 0;
    margin-bottom: 30px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card > img:first-child {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card h3 {
    padding: 20px 20px 0;
    margin: 0;
    color: #2c3e50;
    font-size: 1.5em;
}

.card p {
    padding: 10px 20px 20px;
    color: #7f8c8d;
    line-height: 1.6;
}

.card .button {
    margin: 0 20px 20px;
    display: inline-block;
}

CSS selectors are incredibly powerful tools that let you target exactly the elements you want to style. Start with the basics (element, class, ID), then gradually add more advanced selectors as you get comfortable. The key is practice - the more you use them, the more natural they'll become!
    `,
  keyTerms: [
    { term: "Selector", definition: "A pattern that matches HTML elements to apply CSS styles to them." },
    { term: "Descendant Selector", definition: "Selects elements nested inside other elements using a space between selectors." },
    { term: "Child Selector", definition: "Selects direct children of an element using the > symbol." },
    { term: "Attribute Selector", definition: "Selects elements based on their attributes or attribute values using square brackets." },
    { term: "Specificity", definition: "The weight given to CSS selectors to determine which styles apply when there are conflicts." },
    { term: "Pseudo-class", definition: "Selects elements based on their state or position using a colon (like :hover, :first-child)." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Selector Practice",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'selector-basics.html' with various HTML elements including headings, paragraphs, lists, and links.",
        "Create 'selector-styles.css' and link it to your HTML file.",
        "Use element selectors to style all h1 elements with color: #2c3e50 and text-align: center.",
        "Use element selectors to style all paragraphs with font-size: 16px and line-height: 1.6.",
        "Create a class called 'highlight' with background-color: yellow and padding: 10px.",
        "Create an ID called 'header' with background-color: #3498db and color: white.",
        "Apply the highlight class to one paragraph and the header ID to a div element.",
        "Test all selectors work correctly by viewing in browser."
      ]
    },
    {
      id: 2,
      title: "Navigation Menu with Advanced Selectors",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'navigation-menu.html' with a complete navigation structure using nav, ul, and li elements.",
        "Create 'navigation.css' with styles for the navigation menu.",
        "Use descendant selectors to style nav ul (remove list-style, add display: flex).",
        "Use descendant selectors to style nav li a (add padding, remove text-decoration, add colors).",
        "Use pseudo-class selectors to add hover effects to navigation links.",
        "Use first-child and last-child selectors to style the first and last navigation items differently.",
        "Add attribute selectors to style external links (href^='http') with different colors.",
        "Test the navigation menu and verify all hover effects and special styling work correctly."
      ]
    },
    {
      id: 3,
      title: "Form Styling with Attribute Selectors",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'styled-form.html' with a comprehensive contact form including various input types.",
        "Include text, email, tel, textarea, and submit input types in your form.",
        "Create 'form-styles.css' and use attribute selectors to style different input types.",
        "Style input[type='text'], input[type='email'], and input[type='tel'] with consistent appearance.",
        "Use attribute selectors to style required fields with a red border-left indicator.",
        "Add focus pseudo-class styling to all form inputs with border-color and box-shadow changes.",
        "Style the submit button using input[type='submit'] with attractive colors and hover effects.",
        "Use adjacent sibling selectors (label + input) to add proper spacing between labels and inputs.",
        "Test the form styling and ensure all interactive states work properly."
      ]
    },
    {
      id: 4,
      title: "Complex Layout with Multiple Selectors",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'complex-layout.html' with a blog-style layout including header, navigation, articles, sidebar, and footer.",
        "Create 'layout-styles.css' using various selector types to style the complete layout.",
        "Use ID selectors for major layout sections (header, nav, main, sidebar, footer).",
        "Use descendant selectors to style content within articles (article h2, article p, etc.).",
        "Apply class selectors for reusable components like buttons, cards, and highlights.",
        "Use attribute selectors to style different types of links (external vs internal).",
        "Add pseudo-class selectors for interactive states and nth-child selectors for alternating styles.",
        "Ensure proper specificity management so all styles apply correctly without conflicts.",
        "Test the complete layout and verify all selector combinations work as intended."
      ]
    },
    {
      id: 5,
      title: "Advanced Selector Showcase",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'selector-showcase.html' demonstrating advanced CSS selector capabilities.",
        "Build a comprehensive webpage with multiple sections showcasing different selector types.",
        "Create 'advanced-selectors.css' that demonstrates mastery of all selector types covered.",
        "Include examples of: element, class, ID, descendant, child, adjacent sibling, and general sibling selectors.",
        "Use attribute selectors with different matching patterns (^=, $=, *=, ~=).",
        "Implement complex pseudo-class selectors including :nth-child(), :first-of-type, :last-of-type.",
        "Create selector combinations that demonstrate understanding of specificity rules.",
        "Add interactive elements with :hover, :focus, :active states and smooth transitions.",
        "Include practical examples like styled navigation, form elements, card layouts, and data tables.",
        "Document your selector choices with CSS comments explaining the reasoning behind each selection.",
        "Test thoroughly to ensure all selectors work correctly and demonstrate advanced CSS targeting skills.",
        "Create a visual guide showing which elements are affected by each type of selector."
      ]
    }
  ]
};
