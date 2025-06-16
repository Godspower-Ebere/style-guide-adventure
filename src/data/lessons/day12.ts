
import { DayLesson } from "../types";

export const day12: DayLesson = {
  day: 12,
  title: "HTML Forms - Textarea and Advanced Inputs",
  category: "HTML Forms",
  description: "Learn to create multi-line text inputs and explore advanced HTML5 input types for better user experience.",
  learningObjectives: [
    "Master the textarea element for multi-line text input.",
    "Understand HTML5 input types: date, time, color, range, file.",
    "Learn input validation attributes and their usage.",
    "Create comprehensive forms with various input types."
  ],
  detailedExplanation: `
Today we'll explore textarea and advanced HTML5 input types that provide better user interfaces.

## The Textarea Element
For multi-line text input, use the textarea element:

\\\`\\\`\\\`html
<label for="message">Your Message:</label>
<textarea id="message" name="message" rows="5" cols="40">
Default text here (optional)
</textarea>
\\\`\\\`\\\`

## Textarea Attributes
- \\\`rows\\\` - Number of visible text lines
- \\\`cols\\\` - Visible width in characters  
- \\\`placeholder\\\` - Hint text
- \\\`maxlength\\\` - Maximum character limit
- \\\`required\\\` - Makes field mandatory

## HTML5 Input Types

### Date and Time Inputs
\\\`\\\`\\\`html
<input type="date" name="birthday">
<input type="time" name="appointment">
<input type="datetime-local" name="event">
<input type="month" name="expiry">
<input type="week" name="vacation">
\\\`\\\`\\\`

### Color Input
\\\`\\\`\\\`html
<input type="color" name="theme-color" value="#ff0000">
\\\`\\\`\\\`

### Range Input (Slider)
\\\`\\\`\\\`html
<input type="range" name="volume" min="0" max="100" value="50">
\\\`\\\`\\\`

### File Input
\\\`\\\`\\\`html
<input type="file" name="upload" accept=".jpg,.png,.pdf">
<input type="file" name="multiple-files" multiple>
\\\`\\\`\\\`

## Input Validation Attributes
\\\`\\\`\\\`html
<input type="email" name="email" required>
<input type="number" name="age" min="18" max="100">
<input type="text" name="username" pattern="[a-zA-Z0-9]{3,16}">
<input type="url" name="website" placeholder="https://example.com">
\\\`\\\`\\\`

## Complete Advanced Form Example
\\\`\\\`\\\`html
<form>
  <fieldset>
    <legend>Personal Information</legend>
    
    <label for="fullname">Full Name:</label>
    <input type="text" id="fullname" name="fullname" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday">
    
    <label for="website">Website:</label>
    <input type="url" id="website" name="website">
  </fieldset>
  
  <fieldset>
    <legend>Preferences</legend>
    
    <label for="theme">Theme Color:</label>
    <input type="color" id="theme" name="theme">
    
    <label for="volume">Volume:</label>
    <input type="range" id="volume" name="volume" min="0" max="100">
    
    <label for="avatar">Profile Picture:</label>
    <input type="file" id="avatar" name="avatar" accept="image/*">
  </fieldset>
  
  <label for="bio">Biography:</label>
  <textarea id="bio" name="bio" rows="4" placeholder="Tell us about yourself..."></textarea>
  
  <button type="submit">Submit</button>
</form>
\\\`\\\`\\\`
    `,
  keyTerms: [
    { term: "Textarea", definition: "HTML element for multi-line text input with customizable dimensions." },
    { term: "HTML5 Input Types", definition: "Advanced input types like date, color, range that provide specialized interfaces." },
    { term: "Input Validation", definition: "Built-in HTML attributes that validate user input before form submission." },
    { term: "Accept Attribute", definition: "Specifies which file types are allowed for file input elements." },
    { term: "Pattern Attribute", definition: "Defines a regular expression that the input value must match." }
  ],
  exercises: [
    {
      id: 1,
      title: "Message Form with Textarea",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'message-form.html' with a contact form.",
        "Include name and email inputs.",
        "Add a large textarea for the message (6 rows, 50 cols).",
        "Set appropriate labels and placeholders.",
        "Add submit and reset buttons."
      ]
    },
    {
      id: 2,
      title: "Event Registration Form",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'event-registration.html' for event signup.",
        "Include date input for event date selection.",
        "Add time input for preferred time slot.",
        "Use number input for attendee count (min: 1, max: 10).",
        "Add file input for uploading documents.",
        "Include proper validation attributes."
      ]
    },
    {
      id: 3,
      title: "User Profile Setup",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'profile-setup.html' for user profile creation.",
        "Use various HTML5 inputs: text, email, date, color, range, file.",
        "Add textarea for bio section.",
        "Include proper validation and required fields.",
        "Organize form with fieldsets and legends.",
        "Style form to be user-friendly and accessible."
      ]
    }
  ]
};
