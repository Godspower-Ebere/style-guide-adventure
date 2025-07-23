
import { DayLesson } from "../types";

export const day12: DayLesson = {
  day: 12,
  title: "CSS Introduction and Syntax",
  category: "CSS Basics",
  description: "Learn the fundamentals of CSS - what it is, how it works, and the basic syntax for styling web pages.",
  learningObjectives: [
    "Understand what CSS is and why it's essential for web development.",
    "Learn the basic CSS syntax: selectors, properties, and values.",
    "Discover different ways to add CSS to HTML: inline, internal, and external.",
    "Write your first CSS rules to style HTML elements."
  ],
  detailedExplanation: `
Welcome to the exciting world of CSS! If HTML is the skeleton of your webpage, then CSS is the skin, muscles, and clothing that makes it beautiful and functional. CSS stands for Cascading Style Sheets, and it's what transforms plain HTML into visually stunning websites.

## What is CSS?

CSS is a stylesheet language that describes how HTML elements should be displayed. Think of it as the designer's toolkit for the web. While HTML provides the structure and content, CSS controls:

- **Colors** - Background colors, text colors, border colors
- **Layout** - How elements are positioned and sized
- **Typography** - Font families, sizes, weights, and spacing
- **Spacing** - Margins, padding, and gaps between elements
- **Visual effects** - Shadows, gradients, animations, and more

## Basic CSS Syntax

CSS follows a simple but powerful syntax pattern:

\`\`\`css
selector {
  property: value;
  property: value;
}
\`\`\`

Let me break this down:
- **Selector**: Tells CSS which HTML elements to style
- **Property**: What aspect of the element you want to change
- **Value**: How you want to change it
- **Declaration**: A property-value pair
- **Rule**: A selector with one or more declarations

### Your First CSS Rule

\`\`\`css
h1 {
  color: blue;
  font-size: 24px;
}
\`\`\`

This rule says: "Find all h1 elements and make their text blue and 24 pixels in size."

## CSS Selectors - Targeting Elements

### Element Selector
Targets all elements of a specific type:
\`\`\`css
p {
  color: green;
}
\`\`\`

### Class Selector
Targets elements with a specific class attribute (uses a dot):
\`\`\`css
.highlight {
  background-color: yellow;
}
\`\`\`

### ID Selector
Targets a single element with a specific ID (uses a hash):
\`\`\`css
#header {
  font-size: 32px;
}
\`\`\`

## Three Ways to Add CSS to HTML

### 1. Inline CSS (Not Recommended)
CSS written directly in the HTML element's style attribute:
\`\`\`html
<p style="color: red; font-size: 16px;">This text is red and 16px.</p>
\`\`\`

### 2. Internal CSS
CSS written inside a \`<style>\` tag in the HTML document's \`<head>\`:
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: blue;
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body>
  <p>This paragraph will be blue and use Arial font.</p>
</body>
</html>
\`\`\`

### 3. External CSS (Best Practice)
CSS written in a separate .css file and linked to the HTML:

**styles.css:**
\`\`\`css
p {
  color: purple;
  line-height: 1.6;
}
\`\`\`

**index.html:**
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>This paragraph will be purple with 1.6 line height.</p>
</body>
</html>
\`\`\`

## CSS Properties and Values

CSS has hundreds of properties! Here are some fundamental ones:

### Text Properties
\`\`\`css
p {
  color: #333333;           /* Text color */
  font-size: 16px;          /* Size of text */
  font-family: Arial;       /* Font to use */
  font-weight: bold;        /* Thickness of text */
  text-align: center;       /* Alignment */
}
\`\`\`

### Background Properties
\`\`\`css
body {
  background-color: #f0f0f0;
  background-image: url('pattern.jpg');
}
\`\`\`

### Spacing Properties
\`\`\`css
div {
  margin: 20px;        /* Space outside the element */
  padding: 15px;       /* Space inside the element */
}
\`\`\`

## CSS Values and Units

CSS values can be expressed in different units:

### Absolute Units
- **px** (pixels): Fixed size - \`font-size: 16px;\`
- **pt** (points): Mainly for print - \`font-size: 12pt;\`

### Relative Units
- **%** (percentage): Relative to parent - \`width: 50%;\`
- **em**: Relative to element's font size - \`margin: 1.5em;\`
- **rem**: Relative to root font size - \`padding: 2rem;\`

### Color Values
\`\`\`css
/* Named colors */
color: red;
color: blue;

/* Hexadecimal */
color: #ff0000;  /* Red */
color: #0000ff;  /* Blue */

/* RGB */
color: rgb(255, 0, 0);     /* Red */
color: rgba(255, 0, 0, 0.5); /* Red with 50% opacity */

/* HSL */
color: hsl(0, 100%, 50%);     /* Red */
color: hsla(0, 100%, 50%, 0.5); /* Red with 50% opacity */
\`\`\`

## Real-World Example

Let's create a simple webpage with CSS styling:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First CSS Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 20px;
    }
    
    h1 {
      color: #333;
      text-align: center;
      font-size: 36px;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background-color: white;
      padding: 30px;
      border-radius: 10px;
    }
    
    p {
      color: #666;
      line-height: 1.6;
      font-size: 16px;
    }
    
    .highlight {
      background-color: #ffeb3b;
      padding: 5px;
      border-radius: 3px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to CSS!</h1>
    <p>This is a paragraph with some <span class="highlight">highlighted text</span>.</p>
    <p>CSS makes our web pages beautiful and functional.</p>
  </div>
</body>
</html>
\`\`\`

## CSS Comments

You can add comments to your CSS to document your code:
\`\`\`css
/* This is a single-line comment */

/*
  This is a
  multi-line comment
*/

h1 {
  color: blue; /* This changes the text color to blue */
}
\`\`\`

## Best Practices for Beginners

1. **Use external CSS files** - Keep your CSS separate from HTML
2. **Use meaningful class names** - \`.navigation\` instead of \`.blue-box\`
3. **Organize your CSS** - Group related styles together
4. **Use comments** - Document complex or important styles
5. **Test in different browsers** - Make sure your styles work everywhere
6. **Start simple** - Master the basics before moving to advanced techniques

## Common Beginner Mistakes to Avoid

1. **Forgetting the semicolon** - Every CSS declaration needs a semicolon
2. **Missing closing braces** - Every opening \`{\` needs a closing \`}\`
3. **Wrong selector syntax** - Classes use \`.\` and IDs use \`#\`
4. **Overusing inline styles** - They're hard to maintain and override
5. **Not organizing code** - Keep related styles together

CSS is incredibly powerful, and this is just the beginning! As you practice, you'll discover more properties and techniques that will help you create amazing designs. Remember, the best way to learn CSS is by experimenting and building real projects.
    `,
  keyTerms: [
    { term: "CSS", definition: "Cascading Style Sheets - a stylesheet language used to describe the presentation of HTML documents." },
    { term: "Selector", definition: "A pattern used to select HTML elements that you want to style." },
    { term: "Property", definition: "A characteristic of an HTML element that you want to change, such as color or font-size." },
    { term: "Value", definition: "The setting you want to apply to a CSS property." },
    { term: "Declaration", definition: "A single line of CSS that includes a property and its value." },
    { term: "Rule", definition: "A complete CSS statement that includes a selector and one or more declarations." },
    { term: "External CSS", definition: "CSS code written in a separate .css file and linked to HTML documents." },
    { term: "Class Selector", definition: "A selector that targets elements with a specific class attribute, written with a dot prefix." },
    { term: "ID Selector", definition: "A selector that targets a single element with a specific ID attribute, written with a hash prefix." }
  ],
  exercises: [
    {
      id: 1,
      title: "First CSS Styling",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'my-first-css.html' with proper HTML5 structure.",
        "Add a heading (h1) with your name and a paragraph about yourself.",
        "Create a <style> section in the <head> of your document.",
        "Style the h1 to have a blue color and center alignment.",
        "Style the paragraph to have a gray color and larger font size (18px).",
        "Test your page in a browser to see the styling applied."
      ]
    },
    {
      id: 2,
      title: "External CSS File",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an HTML file called 'portfolio.html' with sections for your bio, skills, and contact info.",
        "Create a separate CSS file called 'styles.css'.",
        "Link the CSS file to your HTML using the <link> tag.",
        "Style the body to have a light background color and better font.",
        "Create a class called 'section' and apply it to your main content areas.",
        "Style the sections with padding, margins, and background colors.",
        "Test that your external CSS is working properly."
      ]
    },
    {
      id: 3,
      title: "CSS Selectors Practice",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create an HTML page with various elements: headings, paragraphs, lists, and divs.",
        "Add classes and IDs to different elements strategically.",
        "Create CSS rules using element selectors (h1, p, ul).",
        "Create CSS rules using class selectors (.highlight, .important).",
        "Create CSS rules using ID selectors (#header, #footer).",
        "Apply different colors, fonts, and spacing to demonstrate each selector type.",
        "Ensure each selector type is clearly working and affecting the right elements."
      ]
    },
    {
      id: 4,
      title: "Personal Website with CSS",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a complete personal website with multiple HTML pages (home, about, contact).",
        "Create a comprehensive external CSS file that styles all pages consistently.",
        "Use a variety of CSS properties: colors, fonts, spacing, backgrounds.",
        "Implement proper CSS organization with comments and logical grouping.",
        "Use classes and IDs effectively to target specific elements.",
        "Create a cohesive design that looks professional and polished.",
        "Test your website in multiple browsers to ensure consistency."
      ]
    },
    {
      id: 5,
      title: "CSS Style Guide Creation",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a comprehensive style guide page that demonstrates CSS fundamentals.",
        "Include examples of all basic selectors (element, class, ID) with explanations.",
        "Show different color value formats (hex, rgb, hsl, named colors).",
        "Demonstrate various font properties and text styling options.",
        "Create examples of spacing with margins and padding.",
        "Include a section showing CSS units (px, em, rem, %) in action.",
        "Document your CSS with detailed comments explaining each technique.",
        "Make the style guide visually appealing and easy to navigate.",
        "Include a table of contents with links to each section.",
        "Add code examples alongside visual demonstrations for each concept."
      ]
    }
  ]
};
