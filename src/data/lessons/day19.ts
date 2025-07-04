
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
Get ready to unleash your inner digital artist! The HTML5 Canvas element is like having a blank digital canvas where you can draw, animate, and create interactive graphics using JavaScript. Think of it as your own personal art studio right inside the web browser.

## What is HTML5 Canvas?

Canvas is like a rectangular drawing surface that you can control with JavaScript. Unlike regular HTML elements that have fixed appearances, canvas gives you pixel-level control to create anything you can imagine - from simple shapes to complex animations and even games!

### Basic Canvas Setup
<canvas id="myCanvas" width="400" height="300">
    Your browser doesn't support canvas. Time to upgrade!
</canvas>

The canvas element itself is just an empty container. The real magic happens when we use JavaScript to draw on it.

## Getting Started with JavaScript and Canvas

To draw on canvas, you need to get the "drawing context" - think of it as picking up your digital paintbrush:

<script>
// Get the canvas element
const canvas = document.getElementById('myCanvas');

// Get the 2D drawing context (our paintbrush)
const ctx = canvas.getContext('2d');

// Now we can start drawing!
</script>

## Drawing Basic Shapes

### Rectangles - The Building Blocks
Let's start with the simplest shapes:

<script>
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Filled rectangle (solid color)
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 75);

// Outlined rectangle (just the border)
ctx.strokeStyle = 'red';
ctx.lineWidth = 3;
ctx.strokeRect(200, 50, 100, 75);

// Clear a rectangular area (make it transparent)
ctx.clearRect(75, 75, 50, 25);
</script>

The numbers mean: fillRect(x, y, width, height)
- x, y: where to start drawing (top-left corner)
- width, height: how big to make it

### Circles and Arcs - Getting Curvy
Circles are a bit more complex but super useful:

<script>
// Draw a circle
ctx.beginPath();
ctx.arc(150, 150, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

// Draw a half-circle (arc)
ctx.beginPath();
ctx.arc(300, 150, 40, 0, Math.PI);
ctx.strokeStyle = 'purple';
ctx.lineWidth = 4;
ctx.stroke();
</script>

Arc parameters: arc(centerX, centerY, radius, startAngle, endAngle)
- 2 * Math.PI = full circle
- Math.PI = half circle

### Lines and Paths - Connect the Dots
<script>
// Draw a triangle
ctx.beginPath();
ctx.moveTo(100, 200);  // Starting point
ctx.lineTo(150, 100);  // Line to this point
ctx.lineTo(200, 200);  // Line to this point
ctx.lineTo(100, 200);  // Back to start
ctx.fillStyle = 'orange';
ctx.fill();

// Draw a zigzag line
ctx.beginPath();
ctx.moveTo(250, 200);
ctx.lineTo(270, 180);
ctx.lineTo(290, 200);
ctx.lineTo(310, 180);
ctx.lineTo(330, 200);
ctx.strokeStyle = 'red';
ctx.lineWidth = 3;
ctx.stroke();
</script>

## Adding Colors and Styles

### Working with Colors
<script>
// Solid colors
ctx.fillStyle = 'red';           // Named color
ctx.fillStyle = '#ff0000';       // Hex color
ctx.fillStyle = 'rgb(255, 0, 0)'; // RGB color
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // RGB with transparency

// Gradients
const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'blue');
ctx.fillStyle = gradient;
ctx.fillRect(50, 50, 200, 100);
</script>

### Line Styles
<script>
// Different line properties
ctx.lineWidth = 5;
ctx.lineCap = 'round';    // 'butt', 'round', 'square'
ctx.lineJoin = 'round';   // 'miter', 'round', 'bevel'
ctx.strokeStyle = 'blue';

// Dashed lines
ctx.setLineDash([10, 5]); // 10px line, 5px gap
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(250, 100);
ctx.stroke();
</script>

## Complete Real-World Example - Drawing a House

