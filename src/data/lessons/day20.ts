
import { DayLesson } from "../types";

export const day20: DayLesson = {
  day: 20,
  title: "HTML Geolocation",
  category: "HTML5 Features",
  description: "Learn to access user location data using HTML5 Geolocation API for location-aware web applications.",
  learningObjectives: [
    "Understand the HTML5 Geolocation API and its capabilities.",
    "Learn to request and handle user location permissions.",
    "Master getting current position and watching position changes.",
    "Handle geolocation errors and provide fallback options."
  ],
  detailedExplanation: `
The HTML5 Geolocation API allows web applications to access the user's geographical location with their permission.

## Checking Geolocation Support
Always check if geolocation is supported:

\`\`\`html
<script>
if (navigator.geolocation) {
  console.log("Geolocation is supported");
} else {
  console.log("Geolocation is not supported");
}
</script>
\`\`\`

## Getting Current Position
Use getCurrentPosition() to get the user's location:

\`\`\`html
<script>
navigator.geolocation.getCurrentPosition(
  function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("Latitude: " + latitude);
    console.log("Longitude: " + longitude);
  },
  function(error) {
    console.log("Error: " + error.message);
  }
);
</script>
\`\`\`

## Position Object Properties
The position object contains various location data:

\`\`\`html
<script>
function showPosition(position) {
  const coords = position.coords;
  console.log("Latitude: " + coords.latitude);
  console.log("Longitude: " + coords.longitude);
  console.log("Accuracy: " + coords.accuracy + " meters");
  console.log("Altitude: " + coords.altitude);
  console.log("Speed: " + coords.speed);
  console.log("Timestamp: " + position.timestamp);
}
</script>
\`\`\`

## Error Handling
Handle different types of geolocation errors:

\`\`\`html
<script>
function handleError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
    default:
      console.log("An unknown error occurred.");
      break;
  }
}
</script>
\`\`\`

## Watching Position Changes
Monitor location changes with watchPosition():

\`\`\`html
<script>
const watchId = navigator.geolocation.watchPosition(
  function(position) {
    console.log("New position: " + position.coords.latitude + ", " + position.coords.longitude);
  },
  function(error) {
    console.log("Watch error: " + error.message);
  }
);

// Stop watching
navigator.geolocation.clearWatch(watchId);
</script>
\`\`\`

## Complete Geolocation Example
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Geolocation Demo</title>
</head>
<body>
  <h1>HTML5 Geolocation</h1>
  <button onclick="getLocation()">Get My Location</button>
  <p id="demo"></p>
  
  <script>
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
      }
    }
    
    function showPosition(position) {
      document.getElementById("demo").innerHTML = 
        "Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude +
        "<br>Accuracy: " + position.coords.accuracy + " meters";
    }
    
    function showError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          document.getElementById("demo").innerHTML = "User denied the request for Geolocation.";
          break;
        case error.POSITION_UNAVAILABLE:
          document.getElementById("demo").innerHTML = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          document.getElementById("demo").innerHTML = "The request to get user location timed out.";
          break;
        default:
          document.getElementById("demo").innerHTML = "An unknown error occurred.";
          break;
      }
    }
  </script>
</body>
</html>
\`\`\`
    `,
  keyTerms: [
    { term: "Geolocation API", definition: "HTML5 API that allows web applications to access the user's geographical location." },
    { term: "getCurrentPosition()", definition: "Method to retrieve the user's current geographical position once." },
    { term: "watchPosition()", definition: "Method to continuously monitor the user's location changes." },
    { term: "Position Object", definition: "Object containing geographical coordinates and related information." },
    { term: "Permission Denied", definition: "Error type when user refuses to share location data." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Geolocation Check",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'geolocation-check.html' with complete HTML5 structure.",
        "Add an h1 heading with text 'Geolocation Support Test'.",
        "Create a paragraph with id='support-status' to display the result.",
        "Write a script that checks if navigator.geolocation is available.",
        "If geolocation is supported, display 'Your browser supports geolocation!' in the paragraph.",
        "If not supported, display 'Geolocation is not supported by your browser.' in the paragraph.",
        "Add a button with text 'Check Support' that calls a function to perform this check.",
        "Test the page in your browser and verify the correct message appears."
      ]
    },
    {
      id: 2,
      title: "Get Current Location",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'current-location.html' with proper HTML5 document structure.",
        "Add a heading 'My Current Location' and a button with text 'Get Location'.",
        "Create a div with id='location-info' to display location results.",
        "Write a JavaScript function that uses navigator.geolocation.getCurrentPosition().",
        "In the success callback function, extract latitude and longitude from position.coords.",
        "Display the coordinates in the location-info div with proper labels.",
        "Also display the accuracy in meters from position.coords.accuracy.",
        "Create an error callback function that handles geolocation errors.",
        "Display appropriate error messages for different error types (permission denied, unavailable, timeout).",
        "Add the onclick event to the button to call your location function.",
        "Test the functionality and handle the permission prompt appropriately."
      ]
    },
    {
      id: 3,
      title: "Enhanced Location Display",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'enhanced-location.html' with complete HTML structure.",
        "Add a comprehensive interface with multiple buttons and display areas.",
        "Create buttons for: 'Get Current Location', 'Start Watching Location', 'Stop Watching'.",
        "Add separate div elements to display: current location, location history, and status messages.",
        "Implement getCurrentPosition() with detailed position information display.",
        "Show latitude, longitude, accuracy, altitude (if available), speed (if available), and timestamp.",
        "Implement watchPosition() to continuously monitor location changes.",
        "Store a history of location updates in an array and display them in a list format.",
        "Add proper error handling for all geolocation operations with user-friendly messages.",
        "Include a counter showing how many location updates have been received.",
        "Implement clearWatch() functionality to stop location monitoring.",
        "Style the interface with basic HTML formatting to make it readable and organized.",
        "Test all functionality including starting/stopping location watching."
      ]
    },
    {
      id: 4,
      title: "Location-Based Information",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'location-info.html' that provides useful information based on user location.",
        "Set up a clean interface with a title 'Location-Based Services'.",
        "Add a button to get the user's current location with permission handling.",
        "Display the coordinates with labels and include the accuracy information.",
        "Calculate and display the user's approximate address format (just show coordinates for now).",
        "Add a section that shows the timestamp of when the location was obtained.",
        "Include information about the altitude and speed if available from the geolocation data.",
        "Create a 'Location History' section that stores and displays the last 5 location requests.",
        "Add a button to clear the location history.",
        "Implement comprehensive error handling with user-friendly messages for all error scenarios.",
        "Include a section explaining what geolocation is and why permission is needed.",
        "Add a privacy notice explaining that location data is not stored or transmitted.",
        "Test the application thoroughly and ensure it gracefully handles permission denial."
      ]
    },
    {
      id: 5,
      title: "Advanced Location Tracker",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'location-tracker.html' as a comprehensive location tracking application.",
        "Design a professional interface with multiple sections for different functionality.",
        "Implement both getCurrentPosition() and watchPosition() with full error handling.",
        "Create a real-time location display that updates automatically when tracking is enabled.",
        "Add a location log that records all position updates with timestamps.",
        "Implement options to configure the geolocation settings (timeout, maximumAge, enableHighAccuracy).",
        "Create a statistics section showing: total updates received, average accuracy, time elapsed.",
        "Add functionality to export location data as a formatted text summary.",
        "Include a map coordinates section that shows location in degrees, minutes, seconds format.",
        "Implement distance calculation between consecutive location updates (using basic coordinate math).",
        "Add visual indicators showing tracking status (active/inactive) and connection quality based on accuracy.",
        "Create a settings panel where users can adjust tracking frequency and accuracy requirements.",
        "Include comprehensive help documentation explaining all features and privacy considerations.",
        "Add local storage functionality to remember user preferences (not location data for privacy).",
        "Test extensively with different scenarios: permission denial, location unavailable, timeout conditions.",
        "Ensure the application is fully functional and provides a professional user experience."
      ]
    }
  ]
};
