
import { DayLesson } from "../types";

export const day34: DayLesson = {
  day: 34,
  title: "CSS Borders and Outlines",
  category: "CSS Basics",
  description: "Learn how to style element borders and outlines, including width, style, color, and radius.",
  learningObjectives: [
    "Apply border properties: `border-width`, `border-style`, and `border-color`.",
    "Use the `border` shorthand property effectively.",
    "Create rounded corners with `border-radius`.",
    "Understand the difference between `border` and `outline`."
  ],
  detailedExplanation: `
Borders and outlines are used to draw lines around elements, which is essential for defining UI components like buttons, inputs, and cards.

## Border Properties
A border has three main properties you can control:

- **border-width**: The thickness of the border (e.g., \`5px\`, \`thin\`, \`medium\`, \`thick\`).
- **border-style**: The style of the line. Common values are \`solid\`, \`dashed\`, \`dotted\`, \`double\`, \`groove\`, \`ridge\`. \`none\` or \`hidden\` removes the border.
- **border-color**: The color of the border.

You can set them individually or using the shorthand.

\`\`\`css
.box {
  /* Longhand */
  border-width: 2px;
  border-style: solid;
  border-color: #333;

  /* Shorthand: width style color */
  border: 2px solid #333;
}
\`\`\`

You can also style each side individually:
\`\`\`css
.special-box {
  border-top: 4px dotted blue;
  border-bottom: 2px solid red;
}
\`\`\`

## Rounded Corners with border-radius
The \`border-radius\` property allows you to create rounded corners on elements.

\`\`\`css
.card {
  /* All four corners have a 10px radius */
  border-radius: 10px;
}

.circle {
  width: 100px;
  height: 100px;
  /* A 50% radius on a square makes a perfect circle */
  border-radius: 50%;
}

.pill-button {
  /* You can set individual corners: top-left, top-right, bottom-right, bottom-left */
  border-radius: 50px 0 0 50px;
}
\`\`\`

## Outlines
An outline is a line drawn *outside* an element's border. It looks similar to a border, but has key differences:

- **Outlines do not take up space.** Adding an outline will not affect the element's dimensions or cause other elements to move. This makes them perfect for focus states.
- **Outlines cannot have a radius.** They are always rectangular.
- **You cannot set individual sides** for an outline.

The main properties are \`outline-width\`, \`outline-style\`, \`outline-color\`, and the shorthand \`outline\`.

\`\`\`css
/* Common use case: showing focus on a button or input */
button:focus {
  /* Remove default browser outline if you're replacing it */
  outline: none;
  /* Add a custom outline */
  outline: 3px solid dodgerblue;
}
\`\`\`

### outline-offset
This property allows you to add space between the outline and the element's border.
\`\`\`css
button:focus {
  outline: 2px dashed green;
  outline-offset: 4px; /* Creates a 4px gap */
}
\`\`\`
This is great for accessibility, as it makes the focus indicator highly visible without touching the element itself.
`,
  keyTerms: [
    { term: "border", definition: "A CSS property used to set an element's border width, style, and color. It is part of the box model and takes up space." },
    { term: "border-radius", definition: "A CSS property that rounds the corners of an element's outer border edge." },
    { term: "border-style", definition: "A CSS property that sets the style of an element's four borders (e.g., solid, dotted, dashed)." },
    { term: "outline", definition: "A line drawn around an element, outside the border. It does not take up space in the layout." },
    { term: "outline-offset", definition: "A CSS property that sets the space between an outline and the edge or border of an element." }
  ],
  exercises: [
    {
      id: 1,
      title: "Border Style Showcase",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML file with several <div> elements.",
        "Give each div a different class.",
        "Apply a different `border-style` to each div: `solid`, `dotted`, `dashed`, `double`.",
        "Experiment with different `border-width` and `border-color` values for each."
      ]
    },
    {
      id: 2,
      title: "Creating a Profile Card",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a 'profile card' <div>.",
        "Give it a light gray `border` using the shorthand property.",
        "Use `border-radius` to give the card slightly rounded corners (e.g., 8px).",
        "Inside the card, add an <img> tag. Give this image a `border-radius` of 50% to make it a circle."
      ]
    },
    {
      id: 3,
      title: "Accessible Form Inputs",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create an HTML file with an <input> field and a <button>.",
        "Give the input a default `border`.",
        "When the input is in its `:focus` state, change its `border-color` to a highlight color (e.g., blue).",
        "For the button, use the `:focus` state to add an `outline` with an `outline-offset`. Notice how the outline doesn't push other elements away, unlike a border."
      ]
    },
    {
      id: 4,
      title: "Tab-like Navigation",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create three <a> tags to act as navigation tabs.",
        "Use individual border properties (`border-top`, `border-left`, `border-right`) to create the top and side borders of a tab.",
        "Use `border-bottom: none` to make it look like it's connected to the content below.",
        "Use `border-top-left-radius` and `border-top-right-radius` to round the top corners of the tabs."
      ]
    },
    {
      id: 5,
      title: "Creative Shapes with Borders",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a square <div> with no background color.",
        "Give it a very thick top border (e.g., `border-top: 20px solid red;`) but no other borders (set them to transparent or width 0).",
        "By setting a width and height of 0 on the element itself, you can create a triangle. Experiment with this technique.",
        "Try using different `border-radius` values on a single element to create organic, leaf-like shapes."
      ]
    }
  ]
};
