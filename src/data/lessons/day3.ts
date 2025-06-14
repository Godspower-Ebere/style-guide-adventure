
import { DayLesson } from "../types";

export const day3: DayLesson = {
  day: 3,
  title: "HTML Headings and Document Structure",
  category: "HTML Basics",
  description: "Master HTML headings (h1-h6) and learn how to create a proper document hierarchy for better structure and accessibility.",
  learningObjectives: [
    "Understand the importance of heading hierarchy in HTML documents.",
    "Learn to use all six heading levels (h1 through h6) appropriately.",
    "Create a well-structured document outline using headings.",
    "Understand how headings help with accessibility and SEO."
  ],
  detailedExplanation: `
Today we'll focus on one of the most important aspects of HTML structure: headings.

## What are HTML Headings?
HTML headings are used to define the structure and hierarchy of your content. They range from h1 (the most important) to h6 (the least important). Think of them as the outline of your document.

## The Six Heading Levels
HTML provides six different heading levels:

- **h1**: The main title or most important heading on the page
- **h2**: Major section headings
- **h3**: Sub-section headings under h2
- **h4**: Sub-sub-section headings under h3
- **h5**: Minor headings under h4
- **h6**: The smallest heading level

Example structure:
\`\`\`html
<h1>My Blog Post</h1>
<h2>Introduction</h2>
<h2>Main Content</h2>
<h3>First Point</h3>
<h3>Second Point</h3>
<h4>Details about Second Point</h4>
<h2>Conclusion</h2>
\`\`\`

## Best Practices for Headings
1. **Use h1 only once per page** - It should be your main page title
2. **Don't skip heading levels** - Don't jump from h1 to h3 without an h2
3. **Use headings for structure, not styling** - Don't choose a heading based on how it looks
4. **Make headings descriptive** - They should clearly describe the content that follows

## Why Headings Matter
- **Accessibility**: Screen readers use headings to navigate content
- **SEO**: Search engines use headings to understand your content structure
- **User Experience**: Headings help users scan and find information quickly
    `,
  keyTerms: [
    { term: "Heading Hierarchy", definition: "The logical order and structure of headings from h1 to h6, creating an outline of your content." },
    { term: "h1 Tag", definition: "The most important heading level, typically used for the main page title." },
    { term: "Document Outline", definition: "The structure of a webpage created by the proper use of heading levels." },
    { term: "Semantic Structure", definition: "Using HTML elements based on their meaning rather than their appearance." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create Your First Heading",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Open a new text editor and create a new HTML file.",
        "Add the basic HTML structure with DOCTYPE, html, head, and body tags.",
        "In the head section, add a title tag with the content 'Learning HTML Headings'.",
        "In the body, create an h1 tag and type the text 'Welcome to My Learning Journey' inside it.",
        "Save the file as 'headings.html' and open it in your browser."
      ]
    },
    {
      id: 2,
      title: "Practice Different Heading Levels",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "In the same 'headings.html' file, below your h1 tag, add an h2 tag.",
        "Type 'What I'm Learning Today' inside the h2 tag.",
        "Add an h3 tag below the h2 and type 'HTML Basics' inside it.",
        "Add another h3 tag and type 'Document Structure' inside it.",
        "Save and refresh your browser to see how different heading levels look."
      ]
    },
    {
      id: 3,
      title: "Build a Complete Document Structure",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'article.html' with the basic HTML structure.",
        "Add the title 'My First Article' to the head section.",
        "Create an h1 tag with the content 'The Amazing World of Web Development'.",
        "Add an h2 tag with 'Introduction to Web Technologies'.",
        "Under that h2, add two h3 tags: 'What is HTML?' and 'Why Learn HTML?'.",
        "Add another h2 tag with 'Getting Started'.",
        "Under that h2, add an h3 tag with 'Setting Up Your Environment'.",
        "Save and view your structured document in the browser."
      ]
    },
    {
      id: 4,
      title: "Create a Recipe with Proper Heading Structure",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'recipe.html' with the basic HTML structure.",
        "Set the page title to 'Chocolate Chip Cookie Recipe'.",
        "Create an h1 tag and type 'Grandma's Famous Chocolate Chip Cookies'.",
        "Add an h2 tag and type 'Ingredients'.",
        "Add another h2 tag and type 'Instructions'.",
        "Under the Instructions h2, add an h3 tag and type 'Preparation'.",
        "Add another h3 tag under Instructions and type 'Baking'.",
        "Finally, add an h2 tag and type 'Serving Suggestions'.",
        "Save the file and check that your heading structure makes sense."
      ]
    },
    {
      id: 5,
      title: "Design a Blog Post Structure",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a new file called 'blog-post.html' with the basic HTML structure.",
        "Set the page title to 'My Travel Blog'.",
        "Create an h1 tag and type 'My Amazing Trip to Paris'.",
        "Add an h2 tag and type 'Day 1: Arrival and First Impressions'.",
        "Under Day 1, add two h3 tags: 'The Flight' and 'First Evening in Paris'.",
        "Add an h2 tag and type 'Day 2: Exploring the City'.",
        "Under Day 2, add three h3 tags: 'Morning at the Louvre', 'Lunch by the Seine', and 'Evening at the Eiffel Tower'.",
        "Add a final h2 tag and type 'Final Thoughts and Recommendations'.",
        "Under Final Thoughts, add an h3 tag and type 'Tips for Future Travelers'.",
        "Save and review your document structure to ensure it flows logically."
      ]
    }
  ]
};
