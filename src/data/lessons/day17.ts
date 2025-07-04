
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
Welcome to the exciting world of CSS! If HTML is the skeleton of your webpage, then CSS is everything that makes it beautiful - the colors, fonts, layouts, animations, and visual magic that transforms plain HTML into stunning websites.

## What Exactly is CSS?

CSS stands for **Cascading Style Sheets**, and let me break that down for you:
- **Cascading**: Styles flow down and can override each other in a specific order
- **Style**: The visual appearance of your content
- **Sheets**: Collections of style rules

Think of HTML as building a house - you create the rooms, doors, and basic structure. CSS is like interior design - you choose the paint colors, furniture placement, lighting, and all the aesthetic details that make the house beautiful and comfortable.

## Why CSS is Amazing

Before CSS, web pages looked pretty boring - just black text on white backgrounds. CSS revolutionized web design by allowing us to:
- **Separate content from presentation** - HTML handles structure, CSS handles appearance
- **Create consistent designs** - Write styles once, apply everywhere
- **Build responsive layouts** - Websites that work on phones, tablets, and desktops
- **Add interactivity** - Hover effects, animations, and transitions

## Three Ways to Add CSS to Your HTML

### 1. Inline CSS - Quick but Not Recommended
You can add styles directly to HTML elements using the style attribute:

<p style="color: blue; font-size: 18px; font-weight: bold;">
    This paragraph is styled with inline CSS
</p>

<div style="background-color: yellow; padding: 20px; border: 2px solid red;">
    This div has a yellow background and red border
</div>

Inline CSS works, but it's like writing notes directly on your walls - it gets messy quickly!

### 2. Internal CSS - Good for Single Pages
You can include CSS in the head section of your HTML document:

