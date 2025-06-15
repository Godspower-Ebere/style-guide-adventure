
import { DayLesson } from "../types";

export const day15: DayLesson = {
  day: 15,
  title: "HTML Semantic Elements - Article and Aside",
  category: "Advanced HTML",
  description: "Learn to use article and aside elements for creating independent content blocks and complementary information sections.",
  learningObjectives: [
    "Understand when and how to use the article element for standalone content.",
    "Master the aside element for complementary and sidebar content.",
    "Learn to combine article and aside elements effectively.",
    "Create well-structured content layouts with proper semantic meaning."
  ],
  detailedExplanation: `
Today we'll explore the article and aside elements, which help create more meaningful content structures.

## The Article Element
The article element represents a complete, independent piece of content that could stand alone.

\`\`\`html
<article>
  <header>
    <h2>Understanding Climate Change</h2>
    <p>By John Smith | Published March 15, 2024</p>
  </header>
  
  <p>Climate change is one of the most pressing issues...</p>
  <p>Scientists have observed significant changes...</p>
  
  <footer>
    <p>Tags: environment, science, climate</p>
  </footer>
</article>
\`\`\`

### When to Use Article
- Blog posts and news articles
- Forum posts and comments
- Product reviews
- Social media posts
- Any content that makes sense independently

## The Aside Element
The aside element represents content that is tangentially related to the main content.

\`\`\`html
<main>
  <article>
    <h2>Main Article Content</h2>
    <p>This is the main article...</p>
  </article>
  
  <aside>
    <h3>Related Links</h3>
    <ul>
      <li><a href="#">Similar Article 1</a></li>
      <li><a href="#">Similar Article 2</a></li>
    </ul>
  </aside>
</main>
\`\`\`

### Common Aside Uses
- Sidebars with related information
- Author biographies
- Related links or articles
- Advertisements
- Glossaries or definitions

## Combining Article and Aside
Articles can contain their own aside elements:

\`\`\`html
<article>
  <h2>The History of Web Development</h2>
  
  <p>Web development has evolved significantly...</p>
  
  <aside>
    <h3>Key Milestone</h3>
    <p>In 1991, the first website was created by Tim Berners-Lee.</p>
  </aside>
  
  <p>The introduction of CSS in 1996...</p>
</article>
\`\`\`

## Complete Blog Layout Example
\`\`\`html
<main>
  <article>
    <header>
      <h1>How to Learn HTML</h1>
      <p>By Jane Developer | <time>2024-03-15</time></p>
    </header>
    
    <p>Learning HTML is the first step in web development...</p>
    
    <section>
      <h2>Getting Started</h2>
      <p>Begin with basic HTML structure...</p>
      
      <aside>
        <h3>Quick Tip</h3>
        <p>Always validate your HTML code!</p>
      </aside>
    </section>
    
    <section>
      <h2>Advanced Topics</h2>
      <p>Once you master the basics...</p>
    </section>
    
    <footer>
      <p>Categories: HTML, Web Development, Tutorial</p>
    </footer>
  </article>
  
  <!-- Sidebar -->
  <aside>
    <h2>Popular Posts</h2>
    <ul>
      <li><a href="#">CSS Basics Guide</a></li>
      <li><a href="#">JavaScript for Beginners</a></li>
    </ul>
    
    <h2>About the Author</h2>
    <p>Jane Developer has 10 years of experience...</p>
  </aside>
</main>
\`\`\`

## Best Practices
- Use article for content that could be syndicated or shared
- Use aside for content that enhances but isn't essential
- Articles can be nested for comment systems
- Both elements can have their own headers and footers
    `,
  keyTerms: [
    { term: "Article Element", definition: "Semantic element for complete, independent pieces of content that could stand alone." },
    { term: "Aside Element", definition: "Semantic element for content tangentially related to the main content, like sidebars." },
    { term: "Independent Content", definition: "Content that makes complete sense when separated from its surrounding context." },
    { term: "Tangential Content", definition: "Content that relates to but is not essential to the main content." },
    { term: "Syndication", definition: "The practice of sharing content across multiple platforms or websites." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create Your First Article",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'first-article.html' with complete HTML structure.",
        "Write an article element about your favorite hobby.",
        "Include header with title and author information.",
        "Add 2-3 paragraphs of content about the topic.",
        "Include a footer with tags or categories."
      ]
    },
    {
      id: 2,
      title: "Add Sidebar with Aside",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'article-sidebar.html' with main content and sidebar.",
        "Write an article about learning web development.",
        "Add an aside element with related tips or resources.",
        "Include author bio in a separate aside element.",
        "Style with basic CSS to show sidebar layout."
      ]
    },
    {
      id: 3,
      title: "Blog Post with Nested Elements",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'complex-blog.html' with multiple nested semantic elements.",
        "Write a detailed article with multiple sections.",
        "Include aside elements within sections for additional tips.",
        "Add a main sidebar aside with related posts and author info.",
        "Ensure proper heading hierarchy throughout."
      ]
    },
    {
      id: 4,
      title: "News Website Layout",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'news-layout.html' for a news article page.",
        "Write a news article with headline, byline, and publication date.",
        "Add sidebar with related articles and breaking news.",
        "Include author biography and social sharing options in aside elements.",
        "Make the layout look professional with CSS styling."
      ]
    },
    {
      id: 5,
      title: "Multi-Article Page",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'magazine-layout.html' simulating an online magazine.",
        "Include 3 different articles on the same page.",
        "Each article should have its own aside with related content.",
        "Add a main page sidebar with popular articles and categories.",
        "Create a cohesive design that clearly separates different content areas."
      ]
    }
  ]
};
