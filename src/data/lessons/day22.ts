
import { DayLesson } from "../types";

export const day22: DayLesson = {
  day: 22,
  title: "HTML Drag and Drop",
  category: "HTML5 Features",
  description: "Master HTML5 drag and drop functionality to create interactive user interfaces with movable elements and drop zones.",
  learningObjectives: [
    "Understand HTML5 drag and drop API and its events.",
    "Learn to make elements draggable and create drop zones.",
    "Master drag and drop event handling and data transfer.",
    "Build interactive drag and drop applications."
  ],
  detailedExplanation: `
HTML5 Drag and Drop API allows users to click and drag elements around the web page and drop them in designated areas.

## Making Elements Draggable
To make an element draggable, add the draggable attribute:

\`\`\`html
<div draggable="true" id="draggableBox">
  Drag me around!
</div>
\`\`\`

## Drag and Drop Events
### Drag Events (on draggable element)
- dragstart: Fired when dragging starts
- drag: Fired continuously while dragging
- dragend: Fired when dragging ends

### Drop Events (on drop target)
- dragenter: Fired when dragged element enters drop zone
- dragover: Fired when dragged element is over drop zone
- dragleave: Fired when dragged element leaves drop zone
- drop: Fired when element is dropped

## Basic Drag and Drop Example
\`\`\`html
<div id="dragItem" draggable="true">Drag me</div>
<div id="dropZone">Drop here</div>

<script>
const dragItem = document.getElementById('dragItem');
const dropZone = document.getElementById('dropZone');

// Drag events
dragItem.addEventListener('dragstart', function(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
});

// Drop zone events
dropZone.addEventListener('dragover', function(e) {
  e.preventDefault(); // Allow drop
});

dropZone.addEventListener('drop', function(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const draggedElement = document.getElementById(data);
  dropZone.appendChild(draggedElement);
});
</script>
\`\`\`

## Data Transfer Object
The dataTransfer object allows you to store data during drag operations:

\`\`\`html
<script>
// Setting data during dragstart
dragItem.addEventListener('dragstart', function(e) {
  e.dataTransfer.setData('text/plain', 'Hello World');
  e.dataTransfer.setData('text/html', '<p>HTML content</p>');
});

// Getting data during drop
dropZone.addEventListener('drop', function(e) {
  const text = e.dataTransfer.getData('text/plain');
  const html = e.dataTransfer.getData('text/html');
});
</script>
\`\`\`

## Visual Feedback
Add visual feedback during drag operations:

\`\`\`html
<style>
.drag-over {
  background-color: lightblue;
  border: 2px dashed blue;
}

.dragging {
  opacity: 0.5;
}
</style>

<script>
dragItem.addEventListener('dragstart', function(e) {
  e.target.classList.add('dragging');
});

dragItem.addEventListener('dragend', function(e) {
  e.target.classList.remove('dragging');
});

dropZone.addEventListener('dragenter', function(e) {
  e.target.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', function(e) {
  e.target.classList.remove('drag-over');
});
</script>
\`\`\`

## Complete Drag and Drop Example
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Drag and Drop Demo</title>
  <style>
    .container {
      display: flex;
      gap: 20px;
      margin: 20px;
    }
    
    .source-box, .target-box {
      width: 200px;
      height: 300px;
      border: 2px solid #ccc;
      padding: 10px;
    }
    
    .draggable-item {
      background-color: lightcoral;
      padding: 10px;
      margin: 5px 0;
      cursor: move;
      border-radius: 5px;
    }
    
    .drag-over {
      background-color: lightblue;
      border-color: blue;
    }
    
    .dragging {
      opacity: 0.5;
    }
  </style>
</head>
<body>
  <h1>Drag and Drop Tasks</h1>
  
  <div class="container">
    <div class="source-box" id="sourceBox">
      <h3>To Do</h3>
      <div class="draggable-item" draggable="true" id="task1">Task 1: Learn HTML</div>
      <div class="draggable-item" draggable="true" id="task2">Task 2: Learn CSS</div>
      <div class="draggable-item" draggable="true" id="task3">Task 3: Learn JavaScript</div>
    </div>
    
    <div class="target-box" id="targetBox">
      <h3>Completed</h3>
    </div>
  </div>
  
  <script>
    const draggableItems = document.querySelectorAll('.draggable-item');
    const targetBox = document.getElementById('targetBox');
    const sourceBox = document.getElementById('sourceBox');
    
    draggableItems.forEach(item => {
      item.addEventListener('dragstart', handleDragStart);
      item.addEventListener('dragend', handleDragEnd);
    });
    
    targetBox.addEventListener('dragover', handleDragOver);
    targetBox.addEventListener('drop', handleDrop);
    targetBox.addEventListener('dragenter', handleDragEnter);
    targetBox.addEventListener('dragleave', handleDragLeave);
    
    function handleDragStart(e) {
      e.dataTransfer.setData('text/plain', e.target.id);
      e.target.classList.add('dragging');
    }
    
    function handleDragEnd(e) {
      e.target.classList.remove('dragging');
    }
    
    function handleDragOver(e) {
      e.preventDefault();
    }
    
    function handleDragEnter(e) {
      e.target.classList.add('drag-over');
    }
    
    function handleDragLeave(e) {
      e.target.classList.remove('drag-over');
    }
    
    function handleDrop(e) {
      e.preventDefault();
      e.target.classList.remove('drag-over');
      
      const draggedId = e.dataTransfer.getData('text/plain');
      const draggedElement = document.getElementById(draggedId);
      
      if (draggedElement) {
        targetBox.appendChild(draggedElement);
      }
    }
  </script>
</body>
</html>
\`\`\`
    `,
  keyTerms: [
    { term: "draggable", definition: "HTML attribute that makes an element draggable when set to 'true'." },
    { term: "dragstart", definition: "Event fired when the user starts dragging an element." },
    { term: "dragover", definition: "Event fired when a dragged element is moved over a drop target." },
    { term: "drop", definition: "Event fired when a dragged element is dropped on a valid drop target." },
    { term: "dataTransfer", definition: "Object that holds data being dragged during a drag and drop operation." },
    { term: "preventDefault()", definition: "Method that prevents the default behavior of an event, essential for enabling drops." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Drag and Drop",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'simple-drag-drop.html' with complete HTML5 structure.",
        "Add a title 'Simple Drag and Drop' and create a div element with id='dragBox' and the text 'Drag me!'.",
        "Make the div draggable by adding draggable='true' attribute.",
        "Create another div with id='dropZone' and text 'Drop here' to serve as the drop target.",
        "Add basic CSS styling to make the dragBox have a background color and the dropZone have a border.",
        "Write JavaScript to handle the dragstart event on dragBox and store the element's id in dataTransfer.",
        "Write JavaScript to handle dragover event on dropZone and prevent the default behavior.",
        "Write JavaScript to handle the drop event on dropZone to move the dragged element inside it.",
        "Test your drag and drop functionality by dragging the box into the drop zone."
      ]
    },
    {
      id: 2,
      title: "Multiple Draggable Items",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'multiple-drag-drop.html' with proper HTML5 document structure.",
        "Add a title 'Multiple Item Drag and Drop' and create a container div with 4 draggable items.",
        "Each draggable item should have unique ids (item1, item2, item3, item4) and different text content.",
        "Create two drop zones: 'Category A' and 'Category B' with distinct styling.",
        "Add CSS classes for draggable items (.draggable) and drop zones (.drop-zone).",
        "Style the draggable items with different background colors and the drop zones with borders.",
        "Write JavaScript to make all items with class 'draggable' draggable and handle dragstart events.",
        "Implement dragover and drop event handlers for both drop zones.",
        "Add visual feedback by changing the drop zone background color when an item is dragged over it.",
        "Test by dragging different items to different drop zones and verify they move correctly."
      ]
    },
    {
      id: 3,
      title: "Task Manager with Drag and Drop",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'task-manager.html' with complete HTML5 structure and appropriate title.",
        "Design a task board with three columns: 'To Do', 'In Progress', and 'Done'.",
        "Add 5 task items in the 'To Do' column, each with different task descriptions.",
        "Make all task items draggable and style them with distinct colors and padding.",
        "Implement drag and drop functionality so tasks can be moved between any of the three columns.",
        "Add visual feedback during dragging: reduce opacity of dragged item and highlight drop zones.",
        "Write JavaScript functions to handle dragstart, dragend, dragover, dragenter, dragleave, and drop events.",
        "Ensure that items can be moved in any direction between columns (not just forward).",
        "Add a counter for each column that displays the number of tasks in that column.",
        "Update the counters automatically when tasks are moved between columns.",
        "Include proper error handling for invalid drops.",
        "Add CSS transitions for smooth visual effects during drag operations.",
        "Test thoroughly by moving tasks between all columns and verifying counters update correctly."
      ]
    },
    {
      id: 4,
      title: "Image Gallery with Drag and Drop",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'image-gallery.html' for an interactive image gallery with drag and drop functionality.",
        "Set up a gallery container with 6 placeholder images (you can use placeholder.com URLs like https://via.placeholder.com/150).",
        "Create a favorites section where users can drag and drop their favorite images.",
        "Make all images draggable and add proper alt text for accessibility.",
        "Implement drag and drop so images can be moved from the gallery to favorites and vice versa.",
        "Add visual styling with CSS to make the gallery look attractive with borders and spacing.",
        "Implement visual feedback during drag operations (highlighting drop zones, changing opacity).",
        "Add a feature to remove images from favorites by dragging them to a 'trash' area.",
        "Display a counter showing how many images are in favorites.",
        "Ensure images maintain their appearance and alt text after being moved.",
        "Test the complete workflow: adding images to favorites, removing them, and moving them back to the gallery."
      ]
    },
    {
      id: 5,
      title: "Advanced Drag and Drop Puzzle",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'puzzle-game.html' as an advanced drag and drop puzzle game.",
        "Design a 3x3 grid puzzle where users must arrange numbered pieces (1-9) in correct order.",
        "Create 9 draggable puzzle pieces, each containing a number from 1 to 9.",
        "Initially randomize the positions of the puzzle pieces within the grid.",
        "Implement drag and drop functionality so pieces can be moved to any grid position.",
        "Add logic to detect when the puzzle is solved (all numbers in correct order 1-9).",
        "Display a congratulations message when the puzzle is completed.",
        "Add a 'Shuffle' button to randomize the puzzle pieces again.",
        "Implement a move counter that tracks how many moves the player has made.",
        "Add a timer to track how long it takes to solve the puzzle.",
        "Include visual feedback during dragging with smooth animations and hover effects.",
        "Add sound effects or visual celebrations when the puzzle is solved (using simple alerts is fine).",
        "Ensure the puzzle pieces snap into the grid positions properly.",
        "Add a 'Reset' button to return to the initial randomized state.",
        "Test thoroughly with multiple shuffle and solve cycles to ensure reliability."
      ]
    }
  ]
};
