
import { DayLesson } from "../types";

export const day5: DayLesson = {
  day: 5,
  title: "HTML Links and Navigation - Connecting the Web",
  category: "HTML Basics", 
  description: "Welcome to day 5! Today we're going to learn about one of the most important features that makes the web 'world wide' - links! You'll discover how to connect pages together, link to other websites, and create smooth navigation within your own pages. Links are what turn separate HTML pages into a connected, navigable website!",
  learningObjectives: [
    "Master the anchor tag (<a>) to create all types of hyperlinks",
    "Learn to link to external websites, internal pages, and specific sections within pages",
    "Understand essential link attributes like href, target, title, and rel",
    "Create professional navigation menus and user-friendly site structures",
    "Build accessible links that work great for all users, including those using screen readers"
  ],
  detailedExplanation: `
## Welcome to Day 5 - Let's Connect the Web!

Hey there! Great job making it to day 5. You've learned HTML structure, metadata, text formatting, and lists. Today we're tackling something that will transform your static HTML pages into a connected, navigable website - links!

### Why Links Are the Heart of the Web

Think about it - what makes the internet so powerful? It's the ability to jump from one piece of information to another with just a click. Whether you're going from a blog post to a related article, from a product page to customer reviews, or from your homepage to your contact page, links make it all possible.

Without links, every webpage would be an island. With links, you create bridges that let visitors explore, discover, and engage with your content in meaningful ways.

### The Anchor Tag - Your Gateway to Connection

Every link in HTML starts with the anchor tag: \\\`<a>\\\`. Think of it as dropping an anchor point that visitors can click to sail to a new destination. The most important part is the \\\`href\\\` attribute, which tells the browser where to go when someone clicks the link.

Here's the basic structure:
\\\`\\\`\\\`html
<a href="destination">Text that visitors click</a>
\\\`\\\`\\\`

### The Four Types of Links You'll Use Constantly

Let me walk you through each type with real examples you can use right away:

**1. External Links - Connecting to Other Websites**

These links take visitors to completely different websites. Always include the full URL:

\\\`\\\`\\\`html
<p>For more information about web development, visit 
<a href="https://developer.mozilla.org">Mozilla Developer Network</a> - 
it's an amazing resource!</p>

<p>Follow us on <a href="https://twitter.com/yourcompany">Twitter</a> 
for daily updates and tips.</p>
\\\`\\\`\\\`

**2. Internal Links - Navigating Within Your Site**

These connect different pages within your own website. You just need the filename:

\\\`\\\`\\\`html
<nav>
    <a href="index.html">Home</a>
    <a href="about.html">About Us</a>
    <a href="services.html">Our Services</a>
    <a href="contact.html">Contact</a>
</nav>

<p>Learn more about our company on our 
<a href="about.html">About page</a>.</p>
\\\`\\\`\\\`

**3. Anchor Links - Jumping Within the Same Page**

These are perfect for long pages with multiple sections. You link to specific IDs:

\\\`\\\`\\\`html
<!-- Table of contents at the top -->
<h2>Table of Contents</h2>
<ul>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#advanced-topics">Advanced Topics</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
</ul>

<!-- Later in the page -->
<h2 id="introduction">Introduction</h2>
<p>Welcome to our comprehensive guide...</p>

<h2 id="getting-started">Getting Started</h2>
<p>First, let's cover the basics...</p>

<!-- At the bottom of sections -->
<p><a href="#top">Back to Top</a></p>
\\\`\\\`\\\`

**4. Email and Phone Links - Direct Communication**

These links open the user's email client or phone dialer:

\\\`\\\`\\\`html
<p>Questions? <a href="mailto:support@yoursite.com">Email us</a> 
or <a href="tel:+1-555-123-4567">call us at (555) 123-4567</a>.</p>

<p>For business inquiries: 
<a href="mailto:business@yoursite.com?subject=Partnership Inquiry">
Contact our business team</a></p>
\\\`\\\`\\\`

### Essential Link Attributes That Make Links Better

**target="_blank" - Opening Links in New Tabs**

Use this when you want external links to open in a new tab, so visitors don't leave your site:

\\\`\\\`\\\`html
<p>Check out this <a href="https://example.com" target="_blank">
amazing tutorial</a> (opens in new tab).</p>
\\\`\\\`\\\`

**title - Adding Helpful Tooltips**

This provides additional information when users hover over the link:

\\\`\\\`\\\`html
<a href="contact.html" title="Get in touch with our friendly team">
Contact Us</a>

<a href="https://github.com/yourproject" title="View the source code on GitHub">
Project Repository</a>
\\\`\\\`\\\`

**rel="noopener" - Security for External Links**

When using target="_blank", add this for security:

\\\`\\\`\\\`html
<a href="https://external-site.com" target="_blank" rel="noopener">
External Resource</a>
\\\`\\\`\\\`

### Creating Professional Navigation

Here's how to build a navigation menu that looks and works great:

\\\`\\\`\\\`html
<header>
    <h1>My Amazing Website</h1>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
</header>
\\\`\\\`\\\`

### Best Practices for Better Links

**Write descriptive link text** - Instead of "click here," use descriptive text:
- Bad: "For more information, click here"
- Good: "Read our complete guide to web accessibility"

**Make links obvious** - Users should be able to identify links easily:
\\\`\\\`\\\`html
<p>Our <a href="pricing.html">pricing plans</a> are designed to fit 
businesses of all sizes.</p>
\\\`\\\`\\\`

**Group related links** - Use lists for navigation menus:
\\\`\\\`\\\`html
<h3>Popular Resources</h3>
<ul>
    <li><a href="tutorial-html.html">HTML Tutorial</a></li>
    <li><a href="tutorial-css.html">CSS Tutorial</a></li>
    <li><a href="tutorial-js.html">JavaScript Tutorial</a></li>
</ul>
\\\`\\\`\\\`

**Test your links** - Always check that your links work before publishing!

### A Real-World Example: Blog Post with Great Links

\\\`\\\`\\\`html
<article>
    <h1>Getting Started with Web Development</h1>
    
    <p>Web development might seem overwhelming at first, but with the right 
    resources and approach, anyone can learn. In this post, I'll share my 
    favorite <a href="#resources">learning resources</a> and 
    <a href="#tips">practical tips</a> for beginners.</p>
    
    <h2 id="resources">Learning Resources</h2>
    <p>I highly recommend starting with 
    <a href="https://freecodecamp.org" target="_blank" rel="noopener" 
    title="Free coding bootcamp with interactive lessons">freeCodeCamp</a>. 
    Their interactive curriculum is perfect for beginners.</p>
    
    <p>For more advanced topics, check out our 
    <a href="advanced-tutorials.html">advanced tutorials section</a>.</p>
    
    <h2 id="tips">Practical Tips</h2>
    <p>The most important advice I can give you is to practice regularly. 
    Build projects, experiment with code, and don't be afraid to make mistakes!</p>
    
    <p>Have questions? <a href="mailto:help@mysite.com">Send me an email</a> 
    and I'll be happy to help!</p>
    
    <p><a href="#top">Back to top</a></p>
</article>
\\\`\\\`\\\`

See how the links enhance the content and provide clear paths for readers to follow? That's the power of well-designed HTML links!
`,
  keyTerms: [
    { term: "Anchor Tag (<a>)", definition: "The HTML element used to create hyperlinks. It can link to other pages, websites, email addresses, or sections within the same page." },
    { term: "href Attribute", definition: "Specifies the destination of a hyperlink. It can be a URL, file path, email address, or anchor reference within the page." },
    { term: "Target Attribute", definition: "Controls where the linked document opens. '_blank' opens in a new tab, '_self' opens in the same window (default)." },
    { term: "Internal Link", definition: "A link that points to another page within the same website. Uses relative paths like 'about.html' or 'pages/contact.html'." },
    { term: "External Link", definition: "A link that points to a page on a different website. Requires the complete URL including 'https://'." },
    { term: "Anchor Link", definition: "A link that jumps to a specific section within the same page using an ID reference like '#section-name'." },
    { term: "Navigation (nav)", definition: "A semantic HTML element that groups related links together, typically used for site navigation menus." },
    { term: "Relative Path", definition: "A file path that's relative to the current page's location, like 'images/photo.jpg' or '../about.html'." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create Your First Link Collection",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'my-links.html' with complete document structure.",
        "Set the title to 'My Favorite Links'.",
        "In the body, insert 'My Favorite Websites' in <h1> tags.",
        "Create a paragraph with text and a link: Insert 'When I want to learn something new, I visit' in <p> tags, followed by a link to Wikipedia: insert 'Wikipedia' in <a> tags with href=\"https://wikipedia.org\".",
        "Add another paragraph: Insert 'For coding tutorials, I recommend' in <p> tags, followed by a link: insert 'freeCodeCamp' in <a> tags with href=\"https://freecodecamp.org\".",
        "Add a third link: Insert 'My favorite search engine is' in <p> tags, followed by a link to Google that opens in a new tab: insert 'Google' in <a> tags with href=\"https://google.com\" and target=\"_blank\".",
        "Save the file and test all three links to make sure they work correctly."
      ]
    },
    {
      id: 2,
      title: "Build Internal Navigation Between Pages",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create two HTML files: 'home.html' and 'about.html', both with complete HTML structure.",
        "In home.html, set the title to 'Home Page' and create the content: Insert 'Welcome to My Website' in <h1> tags.",
        "Add navigation to home.html: Insert 'Navigation' in <h2> tags, then insert 'Learn more about me on my' in <p> tags, followed by a link: insert 'About page' in <a> tags with href=\"about.html\".",
        "In about.html, set the title to 'About Me' and create content: Insert 'About Me' in <h1> tags.",
        "Add a paragraph in about.html: Insert 'Hi! I\\'m learning web development and having a great time building websites.' in <p> tags.",
        "Add navigation back to home: Insert 'Return to the' in <p> tags, followed by a link: insert 'Home page' in <a> tags with href=\"home.html\".",
        "Test both files by opening home.html and clicking the link to navigate to about.html, then click back to home.html.",
        "Make sure the navigation works smoothly in both directions."
      ]
    },
    {
      id: 3,
      title: "Create Anchor Links for Page Navigation",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'long-article.html' with complete HTML structure.",
        "Set the title to 'Complete Web Development Guide'.",
        "Create the main heading: Insert 'The Complete Guide to Web Development' in <h1> tags.",
        "Add a table of contents: Insert 'Table of Contents' in <h2> tags.",
        "Create an unordered list with these anchor links:",
        "Insert a link 'Introduction' in <a> tags with href=\"#intro\" inside <li> tags.",
        "Insert a link 'Getting Started' in <a> tags with href=\"#getting-started\" inside <li> tags.",
        "Insert a link 'Advanced Topics' in <a> tags with href=\"#advanced\" inside <li> tags.",
        "Insert a link 'Conclusion' in <a> tags with href=\"#conclusion\" inside <li> tags.",
        "Now create the actual sections with matching IDs:",
        "Insert 'Introduction' in <h2> tags with id=\"intro\".",
        "Add content: Insert 'Web development is an exciting field that combines creativity with technical skills...' in <p> tags.",
        "Insert 'Getting Started' in <h2> tags with id=\"getting-started\".",
        "Add content: Insert 'The first step in web development is learning HTML, the foundation of all websites...' in <p> tags.",
        "Insert 'Advanced Topics' in <h2> tags with id=\"advanced\".",
        "Add content: Insert 'Once you master the basics, you can explore advanced topics like JavaScript frameworks...' in <p> tags.",
        "Insert 'Conclusion' in <h2> tags with id=\"conclusion\".",
        "Add content: Insert 'Web development is a journey of continuous learning and growth...' in <p> tags.",
        "At the end, add a 'Back to Top' link: Insert a link 'Back to Top' in <a> tags with href=\"#\" inside <p> tags.",
        "Save and test all the anchor links to make sure they jump to the correct sections."
      ]
    },
    {
      id: 4,
      title: "Build a Professional Business Website Navigation",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create five HTML files: 'index.html', 'about.html', 'services.html', 'portfolio.html', and 'contact.html'.",
        "Set up index.html as the homepage: Set title to 'TechSolutions Pro - Web Development Services'.",
        "Create consistent navigation for all pages. In index.html, add: Insert 'TechSolutions Pro' in <h1> tags.",
        "Create a navigation menu using <nav> and <ul> tags with these links:",
        "Insert 'Home' in <a> tags with href=\"index.html\" inside <li> tags.",
        "Insert 'About' in <a> tags with href=\"about.html\" inside <li> tags.",
        "Insert 'Services' in <a> tags with href=\"services.html\" inside <li> tags.",
        "Insert 'Portfolio' in <a> tags with href=\"portfolio.html\" inside <li> tags.",
        "Insert 'Contact' in <a> tags with href=\"contact.html\" inside <li> tags.",
        "Add homepage content: Insert 'Professional Web Development Services' in <h2> tags.",
        "Add: Insert 'We create modern, responsive websites that help your business grow online.' in <p> tags.",
        "Set up about.html: Copy the navigation menu, set title to 'About Us - TechSolutions Pro'.",
        "Add content: Insert 'About Our Team' in <h2> tags and 'We are a passionate team of web developers...' in <p> tags.",
        "Set up services.html: Copy navigation, set title to 'Our Services - TechSolutions Pro'.",
        "Add an unordered list of services: 'Website Design', 'E-commerce Development', 'Mobile Optimization', 'SEO Services'.",
        "Set up portfolio.html: Copy navigation, set title to 'Our Portfolio - TechSolutions Pro'.",
        "Add sample project links: Insert 'Check out our' in <p> tags, followed by external links to example sites with target=\"_blank\".",
        "Set up contact.html: Copy navigation, set title to 'Contact Us - TechSolutions Pro'.",
        "Add contact information: Insert 'Get In Touch' in <h2> tags.",
        "Add email link: Insert 'Email us at' in <p> tags, followed by 'info@techsolutions.com' in <a> tags with href=\"mailto:info@techsolutions.com\".",
        "Add phone link: Insert 'Call us at' in <p> tags, followed by '(555) 123-4567' in <a> tags with href=\"tel:+15551234567\".",
        "Test all navigation links to ensure they work correctly between all five pages.",
        "Verify that external links open in new tabs and email/phone links work properly."
      ]
    },
    {
      id: 5,
      title: "Create a Comprehensive Resource Hub with All Link Types",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a new file called 'resource-hub.html' with complete HTML structure.",
        "Set the title to 'Web Development Resource Hub - Everything You Need'.",
        "Create the main heading: Insert 'Web Development Resource Hub' in <h1> tags.",
        "Add an introduction: Insert 'Your one-stop destination for web development learning resources, tools, and community connections.' in <p> tags.",
        "Create a table of contents with anchor links: Insert 'Quick Navigation' in <h2> tags.",
        "Add an unordered list with these anchor links:",
        "Insert 'Learning Platforms' in <a> tags with href=\"#learning\" inside <li> tags.",
        "Insert 'Documentation & References' in <a> tags with href=\"#docs\" inside <li> tags.", 
        "Insert 'Developer Tools' in <a> tags with href=\"#tools\" inside <li> tags.",
        "Insert 'Community & Support' in <a> tags with href=\"#community\" inside <li> tags.",
        "Insert 'Contact & Feedback' in <a> tags with href=\"#contact\" inside <li> tags.",
        "Create the Learning Platforms section: Insert 'Learning Platforms' in <h2> tags with id=\"learning\".",
        "Add external links: Insert 'Free interactive coding lessons at' in <p> tags, followed by 'freeCodeCamp' in <a> tags with href=\"https://freecodecamp.org\" target=\"_blank\" rel=\"noopener\".",
        "Add more learning links: Insert 'Comprehensive web development courses on' in <p> tags, followed by 'Codecademy' in <a> tags with href=\"https://codecademy.com\" target=\"_blank\" rel=\"noopener\".",
        "Add documentation section: Insert 'Documentation & References' in <h2> tags with id=\"docs\".",
        "Add reference links: Insert 'Official HTML documentation:' in <p> tags, followed by 'MDN Web Docs' in <a> tags with href=\"https://developer.mozilla.org\" target=\"_blank\" rel=\"noopener\" title=\"Mozilla Developer Network - comprehensive web documentation\".",
        "Add tools section: Insert 'Developer Tools' in <h2> tags with id=\"tools\".",
        "Add tool links: Insert 'Code editor:' in <p> tags, followed by 'Visual Studio Code' in <a> tags with href=\"https://code.visualstudio.com\" target=\"_blank\" rel=\"noopener\".",
        "Add community section: Insert 'Community & Support' in <h2> tags with id=\"community\".",
        "Add community links: Insert 'Join the discussion on' in <p> tags, followed by 'Stack Overflow' in <a> tags with href=\"https://stackoverflow.com\" target=\"_blank\" rel=\"noopener\".",
        "Add contact section: Insert 'Contact & Feedback' in <h2> tags with id=\"contact\".",
        "Add contact information: Insert 'Have suggestions for more resources?' in <p> tags, followed by 'Send us an email' in <a> tags with href=\"mailto:suggestions@resourcehub.com?subject=Resource Suggestion\".",
        "Add social media: Insert 'Follow us on' in <p> tags, followed by 'Twitter' in <a> tags with href=\"https://twitter.com/resourcehub\" target=\"_blank\" rel=\"noopener\".",
        "Add back to top links: Insert 'Back to Top' in <a> tags with href=\"#\" inside <p> tags at the end of each major section.",
        "Add internal navigation: Insert 'Want to build your own resource collection? Check out our' in <p> tags, followed by 'tutorial series' in <a> tags with href=\"tutorials.html\" (you don\\'t need to create this file).",
        "Save the file and thoroughly test all links: anchor links for smooth scrolling, external links opening in new tabs, email links opening mail client, and internal links.",
        "Verify that all external links include proper target and rel attributes for security and user experience."
      ]
    }
  ]
};
