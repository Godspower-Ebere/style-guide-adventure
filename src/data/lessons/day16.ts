
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
Let's wrap up our semantic HTML journey with the footer element and learn how to put everything together into beautiful, meaningful page layouts. Think of the footer as the conclusion to your content story - it provides closure and additional resources.

## The Footer Element - More Than Just Copyright

The footer element represents the footer of its nearest sectioning content. Just like headers, footers can be used in multiple contexts throughout your page, not just at the bottom.

### Page Footer - The Classic
<body>
  <header>...</header>
  <main>...</main>
  
  <footer>
    <p>&copy; 2024 My Amazing Website. All rights reserved.</p>
    <nav>
      <ul>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms of Service</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
    <p>Follow us on social media for updates!</p>
  </footer>
</body>

This is what most people think of when they hear "footer" - the page-level conclusion with legal info, links, and contact details.

### Article Footer - Wrapping Up Content
<article>
  <header>
    <h2>The Ultimate Guide to Coffee Brewing</h2>
    <p>By <strong>Maria Rodriguez</strong></p>
  </header>
  
  <p>Coffee brewing is both an art and a science...</p>
  
  <footer>
    <p>Published: <time datetime="2024-01-15">January 15, 2024</time></p>
    <p>Tags: coffee, brewing, tutorial, beverages</p>
    <p>Author: Maria Rodriguez is a certified barista with 10 years of experience</p>
    <p><a href="#comments">Leave a comment</a> | <a href="#share">Share this article</a></p>
  </footer>
</article>

This article footer provides metadata and actions related specifically to that article.

### Section Footer - Concluding a Topic
<section>
  <h2>Our Premium Services</h2>
  <p>We offer comprehensive business solutions...</p>
  
  <footer>
    <p>Service packages starting at $99/month</p>
    <p><a href="#contact">Contact us for a custom quote</a></p>
    <p>Last updated: <time datetime="2024-01-10">January 10, 2024</time></p>
  </footer>
</section>

Section footers provide conclusion or next steps related to that specific section.

## Building Complete Semantic Layouts

