
import { DayLesson } from "../types";

export const day2: DayLesson = {
  day: 2,
  title: "HTML Paragraphs and Text Formatting",
  category: "HTML Basics",
  description: "Learn how to structure text with paragraphs and apply formatting to emphasize and style your content.",
  learningObjectives: [
    "Use the <p> tag to create well-structured paragraphs.",
    "Understand how browsers handle whitespace and line breaks in HTML.",
    "Apply common text formatting tags like <strong>, <em>, <b>, <i>, and <u>.",
    "Differentiate between semantic (<strong>, <em>) and presentational (<b>, <i>) tags."
  ],
  detailedExplanation: `
Now that you can create a basic HTML page, let's focus on its most common content: text.

## Paragraphs: The \`<p>\` Tag
The \`<p>\` tag is one of the most fundamental tags in HTML. It defines a paragraph of text. Web browsers automatically add some vertical space (a margin) before and after each paragraph, which helps to separate them visually.

\`\`\`html
<p>This is a paragraph. It can contain one or many sentences.</p>
<p>This is another paragraph. The browser will render it separately from the one above.</p>
\`\`\`

## Whitespace and Line Breaks
A common point of confusion for beginners is how HTML handles whitespace. If you put multiple spaces or line breaks in your HTML code, the browser will collapse them into a single space when it renders the page.

To force a line break without starting a new paragraph, you can use the line break tag: \`<br>\`. This is a self-closing tag.

\`\`\`html
<p>This text is on one line.<br>This text appears on the next line.</p>
\`\`\`

## Text Formatting: Making Your Text Stand Out
HTML provides several tags to format text. It's important to distinguish between **semantic** tags (which add meaning to the content) and **presentational** tags (which just change the appearance).

### Semantic Formatting
- **\`<strong>\`**: Defines text with strong importance. Browsers typically render this as **bold**. You should use this when the text is semantically important.
  - Example: \`<strong>Warning:</strong> Do not touch.\`
- **\`<em>\`**: Defines emphasized text. Browsers typically render this as *italic*. Use this to change the meaning of a sentence.
  - Example: \`You *must* complete this step.\`

### Presentational Formatting
- **\`<b>\`**: Defines bold text without any extra importance.
  - Example: \`This word is in <b>bold</b>.\`
- **\`<i>\`**: Defines italic text, often used for technical terms, thoughts, or ship names.
  - Example: \`The term <i>hyperlink</i> is fundamental to the web.\`
- **\`<u>\`**: Defines underlined text. Be careful with this one, as users often associate underlined text with hyperlinks.
  - Example: \`This text is <u>underlined</u>.\`

**Best Practice:** Whenever possible, prefer using \`<strong>\` and \`<em>\` over \`<b>\` and \`<i>\`. It's better for accessibility (screen readers can use them to add vocal emphasis) and for search engine optimization (SEO).
    `,
  keyTerms: [
    { term: "Paragraph (`<p>`)", definition: "A tag used to define a block of text as a paragraph." },
    { term: "Line Break (`<br>`)", definition: "A self-closing tag that creates a line break within a block of text." },
    { term: "Strong (`<strong>`)", definition: "A semantic tag that indicates strong importance, typically rendered as bold." },
    { term: "Emphasis (`<em>`)", definition: "A semantic tag used to add emphasis to text, typically rendered as italic." },
    { term: "Whitespace", definition: "Any sequence of space, tab, and newline characters in your HTML code. Browsers collapse multiple whitespace characters into a single space." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create and Style Your First Paragraph",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Open your 'index.html' file.",
        "Delete the placeholder paragraph you created yesterday.",
        "Add a new paragraph using a `p` tag with the following content: 'HTML is the skeleton of every webpage. It provides the structure and meaning of the content.'",
        "Save and refresh your browser to see the new paragraph."
      ]
    },
    {
      id: 2,
      title: "Add Multiple Paragraphs and Line Breaks",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "In the same 'index.html' file, add a second paragraph below the first one.",
        "Content for the second paragraph: 'Learning HTML is the first and most crucial step in web development. With it, you lay the foundation upon which you'll build with CSS and JavaScript.'",
        "In the middle of the second paragraph, add a line break using a `br` tag right after the first sentence.",
        "Save the file and observe how the line break affects the paragraph's display."
      ]
    },
    {
      id: 3,
      title: "Practice with Text Formatting",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a new paragraph in 'index.html'.",
        "Add a new paragraph with the sentence: 'It is very important to distinguish between semantic and presentational tags.'",
        "Wrap the word 'important' with `strong` tags.",
        "Wrap the words 'semantic' and 'presentational' with `em` tags.",
        "Add another paragraph with the content: 'This text is bold and this one is italic.'. Then, wrap the word 'bold' with a `b` tag, and the word 'italic' with an `i` tag.",
        "Save and view the formatting changes in your browser."
      ]
    },
    {
      id: 4,
      title: "Create a Story Page with Formatting",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'story.html'.",
        "Set up the complete HTML structure, with the title 'The Dragon\\'s Treasure'.",
        "Create an `h1` with the title: `The Dragon\\'s Treasure`.",
        "Create an `h2` with the author: `By [Your Name]`.",
        "Write a short story using at least three paragraphs.",
        "In the first paragraph, describe the setting. Use an `em` tag for the name of the ancient forest.",
        "In the second paragraph, describe the hero's challenge. Use a `strong` tag to highlight the main danger, for example, 'a slumbering dragon'.",
        "In the third paragraph, describe the treasure. Use `b` and `i` tags to describe some of the items. For example, in a sentence like 'a golden chalice and an enchanted scroll', make 'golden' bold and 'enchanted' italic."
      ]
    },
    {
      id: 5,
      title: "Format a Recipe Page",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'recipe.html'.",
        "Set up the HTML structure with the title 'My Favorite Chocolate Chip Cookies'.",
        "Add an `h1` with the recipe name: `The Ultimate Chocolate Chip Cookies`.",
        "Create an `h2` heading called 'Description'.",
        "Write a paragraph describing the cookies. Use a `strong` tag on the word `best`.",
        "Add another `h2` heading called 'A Note from the Baker'.",
        "Write a paragraph with a personal tip. Emphasize a key instruction with an `em` tag. For example, in the sentence 'You must chill the dough for at least one hour', wrap the word 'must' in `em` tags.",
        "Use a `u` tag for a fun fact. For example, create a paragraph with 'Fun Fact: Chocolate chip cookies were invented by accident!' and wrap the entire sentence in a `u` tag."
      ]
    }
  ]
};
