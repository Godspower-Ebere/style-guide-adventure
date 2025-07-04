
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
Alright, let's talk about two of the most important semantic elements for organizing your content: main and section. Think of them as the architects of your webpage - they create the blueprint that makes everything make sense.

## The Main Element - Your Content's Star

The main element is like the headline act at a concert - it contains the primary content that people came to see. Every page should have exactly one main element, and it holds the content that's directly related to your page's central topic.

### Basic Main Usage
<body>
  <header>
    <h1>My Cooking Blog</h1>
    <nav>...</nav>
  </header>
  
  <main>
    <h1>Today's Recipe: Perfect Chocolate Chip Cookies</h1>
    <p>Welcome to today's recipe adventure...</p>
  </main>
  
  <footer>...</footer>
</body>

See how the main element wraps around the actual content people came to read? The header and footer are important, but the main element contains what the page is really about.

### Main Element Rules (They're Simple!)
1. **Only one per page** - Think of it as the main character in your story
2. **Don't nest it inside other semantic elements** - It stands on its own
3. **It contains what the page is about** - Not sidebars, headers, or footers

## The Section Element - Your Content Organizer

Now, the section element is like a chapter in a book. It groups related content together under a common theme. Each section should have its own heading and represent a distinct part of your content.

### Basic Section Usage
<main>
  <section>
    <h2>About Our Restaurant</h2>
    <p>We've been serving authentic Italian cuisine since 1985...</p>
  </section>
  
  <section>
    <h2>Our Signature Dishes</h2>
    <p>From classic pasta to modern interpretations...</p>
  </section>
</main>

Each section has its own topic and heading - that's the key!

### When to Use Section
Ask yourself: "Does this content deserve its own chapter?" If yes, use a section. Here are some great examples:
- Different topics on the same page
- Steps in a process
- Categories of content
- Parts of a larger story

## Bringing Main and Section Together

Here's how they work as a team in a real website:

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Digital Marketing Agency</title>
</head>
<body>
    <header>
        <h1>WebSuccess Digital</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <h2>Transform Your Digital Presence</h2>
            <p>We help businesses grow through strategic digital marketing...</p>
        </section>

        <section id="services">
            <h2>Our Services</h2>
            <p>Comprehensive digital marketing solutions tailored to your needs.</p>
            
            <section>
                <h3>Search Engine Optimization</h3>
                <p>Improve your website's visibility in search results...</p>
            </section>
            
            <section>
                <h3>Social Media Marketing</h3>
                <p>Build your brand presence across social platforms...</p>
            </section>
            
            <section>
                <h3>Content Creation</h3>
                <p>Engaging content that connects with your audience...</p>
            </section>
        </section>

        <section id="testimonials">
            <h2>What Our Clients Say</h2>
            <p>Real results from real businesses we've helped grow.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 WebSuccess Digital</p>
    </footer>
</body>
</html>

Notice how we have sections within sections? That's totally fine! The services section contains three subsections for different service types.

## Creating Proper Heading Hierarchy

This is super important - your headings should create a logical outline:

<main>
  <h1>Complete Guide to Home Gardening</h1>  <!-- Page title -->
  
  <section>
    <h2>Getting Started</h2>  <!-- Main section -->
    <p>Gardening basics for beginners...</p>
    
    <section>
      <h3>Choosing Your Location</h3>  <!-- Subsection -->
      <p>Sunlight and soil considerations...</p>
    </section>
    
    <section>
      <h3>Essential Tools</h3>  <!-- Subsection -->
      <p>What you need to get started...</p>
    </section>
  </section>
  
  <section>
    <h2>Plant Selection</h2>  <!-- Main section -->
    <p>Choosing the right plants for your garden...</p>
    
    <section>
      <h3>Vegetables</h3>  <!-- Subsection -->
      <p>Easy vegetables for beginners...</p>
    </section>
    
    <section>
      <h3>Flowers</h3>  <!-- Subsection -->
      <p>Colorful flowers that thrive...</p>
    </section>
  </section>
</main>

This creates a clear, logical structure that screen readers and search engines love!

## Real-World Example - Portfolio Website

Let me show you how this works in a complete portfolio:

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Alex Rivera - Web Developer</title>
</head>
<body>
    <header>
        <h1>Alex Rivera</h1>
        <p>Full-Stack Web Developer</p>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>I'm a passionate web developer with 5 years of experience creating digital solutions that make a difference...</p>
        </section>

        <section id="skills">
            <h2>Technical Skills</h2>
            <p>My expertise spans front-end and back-end technologies.</p>
            
            <section>
                <h3>Front-End Development</h3>
                <p>HTML5, CSS3, JavaScript, React, Vue.js</p>
            </section>
            
            <section>
                <h3>Back-End Development</h3>
                <p>Node.js, Python, PHP, MySQL, MongoDB</p>
            </section>
        </section>

        <section id="projects">
            <h2>Featured Projects</h2>
            <p>Here are some projects I'm particularly proud of.</p>
            
            <section>
                <h3>E-Commerce Platform</h3>
                <p>A full-featured online store built with React and Node.js...</p>
            </section>
            
            <section>
                <h3>Task Management App</h3>
                <p>A collaborative tool for team productivity...</p>
            </section>
        </section>

        <section id="contact">
            <h2>Get In Touch</h2>
            <p>Ready to work together? I'd love to hear from you!</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Alex Rivera. All rights reserved.</p>
    </footer>
