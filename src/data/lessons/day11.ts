
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
Let's talk about one of the most useful form elements - the select dropdown! You know those dropdown menus you see everywhere on websites? Like when you're choosing your country or selecting your favorite color? That's what we're learning today.

## Why Use Select Elements?

Think about it - when you have many options to choose from, showing them all as radio buttons would take up way too much space. That's where select elements shine! They save space and make your forms look clean and professional.

## Creating Your First Dropdown

Let me show you how to create a basic dropdown menu:

<label for="country">Choose your country:</label>
<select id="country" name="country">
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
  <option value="au">Australia</option>
</select>

See how simple that is? The <select> tag creates the dropdown, and each <option> represents a choice. The "value" attribute is what gets sent to the server, while the text between the tags is what users see.

## Making Options Smarter

Now, let's make our dropdowns more intelligent:

<select name="priority">
  <option value="low">Low Priority</option>
  <option value="medium" selected>Medium Priority</option>
  <option value="high" disabled>High Priority (Unavailable)</option>
</select>

Notice three important attributes here:
- **selected**: Makes "Medium Priority" the default choice
- **disabled**: Makes "High Priority" unselectable (grayed out)
- **value**: What actually gets submitted with the form

## Organizing with Option Groups

When you have lots of options, you can group them logically using <optgroup>:

<label for="food">What's your favorite food?</label>
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

This creates nice visual separation and makes long lists much easier to navigate.

## Multiple Selections

Sometimes you want users to pick more than one option:

<label for="skills">Select your skills (Hold Ctrl/Cmd for multiple):</label>
<select id="skills" name="skills" multiple>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
  <option value="python">Python</option>
</select>

The "multiple" attribute allows users to select several options at once.

## Controlling Visibility with Size

You can control how many options are visible at once:

<select name="colors" size="4">
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
  <option value="yellow">Yellow</option>
  <option value="purple">Purple</option>
</select>

This shows 4 options at once instead of just a dropdown.

## Complete Example - Order Form

Here's a practical example you might see on a pizza ordering website:

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Pizza Order Form</title>
</head>
<body>
    <h1>Order Your Pizza</h1>
    <form>
        <label for="size">Pizza Size:</label>
        <select id="size" name="size" required>
            <option value="">Choose a size...</option>
            <option value="small">Small - $12</option>
            <option value="medium" selected>Medium - $15</option>
            <option value="large">Large - $18</option>
        </select>

        <label for="toppings">Select Toppings:</label>
        <select id="toppings" name="toppings" multiple size="5">
            <optgroup label="Meats">
                <option value="pepperoni">Pepperoni</option>
                <option value="sausage">Sausage</option>
                <option value="ham">Ham</option>
            </optgroup>
            <optgroup label="Vegetables">
                <option value="mushrooms">Mushrooms</option>
                <option value="peppers">Bell Peppers</option>
                <option value="onions">Onions</option>
            </optgroup>
        </select>

        <button type="submit">Order Now</button>
    </form>
</body>
</html>

## Pro Tips for Better Selects

1. **Always use labels** - Screen readers need them for accessibility
2. **Provide default options** - Use placeholder-like first options
3. **Group related options** - Makes long lists manageable
4. **Consider the number of options** - Too few? Use radio buttons instead
5. **Give clear instructions** - Tell users how to select multiple items

Remember, good form design is about making things easy for your users. Select elements are powerful tools when used thoughtfully!
    `,
  keyTerms: [
    { term: "Select Element", definition: "HTML element that creates a dropdown menu or selection list for form input." },
    { term: "Option Element", definition: "Individual choice within a select element that users can choose from." },
    { term: "Optgroup", definition: "Element used to group related options within a select element for better organization." },
    { term: "Selected Attribute", definition: "Makes an option selected by default when the page loads." },
    { term: "Multiple Attribute", definition: "Allows users to select more than one option from a select element." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Color Selector",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'color-selector.html' with complete HTML5 structure.",
        "Add a heading 'Choose Your Favorite Color'.",
        "Create a select element with id='colorChoice' and name='color'.",
        "Add 8 different color options (red, blue, green, yellow, purple, orange, pink, black).",
        "Each option should have a proper value attribute.",
        "Include a proper label that's connected to the select element.",
        "Add a submit button and test the dropdown functionality.",
        "Make sure one color is selected by default using the selected attribute."
      ]
    },
    {
      id: 2,
      title: "Country and State Selection",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'location-form.html' for a location selection form.",
        "Add a country dropdown with at least 6 countries.",
        "Add a state/province dropdown with options for at least one country.",
        "Use meaningful value attributes (like 'us' for United States).",
        "Set one option as selected by default in each dropdown.",
        "Include proper labels for both select elements.",
        "Add name and email input fields to make it a complete form.",
        "Include submit and reset buttons and test all functionality."
      ]
    },
    {
      id: 3,
      title: "Course Selection with Groups",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'course-registration.html' with organized option groups.",
        "Create a 'Select Your Course' dropdown with proper labeling.",
        "Group courses into at least 3 categories: 'Programming', 'Design', 'Business'.",
        "Add at least 4 courses in each group with realistic course names.",
        "Include a second select for 'Experience Level' (Beginner, Intermediate, Advanced).",
        "Add a multiple selection dropdown for 'Learning Goals' with at least 6 options.",
        "Include student information fields (name, email, phone).",
        "Add proper form validation attributes and test the complete form."
      ]
    },
    {
      id: 4,
      title: "Job Application Skills Form",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'job-application.html' for a comprehensive job application form.",
        "Add personal information fields (name, email, phone, address).",
        "Create a multiple selection dropdown for technical skills with at least 12 options.",
        "Add a single select for years of experience (0-1, 1-3, 3-5, 5-10, 10+).",
        "Include a select for preferred work location with multiple city options.",
        "Add instructions explaining how to select multiple skills.",
        "Include other relevant form fields (position applying for, salary expectations).",
        "Test the multiple selection functionality and ensure all data can be submitted."
      ]
    },
    {
      id: 5,
      title: "Complete Survey Form",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'comprehensive-survey.html' with various select elements.",
        "Include demographics section: age range, education level, employment status.",
        "Add preferences section with grouped options for interests and hobbies.",
        "Create a product feedback section with rating dropdowns (1-5 stars).",
        "Include a multiple selection for 'How did you hear about us?' options.",
        "Add a large select list (size attribute) for favorite brands or companies.",
        "Use optgroups appropriately throughout for better organization.",
        "Include proper labels, default selections, and clear instructions.",
        "Add form validation and ensure the survey is user-friendly and professional.",
        "Test all functionality including multiple selections and grouped options."
      ]
    }
  ]
};
