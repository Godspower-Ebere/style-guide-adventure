import { DayLesson } from "../types";

export const day1: DayLesson = {
  day: 1,
  title: "Introduction to HTML: The Structure of the Web",
  category: "HTML Basics",
  description: "Start your journey into web development by learning the foundational language of the web: HTML. Discover how to structure content using essential tags and understand the purpose of a basic HTML document.",
  learningObjectives: [
    "Understand the role of HTML in web development.",
    "Learn about HTML elements, tags, and document structure.",
    "Create a basic HTML page using essential tags like <!DOCTYPE>, <html>, <head>, <title>, and <body>.",
    "Recognize the difference between head and body content.",
    "Write headings and paragraphs in HTML using <h1> and <p>."
  ],
  detailedExplanation: `
## Welcome to Day 1: HTML Basics

Today, we're starting with the absolute foundation of web development: **HTML** – HyperText Markup Language.

HTML acts as the **skeleton of a webpage**, providing structure and meaning to content. Without it, you'd just have raw, unformatted text.

### Step-by-Step Breakdown

1. **HTML's Role**  
   Think of building a house: HTML is like the frame, the walls, and the rooms. It defines what’s on the page and where it goes.

2. **HTML Elements (Tags)**  
   HTML uses *tags*, like \`<p>\` or \`<h1>\`. Tags usually come in pairs: an opening tag (\`<tag>\`) and a closing tag (\`</tag>\`). For example:
   \`\`\`html
   <p>This is a paragraph.</p>
   \`\`\`

3. **HTML Document Structure**  
   Every HTML page needs a basic skeleton:
   - \`<!DOCTYPE html>\`: Declares the HTML version.
   - \`<html>\`: Root element for all content.
   - \`<head>\`: Contains metadata (title, links).
   - \`<title>\`: Sets the page title shown in the browser tab.
   - \`<body>\`: Contains everything visible on the page.

4. **Head vs Body**
   - The \`<head>\` includes information *about* the page.
   - The \`<body>\` includes the *visible content* (text, images, links, etc.).

### Example HTML Page

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>My First Webpage</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first paragraph on my first webpage.</p>
</body>
</html>
\`\`\`

### Summary

You’ve just learned how HTML forms the building blocks of every webpage. From setting the document type to displaying headings and paragraphs, these elements are foundational for everything you'll build next.
`,
  keyTerms: [
    { term: "HTML", definition: "HyperText Markup Language. The standard language for creating web pages." },
    { term: "Element / Tag", definition: "HTML building blocks like <p> or <h1>, usually made of an opening tag, content, and a closing tag." },
    { term: "Opening Tag", definition: "The starting point of an HTML element, e.g., <p>." },
    { term: "Closing Tag", definition: "The ending part of an HTML element, marked with a slash, e.g., </p>." },
    { term: "Content", definition: "The text or data placed between the opening and closing tags." },
    { term: "<!DOCTYPE html>", definition: "Declaration that defines the HTML version; HTML5 is the current standard." },
    { term: "<html>", definition: "The root element that wraps all content of the page." },
    { term: "<head>", definition: "Contains metadata about the HTML document, not visible in the page itself." },
    { term: "<title>", definition: "Specifies the title of the webpage shown in the browser's tab." },
    { term: "<body>", definition: "Holds the visible content on the web page." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create Your First HTML File",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Open your text editor and create a new file.",
        "Copy the basic structure of an HTML page, leaving the <body> empty.",
        "Save it as index.html inside a folder (e.g., web-development-100-days)."
      ]
    },
    {
      id: 2,
      title: "Add a Page Title",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Inside the <head>, add a <title> element.",
        "Set its content to something like 'My Awesome Day 1 Page'.",
        "Save and open the file in a browser to see your title in the tab."
      ]
    },
    {
      id: 3,
      title: "Add a Main Heading",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Inside the <body> tags, add an <h1> element.",
        "Write 'My Webpage Content' inside it.",
        "Save and refresh your browser to view the heading."
      ]
    },
    {
      id: 4,
      title: "Add a Paragraph",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Below the <h1>, add a <p> element.",
        "Write a sentence like 'This is the beginning of my web development journey!'",
        "Save and refresh the page to see the paragraph appear."
      ]
    },
    {
      id: 5,
      title: "Add Another Paragraph",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Below the first paragraph, add another <p> tag.",
        "Write a different message such as 'HTML is the structure, and I'm learning it step by step.'",
        "Save and refresh to see both paragraphs on your page."
      ]
    }
  ]
};
