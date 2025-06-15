
import { DayLesson } from "../types";

export const day13: DayLesson = {
  day: 13,
  title: "HTML Semantic Elements - Header and Nav",
  category: "Advanced HTML",
  description: "Learn to structure web pages with semantic header and navigation elements for better accessibility and SEO.",
  learningObjectives: [
    "Understand the importance of semantic HTML for accessibility and SEO.",
    "Master the header element for page and section headers.",
    "Learn to create effective navigation with the nav element.",
    "Build well-structured page layouts using semantic elements."
  ],
  detailedExplanation: `
Today we'll explore semantic HTML elements, starting with header and nav elements that help structure web pages meaningfully.

## What are Semantic Elements?
Semantic elements clearly describe their meaning to both browsers and developers. They make your HTML more accessible and SEO-friendly.

## The Header Element
The header element represents introductory content for a page or section:

\`\`\`html
<header>
  <h1>My Website</h1>
  <p>Welcome to my amazing website</p>
</header>
\`\`\`

### Multiple Headers
You can have multiple headers in a document:

\`\`\`html
<!-- Page header -->
<header>
  <h1>My Blog</h1>
  <nav>...</nav>
</header>

<!-- Article header -->
<article>
  <header>
    <h2>Article Title</h2>
    <p>Published on <time>2024-01-15</time></p>
  </header>
  <p>Article content...</p>
</article>
\`\`\`

## The Nav Element
The nav element defines navigation links:

\`\`\`html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
\`\`\`

### Navigation Best Practices
- Use nav for major navigation blocks
- Include descriptive link text
- Use lists (ul/ol) to structure navigation items
- Don't use nav for every link on the page

## Complete Page Structure Example
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Semantic Website</title>
</head>
<body>
  <header>
    <h1>Company Name</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <p>Main content goes here...</p>
  </main>
</body>
</html>
\`\`\`

## Benefits of Semantic HTML
- Better accessibility for screen readers
- Improved SEO rankings
- Cleaner, more maintainable code
- Better browser support for styling and functionality
    `,
  keyTerms: [
    { term: "Semantic HTML", definition: "HTML elements that clearly describe their meaning and purpose in the document structure." },
    { term: "Header Element", definition: "Semantic element that contains introductory content for a page or section." },
    { term: "Nav Element", definition: "Semantic element that defines a section of navigation links." },
    { term: "Accessibility", definition: "Design that ensures web content is usable by people with disabilities." },
    { term: "SEO", definition: "Search Engine Optimization - techniques to improve website visibility in search results." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create a Basic Header",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'basic-header.html' with complete HTML structure.",
        "Add a header element containing an h1 with your website name.",
        "Include a paragraph with a tagline or description below the h1.",
        "Style the header with some basic CSS to make it stand out.",
        "Test in browser to see your semantic header."
      ]
    },
    {
      id: 2,
      title: "Build Navigation Menu",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'navigation-menu.html' with proper HTML structure.",
        "Add a header containing both h1 and nav elements.",
        "Create a navigation menu with 5 links using unordered list.",
        "Use semantic anchor tags with descriptive link text.",
        "Add basic CSS to style the navigation horizontally."
      ]
    },
    {
      id: 3,
      title: "Multi-Section Headers",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'multi-headers.html' with multiple header elements.",
        "Add a main page header with site title and navigation.",
        "Create an article with its own header containing title and date.",
        "Add another section with a different header style.",
        "Ensure each header is semantically appropriate for its context."
      ]
    },
    {
      id: 4,
      title: "Business Website Header",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'business-site.html' for a professional business website.",
        "Design a header with company logo (use placeholder text), name, and tagline.",
        "Add navigation with business-appropriate links: Home, Services, About, Contact.",
        "Style the header to look professional with CSS.",
        "Ensure the navigation is accessible and well-structured."
      ]
    },
    {
      id: 5,
      title: "Blog Website Structure",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'blog-structure.html' for a personal blog.",
        "Build a main header with blog title and main navigation.",
        "Add multiple blog post sections, each with their own semantic headers.",
        "Include post titles, publication dates, and author information in post headers.",
        "Create a cohesive design that clearly separates different header types."
      ]
    }
  ]
};
