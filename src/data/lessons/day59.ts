
import { DayLesson } from "../types";

export const day59: DayLesson = {
  day: 59,
  title: "CSS Blend Modes",
  category: "Advanced CSS",
  description: "Learn how to blend colors and images together directly in the browser using the `mix-blend-mode` and `background-blend-mode` properties.",
  learningObjectives: [
    "Understand the concept of blend modes and how they affect colors.",
    "Use `mix-blend-mode` to blend an element with the elements behind it.",
    "Use `background-blend-mode` to blend multiple background images and colors together on a single element.",
    "Identify common use cases for blend modes, such as colorizing images and creating text effects."
  ],
  detailedExplanation: `
CSS blend modes allow you to control how an element's content (or background) blends with the content of the element below it (or its own background layers). This brings Photoshop-like blending capabilities directly into CSS.

There are two main properties for blending:

### 1. \`mix-blend-mode\`
This property specifies how an element's content should blend with the content of the element(s) *behind* it.

\`\`\`html
<div class="background-image"></div>
<div class="text-container">
  <h1>HELLO</h1>
</div>
\`\`\`
\`\`\`css
.background-image {
  background-image: url('colorful-galaxy.jpg');
}
.text-container h1 {
  font-size: 10rem;
  color: white;
  text-align: center;
  /* This will blend the white text with the galaxy image behind it */
  mix-blend-mode: overlay;
}
\`\`\`

### 2. \`background-blend-mode\`
This property is used to blend **multiple backgrounds on a single element**. This could be multiple background images, or a background image and a background color.

\`\`\`css
.duotone-image {
  background-image: url('portrait.jpg'), linear-gradient(to right, blue, red);
  background-size: cover;
  
  /* This blends the portrait with the gradient */
  background-blend-mode: multiply;
}
\`\`\`

### Common Blend Mode Values
Many blend modes are available, each with a different mathematical formula for combining colors. Here are some of the most useful ones:

- \`multiply\`: The result is the product of the colors. The final color is always darker. Great for creating shadows or colorizing grayscale images.
- \`screen\`: The opposite of multiply. The final color is always lighter. Great for glowing or light effects.
- \`overlay\`: A combination of \`multiply\` and \`screen\`. Dark parts get darker, light parts get lighter. A very common mode for adding contrast.
- \`difference\`: Subtracts the darker color from the lighter color. White text on a black background becomes white, but on a white background, it becomes black (invisible). Creates cool inversion effects.
- \`color\`: Takes the hue and saturation of the top layer and the luminosity of the bottom layer. Perfect for colorizing a black and white image.
- \`luminosity\`: The opposite of \`color\`. Takes the luminosity of the top layer and the hue/saturation of the bottom.
- \`hard-light\`: A more intense version of \`overlay\`.
- \`soft-light\`: A gentler version of \`overlay\`.

### Use Cases
- **Colorizing Images:** Place a colored `div` over a grayscale image and use `mix-blend-mode: color;`.
- **Duotone Images:** Use `background-blend-mode` with a grayscale image and a gradient.
- **Text Effects:** Blend large, bold text into a background image for dramatic effect.
- **Knockout Text:** A white text element with `mix-blend-mode: screen` on top of a white background will be invisible, but if you place it over an image, the image will show through the text.
`,
  keyTerms: [
    { term: "Blend Mode", definition: "A method for determining how two layers are mixed together to create a final, blended result." },
    { term: "mix-blend-mode", definition: "A CSS property that defines how an entire element's content blends with the content of the elements behind it." },
    { term: "background-blend-mode", definition: "A CSS property that defines how an element's multiple background layers (images and colors) blend with each other." },
    { term: "Multiply", definition: "A blend mode that results in a darker color, useful for shadows and tinting." },
    { term: "Screen", definition: "A blend mode that results in a lighter color, useful for glows and highlights." },
    { term: "Overlay", definition: "A blend mode that combines Multiply and Screen to increase contrast." }
  ],
  exercises: [
    {
      id: 1,
      title: "Colorize a Grayscale Image",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a container `div`.",
        "Inside, place an `<img>` with a black and white photo. Set its `width` and `height` to 100%.",
        "Also inside the container, create a `div` for the color overlay. Position it absolutely to cover the image and give it a solid color (e.g., `background-color: steelblue;`).",
        "On the color overlay `div`, apply `mix-blend-mode: color;`.",
        "Observe how the image is now colorized with the blue hue."
      ]
    },
    {
      id: 2,
      title: "Duotone Image with `background-blend-mode`",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a single `div` and give it a fixed size.",
        "Apply multiple backgrounds to it: a grayscale image URL and a two-color CSS gradient.",
        "Example: `background-image: url('...'), linear-gradient(deeppink, cyan);`",
        "Apply `background-blend-mode: multiply;` (or try others like `screen` or `overlay`).",
        "This creates a duotone effect with only one HTML element."
      ]
    },
    {
      id: 3,
      title: "Knockout Text Effect",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a container `div` with a colorful background image.",
        "Create a `div` on top of it with a solid white background (`background-color: white;`).",
        "Inside the white `div`, add an `<h1>` with some large, bold, black text.",
        "On the `<h1>`, apply `mix-blend-mode: difference;` and `color: white;`.",
        "The text will appear 'knocked out', showing the background image through it. This happens because 'difference' with white inverts the color behind it."
      ]
    },
    {
      id: 4,
      title: "Text on Image",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Create a container with a background image.",
        "Place an `<h1>` with some text over it.",
        "Experiment with different `mix-blend-mode` values on the `<h1>` (e.g., `overlay`, `soft-light`, `difference`) to see how it affects the readability and style of the text against the image."
      ]
    }
  ]
};
