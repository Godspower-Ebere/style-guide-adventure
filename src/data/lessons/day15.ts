
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
Today we're diving into two powerful semantic elements that will make your content structure shine: article and aside. Think of article as your main story and aside as the interesting sidebar information that supports it.

## The Article Element - Your Standalone Content

The article element is like a newspaper article - it's a complete, self-contained piece of content that makes sense on its own. If you could take this content and publish it somewhere else without changing anything, it probably belongs in an article element.

### What Makes Good Article Content?
- **Blog posts** - Complete thoughts that stand alone
- **News articles** - Independent stories
- **Forum posts** - Individual contributions to a discussion
- **Product reviews** - Complete evaluations
- **Social media posts** - Self-contained updates

### Basic Article Structure
<article>
  <header>
    <h2>The Future of Web Development</h2>
    <p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>
    <p>By <strong>Sarah Chen</strong></p>
  </header>
  
  <p>Web development is evolving rapidly, and staying current with trends is crucial for developers...</p>
  
  <section>
    <h3>Emerging Technologies</h3>
    <p>Several technologies are shaping the future of web development...</p>
  </section>
  
  <section>
    <h3>What This Means for Developers</h3>
    <p>As these technologies mature, developers need to adapt...</p>
  </section>
  
  <footer>
    <p>Tags: web development, technology, future trends</p>
    <p><a href="#comments">Leave a comment</a> | <a href="#share">Share this article</a></p>
  </footer>
</article>

Notice how this article has everything it needs: title, author, content, and even its own footer with metadata.

## Nested Articles - Articles Within Articles

Here's something cool - you can have articles inside articles! Think of a main conference report with individual session articles:

<article>
  <h1>Web Development Conference 2024 - Full Report</h1>
  <p>Our comprehensive coverage of this year's biggest web dev event...</p>
  
  <article>
    <header>
      <h2>Keynote: The Future of JavaScript</h2>
      <p>Speaker: <strong>Alex Rodriguez</strong></p>
    </header>
    <p>In a packed auditorium, Alex Rodriguez shared insights about JavaScript's evolution...</p>
  </article>
  
  <article>
    <header>
      <h2>Workshop: CSS Grid Mastery</h2>
      <p>Instructor: <strong>Maria Santos</strong></p>
    </header>
    <p>This hands-on workshop took developers through advanced CSS Grid techniques...</p>
  </article>
</article>

Each workshop report is a complete article that could stand alone, but they're also part of the larger conference article.

## The Aside Element - Your Content's Supporting Cast

The aside element is for content that's related to the main content but not essential to understanding it. It's like the sidebars in a magazine - interesting and relevant, but supplementary.

### Types of Aside Content
- **Sidebars** with related links
- **Author biographies**
- **Related articles**
- **Glossary definitions**
- **Pull quotes**
- **Advertisements** (when related to content)

### Basic Aside Usage
<main>
  <article>
    <h1>Understanding Climate Change</h1>
    <p>Climate change is one of the most pressing issues of our time...</p>
  </article>
  
  <aside>
    <h3>Related Resources</h3>
    <ul>
      <li><a href="#ipcc-report">Latest IPCC Climate Report</a></li>
      <li><a href="#carbon-calculator">Personal Carbon Calculator</a></li>
      <li><a href="#green-energy">Guide to Renewable Energy</a></li>
    </ul>
    
    <h3>Quick Facts</h3>
    <ul>
      <li>Global temperature has risen 1.1°C since 1880</li>
      <li>Arctic sea ice is declining at 13% per decade</li>
      <li>Sea level is rising 3.3mm per year</li>
    </ul>
  </aside>
</main>

The aside provides valuable context without interrupting the main article flow.

## Aside Within Articles

You can also put aside elements inside articles for content that's tangentially related to that specific article:

