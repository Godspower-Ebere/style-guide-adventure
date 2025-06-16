import { DayLesson } from "../types";

export const day3: DayLesson = {
  day: 3,
  title: "Headings and Paragraphs: Structuring Webpage Content",
  category: "HTML Basics",
  description: "Learn how to structure your webpage content using heading tags (<h1> to <h6>) and paragraph tags (<p>). Build organized and readable web pages.",
  learningObjectives: [
    "Understand the purpose of headings and paragraphs in HTML.",
    "Use <h1> to <h6> to create a content hierarchy.",
    "Use <p> tags to structure blocks of text.",
    "Apply semantic meaning to text content for better accessibility and SEO.",
    "Practice building simple structured HTML pages using these elements."
  ],
  detailedExplanation: `
## Welcome to Day 3: Headings & Paragraphs

Today’s lesson is all about organizing content using **headings** and **paragraphs** — two of the most commonly used HTML elements.

### Step-by-Step Breakdown

#### Step 1: Headings
- Use <h1> to <h6> to create titles and subtitles.
- <h1> is the most important (like the main page title).
- <h6> is the least important (like a footnote or small label).
- Headings are **semantic** — they help define structure for screen readers and search engines.

#### Step 2: Paragraphs
- Use the <p> tag to define blocks of text.
- Paragraphs are great for explanations, descriptions, and storytelling.
- Browsers automatically add spacing above and below each paragraph.

#### Step 3: Combining Headings and Paragraphs
- Nest headings and paragraphs inside the <body>.
- Start with an <h1>, add some <p> tags, then <h2> and more <p>, and so on.
- Example:
\`\`\`html
<h1>Main Title</h1>
<p>This is an introductory paragraph.</p>
<h2>Subsection</h2>
<p>More details about the topic.</p>
\`\`\`

#### Step 4: Why Structure Matters
- Headings help visually organize the page.
- They also help with:
  - **SEO (Search Engine Optimization)**
  - **Accessibility for screen readers**
  - **User experience**

### Code Example

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>My Page with Headings and Paragraphs</title>
</head>
<body>

    <h1>Welcome to My Awesome Page!</h1>

    <p>This is the first paragraph of text on my page. It introduces the main topic we are discussing today.</p>

    <h2>A Subsection Topic</h2>

    <p>This is a paragraph under the subsection heading. It provides more detail about the specific topic introduced by the H2.</p>

    <h3>Even More Detail Here</h3>

    <p>And here is another paragraph, maybe discussing a smaller point related to the previous subsection.</p>

</body>
</html>
\`\`\`
`,
  keyTerms: [
    { term: "Heading", definition: "A title or subtitle used to structure content, represented by <h1> through <h6> tags." },
    { term: "Paragraph", definition: "A block of regular text content, represented by the <p> tag." },
    { term: "Element", definition: "A part of an HTML document made of an opening tag, content, and a closing tag." },
    { term: "Tag", definition: "The syntax used to define HTML elements, enclosed in angle brackets (e.g., <h1>, <p>)." },
    { term: "Hierarchy", definition: "The structure created by nesting and ordering headings from <h1> to <h6>." }
  ],
  exercises: [
    {
      id: 1,
      title: "Your First Heading and Paragraph",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Open your existing HTML file or create a new one.",
        "Inside <body>, add an <h1> tag with: My First Web Page.",
        "Add a <p> tag below with: Learning HTML is fun and exciting!",
        "Save and view in a browser."
      ]
    },
    {
      id: 2,
      title: "Adding More Structure",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Below your first paragraph, add an <h2> with: About This Learning Plan.",
        "Add a <p> tag with a few sentences about your learning goals.",
        "Save and refresh to see the added section."
      ]
    },
    {
      id: 3,
      title: "Using Multiple Paragraphs",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Find a paragraph with multiple sentences.",
        "Break it into three separate <p> tags, one for each sentence.",
        "Save and refresh to see the new spacing between them."
      ]
    },
    {
      id: 4,
      title: "Experimenting with Heading Levels",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Add an <h2> titled 'My Favorite Things'.",
        "Add <h3>, <h4>, <h5>, and <h6> tags for items like: Learning, Coding, Coffee.",
        "Observe the size and appearance differences in your browser."
      ]
    },
    {
      id: 5,
      title: "Creating a Mini Blog Post",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Clear your <body> content.",
        "Add an <h1> with: My First Day Learning HTML.",
        "Add an <h2> with: By [Your Name] on Day 3.",
        "Add two or more <p> tags describing your experience.",
        "Add another <h2> titled: Key Learnings.",
        "Add one or two <p> tags summarizing what you’ve learned.",
        "Save and view your mini blog in the browser."
      ]
    }
  ]
};
