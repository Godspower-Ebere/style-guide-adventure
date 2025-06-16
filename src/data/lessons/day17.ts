
import { DayLesson } from "../types";

export const day17: DayLesson = {
  day: 17,
  title: "Introduction to CSS - What is CSS?",
  category: "CSS Basics",
  description: "Learn the fundamentals of CSS and understand how to style and layout web pages effectively.",
  learningObjectives: [
    "Understand what CSS is and its role in web development.",
    "Learn the three ways to include CSS in HTML documents.",
    "Master basic CSS syntax and selectors.",
    "Apply your first styles to HTML elements."
  ],
  detailedExplanation: `
Welcome to CSS! After learning HTML structure, now we'll make our web pages beautiful and functional.

## What is CSS?
CSS stands for **Cascading Style Sheets**. It's the language used to describe how HTML elements should be displayed.

## Key Concepts:
- **Cascading**: Styles can be inherited and overridden in a specific order
- **Style Sheets**: Collections of style rules that define appearance
- **Separation of Concerns**: HTML for structure, CSS for presentation

## Three Ways to Include CSS

### 1. Inline CSS
Styles applied directly to individual elements:

\\\`\\\`\\\`html
<p style="color: blue; font-size: 18px;">This is blue text.</p>
\\\`\\\`\\\`

### 2. Internal CSS
Styles defined in the HTML document's head section:

\\\`\\\`\\\`html
<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <p>This paragraph will be blue.</p>
</body>
</html>
\\\`\\\`\\\`

### 3. External CSS (Recommended)
Styles defined in separate .css files:

**HTML file:**
\\\`\\\`\\\`html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>This paragraph will be styled by external CSS.</p>
</body>
</html>
\\\`\\\`\\\`

**styles.css file:**
\\\`\\\`\\\`css
p {
  color: blue;
  font-size: 18px;
}
\\\`\\\`\\\`

## Basic CSS Syntax
CSS rules consist of selectors and declaration blocks:

\\\`\\\`\\\`css
selector {
  property: value;
  property: value;
}
\\\`\\\`\\\`

### Example:
\\\`\\\`\\\`css
h1 {
  color: red;
  font-size: 24px;
  text-align: center;
}
\\\`\\\`\\\`

## Basic CSS Selectors

### Element Selector
Targets all elements of a specific type:
\\\`\\\`\\\`css
p { color: blue; }
h1 { font-size: 32px; }
\\\`\\\`\\\`

### Class Selector
Targets elements with a specific class attribute:
\\\`\\\`\\\`css
.highlight { background-color: yellow; }
.large-text { font-size: 20px; }
\\\`\\\`\\\`

**HTML:**
\\\`\\\`\\\`html
<p class="highlight">This paragraph is highlighted.</p>
<p class="large-text">This paragraph has large text.</p>
\\\`\\\`\\\`

### ID Selector
Targets a specific element with a unique ID:
\\\`\\\`\\\`css
#header { background-color: navy; }
#footer { text-align: center; }
\\\`\\\`\\\`

**HTML:**
\\\`\\\`\\\`html
<div id="header">Website Header</div>
<div id="footer">Website Footer</div>
\\\`\\\`\\\`

## Common CSS Properties

### Text Properties
\\\`\\\`\\\`css
h1 {
  color: #333333;
  font-family: Arial, sans-serif;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
}
\\\`\\\`\\\`

### Background Properties
\\\`\\\`\\\`css
body {
  background-color: #f0f0f0;
  background-image: url('pattern.png');
}
\\\`\\\`\\\`

### Basic Layout Properties
\\\`\\\`\\\`css
.container {
  width: 800px;
  height: 400px;
  margin: 20px;
  padding: 15px;
  border: 1px solid #ccc;
}
\\\`\\\`\\\`

## Complete Example
**HTML (index.html):**
\\\`\\\`\\\`html
<!DOCTYPE html>
<html>
<head>
  <title>My First CSS Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header id="main-header">
    <h1>Welcome to My Website</h1>
  </header>
  
  <main>
    <p class="intro">This is an introduction paragraph.</p>
    <p>This is a regular paragraph.</p>
    <p class="highlight">This paragraph is highlighted.</p>
  </main>
  
  <footer id="main-footer">
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
</html>
\\\`\\\`\\\`

**CSS (styles.css):**
\\\`\\\`\\\`css
/* Page styles */
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 20px;
}

/* Header styles */
#main-header {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

#main-header h1 {
  margin: 0;
  font-size: 36px;
}

/* Paragraph styles */
p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px;
}

.intro {
  font-size: 18px;
  font-weight: bold;
  color: #666;
}

.highlight {
  background-color: yellow;
  padding: 10px;
  border-left: 4px solid orange;
}

/* Footer styles */
#main-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 15px;
  margin-top: 30px;
}
\\\`\\\`\\\`
    `,
  keyTerms: [
    { term: "CSS", definition: "Cascading Style Sheets - the language used to style HTML documents." },
    { term: "Selector", definition: "The part of CSS rule that identifies which HTML elements to style." },
    { term: "Property", definition: "The aspect of an element you want to change (color, font-size, etc.)." },
    { term: "Value", definition: "The setting applied to a CSS property." },
    { term: "Declaration", definition: "A CSS property-value pair, like 'color: blue;'." },
    { term: "Rule", definition: "A complete CSS statement consisting of selector and declaration block." }
  ],
  exercises: [
    {
      id: 1,
      title: "First CSS Styling",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'my-first-css.html' with basic HTML structure.",
        "Add internal CSS in the head section.",
        "Style the h1 to be blue and centered.",
        "Style all paragraphs to have a font size of 18px.",
        "Add a red background color to the body.",
        "Test your styles in the browser."
      ]
    },
    {
      id: 2,
      title: "External CSS File",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'external-css.html' and 'styles.css' files.",
        "Link the CSS file to the HTML document.",
        "Create styles for headings, paragraphs, and a highlight class.",
        "Add different colors, font sizes, and background colors.",
        "Test that external CSS is working properly."
      ]
    },
    {
      id: 3,
      title: "Complete Styled Page",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'styled-portfolio.html' and 'portfolio.css'.",
        "Build a personal portfolio page with header, main content, and footer.",
        "Use ID selectors for header and footer styling.",
        "Use class selectors for different types of content.",
        "Apply various CSS properties: colors, fonts, spacing, backgrounds.",
        "Make the page visually appealing and professional."
      ]
    }
  ]
};
