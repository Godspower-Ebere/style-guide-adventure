
import { DayLesson } from "../types";

export const day8: DayLesson = {
  day: 8,
  title: "HTML Tables - Advanced Features",
  category: "HTML Basics",
  description: "Explore advanced table features including table sections, spanning cells, and captions for better structure and accessibility.",
  learningObjectives: [
    "Learn to organize tables using thead, tbody, and tfoot sections.",
    "Master cell spanning with colspan and rowspan attributes.",
    "Understand how to add captions and improve table accessibility.",
    "Create complex table layouts for real-world data presentation."
  ],
  detailedExplanation: `
Today we'll advance our table skills by learning about table sections and advanced features that make tables more organized and accessible.

## Table Sections
HTML tables can be divided into logical sections:

\`\`\`html
<table>
  <caption>Monthly Sales Report</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
      <th>Profit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$10,000</td>
      <td>$2,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Total</th>
      <th>$10,000</th>
      <th>$2,000</th>
    </tr>
  </tfoot>
</table>
\`\`\`

## Table Section Elements
- **caption**: Provides a title or description for the table
- **thead**: Groups header content in a table
- **tbody**: Groups body content in a table
- **tfoot**: Groups footer content in a table

## Cell Spanning
You can make cells span multiple columns or rows:

### Colspan Example
\`\`\`html
<tr>
  <td colspan="2">This cell spans 2 columns</td>
  <td>Regular cell</td>
</tr>
\`\`\`

### Rowspan Example
\`\`\`html
<tr>
  <td rowspan="2">This cell spans 2 rows</td>
  <td>Cell 1</td>
</tr>
<tr>
  <td>Cell 2</td>
</tr>
\`\`\`

## Accessibility Benefits
- Table sections help screen readers navigate content
- Captions provide context for the entire table
- Proper headers improve understanding for all users
    `,
  keyTerms: [
    { term: "Caption", definition: "Element that provides a title or description for an HTML table." },
    { term: "Thead", definition: "Table section that groups header rows at the top of a table." },
    { term: "Tbody", definition: "Table section that contains the main content rows of a table." },
    { term: "Tfoot", definition: "Table section for footer content, typically containing totals or summaries." },
    { term: "Colspan", definition: "Attribute that makes a cell span across multiple columns." },
    { term: "Rowspan", definition: "Attribute that makes a cell span across multiple rows." }
  ],
  exercises: [
    {
      id: 1,
      title: "Add Table Sections",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'table-sections.html' with basic HTML structure.",
        "Create a table about monthly expenses with caption 'Monthly Budget'.",
        "Add a thead section with headers: 'Category', 'Amount', 'Notes'.",
        "Add a tbody section with 5 expense categories.",
        "Add a tfoot section with a total row.",
        "Test in browser to see the structured table."
      ]
    },
    {
      id: 2,
      title: "Practice Colspan",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'colspan-practice.html' for a course schedule.",
        "Create a table with days of the week as headers.",
        "Use colspan to create cells that span multiple days for longer classes.",
        "Add at least 3 rows with different colspan examples.",
        "Ensure the table structure remains logical and aligned."
      ]
    },
    {
      id: 3,
      title: "Master Rowspan",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'rowspan-example.html' for a department directory.",
        "Create a table with columns: 'Department', 'Employee', 'Position'.",
        "Use rowspan to group multiple employees under each department.",
        "Include at least 3 departments with 2-3 employees each.",
        "Verify that the table displays correctly without overlapping cells."
      ]
    },
    {
      id: 4,
      title: "Build a Complex Report Table",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'quarterly-report.html' with a comprehensive business report.",
        "Include caption, thead, tbody, and tfoot sections.",
        "Use colspan for section headers that span multiple columns.",
        "Add quarterly data with proper totals in the footer.",
        "Ensure the table is well-organized and professional-looking."
      ]
    },
    {
      id: 5,
      title: "Design a Tournament Bracket Table",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'tournament.html' for a sports tournament display.",
        "Use colspan and rowspan to create a bracket-style layout.",
        "Include team names, match results, and advancement paths.",
        "Add appropriate sections and captions for clarity.",
        "Challenge: Make the table represent a realistic tournament structure."
      ]
    }
  ]
};
