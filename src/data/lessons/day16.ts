
import { DayLesson } from "../types";

export const day16: DayLesson = {
  day: 16,
  title: "HTML Semantic Elements - Footer and Complete Layout",
  category: "Advanced HTML",
  description: "Master the footer element and learn to create complete semantic page layouts using all HTML5 structural elements.",
  learningObjectives: [
    "Understand the purpose and proper use of the footer element.",
    "Learn to create footers for different contexts (page, section, article).",
    "Master complete semantic page layouts.",
    "Build accessible and well-structured web pages."
  ],
  detailedExplanation: `
Today we'll complete our semantic HTML knowledge with the footer element and learn to build complete layouts.

## The Footer Element
The footer element represents the footer of its nearest sectioning content or sectioning root.

### Page Footer
\\\`\\\`\\\`html
<body>
  <header>...</header>
  <main>...</main>
  
  <footer>
    <p>&copy; 2024 My Website. All rights reserved.</p>
    <nav>
      <ul>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms of Service</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
    <p>Follow us on social media</p>
  </footer>
</body>
\\\`\\\`\\\`

### Article Footer
\\\`\\\`\\\`html
<article>
  <header>
    <h2>Article Title</h2>
  </header>
  
  <p>Article content...</p>
  
  <footer>
    <p>Published: <time datetime="2024-01-15">January 15, 2024</time></p>
    <p>Author: <strong>Jane Doe</strong></p>
    <p>Tags: technology, web development</p>
    <p><a href="#comments">Leave a comment</a></p>
  </footer>
</article>
\\\`\\\`\\\`

### Section Footer
\\\`\\\`\\\`html
<section>
  <h2>Product Features</h2>
  <p>Our product offers amazing features...</p>
  
  <footer>
    <p>Last updated: <time datetime="2024-01-10">January 10, 2024</time></p>
    <p><a href="#learn-more">Learn more about features</a></p>
  </footer>
</section>
\\\`\\\`\\\`

## Complete Semantic Layout Structure
\\\`\\\`\\\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Complete Semantic Layout</title>
</head>
<body>
  <!-- Page Header -->
  <header>
    <h1>Company Name</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Main Content Area -->
  <main>
    <!-- Hero Section -->
    <section id="hero">
      <h2>Welcome to Our Website</h2>
      <p>We provide excellent services...</p>
    </section>

    <!-- Blog Articles -->
    <section id="blog">
      <h2>Latest Blog Posts</h2>
      
      <article>
        <header>
          <h3>First Blog Post</h3>
          <p>Posted on <time datetime="2024-01-15">January 15, 2024</time></p>
        </header>
        
        <p>This is the content of our first blog post...</p>
        
        <section>
          <h4>Key Points</h4>
          <ul>
            <li>Point one</li>
            <li>Point two</li>
          </ul>
        </section>
        
        <footer>
          <p>Author: John Smith</p>
          <p>Categories: Web Design, Tips</p>
        </footer>
      </article>

      <article>
        <header>
          <h3>Second Blog Post</h3>
          <p>Posted on <time datetime="2024-01-12">January 12, 2024</time></p>
        </header>
        
        <p>Content of the second post...</p>
        
        <footer>
          <p>Author: Jane Doe</p>
          <p>Categories: Development, Tutorials</p>
        </footer>
      </article>
    </section>
  </main>

  <!-- Sidebar Content -->
  <aside>
    <section>
      <h3>Quick Links</h3>
      <nav>
        <ul>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </nav>
    </section>

    <section>
      <h3>Newsletter Signup</h3>
      <form>
        <label for="email">Subscribe to our newsletter:</label>
        <input type="email" id="email" name="email" required>
        <button type="submit">Subscribe</button>
      </form>
    </section>
  </aside>

  <!-- Page Footer -->
  <footer>
    <section>
      <h3>Contact Information</h3>
      <address>
        <p>123 Business St.<br>
        City, State 12345<br>
        Phone: <a href="tel:+1234567890">(123) 456-7890</a><br>
        Email: <a href="mailto:info@company.com">info@company.com</a></p>
      </address>
    </section>

    <section>
      <h3>Follow Us</h3>
      <nav>
        <ul>
          <li><a href="#facebook">Facebook</a></li>
          <li><a href="#twitter">Twitter</a></li>
          <li><a href="#linkedin">LinkedIn</a></li>
        </ul>
      </nav>
    </section>

    <section>
      <h3>Legal</h3>
      <nav>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#cookies">Cookie Policy</a></li>
        </ul>
      </nav>
    </section>

    <p>&copy; 2024 Company Name. All rights reserved.</p>
  </footer>
</body>
</html>
\\\`\\\`\\\`

## Footer Best Practices
- Include copyright information
- Add contact details or links
- Provide navigation for important pages
- Include social media links
- Add legal links (privacy, terms)
- Keep footer content relevant and useful
- Use proper semantic structure within footer
    `,
  keyTerms: [
    { term: "Footer Element", definition: "Semantic element representing the footer of a section, article, or page." },
    { term: "Sectioning Content", definition: "Elements that define the scope of headers and footers (article, section, nav, aside)." },
    { term: "Address Element", definition: "Element for contact information related to the nearest article or body element." },
    { term: "Semantic Layout", definition: "Page structure using HTML5 semantic elements for meaningful content organization." },
    { term: "Document Structure", definition: "The hierarchical organization of content using semantic HTML elements." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Page Footer",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'page-footer.html' with basic page structure.",
        "Add header with site title and navigation.",
        "Include main content with a few paragraphs.",
        "Create footer with copyright, contact link, and social links.",
        "Test that all links are properly structured."
      ]
    },
    {
      id: 2,
      title: "Article with Footer",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'article-footer.html' with a complete article.",
        "Include article header with title and publication date.",
        "Add substantial content with multiple sections.",
        "Create article footer with author, tags, and related links.",
        "Add page footer separately from article footer."
      ]
    },
    {
      id: 3,
      title: "Complete Website Layout",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'complete-layout.html' using all semantic elements.",
        "Build a business website with header, nav, main, aside, and footer.",
        "Include multiple articles with their own headers and footers.",
        "Add comprehensive page footer with multiple sections.",
        "Ensure proper nesting and semantic structure throughout.",
        "Include contact information using the address element."
      ]
    }
  ]
};
