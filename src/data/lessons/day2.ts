
import { DayLesson } from "../types";

export const day2: DayLesson = {
  day: 2,
  title: "HTML Text Elements - Paragraphs and Basic Formatting",
  category: "HTML Basics",
  description: "Master HTML text elements including paragraphs, line breaks, and basic text formatting tags.",
  learningObjectives: [
    "Learn to structure text content using paragraph tags.",
    "Understand how to create line breaks and handle whitespace in HTML.",
    "Master basic text formatting tags like strong, em, and others.",
    "Practice creating well-formatted text content for web pages."
  ],
  detailedExplanation: `
Today we'll focus on the fundamental building blocks of web content: text elements.

## The Paragraph Tag
The paragraph tag \\\`<p>\\\` is one of the most commonly used HTML elements. It represents a paragraph of text.

\\\`\\\`\\\`html
<p>This is a paragraph of text. It can contain multiple sentences and will be displayed as a block of text with spacing above and below.</p>
\\\`\\\`\\\`

## Line Breaks and Whitespace
HTML handles whitespace differently than you might expect:
- Multiple spaces are collapsed into a single space
- Line breaks in your code don't create line breaks on the page
- Use \\\`<br>\\\` tag for line breaks
- Use \\\`<hr>\\\` tag for horizontal rules (divider lines)

\\\`\\\`\\\`html
<p>This is the first line.<br>
This is the second line.</p>
<hr>
<p>This is after a horizontal rule.</p>
\\\`\\\`\\\`

## Basic Text Formatting
HTML provides several tags for basic text formatting:

- \\\`<strong>\\\` - Important text (usually displayed as bold)
- \\\`<em>\\\` - Emphasized text (usually displayed as italic)
- \\\`<b>\\\` - Bold text (presentational)
- \\\`<i>\\\` - Italic text (presentational)
- \\\`<u>\\\` - Underlined text
- \\\`<small>\\\` - Smaller text
- \\\`<mark>\\\` - Highlighted text

\\\`\\\`\\\`html
<p>This is <strong>very important</strong> text.</p>
<p>This is <em>emphasized</em> text.</p>
<p>You can <mark>highlight</mark> important parts.</p>
\\\`\\\`\\\`

## Best Practices
- Use \\\`<strong>\\\` instead of \\\`<b>\\\` for important text
- Use \\\`<em>\\\` instead of \\\`<i>\\\` for emphasized text
- Always close your tags properly
- Keep paragraphs focused on single topics
    `,
  keyTerms: [
    { term: "Paragraph Tag", definition: "The <p> element used to define paragraphs of text content." },
    { term: "Line Break", definition: "The <br> tag used to create a line break within text." },
    { term: "Strong Element", definition: "The <strong> tag used to indicate important text, typically displayed as bold." },
    { term: "Emphasis Element", definition: "The <em> tag used to emphasize text, typically displayed as italic." },
    { term: "Semantic HTML", definition: "Using HTML elements based on their meaning rather than their appearance." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Paragraph Practice",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file with the basic structure.",
        "Add a title 'Text Formatting Practice'.",
        "Create three different paragraphs about your favorite hobby.",
        "Save the file as 'text-practice.html' and view it in your browser."
      ]
    },
    {
      id: 2,
      title: "Text Formatting Exploration",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "In the same file, add a new paragraph that uses strong, em, and mark tags.",
        "Experiment with line breaks using the br tag.",
        "Add a horizontal rule between different sections.",
        "Try combining different formatting tags within the same paragraph."
      ]
    },
    {
      id: 3,
      title: "Recipe Page",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a new HTML file called 'recipe.html'.",
        "Create a recipe page with a title, introduction paragraph, and instructions.",
        "Use strong tags to highlight important cooking terms.",
        "Use em tags for cooking tips or warnings.",
        "Include line breaks where appropriate in the instructions.",
        "Add horizontal rules to separate different sections."
      ]
    }
  ]
};
