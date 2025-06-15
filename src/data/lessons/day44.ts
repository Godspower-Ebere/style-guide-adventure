
import { DayLesson } from "../types";

export const day44: DayLesson = {
  day: 44,
  title: "Bringing Interfaces to Life with CSS Transitions",
  category: "CSS Animations",
  description: "Learn how to create smooth, gradual animations between CSS property values, making your UI feel more dynamic and responsive.",
  learningObjectives: [
    "Understand the core purpose of CSS transitions for enhancing user experience.",
    "Master the four fundamental transition properties: `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.",
    "Utilize the `transition` shorthand property to write cleaner and more efficient code.",
    "Trigger transitions based on user interactions like `:hover`, `:focus`, and adding/removing CSS classes.",
    "Recognize which CSS properties are animatable and how to apply transitions to multiple properties simultaneously."
  ],
  detailedExplanation: `
CSS transitions provide a way to control animation speed when changing CSS properties. Instead of property changes taking effect immediately, you can cause the changes to occur over a period of time. This creates a smoother, less jarring experience for the user.

### The Four Transition Properties

Transitions are configured using four main properties:

**1. \`transition-property\`**
This property specifies the name or names of the CSS properties to which a transition effect should be applied.
\`\`\`css
.box {
  /* Only the background-color will transition */
  transition-property: background-color;
}
\`\`\`
You can specify multiple properties by separating them with a comma (e.g., \`width, height\`) or use the value \`all\` to transition every property that changes.

**2. \`transition-duration\`**
This defines how long the transition should take to complete. The value is specified in seconds (\`s\`) or milliseconds (\`ms\`).
\`\`\`css
.box {
  transition-duration: 0.5s; /* or 500ms */
}
\`\`\`

**3. \`transition-timing-function\`**
This dictates the speed curve of the transition. It controls how the intermediate property values are calculated.
- \`ease\`: (Default) Starts slow, then fast, then ends slow. Natural-feeling.
- \`linear\`: The transition occurs at an even speed.
- \`ease-in\`: Starts slow, then accelerates until the end.
- \`ease-out\`: Starts fast, then decelerates until the end.
- \`ease-in-out\`: Similar to \`ease\`, but with a more pronounced start and end.
- \`cubic-bezier(n,n,n,n)\`: Allows you to define your own custom timing function on a mathematical curve.

**4. \`transition-delay\`**
This property specifies a delay (in seconds or milliseconds) before the transition starts.
\`\`\`css
.box {
  transition-delay: 1s; /* Wait 1 second before starting */
}
\`\`\`

### The \`transition\` Shorthand
It's much more common to use the shorthand property to set all four values at once. The order is generally:
**\`transition: [property] [duration] [timing-function] [delay];\`**

\`\`\`css
.button {
  background-color: blue;
  /* property: background-color, duration: 0.3s, timing-function: ease-in-out, delay: 0s */
  transition: background-color 0.3s ease-in-out;
}
\`\`\`

### Triggering Transitions
Transitions need a **state change** to be triggered. This usually happens with pseudo-classes or by adding/removing classes with JavaScript.

\`\`\`css
.button {
  background-color: #3498db;
  color: white;
  padding: 1rem 2rem;
  border: none;
  transition: background-color 0.4s ease;
}

/* The transition will run when the user hovers over the button */
.button:hover {
  background-color: #2980b9;
}
\`\`\`

### Transitioning Multiple Properties
You can transition multiple properties by separating them with commas in the shorthand declaration.

\`\`\`css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
\`\`\`
`,
  keyTerms: [
    { term: "CSS Transition", definition: "A CSS feature that allows property changes to occur smoothly over a specified duration." },
    { term: "transition-property", definition: "Specifies the CSS property to which the transition effect is applied." },
    { term: "transition-duration", definition: "Defines the length of time a transition animation should take to complete." },
    { term: "transition-timing-function", definition: "Describes how the speed of a transition changes over its duration." },
    { term: "transition-delay", definition: "Sets a delay before the transition animation begins." },
    { term: "State Change", definition: "An event, like a hover or class change, that triggers the transition." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Button Hover",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML button.",
        "Give it a default background color, text color, and some padding.",
        "Add a `transition` property to the button, targeting the `background-color` with a duration of `0.3s`.",
        "Create a `:hover` pseudo-class for the button that changes its `background-color` to a different shade.",
        "Test in the browser to see the color fade smoothly on hover."
      ]
    },
    {
      id: 2,
      title: "Growing Card Effect",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a `<div>` with a class of 'card'. Give it a width, height, background color, and a subtle `box-shadow`.",
        "In the card's base styles, add a `transition` that targets two properties: `transform` and `box-shadow`, both with a duration of `0.4s` and an `ease-out` timing function.",
        "Create a `:hover` state for the card.",
        "In the `:hover` state, use `transform: scale(1.05);` to make the card slightly larger.",
        "Also in the `:hover` state, make the `box-shadow` larger and more pronounced.",
        "Observe how the card smoothly grows and its shadow expands on hover."
      ]
    },
    {
      id: 3,
      title: "Link Underline Effect",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create an `<a>` tag.",
        "Remove the default underline with `text-decoration: none;` and give it a `position: relative;`.",
        "Use the `::after` pseudo-element to create a custom underline. Style it to be a thin bar positioned at the bottom of the link (`position: absolute; bottom: -2px; left: 0;`), with `width: 0;` and `height: 2px;`, and a background color.",
        "Add a `transition` property to the `::after` pseudo-element targeting `width`.",
        "On link hover (`a:hover::after`), change the `width` of the pseudo-element to `100%`.",
        "The underline will now appear to draw itself from left to right on hover."
      ]
    },
    {
      id: 4,
      title: "Delayed Multi-Part Animation",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a container with several small `<div>` elements inside (e.g., five dots).",
        "Style the dots to be small circles arranged in a row.",
        "Give each dot a `transition` for `transform` and `background-color`.",
        "On hover of the main container, apply a transform to each dot (e.g., `transform: translateY(-20px);`) and change its color.",
        "Here's the trick: use the `:nth-child()` selector to give each dot a different `transition-delay`. For example, `.dot:nth-child(1)` has no delay, `.dot:nth-child(2)` has `transition-delay: 0.1s;`, `.dot:nth-child(3)` has `0.2s`, and so on.",
        "When you hover the container, the dots should animate in a staggered, wave-like sequence."
      ]
    }
  ]
};
