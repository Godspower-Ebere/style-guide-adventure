
import { DayLesson } from "../types";

export const day14: DayLesson = {
  day: 14,
  title: "HTML Semantic Elements - Main and Section",
  category: "Advanced HTML",
  description: "Master the main and section elements to create well-structured, meaningful content areas in your web pages.",
  learningObjectives: [
    "Understand the purpose and proper use of the main element.",
    "Learn to organize content effectively with section elements.",
    "Create hierarchical content structures using headings and sections.",
    "Build accessible page layouts with semantic content organization."
  ],
  detailedExplanation: `
Today we'll focus on the main and section elements, which help organize the primary content of your web pages.

## The Main Element
The main element represents the primary content of a document. There should be only one main element per page.

\`\`\`html
<body>
  <header>...</header>
  <nav>...</nav>
  
  <main>
    <h1>Main Page Content</h1>
    <p>This is the primary content of the page...</p>
  </main>
  
  <footer>...</footer>
</body>
\`\`\`

### Main Element Rules
- Only one main element per document
- Should not be inside header, footer, nav, aside, or article elements
- Contains the main content that is directly related to the central topic

## The Section Element
The section element represents a thematic grouping of content with its own heading.

\`\`\`html
<main>
  <section>
    <h2>About Our Company</h2>
    <p>Information about the company...</p>
  </section>
  
  <section>
    <h2>Our Services</h2>
    <p>Description of services...</p>
  </section>
</main>
\`\`\`

### When to Use Section
- Group related content together
- Each section should have a natural heading
- Use when content forms a distinct part of the document
- Don't use section just for styling purposes

## Proper Document Structure
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Company Website</title>
</head>
<body>
  <header>
    <h1>TechCorp Solutions</h1>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>About Us</h2>
      <p>We are a leading technology company...</p>
    </section>

    <section id="services">
      <h2>Our Services</h2>
      <p>We offer comprehensive tech solutions...</p>
      
      <section>
        <h3>Web Development</h3>
        <p>Custom web applications...</p>
      </section>
      
      <section>
        <h3>Mobile Apps</h3>
        <p>Native and hybrid mobile solutions...</p>
      </section>
    </section>
  </main>

  <footer>
    <p>&copy; 2024 TechCorp Solutions</p>
  </footer>
</body>
</html>
\`\`\`

## Heading Hierarchy
Sections should follow a logical heading hierarchy:
- h1: Page title (usually in header)
- h2: Main section headings
- h3: Subsection headings
- h4-h6: Further subdivisions as needed
    `,
  keyTerms: [
    { term: "Main Element", definition: "Semantic element that contains the primary content of a web page document." },
    { term: "Section Element", definition: "Semantic element that groups related content together with a thematic heading." },
    { term: "Document Outline", definition: "The hierarchical structure of headings and sections in an HTML document." },
    { term: "Thematic Content", definition: "Content that shares a common topic or purpose within a section." },
    { term: "Heading Hierarchy", definition: "The logical order of heading levels (h1-h6) that creates document structure." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Main and Section",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'main-section.html' with complete HTML structure.",
        "Add header with site title and simple navigation.",
        "Create a main element with two sections: 'Welcome' and 'Features'.",
        "Each section should have an h2 heading and descriptive paragraph.",
        "Add a simple footer with copyright information."
      ]
    },
    {
      id: 2,
      title: "Multi-Level Sections",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'nested-sections.html' for a service company website.",
        "Build main content with sections for 'About' and 'Services'.",
        "Within the Services section, add subsections for different service types.",
        "Use proper heading hierarchy (h2 for main sections, h3 for subsections).",
        "Ensure each section has meaningful, related content."
      ]
    },
    {
      id: 3,
      title: "Complete Page Structure",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'complete-structure.html' with full semantic layout.",
        "Include header with navigation, main content area, and footer.",
        "Organize main content into at least 4 distinct sections.",
        "Create proper heading hierarchy throughout the document.",
        "Add navigation links that connect to section IDs."
      ]
    },
    {
      id: 4,
      title: "Portfolio Website Layout",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'portfolio.html' for a personal portfolio website.",
        "Structure with header, main, and footer elements.",
        "Add sections for: About Me, Skills, Projects, and Contact.",
        "Use appropriate headings and organize content logically.",
        "Make sure each section contains relevant, realistic content."
      ]
    },
    {
      id: 5,
      title: "Educational Website Structure",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'education-site.html' for an online learning platform.",
        "Build a complex structure with nested sections for different course categories.",
        "Include sections for: Course Catalog, About, Pricing, and Support.",
        "Create subsections within Course Catalog for different subjects.",
        "Ensure perfect heading hierarchy and semantic structure throughout."
      ]
    }
  ]
};
