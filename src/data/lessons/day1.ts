
import { DayLesson } from "../types";

export const day1: DayLesson = {
  day: 1,
  title: "Introduction to HTML - What is HTML?",
  category: "HTML Basics",
  description: "Learn the fundamentals of HTML and understand how web pages are structured and created.",
  learningObjectives: [
    "Understand what HTML stands for and its role in web development.",
    "Learn the basic structure of an HTML document.",
    "Create your first HTML page with proper syntax.",
    "Understand the concept of tags, elements, and attributes."
  ],
  detailedExplanation: `
Welcome to your web development journey! Today we start with HTML - the foundation of every website.

## What is HTML?
HTML stands for **HyperText Markup Language**. It's the standard language used to create web pages. Think of HTML as the skeleton of a website - it provides the basic structure and content.

## Key Concepts:
- **HyperText**: Text that contains links to other text
- **Markup**: A way of annotating text to indicate how it should be displayed
- **Language**: A set of rules and syntax for creating documents

## Basic HTML Structure
Every HTML document follows this basic structure:

\\\`\\\`\\\`html
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
\\\`\\\`\\\`

## Understanding HTML Elements
HTML uses **tags** to mark up content. Tags are enclosed in angle brackets:
- \\\`<tagname>\\\` - Opening tag
- \\\`</tagname>\\\` - Closing tag
- The content between opening and closing tags forms an **element**

## Essential HTML Tags to Remember:
- \\\`<!DOCTYPE html>\\\` - Declares the document type
- \\\`<html>\\\` - Root element of the page
- \\\`<head>\\\` - Contains metadata about the document
- \\\`<title>\\\` - Sets the page title (shown in browser tab)
- \\\`<body>\\\` - Contains the visible page content
    `,
  keyTerms: [
    { term: "HTML", definition: "HyperText Markup Language - the standard language for creating web pages." },
    { term: "Tag", definition: "Keywords enclosed in angle brackets that define HTML elements." },
    { term: "Element", definition: "The complete structure consisting of opening tag, content, and closing tag." },
    { term: "Attribute", definition: "Additional information provided within HTML tags to modify their behavior or appearance." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create Your First HTML Page",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Open a text editor (like Notepad, VS Code, or any code editor).",
        "Type the basic HTML structure shown in the lesson.",
        "Change the title to 'My First Web Page'.",
        "Change the heading to 'Hello, World!'.",
        "Change the paragraph to 'This is my first HTML page.'.",
        "Save the file as 'index.html'.",
        "Open the file in a web browser to see your page."
      ]
    },
    {
      id: 2,
      title: "Explore HTML Tags",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "In the same HTML file, add another paragraph below the first one.",
        "Add a second heading using the h2 tag.",
        "Try adding different heading levels (h1, h2, h3) to see the difference.",
        "Save and refresh your browser to see the changes."
      ]
    },
    {
      id: 3,
      title: "Personal Introduction Page",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a new HTML file called 'about-me.html'.",
        "Include the basic HTML structure.",
        "Set the title to 'About [Your Name]'.",
        "Create headings and paragraphs to introduce yourself.",
        "Include information like your name, interests, and goals.",
        "Use at least 3 different heading levels and multiple paragraphs."
      ]
    }
  ]
};
