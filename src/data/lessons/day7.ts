
import { DayLesson } from "../types";

export const day7: DayLesson = {
  day: 7,
  title: "HTML Tables - Organizing Data",
  category: "HTML Basics",
  description: "Learn to create and structure data tables using HTML table elements for organizing information effectively.",
  learningObjectives: [
    "Master the basic table structure with table, tr, td, and th elements.",
    "Learn to create table headers and organize data in rows and columns.",
    "Understand table accessibility with proper markup.",
    "Practice creating complex tables with multiple sections."
  ],
  detailedExplanation: `
Tables are perfect for displaying structured data in rows and columns.

## Basic Table Structure
Every table uses these essential elements:

\\\`\\\`\\\`html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
\\\`\\\`\\\`

## Table Elements
- \\\`<table>\\\` - Container for the entire table
- \\\`<tr>\\\` - Table row
- \\\`<th>\\\` - Table header cell
- \\\`<td>\\\` - Table data cell
- \\\`<thead>\\\` - Groups header content
- \\\`<tbody>\\\` - Groups body content
- \\\`<tfoot>\\\` - Groups footer content

## Complete Table Example
\\\`\\\`\\\`html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>25</td>
      <td>New York</td>
    </tr>
    <tr>
      <td>Sarah</td>
      <td>30</td>
      <td>London</td>
    </tr>
  </tbody>
</table>
\\\`\\\`\\\`

## Table Attributes
- \\\`colspan\\\` - Spans multiple columns
- \\\`rowspan\\\` - Spans multiple rows
- \\\`scope\\\` - Defines header relationship

## Best Practices
- Use tables for tabular data only
- Always include table headers
- Use thead, tbody, and tfoot for structure
- Add captions for accessibility
    `,
  keyTerms: [
    { term: "Table", definition: "HTML element for displaying data in rows and columns." },
    { term: "Table Row", definition: "The <tr> element that creates a horizontal row in a table." },
    { term: "Table Header", definition: "The <th> element used for table column or row headers." },
    { term: "Table Data", definition: "The <td> element that contains actual data in table cells." },
    { term: "Colspan", definition: "Attribute that makes a cell span multiple columns." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Data Table",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a table showing your weekly schedule.",
        "Include headers for Day and Activity.",
        "Add at least 5 rows of data.",
        "Use proper table structure with thead and tbody."
      ]
    },
    {
      id: 2,
      title: "Student Grade Table",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a table for student grades.",
        "Include columns for Name, Math, Science, English, Average.",
        "Add at least 4 students with their grades.",
        "Use appropriate headers and calculate averages."
      ]
    },
    {
      id: 3,
      title: "Product Comparison Table",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a table comparing 3 products.",
        "Include features like price, rating, availability.",
        "Use colspan for grouped headers if needed.",
        "Add proper table caption and structure."
      ]
    }
  ]
};