Let me show you how to create a complete scene:

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Canvas House Drawing</title>
    <style>
        canvas {
            border: 2px solid #333;
            display: block;
            margin: 20px auto;
        }
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <h1>My Canvas Masterpiece</h1>
    <canvas id="houseCanvas" width="600" height="400">
        Your browser doesn't support canvas!
    </canvas>
    
    <script>
        const canvas = document.getElementById('houseCanvas');
        const ctx = canvas.getContext('2d');
        
        // Sky background
        ctx.fillStyle = '#87CEEB';
        ctx.fillRect(0, 0, 600, 400);
        
        // Ground
        ctx.fillStyle = '#90EE90';
        ctx.fillRect(0, 300, 600, 100);
        
        // Sun
        ctx.beginPath();
        ctx.arc(500, 80, 40, 0, 2 * Math.PI);
        ctx.fillStyle = '#FFD700';
        ctx.fill();
        
        // House base
        ctx.fillStyle = '#DEB887';
        ctx.fillRect(150, 200, 200, 150);
        
        // Roof
        ctx.beginPath();
        ctx.moveTo(130, 200);
        ctx.lineTo(250, 120);
        ctx.lineTo(370, 200);
        ctx.closePath();
        ctx.fillStyle = '#8B4513';
        ctx.fill();
        
        // Door
        ctx.fillStyle = '#654321';
        ctx.fillRect(220, 280, 60, 70);
        
        // Door knob
        ctx.beginPath();
        ctx.arc(270, 315, 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#FFD700';
        ctx.fill();
        
        // Windows
        ctx.fillStyle = '#ADD8E6';
        ctx.fillRect(170, 230, 40, 40);
        ctx.fillRect(290, 230, 40, 40);
        
        // Window frames
        ctx.strokeStyle = '#654321';
        ctx.lineWidth = 3;
        ctx.strokeRect(170, 230, 40, 40);
        ctx.strokeRect(290, 230, 40, 40);
        
        // Window crosses
        ctx.beginPath();
        ctx.moveTo(190, 230);
        ctx.lineTo(190, 270);
        ctx.moveTo(170, 250);
        ctx.lineTo(210, 250);
        ctx.moveTo(310, 230);
        ctx.lineTo(310, 270);
        ctx.moveTo(290, 250);
        ctx.lineTo(330, 250);
        ctx.stroke();
        
        // Tree
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(450, 250, 20, 80);
        
        // Tree leaves
        ctx.beginPath();
        ctx.arc(460, 240, 35, 0, 2 * Math.PI);
        ctx.fillStyle = '#228B22';
        ctx.fill();
        
        // Clouds
        function drawCloud(x, y) {
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(x, y, 25, 0, 2 * Math.PI);
            ctx.arc(x + 25, y, 35, 0, 2 * Math.PI);
            ctx.arc(x + 50, y, 25, 0, 2 * Math.PI);
            ctx.arc(x + 12, y - 15, 25, 0, 2 * Math.PI);
            ctx.arc(x + 37, y - 15, 25, 0, 2 * Math.PI);
            ctx.fill();
        }
        
        drawCloud(50, 100);
        drawCloud(200, 60);
        
        // Add some text
        ctx.fillStyle = '#333';
        ctx.font = '24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('My Dream House', 300, 50);
    </script>
</body>
</html>

## Adding Text to Canvas

<script>
// Text properties
ctx.font = '30px Arial';
ctx.fillStyle = 'black';
ctx.textAlign = 'center';    // 'left', 'center', 'right'
ctx.textBaseline = 'middle'; // 'top', 'middle', 'bottom'

// Draw filled text
ctx.fillText('Hello Canvas!', 200, 100);

// Draw outlined text
ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;
ctx.strokeText('Outlined Text', 200, 150);
</script>

## Making Canvas Interactive

<script>
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Track mouse position
canvas.addEventListener('mousemove', function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Clear canvas and draw a circle at mouse position
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
});

// Draw on click
canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
});
</script>

## Animation Basics

<script>
let x = 0;
const speed = 2;

function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw moving circle
    ctx.beginPath();
    ctx.arc(x, 150, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    
    // Update position
    x += speed;
    if (x > canvas.width + 20) {
        x = -20;
    }
    
    // Continue animation
    requestAnimationFrame(animate);
}

// Start animation
animate();
</script>

## Canvas Best Practices

### 1. Always Check for Support
<script>
const canvas = document.getElementById('myCanvas');
if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    // Your drawing code here
} else {
    console.log('Canvas not supported');
}
</script>

### 2. Organize Your Drawing Code
<script>
function drawBackground() {
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawHouse() {
    // House drawing code
}

function drawTree() {
    // Tree drawing code
}

function drawScene() {
    drawBackground();
    drawHouse();
    drawTree();
}

drawScene();
</script>

### 3. Use Functions for Reusable Shapes
<script>
function drawStar(x, y, size, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y - size);
    ctx.lineTo(x + size * 0.3, y - size * 0.3);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x + size * 0.3, y + size * 0.3);
    ctx.lineTo(x, y + size);
    ctx.lineTo(x - size * 0.3, y + size * 0.3);
    ctx.lineTo(x - size, y);
    ctx.lineTo(x - size * 0.3, y - size * 0.3);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

// Draw multiple stars
drawStar(100, 100, 20, 'gold');
drawStar(200, 150, 15, 'silver');
drawStar(300, 80, 25, 'yellow');
</script>