<article>
  <h1>The History of Web Browsers</h1>
  <p>Web browsers have evolved dramatically since the early days of the internet...</p>
  
  <aside>
    <h3>Browser Market Share 2024</h3>
    <ul>
      <li>Chrome: 65%</li>
      <li>Safari: 20%</li>
      <li>Edge: 8%</li>
      <li>Firefox: 5%</li>
      <li>Others: 2%</li>
    </ul>
  </aside>
  
  <p>The browser wars of the 1990s shaped much of what we see today...</p>
</article>

This aside is specifically related to the browser article and wouldn't make sense outside of it.

## Complete Blog Layout Example

Here's how everything comes together in a real blog:

<!DOCTYPE html>
<html lang="en">
<head>
    <title>TechLife Blog - Latest in Technology</title>
</head>
<body>
    <header>
        <h1>TechLife Blog</h1>
        <p>Your source for the latest in technology and innovation</p>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <header>
                <h2>5G Technology: Revolutionizing Mobile Connectivity</h2>
                <p>Published <time datetime="2024-01-20">January 20, 2024</time></p>
                <p>By <strong>Dr. Emily Wang</strong></p>
            </header>
            
            <p>The rollout of 5G technology is transforming how we think about mobile connectivity...</p>
            
            <section>
                <h3>Speed and Performance Benefits</h3>
                <p>5G offers unprecedented speed improvements over 4G networks...</p>
            </section>
            
            <aside>
                <h4>5G vs 4G Speed Comparison</h4>
                <ul>
                    <li>4G Average: 20 Mbps download</li>
                    <li>5G Average: 100+ Mbps download</li>
                    <li>5G Peak: Up to 10 Gbps</li>
                </ul>
            </aside>
            
            <section>
                <h3>Applications and Use Cases</h3>
                <p>Beyond faster downloads, 5G enables new applications...</p>
            </section>
            
            <footer>
                <p>Categories: Technology, Mobile, Innovation</p>
                <p>Tags: 5G, connectivity, wireless, mobile networks</p>
                <p><a href="#comments">12 Comments</a> | <a href="#share">Share</a></p>
            </footer>
        </article>

        <aside>
            <section>
                <h3>About the Author</h3>
                <p><strong>Dr. Emily Wang</strong> is a telecommunications researcher with 15 years of experience in wireless technology development.</p>
            </section>
            
            <section>
                <h3>Related Articles</h3>
                <ul>
                    <li><a href="#wifi6">WiFi 6: The Next Generation of Wireless</a></li>
                    <li><a href="#iot-connectivity">IoT and the Future of Connected Devices</a></li>
                    <li><a href="#mobile-security">Mobile Security in the 5G Era</a></li>
                </ul>
            </section>
            
            <section>
                <h3>Popular This Week</h3>
                <ul>
                    <li><a href="#ai-trends">AI Trends Shaping 2024</a></li>
                    <li><a href="#quantum-computing">Quantum Computing Breakthroughs</a></li>
                    <li><a href="#green-tech">Sustainable Technology Solutions</a></li>
                </ul>
            </section>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 TechLife Blog. All rights reserved.</p>
        <nav>
            <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    </footer>
</body>
</html>

## Key Differences: Article vs Section

People often confuse article and section. Here's how to choose:

### Use Article When:
- Content can stand alone and make sense independently
- You could republish this content elsewhere
- It's a complete unit of information
- Examples: blog posts, news articles, reviews

### Use Section When:
- Content is part of a larger whole
- It needs context from surrounding content
- It's a thematic grouping within a larger piece
- Examples: chapters, steps in a process, categories

## Best Practices for Article and Aside

### For Articles:
1. **Include proper headers** - Title, date, author information
2. **Make them self-contained** - All necessary context included
3. **Use semantic structure** - Sections, headers, footers as needed
4. **Add metadata** - Tags, categories, publication info

### For Asides:
1. **Keep them relevant** - Related to nearby content
2. **Don't make them essential** - Main content should work without them
3. **Use clear headings** - Help users understand the aside's purpose
4. **Consider placement** - Visual location should match content relationship

## Why This Matters