Now let's put everything we've learned together into a complete, professional website structure:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GreenLife Wellness Center</title>
</head>
<body>
    <!-- Site Header -->
    <header role="banner">
        <h1>GreenLife Wellness Center</h1>
        <p>Your journey to better health starts here</p>
        <nav role="navigation">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content Area -->
    <main role="main">
        <!-- Hero Section -->
        <section id="hero">
            <header>
                <h2>Transform Your Health, Transform Your Life</h2>
                <p>Comprehensive wellness solutions for mind, body, and spirit</p>
            </header>
            <p>Welcome to GreenLife Wellness Center, where we believe that true health encompasses more than just the absence of disease...</p>
        </section>

        <!-- Services Section -->
        <section id="services">
            <header>
                <h2>Our Wellness Services</h2>
                <p>Personalized programs designed for your unique health journey</p>
            </header>
            
            <article>
                <header>
                    <h3>Nutritional Counseling</h3>
                    <p>Expert guidance for optimal nutrition</p>
                </header>
                <p>Our certified nutritionists work with you to develop sustainable eating habits...</p>
                <footer>
                    <p>Sessions from $75 | <a href="#nutrition-booking">Book consultation</a></p>
                </footer>
            </article>
            
            <article>
                <header>
                    <h3>Fitness Training</h3>
                    <p>Personalized fitness programs for all levels</p>
                </header>
                <p>Whether you're a beginner or an experienced athlete, our trainers create programs...</p>
                <footer>
                    <p>Packages from $120/month | <a href="#fitness-booking">Start today</a></p>
                </footer>
            </article>
            
            <footer>
                <p>All services include free initial consultation</p>
                <p><a href="#full-services">View complete service menu</a></p>
            </footer>
        </section>

        <!-- Blog Articles Section -->
        <section id="blog">
            <header>
                <h2>Wellness Insights Blog</h2>
                <p>Expert tips and insights for healthy living</p>
            </header>
            
            <article>
                <header>
                    <h3>5 Simple Steps to Better Sleep</h3>
                    <p>Posted <time datetime="2024-01-18">January 18, 2024</time></p>
                    <p>By <strong>Dr. Sarah Chen</strong></p>
                </header>
                
                <p>Quality sleep is the foundation of good health, yet many of us struggle...</p>
                
                <section>
                    <h4>Create a Sleep Sanctuary</h4>
                    <p>Your bedroom environment plays a crucial role in sleep quality...</p>
                </section>
                
                <section>
                    <h4>Establish a Routine</h4>
                    <p>Consistency is key when it comes to healthy sleep patterns...</p>
                </section>
                
                <footer>
                    <p>Categories: Sleep Health, Wellness Tips</p>
                    <p>Tags: sleep, health, wellness, lifestyle</p>
                    <p><a href="#sleep-comments">3 Comments</a> | <a href="#share-sleep">Share</a></p>
                </footer>
            </article>
        </section>
    </main>

    <!-- Sidebar Content -->
    <aside role="complementary">
        <section>
            <header>
                <h3>Quick Health Tips</h3>
            </header>
            <ul>
                <li>Drink 8 glasses of water daily</li>
                <li>Take a 10-minute walk after meals</li>
                <li>Practice deep breathing for 5 minutes</li>
                <li>Get 7-9 hours of sleep nightly</li>
            </ul>
        </section>

        <section>
            <header>
                <h3>Upcoming Events</h3>
            </header>
            <article>
                <header>
                    <h4>Free Yoga Workshop</h4>
                    <time datetime="2024-02-15">February 15, 2024</time>
                </header>
                <p>Join us for a beginner-friendly yoga session...</p>
                <footer>
                    <p><a href="#yoga-register">Register now</a></p>
                </footer>
            </article>
        </section>

        <section>
            <header>
                <h3>Newsletter Signup</h3>
            </header>
            <p>Get weekly wellness tips delivered to your inbox</p>
            <footer>
                <p><a href="#newsletter">Subscribe now</a></p>
            </footer>
        </section>
    </aside>

    <!-- Site Footer -->
    <footer role="contentinfo">
        <section>
            <header>
                <h3>Contact Information</h3>
            </header>
            <address>
                <p>GreenLife Wellness Center<br>
                123 Health Street<br>
                Wellness City, WC 12345<br>
                Phone: <a href="tel:+15551234567">(555) 123-4567</a><br>
                Email: <a href="mailto:info@greenlifewellness.com">info@greenlifewellness.com</a></p>
            </address>
        </section>

        <section>
            <header>
                <h3>Follow Us</h3>
            </header>
            <nav>
                <ul>
                    <li><a href="#facebook">Facebook</a></li>
                    <li><a href="#instagram">Instagram</a></li>
                    <li><a href="#twitter">Twitter</a></li>
                    <li><a href="#youtube">YouTube</a></li>
                </ul>
            </nav>
        </section>

        <section>
            <header>
                <h3>Legal</h3>
            </header>
            <nav>
                <ul>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                    <li><a href="#accessibility">Accessibility Statement</a></li>
                    <li><a href="#sitemap">Site Map</a></li>
                </ul>
            </nav>
        </section>

        <p>&copy; 2024 GreenLife Wellness Center. All rights reserved. | Website designed for your wellness journey.</p>
    </footer>
</body>
</html>

## Footer Best Practices

### What to Include in Page Footers:
1. **Copyright information** - Legal protection and credibility
2. **Contact details** - Make it easy for people to reach you
3. **Legal links** - Privacy policy, terms of service, etc.
4. **Social media links** - Build your community
5. **Site navigation** - Secondary navigation or sitemap
6. **Company information** - Address, registration details

### What to Include in Article/Section Footers:
1. **Publication information** - Dates, authors, sources
2. **Categories and tags** - Content organization
3. **Related actions** - Comments, sharing, bookmarking
4. **Author bio** - Credibility and connection
5. **Next steps** - What readers should do next

## Common Footer Mistakes to Avoid

1. **Stuffing everything in** - Keep it relevant and organized
2. **Making it too heavy** - Don't overwhelm users
3. **Forgetting mobile users** - Ensure footers work on small screens
4. **Ignoring accessibility** - Use proper landmarks and labels
5. **Outdated information** - Keep copyright years and contact info current

## The Power of Complete Semantic Structure

