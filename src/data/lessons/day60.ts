
import { DayLesson } from "../types";

export const day60: DayLesson = {
  day: 60,
  title: "CSS Best Practices and Organization",
  category: "Advanced CSS",
  description: "Learn strategies for writing clean, maintainable, and scalable CSS, including file organization, naming conventions, and commenting.",
  learningObjectives: [
    "Understand and apply a naming convention like BEM to avoid style conflicts.",
    "Learn strategies for organizing CSS files for large projects (e.g., component-based architecture).",
    "Write useful and effective comments in your CSS.",
    "Master the art of writing reusable, modular, and DRY (Don't Repeat Yourself) CSS."
  ],
  detailedExplanation: `
As projects grow, CSS can quickly become difficult to manage. A disorganized stylesheet is hard to read, debug, and scale. Adopting best practices from the start is crucial for long-term success.

### 1. Use a Naming Convention
A consistent naming convention is the single most important thing for avoiding style conflicts in large projects. It prevents generic names like \`.title\` from clashing. **BEM** is one of the most popular and effective conventions.

**BEM (Block, Element, Modifier)**
- **Block:** A standalone, reusable component. E.g., \`.card\`, \`.search-form\`.
- **Element:** A part of a block that has no meaning on its own. The name is the block name plus two underscores (\`__\`) and the element name. E.g., \`.card__title\`, \`.search-form__input\`.
- **Modifier:** A flag on a block or element used to change its appearance or behavior. The name is the block or element name plus two hyphens (\`--\`). E.g., \`.card--featured\`, \`.search-form__button--disabled\`.

\`\`\`html
<div class="card card--featured">
  <h2 class="card__title">Title</h2>
  <p class="card__text">Some text.</p>
  <button class="card__button card__button--primary">Click</button>
</div>
\`\`\`
\`\`\`css
/* Block */
.card { ... }

/* Elements */
.card__title { ... }
.card__text { ... }
.card__button { ... }

/* Modifiers */
.card--featured {
  border: 2px solid gold;
}
.card__button--primary {
  background-color: blue;
}
\`\`\`
BEM makes your CSS explicit, modular, and virtually conflict-proof.

### 2. Organize Your Files
Don't put all your CSS in one giant file. For modern, component-based frameworks (like React, Vue, Angular), the best approach is **colocation**: each component has its own dedicated CSS file.

For other projects, a common architecture looks like this:

\`\`\`
/styles
|-- /base
|   |-- _reset.css       # Reset or normalize styles
|   |-- _typography.css  # Base styles for h1, p, a, etc.
|   |-- _variables.css   # All CSS custom properties
|
|-- /components
|   |-- _buttons.css
|   |-- _cards.css
|   |-- _forms.css
|
|-- /layout
|   |-- _header.css
|   |-- _footer.css
|   |-- _grid.css
|
|-- /pages
|   |-- _home.css        # Styles specific to the home page
|   |-- _contact.css
|
|-- main.css             # Main file that imports all others
\`\`\`
The \`main.css\` file would use \`@import\` to bring all the partials together in the correct order.

### 3. Write Good Comments
Good comments explain the *why*, not the *what*.

-   **Bad Comment:** \`/* Make the text red */ color: red;\` (This is obvious from the code).
-   **Good Comment:** \`/* Use red for error messages to draw immediate user attention. See style guide p. 5. */ .error-text { color: red; }\` (This explains the intent).

Use comments to create sections in your stylesheet for better readability.
\`\`\`css
/*------------------------------------*\
  #CARD COMPONENT
\*------------------------------------*/
.card { ... }
\`\`\`

### 4. Keep it DRY (Don't Repeat Yourself)
Avoid repeating the same chunks of CSS.
- **Use variables:** If you use the same color in 10 places, define it as a variable.
- **Create utility classes:** If you find yourself writing \`text-align: center;\` on many different elements, create a reusable class: \`.text-center { text-align: center; }\`. (This is the principle behind frameworks like Tailwind CSS).
- **Group selectors:** If two elements share many styles, group them.
  \`\`\`css
  .button-primary, .button-secondary {
    padding: 10px 20px;
    border: none;
    font-family: inherit;
  }
  .button-primary { background-color: blue; }
  .button-secondary { background-color: gray; }
  \`\`\`

By combining these strategies, you create a CSS codebase that is a pleasure to work on, easy to hand off to other developers, and capable of scaling to any size.
`,
  keyTerms: [
    { term: "BEM (Block, Element, Modifier)", definition: "A popular CSS naming convention that creates explicit, long, and flat class names to prevent style conflicts (e.g., `.card__title--large`)." },
    { term: "Scalability", definition: "The ability of a system, like a CSS codebase, to handle growing complexity and size without becoming unmanageable." },
    { term: "Maintainability", definition: "How easy it is to find and fix bugs, or make changes to a codebase." },
    { term: "DRY (Don't Repeat Yourself)", definition: "A principle of software development aimed at reducing repetition of code by abstracting it into reusable units." },
    { term: "Colocation", definition: "The practice of keeping related files together, such as placing a component's CSS file in the same directory as its HTML/JS file." },
    { term: "Utility Class", definition: "A small, single-purpose CSS class that applies one specific style (e.g., `.font-bold`)." }
  ],
  exercises: [
    {
      id: 1,
      title: "Refactor to BEM",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Take a previous exercise with a card or a form that has nested elements.",
        "Rewrite the HTML and CSS to use the BEM naming convention.",
        "For example, a `div` with class `card` and a `p` with class `title` becomes `.card` and `.card__title`.",
        "Add a modifier class, like `.card--dark`, and apply some different styles."
      ]
    },
    {
      id: 2,
      title: "Create Reusable Buttons",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Define a base `.button` class with common styles (padding, font, border-radius).",
        "Create modifier classes for different colors (e.g., `.button--primary`, `.button--danger`).",
        "Create modifier classes for different sizes (e.g., `.button--small`, `.button--large`).",
        "Create buttons in your HTML that combine these classes, like `<button class=\"button button--danger button--large\">Delete</button>`."
      ]
    },
    {
      id: 3,
      title: "Plan a CSS File Structure",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Imagine you are building a large e-commerce website.",
        "In a text file, lay out a directory structure for your CSS files.",
        "Include folders for `base`, `layout`, `components`, and `pages`.",
        "List at least 3-4 files you would put in each directory (e.g., `_products.css` in `components`, `_checkout.css` in `pages`)."
      ]
    },
    {
      id: 4,
      title: "Commenting a Stylesheet",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Take any of your previous CSS files.",
        "Add section comments to divide it into logical parts (e.g., `/* --- Header Styles --- */`).",
        "Find at least one complex or non-obvious CSS rule (like a `z-index` hack or a complex selector).",
        "Add a comment above it explaining *why* it's necessary, not just what it does."
      ]
    }
  ]
};
