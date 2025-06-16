import { DayLesson } from "../types";

export const day2: DayLesson = {
  day: 2,
  title: "Exploring the <head>: Metadata and Document Settings",
  category: "HTML Basics",
  description: "Learn the purpose of the HTML <head> section and why it's crucial for defining metadata, page titles, and settings that affect how your webpage is interpreted and displayed.",
  learningObjectives: [
    "Understand the purpose and structure of the <head> section in an HTML document.",
    "Learn the function of key <head> elements like <title> and <meta>.",
    "Add metadata to your HTML using the charset and viewport meta tags.",
    "Recognize why metadata and mobile responsiveness matter.",
    "Practice modifying and reviewing the <head> content in your HTML files."
  ],
  detailedExplanation: `
## Welcome to Day 2: Mastering the HTML <head> Section

Yesterday, we built a simple HTML page with a heading and paragraph. Today, we explore the **<head>** section in depth. This part of the HTML document doesn't display content directly on the webpage — instead, it holds crucial metadata that browsers and search engines use.

### What is the <head>?

Think of it as the **control panel** for your webpage. It contains information *about* the page, including:
- The page title
- Character encoding
- Mobile responsiveness settings
- Links to CSS and JavaScript files

### Why is it Important?

Without a proper <head>:
- Your site may not display correctly on mobile devices.
- Special characters (like emojis or accented letters) may not render properly.
- Search engines may struggle to understand what your page is about.

### Key Elements in the <head>

- **<title>**: Sets the page title shown in the browser tab.
- **<meta>**:
  - \`charset="UTF-8"\`: Supports nearly all characters and symbols.
  - \`name="viewport"\`: Helps with responsive design for mobile.
- **<link>**: Connects to external CSS files.
- **<style>**: Allows inline CSS styling.
- **<script>**: Adds JavaScript (often placed at the bottom of <body> for performance).

### Sample HTML with a Proper <head>

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Awesome Day 2 Page</title>
  <!-- This is a comment - browsers ignore it -->
</head>
<body>
  <h1>Hello, Day 2!</h1>
  <p>Look at the title in the browser tab!</p>
</body>
</html>
\`\`\`

This structure ensures your webpage is responsive, accessible, and well-described — even before users see the visible content.
`,
  keyTerms: [
    { term: "HTML Head", definition: "The section of an HTML document, enclosed by <head> and </head>, that contains metadata and links to external resources, not visible page content." },
    { term: "Element", definition: "A part of an HTML document defined by a start tag, content, and an end tag. Examples: <head>, <title>, <meta>." },
    { term: "Attribute", definition: "Extra information added to an HTML element that configures it, such as charset='utf-8' or name='viewport'." },
    { term: "Title", definition: "The text set within the <title> element that appears in the browser tab or title bar." },
    { term: "Metadata", definition: "Information that describes other data. In HTML, meta tags describe the document’s content and settings." },
    { term: "Charset", definition: "Character encoding standard. UTF-8 is widely used to support many languages and symbols." },
    { term: "Viewport", definition: "The visible area of a webpage in a browser. The viewport meta tag ensures pages display well on different screen sizes." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create a New File with a Title",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Open your code editor and create a new file.",
        "Add the basic HTML structure including <head> and <body> sections.",
        "Inside <head>, add a <title> tag with the text 'My First Titled Page'.",
        "Inside <body>, add a paragraph like <p>Hello!</p>.",
        "Save the file as day2_ex1.html and open it in your browser to view the title in the tab."
      ]
    },
    {
      id: 2,
      title: "Add the Charset Meta Tag",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Open your day2_ex1.html file.",
        "Inside the <head> section, before the <title>, add: <meta charset='UTF-8'>.",
        "Save the file. You won’t see a visual change, but this ensures correct character display."
      ]
    },
    {
      id: 3,
      title: "Add the Viewport Meta Tag",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Still in the same file, add this line in the <head> after the charset tag: <meta name='viewport' content='width=device-width, initial-scale=1.0'>.",
        "Save the file. This helps your page display properly on mobile devices."
      ]
    },
    {
      id: 4,
      title: "Experiment with the Title",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Change the text inside the <title> tag to 'Day 2 Practice Page!'.",
        "Save and refresh the page in your browser. The tab title should now reflect the new text."
      ]
    },
    {
      id: 5,
      title: "Add a Comment in the Head",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Inside the <head> section, add this HTML comment: <!-- This is the head section - important info about the page goes here -->.",
        "Save the file and view the source code in your browser to see the comment. It won't appear on the page but is useful for documentation."
      ]
    }
  ]
};