When you use article and aside correctly:
- **Search engines** better understand your content structure
- **Screen readers** can skip aside content if users want to focus on the main article
- **RSS feeds** can extract articles automatically
- **Social media** can better preview your articles when shared
- **Other websites** can syndicate your articles more effectively

Think of semantic HTML as creating a really good table of contents for your webpage. Article and aside elements help organize that table of contents in a way that makes sense to both humans and machines!
    `,
  keyTerms: [
    { term: "Article Element", definition: "Semantic element that represents standalone, self-contained content that could be distributed independently." },
    { term: "Aside Element", definition: "Semantic element for content that is tangentially related to the main content but not essential for understanding." },
    { term: "Standalone Content", definition: "Content that makes complete sense on its own and could be republished elsewhere without changes." },
    { term: "Tangentially Related", definition: "Content that is related but not essential to the main content flow or understanding." },
    { term: "Content Syndication", definition: "The ability to republish or distribute content across multiple platforms while maintaining its structure." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Blog Post",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'simple-blog-post.html' with a single article structure.",
        "Include article header with title 'My First Blog Post', publication date, and author name.",
        "Add main content with at least 3 paragraphs about a topic of your choice.",
        "Create 2 sections within the article with appropriate h3 headings.",
        "Include article footer with categories, tags, and a 'Comments' link.",
        "Add proper time element with datetime attribute for the publication date.",
        "Test that the article structure is semantically correct and complete."
      ]
    },
    {
      id: 2,
      title: "Article with Sidebar",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'article-with-sidebar.html' combining article and aside elements.",
        "Write a main article about a technology topic with proper header structure.",
        "Include 2-3 sections within the article with relevant subheadings.",
        "Add an aside element with related links and supplementary information.",
        "Include author bio section in the aside with realistic information.",
        "Add 'Related Articles' section in aside with at least 4 links.",
        "Ensure aside content enhances but doesn't duplicate the main article.",
        "Test that main content makes sense even without the aside information."
      ]
    },
    {
      id: 3,
      title: "Multi-Article News Page",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'news-page.html' with multiple articles and comprehensive aside.",
        "Include main featured article with full header, content, and footer.",
        "Add 2-3 shorter news articles, each with proper article structure.",
        "Create comprehensive aside with multiple sections: breaking news, weather, sports scores.",
        "Use nested articles where appropriate (like related story summaries).",
        "Include proper time elements and author attribution for all articles.",
        "Add navigation within the aside for different news categories.",
        "Test that each article could stand alone while aside enhances the overall page."
      ]
    },
    {
      id: 4,
      title: "Product Review Blog",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'product-review.html' for a comprehensive product review article.",
        "Structure as a complete article with header containing product name, review date, and reviewer.",
        "Include sections for: Overview, Features, Pros and Cons, Final Verdict.",
        "Add aside with product specifications, price comparison, and related products.",
        "Include rating system information and purchase links in appropriate sections.",
        "Add author bio and credentials in the aside to establish credibility.",
        "Use proper semantic structure throughout with meaningful headings.",
        "Ensure the review article is complete and could be syndicated to other sites."
      ]
    },
    {
      id: 5,
      title: "Complete Magazine-Style Layout",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'magazine-layout.html' as a comprehensive magazine-style webpage.",
        "Design main featured article with full journalistic structure including byline and dateline.",
        "Include multiple supporting articles with varying lengths and topics.",
        "Create sophisticated aside with multiple sections: editor's picks, trending topics, newsletter signup.",
        "Add pull quotes from the main article as aside elements within the article.",
        "Include author profiles with photos (use placeholder images) and social media links.",
        "Create article series or category organization showing relationships between articles.",
        "Add comprehensive metadata including tags, categories, reading time estimates.",
        "Ensure proper semantic hierarchy throughout with logical heading structure.",
        "Include realistic, engaging content that demonstrates understanding of magazine-style layout.",
        "Test that the layout works effectively for both main content consumption and browsing."
      ]
    }
  ]
};