<!DOCTYPE html>
<html>
<head>
    <title>My Styled Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        
        h1 {
            color: darkblue;
            text-align: center;
        }
        
        p {
            color: #333;
            line-height: 1.6;
        }
        
        .highlight {
            background-color: yellow;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph with internal CSS styling.</p>
    <p class="highlight">This paragraph has the highlight class.</p>
</body>
</html>

### 3. External CSS - The Professional Way
This is the best approach for real websites. Create a separate .css file:

**HTML file (index.html):**
<!DOCTYPE html>
<html>
<head>
    <title>Professional Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>My Amazing Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <p class="intro">Welcome to my website!</p>
        <p>Here you'll find amazing content and resources.</p>
    </main>
</body>
</html>

**CSS file (styles.css):**
/* Reset and base styles */
body {
    margin: 0;
    padding: 0;
    font-family: 'Georgia', serif;
    line-height: 1.6;
    background-color: #ffffff;
}

/* Header styles */
header {
    background-color: #2c3e50;
    color: white;
    padding: 20px;
    text-align: center;
}

header h1 {
    margin: 0;
    font-size: 2.5em;
}

/* Navigation styles */
nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

nav li {
    margin: 0 15px;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

nav a:hover {
    background-color: #34495e;
}

/* Main content styles */
main {
    max-width: 800px;
    margin: 40px auto;
    padding: 0 20px;
}

.intro {
    font-size: 1.2em;
    color: #2c3e50;
    font-weight: bold;
    margin-bottom: 20px;
}

## Understanding CSS Syntax

CSS follows a simple pattern:

selector {
    property: value;
    property: value;
}

Let me show you the parts:

h1 {
    color: red;
    font-size: 36px;
    text-align: center;
    margin-bottom: 20px;
}

- **h1** is the selector (what we're styling)
- **color, font-size, text-align, margin-bottom** are properties (what we're changing)
- **red, 36px, center, 20px** are values (how we're changing it)

## Essential CSS Selectors

### Element Selectors
Target all elements of a specific type:

p {
    color: #333;
    font-size: 16px;
}

h2 {
    color: darkblue;
    border-bottom: 2px solid #ccc;
}

a {
    color: #007bff;
    text-decoration: none;
}

### Class Selectors
Target elements with specific class attributes:

.button {
    background-color: #007bff;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

.warning {
    background-color: #fff3cd;
    color: #856404;
    padding: 15px;
    border: 1px solid #ffeaa7;
    border-radius: 4px;
}

.large-text {
    font-size: 1.5em;
    font-weight: bold;
}

**HTML usage:**
<button class="button">Click Me</button>
<div class="warning">This is a warning message</div>
<p class="large-text">This text is large and bold</p>

### ID Selectors
Target specific elements with unique IDs:

#header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px;
}

#navigation {
    position: sticky;
    top: 0;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

#footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 30px;
    margin-top: 50px;
}

**HTML usage:**
<header id="header">...</header>
<nav id="navigation">...</nav>
<footer id="footer">...</footer>

## Common CSS Properties You'll Love

### Text and Typography
p {
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.8;
    color: #444;
    text-align: justify;
    letter-spacing: 0.5px;
}

### Colors and Backgrounds
.hero-section {
    background-color: #3498db;
    background-image: linear-gradient(45deg, #3498db, #2980b9);
    color: white;
    padding: 80px 20px;
    text-align: center;
}

### Spacing and Layout
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.card {
    margin: 20px 0;
    padding: 30px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

## A Complete Real-World Example

Let me show you how all this comes together in a real website:

**HTML (index.html):**
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Green Gardens - Landscaping Services</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header id="main-header">
        <div class="container">
            <h1>Green Gardens</h1>
            <p class="tagline">Professional Landscaping Services</p>
        </div>
    </header>
    
    <nav id="main-nav">
        <div class="container">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    
    <main>
        <section class="hero">
            <div class="container">
                <h2>Transform Your Outdoor Space</h2>
                <p class="hero-text">Creating beautiful landscapes that enhance your property value and quality of life.</p>
                <a href="#contact" class="cta-button">Get Free Quote</a>
            </div>
        </section>
        
        <section class="services">
            <div class="container">
                <h2>Our Services</h2>
                <div class="service-card">
                    <h3>Garden Design</h3>
                    <p>Custom garden designs that reflect your style and needs.</p>
                </div>
                <div class="service-card">
                    <h3>Lawn Maintenance</h3>
                    <p>Keep your lawn healthy and beautiful year-round.</p>
                </div>
                <div class="service-card">
                    <h3>Tree Services</h3>
                    <p>Professional tree care, pruning, and removal services.</p>
                </div>
            </div>
        </section>
    </main>
    
    <footer id="main-footer">
        <div class="container">
            <p>&copy; 2024 Green Gardens. All rights reserved.</p>
            <p>Call us: <a href="tel:555-123-4567">(555) 123-4567</a></p>
        </div>
    </footer>
</body>
</html>

**CSS (styles.css):**
/* Base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
#main-header {
    background: linear-gradient(135deg, #2ecc71, #27ae60);
    color: white;
    text-align: center;
    padding: 60px 0;
}

#main-header h1 {
    font-size: 3em;
    margin-bottom: 10px;
}

.tagline {
    font-size: 1.2em;
    opacity: 0.9;
}

/* Navigation */
#main-nav {
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
}

#main-nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

#main-nav li {
    margin: 0 20px;
}

#main-nav a {
    display: block;
    padding: 20px 0;
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: color 0.3s;
}

#main-nav a:hover {
    color: #2ecc71;
}

/* Hero section */
.hero {
    background: linear-gradient(rgba(46, 204, 113, 0.8), rgba(46, 204, 113, 0.8)),
                url('garden-bg.jpg') center/cover;
    color: white;
    text-align: center;
    padding: 100px 0;
}

.hero h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
}

.hero-text {
    font-size: 1.3em;
    margin-bottom: 30px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.cta-button {
    display: inline-block;
    background-color: #e74c3c;
    color: white;
    padding: 15px 30px;
    text-decoration: none;
    border-radius: 30px;
    font-weight: bold;
    transition: background-color 0.3s;
}

.cta-button:hover {
    background-color: #c0392b;
}

/* Services */
.services {
    padding: 80px 0;
    background-color: #f8f9fa;
}

.services h2 {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 50px;
    color: #2c3e50;
}

.service-card {
    background: white;
    padding: 40px;
    margin: 20px 0;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.service-card:hover {
    transform: translateY(-5px);
}

.service-card h3 {
    color: #2ecc71;
    font-size: 1.5em;
    margin-bottom: 15px;
}

/* Footer */
#main-footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 40px 0;
}

#main-footer a {
    color: #2ecc71;
    text-decoration: none;
}

#main-footer a:hover {
    text-decoration: underline;
}

## Why External CSS is Best

