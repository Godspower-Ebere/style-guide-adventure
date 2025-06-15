
import { DayLesson } from "../types";

export const day30: DayLesson = {
  day: 30,
  title: "CSS Colors and Backgrounds",
  category: "CSS Basics",
  description: "Learn how to apply colors and backgrounds to elements, including solid colors, gradients, and images.",
  learningObjectives: [
    "Understand and use various CSS color formats like HEX, RGB/RGBA, and HSL/HSLA.",
    "Master background properties including color, image, position, repeat, and size.",
    "Learn to create and apply linear and radial gradients.",
    "Effectively use the shorthand 'background' property to write cleaner code."
  ],
  detailedExplanation: `
Colors and backgrounds are fundamental to creating visually appealing web designs. CSS provides a rich set of properties to control them.

## CSS Color Formats
There are several ways to define colors in CSS.

### 1. Color Keywords
Simple, predefined color names.
\\\`\\\`\\\`css
p { color: tomato; }
h1 { color: steelblue; }
\\\`\\\`\\\`

### 2. HEX (Hexadecimal)
A six-digit code representing Red, Green, and Blue (RRGGBB). Can also be a three-digit shorthand (RGB).
\\\`\\\`\\\`css
/* #RRGGBB */
.header { background-color: #2c3e50; } 
/* #RGB shorthand for #FF6600 */
.button { background-color: #f60; }
\\\`\\\`\\\`

### 3. RGB and RGBA
Defines a color using its Red, Green, and Blue values (0-255). RGBA adds an Alpha channel for transparency (0 to 1).
\\\`\\\`\\\`css
/* rgb(red, green, blue) */
p { color: rgb(51, 51, 51); }
/* rgba(red, green, blue, alpha) */
.overlay { background-color: rgba(0, 0, 0, 0.5); } /* 50% transparent black */
\\\`\\\`\\\`

### 4. HSL and HSLA
Defines a color using Hue, Saturation, and Lightness. HSLA adds an Alpha channel. This can be more intuitive for adjusting colors.
- **Hue**: A degree on the color wheel (0-360). 0 is red, 120 is green, 240 is blue.
- **Saturation**: Intensity of the color (0% is a shade of gray, 100% is full color).
- **Lightness**: Brightness of the color (0% is black, 100% is white).
\\\`\\\`\\\`css
/* hsl(hue, saturation, lightness) */
.primary { color: hsl(240, 100%, 50%); } /* A vibrant blue */
/* hsla(hue, saturation, lightness, alpha) */
.tooltip { background-color: hsla(0, 0%, 100%, 0.9); } /* 90% transparent white */
\\\`\\\`\\\`

## CSS Background Properties

### background-color
Sets a solid background color.
\\\`\\\`\\\`css
body { background-color: #f4f4f4; }
\\\`\\\`\\\`

### background-image
Sets one or more background images.
\\\`\\\`\\\`css
.hero { background-image: url('hero-image.jpg'); }
\\\`\\\`\\\`

### background-repeat
Controls if/how a background image repeats.
- \`repeat\` (default): Repeats horizontally and vertically.
- \`repeat-x\`: Repeats only horizontally.
- \`repeat-y\`: Repeats only vertically.
- \`no-repeat\`: Does not repeat.
\\\`\\\`\\\`css
.pattern {
  background-image: url('tiny-pattern.png');
  background-repeat: repeat;
}
\\\`\\\`\\\`

### background-position
Sets the starting position of the background image.
\\\`\\\`\\\`css
.icon {
  background-image: url('icon.png');
  background-repeat: no-repeat;
  background-position: center top; /* or 50% 0% */
}
\\\`\\\`\\\`

### background-size
Specifies the size of the background image.
- \`auto\` (default)
- \`cover\`: Scales the image to cover the entire container, potentially cropping the image.
- \`contain\`: Scales the image to be as large as possible without cropping.
- \`<length>\` or \`<percentage>\`: e.g., \`100px 50px\` or \`50% 25%\`.
\\\`\\\`\\\`css
.hero {
  background-image: url('hero.jpg');
  background-size: cover;
  background-position: center;
}
\\\`\\\`\\\`

### background-attachment
Sets whether a background image scrolls with the rest of the page or is fixed.
- \`scroll\` (default): The background scrolls with the page.
- \`fixed\`: The background is fixed relative to the viewport.
\\\`\\\`\\\`css
.parallax {
  background-image: url('parallax-bg.jpg');
  background-attachment: fixed;
}
\\\`\\\`\\\`

## CSS Gradients
Gradients are treated as images and used with \`background-image\`.

### Linear Gradients
\\\`\\\`\\\`css
.gradient-box {
  background-image: linear-gradient(to right, #ff7e5f, #feb47b);
}
\\\`\\\`\\\`

### Radial Gradients
\\\`\\\`\\\`css
.radial-box {
  background-image: radial-gradient(circle, #30cfd0, #330867);
}
\\\`\\\`\\\`

## Shorthand and Multiple Backgrounds

### background (shorthand)
You can combine all properties into one for cleaner code.
\\\`\\\`\\\`css
.shorthand-box {
  background: #f0f0f0 url('image.png') no-repeat center center / cover;
}
\\\`\\\`\\\`

### Multiple Backgrounds
Separate multiple background layers with commas. The first one listed is on top.
\\\`\\\`\\\`css
.multi-bg {
  background-image: url('foreground.png'), url('background.jpg');
  background-repeat: no-repeat, no-repeat;
  background-position: center, center;
  background-size: 50%, cover;
}
\\\`\\\`\\\`
`,
  keyTerms: [
    { term: "HEX Color", definition: "A six-digit hexadecimal number used to represent colors, e.g., #FFFFFF for white." },
    { term: "RGBA/HSLA", definition: "Color models (Red-Green-Blue and Hue-Saturation-Lightness) that include an Alpha channel for controlling opacity." },
    { term: "background-size: cover", definition: "A value that scales a background image to completely cover its container, even if it means cropping the image." },
    { term: "background-size: contain", definition: "A value that scales a background image to be as large as possible while ensuring the entire image is visible within its container." },
    { term: "Linear Gradient", definition: "A CSS image created by a smooth transition between two or more specified colors along a straight line." },
    { term: "Radial Gradient", definition: "A CSS image created by a smooth transition between two or more specified colors radiating from an origin." }
  ],
  exercises: [
    {
      id: 1,
      title: "Color Playground",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML file with five <div> elements.",
        "Give each <div> a unique class name (e.g., 'box1', 'box2', etc.).",
        "Style each <div> to be a 100x100 pixel square.",
        "Give each box a different background color using a different color format for each: keyword, 3-digit HEX, 6-digit HEX, RGB, and HSL.",
        "Inside each box, add a <p> tag and set its text color to be in high contrast with the background."
      ]
    },
    {
      id: 2,
      title: "Hero Section Background",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an HTML file with a <section> that will act as a 'hero' banner.",
        "Set the section to be at least 400px high.",
        "Find a large, royalty-free image online to use as a background.",
        "Apply the image using `background-image`.",
        "Use `background-size: cover` to ensure the image always fills the section.",
        "Use `background-position: center` to keep the image centered.",
        "Use `background-repeat: no-repeat` to prevent it from tiling.",
        "Add an <h1> and a <p> inside the section and set their text color to white to be visible on top of the image."
      ]
    },
    {
      id: 3,
      title: "Gradient Buttons",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create an HTML file with three <button> elements.",
        "Style the buttons with padding, a border, and white text.",
        "For the first button, apply a simple two-color linear gradient.",
        "For the second button, create a three-color linear gradient that goes from top-left to bottom-right.",
        "For the third button, apply a radial gradient.",
        "Add a :hover state to each button that slightly changes the gradient (e.g., by changing a color or the angle)."
      ]
    },
    {
      id: 4,
      title: "Creating a Patterned Background",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Find a small, seamless pattern image online (search for 'subtle patterns').",
        "Create an HTML file and set this pattern as the background image for the <body>.",
        "Use `background-repeat: repeat` to make it tile across the whole page.",
        "Create a central content <div> on the page. Give this div a solid, slightly transparent background color using RGBA or HSLA so the pattern behind it is still visible.",
        "Add some text content inside the central div to see the full effect."
      ]
    },
    {
      id: 5,
      title: "Multi-Layer Background",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create an HTML file with a single <div> that takes up most of the viewport.",
        "Find a large background image (like a landscape) and a smaller foreground image with a transparent background (like a logo or an icon, in .png or .svg format).",
        "Use the multiple background syntax to apply both images to the <div>.",
        "The landscape image should be the last one in the list (the bottom layer) and should have `background-size: cover`.",
        "The foreground image should be the first in the list (the top layer), set to `no-repeat`, and positioned somewhere specific (e.g., `bottom right`).",
        "As a bonus, add a linear gradient as the top-most layer to create a color overlay on everything."
      ]
    }
  ]
};
