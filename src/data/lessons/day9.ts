
import { DayLesson } from "../types";

export const day9: DayLesson = {
  day: 9,
  title: "HTML Forms - Checkboxes and Radio Buttons",
  category: "HTML Forms",
  description: "Master selection controls in forms using checkboxes for multiple choices and radio buttons for single selections.",
  learningObjectives: [
    "Understand when to use checkboxes vs radio buttons.",
    "Learn to create grouped radio button selections.",
    "Master checkbox implementations for multiple selections.",
    "Practice building forms with various selection controls."
  ],
  detailedExplanation: `
Selection controls let users make choices from predefined options.

## Radio Buttons
Use radio buttons when users can select only ONE option from a group:

\\\`\\\`\\\`html
<input type="radio" name="size" value="small" id="small">
<label for="small">Small</label>

<input type="radio" name="size" value="medium" id="medium">
<label for="medium">Medium</label>

<input type="radio" name="size" value="large" id="large">
<label for="large">Large</label>
\\\`\\\`\\\`

## Checkboxes
Use checkboxes when users can select MULTIPLE options:

\\\`\\\`\\\`html
<input type="checkbox" name="toppings" value="cheese" id="cheese">
<label for="cheese">Cheese</label>

<input type="checkbox" name="toppings" value="pepperoni" id="pepperoni">
<label for="pepperoni">Pepperoni</label>

<input type="checkbox" name="toppings" value="mushrooms" id="mushrooms">
<label for="mushrooms">Mushrooms</label>
\\\`\\\`\\\`

## Key Differences
- **Radio buttons**: Same \\\`name\\\` attribute groups them together
- **Checkboxes**: Can have different names or same name for arrays
- **Default selection**: Use \\\`checked\\\` attribute

## Complete Example
\\\`\\\`\\\`html
<form>
  <fieldset>
    <legend>Pizza Size (Choose One)</legend>
    <input type="radio" name="size" value="small" id="small">
    <label for="small">Small ($10)</label>
    
    <input type="radio" name="size" value="large" id="large" checked>
    <label for="large">Large ($15)</label>
  </fieldset>
  
  <fieldset>
    <legend>Toppings (Choose Any)</legend>
    <input type="checkbox" name="toppings" value="cheese" id="cheese">
    <label for="cheese">Extra Cheese</label>
    
    <input type="checkbox" name="toppings" value="pepperoni" id="pepperoni">
    <label for="pepperoni">Pepperoni</label>
  </fieldset>
</form>
\\\`\\\`\\\`
    `,
  keyTerms: [
    { term: "Radio Button", definition: "Input type that allows selecting only one option from a group." },
    { term: "Checkbox", definition: "Input type that allows selecting multiple options independently." },
    { term: "Fieldset", definition: "Element that groups related form controls together." },
    { term: "Legend", definition: "Element that provides a caption for a fieldset group." },
    { term: "Checked Attribute", definition: "Makes a radio button or checkbox selected by default." }
  ],
  exercises: [
    {
      id: 1,
      title: "Pizza Order Form",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a pizza ordering form.",
        "Add radio buttons for size selection.",
        "Add checkboxes for toppings.",
        "Include proper labels for all inputs."
      ]
    },
    {
      id: 2,
      title: "Survey Preferences",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a preferences survey form.",
        "Use radio buttons for age groups.",
        "Use checkboxes for interests/hobbies.",
        "Group related options with fieldsets."
      ]
    },
    {
      id: 3,
      title: "Product Customization",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a product customization form.",
        "Include radio buttons for color, size, style.",
        "Add checkboxes for optional features.",
        "Use fieldsets to organize different option groups."
      ]
    }
  ]
};
