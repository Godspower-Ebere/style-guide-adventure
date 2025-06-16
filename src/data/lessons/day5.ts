
import { DayLesson } from "../types";

export const day5: DayLesson = {
  day: 5,
  title: "HTML Links and Navigation",
  category: "HTML Basics", 
  description: "Learn to create links between pages and within pages using HTML anchor tags for effective website navigation.",
  learningObjectives: [
    "Master the anchor tag for creating hyperlinks.",
    "Learn to link to external websites, other pages, and sections within the same page.",
    "Understand link attributes like target, rel, and title.",
    "Create effective navigation structures for websites."
  ],
  detailedExplanation: `
Links are what make the web "world wide" - they connect pages and allow users to navigate between different content.

## The Anchor Tag
The anchor tag `<a>` creates hyperlinks. The most important attribute is `href`, which specifies the destination.

\`\`\`html
<a href="https://www.example.com">Visit Example.com</a>
\`\`\`

## Types of Links

### External Links
Links to other websites:
\`\`\`html
<a href="https://www.google.com">Go to Google</a>
\`\`\`

### Internal Links
Links to other pages on your site:
\`\`\`html
<a href="about.html">About Us</a>
<a href="contact.html">Contact</a>
\`\`\`

### Anchor Links
Links to sections within the same page:
\`\`\`html
<a href="#section1">Go to Section 1</a>
<!-- Later in the page -->
<h2 id="section1">Section 1</h2>
\`\`\`

### Email Links
Links that open email client:
\`\`\`html
<a href="mailto:someone@example.com">Send Email</a>
\`\`\`

## Link Attributes

### Target Attribute
Controls where the link opens:
\`\`\`html
<a href="https://www.example.com" target="_blank">Open in new tab</a>
\`\`\`

### Title Attribute
Provides additional information (tooltip):
\`\`\`html
<a href="about.html" title="Learn more about our company">About Us</a>
\`\`\`

### Rel Attribute
Describes the relationship between current and linked document:
\`\`\`html
<a href="https://external-site.com" rel="noopener">External Link</a>
\`\`\`

## Navigation Best Practices
- Use descriptive link text
- Avoid "click here" or "read more"
- Group related links together
- Consider accessibility for screen readers
- Test all links regularly
    `,
  keyTerms: [
    { term: "Anchor Tag", definition: "The <a> element used to create hyperlinks in HTML." },
    { term: "Href Attribute", definition: "Specifies the URL or destination of a hyperlink." },
    { term: "Target Attribute", definition: "Specifies where to open the linked document (_blank, _self, etc.)." },
    { term: "Internal Link", definition: "A link that points to another page within the same website." },
    { term: "External Link", definition: "A link that points to a page on a different website." },
    { term: "Anchor Link", definition: "A link that points to a specific section within the same page." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create Basic Links",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'links.html'.",
        "Add the basic HTML structure with title 'Learning Links'.",
        "Create links to three different websites (Google, YouTube, Wikipedia).",
        "Make one link open in a new tab using target='_blank'.",
        "Test all links to ensure they work."
      ]
    },
    {
      id: 2,
      title: "Internal Navigation",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create two HTML files: 'home.html' and 'about.html'.",
        "In home.html, create a link to about.html.",
        "In about.html, create a link back to home.html.",
        "Add some content to both pages to make them distinct.",
        "Test navigation between the pages."
      ]
    },
    {
      id: 3,
      title: "Page with Anchor Links",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create a long HTML page called 'article.html'.",
        "Add a table of contents at the top with anchor links.",
        "Create at least 4 sections with unique IDs.",
        "Link each table of contents item to its corresponding section.",
        "Add a 'Back to Top' link at the bottom of each section."
      ]
    },
    {
      id: 4,
      title: "Personal Portfolio Navigation",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create three HTML files: 'index.html', 'portfolio.html', and 'contact.html'.",
        "Create a navigation menu that appears on all three pages.",
        "Include links between all pages in the navigation.",
        "Add an email link in the contact page.",
        "Ensure consistent navigation across all pages."
      ]
    },
    {
      id: 5,
      title: "Complete Website Structure",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a small website with 5 pages: Home, About, Services, Portfolio, Contact.",
        "Create a consistent navigation menu for all pages.",
        "Include external links to social media profiles.",
        "Add anchor links for long pages with multiple sections.",
        "Include email and phone links where appropriate.",
        "Test all navigation thoroughly."
      ]
    }
  ]
};
