
import { DayLesson } from "../types";

export const day4: DayLesson = {
  day: 4,
  title: "HTML Lists - Ordered and Unordered",
  category: "HTML Basics",
  description: "Learn to create organized content using HTML lists. Master both ordered (numbered) and unordered (bulleted) lists.",
  learningObjectives: [
    "Understand the difference between ordered and unordered lists.",
    "Learn to create unordered lists using the ul and li tags.",
    "Learn to create ordered lists using the ol and li tags.",
    "Practice nesting lists inside other lists for complex structures."
  ],
  detailedExplanation: `
Lists are essential for organizing information on webpages. HTML provides two main types of lists that you'll use constantly.

## Unordered Lists (Bulleted Lists)
Unordered lists display items with bullet points. They're perfect for items where the order doesn't matter.

Structure:
\`\`\`html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
\`\`\`

The ul tag creates the list container, and each li tag creates a list item.

## Ordered Lists (Numbered Lists)
Ordered lists display items with numbers. Use them when the sequence or ranking matters.

Structure:
\`\`\`html
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
\`\`\`

## Nested Lists
You can put lists inside other lists to create sub-items:

\`\`\`html
<ul>
  <li>Main item 1</li>
  <li>Main item 2
    <ul>
      <li>Sub-item 1</li>
      <li>Sub-item 2</li>
    </ul>
  </li>
  <li>Main item 3</li>
</ul>
\`\`\`

## When to Use Each Type
- **Unordered lists**: Shopping lists, features, menu items, any items where order doesn't matter
- **Ordered lists**: Instructions, rankings, step-by-step processes, any items where sequence is important
    `,
  keyTerms: [
    { term: "ul (Unordered List)", definition: "An HTML tag that creates a bulleted list where item order doesn't matter." },
    { term: "ol (Ordered List)", definition: "An HTML tag that creates a numbered list where item order is important." },
    { term: "li (List Item)", definition: "An HTML tag that defines individual items within both ordered and unordered lists." },
    { term: "Nested Lists", definition: "Lists placed inside other lists to create hierarchical or sub-categorized information." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create Your First Unordered List",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file with the basic structure.",
        "Add the title 'My Favorite Things' to the head section.",
        "In the body, create an h1 tag and type 'Things I Love'.",
        "Below the heading, create a ul tag.",
        "Inside the ul tag, add three li tags.",
        "In the first li, type 'Pizza'.",
        "In the second li, type 'Movies'.",
        "In the third li, type 'Books'.",
        "Save as 'lists.html' and view in your browser."
      ]
    },
    {
      id: 2,
      title: "Create an Ordered List for Instructions",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "In the same 'lists.html' file, add an h2 tag with the text 'How to Make Tea'.",
        "Below the h2, create an ol tag.",
        "Add the first li tag and type 'Boil water in a kettle'.",
        "Add a second li tag and type 'Put tea bag in cup'.",
        "Add a third li tag and type 'Pour hot water into cup'.",
        "Add a fourth li tag and type 'Let it steep for 3-5 minutes'.",
        "Add a fifth li tag and type 'Remove tea bag and enjoy'.",
        "Save and refresh to see your numbered instructions."
      ]
    },
    {
      id: 3,
      title: "Practice Nested Lists",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'nested-lists.html' with the basic structure.",
        "Add the title 'My Study Plan' to the head section.",
        "Create an h1 tag with 'Web Development Learning Path'.",
        "Create a ul tag for the main topics.",
        "Add an li tag and type 'HTML Basics'.",
        "Inside that li tag (after the text), create another ul tag.",
        "In the nested ul, add three li tags with: 'Structure', 'Text', and 'Lists'.",
        "Close the nested ul and add another main li with 'CSS Basics'.",
        "Save and see how the nested structure appears."
      ]
    },
    {
      id: 4,
      title: "Build a Shopping List",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'shopping.html' with the basic HTML structure.",
        "Set the page title to 'Weekly Shopping List'.",
        "Create an h1 tag and type 'Shopping List for This Week'.",
        "Add an h2 tag and type 'Groceries'.",
        "Under the Groceries heading, create a ul tag.",
        "Add at least 5 li tags with different grocery items like 'Milk', 'Bread', 'Eggs', etc.",
        "Add another h2 tag and type 'Household Items'.",
        "Create another ul tag with at least 3 household items.",
        "Save and check that both lists display correctly."
      ]
    },
    {
      id: 5,
      title: "Create a Complex Nested Menu Structure",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a new file called 'menu.html' with the basic HTML structure.",
        "Set the page title to 'Restaurant Menu'.",
        "Create an h1 tag and type 'Mario's Italian Restaurant'.",
        "Create a ul tag for the main menu categories.",
        "Add an li tag and type 'Appetizers'.",
        "Inside that li, create a nested ul with 3 appetizer items.",
        "Add another main li tag and type 'Main Courses'.",
        "Inside Main Courses, create a nested ul tag.",
        "In the Main Courses nested list, add an li for 'Pasta Dishes'.",
        "Inside the Pasta Dishes li, create another nested ul with 3 pasta options.",
        "Add another li in Main Courses for 'Pizza' with 2 pizza options in a nested ul.",
        "Finally, add a main li for 'Desserts' with 3 dessert options in a nested ul.",
        "Save and review your complex menu structure."
      ]
    }
  ]
};
