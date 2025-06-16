
import { DayLesson } from "../types";

export const day3: DayLesson = {
  day: 3,
  title: "HTML Headings - Creating Document Structure",
  category: "HTML Basics",
  description: "Learn to structure your content with proper HTML headings to create accessible and SEO-friendly documents.",
  learningObjectives: [
    "Understand the importance of heading hierarchy in HTML documents.",
    "Master the six levels of HTML headings (h1-h6).",
    "Learn to create logical document structure using headings.",
    "Practice building accessible content with proper heading order."
  ],
  detailedExplanation: `
Headings are crucial for organizing content and creating a logical structure in HTML documents.

## The Six Heading Levels
HTML provides six levels of headings, from h1 (most important) to h6 (least important):

\\\`\\\`\\\`html
<h1>Main Title (Most Important)</h1>
<h2>Major Section</h2>
<h3>Subsection</h3>
<h4>Sub-subsection</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>
\\\`\\\`\\\`

## Heading Hierarchy Rules
- Use only one h1 per page (usually the main title)
- Don't skip heading levels (don't go from h1 to h3)
- Use headings to create a logical outline
- Screen readers use headings for navigation

## Example Document Structure
\\\`\\\`\\\`html
<h1>Complete Guide to Web Development</h1>
  <h2>HTML Basics</h2>
    <h3>Elements and Tags</h3>
    <h3>Attributes</h3>
  <h2>CSS Styling</h2>
    <h3>Selectors</h3>
    <h3>Properties</h3>
      <h4>Colors</h4>
      <h4>Fonts</h4>
\\\`\\\`\\\`

## Best Practices
- Use headings for structure, not styling
- Make headings descriptive and meaningful
- Keep headings concise but informative
- Test with screen readers for accessibility
    `,
  keyTerms: [
    { term: "Heading Hierarchy", definition: "The logical order of headings from h1 to h6 that creates document structure." },
    { term: "Document Outline", definition: "The structural organization of content using headings." },
    { term: "Screen Reader", definition: "Assistive technology that reads web content aloud for visually impaired users." },
    { term: "SEO", definition: "Search Engine Optimization - techniques to improve website visibility in search results." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Heading Structure",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file with the basic structure.",
        "Add an h1 heading with your name.",
        "Add an h2 heading for 'About Me'.",
        "Add an h2 heading for 'My Interests'.",
        "Under 'My Interests', add h3 headings for specific interests.",
        "Save and view your structured document."
      ]
    },
    {
      id: 2,
      title: "Article with Proper Hierarchy",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an article about your favorite subject.",
        "Use h1 for the article title.",
        "Create at least 3 main sections with h2 headings.",
        "Add subsections with h3 headings where appropriate.",
        "Ensure you don't skip heading levels."
      ]
    },
    {
      id: 3,
      title: "Complete Document Structure",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a comprehensive guide on a topic you know well.",
        "Use all heading levels from h1 to h4 appropriately.",
        "Create a logical hierarchy that makes sense.",
        "Add paragraphs under each heading to complete the content.",
        "Test the structure by creating a mental table of contents."
      ]
    }
  ]
};
