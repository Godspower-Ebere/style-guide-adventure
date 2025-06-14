
import { DayLesson } from "../types";

export const day7: DayLesson = {
  day: 7,
  title: "HTML Tables - Basic Structure",
  category: "HTML Basics",
  description: "Learn to create and structure HTML tables for displaying tabular data with proper semantic markup.",
  learningObjectives: [
    "Understand when and why to use HTML tables for data presentation.",
    "Master the basic table elements: table, tr, td, th.",
    "Learn to create table headers and data cells properly.",
    "Understand table accessibility and semantic structure."
  ],
  detailedExplanation: `
Today we'll explore HTML tables, which are essential for displaying structured data in rows and columns.

## What are HTML Tables?
HTML tables are used to display data in a structured format with rows and columns. They should only be used for tabular data, not for page layout (that's what CSS is for!).

## Basic Table Structure
Every HTML table follows this basic structure:

\`\`\`html
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
\`\`\`

## Essential Table Elements
- **table**: The container for the entire table
- **tr**: Table row - creates a horizontal row
- **th**: Table header - used for column or row headers
- **td**: Table data - contains the actual data

## Best Practices
1. Always include headers using th elements
2. Use tables only for tabular data, never for layout
3. Add appropriate attributes for accessibility
4. Keep table structure clean and logical

## Example: Student Grades Table
\`\`\`html
<table>
  <tr>
    <th>Student Name</th>
    <th>Subject</th>
    <th>Grade</th>
  </tr>
  <tr>
    <td>John Smith</td>
    <td>Mathematics</td>
    <td>A</td>
  </tr>
  <tr>
    <td>Jane Doe</td>
    <td>Science</td>
    <td>B+</td>
  </tr>
</table>
\`\`\`
    `,
  keyTerms: [
    { term: "Table", definition: "HTML element used to display data in rows and columns format." },
    { term: "Table Row (tr)", definition: "Creates a horizontal row within a table structure." },
    { term: "Table Header (th)", definition: "Defines header cells that describe the content of columns or rows." },
    { term: "Table Data (td)", definition: "Contains the actual data content within table cells." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create Your First Table",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'first-table.html'.",
        "Add the basic HTML structure with DOCTYPE, html, head, and body tags.",
        "Set the page title to 'My First HTML Table'.",
        "In the body, create a table with 2 columns: 'Name' and 'Age'.",
        "Add 3 rows of data with different names and ages.",
        "Save and open in your browser to see your table."
      ]
    },
    {
      id: 2,
      title: "Build a Product Catalog Table",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'products.html' with basic HTML structure.",
        "Create a table with headers: 'Product Name', 'Price', 'Category'.",
        "Add at least 5 products with realistic data.",
        "Make sure to use th elements for headers and td for data.",
        "Test that your table displays correctly in the browser."
      ]
    },
    {
      id: 3,
      title: "Employee Directory Table",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'employees.html' with a comprehensive employee table.",
        "Include columns: 'Employee ID', 'Name', 'Department', 'Position', 'Start Date'.",
        "Add at least 8 employees with varied information.",
        "Ensure proper use of table headers for accessibility.",
        "Verify the table structure is clean and well-organized."
      ]
    },
    {
      id: 4,
      title: "School Schedule Table",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'schedule.html' for a weekly class schedule.",
        "Design a table with columns for each day of the week.",
        "Add rows for different time periods (e.g., 9:00 AM, 10:00 AM, etc.).",
        "Fill in with class subjects for a typical school week.",
        "Make sure headers clearly identify days and times."
      ]
    },
    {
      id: 5,
      title: "Sports Statistics Table",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'sports-stats.html' for player statistics.",
        "Design a table for a sports team with columns: 'Player Name', 'Games Played', 'Goals/Points', 'Assists'.",
        "Add data for at least 10 players with realistic statistics.",
        "Include a header row that clearly describes each column.",
        "Ensure the table is well-structured and easy to read."
      ]
    }
  ]
};
