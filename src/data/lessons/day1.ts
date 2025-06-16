import { DayLesson } from "../types";

export const day1: DayLesson = {
  day: 1,
  title: "Getting Started with HTML: The Skeleton of the Web",
  category: "HTML Basics",
  description: "Welcome to Day 1! Learn what HTML is, why it's essential for building web pages, and how to use basic tags like <html>, <head>, <title>, and <body> to create your first structured page.",
  learningObjectives: [
    "Understand what HTML is and why it's important.",
    "Recognize the essential structure of an HTML document.",
    "Learn about key tags such as <!DOCTYPE>, <html>, <head>, <title>, and <body>.",
    "Differentiate between the visible and metadata parts of a webpage.",
    "Create a basic HTML file and view it in a web browser."
  ],
  detailedExplanation: `
## Hello and Welcome to Day 1!

Today we begin our journey into web development by learning the absolute foundation: **HTML** — HyperText Markup Language.

Think of HTML as the **skeleton** of a webpage. It defines what content appears, where, and in what order.

### Step-by-Step Explanation

1. **Understanding HTML's Role**  
   HTML is like the framework of a house. It structures your content: "Here's a heading", "Here's a paragraph", "Here's an image".

2. **Introducing HTML Elements (Tags)**  
   Tags are keywords in angle brackets like \`<p>\` or \`<h1>\`. They typically come in pairs:  
   \`\`\`html
   <p>This is a paragraph.</p>
   \`\`\`  
   The browser uses these to display your content properly.

3. **Essential HTML Document Structure**  
   A basic HTML page includes the following:
   - \`<!DOCTYPE html>\`: Declares you're using HTML5.
   - \`<html>\`: The root element of the page.
   - \`<head>\`: Contains metadata (not shown on the page).
   - \`<title>\`: Sets the browser tab text.
   - \`<body>\`: Contains all the visible content.

4. **Head vs. Body**  
   - The \`<head>\` holds invisible instructions (like the page title and links to CSS).
   - The \`<body>\` holds what the user sees (like headings and paragraphs).

### Code Example

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>My First Webpage</title>
</head>
<body>
  <!-- Content visible on the page goes here -->
  <h1>Hello, World!</h1>
  <p>This is my first paragraph on my first webpage.</p>
</body>
</html>
\`\`\`

This is your basic starting template for any HTML document.
`,
  keyTerms: [
    { term: "HTML", definition: "HyperText Markup Language. The standard language for creating web pages." },
    { term: "Element / Tag", definition: "The building blocks of HTML, usually with an opening and closing tag. E.g., <p>...</p>." },
    { term: "Opening Tag", definition: "The starting tag of an element, such as <p>." },
    { term: "Closing Tag", definition: "The ending tag of an element, such as </p>." },
    { term: "Content", definition: "The data between the opening and closing tags of an element." },
    { term: "<!DOCTYPE html>", definition: "Declares the document is using HTML5." },
    { term: "<html>", definition: "The root container for the entire HTML document." },
    { term: "<head>", definition: "Holds metadata about the document, not displayed on the page." },
    { term: "<title>", definition: "Sets the browser tab or window title for the web page." },
    { term: "<body>", definition: "Contains the content visible to users when they visit the page." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create Your First HTML File",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Open your text editor (VS Code, Sublime Text, or Notepad).",
        "Type the basic HTML structure, but leave the <body> section empty.",
        "Save the file as index.html in a folder named web-development-100-days."
      ]
    },
    {
      id: 2,
      title: "Add a Page Title",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Open index.html in your editor.",
        "Inside <head>, add a <title> with the text 'My Awesome Day 1 Page'.",
        "Save and open it in your browser. The tab should display the title."
      ]
    },
    {
      id: 3,
      title: "Add a Main Heading",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "In the <body>, add an <h1> element with the text 'My Webpage Content'.",
        "Save the file and refresh your browser to see the heading."
      ]
    },
    {
      id: 4,
      title: "Add a Paragraph",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Below the <h1>, add a <p> with the text: 'This is the beginning of my web development journey!'.",
        "Save and refresh your browser to see the paragraph."
      ]
    },
    {
      id: 5,
      title: "Add Another Paragraph",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Below the first <p>, add another one: 'HTML is the structure, and I'm learning it step by step.'.",
        "Save and refresh to see the updated content."
      ]
    }
  ]
};
