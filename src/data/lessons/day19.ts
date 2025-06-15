
import { DayLesson } from "../types";

export const day19: DayLesson = {
  day: 19,
  title: "HTML Canvas Basics",
  category: "HTML5 Features",
  description: "Learn to create dynamic graphics and animations using the HTML5 Canvas element for interactive web content.",
  learningObjectives: [
    "Understand the HTML5 Canvas element and its purpose.",
    "Learn to draw basic shapes and paths on canvas.",
    "Master canvas drawing methods and properties.",
    "Create interactive graphics using JavaScript and canvas."
  ],
  detailedExplanation: `
The HTML5 Canvas element provides a drawing surface for creating graphics, animations, and interactive content using JavaScript.

## Canvas Element Basics
The canvas element creates a rectangular drawing area:

\`\`\`html
<canvas id="myCanvas" width="400" height="300">
  Your browser does not support the canvas element.
</canvas>
\`\`\`

## Getting the Drawing Context
To draw on canvas, you need to get the 2D rendering context:

\`\`\`html
<script>
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
</script>
\`\`\`

## Drawing Basic Shapes
### Rectangle
\`\`\`html
<script>
// Filled rectangle
ctx.fillRect(10, 10, 100, 50);

// Outlined rectangle
ctx.strokeRect(120, 10, 100, 50);
</script>
\`\`\`

### Circle
\`\`\`html
<script>
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.fill();
</script>
\`\`\`

### Line
\`\`\`html
<script>
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 100);
ctx.stroke();
</script>
\`\`\`

## Colors and Styles
\`\`\`html
<script>
// Fill color
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 50, 50);

// Stroke color
ctx.strokeStyle = 'blue';
ctx.strokeRect(70, 10, 50, 50);

// Line width
ctx.lineWidth = 5;
ctx.strokeRect(130, 10, 50, 50);
</script>
\`\`\`

## Complete Canvas Example
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Canvas Drawing</title>
</head>
<body>
  <h1>My Canvas Art</h1>
  <canvas id="drawingCanvas" width="500" height="400">
    Canvas not supported
  </canvas>
  
  <script>
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    
    // Draw a house
    ctx.fillStyle = 'brown';
    ctx.fillRect(150, 200, 200, 150);
    
    // Roof
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(130, 200);
    ctx.lineTo(250, 100);
    ctx.lineTo(370, 200);
    ctx.fill();
    
    // Door
    ctx.fillStyle = 'darkbrown';
    ctx.fillRect(220, 280, 60, 70);
    
    // Windows
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(170, 230, 40, 40);
    ctx.fillRect(290, 230, 40, 40);
  </script>
</body>
</html>
\`\`\`
    `,
  keyTerms: [
    { term: "Canvas Element", definition: "HTML5 element that provides a drawable region for creating graphics with JavaScript." },
    { term: "2D Context", definition: "Drawing interface that provides methods and properties for drawing on canvas." },
    { term: "fillRect()", definition: "Method to draw a filled rectangle on canvas." },
    { term: "strokeRect()", definition: "Method to draw an outlined rectangle on canvas." },
    { term: "beginPath()", definition: "Method to start a new drawing path on canvas." }
  ],
  exercises: [
    {
      id: 1,
      title: "First Canvas Drawing",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'first-canvas.html' with complete HTML5 structure.",
        "Add a canvas element with id='myCanvas', width='300', and height='200'.",
        "Include fallback text inside the canvas element for unsupported browsers.",
        "Write a script tag that gets the canvas element using getElementById().",
        "Get the 2D drawing context using getContext('2d').",
        "Draw a filled rectangle using fillRect(50, 50, 100, 75).",
        "Draw an outlined rectangle using strokeRect(175, 50, 100, 75).",
        "Test your canvas drawing in the browser and verify both rectangles appear."
      ]
    },
    {
      id: 2,
      title: "Colorful Shapes",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'colorful-shapes.html' with proper HTML5 document structure.",
        "Add a canvas element with dimensions 400x300 pixels.",
        "Create a script section to work with the canvas context.",
        "Draw three filled rectangles in different colors (red, green, blue) using fillStyle property.",
        "Draw two outlined rectangles with different stroke colors using strokeStyle property.",
        "Change the line width to 3 pixels using lineWidth property and draw another outlined shape.",
        "Draw a circle using beginPath(), arc(), and fill() methods.",
        "Set the circle's fill color to yellow before drawing it.",
        "Add a title above your canvas saying 'My Colorful Canvas Art'.",
        "Test all shapes display with correct colors and verify the circle is properly filled."
      ]
    },
    {
      id: 3,
      title: "Drawing Paths and Lines",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'canvas-paths.html' with complete HTML structure.",
        "Add a canvas element sized 500x400 pixels with appropriate fallback text.",
        "Write JavaScript to get the canvas context and create multiple drawing paths.",
        "Draw a triangle using beginPath(), moveTo(), and lineTo() methods, then stroke() it.",
        "Create a zigzag line across the canvas using multiple lineTo() calls.",
        "Draw a star shape using path methods (use moveTo and lineTo to create 5 points).",
        "Add a circle and a square using appropriate canvas methods.",
        "Use different colors for each shape by setting fillStyle or strokeStyle before drawing.",
        "Make the star filled with one color and outlined with another color.",
        "Include a heading 'Advanced Canvas Drawings' and test all shapes render correctly.",
        "Experiment with different lineWidth values for various shapes."
      ]
    },
    {
      id: 4,
      title: "Simple Scene Drawing",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'canvas-scene.html' to draw a simple outdoor scene using canvas.",
        "Set up a canvas element with dimensions 600x400 pixels.",
        "Draw a sky background using a filled rectangle with light blue color.",
        "Add a ground area using a green filled rectangle at the bottom.",
        "Draw a sun as a yellow circle in the upper right corner.",
        "Create a simple house using rectangles for the base and a triangle for the roof.",
        "Add a door and two windows to the house using smaller rectangles.",
        "Draw a tree using a brown rectangle for the trunk and green circle for leaves.",
        "Include some clouds using white or light gray circles.",
        "Add a path or road leading to the house using a different colored shape.",
        "Use appropriate colors throughout and ensure all elements are proportional.",
        "Test your scene and make adjustments to improve the visual composition."
      ]
    },
    {
      id: 5,
      title: "Interactive Canvas Art",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'interactive-canvas.html' with a canvas that responds to user interaction.",
        "Set up a canvas element with dimensions 500x500 pixels and get its 2D context.",
        "Create a comprehensive art piece combining multiple elements:",
        "- Draw a background with gradient colors (you can simulate this with multiple rectangles)",
        "- Add geometric shapes: circles, triangles, rectangles in various sizes and colors",
        "- Include text on the canvas using fillText() method with different font sizes",
        "- Draw connecting lines between some shapes to create relationships",
        "Write JavaScript that changes some element when the page loads (like animated position).",
        "Add multiple layers of drawings: background elements, main subjects, and foreground details.",
        "Use at least 8 different colors throughout your composition.",
        "Include both filled and outlined shapes for visual variety.",
        "Add comments in your JavaScript explaining what each section of drawing code does.",
        "Create a visually appealing composition that demonstrates mastery of canvas drawing methods.",
        "Test thoroughly and ensure all elements display correctly and proportionally."
      ]
    }
  ]
};
