
import { DayLesson } from "../types";

export const day1: DayLesson = {
  day: 1,
  title: "Introduction to HTML",
  category: "HTML Basics",
  description: "Learn the fundamentals of HTML and create your first webpage. This lesson covers the core concepts that form the foundation of all websites.",
  learningObjectives: [
    "Understand what HTML is and its crucial role in web development.",
    "Learn the basic structure of an HTML document, including the doctype, head, and body.",
    "Create, save, and open your first HTML file in a web browser.",
    "Understand the concept of HTML tags and elements, the building blocks of a webpage."
  ],
  detailedExplanation: `
Welcome to your first day! Today, we dive into the world of HTML.

## What is HTML?
HTML stands for **HyperText Markup Language**. It's the standard language used to create and design documents on the World Wide Web. Think of it as the skeleton of a webpage. While other technologies like CSS (for styling) and JavaScript (for interactivity) are essential, HTML provides the fundamental structure.

Every website you visit, from Google to your favorite blog, is built on a foundation of HTML.

## The Basic Structure of an HTML Document
Every HTML document follows a standard structure. This ensures that web browsers can understand and render your page correctly. Here’s a breakdown of the essential parts:

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
\`\`\`

Let's break down this example:
- **\`<!DOCTYPE html>\`**: This declaration defines that the document is an HTML5 document. It's the very first thing in your HTML file and tells the browser how to interpret the code.
- **\`<html>\`**: This is the root element of an HTML page. All other elements are nested inside it.
- **\`<head>\`**: This element contains meta-information about the HTML document. This information is not displayed on the webpage itself but is used by browsers and search engines. It includes things like the page title, character set, and links to CSS files.
- **\`<title>\`**: This element specifies a title for the HTML page, which is shown in the browser's title bar or in the page's tab.
- **\`<body>\`**: This element defines the document's body. It contains all the visible content of the webpage, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

## HTML Tags and Elements
HTML uses "tags" to mark up content.
- Tags are keywords surrounded by angle brackets, like \`<p>\`.
- Most tags come in pairs: an opening tag (e.g., \`<h1>\`) and a closing tag (e.g., \`</h1>\`).
- The closing tag is written like the opening tag, but with a forward slash (/) before the tag name.
- The combination of an opening tag, the content, and a closing tag is called an **HTML element**.

Some elements are "self-closing" and don't need a closing tag, like \`<br>\` for a line break or \`<img>\` for an image. We'll learn more about these later.
    `,
  keyTerms: [
    { term: "HTML", definition: "HyperText Markup Language - the standard markup language for creating the structure of web pages." },
    { term: "Tag", definition: "A command in HTML that tells the browser how to format the text or content. For example: <p>." },
    { term: "Element", definition: "A complete HTML structure, consisting of an opening tag, the content, and a closing tag." },
    { term: "DOCTYPE", definition: "A declaration at the beginning of an HTML file that defines the document type and version of HTML being used." },
    { term: "Head", definition: "The section of an HTML document that contains metadata, which is not displayed on the page itself." },
    { term: "Body", definition: "The section of an HTML document that contains the visible content of the webpage." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create Your First HTML File",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Open a simple text editor (like Notepad on Windows, or TextEdit on Mac).",
        "Create a new file.",
        "Add the DOCTYPE declaration at the very top. Type `<!DOCTYPE html>`",
        "Create the root element using an `html` tag.",
        "Inside the `html` tag, add a `head` section.",
        "After the `head` section, add a `body` section.",
        "Save the file on your desktop as 'index.html'. Make sure the file extension is .html, not .txt."
      ]
    },
    {
      id: 2,
      title: "Add a Page Title",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Open your 'index.html' file if it's not already open.",
        "Inside the `head` section, add a `title` tag.",
        "Inside the `title` tag, write the text: 'My Web Development Journey'",
        "Save your file.",
        "Open 'index.html' in a web browser (like Chrome or Firefox) by double-clicking it. You should see your title in the browser tab."
      ]
    },
    {
      id: 3,
      title: "Create Your First Heading and Paragraph",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "In your 'index.html' file, find the `body` section.",
        "Add a main heading using an `h1` tag. Inside the tag, write 'Welcome to My Website'.",
        "Below the heading, add a paragraph using a `p` tag. Write this inside: 'This is the start of my journey to become a web developer. I am excited to learn HTML!'.",
        "Save the file and refresh the page in your browser.",
        "You should now see your heading and paragraph displayed on the page."
      ]
    },
    {
      id: 4,
      title: "Explore Different Heading Levels",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Create a new file named 'headings.html'.",
        "Set up the basic HTML structure (DOCTYPE, html, head with a title, and body).",
        "For the title, use 'Exploring HTML Headings'.",
        "In the body, create a heading for each level from h1 to h6.",
        "For the `h1` tag, use the content: 'The Importance of Structure'",
        "For the `h2` tag, use: 'Main Topics'",
        "For the `h3` tag, use: 'Sub-topic 1'",
        "For the `h4` tag, use: 'Details of Sub-topic 1'",
        "For the `h5` tag, use: 'A Finer Point'",
        "For the `h6` tag, use: 'A Minor Note'",
        "Save the file and view it in your browser to see how the different heading sizes create a visual hierarchy."
      ]
    },
    {
      id: 5,
      title: "Create a Personal Introduction Page",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'about.html'.",
        "Set up the full HTML structure with a title 'About Me'.",
        "Inside the `body`, create an `h1` heading with your name.",
        "Add an `h2` heading with the content 'My Coding Journey'.",
        "Under this heading, add a paragraph with the content: 'I am starting this journey to build amazing things on the web. My goal is to understand how websites are created from the ground up.'",
        "Add another `h2` heading with the content 'My Goals for This Course'.",
        "Under this heading, add a paragraph with the content: 'By the end of this 100-day course, I want to be able to build responsive and interactive websites confidently.'",
        "Save the file and open it in your browser."
      ]
    }
  ]
};