Using external CSS files gives you:
1. **Reusability** - One stylesheet for multiple pages
2. **Maintainability** - Update styles in one place
3. **Performance** - Browsers cache CSS files
4. **Organization** - Keep HTML and CSS separate
5. **Team collaboration** - Designers can work on CSS while developers work on HTML

CSS is incredibly powerful and fun to learn. Start with the basics, experiment with different properties, and don't be afraid to try new things. The best way to learn CSS is by doing - so let's get started with some hands-on practice!
    `,
  keyTerms: [
    { term: "CSS", definition: "Cascading Style Sheets - the language used to style and layout HTML documents." },
    { term: "Selector", definition: "The part of a CSS rule that identifies which HTML elements to style." },
    { term: "Property", definition: "The aspect of an element you want to change (color, font-size, margin, etc.)." },
    { term: "Value", definition: "The setting applied to a CSS property (red, 16px, center, etc.)." },
    { term: "Declaration", definition: "A CSS property-value pair, like 'color: blue;'." },
    { term: "Rule", definition: "A complete CSS statement consisting of a selector and declaration block." }
  ],
  exercises: [
    {
      id: 1,
      title: "Your First CSS Styles",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'my-first-css.html' with complete HTML5 structure.",
        "Add internal CSS in the head section using style tags.",
        "Style the h1 element to be blue and centered using text-align: center.",
        "Style all paragraphs to have font-size: 18px and color: #333.",
        "Add a background-color: #f0f0f0 to the body element.",
        "Create at least 3 paragraphs of content to see the styling.",
        "Test your styles in the browser and verify all elements are styled correctly."
      ]
    },
    {
      id: 2,
      title: "External CSS Stylesheet",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'external-css.html' and 'styles.css' files.",
        "Link the CSS file to HTML using the link element in the head section.",
        "In the CSS file, create styles for h1, h2, p, and body elements.",
        "Add a class called 'highlight' with background-color: yellow and padding: 10px.",
        "Apply the highlight class to one paragraph in your HTML.",
        "Create another class called 'large-text' with font-size: 24px and font-weight: bold.",
        "Test that external CSS is working by refreshing the browser.",
        "Experiment with different colors and font sizes."
      ]
    },
    {
      id: 3,
      title: "Complete Styled Webpage",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'styled-website.html' and 'website.css' for a complete website.",
        "Build HTML with header, nav, main, and footer elements.",
        "Style the header with background color, white text, and center alignment.",
        "Create navigation with horizontal list items and styled links.",
        "Add hover effects to navigation links that change background color.",
        "Style the main content area with maximum width and center margins.",
        "Create multiple CSS classes for different content types (intro, highlight, warning).",
        "Style the footer with different background and center-aligned text.",
        "Use both element selectors and class selectors throughout your CSS.",
        "Test the complete website and ensure all styles work together harmoniously."
      ]
    },
    {
      id: 4,
      title: "Personal Portfolio with CSS",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'portfolio.html' and 'portfolio.css' for a personal portfolio website.",
        "Design header section with your name, title, and professional navigation.",
        "Create multiple sections: About, Skills, Projects, Contact with proper styling.",
        "Use CSS to create attractive color scheme and typography throughout.",
        "Add styling for different content types: headings, paragraphs, lists, links.",
        "Create CSS classes for special elements like buttons, cards, or highlights.",
        "Style navigation with hover effects and active states.",
        "Ensure consistent spacing and alignment throughout the page.",
        "Add a professional footer with contact information and social links.",
        "Test the complete portfolio for visual consistency and professional appearance."
      ]
    },
    {
      id: 5,
      title: "Business Website with Advanced CSS",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'business-site.html' and 'business.css' for a professional business website.",
        "Design comprehensive site with header, navigation, hero section, services, testimonials, and footer.",
        "Implement sophisticated color scheme with primary, secondary, and accent colors.",
        "Create multiple CSS classes for different components: buttons, cards, sections, highlights.",
        "Use advanced CSS properties: gradients, shadows, transitions, and hover effects.",
        "Style typography with different font sizes, weights, and line heights for hierarchy.",
        "Create responsive design principles with max-width containers and flexible layouts.",
        "Add professional styling for forms, buttons, and interactive elements.",
        "Implement consistent spacing system using margins and padding throughout.",
        "Create hover effects and transitions for improved user experience.",
        "Test the website thoroughly across different browsers and document any issues.",
        "Ensure the final result looks professional and could be used for a real business."
      ]
    }
  ]
};
