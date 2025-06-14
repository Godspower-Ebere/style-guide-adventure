
import { DayLesson } from "../types";

export const day10: DayLesson = {
  day: 10,
  title: "HTML Forms - Buttons and Labels",
  category: "HTML Forms",
  description: "Learn to enhance forms with proper labels, various button types, and improve form accessibility and usability.",
  learningObjectives: [
    "Master the use of label elements for form accessibility.",
    "Understand different button types and their purposes.",
    "Learn to associate labels with form controls properly.",
    "Create user-friendly forms with clear navigation and actions."
  ],
  detailedExplanation: `
Today we'll focus on making forms more accessible and user-friendly with proper labels and buttons.

## The Importance of Labels
Labels are crucial for accessibility and usability. They tell users what each form field is for.

### Basic Label Usage
\`\`\`html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
\`\`\`

### Alternative: Wrapping Labels
\`\`\`html
<label>
  Username:
  <input type="text" name="username">
</label>
\`\`\`

## Button Types
HTML provides different button types for various purposes:

### Submit Button
\`\`\`html
<button type="submit">Submit Form</button>
<!-- or -->
<input type="submit" value="Submit Form">
\`\`\`

### Reset Button
\`\`\`html
<button type="reset">Clear Form</button>
\`\`\`

### Regular Button
\`\`\`html
<button type="button">Click Me</button>
\`\`\`

## Complete Form Example
\`\`\`html
<form>
  <label for="name">Full Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email Address:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message"></textarea>
  
  <button type="submit">Send Message</button>
  <button type="reset">Clear Form</button>
</form>
\`\`\`

## Accessibility Benefits
- Screen readers can announce what each field is for
- Clicking labels focuses the associated input
- Better form navigation for keyboard users
- Improved user experience for everyone

## Form Organization
Group related fields together and use fieldset and legend elements for complex forms:

\`\`\`html
<fieldset>
  <legend>Personal Information</legend>
  <label for="fname">First Name:</label>
  <input type="text" id="fname" name="fname">
  
  <label for="lname">Last Name:</label>
  <input type="text" id="lname" name="lname">
</fieldset>
\`\`\`
    `,
  keyTerms: [
    { term: "Label", definition: "HTML element that provides a caption or description for a form control." },
    { term: "For Attribute", definition: "Attribute that associates a label with a specific form element by ID." },
    { term: "Submit Button", definition: "Button that sends form data to the server when clicked." },
    { term: "Reset Button", definition: "Button that clears all form fields to their default values." },
    { term: "Fieldset", definition: "Element used to group related form controls together." },
    { term: "Legend", definition: "Element that provides a caption for a fieldset group." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Labels and Buttons",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'labels-buttons.html' with basic HTML structure.",
        "Create a simple form with 3 input fields: name, email, phone.",
        "Add proper labels for each input using the 'for' attribute.",
        "Add both submit and reset buttons to the form.",
        "Test that clicking labels focuses the correct input fields."
      ]
    },
    {
      id: 2,
      title: "Contact Form with Proper Labels",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'contact-form.html' for a business contact form.",
        "Include fields: name, email, subject, message (use textarea).",
        "Add descriptive labels for each field.",
        "Include submit button with text 'Send Message'.",
        "Add a reset button with text 'Clear Form'.",
        "Test form functionality including the reset button."
      ]
    },
    {
      id: 3,
      title: "Grouped Form with Fieldsets",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'grouped-form.html' for a comprehensive user registration.",
        "Use fieldset and legend to group: 'Personal Info' and 'Account Details'.",
        "Personal Info: first name, last name, birthdate.",
        "Account Details: username, email, password.",
        "Add proper labels for all fields.",
        "Include submit and reset buttons outside the fieldsets."
      ]
    },
    {
      id: 4,
      title: "Job Application Form",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'job-application.html' for an employment application.",
        "Include sections for personal info, education, and experience.",
        "Use fieldsets to organize different sections.",
        "Add appropriate labels for all form controls.",
        "Include multiple button types: submit, reset, and a regular button labeled 'Save Draft'."
      ]
    },
    {
      id: 5,
      title: "Multi-Step Form Interface",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'multi-step-form.html' simulating a multi-step process.",
        "Create 3 fieldsets representing different steps of a process.",
        "Each fieldset should have appropriate labels and form controls.",
        "Add navigation buttons: 'Previous', 'Next', 'Submit', and 'Reset'.",
        "Focus on proper labeling and button organization for good user experience."
      ]
    }
  ]
};
