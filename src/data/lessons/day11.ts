
import { DayLesson } from "../types";

export const day11: DayLesson = {
  day: 11,
  title: "HTML Forms - Select and Options",
  category: "HTML Forms",
  description: "Master dropdown menus and selection lists using HTML select elements and option groups for better user input collection.",
  learningObjectives: [
    "Learn to create dropdown menus with select and option elements.",
    "Understand how to group options using optgroup for better organization.",
    "Master select attributes like multiple, size, and disabled.",
    "Create user-friendly selection interfaces for various data types."
  ],
  detailedExplanation: `
Today we'll explore HTML select elements, which provide dropdown menus and selection lists for forms.

## Basic Select Element
The select element creates a dropdown menu:

\`\`\`html
<label for="country">Country:</label>
<select id="country" name="country">
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
  <option value="au">Australia</option>
</select>
\`\`\`

## Option Attributes
Options can have various attributes:

\`\`\`html
<select name="priority">
  <option value="low">Low Priority</option>
  <option value="medium" selected>Medium Priority</option>
  <option value="high" disabled>High Priority (Unavailable)</option>
</select>
\`\`\`

- **value**: The value sent when form is submitted
- **selected**: Makes this option selected by default
- **disabled**: Makes the option unselectable

## Grouping Options
Use optgroup to organize related options:

\`\`\`html
<label for="food">Favorite Food:</label>
<select id="food" name="food">
  <optgroup label="Fruits">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="orange">Orange</option>
  </optgroup>
  <optgroup label="Vegetables">
    <option value="carrot">Carrot</option>
    <option value="broccoli">Broccoli</option>
    <option value="spinach">Spinach</option>
  </optgroup>
</select>
\`\`\`

## Multiple Selection
Allow users to select multiple options:

\`\`\`html
<label for="skills">Skills (Hold Ctrl/Cmd to select multiple):</label>
<select id="skills" name="skills" multiple>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
  <option value="python">Python</option>
</select>
\`\`\`

## Size Attribute
Control how many options are visible:

\`\`\`html
<select name="colors" size="4">
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
  <option value="yellow">Yellow</option>
  <option value="purple">Purple</option>
</select>
\`\`\`

## Best Practices
1. Always include a label for accessibility
2. Use meaningful values for option elements
3. Group related options with optgroup
4. Consider the number of options - use radio buttons for few options
5. Provide clear instructions for multiple selections
    `,
  keyTerms: [
    { term: "Select Element", definition: "HTML element that creates a dropdown menu or selection list." },
    { term: "Option Element", definition: "Individual choice within a select element." },
    { term: "Optgroup", definition: "Element used to group related options within a select element." },
    { term: "Selected Attribute", definition: "Makes an option selected by default when the page loads." },
    { term: "Multiple Attribute", definition: "Allows users to select more than one option from a select element." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Dropdown Menu",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'dropdown-basic.html' with basic HTML structure.",
        "Create a form with a select element for choosing a favorite color.",
        "Add at least 6 color options with appropriate values.",
        "Include a proper label for the select element.",
        "Add a submit button to test the form.",
        "Test the dropdown in your browser."
      ]
    },
    {
      id: 2,
      title: "Country and State Selection",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'location-select.html' for location selection.",
        "Add a country dropdown with at least 5 countries.",
        "Add a state/province dropdown with options for one country.",
        "Use proper labels and meaningful option values.",
        "Set one option as selected by default in each dropdown.",
        "Include submit and reset buttons."
      ]
    },
    {
      id: 3,
      title: "Grouped Options Menu",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'grouped-select.html' with organized option groups.",
        "Create a 'Choose Your Course' select element.",
        "Group options into: 'Programming', 'Design', 'Business'.",
        "Add at least 3 options in each group.",
        "Include appropriate labels and form submission elements.",
        "Test that the grouping displays correctly."
      ]
    },
    {
      id: 4,
      title: "Multi-Selection Skills Form",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'skills-form.html' for a skills assessment form.",
        "Create a multiple selection dropdown for technical skills.",
        "Add at least 10 different skill options.",
        "Include instructions for users on how to select multiple items.",
        "Add other form fields like name and experience level.",
        "Test the multiple selection functionality."
      ]
    },
    {
      id: 5,
      title: "Comprehensive Survey Form",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'survey-select.html' with various select elements.",
        "Include: single select, multiple select, and grouped options.",
        "Add select elements for: age range, education level, interests, preferences.",
        "Use optgroups where appropriate for better organization.",
        "Include proper labels, default selections, and form controls.",
        "Ensure the form is comprehensive and user-friendly."
      ]
    }
  ]
};
