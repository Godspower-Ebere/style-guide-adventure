
import { DayLesson } from "../types";

export const day12: DayLesson = {
  day: 12,
  title: "HTML Forms - Validation",
  category: "HTML Forms",
  description: "Learn HTML5 form validation techniques to ensure data quality and provide better user experience with client-side validation.",
  learningObjectives: [
    "Master HTML5 built-in validation attributes and their usage.",
    "Understand different validation types: required, pattern, min/max, length.",
    "Learn to create custom validation messages and user feedback.",
    "Implement comprehensive form validation for real-world applications."
  ],
  detailedExplanation: `
Today we'll explore HTML5 form validation, which helps ensure users enter valid data before submitting forms.

## Built-in Validation Attributes

### Required Validation
Makes fields mandatory:
\`\`\`html
<input type="text" name="username" required>
<input type="email" name="email" required>
\`\`\`

### Length Validation
Controls minimum and maximum character length:
\`\`\`html
<input type="text" name="username" minlength="3" maxlength="20">
<textarea name="message" minlength="10" maxlength="500"></textarea>
\`\`\`

### Numeric Validation
Sets ranges for number inputs:
\`\`\`html
<input type="number" name="age" min="13" max="120">
<input type="range" name="rating" min="1" max="10">
\`\`\`

### Pattern Validation
Uses regular expressions for custom validation:
\`\`\`html
<input type="text" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
       placeholder="123-456-7890">
\`\`\`

## Input Type Validation
Different input types provide automatic validation:

\`\`\`html
<input type="email" name="email">     <!-- Validates email format -->
<input type="url" name="website">     <!-- Validates URL format -->
<input type="tel" name="phone">       <!-- For telephone numbers -->
<input type="date" name="birthdate">  <!--  Ensures valid date -->
\`\`\`

## Custom Validation Messages
You can provide custom error messages:

\`\`\`html
<input type="email" name="email" required 
       title="Please enter a valid email address">

<input type="text" name="username" pattern="[A-Za-z0-9]{3,20}" 
       title="Username must be 3-20 characters, letters and numbers only">
\`\`\`

## Complete Validated Form Example
\`\`\`html
<form>
  <label for="name">Full Name:</label>
  <input type="text" id="name" name="name" required minlength="2">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="13" max="120" required>
  
  <label for="phone">Phone:</label>
  <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
         placeholder="123-456-7890">
  
  <button type="submit">Submit</button>
</form>
\`\`\`

## Validation Benefits
- Immediate feedback to users
- Reduces server load by catching errors early
- Improves user experience
- Helps maintain data quality
- Works without JavaScript

## Browser Support
HTML5 validation is supported by all modern browsers and provides a consistent user experience across platforms.
    `,
  keyTerms: [
    { term: "Required Attribute", definition: "Makes a form field mandatory to fill out before submission." },
    { term: "Pattern Attribute", definition: "Uses regular expressions to define acceptable input formats." },
    { term: "Minlength/Maxlength", definition: "Attributes that set minimum and maximum character limits for text inputs." },
    { term: "Min/Max Attributes", definition: "Set the minimum and maximum values for number and date inputs." },
    { term: "Client-side Validation", definition: "Form validation that occurs in the browser before data is sent to the server." },
    { term: "Custom Validation Message", definition: "User-defined error messages that appear when validation fails." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Form Validation",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'basic-validation.html' with a simple registration form.",
        "Add required validation to name, email, and password fields.",
        "Set minlength of 8 characters for the password field.",
        "Test by trying to submit the form with empty required fields.",
        "Observe the browser's default validation messages."
      ]
    },
    {
      id: 2,
      title: "Number and Date Validation",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'number-date-validation.html' for an event registration form.",
        "Add fields for: name (required), age (13-120), event date (required), tickets (1-10).",
        "Use appropriate input types and validation attributes.",
        "Test with invalid values to see validation in action.",
        "Ensure all validation works as expected."
      ]
    },
    {
      id: 3,
      title: "Pattern Validation Practice",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'pattern-validation.html' with custom pattern validation.",
        "Add phone number field with pattern for format: (123) 456-7890.",
        "Add username field that only allows letters and numbers, 3-15 characters.",
        "Add zip code field with pattern for 5 digits or 5+4 format.",
        "Include helpful placeholder text and custom error messages.",
        "Test each pattern thoroughly."
      ]
    },
    {
      id: 4,
      title: "Complete Profile Form",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'profile-validation.html' for a comprehensive user profile form.",
        "Include validation for: name, email, age, phone, website URL, bio.",
        "Use appropriate input types and validation attributes for each field.",
        "Set character limits for text areas and text inputs.",
        "Add custom validation messages using the title attribute.",
        "Test all validation scenarios thoroughly."
      ]
    },
    {
      id: 5,
      title: "Advanced Registration System",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'advanced-registration.html' with comprehensive validation.",
        "Include fields with various validation types: required, pattern, length, range.",
        "Add password confirmation field (note: this requires custom validation).",
        "Include terms of service checkbox that must be checked.",
        "Create detailed validation for username (unique pattern requirements).",
        "Test edge cases and ensure user-friendly error messages."
      ]
    }
  ]
};
