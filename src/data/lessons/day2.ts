import { DayLesson } from "../types";

export const day2: DayLesson = {
  day: 2,
  title: "Understanding the HTML <head>: Metadata, Titles, and More",
  category: "HTML Basics",
  description: "Dive into the <head> section of an HTML document. Learn what it does, why it matters, and how to include meta tags and a proper title for your page.",
  learningObjectives: [
    "Understand the role and importance of the <head> element in HTML.",
    "Learn about key <head> elements like <title> and <meta>.",
    "Differentiate between content for users (<body>) and metadata for browsers (<head>).",
    "Practice setting up character encoding and viewport settings for responsive design.",
    "Add and edit HTML comments inside the <head> section."
  ],
  detailedExplanation: `
## Welcome to Day 2!

Yesterday, we learned how to build the basic structure of an HTML document. Today, we'll zoom in on the \`<head>\` section — the part of your page that holds **invisible but essential information**.

### Step-by-Step Explanation

1. **What is the <head> section?**  
   Think of it as the control room. It's where you tell the browser and search engines things about the page, like the title, character encoding, and how to display it on mobile devices.

2. **Why is it important?**  
   The \`<head>\` ensures your webpage displays correctly, loads external resources like CSS and JavaScript, and is discoverable by search engines.

3. **What goes inside the <head>?**  
   - \`<title>\`: The name of the page that appears in the browser tab.
   - \`<meta>\`: Data *about* your document (charset, viewport, author, etc.).
   - \`<link>\`: External stylesheets or fonts.
   - \`<style>\`: Internal CSS styles.
   - \`<script>\`: JavaScript code.

4. **Focus for Today**  
   We'll focus on adding:
   - \`<meta charset="UTF-8">\` — ensures characters display properly.
   - \`<meta name="viewport"...>\` — helps pages look good on mobile.
   - \`<title>\` — gives your page a proper name.

### Code Example

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

This is the most basic professional HTML \`<head>\` you’ll see in almost every modern webpage.
`,
  keyTerms: [
    { term: "HTML Head", definition: "The section of an HTML document enclosed by <head> and </head> that contains metadata and links to external resources." },
    { term: "Element", definition: "A basic building block of HTML, defined by a start tag, content, and often an end tag." },
    { term: "Attribute", definition: "A key-value pair within a tag that provides additional information about the element." },
    { term: "Title", definition: "The text within the <title> tag that appears in the browser tab or window." },
    { term: "Metadata", definition: "Information about the HTML document, such as charset and viewport settings." },
    { term: "Charset", definition: "Short for 'character set', like UTF-8, that defines how characters are encoded and displayed." },
    { term: "Viewport", definition: "The visible area of a web page in the browser; meta viewport helps ensure responsive design." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create a New File with a Title",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Open your code editor.",
        "Create a new file with basic HTML structure.",
        "Inside <head>, add <title>My First Titled Page</title>.",
        "Inside <body>, add <p>Hello!</p>.",
        "Save as day2_ex1.html and open in your browser."
      ]
    },
    {
      id: 2,
      title: "Add the Charset Meta Tag",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Open day2_ex1.html.",
        "Inside <head>, before the <title>, add: <meta charset=\"UTF-8\">.",
        "Save the file."
      ]
    },
    {
      id: 3,
      title: "Add the Viewport Meta Tag",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "In day2_ex1.html, add the following meta tag after charset and before <title>:",
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">.",
        "Save the file."
      ]
    },
    {
      id: 4,
      title: "Experiment with the Title",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Open day2_ex1.html.",
        "Change the <title> text to something new, like 'Day 2 Practice Page!'.",
        "Save and refresh the browser. The tab title should update."
      ]
    },
    {
      id: 5,
      title: "Add a Comment in the Head",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Open day2_ex1.html.",
        "Inside the <head>, add a comment like: <!-- This is the head section -->.",
        "Save and view the page source to confirm it's there (but not visible on the page)."
      ]
    }
  ]
};