When you use all semantic elements together:
- **Screen readers** can navigate efficiently using landmarks
- **Search engines** understand your content hierarchy perfectly
- **Browsers** can offer better reading modes and accessibility features
- **Developers** can maintain and update your code easily
- **Users** get a better, more accessible experience

Think of semantic HTML as building a house with proper blueprints. Every element has its place and purpose:
- **Header** = Front entrance and signage
- **Nav** = Hallways and directional signs
- **Main** = The main living areas
- **Section** = Individual rooms
- **Article** = Complete, functional spaces
- **Aside** = Closets and storage areas
- **Footer** = Foundation and utilities

When everything works together, you create websites that are not just functional, but truly accessible and meaningful for everyone who visits them!
    `,
  keyTerms: [
    { term: "Footer Element", definition: "Semantic element representing the footer of a section, article, or page with concluding information." },
    { term: "Sectioning Content", definition: "Elements that define the scope of headers and footers (article, section, nav, aside)." },
    { term: "Address Element", definition: "Element for contact information related to the nearest article or body element." },
    { term: "Semantic Layout", definition: "Page structure using HTML5 semantic elements for meaningful content organization." },
    { term: "Document Landmarks", definition: "Semantic elements that create navigation points for assistive technologies." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Page Footer",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'simple-footer.html' with basic complete page structure.",
        "Add header with site title 'My Personal Website' and simple navigation.",
        "Include main content with welcome message and about section.",
        "Create footer with copyright notice, contact email, and social media links.",
        "Use proper semantic structure throughout with appropriate elements.",
        "Test that footer provides meaningful conclusion to the page content."
      ]
    },
    {
      id: 2,
      title: "Article with Multiple Footers",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'multi-footer.html' demonstrating different footer contexts.",
        "Build page header with site branding and navigation.",
        "Create main article with header, content sections, and article footer.",
        "Add article footer with publication date, author, tags, and sharing links.",
        "Include separate page footer with site-wide information and legal links.",
        "Ensure each footer serves its appropriate context and content level.",
        "Test that article footer relates to article and page footer relates to entire site."
      ]
    },
    {
      id: 3,
      title: "Complete Business Website Layout",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'business-layout.html' with comprehensive semantic structure.",
        "Build complete header with company branding and full navigation menu.",
        "Create main content with multiple sections: hero, services, testimonials.",
        "Add sidebar with contact info, quick links, and call-to-action.",
        "Include service articles with individual headers and footers.",
        "Create comprehensive page footer with contact info, social links, and legal pages.",
        "Use proper heading hierarchy and semantic structure throughout.",
        "Test complete layout for logical organization and accessibility."
      ]
    },
    {
      id: 4,
      title: "Blog Website with Complex Structure",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'blog-website.html' for a professional blog with complete semantic layout.",
        "Design site header with blog title, tagline, and category navigation.",
        "Create main content area with featured article and multiple blog posts.",
        "Add comprehensive article footers with metadata, categories, and engagement options.",
        "Include sidebar with author bio, popular posts, and newsletter signup.",
        "Build detailed page footer with contact information, social media, and legal links.",
        "Use address element for contact information in footer.",
        "Ensure proper semantic relationships between all elements."
      ]
    },
    {
      id: 5,
      title: "Complete Magazine-Style Website",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'magazine-website.html' as a comprehensive news/magazine site.",
        "Build sophisticated header with publication branding, main navigation, and breaking news ticker area.",
        "Create complex main content with featured stories, category sections, and multiple articles.",
        "Add detailed article structures with full headers, body content, and comprehensive footers.",
        "Include multiple aside sections: trending topics, editor's picks, advertisement spaces, social feeds.",
        "Design comprehensive page footer with multiple sections: contact, subscription, archives, legal.",
        "Use proper semantic hierarchy throughout with logical heading structure and content organization.",
        "Add realistic content including publication dates, author bylines, and article metadata.",
        "Include proper address elements, time elements with datetime attributes, and navigation landmarks.",
        "Ensure accessibility with proper ARIA roles and semantic structure.",
        "Test that the layout works as a complete, professional publication website.",
        "Document the semantic structure choices and their benefits for accessibility and SEO."
      ]
    }
  ]
};
