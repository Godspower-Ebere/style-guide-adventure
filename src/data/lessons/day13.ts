
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
Welcome to the world of semantic HTML! This is where we stop just making things look good and start making them meaningful. Think of semantic elements as giving your HTML a vocabulary to describe what each part actually does, not just how it looks.

## Why Semantic HTML Matters

Let me tell you why this is so important. When you use semantic HTML:
- **Screen readers** can navigate your site better for visually impaired users
- **Search engines** understand your content structure and rank you higher
- **Other developers** can read your code like a book
- **Your future self** will thank you when you revisit the code

It's like the difference between a messy room where everything is just "stuff" versus an organized room where everything has its proper place and purpose.

## The Header Element - More Than Just a Top Section

The header element isn't just for the top of your page - it's for any introductory content. Think of it as the "introduction" to whatever section it's in.

### Page Header
<header>
  <h1>My Amazing Website</h1>
  <p>Welcome to the best site on the internet!</p>
</header>

This is your main page header - what users see first when they visit your site.

### Section Headers
But headers can be used anywhere you need introductory content:

<article>
  <header>
    <h2>How to Bake Perfect Cookies</h2>
    <p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>
    <p>By <strong>Chef Amanda</strong></p>
  </header>
  <p>Cookie baking is an art form that requires...</p>
</article>

See how this header introduces the article? It sets the stage with the title, date, and author.

## The Nav Element - Your Site's GPS

The nav element is for major navigation blocks. It's like putting up road signs on your website to help people find their way around.

### Basic Navigation
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About Us</a></li>
    <li><a href="#services">Our Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

### Navigation Best Practices

Here's what makes navigation great:
1. **Use lists** - They create logical structure
2. **Write descriptive link text** - "Click here" tells us nothing useful
3. **Keep it organized** - Group related links together
4. **Don't overuse nav** - Not every link needs to be in a nav element

## Bringing Header and Nav Together

Here's how they work beautifully together:

<header>
  <h1>TechCorp Solutions</h1>
  <p>Innovation at its finest</p>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

This creates a complete page header with integrated navigation - exactly what you see on professional websites.

## Multiple Headers and Navs

Here's something cool - you can have multiple headers and navs on the same page! Each one serves its specific section:

<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Blog</title>
</head>
<body>
    <!-- Main page header -->
    <header>
        <h1>Sarah's Tech Blog</h1>
        <p>Exploring the latest in web development</p>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#tutorials">Tutorials</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- First article with its own header -->
        <article>
            <header>
                <h2>Getting Started with CSS Grid</h2>
                <p>Published <time datetime="2024-01-20">January 20, 2024</time></p>
                <p>By <strong>Sarah Johnson</strong></p>
            </header>
            <p>CSS Grid is revolutionizing how we create layouts...</p>
        </article>

        <!-- Second article with its own header -->
        <article>
            <header>
                <h2>JavaScript Tips for Beginners</h2>
                <p>Published <time datetime="2024-01-18">January 18, 2024</time></p>
                <p>By <strong>Sarah Johnson</strong></p>
            </header>
            <p>Learning JavaScript can be overwhelming, but...</p>
        </article>
    </main>

    <!-- Footer navigation -->
    <footer>
        <nav>
            <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#sitemap">Site Map</a></li>
            </ul>
        </nav>
        <p>&copy; 2024 Sarah's Tech Blog. All rights reserved.</p>
    </footer>
</body>
</html>

## Real-World Example - Business Website

Let me show you how this looks in a complete business website:

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Green Gardens Landscaping</title>
</head>
<body>
    <header>
        <h1>Green Gardens Landscaping</h1>
        <p>Transforming outdoor spaces since 2010</p>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="services">
            <header>
                <h2>Our Services</h2>
                <p>Professional landscaping solutions for every need</p>
            </header>
            <p>We offer comprehensive landscaping services...</p>
        </section>

        <section id="testimonials">
            <header>
                <h2>What Our Clients Say</h2>
                <p>Real feedback from satisfied customers</p>
            </header>
            <p>Customer testimonials would go here...</p>
        </section>
    </main>
</body>
</html>

