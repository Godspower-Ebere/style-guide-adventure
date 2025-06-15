
import { DayLesson } from "../types";

export const day16: DayLesson = {
  day: 16,
  title: "HTML Semantic Elements - Footer",
  category: "Advanced HTML",
  description: "Master the footer element to create meaningful page conclusions with proper semantic structure and accessibility.",
  learningObjectives: [
    "Understand the purpose and proper use of footer elements.",
    "Learn to create page footers with essential information and navigation.",
    "Master sectioning content footers for articles and sections.",
    "Build accessible footer structures with proper semantic meaning."
  ],
  detailedExplanation: `
Today we'll complete our semantic elements journey by mastering the footer element, which provides closure and additional information.

## The Footer Element
The footer element represents concluding information for its nearest sectioning content or sectioning root.

\`\`\`html
<!-- Page footer -->
<footer>
  <p>&copy; 2024 My Website. All rights reserved.</p>
  <nav>
    <a href="#privacy">Privacy Policy</a> |
    <a href="#terms">Terms of Service</a>
  </nav>
</footer>
\`\`\`

## Types of Footers

### Page Footer
The main footer at the bottom of the page:

\`\`\`html
<body>
  <header>...</header>
  <main>...</main>
  
  <footer>
    <div>
      <h3>Contact Information</h3>
      <p>Email: info@company.com</p>
      <p>Phone: (555) 123-4567</p>
    </div>
    
    <div>
      <h3>Quick Links</h3>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    
    <div>
      <p>&copy; 2024 Company Name. All rights reserved.</p>
    </div>
  </footer>
</body>
\`\`\`

### Article Footer
Footers for individual articles:

\`\`\`html
<article>
  <header>
    <h2>Article Title</h2>
    <p>By Author Name</p>
  </header>
  
  <p>Article content goes here...</p>
  
  <footer>
    <p>Published: <time>March 15, 2024</time></p>
    <p>Tags: <a href="#tech">Technology</a>, <a href="#web">Web Development</a></p>
    <p>Share: <a href="#">Facebook</a> | <a href="#">Twitter</a></p>
  </footer>
</article>
\`\`\`

### Section Footer
Footers for content sections:

\`\`\`html
<section>
  <h2>Product Reviews</h2>
  <p>Latest reviews from our customers...</p>
  
  <footer>
    <p>Want to submit a review? <a href="#contact">Contact us</a></p>
    <p>Last updated: <time>March 10, 2024</time></p>
  </footer>
</section>
\`\`\`

## Common Footer Content
- Copyright information
- Contact details
- Site navigation links
- Social media links
- Legal information (privacy policy, terms)
- Company information
- Publication dates and authorship

## Complete Website Structure
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Complete Semantic Website</title>
</head>
<body>
  <header>
    <h1>TechBlog</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#articles">Articles</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>The Future of Web Development</h2>
        <p>By Tech Writer | <time>2024-03-15</time></p>
      </header>
      
      <section>
        <h3>Emerging Technologies</h3>
        <p>New technologies are shaping...</p>
      </section>
      
      <footer>
        <p>Categories: Web Development, Technology</p>
        <p>Read time: 5 minutes</p>
      </footer>
    </article>
    
    <aside>
      <h3>Related Articles</h3>
      <ul>
        <li><a href="#">HTML5 Features</a></li>
        <li><a href="#">CSS Grid Guide</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <section>
      <h3>About TechBlog</h3>
      <p>Your source for web development news and tutorials.</p>
    </section>
    
    <section>
      <h3>Contact</h3>
      <p>Email: hello@techblog.com</p>
      <p>Follow us: <a href="#">Twitter</a> | <a href="#">LinkedIn</a></p>
    </section>
    
    <section>
      <p>&copy; 2024 TechBlog. All rights reserved.</p>
      <nav>
        <a href="#privacy">Privacy</a> | 
        <a href="#terms">Terms</a>
      </nav>
    </section>
  </footer>
</body>
</html>
\`\`\`
    `,
  keyTerms: [
    { term: "Footer Element", definition: "Semantic element that represents concluding information for a page or section." },
    { term: "Sectioning Content", definition: "HTML elements that define the scope of headers, footers, and heading hierarchy." },
    { term: "Page Footer", definition: "The main footer element that appears at the bottom of a web page." },
    { term: "Article Footer", definition: "Footer element that provides concluding information for a specific article." },
    { term: "Legal Information", definition: "Important legal content like copyright notices, terms of service, and privacy policies." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Page Footer",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'simple-footer.html' with basic page structure.",
        "Add header with site title and main content area.",
        "Create a footer with copyright information and current year.",
        "Include 2-3 footer navigation links.",
        "Test that the footer appears at the bottom of the page."
      ]
    },
    {
      id: 2,
      title: "Article with Footer",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'article-footer.html' with a complete article structure.",
        "Write an article about a topic you're interested in.",
        "Add an article header with title and author information.",
        "Include an article footer with publication date and tags.",
        "Add a separate page footer with site information."
      ]
    },
    {
      id: 3,
      title: "Multi-Section Footer",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'complex-footer.html' with comprehensive footer structure.",
        "Build a footer with multiple sections: About, Contact, Links.",
        "Include social media links and contact information.",
        "Add proper navigation within the footer.",
        "Ensure the footer is well-organized and accessible."
      ]
    },
    {
      id: 4,
      title: "Business Website Footer",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'business-footer.html' for a professional business website.",
        "Design a comprehensive footer with company information.",
        "Include sections for services, contact info, and legal pages.",
        "Add social media links and newsletter signup call-to-action.",
        "Make the footer look professional with CSS styling."
      ]
    },
    {
      id: 5,
      title: "Complete Semantic Website",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'semantic-complete.html' using all learned semantic elements.",
        "Build a complete website with header, nav, main, articles, sections, asides, and footer.",
        "Each semantic element should be used appropriately and meaningfully.",
        "Include multiple articles with their own footers.",
        "Create a comprehensive page footer with all essential business information."
      ]
    }
  ]
};
