
import { DayLesson } from "../types";

export const day5: DayLesson = {
  day: 5,
  title: "HTML Links - Connecting the Web Together",
  category: "HTML Basics", 
  description: "Welcome to day 5! Today we're learning about one of the most important features of the web - links! Links are what make the internet truly interconnected. You'll learn how to create links to other websites, link between pages on your own site, and even create special links for email and phone numbers.",
  learningObjectives: [
    "Master the <a> tag and href attribute to create functional links",
    "Learn the difference between absolute and relative URLs",
    "Create internal navigation links within your own website",
    "Build special links for email addresses and phone numbers", 
    "Understand link attributes like target, title, and rel for better user experience"
  ],
  detailedExplanation: `
## Welcome to Day 5 - Mastering HTML Links!

Congratulations on making it to day 5! You've learned HTML structure, metadata, text formatting, and lists. Today we're diving into one of the most fundamental features of the web - hyperlinks!

### What Makes the Web "Web-Like"?

Think about it - what makes the internet different from just reading documents on your computer? It's the ability to click on something and instantly jump to related information, whether that's on the same page, another page on the same website, or a completely different website on the other side of the world.

Links are the connecting threads that weave the entire web together. Without links, websites would just be isolated islands of information. With links, they become part of a vast, interconnected network of knowledge and resources.

### The Amazing <a> Tag - Your Gateway to Everything

The anchor tag <a> is your tool for creating links. It's called an "anchor" because it anchors one piece of content to another. Here's the basic structure:

    <a href="destination">Link Text</a>

The href attribute (short for "hypertext reference") tells the browser where to go when someone clicks the link, and the text between the opening and closing tags is what visitors see and click on.

### Types of Links You Can Create

**1. External Links - Connecting to Other Websites**

    <a href="https://www.google.com">Visit Google</a>
    <a href="https://www.wikipedia.org">Learn Something New</a>
    <a href="https://www.github.com">Explore Code</a>

These are called "absolute URLs" because they include the complete web address.

**2. Internal Links - Connecting Pages Within Your Site**

    <a href="about.html">About Us</a>
    <a href="contact.html">Contact</a>
    <a href="services/web-design.html">Web Design Services</a>

These are called "relative URLs" because they're relative to your current page's location.

**3. Anchor Links - Jumping to Sections on the Same Page**

First, you create an anchor point:

    <h2 id="services">Our Services</h2>

Then you link to it:

    <a href="#services">Jump to Services Section</a>

**4. Email Links - Opening the User's Email Program**

    <a href="mailto:contact@example.com">Send us an email</a>
    <a href="mailto:support@example.com?subject=Website Question">Get Support</a>

**5. Phone Links - Allowing Mobile Users to Call**

    <a href="tel:+1234567890">Call Us: (123) 456-7890</a>

### Link Attributes That Make Links Better

**The target Attribute - Controlling Where Links Open**

    <a href="https://www.example.com" target="_blank">Open in New Tab</a>
    <a href="about.html" target="_self">Open in Same Tab</a>

- target="_blank" - Opens in a new tab or window
- target="_self" - Opens in the same tab (this is the default)

**The title Attribute - Adding Helpful Tooltips**

    <a href="https://www.example.com" title="Visit Example.com for more information">Example Website</a>

When users hover over this link, they'll see a tooltip with the title text.

**The rel Attribute - Describing the Relationship**

    <a href="https://www.example.com" target="_blank" rel="noopener">External Link</a>

The rel="noopener" is a security best practice when using target="_blank".

### Building a Professional Navigation Menu

Here's how to create a navigation menu using lists and links:

    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>

### Advanced Link Techniques

**Download Links**

    <a href="resume.pdf" download>Download My Resume</a>
    <a href="company-brochure.pdf" download="CompanyInfo.pdf">Get Our Brochure</a>

**Links with Images**

    <a href="https://www.example.com">
      <img src="logo.png" alt="Company Logo">
    </a>

**Multi-line Links**

    <a href="product-details.html">
      <h3>Amazing Product</h3>
      <p>Click here to learn more about our revolutionary new product.</p>
    </a>

### Best Practices for HTML Links

**1. Write Descriptive Link Text**
Instead of "click here" or "read more," use descriptive text:

Good: <a href="annual-report.pdf">Download our 2024 Annual Report</a>
Bad: <a href="annual-report.pdf">Click here</a>

**2. Use title Attributes for Additional Context**

    <a href="https://www.example.com" title="External link - opens in new tab">Visit Example.com</a>

**3. Be Consistent with Your Link Behavior**
If external links open in new tabs, make sure they all do. If internal links open in the same tab, keep that consistent.

**4. Test All Your Links**
Broken links frustrate users and hurt your website's credibility. Always test your links before publishing.

**5. Use Appropriate rel Attributes**

    <a href="https://external-site.com" target="_blank" rel="noopener">External Link</a>

**6. Consider Mobile Users**
Phone and email links are especially important for mobile users:

    <a href="tel:+1234567890">Call Now</a>
    <a href="mailto:info@company.com">Email Us</a>

### Understanding File Paths for Internal Links

**Same Directory:**
    <a href="about.html">About</a>

**Subdirectory:**
    <a href="pages/about.html">About</a>

**Parent Directory:**
    <a href="../index.html">Home</a>

**Root Directory:**
    <a href="/index.html">Home</a>

Links are the backbone of the web - master them, and you'll be able to create websites that are truly connected to the vast world of online information!
`,
  keyTerms: [
    { term: "Anchor Tag", definition: "The <a> tag used to create hyperlinks that connect to other pages, sections, or resources." },
    { term: "href Attribute", definition: "The attribute that specifies the destination URL or location that a link points to." },
    { term: "Absolute URL", definition: "A complete web address that includes the protocol and domain (e.g., https://www.example.com)." },
    { term: "Relative URL", definition: "A partial web address that is relative to the current page's location (e.g., about.html)." },
    { term: "Anchor Link", definition: "A link that jumps to a specific section within the same page using the # symbol." },
    { term: "target Attribute", definition: "Specifies where to open the linked document (_blank for new tab, _self for same tab)." },
    { term: "title Attribute", definition: "Provides additional information about a link that appears as a tooltip on hover." },
    { term: "mailto Link", definition: "A special link that opens the user's email program with a pre-filled recipient address." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create Your First Links",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'my-links.html' with complete document structure.",
        "Set the title to 'Learning HTML Links'.",
        "Add heading 'My Favorite Websites' using <h1>.",
        "Create an unordered list with links to 5 of your favorite websites.",
        "Each list item should contain a link with descriptive text (not just 'click here').",
        "Make all external links open in a new tab using target=\"_blank\".",
        "Add title attributes to provide helpful tooltips for each link.",
        "Save and test all links to ensure they work properly."
      ]
    },
    {
      id: 2,
      title: "Build Internal Navigation",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'navigation-page.html' with full HTML structure.",
        "Set the title to 'My Personal Website'.",
        "Create a navigation menu using <nav> and unordered list.",
        "Add anchor links to different sections: Home, About, Skills, Contact.",
        "Create each section with appropriate <h2> headings and id attributes.",
        "Add meaningful content in each section (at least 2 paragraphs per section).",
        "Test that clicking navigation links smoothly scrolls to each section.",
        "Add a 'Back to Top' link at the bottom that returns to the navigation."
      ]
    },
    {
      id: 3,
      title: "Create Contact Links",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'contact-links.html' with complete HTML structure.",
        "Set the title to 'Contact Information'.",
        "Add main heading 'Get In Touch' using <h1>.",
        "Create a contact section with your information (can be fictional).",
        "Add an email link using mailto: that includes a subject line.",
        "Add a phone number link using tel: for mobile users.",
        "Create social media links that open in new tabs.",
        "Add a physical address (fictional is fine).",
        "Include a 'Download Resume' link (create a placeholder file).",
        "Test all contact links to ensure they work properly."
      ]
    },
    {
      id: 4,
      title: "Build a Multi-Page Website",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create three HTML files: 'index.html', 'about.html', and 'contact.html'.",
        "Set up proper document structure and titles for each page.",
        "Create identical navigation menus on all three pages linking to each other.",
        "On index.html: Create a homepage with welcome message and links to other pages.",
        "On about.html: Create an about page with personal information and external links to your interests.",
        "On contact.html: Create a contact page with email, phone, and social media links.",
        "Ensure all internal links work properly between pages.",
        "Add a consistent footer on all pages with copyright and additional links.",
        "Test navigation between all pages and verify external links open correctly."
      ]
    },
    {
      id: 5,
      title: "Create a Resource Directory",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'resources.html' with complete HTML structure.",
        "Set the title to 'Web Development Resources'.",
        "Add main heading 'Ultimate Web Development Resource Directory'.",
        "Create five main sections using <h2>: 'Learning Platforms', 'Tools', 'Documentation', 'Communities', 'Inspiration'.",
        "Under each section, create organized lists with at least 5 external links each.",
        "Each link should have descriptive text and helpful title attributes.",
        "Add internal anchor navigation at the top to jump to each section.",
        "Include email links to resource maintainers where appropriate.",
        "Add 'Back to Top' links after each major section.",
        "Create a footer with social sharing links and contact information.",
        "Use a mix of ordered and unordered lists as appropriate for each section.",
        "Ensure all external links open in new tabs and include rel=\"noopener\".",
        "Test thoroughly that all links work and the page navigation flows smoothly."
      ]
    }
  ]
};
