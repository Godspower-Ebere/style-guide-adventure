
import { DayLesson } from "../types";

export const day5: DayLesson = {
  day: 5,
  title: "HTML Links and Navigation",
  category: "HTML Basics",
  description: "Learn to create hyperlinks that connect webpages and enable navigation. Master both internal and external linking.",
  learningObjectives: [
    "Understand how hyperlinks work and their importance on the web.",
    "Learn to create external links to other websites using the anchor tag.",
    "Learn to create internal links between pages on your own site.",
    "Understand link attributes like target and title for better user experience."
  ],
  detailedExplanation: `
Links are what make the web "web-like" - they connect pages and sites together, creating the interconnected network we know as the World Wide Web.

## The Anchor Tag
All links in HTML are created using the anchor tag: a. The most important attribute is href (hypertext reference), which specifies where the link goes.

Basic link structure:
\`\`\`html
<a href="destination">Link text that users click</a>
\`\`\`

## External Links
External links connect to other websites. Always include the full URL:

\`\`\`html
<a href="https://www.google.com">Visit Google</a>
<a href="https://www.wikipedia.org">Learn on Wikipedia</a>
\`\`\`

## Internal Links
Internal links connect to other pages on your own website. You can use relative paths:

\`\`\`html
<a href="about.html">About Us</a>
<a href="contact.html">Contact</a>
\`\`\`

## Useful Link Attributes
- **target="_blank"**: Opens link in a new tab or window
- **title**: Provides additional information (appears on hover)

Example:
\`\`\`html
<a href="https://www.example.com" target="_blank" title="Opens in new tab">Visit Example</a>
\`\`\`

## Link Best Practices
1. Use descriptive link text - avoid "click here"
2. Make it clear when links open in new tabs
3. Ensure links are accessible and keyboard-navigable
4. Test all your links to make sure they work
    `,
  keyTerms: [
    { term: "Anchor Tag (a)", definition: "The HTML tag used to create hyperlinks that connect to other pages or websites." },
    { term: "href Attribute", definition: "The attribute that specifies the destination URL or file path for a hyperlink." },
    { term: "External Link", definition: "A hyperlink that connects to a page or resource on a different website." },
    { term: "Internal Link", definition: "A hyperlink that connects to another page within the same website." },
    { term: "Target Attribute", definition: "An attribute that specifies where to open the linked document (same window, new tab, etc.)." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create Your First External Link",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file with the basic structure.",
        "Add the title 'My Favorite Websites' to the head section.",
        "In the body, create an h1 tag and type 'Websites I Visit Often'.",
        "Below the heading, create a p tag.",
        "Inside the p tag, type 'I love to search on ' (with a space at the end).",
        "After that text, add an a tag with href='https://www.google.com'.",
        "Between the opening and closing a tags, type 'Google'.",
        "Add a period after the closing a tag.",
        "Save as 'links.html' and test your link in the browser."
      ]
    },
    {
      id: 2,
      title: "Add Multiple External Links",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "In the same 'links.html' file, add an h2 tag with 'Learning Resources'.",
        "Create a new p tag below the h2.",
        "In the p tag, type 'For coding tutorials, I visit '.",
        "Add an a tag with href='https://www.w3schools.com' and the text 'W3Schools'.",
        "Add another p tag with 'For videos, I watch '.",
        "Add an a tag with href='https://www.youtube.com' and the text 'YouTube'.",
        "Save and test both links in your browser."
      ]
    },
    {
      id: 3,
      title: "Practice Links with Attributes",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'enhanced-links.html' with the basic structure.",
        "Set the page title to 'Enhanced Links Practice'.",
        "Create an h1 tag with 'Links with Special Features'.",
        "Add a p tag and type 'This link opens in a new tab: '.",
        "Create an a tag with href='https://www.github.com' and target='_blank'.",
        "Set the link text to 'GitHub'.",
        "Add another p tag with 'Hover over this link for more info: '.",
        "Create an a tag with href='https://www.stackoverflow.com' and title='Programming Q&A site'.",
        "Set the link text to 'Stack Overflow'.",
        "Save and test the special features of your links."
      ]
    },
    {
      id: 4,
      title: "Create Internal Navigation",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create three HTML files: 'home.html', 'about.html', and 'contact.html'.",
        "In 'home.html', set up the basic structure with title 'Home Page'.",
        "Add an h1 with 'Welcome to My Website' and a p with some welcome text.",
        "Create a navigation section with links to the other pages.",
        "Add an a tag with href='about.html' and text 'About Me'.",
        "Add another a tag with href='contact.html' and text 'Contact'.",
        "In 'about.html', create similar structure with title 'About Me' and navigation back to home and contact.",
        "In 'contact.html', create similar structure with navigation to other pages.",
        "Test that you can navigate between all three pages."
      ]
    },
    {
      id: 5,
      title: "Build a Resource Directory",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a new file called 'resources.html' with the basic structure.",
        "Set the page title to 'Web Development Resources'.",
        "Create an h1 tag with 'Ultimate Web Development Resource Directory'.",
        "Add an h2 tag with 'Learning Platforms'.",
        "Create a ul tag and add 4 li tags.",
        "In each li, create links to: Codecademy, freeCodeCamp, Coursera, and Udemy.",
        "Use target='_blank' for all external links.",
        "Add descriptive title attributes to each link.",
        "Add another h2 with 'Documentation Sites'.",
        "Create another ul with links to: MDN Web Docs, W3Schools, and CSS-Tricks.",
        "Add a final h2 with 'Practice Sites'.",
        "Create a ul with links to: Codepen, JSFiddle, and Repl.it.",
        "Test all links and make sure they open correctly."
      ]
    }
  ]
};
