
import { DayLesson } from "../types";

export const day17: DayLesson = {
  day: 17,
  title: "HTML5 New Elements",
  category: "HTML5 Features",
  description: "Explore HTML5's new semantic elements and features that enhance web development with better structure and functionality.",
  learningObjectives: [
    "Discover HTML5's new semantic elements and their purposes.",
    "Learn to use figure, figcaption, mark, and time elements.",
    "Understand details, summary, and progress elements.",
    "Build modern web pages using HTML5's enhanced semantic vocabulary."
  ],
  detailedExplanation: `
HTML5 introduced many new elements that provide better semantic meaning and functionality to web pages.

## Figure and Figcaption
The figure element represents self-contained content, often with a caption:

\`\`\`html
<figure>
  <img src="chart.png" alt="Sales data visualization">
  <figcaption>
    Sales increased by 40% in Q4 2024 compared to Q3 2024
  </figcaption>
</figure>
\`\`\`

### Uses for Figure
- Images with captions
- Code snippets
- Diagrams and charts
- Quotes with attribution

\`\`\`html
<figure>
  <blockquote>
    <p>"The web is more a social creation than a technical one."</p>
  </blockquote>
  <figcaption>Tim Berners-Lee, Creator of the World Wide Web</figcaption>
</figure>
\`\`\`

## Mark Element
The mark element highlights text for reference purposes:

\`\`\`html
<p>The <mark>HTML5 specification</mark> was finalized in 2014.</p>
<p>Search results often show <mark>highlighted keywords</mark> in snippets.</p>
\`\`\`

## Time Element
The time element represents dates, times, or durations:

\`\`\`html
<p>The event is scheduled for <time datetime="2024-12-25">Christmas Day</time>.</p>
<p>The meeting lasted <time datetime="PT2H30M">2 hours and 30 minutes</time>.</p>
<p>Published on <time datetime="2024-03-15T14:30:00">March 15, 2024 at 2:30 PM</time>.</p>
\`\`\`

## Details and Summary
Create collapsible content sections:

\`\`\`html
<details>
  <summary>Click to expand FAQ answer</summary>
  <p>This is the detailed answer that appears when the user clicks the summary.</p>
</details>

<details open>
  <summary>Important Information</summary>
  <p>This section is expanded by default due to the 'open' attribute.</p>
</details>
\`\`\`

## Progress Element
Show completion progress for tasks:

\`\`\`html
<label for="file-progress">File upload progress:</label>
<progress id="file-progress" value="70"  max="100">70%</progress>

<label for="skill-level">HTML Skill Level:</label>
<progress id="skill-level" value="8" max="10">8 out of 10</progress>
\`\`\`

## Meter Element
Represent scalar measurements within a range:

\`\`\`html
<label for="disk-usage">Disk usage:</label>
<meter id="disk-usage" value="0.7">70%</meter>

<label for="temperature">Temperature:</label>
<meter id="temperature" value="28" min="0" max="40" high="35" low="10">28°C</meter>
\`\`\`

## Complete HTML5 Example
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>HTML5 New Elements Demo</title>
</head>
<body>
  <header>
    <h1>Modern Web Development</h1>
    <nav>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#progress">Progress</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>Learning HTML5</h2>
        <p>Published on <time datetime="2024-03-15">March 15, 2024</time></p>
      </header>

      <p>HTML5 introduced <mark>many new semantic elements</mark> that improve web accessibility.</p>

      <figure>
        <img src="html5-logo.png" alt="HTML5 Logo">
        <figcaption>The HTML5 logo represents modern web standards</figcaption>
      </figure>

      <section>
        <h3>Learning Progress</h3>
        <p>HTML Basics: <progress value="90" max="100">90%</progress></p>
        <p>CSS Skills: <progress value="60" max="100">60%</progress></p>
      </section>

      <details>
        <summary>Additional Resources</summary>
        <ul>
          <li><a href="#">MDN HTML5 Guide</a></li>
          <li><a href="#">W3C HTML5 Specification</a></li>
        </ul>
      </details>
    </article>
  </main>

  <footer>
    <p>&copy; 2024 Web Learning Platform</p>
  </footer>
</body>
</html>
\`\`\`
    `,
  keyTerms: [
    { term: "Figure Element", definition: "HTML5 element for self-contained content like images, diagrams, or code snippets." },
    { term: "Figcaption Element", definition: "HTML5 element that provides a caption for a figure element." },
    { term: "Mark Element", definition: "HTML5 element for highlighting text for reference or emphasis." },
    { term: "Time Element", definition: "HTML5 element for representing dates, times, or durations in machine-readable format." },
    { term: "Details Element", definition: "HTML5 element that creates a collapsible content section with a summary." },
    { term: "Progress Element", definition: "HTML5 element for showing the completion progress of a task." }
  ],
  exercises: [
    {
      id: 1,
      title: "HTML5 Elements Basics",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'html5-basics.html' with complete HTML5 structure.",
        "Add a figure with an image placeholder and descriptive caption.",
        "Include a time element with today's date in proper datetime format.",
        "Use the mark element to highlight important text in a paragraph.",
        "Test that all elements display correctly in your browser."
      ]
    },
    {
      id: 2,
      title: "Interactive Content with Details",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'interactive-content.html' with collapsible sections.",
        "Build an FAQ page using details and summary elements.",
        "Include at least 5 questions with expandable answers.",
        "Add progress bars showing your skill levels in different areas.",
        "Make one details section open by default."
      ]
    },
    {
      id: 3,
      title: "Progress and Meter Elements",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'progress-demo.html' showcasing progress tracking.",
        "Build a project dashboard with multiple progress indicators.",
        "Use meter elements to show resource usage (disk, memory, etc.).",
        "Include proper labels and accessibility attributes.",
        "Style the progress and meter elements with CSS for better appearance."
      ]
    },
    {
      id: 4,
      title: "Blog Post with HTML5 Elements",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'html5-blog.html' for a modern blog post.",
        "Include figures with captions for images or code examples.",
        "Use time elements for publication dates and reading time.",
        "Add collapsible sections for additional information or resources.",
        "Highlight key terms throughout the content using mark elements."
      ]
    },
    {
      id: 5,
      title: "Complete HTML5 Showcase",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'html5-showcase.html' demonstrating all learned HTML5 elements.",
        "Build a comprehensive page that uses every new HTML5 element covered.",
        "Create realistic, meaningful content for each element.",
        "Include interactive elements like collapsible help sections.",
        "Design the page to be both functional and visually appealing with CSS."
      ]
    }
  ]
};