</body>
</html>

## Common Mistakes to Avoid

1. **Multiple main elements** - Only one per page!
2. **Empty sections** - Every section needs content and a heading
3. **Wrong heading order** - Don't skip from h2 to h4
4. **Using sections for styling** - Use divs for pure styling, sections for meaningful groups
5. **Forgetting about screen readers** - Your structure should make sense when read aloud

## Why This Matters

When you use main and section properly:
- **Screen readers** can jump between sections easily
- **Search engines** understand your content structure
- **Other developers** can quickly understand your page layout
- **Users** can scan your content more effectively

Think of semantic HTML as creating a table of contents for your webpage. Every section is a chapter, and main is the entire book content. When you structure things this way, everyone wins!
    `,
  keyTerms: [
    { term: "Main Element", definition: "Semantic element that contains the primary content of a web page document - only one per page." },
    { term: "Section Element", definition: "Semantic element that groups related content together with a thematic heading." },
    { term: "Document Outline", definition: "The hierarchical structure of headings and sections in an HTML document." },
    { term: "Thematic Content", definition: "Content that shares a common topic or purpose within a section." },
    { term: "Heading Hierarchy", definition: "The logical order of heading levels (h1-h6) that creates document structure." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Page Structure",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'basic-structure.html' with complete HTML5 document structure.",
        "Add a header with site title 'My Personal Website' and simple navigation.",
        "Create a main element containing two sections: 'Welcome' and 'About Me'.",
        "Each section should have an h2 heading and at least one paragraph of content.",
        "Add a footer with your name and current year.",
        "Ensure proper heading hierarchy throughout the document.",
        "Test that the structure is semantically correct and logically organized."
      ]
    },
    {
      id: 2,
      title: "Service Company Layout",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'service-company.html' for a home services business.",
        "Build a header with company name and navigation menu.",
        "Create main content with sections for: 'Our Services', 'Why Choose Us', 'Service Areas'.",
        "Within 'Our Services', add subsections for different service types (plumbing, electrical, etc.).",
        "Use proper heading hierarchy (h1 for page title, h2 for main sections, h3 for subsections).",
        "Include meaningful content in each section that relates to the section topic.",
        "Add navigation links that connect to section IDs using anchor links.",
        "Test the complete structure and navigation functionality."
      ]
    },
    {
      id: 3,
      title: "Educational Content Structure",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'course-outline.html' for an online learning course.",
        "Build comprehensive structure with header, main, and footer elements.",
        "Organize main content into course modules using section elements.",
        "Create at least 4 main course sections with descriptive headings.",
        "Add subsections within each module for specific topics and lessons.",
        "Include a course introduction section with learning objectives.",
        "Add a resources section with additional materials and links.",
        "Ensure perfect heading hierarchy and semantic structure throughout.",
        "Test that the content flows logically and makes sense as a course outline."
      ]
    },
    {
      id: 4,
      title: "Portfolio Website Structure",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'portfolio-website.html' for a professional portfolio.",
        "Design header with your name, title, and professional navigation.",
        "Structure main content with sections: About, Skills, Projects, Experience, Contact.",
        "Within Skills section, create subsections for different skill categories.",
        "In Projects section, create individual subsections for featured projects.",
        "Use appropriate headings that create a logical document outline.",
        "Include realistic, professional content that demonstrates understanding.",
        "Ensure the portfolio structure follows semantic HTML best practices.",
        "Test navigation and content organization for professional presentation."
      ]
    },
    {
      id: 5,
      title: "News Article Layout",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'news-article.html' for a comprehensive news article page.",
        "Build site header with news organization branding and main navigation.",
        "Structure main content with article sections: Breaking News, Main Story, Related Stories, Analysis.",
        "Create detailed subsections within the main story for different aspects of the news.",
        "Add sections for quotes, background information, and expert commentary.",
        "Include a sidebar section with related articles and additional resources.",
        "Use proper heading hierarchy that creates a clear article structure.",
        "Add realistic news content that demonstrates understanding of article organization.",
        "Ensure semantic structure supports accessibility and SEO best practices.",
        "Include navigation elements that help readers move through the article sections.",
        "Test the complete structure for logical flow and professional news presentation."
      ]
    }
  ]
};
