
import { DayLesson } from "../types";

export const day25: DayLesson = {
  day: 25,
  title: "HTML Meta Tags and SEO",
  category: "HTML5 Features",
  description: "Master HTML meta tags and SEO optimization techniques to improve search engine visibility and social media sharing.",
  learningObjectives: [
    "Understand the importance of meta tags for SEO and social sharing.",
    "Learn to implement essential meta tags for search optimization.",
    "Master Open Graph and Twitter Card meta tags.",
    "Build SEO-optimized web pages with proper meta tag structure."
  ],
  detailedExplanation: `
Meta tags provide metadata about HTML documents and are crucial for search engine optimization (SEO) and social media sharing.

## Essential Meta Tags
### Basic Document Meta Tags
\`\`\`html
<head>
  <!-- Character encoding -->
  <meta charset="UTF-8">
  
  <!-- Viewport for responsive design -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Page title (most important for SEO) -->
  <title>Your Page Title - Keep it under 60 characters</title>
  
  <!-- Meta description for search results -->
  <meta name="description" content="A concise description of your page content that appears in search results. Keep it under 160 characters.">
  
  <!-- Keywords (less important now but still used) -->
  <meta name="keywords" content="html, seo, meta tags, web development">
  
  <!-- Author information -->
  <meta name="author" content="Your Name">
</head>
\`\`\`

## SEO Meta Tags
### Search Engine Optimization
\`\`\`html
<head>
  <!-- Robots meta tag controls search engine crawling -->
  <meta name="robots" content="index, follow">
  
  <!-- Canonical URL to prevent duplicate content issues -->
  <link rel="canonical" href="https://example.com/page">
  
  <!-- Language and region -->
  <meta name="language" content="English">
  <meta name="geo.region" content="US-CA">
  <meta name="geo.position" content="37.7749;-122.4194">
  
  <!-- Content rating -->
  <meta name="rating" content="general">
</head>
\`\`\`

## Open Graph Meta Tags
Open Graph tags control how your content appears when shared on social media:

\`\`\`html
<head>
  <!-- Basic Open Graph tags -->
  <meta property="og:title" content="Your Page Title">
  <meta property="og:description" content="Description that appears when shared on social media">
  <meta property="og:image" content="https://example.com/image.jpg">
  <meta property="og:url" content="https://example.com/page">
  <meta property="og:type" content="website">
  
  <!-- Additional Open Graph tags -->
  <meta property="og:site_name" content="Your Site Name">
  <meta property="og:locale" content="en_US">
  
  <!-- For articles -->
  <meta property="article:author" content="Author Name">
  <meta property="article:published_time" content="2024-03-15T10:00:00Z">
</head>
\`\`\`

## Twitter Card Meta Tags
Twitter Cards enhance how links appear on Twitter:

\`\`\`html
<head>
  <!-- Twitter Card type -->
  <meta name="twitter:card" content="summary_large_image">
  
  <!-- Twitter handle -->
  <meta name="twitter:site" content="@yourtwitterhandle">
  <meta name="twitter:creator" content="@authorhandle">
  
  <!-- Content for Twitter -->
  <meta name="twitter:title" content="Your Page Title">
  <meta name="twitter:description" content="Description for Twitter sharing">
  <meta name="twitter:image" content="https://example.com/twitter-image.jpg">
</head>
\`\`\`

## Technical Meta Tags
### Performance and Security
\`\`\`html
<head>
  <!-- Preload important resources -->
  <link rel="preload" href="important-font.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- DNS prefetch for external domains -->
  <link rel="dns-prefetch" href="//fonts.googleapis.com">
  
  <!-- Security headers -->
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'">
  <meta http-equiv="X-Content-Type-Options" content="nosniff">
  
  <!-- Cache control -->
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
</head>
\`\`\`

## Complete SEO-Optimized Example
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Basic Meta Tags -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO Meta Tags -->
  <title>Learn Web Development - HTML, CSS, JavaScript Tutorials</title>
  <meta name="description" content="Master web development with our comprehensive HTML, CSS, and JavaScript tutorials. Perfect for beginners and experienced developers.">
  <meta name="keywords" content="web development, HTML, CSS, JavaScript, tutorials, programming">
  <meta name="author" content="Web Dev Academy">
  <meta name="robots" content="index, follow">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://webdevacademy.com/tutorials">
  
  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="Learn Web Development - HTML, CSS, JavaScript Tutorials">
  <meta property="og:description" content="Master web development with our comprehensive tutorials covering HTML, CSS, and JavaScript fundamentals.">
  <meta property="og:image" content="https://webdevacademy.com/images/og-image.jpg">
  <meta property="og:url" content="https://webdevacademy.com/tutorials">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Web Dev Academy">
  <meta property="og:locale" content="en_US">
  
  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@webdevacademy">
  <meta name="twitter:title" content="Learn Web Development - HTML, CSS, JavaScript">
  <meta name="twitter:description" content="Master web development with comprehensive tutorials for all skill levels.">
  <meta name="twitter:image" content="https://webdevacademy.com/images/twitter-card.jpg">
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  
  <!-- Preload critical resources -->
  <link rel="preload" href="styles.css" as="style">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Web Development Tutorials</h1>
    <nav>
      <ul>
        <li><a href="#html">HTML</a></li>
        <li><a href="#css">CSS</a></li>
        <li><a href="#javascript">JavaScript</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <article>
      <h2>Master Modern Web Development</h2>
      <p>Learn the essential skills needed to build modern, responsive websites.</p>
      
      <section id="html">
        <h3>HTML Fundamentals</h3>
        <p>Start with HTML basics and semantic markup.</p>
      </section>
      
      <section id="css">
        <h3>CSS Styling</h3>
        <p>Master CSS for beautiful, responsive designs.</p>
      </section>
      
      <section id="javascript">
        <h3>JavaScript Programming</h3>
        <p>Add interactivity with JavaScript fundamentals.</p>
      </section>
    </article>
  </main>
  
  <footer>
    <p>&copy; 2024 Web Dev Academy. All rights reserved.</p>
  </footer>
</body>
</html>
\`\`\`
    `,
  keyTerms: [
    { term: "Meta Tags", definition: "HTML elements that provide metadata about a web page, placed in the head section." },
    { term: "SEO", definition: "Search Engine Optimization - practices to improve a website's visibility in search engine results." },
    { term: "Open Graph", definition: "Protocol that controls how URLs are displayed when shared on social media platforms." },
    { term: "Twitter Cards", definition: "Rich media attachments that enhance how links appear when shared on Twitter." },
    { term: "Canonical URL", definition: "The preferred version of a web page to prevent duplicate content issues." },
    { term: "Meta Description", definition: "Brief description of a page's content that appears in search engine results." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic SEO Meta Tags",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'seo-basics.html' with complete HTML5 structure.",
        "Add proper charset and viewport meta tags in the head section.",
        "Create a descriptive title tag (keep it under 60 characters) about a fictional local bakery.",
        "Add a meta description tag (under 160 characters) describing the bakery's specialties.",
        "Include meta keywords tag with relevant terms for a bakery business.",
        "Add author meta tag with your name as the website creator.",
        "Include a robots meta tag set to 'index, follow'.",
        "Create simple content in the body with header, main content about the bakery, and footer.",
        "Validate your HTML and test how your title and description might appear in search results."
      ]
    },
    {
      id: 2,
      title: "Social Media Meta Tags",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'social-media-meta.html' with proper HTML5 document structure.",
        "Build a page about a fictional tech conference with appropriate title and basic meta tags.",
        "Add complete Open Graph meta tags including title, description, image URL, page URL, and type.",
        "Include Open Graph site name and locale information.",
        "Add Twitter Card meta tags with card type 'summary_large_image'.",
        "Include Twitter site and creator handles (you can use fictional ones).",
        "Add Twitter-specific title, description, and image meta tags.",
        "Create compelling content about the tech conference in the body of the page.",
        "Add placeholder image URLs (you can use https://via.placeholder.com/1200x630 for social images).",
        "Test your Open Graph tags using Facebook's Sharing Debugger tool (search for 'Facebook Sharing Debugger' online)."
      ]
    },
    {
      id: 3,
      title: "Complete SEO Optimization",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 's