## Common Mistakes to Avoid

1. **Don't use header just for styling** - Use it for actual introductory content
2. **Don't put every link in nav** - Only major navigation sections
3. **Don't forget the nav around lists** - Lists alone aren't semantic navigation
4. **Don't skip the header hierarchy** - Keep your headings logical (h1, h2, h3...)

## The Big Picture

Think of semantic HTML as building a house with proper blueprints. Sure, you could build walls anywhere, but following architectural principles creates something stable, accessible, and beautiful. Header and nav elements are the foundation of good website architecture.

Remember: semantic HTML isn't just about following rules - it's about creating websites that work better for everyone who uses them!
    `,
  keyTerms: [
    { term: "Semantic HTML", definition: "HTML elements that clearly describe their meaning and purpose in the document structure." },
    { term: "Header Element", definition: "Semantic element that contains introductory content for a page, section, or article." },
    { term: "Nav Element", definition: "Semantic element that defines a section of navigation links for major site navigation." },
    { term: "Accessibility", definition: "Design that ensures web content is usable by people with disabilities and assistive technologies." },
    { term: "SEO", definition: "Search Engine Optimization - techniques to improve website visibility in search results through better structure." }
  ],
  exercises: [
    {
      id: 1,
      title: "Personal Website Header",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'personal-header.html' with complete HTML5 structure.",
        "Add a semantic header element containing your name as an h1.",
        "Include a tagline or brief description in a paragraph below your name.",
        "Create a simple navigation with links to: Home, About, Projects, Contact.",
        "Use proper semantic structure with nav element and unordered list.",
        "Add basic CSS styling to make the header look professional.",
        "Test that all navigation links are properly structured and accessible."
      ]
    },
    {
      id: 2,
      title: "Blog Header with Navigation",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'blog-header.html' for a personal blog website.",
        "Design a header with blog title, subtitle, and main navigation.",
        "Include navigation links: Home, Categories, Archives, About, Contact.",
        "Add a secondary navigation in the header for social media links.",
        "Use proper heading hierarchy (h1 for blog title).",
        "Include publication information or author bio in the header.",
        "Ensure all navigation uses semantic nav elements and proper list structure.",
        "Test the complete header structure and navigation accessibility."
      ]
    },
    {
      id: 3,
      title: "Multi-Section Headers",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'multi-headers.html' demonstrating multiple header usage.",
        "Build a main page header with site branding and primary navigation.",
        "Add at least 3 article sections, each with their own semantic headers.",
        "Include article titles, publication dates, and author information in article headers.",
        "Create a services section with its own header containing section title and description.",
        "Use proper time elements for dates with datetime attributes.",
        "Ensure proper heading hierarchy throughout (h1, h2, h3 as appropriate).",
        "Test that each header serves its specific section appropriately."
      ]
    },
    {
      id: 4,
      title: "Business Website Structure",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'business-website.html' for a professional service company.",
        "Design a comprehensive header with company name, tagline, and full navigation.",
        "Include primary navigation: Home, Services, About, Testimonials, Contact.",
        "Add a secondary navigation for additional links: Blog, Careers, Privacy Policy.",
        "Create section headers for different parts of the main content.",
        "Use proper semantic structure throughout with meaningful content.",
        "Include contact information and business hours in appropriate sections.",
        "Ensure the website structure is professional and follows semantic HTML best practices."
      ]
    },
    {
      id: 5,
      title: "News Website Layout",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'news-website.html' for a complete news website structure.",
        "Build a comprehensive site header with news organization branding.",
        "Create primary navigation for main news categories (Politics, Sports, Technology, etc.).",
        "Add multiple article sections, each with detailed headers including headlines, bylines, and timestamps.",
        "Include a breaking news section with its own header and navigation.",
        "Create section headers for different news categories within the main content.",
        "Add proper navigation for article categories and archives.",
        "Use semantic time elements with proper datetime attributes for all dates.",
        "Ensure proper accessibility with ARIA labels where appropriate.",
        "Test the complete structure for logical navigation flow and semantic correctness.",
        "Include realistic content that demonstrates understanding of news website structure."
      ]
    }
  ]
};
