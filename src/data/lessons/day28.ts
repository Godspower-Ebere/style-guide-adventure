
import { DayLesson } from "../types";

export const day28: DayLesson = {
  day: 28,
  title: "CSS Selectors - Basic",
  category: "CSS Basics",
  description: "Master the fundamental CSS selectors including element, class, ID, and attribute selectors to target HTML elements effectively.",
  learningObjectives: [
    "Understand different types of CSS selectors and their purposes.",
    "Learn to use element, class, and ID selectors effectively.",
    "Master attribute selectors and pseudo-selectors.",
    "Apply selector specificity rules to control styling priority."
  ],
  detailedExplanation: `
CSS selectors are patterns used to select and target HTML elements for styling. Understanding selectors is crucial for effective CSS development.

## Types of Basic Selectors

### 1. Universal Selector
Selects all elements on the page:

\`\`\`css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
\`\`\`

### 2. Element Selector (Type Selector)
Selects all elements of a specific HTML tag:

\`\`\`css
/* Select all paragraphs */
p {
  color: #333;
  line-height: 1.6;
}

/* Select all headings level 1 */
h1 {
  font-size: 2.5em;
  color: #2c3e50;
}

/* Select all links */
a {
  color: #3498db;
  text-decoration: none;
}
\`\`\`

### 3. Class Selector
Selects elements with a specific class attribute:

\`\`\`css
/* Select elements with class="highlight" */
.highlight {
  background-color: #fff3cd;
  padding: 10px;
  border-left: 4px solid #ffc107;
}

/* Select elements with class="btn" */
.btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Select elements with class="container" */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
\`\`\`

### 4. ID Selector
Selects a single element with a specific ID attribute:

\`\`\`css
/* Select element with id="header" */
#header {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  text-align: center;
}

/* Select element with id="main-content" */
#main-content {
  min-height: 500px;
  padding: 40px 0;
}

/* Select element with id="footer" */
#footer {
  background-color: #34495e;
  color: #ecf0f1;
  text-align: center;
  padding: 20px;
}
\`\`\`

## Attribute Selectors
Select elements based on their attributes:

### Basic Attribute Selectors
\`\`\`css
/* Select elements with a title attribute */
[title] {
  cursor: help;
  border-bottom: 1px dotted #999;
}

/* Select input elements with type="text" */
input[type="text"] {
  border: 2px solid #ddd;
  padding: 8px;
  border-radius: 4px;
}

/* Select input elements with type="password" */
input[type="password"] {
  border: 2px solid #e74c3c;
  padding: 8px;
  border-radius: 4px;
}

/* Select links with target="_blank" */
a[target="_blank"] {
  background: url('external-link-icon.png') no-repeat right center;
  padding-right: 20px;
}
\`\`\`

### Advanced Attribute Selectors
\`\`\`css
/* Select elements where class contains "nav" */
[class*="nav"] {
  list-style: none;
}

/* Select elements where class starts with "btn-" */
[class^="btn-"] {
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

/* Select elements where class ends with "-primary" */
[class$="-primary"] {
  background-color: #007bff;
  color: white;
}

/* Select links where href starts with "https://" */
a[href^="https://"] {
  color: #28a745;
}

/* Select links where href ends with ".pdf" */
a[href$=".pdf"] {
  background: url('pdf-icon.png') no-repeat left center;
  padding-left: 20px;
}
\`\`\`

## Grouping Selectors
Apply the same styles to multiple selectors:

\`\`\`css
/* Group multiple selectors */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Georgia', serif;
  margin-bottom: 15px;
  color: #2c3e50;
}

/* Group different types of selectors */
.error, #error-message, .warning {
  color: #e74c3c;
  font-weight: bold;
  border: 1px solid #e74c3c;
  padding: 10px;
  border-radius: 4px;
}

/* Group form elements */
input, textarea, select {
  font-family: inherit;
  font-size: 14px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
\`\`\`

## Selector Specificity
Understanding which styles take priority:

### Specificity Hierarchy (from highest to lowest):
1. Inline styles (style attribute)
2. IDs (#id)
3. Classes (.class), attributes ([attr]), pseudo-classes (:hover)
4. Elements (div, p, a)

\`\`\`css
/* Specificity examples */
p { color: black; }                    /* Specificity: 1 */
.text { color: blue; }                  /* Specificity: 10 */
#special { color: red; }               /* Specificity: 100 */
p.text { color: green; }               /* Specificity: 11 */
#special.text { color: purple; }       /* Specificity: 110 */
\`\`\`

## Complete Selector Example
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Selectors Demo</title>
  <style>
    /* Universal selector - reset default styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    /* Element selectors */
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      background-color: #f8f9fa;
      color: #333;
    }
    
    h1, h2 {
      color: #2c3e50;
      margin-bottom: 20px;
    }
    
    p {
      margin-bottom: 15px;
      text-align: justify;
    }
    
    /* Class selectors */
    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      background-color: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .highlight {
      background-color: #fff3cd;
      padding: 15px;
      border-left: 5px solid #ffc107;
      margin: 20px 0;
    }
    
    .btn {
      display: inline-block;
      padding: 12px 24px;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s;
    }
    
    .btn-secondary {
      background-color: #6c757d;
    }
    
    .btn-success {
      background-color: #28a745;
    }
    
    /* ID selectors */
    #header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
      padding: 40px 0;
      margin-bottom: 30px;
    }
    
    #main-content {
      padding: 20px 0;
    }
    
    #footer {
      background-color: #343a40;
      color: white;
      text-align: center;
      padding: 20px;
      margin-top: 40px;
    }
    
    /* Attribute selectors */
    input[type="text"], input[type="email"] {
      width: 100%;
      padding: 10px;
      border: 2px solid #ddd;
      border-radius: 5px;
      margin-bottom: 15px;
      font-size: 16px;
    }
    
    input[type="text"]:focus, input[type="email"]:focus {
      border-color: #007bff;
      outline: none;
    }
    
    a[href^="https://"] {
      color: #28a745;
      font-weight: bold;
    }
    
    a[href^="mailto:"] {
      color: #dc3545;
      text-decoration: underline;
    }
    
    /* Grouped selectors */
    .info, .warning, .error {
      padding: 15px;
      border-radius: 5px;
      margin: 15px 0;
      font-weight: bold;
    }
    
    .info {
      background-color: #d1ecf1;
      color: #0c5460;
      border: 1px solid #bee5eb;
    }
    
    .warning {
      background-color: #fff3cd;
      color: #856404;
      border: 1px solid #ffeaa7;
    }
    
    .error {
      background-color: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }
  </style>
</head>
<body>
  <header id="header">
    <h1>CSS Selectors Demonstration</h1>
    <p>Learn how different selectors target HTML elements</p>
  </header>
  
  <div class="container">
    <main id="main-content">
      <section>
        <h2>Element Selectors</h2>
        <p>This paragraph is styled using element selectors. All paragraphs share the same basic styling.</p>
        <p>Element selectors target all elements of a specific HTML tag type.</p>
      </section>
      
      <section>
        <h2>Class Selectors</h2>
        <div class="highlight">
          This div uses the .highlight class to stand out from regular content.
        </div>
        <p>Class selectors are very versatile and can be applied to multiple elements.</p>
        
        <div class="info">This is an info message using the .info class.</div>
        <div class="warning">This is a warning message using the .warning class.</div>
        <div class="error">This is an error message using the .error class.</div>
      </section>
      
      <section>
        <h2>ID Selectors</h2>
        <p>The header, main content, and footer sections use ID selectors for unique styling.</p>
        <p>IDs should be unique and are often used for major page sections.</p>
      </section>
      
      <section>
        <h2>Attribute Selectors</h2>
        <p>Here are some links demonstrating attribute selectors:</p>
        <ul>
          <li><a href="https://www.example.com">External HTTPS link</a> (green, bold)</li>
          <li><a href="mailto:test@example.com">Email link</a> (red, underlined)</li>
          <li><a href="internal-page.html">Internal link</a> (default styling)</li>
        </ul>
        
        <form>
          <input type="text" placeholder="Text input (styled with attribute selector)">
          <input type="email" placeholder="Email input (styled with attribute selector)">
          <input type="submit" value="Submit" class="btn">
        </form>
      </section>
      
      <section>
        <h2>Multiple Classes and Combinations</h2>
        <a href="#" class="btn">Default Button</a>
        <a href="#" class="btn btn-secondary">Secondary Button</a>
        <a href="#" class="btn btn-success">Success Button</a>
      </section>
    </main>
  </div>
  
  <footer id="footer">
    <p>&copy; 2024 CSS Selectors Demo. Understanding the power of CSS selection!</p>
  </footer>
</body>
</html>
\`\`\`
    `,
  keyTerms: [
    { term: "Selector", definition: "A pattern that matches one or more HTML elements for styling." },
    { term: "Element Selector", definition: "Selects all elements of a specific HTML tag type (e.g., p, h1, div)." },
    { term: "Class Selector", definition: "Selects elements with a specific class attribute, preceded by a dot (.)." },
    { term: "ID Selector", definition: "Selects a single element with a specific ID attribute, preceded by a hash (#)." },
    { term: "Attribute Selector", definition: "Selects elements based on their attributes and attribute values." },
    { term: "Specificity", definition: "The priority system that determines which CSS rules apply when multiple rules target the same element." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Selector Practice",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'basic-selectors.html' with a simple webpage about your favorite book.",
        "Include h1, h2, multiple paragraphs, and at least one list (ul or ol).",
        "Add a class 'important' to one paragraph and an ID 'book-title' to the main heading.",
        "Create internal CSS using element selectors to style all paragraphs with blue text.",
        "Style all h2 elements with a red color and underline decoration.",
        "Use the class selector to make the .important paragraph have a yellow background.",
        "Use the ID selector to make #book-title larger (font-size: 2.5em) and centered.",
        "Style all list items to have a margin-bottom of 10px.",
        "Test your selectors by viewing the page in a browser and verifying each style applies correctly."
      ]
    },
    {
      id: 2,
      title: "Class and ID Selectors",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'selectors-practice.html' for a fictional restaurant menu webpage.",
        "Structure the page with header (ID: main-header), navigation, main content, and footer (ID: site-footer).",
        "Add classes: 'menu-section' for different food categories, 'menu-item' for individual dishes, 'price' for pricing.",
        "Include special classes: 'featured' for highlighted items, 'vegetarian' for vegetarian options.",
        "Create external CSS file 'menu-styles.css' and link it to your HTML.",
        "Use ID selectors to style the main-header with background color, padding, and center alignment.",
        "Style #site-footer with different background color and text alignment.",
        "Use class selectors to style .menu-section with borders and margins.",
        "Style .menu-item with padding, background color, and hover effects.",
        "Make .featured items stand out with special colors and bold text.",
        "Style .price elements with different color and font-weight.",
        "Add .vegetarian class styling with a green border or background tint.",
        "Test all classes and IDs to ensure proper styling is applied."
      ]
    },
    {
      id: 3,
      title: "Attribute Selectors Workshop",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'attribute-selectors.html' featuring a comprehensive contact form and link gallery.",
        "Build a form with various input types: text, email, password, tel, url, and submit button.",
        "Add a section with different types of links: internal links, external HTTPS links, email links, and file download links (PDF, DOC).",
        "Include images with different alt attributes and links with different target attributes.",
        "Create 'attribute-styles.css' for all styling using primarily attribute selectors.",
        "Style input[type=\"text\"] and input[type=\"email\"] with consistent border and padding.",
        "Give input[type=\"password\"] a different border color for security emphasis.",
        "Style input[type=\"submit\"] as a button with background color and hover effects.",
        "Use a[href^=\"https://\"] to style external links with an icon or different color.",
        "Style a[href^=\"mailto:\"] email links with a mail icon or special formatting.",
        "Use a[href$=\".pdf\"] to style PDF links with a PDF icon or special indicator.",
        "Add a[target=\"_blank\"] styling to indicate links that open in new windows.",
        "Style elements with title attributes to show they have tooltips.",
        "Create hover effects for various attributed elements.",
        "Test all attribute selectors and ensure they target the correct elements."
      ]
    },
    {
      id: 4,
      title: "Selector Specificity Challenge",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'specificity-demo.html' demonstrating CSS specificity rules.",
        "Build a page with multiple elements that have conflicting styles applied through different selector types.",
        "Include paragraphs with combinations of element, class, and ID selectors targeting the same elements.",
        "Create 'specificity-styles.css' with competing rules to demonstrate specificity hierarchy.",
        "Add a paragraph with class 'demo' and ID 'special-text' to test specificity.",
        "Write CSS rules: p { color: black; }, .demo { color: blue; }, #special-text { color: red; }",
        "Create elements that combine multiple classes to show how specificity adds up.",
        "Include examples of grouped selectors and how they interact with specificity.",
        "Add comments in your CSS explaining which rule should win and why.",
        "Create a visual chart or table in your HTML showing specificity values.",
        "Test edge cases like multiple classes on one element versus single ID.",
        "Document your findings about which styles actually apply and why."
      ]
    },
    {
      id: 5,
      title: "Advanced Selector Combinations",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'advanced-selectors.html' for a comprehensive blog layout with complex selector usage.",
        "Design a multi-section blog with header, navigation, article content, sidebar, and footer.",
        "Include various content types: articles with different categories, author information, tags, dates.",
        "Add classes like 'article', 'tech-category', 'author-info', 'tag', 'featured-post'.",
        "Include IDs for major sections and unique elements like 'main-nav', 'primary-sidebar'.",
        "Create 'blog-styles.css' showcasing advanced selector combinations and grouping.",
        "Use grouped selectors for typography (h1, h2, h3 together).",
        "Combine element and class selectors (div.article, p.author-info).",
        "Use attribute selectors for different article categories and external links.",
        "Create complex specificity scenarios and document the expected outcomes.",
        "Implement a complete color scheme using various selector types.",
        "Add interactive elements with hover states using different selector combinations.",
        "Include at least 15 different CSS rules using various selector types.",
        "Test your blog layout across different browsers to ensure consistent styling.",
        "Add a stylesheet comment header explaining your selector strategy and organization."
      ]
    }
  ]
};
