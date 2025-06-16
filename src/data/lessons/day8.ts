
import { DayLesson } from "../types";

export const day8: DayLesson = {
  day: 8,
  title: "HTML Forms - Introduction and Basic Inputs",
  category: "HTML Forms",
  description: "Learn to create interactive forms with various input types for collecting user data effectively.",
  learningObjectives: [
    "Understand the purpose and structure of HTML forms.",
    "Master basic input types: text, email, password, number.",
    "Learn form attributes and their importance.",
    "Practice creating functional user input forms."
  ],
  detailedExplanation: `
Forms are essential for collecting user input and creating interactive websites.

## Basic Form Structure
Every form starts with the form element:

\\\`\\\`\\\`html
<form action="/submit" method="post">
  <!-- Form inputs go here -->
</form>
\\\`\\\`\\\`

## Common Input Types
HTML5 provides various input types:

\\\`\\\`\\\`html
<input type="text" name="username">
<input type="email" name="email">
<input type="password" name="password">
<input type="number" name="age">
<input type="date" name="birthdate">
<input type="tel" name="phone">
<input type="url" name="website">
\\\`\\\`\\\`

## Input Attributes
- \\\`name\\\` - Identifies the input when submitted
- \\\`placeholder\\\` - Hint text for the user
- \\\`required\\\` - Makes the field mandatory
- \\\`maxlength\\\` - Limits character count
- \\\`min/max\\\` - Sets numeric limits

## Complete Form Example
\\\`\\\`\\\`html
<form>
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Email Address" required>
  <input type="password" name="password" placeholder="Password" required>
  <input type="number" name="age" min="13" max="120">
  <button type="submit">Submit</button>
</form>
\\\`\\\`\\\`

## Form Methods
- \\\`GET\\\` - Data appears in URL (for searches)
- \\\`POST\\\` - Data sent privately (for sensitive info)
    `,
  keyTerms: [
    { term: "Form", definition: "HTML element that collects user input and sends it to a server." },
    { term: "Input", definition: "Form element that allows users to enter data." },
    { term: "Form Action", definition: "The URL where form data is sent when submitted." },
    { term: "Form Method", definition: "How data is sent: GET (in URL) or POST (in body)." },
    { term: "Placeholder", definition: "Hint text that appears in an input field." }
  ],
  exercises: [
    {
      id: 1,
      title: "Contact Form",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a simple contact form.",
        "Include fields for name, email, and message.",
        "Add appropriate input types and placeholders.",
        "Include a submit button."
      ]
    },
    {
      id: 2,
      title: "Registration Form",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a user registration form.",
        "Include username, email, password, and age fields.",
        "Use appropriate input types and validation attributes.",
        "Add required attributes where necessary."
      ]
    },
    {
      id: 3,
      title: "Survey Form",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a comprehensive survey form.",
        "Include various input types: text, email, number, date.",
        "Add proper validation and placeholders.",
        "Organize the form with clear sections."
      ]
    }
  ]
};
