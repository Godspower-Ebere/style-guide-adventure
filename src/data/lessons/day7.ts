
import { DayLesson } from "../types";

export const day7: DayLesson = {
  day: 7,
  title: "HTML Tables - Organizing Data Like a Pro",
  category: "HTML Basics",
  description: "Hey there! Welcome to day 7. Today we're going to learn about HTML tables - one of the most powerful ways to organize and display data on your website. Whether you're showing a schedule, comparing products, or displaying statistics, tables will help you present information in a clear, structured way that your visitors will love!",
  learningObjectives: [
    "Master the essential table elements: <table>, <tr>, <td>, and <th>",
    "Learn to create professional table headers that make data easy to understand",
    "Understand how to structure complex tables with <thead>, <tbody>, and <tfoot>",
    "Discover advanced table features like colspan and rowspan for complex layouts",
    "Practice building real-world tables for business and personal use"
  ],
  detailedExplanation: `
## Welcome to Day 7 - Let's Master HTML Tables!

Great job making it this far! You've learned so much already - HTML structure, text formatting, lists, links, and images. Today we're tackling something that might seem intimidating at first but is actually incredibly useful: HTML tables.

### Why Tables Are More Important Than You Think

Let me ask you something - when you look at a spreadsheet, sports scores, or a restaurant menu with prices, what makes that information easy to scan and understand? It's the organized, grid-like structure where related information is lined up in rows and columns.

That's exactly what HTML tables do for your websites. They take complex data and make it digestible. Think about:
- Product comparison charts
- Event schedules  
- Grade reports
- Price lists
- Statistics and reports

All of these become much clearer when presented in a well-structured table.

### The Building Blocks of Every Table

Before we dive into examples, let me explain the four essential elements that every table uses:

**\`<table>\`** - This is like the frame that holds everything together. Every table starts and ends with this tag.

**\`<tr>\`** - Think "table row." This creates each horizontal row in your table.

**\`<td>\`** - Think "table data." This creates individual cells within each row where your actual content goes.

**\`<th>\`** - Think "table header." This creates header cells that typically appear bold and centered, perfect for column or row labels.

### Let's Build Your First Simple Table

Here's a basic table showing a weekly schedule:

\`\`\`html
<table>
  <tr>
    <th>Day</th>
    <th>Activity</th>
    <th>Time</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>Team Meeting</td>
    <td>9:00 AM</td>
  </tr>
  <tr>
    <td>Tuesday</td>
    <td>Client Call</td>
    <td>2:00 PM</td>
  </tr>
  <tr>
    <td>Wednesday</td>
    <td>Project Review</td>
    <td>10:00 AM</td>
  </tr>
</table>
\`\`\`

See how clean and organized that looks? The first row uses \`<th>\` tags to create headers, and each subsequent row uses \`<td>\` tags for the actual data.

### Making Your Tables More Professional

Now, let me show you how to take your tables to the next level with proper structure. Professional tables use three main sections:

**\`<thead>\`** - Contains your table headers
**\`<tbody>\`** - Contains your main data
**\`<tfoot>\`** - Contains summary information (like totals)

Here's a more professional version:

\`\`\`html
<table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Stock</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>$999</td>
      <td>15</td>
    </tr>
    <tr>
      <td>Mouse</td>
      <td>$25</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Keyboard</td>
      <td>$75</td>
      <td>30</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td><strong>Total Items</strong></td>
      <td>$1,099</td>
      <td>95</td>
    </tr>
  </tfoot>
</table>
\`\`\`

This structure makes your tables more accessible to screen readers and easier to style with CSS later.

### Advanced Table Features - Spanning Cells

Sometimes you need cells that span multiple columns or rows. That's where \`colspan\` and \`rowspan\` come in handy:

**Colspan** - Makes a cell span across multiple columns:
\`\`\`html
<table>
  <tr>
    <th colspan="3">Sales Report - Q1 2024</th>
  </tr>
  <tr>
    <th>Month</th>
    <th>Sales</th>
    <th>Growth</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$50,000</td>
    <td>5%</td>
  </tr>
</table>
\`\`\`

**Rowspan** - Makes a cell span across multiple rows:
\`\`\`html
<table>
  <tr>
    <th rowspan="2">Department</th>
    <th>Morning</th>
    <th>Afternoon</th>
  </tr>
  <tr>
    <th>Staff</th>
    <th>Staff</th>
  </tr>
  <tr>
    <td>Sales</td>
    <td>5</td>
    <td>3</td>
  </tr>
</table>
\`\`\`

### Real-World Example: Complete Product Comparison

Let me show you how all these elements work together in a practical example:

\`\`\`html
<table>
  <caption>Smartphone Comparison - Best Phones of 2024</caption>
  <thead>
    <tr>
      <th>Feature</th>
      <th>iPhone 15</th>
      <th>Samsung Galaxy S24</th>
      <th>Google Pixel 8</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Price</strong></td>
      <td>$799</td>
      <td>$849</td>
      <td>$699</td>
    </tr>
    <tr>
      <td><strong>Screen Size</strong></td>
      <td>6.1 inches</td>
      <td>6.2 inches</td>
      <td>6.2 inches</td>
    </tr>
    <tr>
      <td><strong>Camera</strong></td>
      <td>48MP</td>
      <td>50MP</td>
      <td>50MP</td>
    </tr>
    <tr>
      <td><strong>Battery Life</strong></td>
      <td>20 hours</td>
      <td>22 hours</td>
      <td>24 hours</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4"><em>Prices and specifications subject to change</em></td>
    </tr>
  </tfoot>
</table>
\`\`\`

Notice how I used a \`<caption>\` element to give the table a title, and \`colspan="4"\` in the footer to span across all columns.

### Table Best Practices You Should Always Follow

**Always include headers** - Every table should have \`<th>\` elements so users know what each column represents.

**Use proper structure** - Include \`<thead>\`, \`<tbody>\`, and \`<tfoot>\` when appropriate.

**Add captions for complex tables** - Use \`<caption>\` to explain what the table shows.

**Keep it simple** - Don't use tables for layout; they're for data only.

**Make it accessible** - Use scope attributes when needed for complex headers.

### When NOT to Use Tables

This is important - tables are for displaying data, not for website layout. Don't use tables to:
- Create multi-column layouts
- Position elements on the page
- Create navigation menus
- Build photo galleries

Use CSS for layout instead!

### Common Table Attributes You'll Use

**\`scope\`** - Helps screen readers understand header relationships:
\`\`\`html
<th scope="col">Month</th>
<th scope="row">Sales Team</th>
\`\`\`

**\`colspan\`** - Spans columns:
\`\`\`html
<td colspan="2">Total</td>
\`\`\`

**\`rowspan\`** - Spans rows:
\`\`\`html
<td rowspan="3">Department</td>
\`\`\`

Tables might seem complex at first, but once you understand the basic structure, they become incredibly powerful tools for organizing information on your websites!
`,
  keyTerms: [
    { term: "Table", definition: "HTML element for displaying data in rows and columns, perfect for structured information like schedules, prices, or statistics." },
    { term: "Table Row (tr)", definition: "Creates a horizontal row in a table. Every piece of data sits inside a row." },
    { term: "Table Header (th)", definition: "Creates header cells that label columns or rows. Usually displayed bold and centered by browsers." },
    { term: "Table Data (td)", definition: "Creates regular data cells that contain the actual information in your table." },
    { term: "Thead", definition: "Groups header content together, making tables more organized and accessible to screen readers." },
    { term: "Tbody", definition: "Groups the main body of table data, separating it from headers and footers." },
    { term: "Tfoot", definition: "Groups footer content like totals or summary information at the bottom of tables." },
    { term: "Colspan", definition: "Attribute that makes a cell span across multiple columns, useful for headers or totals." },
    { term: "Rowspan", definition: "Attribute that makes a cell span across multiple rows, useful for categorizing data." },
    { term: "Caption", definition: "Provides a title or description for the entire table, helpful for accessibility and clarity." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create Your First Simple Data Table",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'my-schedule.html' with complete document structure.",
        "Set the title to 'My Weekly Schedule'.",
        "In the body, insert 'My Weekly Schedule' in <h1> tags.",
        "Create a table using <table> tags.",
        "Add the first row with headers: Insert <tr> with three <th> elements containing 'Day', 'Activity', and 'Time'.",
        "Add Monday's data: Insert <tr> with three <td> elements containing 'Monday', 'Web Development Study', and '9:00 AM'.",
        "Add Tuesday's data: Insert <tr> with <td> elements for 'Tuesday', 'Exercise', and '6:00 PM'.",
        "Add Wednesday's data: Insert <tr> with <td> elements for 'Wednesday', 'Team Meeting', and '2:00 PM'.",
        "Add Thursday's data: Insert <tr> with <td> elements for 'Thursday', 'Project Work', and '10:00 AM'.",
        "Add Friday's data: Insert <tr> with <td> elements for 'Friday', 'Code Review', and '3:00 PM'.",
        "Save and open the file to see your organized schedule table."
      ]
    },
    {
      id: 2,
      title: "Build a Product Comparison Table",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'product-comparison.html' with full HTML structure.",
        "Set the title to 'Laptop Comparison Guide'.",
        "Create the main heading: Insert 'Laptop Comparison Guide' in <h1> tags.",
        "Start building the table with proper structure: Insert <table> tags.",
        "Add table headers using <thead>: Insert <tr> with <th> elements for 'Feature', 'Budget Laptop', 'Gaming Laptop', 'Business Laptop'.",
        "Add the table body using <tbody> tags.",
        "Add price row: Insert <tr> with <td> elements for 'Price', '$499', '$1,299', '$899'.",
        "Add processor row: Insert <tr> with <td> elements for 'Processor', 'Intel i3', 'Intel i7', 'Intel i5'.",
        "Add RAM row: Insert <tr> with <td> elements for 'RAM', '8GB', '16GB', '16GB'.",
        "Add storage row: Insert <tr> with <td> elements for 'Storage', '256GB SSD', '1TB SSD', '512GB SSD'.",
        "Add screen row: Insert <tr> with <td> elements for 'Screen Size', '14 inches', '15.6 inches', '14 inches'.",
        "Add weight row: Insert <tr> with <td> elements for 'Weight', '3.2 lbs', '4.5 lbs', '2.9 lbs'.",
        "Close the tbody and table tags.",
        "Add a paragraph below: Insert 'Choose the laptop that best fits your needs and budget.' in <p> tags.",
        "Save and review your comparison table to ensure all data is properly aligned."
      ]
    },
    {
      id: 3,
      title: "Create a Professional Sales Report Table",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'sales-report.html' with complete HTML structure.",
        "Set the title to 'Q1 2024 Sales Report'.",
        "Create the header: Insert 'Quarterly Sales Report - Q1 2024' in <h1> tags.",
        "Add a table with caption: Insert 'Sales Performance by Region and Month' in <caption> tags inside <table>.",
        "Create the table header using <thead>: Insert <tr> with <th> elements for 'Region', 'January', 'February', 'March', 'Total'.",
        "Start the table body with <tbody>.",
        "Add North region data: Insert <tr> with <td> elements for 'North', '$45,000', '$52,000', '$48,000', '$145,000'.",
        "Add East region data: Insert <tr> with <td> elements for 'East', '$38,000', '$41,000', '$44,000', '$123,000'.",
        "Add South region data: Insert <tr> with <td> elements for 'South', '$55,000', '$58,000', '$62,000', '$175,000'.",
        "Add West region data: Insert <tr> with <td> elements for 'West', '$42,000', '$39,000', '$46,000', '$127,000'.",
        "Close tbody and add <tfoot>.",
        "Add totals row in tfoot: Insert <tr> with <td> elements for 'Totals', '$180,000', '$190,000', '$200,000', '$570,000'.",
        "Close tfoot and table tags.",
        "Add analysis paragraph: Insert 'The South region showed the strongest performance this quarter, while all regions demonstrated steady growth.' in <p> tags.",
        "Save and review your professional sales report table."
      ]
    },
    {
      id: 4,
      title: "Build a Complete Restaurant Menu Table",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'restaurant-menu.html' with full HTML structure.",
        "Set the title to 'Bella Vista Restaurant - Menu'.",
        "Create the restaurant header: Insert 'Bella Vista Restaurant' in <h1> tags.",
        "Add subtitle: Insert 'Authentic Italian Cuisine' in <h2> tags.",
        "Create the appetizers section: Insert 'Appetizers' in <h3> tags.",
        "Build appetizers table: Insert <table> with <thead> containing <tr> with <th> elements for 'Dish', 'Description', 'Price'.",
        "Add appetizer items in <tbody>:",
        "Insert <tr> with <td> elements for 'Bruschetta', 'Toasted bread with tomatoes and basil', '$8.99'.",
        "Insert <tr> with <td> elements for 'Calamari', 'Fried squid rings with marinara sauce', '$12.99'.",
        "Insert <tr> with <td> elements for 'Antipasto Platter', 'Selection of cured meats and cheeses', '$16.99'.",
        "Create main courses section: Insert 'Main Courses' in <h3> tags.",
        "Build main courses table with same header structure.",
        "Add main course items:",
        "Insert <tr> with <td> elements for 'Spaghetti Carbonara', 'Classic pasta with eggs, cheese, and pancetta', '$18.99'.",
        "Insert <tr> with <td> elements for 'Chicken Parmigiana', 'Breaded chicken with tomato sauce and mozzarella', '$22.99'.",
        "Insert <tr> with <td> elements for 'Osso Buco', 'Braised veal shanks with risotto', '$28.99'.",
        "Insert <tr> with <td> elements for 'Margherita Pizza', 'Fresh mozzarella, tomatoes, and basil', '$16.99'.",
        "Create desserts section: Insert 'Desserts' in <h3> tags.",
        "Build desserts table with same structure.",
        "Add dessert items:",
        "Insert <tr> with <td> elements for 'Tiramisu', 'Classic Italian coffee-flavored dessert', '$7.99'.",
        "Insert <tr> with <td> elements for 'Gelato', 'Homemade Italian ice cream (3 scoops)', '$6.99'.",
        "Insert <tr> with <td> elements for 'Cannoli', 'Sicilian pastry with sweet ricotta filling', '$5.99'.",
        "Add footer information: Insert 'All prices include tax. Gratuity not included.' in <p> tags wrapped with <small>.",
        "Save and review your complete restaurant menu with properly organized sections."
      ]
    },
    {
      id: 5,
      title: "Create an Advanced Course Schedule with Spanning Cells",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'course-schedule.html' with complete HTML structure.",
        "Set the title to 'University Course Schedule - Fall 2024'.",
        "Create the main heading: Insert 'Fall 2024 Course Schedule' in <h1> tags.",
        "Add student info: Insert 'Student: John Smith | Semester: Fall 2024' in <p> tags.",
        "Create a complex table with <table> and <caption>: Insert 'Weekly Class Schedule' in <caption>.",
        "Build the header row using <thead>: Insert <tr> with <th> elements for 'Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'.",
        "Start the table body with <tbody>.",
        "Add 9:00 AM row: Insert <tr> with <td> elements for '9:00 AM', 'Math 101', 'History 201', 'Math 101', 'History 201', 'Free Period'.",
        "Add 10:00 AM row: Insert <tr> with <td> elements for '10:00 AM', 'English 101', 'Lab Time', 'English 101', 'Lab Time', 'Study Hall'.",
        "Add 11:00 AM row with spanning: Insert <tr> with <td> for '11:00 AM', <td> with colspan='5' for 'LUNCH BREAK - All Students'.",
        "Add 12:00 PM row: Insert <tr> with <td> elements for '12:00 PM', 'Science 101', 'Free Period', 'Science 101', 'Art Class', 'Science Lab'.",
        "Add 1:00 PM row: Insert <tr> with <td> elements for '1:00 PM', 'Computer Science', 'Study Period', 'Computer Science', 'Art Class', 'Free Period'.",
        "Add 2:00 PM row with complex spanning: Insert <tr> with <td> for '2:00 PM', <td> with colspan='2' for 'Team Sports', <td> for 'Library Time', <td> with colspan='2' for 'Club Activities'.",
        "Close tbody and table.",
        "Add course summary section: Insert 'Course Summary' in <h2> tags.",
        "Create summary table: Insert <table> with headers 'Course', 'Credits', 'Professor', 'Room'.",
        "Add course details:",
        "Insert <tr> with <td> elements for 'Math 101', '3', 'Dr. Johnson', 'Room 205'.",
        "Insert <tr> with <td> elements for 'English 101', '3', 'Prof. Williams', 'Room 118'.",
        "Insert <tr> with <td> elements for 'Science 101', '4', 'Dr. Brown', 'Lab 301'.",
        "Insert <tr> with <td> elements for 'History 201', '3', 'Prof. Davis', 'Room 142'.",
        "Insert <tr> with <td> elements for 'Computer Science', '3', 'Dr. Wilson', 'Computer Lab'.",
        "Add total credits row with spanning: Insert <tr> with <td> for 'Total Credits', <td> with colspan='3' for '16 Credits'.",
        "Add notes section: Insert 'Important Notes' in <h3> tags.",
        "Add note list: Create <ul> with <li> items for schedule notes like 'Lab sessions require safety equipment', 'Study hall is optional but recommended', 'Club activities vary by season'.",
        "Save and thoroughly test your advanced schedule table with proper cell spanning."
      ]
    }
  ]
};
