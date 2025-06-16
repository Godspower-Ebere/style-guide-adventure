import { DayLesson } from "../types";

export const day3b: DayLesson = {
  day: 3,
  title: "HTML Lists: Organizing Information Clearly",
  category: "HTML Basics",
  description: "Learn how to create unordered, ordered, and definition lists in HTML to organize information clearly and accessibly.",
  learningObjectives: [
    "Differentiate between unordered, ordered, and definition lists.",
    "Use <ul> and <li> to create bullet-point lists.",
    "Use <ol> and <li> to create numbered lists.",
    "Use <dl>, <dt>, and <dd> to create term-definition pairs.",
    "Structure content logically with lists for improved readability."
  ],
  detailedExplanation: `
## HTML Lists Explained

Lists make content easy to scan and organize. HTML provides **three types of lists**:

### 1. Unordered Lists (<ul> and <li>)
Used for non-sequential items (e.g., shopping list):
\`\`\`html
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Eggs</li>
</ul>
\`\`\`

### 2. Ordered Lists (<ol> and <li>)
Used when order matters (e.g., instructions or rankings):
\`\`\`html
<ol>
  <li>Wake up</li>
  <li>Brush teeth</li>
  <li>Eat breakfast</li>
</ol>
\`\`\`

### 3. Definition Lists (<dl>, <dt>, <dd>)
Used for glossaries or FAQs:
\`\`\`html
<dl>
  <dt>HTML</dt>
  <dd>The language used to create web pages.</dd>
  <dt>CSS</dt>
  <dd>The language used to style web pages.</dd>
</dl>
\`\`\`

### Key Takeaways:
- Use <ul> when order **doesn't** matter.
- Use <ol> when order **does** matter.
- Use <dl> for term-definition formatting.
- All list items go inside <li> (or <dt>/<dd> for definitions).
`,
  keyTerms: [
    { term: "<ul>", definition: "Unordered List. Displays bullet-point items." },
    { term: "<ol>", definition: "Ordered List. Displays numbered items." },
    { term: "<li>", definition: "List Item. Used inside <ul> or <ol> to define each entry." },
    { term: "<dl>", definition: "Definition List. Groups terms and their definitions." },
    { term: "<dt>", definition: "Definition Term. Defines the term in a <dl> list." },
    { term: "<dd>", definition: "Definition Description. Defines the meaning of the <dt> term." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create a Shopping List",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML file and add an <h2> title: My Shopping List.",
        "Add a <ul> element and insert at least three <li> items (e.g., Milk, Bread, Eggs).",
        "Save and open it in a browser to view bullet points."
      ]
    },
    {
      id: 2,
      title: "Morning Routine Ordered List",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Below your shopping list, add a new <h2>: My Morning Routine.",
        "Add an <ol> with at least three <li> items (e.g., Wake up, Brush teeth, Eat breakfast).",
        "Save and preview the list in your browser."
      ]
    },
    {
      id: 3,
      title: "Build a Mini Glossary",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Create an <h2> titled: Programming Basics Glossary.",
        "Add a <dl> containing at least two <dt> terms with corresponding <dd> definitions.",
        "Save and preview. Definitions should be indented under terms."
      ]
    },
    {
      id: 4,
      title: "Combine Lists: Sandwich Recipe",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Add an <h2>: Simple Sandwich Recipe.",
        "Add <h3>: Ingredients, followed by a <ul> with items like bread, peanut butter, etc.",
        "Add <h3>: Steps, followed by an <ol> listing the preparation instructions.",
        "Save and test it in the browser."
      ]
    },
    {
      id: 5,
      title: "Update Your Shopping List",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Reopen your shopping list from Exercise 1.",
        "Add one more item (e.g., Toilet paper) as a new <li>.",
        "Save and refresh to confirm the new item appears."
      ]
    }
  ]
};
