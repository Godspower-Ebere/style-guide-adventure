
import { DayLesson } from "../types";

export const day27: DayLesson = {
  day: 27,
  title: "CSS Introduction and Syntax",
  category: "CSS Basics",
  description: "Learn the fundamentals of CSS (Cascading Style Sheets) including syntax, selectors, and how to apply styles to HTML elements.",
  learningObjectives: [
    "Understand what CSS is and its role in web development.",
    "Learn CSS syntax including selectors, properties, and values.",
    "Master different ways to include CSS in HTML documents.",
    "Apply basic styling to HTML elements using CSS rules."
  ],
  detailedExplanation: `
CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. It controls the layout, colors, fonts, and overall visual appearance of web pages.

## What is CSS?
CSS separates content (HTML) from presentation (styling), making websites:
- More maintainable and organized
- Faster to load (reusable styles)
- Accessible across different devices
- Easier to update globally

## CSS Syntax
CSS follows a simple syntax pattern:

\`\`\`css
selector {
  property: value;
  property: value;
}
\`\`\`

### Basic Example
\`\`\`css
h1 {
  color: blue;
  font-size: 24px;
  text-align: center;
}
\`\`\`

## Ways to Include CSS

### 1. Inline CSS
Applied directly to HTML elements using the style attribute:

\`\`\`html
<h1 style="color: red; font-size: 20px;">Hello World</h1>
<p style="background-color: yellow;">This is a paragraph.</p>
\`\`\`

### 2. Internal CSS
Placed within \`<style>\` tags in the HTML head section:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
    }
    
    h1 {
      color: navy;
      text-align: center;
    }
    
    p {
      color: #333;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <h1>Welcome to CSS</h1>
  <p>This is styled with internal CSS.</p>
</body>
</html>
\`\`\`

### 3. External CSS
Separate CSS file linked to HTML document:

**styles.css**
\`\`\`css
/* This is a CSS comment */
body {
  margin: 0;
  padding: 20px;
  font-family: 'Helvetica', sans-serif;
  background-color: white;
}

header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  text-align: center;
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.highlight {
  background-color: yellow;
  font-weight: bold;
}

#special-paragraph {
  color: red;
  font-style: italic;
}
\`\`\`

**index.html**
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>External CSS Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>My Website</h1>
  </header>
  
  <main>
    <p>This paragraph uses default styling.</p>
    <p class="highlight">This paragraph is highlighted.</p>
    <p id="special-paragraph">This paragraph has special styling.</p>
  </main>
</body>
</html>
\`\`\`

## CSS Selectors Basics

### Element Selector
Targets all elements of a specific type:
\`\`\`css
p {
  color: blue;
}

h1 {
  font-size: 2em;
}
\`\`\`

### Class Selector
Targets elements with a specific class attribute:
\`\`\`css
.warning {
  color: red;
  font-weight: bold;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
\`\`\`

### ID Selector
Targets a single element with a specific ID:
\`\`\`css
#header {
  background-color: #333;
  color: white;
}

#main-content {
  padding: 20px;
}
\`\`\`

## CSS Properties and Values

### Common Text Properties
\`\`\`css
.text-styling {
  color: #333;              /* Text color */
  font-family: Arial;       /* Font family */
  font-size: 16px;          /* Font size */
  font-weight: bold;        /* Font weight */
  text-align: center;       /* Text alignment */
  text-decoration: underline; /* Text decoration */
  line-height: 1.5;         /* Line height */
}
\`\`\`

### Background Properties
\`\`\`css
.background-styling {
  background-color: #f0f0f0;
  background-image: url('image.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
\`\`\`

## Complete CSS Example
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Introduction Demo</title>
  <style>
    /* Reset default margins and paddings */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f4f4f4;
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      background-color: white;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    
    header {
      text-align: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 2px solid #3498db;
    }
    
    h1 {
      color: #2c3e50;
      font-size: 2.5em;
      margin-bottom: 10px;
    }
    
    .subtitle {
      color: #7f8c8d;
      font-size: 1.2em;
      font-style: italic;
    }
    
    .content-section {
      margin-bottom: 25px;
    }
    
    h2 {
      color: #3498db;
      border-left: 4px solid #3498db;
      padding-left: 15px;
      margin-bottom: 15px;
    }
    
    p {
      margin-bottom: 15px;
      text-align: justify;
    }
    
    .highlight {
      background-color: #fff3cd;
      padding: 15px;
      border-left: 5px solid #ffc107;
      margin: 20px 0;
    }
    
    .code-example {
      background-color: #f8f9fa;
      border: 1px solid #e9ecef;
      padding: 15px;
      font-family: 'Courier New', monospace;
      border-radius: 5px;
      overflow-x: auto;
    }
    
    footer {
      text-align: center;
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #ecf0f1;
      color: #7f8c8d;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Welcome to CSS</h1>
      <p class="subtitle">Cascading Style Sheets for Beautiful Web Pages</p>
    </header>
    
    <main>
      <section class="content-section">
        <h2>What is CSS?</h2>
        <p>CSS (Cascading Style Sheets) is a powerful styling language that controls the visual presentation of HTML documents. It allows you to separate content from design, making your websites more maintainable and visually appealing.</p>
        
        <div class="highlight">
          <strong>Key Benefit:</strong> CSS enables you to style multiple pages from a single stylesheet, ensuring consistency across your entire website.
        </div>
      </section>
      
      <section class="content-section">
        <h2>CSS Syntax</h2>
        <p>CSS follows a simple pattern of selectors, properties, and values:</p>
        
        <div class="code-example">
selector {<br>
&nbsp;&nbsp;property: value;<br>
&nbsp;&nbsp;property: value;<br>
}
        </div>
      </section>
      
      <section class="content-section">
        <h2>Getting Started</h2>
        <p>There are three ways to include CSS in your HTML documents: inline styles, internal stylesheets, and external stylesheets. External stylesheets are generally preferred for larger projects as they promote better organization and reusability.</p>
      </section>
    </main>
    
    <footer>
      <p>&copy; 2024 CSS Learning Journey. Ready to style the web!</p>
    </footer>
  </div>
</body>
</html>
\`\`\`
    `,
  keyTerms: [
    { term: "CSS", definition: "Cascading Style Sheets - a language used to describe the presentation of HTML documents." },
    { term: "Selector", definition: "A pattern used to select and target HTML elements for styling." },
    { term: "Property", definition: "A CSS characteristic that you want to style (like color, font-size, margin)." },
    { term: "Value", definition: "The setting applied to a CSS property (like red, 16px, center)." },
    { term: "Declaration", definition: "A property-value pair in CSS (e.g., color: blue;)." },
    { term: "Rule Set", definition: "A selector combined with one or more declarations enclosed in curly braces." }
  ],
  exercises: [
    {
      id: 1,
      title: "First CSS Styles",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'my-first-css.html' with proper HTML5 structure.",
        "Add a title 'Learning CSS Basics' and create a simple page about your favorite hobby.",
        "Include at least one h1, two h2 headings, and three paragraphs of content.",
        "Use internal CSS (within <style> tags in the head) to style your page.",
        "Change the h1 color to blue and center-align it.",
        "Set all h2 elements to have a red color and underline text decoration.",
        "Make all paragraphs have a font size of 18px and gray color (#666).",
        "Add a background color to the body element (choose any light color).",
        "Test your page in the browser and verify all styles are applied correctly."
      ]
    },
    {
      id: 2,
      title: "External CSS Stylesheet",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an HTML file called 'external-css-demo.html' about your dream vacation destination.",
        "Create a separate CSS file called 'vacation-styles.css'.",
        "Link the CSS file to your HTML document using the <link> tag.",
        "In the HTML, create a header with h1, main content area with multiple sections, and a footer.",
        "Add class attributes to some elements: 'highlight' for important text, 'section-title' for section headings.",
        "In the CSS file, style the body with a font family, background color, and margin settings.",
        "Style the header with a different background color, white text, and center alignment.",
        "Create styles for the .highlight class (background color, padding, border).",
        "Style the .section-title class with a larger font size and different color.",
        "Add hover effects to any links you include (color change when mouse hovers over).",
        "Test the external CSS by modifying styles and refreshing the browser."
      ]
    },
    {
      id: 3,
      title: "CSS Selectors Practice",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'css-selectors-practice.html' with a comprehensive layout about a fictional restaurant.",
        "Include header, navigation, main content with multiple sections, sidebar, and footer elements.",
        "Add various classes (.menu-item, .price, .special-offer) and IDs (#restaurant-name, #contact-info).",
        "Create 'restaurant-styles.css' and link it to your HTML document.",
        "Use element selectors to style all headings, paragraphs, and list items.",
        "Use class selectors to style menu items with borders, padding, and background colors.",
        "Use ID selectors to create unique styles for the restaurant name and contact information.",
        "Implement different text properties: font-family, font-size, font-weight, text-align, line-height.",
        "Add background properties to different sections using colors and gradients.",
        "Create a cohesive color scheme throughout the page using a consistent palette.",
        "Add comments in your CSS explaining each section of styles.",
        "Ensure the page looks professional and all elements are properly styled.",
        "Validate your HTML and CSS to ensure there are no errors."
      ]
    },
    {
      id: 4,
      title: "Personal Portfolio Styling",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'personal-portfolio.html' as a basic personal portfolio website about yourself.",
        "Include sections for: header with your name, about me, skills, projects, and contact information.",
        "Create 'portfolio-styles.css' for all styling (no inline or internal CSS).",
        "Design a professional color scheme with primary and secondary colors.",
        "Style the header section with your name prominently displayed and attractive typography.",
        "Create styled cards or sections for your skills using background colors and borders.",
        "Style a projects section with placeholder project descriptions and attractive formatting.",
        "Implement consistent spacing throughout the page using margins and padding.",
        "Add styling for a contact section with formatted contact information.",
        "Use different font weights and sizes to create visual hierarchy.",
        "Ensure all text is readable with good contrast between text and background colors.",
        "Test your portfolio in the browser and make adjustments for visual appeal."
      ]
    },
    {
      id: 5,
      title: "CSS Style Guide Creation",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'css-style-guide.html' as a comprehensive demonstration of CSS capabilities.",
        "Build a style guide showing examples of typography, colors, buttons, and layout components.",
        "Create 'style-guide.css' with well-organized and commented CSS code.",
        "Include sections for: Typography (headings, paragraphs, lists), Color Palette, Button Styles, and Layout Examples.",
        "Demonstrate at least 5 different heading styles with varying sizes, colors, and fonts.",
        "Create a color palette section showing primary, secondary, and accent colors with hex codes displayed.",
        "Design 4 different button styles (primary, secondary, success, warning) with hover effects.",
        "Build sample layout components like cards, navigation bars, and content sections.",
        "Use CSS comments to organize your stylesheet into clear sections.",
        "Implement consistent naming conventions for your CSS classes.",
        "Add a table of contents at the top of your HTML page linking to each section.",
        "Ensure your style guide is visually appealing and could serve as a reference for future projects.",
        "Include at least 20 different CSS properties across all your styles.",
        "Test all interactive elements (like button hovers) to ensure they work properly."
      ]
    }
  ]
};
