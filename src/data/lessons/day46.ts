
import { DayLesson } from "../types";

export const day46: DayLesson = {
  day: 46,
  title: "Manipulating Elements with CSS Transform",
  category: "Advanced CSS",
  description: "Learn how to translate, rotate, scale, and skew elements in 2D and 3D space without affecting the document flow, opening up a world of creative UI possibilities.",
  learningObjectives: [
    "Understand the purpose of the `transform` property and how it differs from standard layout properties.",
    "Confidently apply 2D transform functions: `translate()`, `rotate()`, `scale()`, and `skew()`.",
    "Combine multiple transform functions in a single declaration and understand the importance of their order.",
    "Utilize `transform-origin` to control the pivot point for rotations and scaling operations.",
    "Gain an introductory understanding of 3D transforms, including `perspective`, `rotate3d()`, and `translate3d()`."
  ],
  detailedExplanation: `
The CSS \`transform\` property lets you modify the coordinate space of an element. This allows you to move, rotate, scale, and skew elements. A key feature of \`transform\` is that it doesn't affect the layout of other elements—the space the element *originally* occupied is preserved. This makes it highly performant for animations.

### 2D Transform Functions

**1. \`translate(x, y)\`**
Moves an element horizontally and/or vertically.
- \`translateX(x)\`: Moves along the x-axis.
- \`translateY(y)\`: Moves along the y-axis.
Positive values move it right/down; negative values move it left/up.
\`\`\`css
.box {
  /* Moves the element 50px to the right and 20px down */
  transform: translate(50px, 20px);
}
\`\`\`

**2. \`scale(x, y)\`**
Changes the size of an element.
- \`scaleX(x)\`: Scales horizontally.
- \`scaleY(y)\`: Scales vertically.
A value of \`1\` is the original size. \`1.5\` is 50% larger, and \`0.5\` is 50% smaller.
\`\`\`css
.box:hover {
  /* Makes the element 20% larger on hover */
  transform: scale(1.2);
}
\`\`\`

**3. \`rotate(angle)\`**
Rotates an element around its center. The angle is specified in degrees (\`deg\`), gradians (\`grad\`), radians (\`rad\`), or turns (\`turn\`).
\`\`\`css
.icon {
  /* Rotates the icon 45 degrees clockwise */
  transform: rotate(45deg);
}
\`\`\`

**4. \`skew(x-angle, y-angle)\`**
Skews or distorts an element along the x and y axes.
- \`skewX(angle)\`: Skews along the x-axis.
- \`skewY(angle)\`: Skews along the y-axis.
\`\`\`css
.card {
  /* Tilts the element by 20 degrees along the x-axis */
  transform: skewX(20deg);
}
\`\`\`

### Combining Transforms & \`transform-origin\`
You can apply multiple transform functions in one declaration. **The order matters!** Transforms are applied from right to left.

\`\`\`css
/* This will first rotate the element, THEN scale it. */
transform: scale(1.5) rotate(45deg);

/* This will first scale the element, THEN rotate the now-larger element. */
transform: rotate(45deg) scale(1.5);
\`\`\`

The \`transform-origin\` property changes the point around which a transform is applied. The default is \`50% 50%\` or \`center\`.

\`\`\`css
.bar {
  transform-origin: left center; /* or 0 50% */
}
.bar:hover {
  /* The rotation will now pivot from the left edge */
  transform: rotate(90deg);
}
\`\`\`

### Introduction to 3D Transforms
To enter 3D space, the parent element needs a \`perspective\` property. This defines how "deep" the 3D scene is.

\`\`\`css
.scene {
  perspective: 800px;
}
.card {
  /* This card will now rotate in 3D space within the scene */
  transform: rotateY(45deg);
}
\`\`\`
Common 3D functions include:
- \`translate3d(x,y,z)\`
- \`scale3d(x,y,z)\`
- \`rotateX(angle)\`, \`rotateY(angle)\`, \`rotateZ(angle)\` (Z is the same as 2D rotate)
Using 3D transforms like \`translate3d(x, y, 0)\` can force hardware acceleration in browsers, leading to smoother animations even for 2D movement.
`,
  keyTerms: [
    { term: "transform", definition: "A CSS property that allows you to translate, rotate, scale, and skew elements." },
    { term: "translate()", definition: "A transform function that moves an element in 2D space without affecting the layout flow." },
    { term: "rotate()", definition: "A transform function that rotates an element around a given point." },
    { term: "scale()", definition: "A transform function that resizes an element." },
    { term: "skew()", definition: "A transform function that distorts an element by a given angle." },
    { term: "transform-origin", definition: "A CSS property that sets the origin point for an element's transformations." },
    { term: "perspective", definition: "A CSS property applied to a parent element to give its children a 3D-space context." }
  ],
  exercises: [
    {
      id: 1,
      title: "Hover & Lift Effect",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a simple card element.",
        "Add a `transition` for the `transform` property.",
        "On hover, apply two transform functions: `translateY(-10px)` to move it up and `scale(1.05)` to make it slightly bigger.",
        "Combine them in a single `transform` property: `transform: translateY(-10px) scale(1.05);`.",
        "Observe how the card appears to lift off the page on hover."
      ]
    },
    {
      id: 2,
      title: "Flipping Card",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create a container `<div>` with `position: relative;` and a fixed size. Also give it `perspective: 1000px;`.",
        "Inside, create two `<div>`s for the front and back of the card. Both should be `position: absolute;`, `width: 100%;`, `height: 100%;`.",
        "Add the property `backface-visibility: hidden;` to both front and back divs. This hides the back side of an element when it's facing away from the user.",
        "Style the 'back' div with `transform: rotateY(180deg);` so it starts off flipped.",
        "Create an inner `<div>` that holds both cards and add a `transition` for `transform`.",
        "On hover of the main container, apply `transform: rotateY(180deg);` to the inner div.",
        "This will create the illusion of the card flipping over."
      ]
    },
    {
      id: 3,
      title: "Icon Rotation with Custom Origin",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a loading icon (you can use a simple `<div>` or an SVG).",
        "By default, rotating it will spin it around its center.",
        "Now, set its `transform-origin` to something else, like `70% 70%`.",
        "Create a `@keyframes` animation that rotates the icon from `0deg` to `360deg` infinitely.",
        "Notice how the rotation now has a different, off-center wobble, which can be used for interesting effects."
      ]
    },
    {
      id: 4,
      title: "3D Parallax on Mouse Move",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "This requires a little JavaScript.",
        "Create a container `<div>` that takes up a large portion of the screen. Give it a `perspective` value.",
        "Inside, place an image or a card.",
        "Add a JavaScript event listener for `mousemove` on the container.",
        "In the event listener, get the mouse's X and Y coordinates relative to the center of the container.",
        "Use these coordinates to dynamically update the `transform` property of the inner element. For example: `element.style.transform = \`rotateY($\{mouseX / 10}deg) rotateX($\{-mouseY / 10}deg)\`;`",
        "As you move your mouse over the container, the inner element will appear to tilt and move in 3D space, creating a parallax effect."
      ]
    }
  ]
};
