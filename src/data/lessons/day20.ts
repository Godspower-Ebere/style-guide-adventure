
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
Ready to make your websites location-aware? The HTML5 Geolocation API is like giving your website a GPS system - it can help you find where your users are located (with their permission, of course!). This opens up amazing possibilities for creating personalized, location-based experiences.

## What is Geolocation?

Think about all the apps on your phone that ask "Allow access to your location?" - that's geolocation in action! The HTML5 Geolocation API lets websites request the user's geographical position using:
- **GPS** (most accurate, mainly on mobile devices)
- **Wi-Fi positioning** (triangulation from Wi-Fi networks)
- **IP address** (least accurate, but always available)
- **Cell tower triangulation** (on mobile devices)

## Why Use Geolocation?

Geolocation enables awesome features like:
- **Local business finder** - "Find pizza shops near me"
- **Weather apps** - Show weather for current location
- **Fitness tracking** - Track running routes
- **Emergency services** - Quick location sharing
- **Delivery services** - Auto-fill address forms
- **Social media** - Location-based posts and check-ins

## Checking for Geolocation Support

Always check if the user's browser supports geolocation:

\`\`\`html
<script>
if (navigator.geolocation) {
    console.log("Great! Geolocation is supported in this browser.");
    // We can use geolocation features
} else {
    console.log("Sorry, geolocation is not supported by this browser.");
    // Provide alternative options
}
</script>
\`\`\`

## Getting the User's Current Position

The main method is getCurrentPosition() - think of it as asking "Where am I right now?"

\`\`\`html
<script>
// Basic usage
navigator.geolocation.getCurrentPosition(
    function(position) {
        // Success! We got the location
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        console.log("You are at:");
        console.log("Latitude: " + latitude);
        console.log("Longitude: " + longitude);
    },
    function(error) {
        // Something went wrong
        console.log("Error getting location: " + error.message);
    }
);
</script>
\`\`\`

## Understanding the Position Object

When geolocation succeeds, you get a position object packed with useful information:

\`\`\`html
<script>
function showDetailedPosition(position) {
    const coords = position.coords;
    
    console.log("=== Your Location Details ===");
    console.log("Latitude: " + coords.latitude + "°");
    console.log("Longitude: " + coords.longitude + "°");
    console.log("Accuracy: " + coords.accuracy + " meters");
    
    // These might be null if not available
    if (coords.altitude !== null) {
        console.log("Altitude: " + coords.altitude + " meters");
        console.log("Altitude accuracy: " + coords.altitudeAccuracy + " meters");
    }
    
    if (coords.heading !== null) {
        console.log("Heading: " + coords.heading + "° (0=North, 90=East)");
    }
    
    if (coords.speed !== null) {
        console.log("Speed: " + coords.speed + " m/s");
    }
    
    console.log("Timestamp: " + new Date(position.timestamp));
}

navigator.geolocation.getCurrentPosition(showDetailedPosition);
</script>
\`\`\`

## Handling Geolocation Errors

Not everything always goes smoothly - users might deny permission, or their location might be unavailable:

\`\`\`html
<script>
function handleLocationError(error) {
    let errorMessage = "An unknown error occurred.";
    
    switch(error.code) {
        case error.PERMISSION_DENIED:
            errorMessage = "User denied the request for Geolocation. 🚫";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable. 📍❌";
            break;
        case error.TIMEOUT:
            errorMessage = "The request to get user location timed out. ⏰";
            break;
    }
    
    console.log("Geolocation Error: " + errorMessage);
    
    // Provide fallback options
    askUserForManualLocation();
}

function askUserForManualLocation() {
    const city = prompt("Since we couldn't get your location automatically, which city are you in?");
    if (city) {
        console.log("Thanks! Using " + city + " as your location.");
        // Use a geocoding service to convert city name to coordinates
    }
}
</script>
\`\`\`

## Watching Position Changes

For apps that need to track movement (like fitness apps or navigation), use watchPosition():

\`\`\`html
<script>
let watchId;
let positionCount = 0;

function startWatchingLocation() {
    watchId = navigator.geolocation.watchPosition(
        function(position) {
            positionCount++;
            console.log("Position Update #" + positionCount);
            console.log("New location: " + position.coords.latitude + ", " + position.coords.longitude);
            console.log("Accuracy: " + position.coords.accuracy + " meters");
            
            // Update your app with the new position
            updateMapLocation(position.coords.latitude, position.coords.longitude);
        },
        function(error) {
            console.log("Watch error: " + error.message);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 60000
        }
    );
    
    console.log("Started watching location. Watch ID: " + watchId);
}

function stopWatchingLocation() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        console.log("Stopped watching location.");
        watchId = null;
    }
}

function updateMapLocation(lat, lng) {
    // This would update your map or UI with the new location
    console.log("Map updated to show: " + lat + ", " + lng);
}
</script>
\`\`\`

## Geolocation Options

You can fine-tune how geolocation works:

\`\`\`html
<script>
const locationOptions = {
    enableHighAccuracy: true,    // Use GPS if available (more accurate but slower)
    timeout: 10000,             // Wait up to 10 seconds for a result
    maximumAge: 300000          // Accept cached location up to 5 minutes old
};

navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback,
    locationOptions
);
</script>
\`\`\`

## Complete Real-World Example - Local Weather App

Let me show you a practical application:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Location Weather App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #74b9ff, #0984e3);
            color: white;
        }
        
        .container {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        
        button {
            background: #00b894;
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 16px;
            margin: 10px 5px;
            transition: background 0.3s;
        }
        
        button:hover {
            background: #00a085;
        }
        
        button:disabled {
            background: #636e72;
            cursor: not-allowed;
        }
        
        .location-info, .error-message {
            background: rgba(255, 255, 255, 0.2);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
        }
        
        .error-message {
            background: rgba(231, 76, 60, 0.3);
        }
        
        .loading {
            text-align: center;
            font-style: italic;
        }
        
        .coordinates {
            font-family: monospace;
            background: rgba(0, 0, 0, 0.2);
            padding: 10px;
            border-radius: 5px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌍 My Location Finder</h1>
        <p>Discover your current location and get local information!</p>
        
        <div class="controls">
            <button onclick="getCurrentLocation()">📍 Get My Location</button>
            <button onclick="startWatching()">👁️ Start Watching</button>
            <button onclick="stopWatching()">⏹️ Stop Watching</button>
            <button onclick="clearResults()">🧹 Clear Results</button>
        </div>
        
        <div id="status"></div>
        <div id="locationInfo"></div>
        <div id="watchInfo"></div>
    </div>

    <script>
        let watchId = null;
        let watchCount = 0;

        // Check if geolocation is supported
        if (!navigator.geolocation) {
            document.getElementById('status').innerHTML = 
                '<div class="error-message">❌ Geolocation is not supported by this browser.</div>';
        }

        function getCurrentLocation() {
            document.getElementById('status').innerHTML = 
                '<div class="loading">🔍 Getting your location...</div>';
            
            const options = {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000
            };

            navigator.geolocation.getCurrentPosition(
                showPosition,
                showError,
                options
            );
        }

        function showPosition(position) {
            const coords = position.coords;
            const timestamp = new Date(position.timestamp);
            
            let html = '<div class="location-info">';
            html += '<h3>📍 Your Current Location</h3>';
            html += '<p><strong>Latitude:</strong> ' + coords.latitude.toFixed(6) + '°</p>';
            html += '<p><strong>Longitude:</strong> ' + coords.longitude.toFixed(6) + '°</p>';
            html += '<p><strong>Accuracy:</strong> ' + Math.round(coords.accuracy) + ' meters</p>';
            
            if (coords.altitude !== null) {
                html += '<p><strong>Altitude:</strong> ' + Math.round(coords.altitude) + ' meters</p>';
            }
            
            if (coords.speed !== null) {
                html += '<p><strong>Speed:</strong> ' + Math.round(coords.speed * 3.6) + ' km/h</p>';
            }
            
            html += '<p><strong>Time:</strong> ' + timestamp.toLocaleString() + '</p>';
            
            html += '<div class="coordinates">';
            html += 'Google Maps: <a href="https://maps.google.com/?q=' + coords.latitude + ',' + coords.longitude + '" target="_blank" style="color: #74b9ff;">View on Map</a>';
            html += '</div>';
            
            html += '</div>';
            
            document.getElementById('locationInfo').innerHTML = html;
            document.getElementById('status').innerHTML = '<div class="location-info">✅ Location found successfully!</div>';
        }

        function showError(error) {
            let errorMessage = '';
            
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = "❌ You denied the request for location access. Please enable location services and try again.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = "📍❌ Location information is unavailable. Check your internet connection or try again later.";
                    break;
                case error.TIMEOUT:
                    errorMessage = "⏰ Location request timed out. Please try again.";
                    break;
                default:
                    errorMessage = "❓ An unknown error occurred while retrieving your location.";
                    break;
            }
            
            document.getElementById('status').innerHTML = 
                '<div class="error-message">' + errorMessage + '</div>';
        }

        function startWatching() {
            if (watchId !== null) {
                document.getElementById('status').innerHTML = 
                    '<div class="error-message">👁️ Already watching your location!</div>';
                return;
            }

            watchCount = 0;
            document.getElementById('watchInfo').innerHTML = '';
            document.getElementById('status').innerHTML = 
                '<div class="loading">👁️ Started watching your location...</div>';

            const options = {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 30000
            };

            watchId = navigator.geolocation.watchPosition(
                function(position) {
                    watchCount++;
                    const coords = position.coords;
                    const timestamp = new Date(position.timestamp);
                    
                    let html = document.getElementById('watchInfo').innerHTML;
                    html += '<div class="location-info">';
                    html += '<h4>📍 Position Update #' + watchCount + '</h4>';
                    html += '<p>Lat: ' + coords.latitude.toFixed(6) + '°, ';
                    html += 'Lng: ' + coords.longitude.toFixed(6) + '°</p>';
                    html += '<p>Accuracy: ' + Math.round(coords.accuracy) + 'm | ';
                    html += 'Time: ' + timestamp.toLocaleTimeString() + '</p>';
                    html += '</div>';
                    
                    document.getElementById('watchInfo').innerHTML = html;
                    document.getElementById('status').innerHTML = 
                        '<div class="location-info">👁️ Watching location (Update #' + watchCount + ')</div>';
                },
                function(error) {
                    document.getElementById('status').innerHTML = 
                        '<div class="error-message">👁️❌ Watch error: ' + error.message + '</div>';
                },
                options
            );
        }

        function stopWatching() {
            if (watchId !== null) {
                navigator.geolocation.clearWatch(watchId);
                watchId = null;
                document.getElementById('status').innerHTML = 
                    '<div class="location-info">⏹️ Stopped watching location.</div>';
            } else {
                document.getElementById('status').innerHTML = 
                    '<div class="error-message">⏹️ Not currently watching location.</div>';
            }
        }

        function clearResults() {
            document.getElementById('locationInfo').innerHTML = '';
            document.getElementById('watchInfo').innerHTML = '';
            document.getElementById('status').innerHTML = '';
            if (watchId !== null) {
                stopWatching();
            }
        }

        // Show initial message
        document.getElementById('status').innerHTML = 
            '<div class="location-info">👋 Welcome! Click "Get My Location" to start.</div>';
    </script>
</body>
</html>
\`\`\`

## Privacy and Security Considerations

### User Permission is Required
- Browsers will always ask users for permission
- Users can deny or revoke permission at any time
- Always provide fallback options when permission is denied

### HTTPS is Often Required
- Many browsers require HTTPS for geolocation to work
- This protects user privacy and prevents man-in-the-middle attacks

### Best Practices
1. **Ask permission respectfully** - Explain why you need location data
2. **Provide value** - Make sure location features genuinely help users
3. **Handle errors gracefully** - Always have fallback options
4. **Don't store unnecessarily** - Only keep location data as long as needed
5. **Be transparent** - Tell users how you'll use their location data

## Real-World Applications

### Store Locator
\`\`\`html
<script>
function findNearbyStores(position) {
    const userLat = position.coords.latitude;
    const userLng = position.coords.longitude;
    
    // In a real app, you'd query your database
    const stores = [
        {name: "Downtown Store", lat: userLat + 0.01, lng: userLng + 0.01},
        {name: "Mall Location", lat: userLat - 0.02, lng: userLng + 0.015}
    ];
    
    stores.forEach(store => {
        const distance = calculateDistance(userLat, userLng, store.lat, store.lng);
        console.log(store.name + " is " + distance.toFixed(2) + " km away");
    });
}

function calculateDistance(lat1, lng1, lat2, lng2) {
    // Haversine formula for calculating distance between two points
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}
</script>
\`\`\`

### Weather by Location
\`\`\`html
<script>
function getWeatherByLocation(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    
    // In a real app, you'd call a weather API
    console.log("Getting weather for coordinates: " + lat + ", " + lng);
    // fetch('https://api.weather.com/...')
}
</script>
\`\`\`

Geolocation opens up amazing possibilities for creating location-aware web applications. Remember to always respect user privacy, handle errors gracefully, and provide real value in exchange for location access. The key is to make users feel comfortable sharing their location by being transparent about how you'll use it!
    `,
  keyTerms: [
    { term: "Geolocation API", definition: "HTML5 API that allows web applications to access the user's geographical location with permission." },
    { term: "getCurrentPosition()", definition: "Method to retrieve the user's current geographical position once." },
    { term: "watchPosition()", definition: "Method to continuously monitor the user's location changes over time." },
    { term: "Position Object", definition: "Object containing geographical coordinates and related information like accuracy and timestamp." },
    { term: "Permission Denied", definition: "Error type when user refuses to share location data with the web application." },
    { term: "Location Accuracy", definition: "Measurement in meters indicating how precise the location data is." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Location Detection",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'basic-location.html' with complete HTML5 structure.",
        "Add a heading 'My Location Finder' and a button labeled 'Get My Location'.",
        "Create a div with id='locationDisplay' to show location results.",
        "Write JavaScript to check if navigator.geolocation is supported in the browser.",
        "If supported, display a message saying 'Geolocation is available!'.",
        "If not supported, display 'Geolocation is not supported by your browser.'",
        "Add click event to the button that calls navigator.geolocation.getCurrentPosition().",
        "Display latitude and longitude in the locationDisplay div when location is found.",
        "Test the functionality in your browser and handle the permission prompt."
      ]
    },
    {
      id: 2,
      title: "Location with Error Handling",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'location-with-errors.html' with proper HTML5 document structure.",
        "Add interface elements: title, 'Get Location' button, and result display area.",
        "Implement getCurrentPosition() with both success and error callback functions.",
        "In success callback, display latitude, longitude, and accuracy information.",
        "Create comprehensive error handling for all three error types: PERMISSION_DENIED, POSITION_UNAVAILABLE, TIMEOUT.",
        "Display user-friendly error messages explaining what went wrong and possible solutions.",
        "Add timestamp information showing when the location was obtained.",
        "Include a 'Clear Results' button to reset the display area.",
        "Style the interface with CSS to distinguish between success and error messages.",
        "Test all scenarios: allowing location, denying permission, and handling timeouts."
      ]
    },
    {
      id: 3,
      title: "Location Tracking Application",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'location-tracker.html' for continuous location monitoring.",
        "Design interface with buttons: 'Get Current Location', 'Start Tracking', 'Stop Tracking', 'Clear History'.",
        "Implement getCurrentPosition() for one-time location requests.",
        "Add watchPosition() functionality for continuous location monitoring.",
        "Display current location with coordinates, accuracy, and timestamp.",
        "Create a location history section that logs all position updates.",
        "Add a counter showing total number of location updates received.",
        "Include options to configure tracking settings (high accuracy, timeout values).",
        "Implement proper error handling for both getCurrentPosition and watchPosition.",
        "Style the application with CSS to create a professional tracking interface.",
        "Test all functionality including starting/stopping tracking and clearing history."
      ]
    },
    {
      id: 4,
      title: "Location-Based Services App",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'location-services.html' for a comprehensive location-based application.",
        "Build an attractive interface with multiple sections for different location features.",
        "Implement current location display with detailed information (coordinates, accuracy, altitude if available).",
        "Add a 'Find Nearby' simulation that shows mock nearby places based on current location.",
        "Create a distance calculator that calculates distance between current location and a set destination.",
        "Include a location sharing feature that generates a Google Maps link for the current position.",
        "Add location history with timestamps that stores the last 10 location requests.",
        "Implement comprehensive error handling with user-friendly messages and recovery options.",
        "Include privacy information explaining how location data is used (not stored/transmitted).",
        "Style the application professionally with responsive design principles.",
        "Test thoroughly including permission scenarios and error conditions."
      ]
    },
    {
      id: 5,
      title: "Advanced Geolocation Dashboard",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'geolocation-dashboard.html' as a comprehensive location tracking and analysis tool.",
        "Design a professional dashboard layout with multiple panels for different geolocation features.",
        "Implement both getCurrentPosition() and watchPosition() with advanced configuration options.",
        "Create a real-time location display that updates automatically when tracking is active.",
        "Add a detailed location log with timestamps, accuracy ratings, and movement detection.",
        "Implement location analytics: average accuracy, total distance traveled, time spent tracking.",
        "Create a settings panel where users can adjust geolocation options (accuracy, timeout, cache settings).",
        "Add export functionality to download location data as formatted text or JSON.",
        "Include a map integration section that generates links to various mapping services (Google, Apple, OpenStreetMap).",
        "Implement advanced error handling with retry mechanisms and fallback options.",
        "Add location comparison features that calculate distances and bearing between multiple positions.",
        "Create visual indicators for location quality (accuracy levels) and tracking status.",
        "Include comprehensive help documentation explaining all features and privacy considerations.",
        "Add local storage functionality to save user preferences and location history (with user consent).",
        "Test extensively with different scenarios: various accuracy settings, long-term tracking, error conditions.",
        "Ensure the application works well on both desktop and mobile devices with responsive design."
      ]
    }
  ]
};
