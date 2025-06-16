
import { DayLesson } from "../types";

export const day15: DayLesson = {
  day: 15,
  title: "HTML Semantic Elements - Article and Aside",
  category: "Advanced HTML",
  description: "Learn to structure content with article and aside elements for better document organization and SEO.",
  learningObjectives: [
    "Understand when and how to use the article element.",
    "Master the aside element for supplementary content.",
    "Learn to create well-structured content layouts.",
    "Build accessible and SEO-friendly document structures."
  ],
  detailedExplanation: `
Today we'll explore the article and aside elements, which help create meaningful content structures.

## The Article Element
The article element represents a standalone piece of content that could be distributed independently.

\\\`\\\`\\\`html
<article>
  <header>
    <h2>Understanding Climate Change</h2>
    <p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>
    <p>By <strong>Dr. Jane Smith</strong></p>
  </header>
  
  <p>Climate change refers to long-term shifts in global temperatures...</p>
  
  <section>
    <h3>Causes of Climate Change</h3>
    <p>The primary causes include...</p>
  </section>
  
  <section>
    <h3>Effects on Environment</h3>
    <p>The environmental impacts are...</p>
  </section>
  
  <footer>
    <p>Tags: environment, science, climate</p>
    <p><a href="#comments">5 Comments</a></p>
  </footer>
</article>
\\\`\\\`\\\`

## When to Use Article
- Blog posts
- News articles
- Forum posts
- Product reviews
- Any self-contained content

## The Aside Element
The aside element represents content that is tangentially related to the main content.

\\\`\\\`\\\`html
<main>
  <article>
    <h1>Web Development Trends</h1>
    <p>The latest trends in web development...</p>
  </article>
  
  <aside>
    <h3>Related Topics</h3>
    <ul>
      <li><a href="#frameworks">Popular Frameworks</a></li>
      <li><a href="#tools">Development Tools</a></li>
      <li><a href="#resources">Learning Resources</a></li>
    </ul>
    
    <h3>Popular This Week</h3>
    <ul>
      <li><a href="#post1">CSS Grid Layout</a></li>
      <li><a href="#post2">JavaScript ES6</a></li>
    </ul>
  </aside>
</main>
\\\`\\\`\\\`

## Common Aside Uses
- Sidebars
- Pull quotes
- Related links
- Advertisements
- Author bio
- Glossary definitions

## Nested Articles
Articles can contain other articles:

\\\`\\\`\\\`html
<article>
  <h1>Tech Conference 2024</h1>
  <p>Overview of the conference...</p>
  
  <article>
    <h2>Keynote: Future of AI</h2>
    <p>Speaker discussed...</p>
  </article>
  
  <article>
    <h2>Workshop: React Basics</h2>
    <p>Hands-on session covered...</p>
  </article>
</article>
\\\`\\\`\\\`

## Complete Blog Layout Example
\\\`\\\`\\\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Tech Blog</title>
</head>
<body>
  <header>
    <h1>Tech Insights Blog</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>The Rise of Progressive Web Apps</h2>
        <p>Published <time datetime="2024-01-20">January 20, 2024</time></p>
        <p>By <strong>Alex Johnson</strong></p>
      </header>
      
      <p>Progressive Web Apps (PWAs) are revolutionizing...</p>
      
      <section>
        <h3>Key Benefits</h3>
        <ul>
          <li>Offline functionality</li>
          <li>App-like experience</li>
          <li>Push notifications</li>
        </ul>
      </section>
      
      <footer>
        <p>Categories: Web Development, Technology</p>
      </footer>
    </article>

    <aside>
      <section>
        <h3>About the Author</h3>
        <p>Alex Johnson is a senior web developer...</p>
      </section>
      
      <section>
        <h3>Recent Posts</h3>
        <ul>
          <li><a href="#post1">CSS Grid vs Flexbox</a></li>
          <li><a href="#post2">JavaScript Performance Tips</a></li>
          <li><a href="#post3">Modern CSS Techniques</a></li>
        </ul>
      </section>
    </aside>
  </main>

  <footer>
    <p>&copy; 2024 Tech Insights Blog</p>
  </footer>
</body>
</html>
\\\`\\\`\\\`
    `,
  keyTerms: [
    { term: "Article Element", definition: "Semantic element that represents standalone, self-contained content." },
    { term: "Aside Element", definition: "Semantic element for content that is tangentially related to the main content." },
    { term: "Standalone Content", definition: "Content that makes sense on its own and could be distributed independently." },
    { term: "Tangentially Related", definition: "Content that is related but not essential to the main content flow." },
    { term: "Document Outline", definition: "The hierarchical structure created by semantic elements and headings." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Blog Post",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'blog-post.html' with a single article.",
        "Include article header with title, date, and author.",
        "Add main content with at least 2 sections.",
        "Include article footer with tags or categories.",
        "Add proper heading hierarchy throughout."
      ]
    },
    {
      id: 2,
      title: "Article with Sidebar",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'article-sidebar.html' with main article and aside.",
        "Article should discuss a topic of your choice.",
        "Aside should include related links and author info.",
        "Use proper semantic structure throughout.",
        "Ensure aside content is truly supplementary."
      ]
    },
    {
      id: 3,
      title: "Multi-Article Page",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'news-page.html' with multiple articles.",
        "Include a main featured article and 2-3 shorter articles.",
        "Add comprehensive aside with navigation and related content.",
        "Use nested articles where appropriate.",
        "Create proper document structure with all semantic elements."
      ]
    }
  ]
};
