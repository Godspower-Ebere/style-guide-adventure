
import { DayLesson } from "../types";

export const day23: DayLesson = {
  day: 23,
  title: "HTML Web Workers",
  category: "HTML5 Features",
  description: "Learn to use HTML5 Web Workers to run JavaScript in background threads, improving performance and user experience.",
  learningObjectives: [
    "Understand Web Workers and their purpose in web applications.",
    "Learn to create and communicate with Web Workers.",
    "Master background processing without blocking the main thread.",
    "Build applications with improved performance using Web Workers."
  ],
  detailedExplanation: `
Web Workers allow you to run JavaScript in background threads, separate from the main UI thread, preventing the blocking of user interface during intensive computations.

## What are Web Workers?
Web Workers provide a way to run scripts in background threads. They are perfect for:
- Heavy computational tasks
- Data processing
- Network operations
- Long-running operations

## Creating a Web Worker
First, create a separate JavaScript file for the worker:

**worker.js**
\`\`\`javascript
// This code runs in the worker thread
self.addEventListener('message', function(e) {
  const data = e.data;
  
  // Perform some computation
  let result = 0;
  for (let i = 0; i < data.number; i++) {
    result += i;
  }
  
  // Send result back to main thread
  self.postMessage({
    type: 'result',
    value: result
  });
});
\`\`\`

## Using Web Workers in HTML
\`\`\`html
<script>
// Check if Web Workers are supported
if (typeof Worker !== 'undefined') {
  // Create a new worker
  const worker = new Worker('worker.js');
  
  // Send data to worker
  worker.postMessage({
    type: 'calculate',
    number: 1000000
  });
  
  // Listen for messages from worker
  worker.addEventListener('message', function(e) {
    const result = e.data.value;
    console.log('Result:', result);
  });
  
  // Handle errors
  worker.addEventListener('error', function(e) {
    console.error('Worker error:', e);
  });
} else {
  console.log('Web Workers not supported');
}
</script>
\`\`\`

## Terminating Web Workers
\`\`\`html
<script>
// Terminate worker when done
worker.terminate();

// Or from within the worker
self.close();
</script>
\`\`\`

## Complete Web Worker Example
**main.html**
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Web Workers Demo</title>
</head>
<body>
  <h1>Web Workers Calculation</h1>
  
  <div>
    <label for="numberInput">Number to calculate:</label>
    <input type="number" id="numberInput" value="1000000">
    <button id="calculateBtn">Calculate</button>
    <button id="stopBtn">Stop</button>
  </div>
  
  <div id="result"></div>
  <div id="status"></div>
  
  <script>
    let worker = null;
    
    const numberInput = document.getElementById('numberInput');
    const calculateBtn = document.getElementById('calculateBtn');
    const stopBtn = document.getElementById('stopBtn');
    const resultDiv = document.getElementById('result');
    const statusDiv = document.getElementById('status');
    
    // Check Web Worker support
    if (typeof Worker !== 'undefined') {
      calculateBtn.addEventListener('click', function() {
        const number = parseInt(numberInput.value);
        
        // Create new worker
        worker = new Worker('calculator-worker.js');
        
        // Update status
        statusDiv.textContent = 'Calculating...';
        calculateBtn.disabled = true;
        
        // Send data to worker
        worker.postMessage({
          command: 'calculate',
          number: number
        });
        
        // Listen for results
        worker.addEventListener('message', function(e) {
          if (e.data.type === 'result') {
            resultDiv.textContent = 'Result: ' + e.data.value;
            statusDiv.textContent = 'Calculation complete!';
            calculateBtn.disabled = false;
          } else if (e.data.type === 'progress') {
            statusDiv.textContent = 'Progress: ' + e.data.percent + '%';
          }
        });
        
        // Handle errors
        worker.addEventListener('error', function(e) {
          statusDiv.textContent = 'Error: ' + e.message;
          calculateBtn.disabled = false;
        });
      });
      
      stopBtn.addEventListener('click', function() {
        if (worker) {
          worker.terminate();
          worker = null;
          statusDiv.textContent = 'Calculation stopped';
          calculateBtn.disabled = false;
        }
      });
    } else {
      statusDiv.textContent = 'Web Workers not supported in this browser';
      calculateBtn.disabled = true;
    }
  </script>
</body>
</html>
\`\`\`

**calculator-worker.js**
\`\`\`javascript
// Web Worker for calculations
self.addEventListener('message', function(e) {
  const data = e.data;
  
  if (data.command === 'calculate') {
    const number = data.number;
    let result = 0;
    
    // Perform calculation with progress updates
    for (let i = 0; i < number; i++) {
      result += i;
      
      // Send progress updates every 100,000 iterations
      if (i % 100000 === 0) {
        self.postMessage({
          type: 'progress',
          percent: Math.round((i / number) * 100)
        });
      }
    }
    
    // Send final result
    self.postMessage({
      type: 'result',
      value: result
    });
  }
});

// Handle errors
self.addEventListener('error', function(e) {
  self.postMessage({
    type: 'error',
    message: e.message
  });
});
\`\`\`
    `,
  keyTerms: [
    { term: "Web Worker", definition: "Browser API that allows running JavaScript in background threads separate from the main UI thread." },
    { term: "postMessage()", definition: "Method used to send data between the main thread and Web Worker." },
    { term: "onmessage", definition: "Event handler that receives messages from Web Workers or main thread." },
    {   "terminate()", definition: "Method to stop a Web Worker from the main thread." },
    { term: "self", definition: "Global object reference within a Web Worker context." },
    { term: "Background Thread", definition: "Separate execution thread that runs independently from the main UI thread." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Web Worker",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'basic-worker.html' with complete HTML5 structure.",
        "Add a title 'Basic Web Worker Demo' and create a button with id='startBtn' and text 'Start Worker'.",
        "Create a div with id='output' to display results from the Web Worker.",
        "Create a separate JavaScript file called 'simple-worker.js' for the Web Worker code.",
        "In simple-worker.js, add an event listener for 'message' events that receives data and sends back a greeting message.",
        "In the HTML file, write JavaScript to create a new Worker using the simple-worker.js file.",
        "Add a click event listener to the button that sends a message 'Hello' to the worker using postMessage().",
        "Add a message event listener to receive the response from the worker and display it in the output div.",
        "Test your Web Worker by clicking the button and verifying the greeting message appears."
      ]
    },
    {
      id: 2,
      title: "Number Calculator Worker",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'calculator-worker.html' with proper HTML5 document structure.",
        "Add a form with an input field for entering a number and buttons for 'Calculate Sum' and 'Calculate Factorial'.",
        "Include a div to display results and another div to show calculation status.",
        "Create 'math-worker.js' as a separate Web Worker file for mathematical calculations.",
        "In math-worker.js, implement message handling for both 'sum' and 'factorial' operations.",
        "For sum operation: calculate the sum of all numbers from 1 to the given number.",
        "For factorial operation: calculate the factorial of the given number.",
        "In the main HTML, create Web Worker instance and implement button click handlers.",
        "Send appropriate messages to the worker with operation type and number when buttons are clicked.",
        "Display 'Calculating...' status while the worker is processing and show results when complete.",
        "Add error handling for invalid inputs and worker errors.",
        "Test both mathematical operations with different numbers and verify results are correct."
      ]
    },
    {
      id: 3,
      title: "Progress Tracking with Web Workers",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'progress-worker.html' with complete HTML5 structure and appropriate title.",
        "Design an interface with input field for a large number, 'Start Processing' button, and 'Stop' button.",
        "Add a progress bar element (HTML5 progress element) and a status div for displaying progress updates.",
        "Create 'progress-worker.js' that performs a long-running calculation while sending progress updates.",
        "Implement a calculation that counts from 1 to the given number, sending progress updates every 50,000 iterations.",
        "In the worker, calculate progress percentage and send both progress updates and the final result.",
        "In the main thread, update the progress bar and status div based on messages from the worker.",
        "Implement the stop functionality that terminates the worker and resets the interface.",
        "Add proper error handling and ensure the UI remains responsive during calculations.",
        "Style the progress bar and interface to provide clear visual feedback to the user.",
        "Disable the start button during processing and re-enable it when complete or stopped.",
        "Test with large numbers (like 5,000,000) to see the progress updates in action.",
        "Verify that the UI remains responsive and the stop button works correctly during processing."
      ]
    },
    {
      id: 4,
      title: "Data Processing Worker",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'data-processor.html' for processing large arrays of data using Web Workers.",
        "Build an interface with a textarea for inputting CSV-like data and buttons for different processing operations.",
        "Add buttons for 'Sort Data', 'Find Average', 'Find Maximum', and 'Count Items'.",
        "Include areas to display the original data, processed results, and processing time.",
        "Create 'data-worker.js' to handle various data processing operations in the background.",
        "Implement functions in the worker to sort arrays, calculate averages, find maximum values, and count items.",
        "In the main thread, parse the CSV input into arrays and send them to the worker for processing.",
        "Measure and display the processing time for each operation to demonstrate Web Worker performance benefits.",
        "Add sample data button that fills the textarea with a large dataset for testing.",
        "Implement proper error handling for invalid data formats and processing errors.",
        "Test with large datasets to see the performance benefits of using Web Workers.",
        "Ensure the interface remains responsive during data processing operations."
      ]
    },
    {
      id: 5,
      title: "Multi-Worker Task Manager",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'multi-worker-manager.html' as an advanced demonstration of managing multiple Web Workers.",
        "Design an interface for managing multiple background tasks simultaneously.",
        "Add controls to create up to 3 different workers performing different tasks: prime number finder, Fibonacci calculator, and array sorter.",
        "Each worker should have its own input field, start/stop buttons, progress display, and results area.",
        "Create three separate worker files: 'prime-worker.js', 'fibonacci-worker.js', and 'sort-worker.js'.",
        "Implement the prime number worker to find all prime numbers up to a given number with progress updates.",
        "Implement the Fibonacci worker to calculate Fibonacci sequences with progress reporting.",
        "Implement the sorting worker to sort large arrays with progress updates.",
        "In the main thread, manage multiple workers simultaneously and handle their individual messages.",
        "Add a master control panel with 'Start All', 'Stop All', and 'Clear All Results' buttons.",
        "Display overall system status showing how many workers are currently active.",
        "Implement proper worker lifecycle management, creating and terminating workers as needed.",
        "Add performance monitoring that shows CPU usage indicators for each worker.",
        "Test the system with multiple workers running simultaneously and verify proper isolation between tasks.",
        "Ensure that stopping one worker doesn't affect the others and that the UI remains fully responsive."
      ]
    }
  ]
};
