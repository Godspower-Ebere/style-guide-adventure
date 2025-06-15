
import { DayLesson } from "../types";

export const day24: DayLesson = {
  day: 24,
  title: "HTML Accessibility",
  category: "HTML5 Features",
  description: "Learn to create accessible web content using HTML accessibility features, ARIA attributes, and best practices for inclusive design.",
  learningObjectives: [
    "Understand web accessibility principles and importance.",
    "Learn to use semantic HTML for better accessibility.",
    "Master ARIA attributes and accessibility features.",
    "Build inclusive web applications for all users."
  ],
  detailedExplanation: `
Web accessibility ensures that websites and applications are usable by people with disabilities, including visual, auditory, motor, and cognitive impairments.

## Semantic HTML for Accessibility
Using proper HTML elements provides built-in accessibility:

\`\`\`html
<!-- Good: Semantic structure -->
<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Page Title</h1>
    <section>
      <h2>Section Title</h2>
      <p>Content paragraph</p>
    </section>
  </article>
</main>

<footer>
  <p>&copy; 2024 Company Name</p>
</footer>
\`\`\`

## Alt Text for Images
Always provide meaningful alt text for images:

\`\`\`html
<!-- Descriptive alt text -->
<img src="chart.png" alt="Sales increased 40% from Q3 to Q4 2024">

<!-- Decorative images -->
<img src="decoration.png" alt="" role="presentation">

<!-- Complex images with longer descriptions -->
<img src="complex-chart.png" alt="Quarterly sales data" 
     aria-describedby="chart-description">
<div id="chart-description">
  Detailed description of the chart data showing sales trends over four quarters.
</div>
\`\`\`

## Form Accessibility
Properly label form elements and provide instructions:

\`\`\`html
<form>
  <!-- Basic label association -->
  <label for="name">Full Name:</label>
  <input type="text" id="name" name="name" required>
  
  <!-- Required field indication -->
  <label for="email">Email Address <span aria-label="required">*</span>:</label>
  <input type="email" id="email" name="email" required 
         aria-describedby="email-help">
  <div id="email-help">We'll never share your email address.</div>
  
  <!-- Fieldset for grouped elements -->
  <fieldset>
    <legend>Preferred Contact Method</legend>
    <input type="radio" id="contact-email" name="contact" value="email">
    <label for="contact-email">Email</label>
    
    <input type="radio" id="contact-phone" name="contact" value="phone">
    <label for="contact-phone">Phone</label>
  </fieldset>
</form>
\`\`\`

## ARIA Attributes
ARIA (Accessible Rich Internet Applications) provides additional semantic information:

### Common ARIA Attributes
\`\`\`html
<!-- aria-label: Provides accessible name -->
<button aria-label="Close dialog">×</button>

<!-- aria-describedby: References descriptive text -->
<input type="password" aria-describedby="pwd-help">
<div id="pwd-help">Password must be at least 8 characters</div>

<!-- aria-expanded: Indicates if collapsible content is expanded -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
<ul id="menu" hidden>
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
</ul>

<!-- aria-hidden: Hides decorative elements from screen readers -->
<span aria-hidden="true">👍</span> Great job!
\`\`\`

## Focus Management
Ensure keyboard navigation works properly:

\`\`\`html
<!-- Make custom interactive elements focusable -->
<div tabindex="0" role="button" onclick="handleClick()">
  Custom Button
</div>

<!-- Skip links for keyboard users -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<main id="main-content">
  <!-- Main content here -->
</main>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: blue;
  color: white;
  padding: 8px;
  text-decoration: none;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 6px;
}
</style>
\`\`\`

## Complete Accessible Example
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Accessible Web Page Example</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <!-- Skip link for keyboard users -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <header>
    <h1>Accessible Website</h1>
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="#home" aria-current="page">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main id="main-content">
    <article>
      <h2>Welcome to Our Accessible Site</h2>
      
      <img src="welcome.jpg" alt="Team members collaborating in a bright office space">
      
      <p>This website demonstrates accessibility best practices.</p>
      
      <section>
        <h3>Contact Form</h3>
        <form>
          <div>
            <label for="user-name">Name <span aria-label="required">*</span>:</label>
            <input type="text" id="user-name" name="name" required 
                   aria-describedby="name-help">
            <div id="name-help">Please enter your full name</div>
          </div>
          
          <div>
            <label for="user-email">Email <span aria-label="required">*</span>:</label>
            <input type="email" id="user-email" name="email" required>
          </div>
          
          <fieldset>
            <legend>How did you hear about us?</legend>
            <input type="radio" id="source-web" name="source" value="web">
            <label for="source-web">Web search</label>
            
            <input type="radio" id="source-friend" name="source" value="friend">
            <label for="source-friend">Friend referral</label>
            
            <input type="radio" id="source-other" name="source" value="other">
            <label for="source-other">Other</label>
          </fieldset>
          
          <button type="submit">Send Message</button>
        </form>
      </section>
      
      <!-- Interactive collapsible section -->
      <section>
        <h3>
          <button aria-expanded="false" aria-controls="faq-content" 
                  onclick="toggleFAQ()">
            Frequently Asked Questions
          </button>
        </h3>
        <div id="faq-content" hidden>
          <h4>What makes a website accessible?</h4>
          <p>Accessible websites can be used by people with various disabilities...</p>
        </div>
      </section>
    </article>
  </main>
  
  <footer>
    <p>&copy; 2024 Accessible Company. All rights reserved.</p>
  </footer>
  
  <script>
    function toggleFAQ() {
      const button = event.target;
      const content = document.getElementById('faq-content');
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      
      button.setAttribute('aria-expanded', !isExpanded);
      content.hidden = isExpanded;
    }
  </script>
</body>
</html>
\`\`\`
    `,
  keyTerms: [
    { term: "Web Accessibility", definition: "Practice of making websites usable by people with disabilities and assistive technologies." },
    { term: "ARIA", definition: "Accessible Rich Internet Applications - set of attributes that define ways to make web content more accessible." },
    { term: "Alt Text", definition: "Alternative text for images that describes the image content for screen readers." },
    { term: "Semantic HTML", definition: "Using HTML elements according to their intended meaning to provide better accessibility." },
    { term: "Screen Reader", definition: "Assistive technology that reads web content aloud for visually impaired users." },
    { term: "Focus Management", definition: "Ensuring keyboard navigation works properly throughout a web application." }
  ],
  exercises: [
    {
      id: 1,
      title: "Accessible HTML Structure",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'accessible-structure.html' with complete HTML5 structure.",
        "Add proper lang attribute to the html element (lang='en').",
        "Create a semantic structure using header, nav, main, and footer elements.",
        "In the header, add an h1 title and a navigation menu using nav and ul elements.",
        "In the main section, add an article with h2 heading and paragraph content.",
        "Include an image with meaningful alt text describing what the image shows.",
        "Add a footer with copyright information.",
        "Ensure all headings follow proper hierarchy (h1, then h2, etc.).",
        "Test your page structure by navigating with the Tab key to verify proper focus order."
      ]
    },
    {
      id: 2,
      title: "Accessible Forms",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'accessible-form.html' with proper HTML5 document structure.",
        "Build a contact form with fields for name, email, phone, and message.",
        "Use proper label elements associated with each input field using the 'for' attribute.",
        "Add required field indicators using asterisks (*) with aria-label='required'.",
        "Include helpful text for each field using aria-describedby to reference description elements.",
        "Create a fieldset with legend for grouped radio buttons asking about preferred contact method.",
        "Add proper input types (email for email field, tel for phone field).",
        "Include form validation attributes like 'required' where appropriate.",
        "Add a submit button with clear, descriptive text.",
        "Test the form by navigating with Tab key and ensure all labels are read correctly by screen readers (you can test with browser developer tools)."
      ]
    },
    {
      id: 3,
      title: "ARIA Attributes and Interactive Elements",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'aria-interactive.html' with complete HTML5 structure and appropriate title.",
        "Build a page with multiple interactive elements that require ARIA attributes.",
        "Create a collapsible FAQ section using button elements with aria-expanded and aria-controls attributes.",
        "Add a custom dropdown menu using div elements with appropriate ARIA roles and states.",
        "Include a modal dialog trigger button with proper ARIA labeling.",
        "Create a progress indicator for a simulated file upload using aria-valuenow, aria-valuemin, and aria-valuemax.",
        "Add decorative icons with aria-hidden='true' to hide them from screen readers.",
        "Implement JavaScript to properly toggle aria-expanded states when buttons are clicked.",
        "Ensure all interactive elements are keyboard accessible using proper tabindex values.",
        "Add focus indicators with CSS to show which element has keyboard focus.",
        "Test all interactive elements work correctly with keyboard navigation.",
        "Use browser developer tools to verify ARIA attributes are properly implemented.",
        "Ensure that all dynamic content changes are announced to screen readers."
      ]
    },
    {
      id: 4,
      title: "Accessible Image Gallery",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'accessible-gallery.html' for an image gallery with full accessibility features.",
        "Design a gallery with 6 images, each with descriptive alt text that explains what's shown in the image.",
        "Add captions under each image using figcaption elements within figure containers.",
        "Implement keyboard navigation allowing users to browse images with arrow keys.",
        "Create a lightbox modal for viewing larger versions of images, ensuring it's keyboard accessible.",
        "Add proper focus management so focus returns to the gallery when the modal is closed.",
        "Include skip links to help keyboard users navigate efficiently.",
        "Add proper heading structure with h1 for page title and h2 for gallery sections.",
        "Implement proper color contrast for all text elements.",
        "Add loading indicators for images with appropriate ARIA labels.",
        "Test the gallery thoroughly with keyboard navigation and ensure all functionality is accessible.",
        "Verify that screen readers can properly announce image information and navigation instructions."
      ]
    },
    {
      id: 5,
      title: "Complete Accessible Web Application",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'accessible-app.html' as a comprehensive demonstration of web accessibility best practices.",
        "Build a multi-section application including: navigation menu, data table, form, and interactive dashboard.",
        "Implement a responsive navigation menu with proper ARIA attributes and keyboard support.",
        "Create an accessible data table with proper headers, captions, and scope attributes for complex data relationships.",
        "Build a comprehensive form with various input types, proper labeling, error handling, and validation messages.",
        "Add an interactive dashboard with live regions (aria-live) for dynamic content updates.",
        "Implement proper focus management throughout the application, including focus trapping in modals.",
        "Add comprehensive keyboard shortcuts and document them in a help section.",
        "Ensure all interactive elements have visible focus indicators and are keyboard accessible.",
        "Include proper heading hierarchy, landmarks, and semantic structure throughout.",
        "Add skip links for each major section of the application.",
        "Implement proper color contrast and ensure the app works without color as the only indicator.",
        "Add comprehensive ARIA labels, descriptions, and states for all interactive elements.",
        "Test the entire application using only keyboard navigation and verify all functionality works.",
        "Document your accessibility features in a separate section explaining what makes the app accessible."
      ]
    }
  ]
};