Canvas is incredibly powerful and fun to work with. Start with simple shapes, experiment with colors and animations, and gradually build up to more complex graphics. The key is to practice and let your creativity flow!
    `,
  keyTerms: [
    { term: "Canvas Element", definition: "HTML5 element that provides a drawable region for creating graphics with JavaScript." },
    { term: "2D Context", definition: "Drawing interface that provides methods and properties for drawing on canvas." },
    { term: "fillRect()", definition: "Method to draw a filled rectangle on canvas." },
    { term: "strokeRect()", definition: "Method to draw an outlined rectangle on canvas." },
    { term: "beginPath()", definition: "Method to start a new drawing path on canvas." },
    { term: "arc()", definition: "Method to draw circular arcs and circles on canvas." }
  ],
  exercises: [
    {
      id: 1,
      title: "First Canvas Drawing",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'first-canvas.html' with complete HTML5 structure.",
        "Add a canvas element with id='drawingCanvas', width='400', and height='300'.",
        "Include fallback text inside the canvas element for unsupported browsers.",
        "Write JavaScript to get the canvas element and 2D drawing context.",
        "Draw three filled rectangles in different colors using fillRect().",
        "Draw two outlined rectangles with different stroke colors using strokeRect().",
        "Add a title above your canvas and style it with CSS.",
        "Test your canvas drawing in the browser and verify all shapes appear correctly."
      ]
    },
    {
      id: 2,
      title: "Shapes and Colors",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'canvas-shapes.html' with proper HTML5 document structure.",
        "Add a canvas element with dimensions 500x400 pixels.",
        "Draw at least 5 different filled rectangles in various colors and sizes.",
        "Create 3 circles using the arc() method with different colors and positions.",
        "Draw a triangle using beginPath(), moveTo(), and lineTo() methods.",
        "Add a line across the canvas using moveTo() and lineTo().",
        "Experiment with different strokeStyle and fillStyle properties.",
        "Use both named colors ('red', 'blue') and hex colors ('#ff0000').",
        "Add CSS styling to center the canvas and give it a border.",
        "Test all shapes display correctly with proper colors and positioning."
      ]
    },
    {
      id: 3,
      title: "Complex Drawing Scene",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'canvas-scene.html' to draw a complete outdoor scene.",
        "Set up a canvas element with dimensions 600x400 pixels.",
        "Draw a sky background using a filled rectangle with light blue color.",
        "Add a ground area using a green filled rectangle at the bottom.",
        "Draw a sun as a yellow circle in the upper portion of the sky.",
        "Create a house using rectangles for the base and a triangle for the roof.",
        "Add details to the house: door, windows, and window frames using rectangles.",
        "Draw a tree using a brown rectangle for trunk and green circle for leaves.",
        "Add clouds using multiple overlapping white circles.",
        "Include creative details like birds, flowers, or a path to make the scene interesting.",
        "Use proper colors throughout and ensure all elements are proportional.",
        "Test the complete scene and make adjustments for visual appeal."
      ]
    },
    {
      id: 4,
      title: "Interactive Canvas Drawing",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'interactive-canvas.html' with a drawing application.",
        "Set up a canvas element with dimensions 500x500 pixels.",
        "Add mouse event listeners to detect mouse movement and clicks on the canvas.",
        "Implement drawing functionality where users can draw by clicking and dragging.",
        "Add buttons to change drawing colors (red, blue, green, black).",
        "Include a 'Clear Canvas' button that clears all drawings.",
        "Add functionality to change brush size with different buttons or slider.",
        "Display current mouse coordinates somewhere on the page.",
        "Style the interface with CSS to make it user-friendly.",
        "Test all interactive features and ensure smooth drawing experience."
      ]
    },
    {
      id: 5,
      title: "Canvas Art Gallery",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'canvas-gallery.html' showcasing multiple canvas artworks.",
        "Design a webpage with 4 different canvas elements, each 300x300 pixels.",
        "Create Canvas 1: Abstract art using various geometric shapes, colors, and gradients.",
        "Create Canvas 2: A detailed landscape scene with multiple elements (mountains, trees, lake, etc.).",
        "Create Canvas 3: A pattern or mandala design using repeated shapes and symmetry.",
        "Create Canvas 4: An interactive canvas where clicking creates animated effects.",
        "Use advanced canvas features: gradients, shadows, complex paths, and text.",
        "Implement at least one animation using requestAnimationFrame().",
        "Add comprehensive styling with CSS to create a professional gallery layout.",
        "Include descriptions for each artwork explaining the techniques used.",
        "Ensure all canvases are responsive and display well on different screen sizes.",
        "Test thoroughly across different browsers and document any compatibility issues.",
        "Create a cohesive visual theme that demonstrates mastery of canvas capabilities."
      ]
    }
  ]
};
