
import { DayLesson } from "../types";

export const day53: DayLesson = {
  day: 53,
  title: "CSS Variables: Supercharge Your Stylesheets",
  category: "Advanced CSS",
  description: "Learn how to use CSS Custom Properties (Variables) to create more maintainable, reusable, and dynamic stylesheets for theming and consistency.",
  learningObjectives: [
    "Declare and use CSS variables for colors, fonts, spacing, and more.",
    "Understand the concept of scoping and how variables cascade from global to local contexts.",
    "Change variable values within media queries for powerful, centralized responsive design.",
    "Manipulate CSS variables with JavaScript to create interactive experiences like dynamic theming."
  ],
  detailedExplanation: `
CSS Custom Properties, more commonly known as CSS Variables, are entities defined by CSS authors that can contain specific values to be reused throughout a document. They provide a way to create maintainable and scalable CSS.

### Declaring and Using Variables
You declare a variable using a custom property name that begins with two hyphens (\`--\`). You access it using the \`var()\` function.

The best practice is to declare global variables inside the \`:root\` pseudo-class, which makes them available everywhere in your document.

\`\`\`css
/* 1. Declare variables in the :root scope */
:root {
  --primary-color: #3498db;
  --main-font: 'Helvetica', sans-serif;
  --base-spacing: 1rem;
}

/* 2. Use variables with the var() function */
body {
  font-family: var(--main-font);
  color: var(--primary-color);
}

.container {
  padding: var(--base-spacing);
}

.button {
  background-color: var(--primary-color);
  padding: var(--base-spacing);
}
\`\`\`
Now, if you want to change your primary color, you only have to change it in one place!

### Scoping and Overriding
Variables follow the standard cascade. You can override a global variable within a more specific selector. This is incredibly powerful.

\`\`\`css
:root {
  --text-color: #333;
}

.alert {
  /* This variable only applies inside .alert elements */
  --text-color: #c0392b; 
  color: var(--text-color); /* Uses the local red color */
  border: 1px solid var(--text-color);
}

p {
  color: var(--text-color); /* Uses the global #333 color, unless it's inside .alert */
}
\`\`\`

### Fallback Values
What if a variable isn't defined? The \`var()\` function accepts a second parameter: a fallback value.

\`\`\`css
.element {
  /* If --special-color is not defined, it will use 'deeppink' */
  background-color: var(--special-color, deeppink);
}
\`\`\`

### Variables and Responsive Design
You can redefine variables inside media queries. This is a clean way to manage responsive changes. Instead of rewriting lots of selectors, you just change the variable's value.

\`\`\`css
:root {
  --font-size-heading: 2rem;
  --container-padding: 1rem;
}

@media (min-width: 800px) {
  :root {
    /* On larger screens, just update the variables */
    --font-size-heading: 3.5rem;
    --container-padding: 2.5rem;
  }
}

/* These rules don't need to be in a media query now! */
h1 {
  font-size: var(--font-size-heading);
}
.container {
  padding: var(--container-padding);
}
\`\`\`

### Manipulating Variables with JavaScript
Because variables are part of the CSSOM, they can be accessed and manipulated with JavaScript. This is the key to dynamic theming (e.g., light/dark mode).

\`\`\`javascript
// Get the root element
const root = document.documentElement;

// Function to switch to dark theme
function setDarkTheme() {
  root.style.setProperty('--background-color', '#222');
  root.style.setProperty('--text-color', '#eee');
}

// Function to switch to light theme
function setLightTheme() {
  root.style.setProperty('--background-color', '#fff');
  root.style.setProperty('--text-color', '#333');
}
\`\`\`
`,
  keyTerms: [
    { term: "Custom Property", definition: "The official specification name for a CSS Variable, which is a user-defined value that can be reused in CSS." },
    { term: ":root", definition: "A CSS pseudo-class that represents the root element of the document (the `<html>` element). It's the standard place to declare global CSS variables." },
    { term: "var()", definition: "A CSS function used to insert the value of a custom property. It can also accept a fallback value." },
    { term: "Scoping", definition: "The concept that variables can be defined globally (in `:root`) or locally within a specific selector, following the rules of the CSS cascade." },
    { term: "Dynamic Theming", definition: "The ability to change the visual theme of a website (e.g., colors, fonts) in real-time, often by manipulating CSS variables with JavaScript." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create a Color and Font Palette",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "In a CSS file, define a `:root` block.",
        "Inside `:root`, create variables for a primary color, a secondary color, a text color, and a background color.",
        "Also create variables for your main font and a heading font.",
        "Apply these variables to the `body`, `h1`, and a `.button` class."
      ]
    },
    {
      id: 2,
      title: "Build a Spacing System",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "In your `:root` block, create spacing variables based on a scale (e.g., `--space-xs: 4px;`, `--space-sm: 8px;`, `--space-md: 16px;`, `--space-lg: 32px;`).",
        "Create a few `div` elements.",
        "Apply margins and paddings to these elements using your new spacing variables.",
        "Try changing the value of `--space-md` and see how it affects your layout."
      ]
    },
    {
      id: 3,
      title: "Responsive Layout with Variables",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Define a variable for layout width, e.g., `--layout-width: 90%;` in `:root`.",
        "Apply this to a main container class: `max-width: var(--layout-width);`.",
        "Inside a media query for larger screens (e.g., `min-width: 1200px`), redefine the variable: `--layout-width: 1140px;`.",
        "This allows you to control the container's width from a single place for different screen sizes."
      ]
    },
    {
      id: 4,
      title: "JavaScript Light/Dark Mode Switcher",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Define two sets of color variables in your CSS, one for light mode (e.g., `--bg-color`, `--text-color`) and one for dark mode, but commented out or in a separate ruleset like `body.dark-mode`.",
        "Create a button in your HTML to toggle the theme.",
        "Write a JavaScript function that, when the button is clicked, adds or removes a `dark-mode` class to the `<body>`.",
        "Define your variables inside `body.dark-mode { ... }` to override the default `:root` variables. This will automatically apply the new theme."
      ]
    }
  ]
};
