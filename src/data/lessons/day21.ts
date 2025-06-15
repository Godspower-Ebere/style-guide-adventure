
import { DayLesson } from "../types";

export const day21: DayLesson = {
  day: 21,
  title: "HTML Local Storage",
  category: "HTML5 Features",
  description: "Learn to use HTML5 Local Storage to save data in the browser for persistent user experiences and offline functionality.",
  learningObjectives: [
    "Understand HTML5 Local Storage and its advantages.",
    "Learn to store and retrieve data using localStorage methods.",
    "Master data persistence techniques for web applications.",
    "Create interactive forms that remember user preferences."
  ],
  detailedExplanation: `
HTML5 Local Storage allows web applications to store data locally within the user's browser, providing persistence across browser sessions.

## What is Local Storage?
Local Storage is a web storage solution that allows websites to store data in a user's browser with no expiration time. Unlike cookies, local storage data is not sent with every HTTP request.

## Basic Local Storage Methods
### Storing Data
\`\`\`html
<script>
// Store a string value
localStorage.setItem('username', 'john_doe');

// Store a number (converted to string)
localStorage.setItem('score', '1500');

// Store an object (must be JSON stringified)
const user = {name: 'John', age: 25};
localStorage.setItem('user', JSON.stringify(user));
</script>
\`\`\`

### Retrieving Data
\`\`\`html
<script>
// Get a string value
const username = localStorage.getItem('username');

// Get a number (convert back from string)
const score = parseInt(localStorage.getItem('score'));

// Get an object (parse JSON)
const userStr = localStorage.getItem('user');
const user = userStr ? JSON.parse(userStr) : null;
</script>
\`\`\`

### Removing Data
\`\`\`html
<script>
// Remove a specific item
localStorage.removeItem('username');

// Clear all local storage
localStorage.clear();
</script>
\`\`\`

## Checking for Local Storage Support
\`\`\`html
<script>
function supportsLocalStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

if (supportsLocalStorage()) {
  // Use localStorage
} else {
  // Fallback method
}
</script>
\`\`\`

## Complete Local Storage Example
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Local Storage Demo</title>
</head>
<body>
  <h1>User Preferences</h1>
  
  <form id="preferencesForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="theme">Theme:</label>
    <select id="theme" name="theme">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    
    <button type="submit">Save Preferences</button>
  </form>
  
  <button id="clearBtn">Clear All Data</button>
  
  <div id="output"></div>
  
  <script>
    // Load saved preferences on page load
    window.addEventListener('load', function() {
      const savedName = localStorage.getItem('userName');
      const savedTheme = localStorage.getItem('userTheme');
      
      if (savedName) {
        document.getElementById('name').value = savedName;
      }
      
      if (savedTheme) {
        document.getElementById('theme').value = savedTheme;
      }
      
      displaySavedData();
    });
    
    // Save preferences
    document.getElementById('preferencesForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const theme = document.getElementById('theme').value;
      
      localStorage.setItem('userName', name);
      localStorage.setItem('userTheme', theme);
      
      alert('Preferences saved!');
      displaySavedData();
    });
    
    // Clear all data
    document.getElementById('clearBtn').addEventListener('click', function() {
      localStorage.clear();
      document.getElementById('preferencesForm').reset();
      displaySavedData();
      alert('All data cleared!');
    });
    
    // Display saved data
    function displaySavedData() {
      const output = document.getElementById('output');
      const name = localStorage.getItem('userName');
      const theme = localStorage.getItem('userTheme');
      
      if (name || theme) {
        output.innerHTML = '<h3>Saved Data:</h3><p>Name: ' + (name || 'Not set') + '</p><p>Theme: ' + (theme || 'Not set') + '</p>';
      } else {
        output.innerHTML = '<p>No saved data</p>';
      }
    }
  </script>
</body>
</html>
\`\`\`
    `,
  keyTerms: [
    { term: "Local Storage", definition: "HTML5 feature that allows websites to store data locally in the user's browser with no expiration time." },
    { term: "setItem()", definition: "Method to store data in local storage with a key-value pair." },
    { term: "getItem()", definition: "Method to retrieve data from local storage using a key." },
    { term: "removeItem()", definition: "Method to remove a specific item from local storage." },
    { term: "JSON.stringify()", definition: "Method to convert JavaScript objects to JSON strings for storage." },
    { term: "JSON.parse()", definition: "Method to convert JSON strings back to JavaScript objects." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Local Storage",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'local-storage-basic.html' with complete HTML5 structure.",
        "Add a title 'Local Storage Basics' and create a simple form with one text input field for a username.",
        "Add a 'Save' button and a 'Load' button below the input field.",
        "Write JavaScript that saves the username to localStorage when the Save button is clicked using localStorage.setItem().",
        "Write JavaScript that loads the username from localStorage when the Load button is clicked using localStorage.getItem().",
        "Add an alert message to confirm when data is saved successfully.",
        "Add a paragraph element to display the loaded username on the page.",
        "Test your code by entering a username, saving it, refreshing the page, and loading it back."
      ]
    },
    {
      id: 2,
      title: "User Preferences Storage",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'user-preferences.html' with proper HTML5 document structure.",
        "Build a form with the following fields: name (text input), email (email input), and favorite color (select with options: red, blue, green, yellow).",
        "Add 'Save Preferences' and 'Clear All' buttons below the form.",
        "Create a div element with id='display' to show saved preferences.",
        "Write JavaScript to save all form data to localStorage when 'Save Preferences' is clicked.",
        "Write JavaScript to load and display all saved preferences in the display div.",
        "Implement the 'Clear All' functionality using localStorage.clear().",
        "Add a window.onload event listener to automatically load saved preferences when the page loads.",
        "Ensure the form fields are populated with saved values when the page loads.",
        "Test by filling the form, saving, refreshing the browser, and verifying data persistence."
      ]
    },
    {
      id: 3,
      title: "Shopping Cart with Local Storage",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'shopping-cart.html' with complete HTML5 structure and appropriate title.",
        "Create a simple product list with 4 items, each having a name, price, and 'Add to Cart' button.",
        "Add a 'View Cart' section that displays added items with quantities and total price.",
        "Add 'Clear Cart' and 'Remove Item' buttons in the cart section.",
        "Write JavaScript to store cart items as an array of objects in localStorage.",
        "Each cart item should be an object with properties: name, price, and quantity.",
        "Implement addToCart() function that adds items to localStorage and updates the display.",
        "Implement removeFromCart() function that removes specific items from localStorage.",
        "Implement clearCart() function that clears all cart data from localStorage.",
        "Create updateCartDisplay() function that shows current cart contents and calculates total price.",
        "Use JSON.stringify() when saving cart data and JSON.parse() when retrieving it.",
        "Add error handling for cases where localStorage is not supported or data is corrupted.",
        "Test all functionality: adding items, viewing cart, removing items, clearing cart, and page refresh persistence."
      ]
    },
    {
      id: 4,
      title: "Note-Taking App with Storage",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'notes-app.html' for a simple note-taking application using local storage.",
        "Design the page with a textarea for writing notes and buttons for 'Save Note', 'Load Notes', and 'Delete All Notes'.",
        "Add a section to display all saved notes with timestamps.",
        "Create functionality to save notes with timestamps to localStorage as an array of note objects.",
        "Each note object should contain: content, timestamp, and a unique ID.",
        "Implement displayNotes() function that shows all saved notes with their creation times.",
        "Add the ability to delete individual notes by adding a 'Delete' button next to each displayed note.",
        "Use the current date and time for timestamps (new Date().toLocaleString()).",
        "Ensure notes persist across browser sessions by loading them automatically when the page loads.",
        "Add input validation to prevent saving empty notes.",
        "Test the complete workflow: creating notes, saving them, refreshing the page, and managing the note list."
      ]
    },
    {
      id: 5,
      title: "Advanced Local Storage Manager",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'storage-manager.html' as a comprehensive local storage management tool.",
        "Build an interface with tabs or sections for different types of data: User Profile, Settings, and Data Export.",
        "In the User Profile section, create form fields for: name, email, phone, address, and profile picture URL.",
        "In the Settings section, add options for: theme (light/dark), language (English/Spanish/French), and notifications (on/off).",
        "Create a Data Export section with buttons to 'Export All Data' and 'Import Data'.",
        "Implement comprehensive save/load functionality for all sections using localStorage.",
        "Add data validation for email format and phone number format before saving.",
        "Create exportData() function that downloads all localStorage data as a JSON file.",
        "Implement importData() function that allows users to upload and restore data from a JSON file.",
        "Add data size tracking that shows how much localStorage space is being used.",
        "Include error handling for localStorage quota exceeded and data corruption scenarios.",
        "Add a 'Reset to Defaults' button that clears all data and restores default values.",
        "Ensure all data persists across browser sessions and implement auto-save functionality.",
        "Test thoroughly with various data combinations and edge cases including large amounts of data."
      ]
    }
  ]
};
