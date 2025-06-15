
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
<progress id="file-progress" value="70" max="100">70%</progress>

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
        "Create a new HTML file called 'html5-basics.html' with complete HTML5 structure including DOCTYPE, html, head, and body tags.",
        "Add a title element with the text 'HTML5 New Elements Practice'.",
        "Inside the body, create a figure element containing an img tag with src='placeholder.jpg' and alt='Sample Image'.",
        "Add a figcaption element below the img tag with descriptive text about the image.",
        "Create a paragraph with some text and use the mark element to highlight one important phrase.",
        "Add a time element showing today's date with proper datetime attribute format.",
        "Save the file and open it in your browser to see how the new HTML5 elements display."
      ]
    },
    {
      id: 2,
      title: "Interactive Content with Details",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a new HTML file called 'interactive-content.html' with proper HTML5 structure.",
        "Add a main heading 'Frequently Asked Questions' using an h1 element.",
        "Create your first details element with a summary that says 'What is HTML5?'.",
        "Inside the details element, add a paragraph explaining what HTML5 is in your own words.",
        "Create four more details/summary pairs with different questions about web development.",
        "Make the third details element open by default using the 'open' attribute.",
        "Add progress elements showing your learning progress for different web technologies (HTML, CSS, JavaScript).",
        "Use proper value and max attributes for each progress element (e.g., value='70' max='100').",
        "Test the file in your browser and click on the summary elements to see them expand and collapse."
      ]
    },
    {
      id: 3,
      title: "Progress and Meter Elements",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'progress-demo.html' with complete HTML5 document structure.",
        "Add a header section with h1 title 'Project Dashboard'.",
        "Create a section with h2 'Project Progress' and add three different progress bars:",
        "- Website Design: 85% complete (use progress element with value='85' max='100')",
        "- Content Writing: 60% complete", 
        "- Testing Phase: 30% complete",
        "Add proper label elements for each progress bar using the 'for' attribute.",
        "Create another section with h2 'System Status' and add three meter elements:",
        "- Disk Usage: 75% (use meter with value='0.75' and appropriate attributes)",
        "- Memory Usage: 60%",
        "- CPU Temperature: 65°C (use min='0' max='100' attributes)",
        "Add labels for each meter element as well.",
        "Include a details section at the bottom with summary 'Technical Details' containing additional information about the project.",
        "Validate your HTML structure and test all interactive elements work correctly."
      ]
    },
    {
      id: 4,
      title: "Blog Post with HTML5 Elements",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'html5-blog.html' representing a modern blog post using HTML5 semantic elements.",
        "Start with proper HTML5 document structure and add a descriptive title.",
        "Create a header section containing the blog title 'My Web Development Journey'.",
        "Add a main element containing an article about learning web development.",
        "Within the article, include a header with the post title 'Day 17: Mastering HTML5 Elements' and publication date using time element with datetime attribute.",
        "Write three paragraphs about your learning experience, using mark elements to highlight key concepts you've learned.",
        "Add a figure element containing a placeholder image (src='learning.jpg') with a meaningful figcaption describing your progress.",
        "Include a section showing your skill levels using progress elements for HTML, CSS, and JavaScript.",
        "Add a details/summary section titled 'Resources Used' containing a list of helpful websites or tutorials.",
        "End with another time element showing when you completed this exercise.",
        "Ensure all elements have proper semantic meaning and test the page thoroughly."
      ]
    },
    {
      id: 5,
      title: "Complete HTML5 Showcase",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'html5-showcase.html' as a comprehensive demonstration of all HTML5 elements learned today.",
        "Build a complete webpage with header, nav, main, and footer sections using semantic HTML5 structure.",
        "In the header, include a site title and navigation menu with links to different sections of the page.",
        "Create a main section with multiple articles, each showcasing different HTML5 elements:",
        "- Article 1: 'Images and Media' - Use figure/figcaption for multiple images with descriptive captions",
        "- Article 2: 'Important Information' - Use mark elements throughout text content",
        "- Article 3: 'Timeline' - Use multiple time elements showing different dates and times with proper datetime formats",
        "- Article 4: 'Learning Progress' - Create a dashboard with progress bars for various skills",
        "- Article 5: 'System Monitoring' - Use meter elements to show different system metrics",
        "Add a comprehensive FAQ section using multiple details/summary elements covering HTML5 topics.",
        "Include at least one figure with a blockquote and citation using figcaption.",
        "Make sure every HTML5 element is used meaningfully and contributes to the page's content.",
        "Test all interactive elements (details/summary) work correctly.",
        "Validate your HTML and ensure the page tells a cohesive story about HTML5 elements."
      ]
    }
  ]
};
