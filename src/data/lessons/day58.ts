
import { DayLesson } from "../types";

export const day58: DayLesson = {
  day: 58,
  title: "CSS Filters",
  category: "Advanced CSS",
  description: "Apply graphical effects like blur, brightness, contrast, and saturation to elements directly in CSS, similar to filters in photo editing software.",
  learningObjectives: [
    "Understand the purpose of the `filter` property in CSS.",
    "Apply common filter functions like `blur()`, `brightness()`, `contrast()`, and `grayscale()`.",
    "Combine multiple filter functions to create complex effects.",
    "Use the `backdrop-filter` property to apply filters to the area behind an element."
  ],
  detailedExplanation: `
The CSS \`filter\` property lets you apply graphical effects to an element. It's commonly used on images, but it can be applied to any element.

### The \`filter\` Property
You apply one or more filter functions as the value for the \`filter\` property.

\\\`\\\`\\\`css
/* Apply a single filter to an image */
img {
  filter: blur(5px);
}

/* Chain multiple filters together */
.fancy-image {
  filter: contrast(150%) brightness(1.2) saturate(130%);
}
\\\`\\\`\\\`

### Common Filter Functions

- \`blur(radius)\`: Applies a Gaussian blur. The radius determines how many pixels blend into each other. e.g., \`blur(5px)\`.
- \`brightness(amount)\`: Makes the element brighter or darker. \`1\` or \`100%\` is normal brightness. \`0\` is black, \`2\` (\`200%\`) is double brightness.
- \`contrast(amount)\`: Adjusts the contrast. \`1\` or \`100%\` is normal. \`0\` is completely gray. Higher values increase contrast.
- \`grayscale(amount)\`: Converts the element to grayscale. \`1\` or \`100%\` is completely grayscale. \`0\` is the original.
- \`saturate(amount)\`: Adjusts the color saturation. \`1\` or \`100%\` is normal. \`0\` is completely unsaturated (grayscale). \`2\` (\`200%\`) doubles the saturation.
- \`sepia(amount)\`: Converts the element to a sepia tone. \`1\` or \`100%\` is full sepia.
- \`invert(amount)\`: Inverts the colors. \`1\` or \`100%\` is a full inversion.
- \`opacity(amount)\`: Applies transparency. \`1\` or \`100%\` is fully opaque. \`0\` is fully transparent. (Note: this is different from the \`opacity\` property, as it can be hardware accelerated).
- \`drop-shadow(x y blur color)\`: Applies a drop shadow directly to the element's shape, respecting transparency. This is much more powerful than \`box-shadow\` for non-rectangular shapes.

\\\`\\\`\\\`css
.logo-with-shadow {
  /* This will create a shadow that follows the exact shape of the logo.png, not its bounding box */
  filter: drop-shadow(2px 4px 6px black);
}
\\\`\\\`\\\`

### The \`backdrop-filter\` Property
While \`filter\` applies to the element itself, \`backdrop-filter\` applies a filter to the area *behind* the element.

This is perfect for creating "frosted glass" effects. For it to work, the element itself must have some transparency.

\\\`\\\`\\\`html
<div class="background-image">
  <div class="frosted-glass-panel">
    <h2>Frosted Glass</h2>
  </div>
</div>
\\\`\\\`\\\`
\\\`\\\`\\\`css
.frosted-glass-panel {
  /* The element itself needs some transparency for the backdrop to be visible */
  background-color: rgba(255, 255, 255, 0.3);

  /* Apply the filter to whatever is BEHIND this element */
  backdrop-filter: blur(10px);
}
\\\`\\\`\\\`
This will make the \`frosted-glass-panel\` look like a blurry, semi-transparent piece of glass, with the background image showing through in a distorted way. It's a very popular modern UI effect.
`,
  keyTerms: [
    { term: "filter", definition: "A CSS property that applies graphical effects such as blur or color shifting to an element." },
    { term: "blur()", definition: "A filter function that applies a Gaussian blur effect to an element." },
    { term: "contrast()", definition: "A filter function that adjusts the difference between the light and dark parts of an element." },
    { term: "drop-shadow()", definition: "A filter function that applies a drop shadow that conforms to the shape of the element, including transparency." },
    { term: "backdrop-filter", definition: "A CSS property that lets you apply graphical effects to the area behind an element. The element needs to be semi-transparent to see the effect." }
  ],
  exercises: [
    {
      id: 1,
      title: "Image Filter on Hover",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Add an `<img>` to your page.",
        "By default, make it grayscale using `filter: grayscale(100%);`.",
        "Add a `transition: filter 0.3s ease;` to the image.",
        "On `:hover`, change the filter back to normal: `filter: grayscale(0%);`.",
        "Observe the smooth transition from black and white to color."
      ]
    },
    {
      id: 2,
      title: "Complex Filter Combination",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Add an `<img>` to your page.",
        "Apply multiple filters at once to create a vintage photo effect.",
        "Try combining `sepia()`, `contrast()`, `brightness()`, and a subtle `saturate()`. For example: `filter: sepia(0.6) contrast(1.2) brightness(0.9) saturate(1.2);`",
        "Experiment with different values to create your own unique look."
      ]
    },
    {
      id: 3,
      title: "Frosted Glass Header",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a page with a large, colorful background image and some scrollable content.",
        "Create a header element and make it stick to the top of the viewport using `position: sticky; top: 0;`.",
        "Give the header a semi-transparent background color, e.g., `background-color: rgba(255, 255, 255, 0.5);`.",
        "Apply `backdrop-filter: blur(8px);` to the header.",
        "As you scroll the page, notice how the content blurs as it passes behind the sticky header."
      ]
    },
    {
      id: 4,
      title: "Drop Shadow on a PNG",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Find a PNG image with a transparent background (like a logo or an icon).",
        "Add it to your page with an `<img>` tag.",
        "First, apply a `box-shadow` to it and notice how the shadow is just a rectangle around the image.",
        "Then, remove the `box-shadow` and apply a `filter: drop-shadow(...)` instead.",
        "Observe how the drop-shadow perfectly follows the contours of the image content, ignoring the transparent areas."
      ]
    }
  ]
};
