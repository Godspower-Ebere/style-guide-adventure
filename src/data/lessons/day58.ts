
import { DayLesson } from "../types";

export const day58: DayLesson = {
  day: 58,
  title: "CSS Filters and Effects",
  category: "Advanced CSS",
  description: "Learn how to apply graphical effects like blur, saturation, and drop shadows to elements using the powerful `filter` and `backdrop-filter` properties.",
  learningObjectives: [
    "Apply common filter functions like `blur()`, `brightness()`, `saturate()`, and `grayscale()`.",
    "Combine multiple filter functions to create unique visual effects.",
    "Understand the difference between `filter` and `backdrop-filter`.",
    "Use `backdrop-filter` to create frosted glass effects on overlays."
  ],
  detailedExplanation: `
CSS filters allow you to apply graphical effects, similar to those in Photoshop, directly to elements in the browser. They are hardware-accelerated and highly performant.

### The \`filter\` Property
The \`filter\` property applies effects to an element itself. You can chain multiple filter functions together by separating them with a space.

**Common Filter Functions:**
- \`blur(radius)\`: Applies a Gaussian blur. E.g., \`blur(5px)\`.
- \`brightness(amount)\`: Makes the element brighter or darker. \`1\` is normal, \`0\` is black, \`2\` is double brightness.
- \`contrast(amount)\`: Adjusts the contrast. \`1\` is normal.
- \`grayscale(amount)\`: Converts the element to grayscale. \`1\` is fully grayscale, \`0\` is original.
- \`saturate(amount)\`: Adjusts the color saturation. \`1\` is normal, \`0\` is grayscale, \`2\` is double saturation.
- \`sepia(amount)\`: Converts the element to sepia. \`1\` is fully sepia.
- \`hue-rotate(angle)\`: Rotates the colors around the color wheel. E.g., \`hue-rotate(90deg)\`.
- \`invert(amount)\`: Inverts the colors. \`1\` is fully inverted.
- \`opacity(amount)\`: Applies transparency. \`0\` is fully transparent, \`1\` is fully opaque.
- \`drop-shadow(x y blur color)\`: Applies a drop shadow that conforms to the shape of the element's content (unlike \`box-shadow\`, which is always rectangular). This is great for transparent PNGs.

\`\`\`css
.image-moody {
  /* Chain multiple filters together */
  filter: grayscale(0.5) brightness(0.9) contrast(1.2);
  transition: filter 0.3s ease;
}
.image-moody:hover {
  filter: grayscale(0) brightness(1) contrast(1); /* Return to normal on hover */
}

.icon-with-shadow {
  /* Creates a shadow that matches the icon's shape */
  filter: drop-shadow(2px 4px 6px black);
}
\`\`\`

### The \`backdrop-filter\` Property
While \`filter\` affects the element itself, \`backdrop-filter\` applies effects to the area *behind* the element. This is the key to creating the "frosted glass" or "acrylic" UI effect popularized by modern operating systems.

**For \`backdrop-filter\` to work, the element must have some transparency.** You need to use a `background-color` with an alpha channel (e.g., `rgba()` or `hsla()`).

\`\`\`css
.modal-header {
  position: sticky;
  top: 0;
  /* 
    The background color MUST have transparency for the backdrop-filter to be visible.
    Here, it's 30% opaque white.
  */
  background-color: rgba(255, 255, 255, 0.3);
  
  /* Apply a blur to whatever is BEHIND this element */
  backdrop-filter: blur(10px);
}
\`\`\`
As you scroll content under this header, the content will appear blurred "through" the header, creating a beautiful depth effect. This works with any filter function, not just \`blur()\`.

**Performance Note:** Both \`filter\` and \`backdrop-filter\` can be computationally expensive, especially \`blur()\` on large areas. Use them judiciously and test for performance on less powerful devices. Creating a new stacking context with `will-change: transform` on the filtered element can sometimes help the browser optimize rendering.
`,
  keyTerms: [
    { term: "filter", definition: "A CSS property that applies graphical effects like blur, brightness, or saturation directly to an element." },
    { term: "backdrop-filter", definition: "A CSS property that applies filter effects to the area behind an element. Requires the element to have a semi-transparent background." },
    { term: "blur()", definition: "A filter function that applies a Gaussian blur to an element, making it fuzzy." },
    { term: "drop-shadow()", definition: "A filter function that creates a shadow that conforms to the non-transparent parts of an element, unlike the rectangular `box-shadow`." },
    { term: "Frosted Glass Effect", definition: "A popular UI effect where a semi-transparent overlay blurs the content behind it, created using `backdrop-filter: blur()`." }
  ],
  exercises: [
    {
      id: 1,
      title: "Image Hover Effects",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Add an `img` to your page.",
        "By default, apply a grayscale filter: `filter: grayscale(1);`.",
        "Add a `transition: filter 0.4s ease;` to the image.",
        "On `:hover`, set the filter back to `grayscale(0);`.",
        "Hover over the image to see it smoothly transition from black and white to color."
      ]
    },
    {
      id: 2,
      title: "Drop Shadow on a PNG",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Find a transparent PNG icon or logo (e.g., a simple shape).",
        "Add it to your page with an `<img>` tag.",
        "Apply a standard `box-shadow` to it and notice how the shadow is rectangular.",
        "Now, remove the `box-shadow` and apply `filter: drop-shadow(3px 5px 5px rgba(0,0,0,0.5));`.",
        "Observe how this new shadow perfectly matches the contours of your PNG image."
      ]
    },
    {
      id: 3,
      title: "Frosted Glass Card",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a container `div` with a busy, colorful background image.",
        "Inside it, create a smaller `div` to act as a 'card'.",
        "Position the card in the center of the container.",
        "Give the card a semi-transparent background color: `background-color: rgba(255, 255, 255, 0.2);`.",
        "Add `backdrop-filter: blur(8px);` to the card.",
        "Add a border and some text to the card to complete the frosted glass effect."
      ]
    },
    {
      id: 4,
      title: "Photo Filter Combination",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Take an image and experiment with combining multiple `filter` functions.",
        "Try to create a 'vintage' photo effect by combining `sepia()`, `contrast()`, and `brightness()`.",
        "Example: `filter: sepia(0.6) contrast(1.1) brightness(0.9);`.",
        "Adjust the values to create different moods."
      ]
    }
  ]
};
