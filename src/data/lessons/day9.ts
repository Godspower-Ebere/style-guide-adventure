
import { DayLesson } from "../types";

export const day9: DayLesson = {
  day: 9,
  title: "HTML Forms - Input Types",
  category: "HTML Forms",
  description: "Discover the variety of HTML input types and learn how to collect different kinds of user data effectively.",
  learningObjectives: [
    "Master various HTML input types including text, email, password, and number.",
    "Understand when to use different input types for optimal user experience.",
    "Learn about input attributes like placeholder, required, and readonly.",
    "Create forms that collect different types of user information."
  ],
  detailedExplanation: `
Today we'll explore the many input types available in HTML forms, each designed for specific types of data collection.

## Basic Form Structure
Every form starts with the form element:

\`\`\`html
<form>
  <!-- Form inputs go here -->
</form>
\`\`\`

## Common Input Types

### Text Input
\`\`\`html
<input type="text" name="username" placeholder="Enter your username">
\`\`\`

### Email Input
\`\`\`html
<input type="email" name="email" placeholder="Enter your email">
\`\`\`

### Password Input
\`\`\`html
<input type="password" name="password" placeholder="Enter your password">
\`\`\`

### Number Input
\`\`\`html
<input type="number" name="age" min="1" max="120">
\`\`\`

### Date Input
\`\`\`html
<input type="date" name="birthdate">
\`\`\`

### Color Input
\`\`\`html
<input type="color" name="favorite-color">
\`\`\`

## Useful Input Attributes
- **placeholder**: Shows hint text inside the input
- **required**: Makes the field mandatory
- **readonly**: Prevents user from editing
- **disabled**: Disables the input completely
- **min/max**: Sets limits for number and date inputs
- **maxlength**: Limits character count for text inputs

## Example Contact Form
\`\`\`html
<form>
  <input type="text" name="name" placeholder="Full Name" required>
  <input type="email" name="email" placeholder="Email Address" required>
  <input type="tel" name="phone" placeholder="Phone Number">
  <input type="date" name="preferred-date">
</form>
\`\`\`

## Input Validation
Different input types provide built-in validation:
- Email inputs check for valid email format
- Number inputs only accept numeric values
- Date inputs provide date pickers
    `,
  keyTerms: [
    { term: "Input Type", definition: "Attribute that specifies what kind of data an input field should accept." },
    { term: "Placeholder", definition: "Attribute that provides hint text inside an input field." },
    { term: "Required", definition: "Attribute that makes a form field mandatory to fill out." },
    { term: "Form Validation", definition: "Process of ensuring user input meets specified criteria before submission." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Input Types",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'input-types.html' with basic HTML structure.",
        "Add a form with different input types: text, email, password, number.",
        "Include appropriate placeholder text for each input.",
        "Add labels to describe each input field.",
        "Test each input type in your browser to see how they behave."
      ]
    },
    {
      id: 2,
      title: "Registration Form",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'registration.html' for a user registration form.",
        "Include inputs for: username, email, password, age, birthdate.",
        "Add the 'required' attribute to essential fields.",
        "Use appropriate input types for each field.",
        "Test form validation by trying to submit empty required fields."
      ]
    },
    {
      id: 3,
      title: "Event Booking Form",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'event-booking.html' for an event registration form.",
        "Include inputs for: name, email, phone, event date, number of tickets.",
        "Use min/max attributes for ticket quantity (1-10).",
        "Add a color picker for t-shirt color preference.",
        "Make all fields required and test the form thoroughly."
      ]
    },
    {
      id: 4,
      title: "Profile Setup Form",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'profile-setup.html' for a user profile form.",
        "Include various input types: text, email, date, number, color, url.",
        "Add appropriate placeholders and labels for each field.",
        "Use the 'readonly' attribute for one field (like a generated user ID).",
        "Test all input types to understand their behavior."
      ]
    },
    {
      id: 5,
      title: "Comprehensive Survey Form",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'survey.html' with a detailed survey form.",
        "Include at least 8 different input types covering all learned types.",
        "Add validation attributes like min, max, maxlength, and required.",
        "Create sections for personal info, preferences, and feedback.",
        "Ensure the form is well-organized and user-friendly."
      ]
    }
  ]
};
