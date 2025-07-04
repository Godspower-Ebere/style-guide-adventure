
import { DayLesson } from "../types";

export const day12: DayLesson = {
  day: 12,
  title: "HTML Forms - Textarea and Advanced Inputs",
  category: "HTML Forms",
  description: "Learn to create multi-line text inputs and explore advanced HTML5 input types for better user experience.",
  learningObjectives: [
    "Master the textarea element for multi-line text input.",
    "Understand HTML5 input types: date, time, color, range, file.",
    "Learn input validation attributes and their usage.",
    "Create comprehensive forms with various input types."
  ],
  detailedExplanation: `
Hey there! Ready to take your forms to the next level? Today we're diving into some really cool form elements that will make your websites feel modern and professional. We're talking about textareas for longer text and those fancy HTML5 input types you see on great websites.

## The Textarea Element - For When One Line Isn't Enough

You know how sometimes a single text input just isn't enough? Like when you're writing a review, leaving a comment, or describing something in detail? That's where textarea comes to the rescue!

<label for="message">Tell us about yourself:</label>
<textarea id="message" name="message" rows="5" cols="50">
You can put default text here if you want...
</textarea>

Let me break down what's happening here:
- **rows**: How many lines tall the textarea should be
- **cols**: How many characters wide it should be
- The text between the tags becomes the default content

## Making Textareas User-Friendly

Here's how to make your textareas even better:

<label for="feedback">Your feedback:</label>
<textarea 
    id="feedback" 
    name="feedback" 
    rows="6" 
    cols="50"
    placeholder="Please share your thoughts here..."
    maxlength="500"
    required>
</textarea>

Those attributes are super helpful:
- **placeholder**: Shows hint text when empty
- **maxlength**: Limits how much they can type
- **required**: Makes the field mandatory

## HTML5 Input Types - The Game Changers

Now, let's talk about these amazing HTML5 input types that make forms so much better!

### Date and Time Inputs

Remember the old days when users had to type dates manually? Those days are over!

<label for="birthday">Your birthday:</label>
<input type="date" id="birthday" name="birthday">

<label for="appointment">Appointment time:</label>
<input type="time" id="appointment" name="appointment">

<label for="meeting">Meeting date and time:</label>
<input type="datetime-local" id="meeting" name="meeting">

<label for="graduation">Graduation month:</label>
<input type="month" id="graduation" name="graduation">

<label for="vacation">Vacation week:</label>
<input type="week" id="vacation" name="vacation">

How cool is that? The browser provides native date/time pickers!

### Color Input - Let Users Pick Colors

Want users to choose a color? There's an input for that!

<label for="theme-color">Choose your theme color:</label>
<input type="color" id="theme-color" name="theme-color" value="#ff0000">

This opens the system color picker - so professional!

### Range Input - Sliders for Numbers

Sliders are perfect for ratings, volume controls, or any numeric range:

<label for="volume">Volume level:</label>
<input type="range" id="volume" name="volume" min="0" max="100" value="50">

<label for="satisfaction">How satisfied are you? (1-10):</label>
<input type="range" id="satisfaction" name="satisfaction" min="1" max="10" value="5">

### File Input - For Uploads

File uploads are essential for modern web apps:

<label for="resume">Upload your resume:</label>
<input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx">

<label for="photos">Select multiple photos:</label>
<input type="file" id="photos" name="photos" multiple accept="image/*">

The **accept** attribute filters what file types users can select, and **multiple** allows multiple files.

## Input Validation - Built Right In

HTML5 gives us amazing validation without JavaScript:

<label for="email">Your email:</label>
<input type="email" id="email" name="email" required>

<label for="website">Your website:</label>
<input type="url" id="website" name="website" placeholder="https://example.com">

<label for="age">Your age:</label>
<input type="number" id="age" name="age" min="13" max="120" required>

<label for="username">Username (3-16 characters, letters and numbers only):</label>
<input type="text" id="username" name="username" pattern="[a-zA-Z0-9]{3,16}" required>

Look at those validation attributes:
- **type="email"**: Validates email format
- **type="url"**: Validates URL format
- **min/max**: Sets number ranges
- **pattern**: Uses regular expressions for custom validation

## Complete Real-World Example

Let me show you how all this comes together in a real profile setup form:

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Complete Profile Setup</title>
</head>
<body>
    <h1>Create Your Profile</h1>
    <form>
        <fieldset>
            <legend>Personal Information</legend>
            
            <label for="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname" required>
            
            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone">
            
            <label for="birthday">Date of Birth:</label>
            <input type="date" id="birthday" name="birthday">
            
            <label for="website">Personal Website:</label>
            <input type="url" id="website" name="website" placeholder="https://yoursite.com">
        </fieldset>
        
        <fieldset>
            <legend>Preferences</legend>
            
            <label for="theme">Favorite Color:</label>
            <input type="color" id="theme" name="theme" value="#3498db">
            
            <label for="notifications">Notification Frequency:</label>
            <input type="range" id="notifications" name="notifications" min="0" max="5" value="3">
            
            <label for="avatar">Profile Picture:</label>
            <input type="file" id="avatar" name="avatar" accept="image/*">
        </fieldset>
        
        <label for="bio">Tell us about yourself:</label>
        <textarea id="bio" name="bio" rows="5" cols="50" 
                  placeholder="Share a bit about your interests, background, or goals..." 
                  maxlength="500"></textarea>
        
        <button type="submit">Create Profile</button>
        <button type="reset">Start Over</button>
    </form>
</body>
</html>

## Pro Tips for Modern Forms

1. **Use the right input type** - It improves user experience dramatically
2. **Add placeholder text** - Guide users on what to enter
3. **Set appropriate limits** - Use min, max, maxlength wisely
4. **Group related fields** - Use fieldset and legend for organization
5. **Test on mobile** - These input types work great on phones and tablets
6. **Provide clear labels** - Always connect labels to inputs properly

The beauty of these HTML5 input types is that they gracefully degrade - if a browser doesn't support them, they just act like regular text inputs. But in modern browsers, they provide amazing user experiences!
    `,
  keyTerms: [
    { term: "Textarea", definition: "HTML element for multi-line text input with customizable dimensions and character limits." },
    { term: "HTML5 Input Types", definition: "Advanced input types like date, color, range that provide specialized user interfaces." },
    { term: "Input Validation", definition: "Built-in HTML attributes that validate user input before form submission." },
    { term: "Accept Attribute", definition: "Specifies which file types are allowed for file input elements." },
    { term: "Pattern Attribute", definition: "Defines a regular expression that the input value must match for validation." }
  ],
  exercises: [
    {
      id: 1,
      title: "Contact Form with Textarea",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'contact-form.html' with proper HTML5 structure.",
        "Add a heading 'Contact Us' and create a contact form.",
        "Include text inputs for name and email with proper labels.",
        "Add a textarea for the message with 6 rows and 50 columns.",
        "Set a placeholder text in the textarea saying 'Please describe your inquiry...'",
        "Add a maxlength of 300 characters to the textarea.",
        "Include submit and reset buttons.",
        "Test the form and verify the textarea behaves correctly."
      ]
    },
    {
      id: 2,
      title: "Event Registration with Date/Time",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'event-registration.html' for event signup.",
        "Add form fields for participant name and email.",
        "Include a date input for preferred event date.",
        "Add a time input for preferred start time.",
        "Create a number input for number of attendees (min: 1, max: 10).",
        "Add a file input for uploading identification (accept PDF only).",
        "Include proper labels and validation attributes for all fields.",
        "Add a textarea for special requirements or comments.",
        "Test all input types and their validation behavior."
      ]
    },
    {
      id: 3,
      title: "Advanced Profile Form",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'advanced-profile.html' with comprehensive form elements.",
        "Use various HTML5 inputs: text, email, date, color, range, file, url.",
        "Add a large textarea for biography section with character counter concept.",
        "Include a color input for theme preference.",
        "Add range inputs for skill levels in different areas (1-10 scale).",
        "Create file input for profile picture with image format restrictions.",
        "Use proper validation attributes throughout (required, min, max, pattern).",
        "Organize form sections with fieldsets and legends.",
        "Test all functionality and ensure proper validation works."
      ]
    },
    {
      id: 4,
      title: "Job Application Form",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'job-application.html' for a complete job application system.",
        "Include personal information section with text, email, tel, and date inputs.",
        "Add work experience textarea with adequate size for detailed descriptions.",
        "Include salary expectation with number input and appropriate min/max values.",
        "Add file upload for resume (accept PDF and DOC formats).",
        "Create availability section with date inputs for start date.",
        "Include URL input for portfolio or LinkedIn profile.",
        "Add range inputs for self-assessment of various skills.",
        "Ensure all fields have proper validation and user-friendly error handling."
      ]
    },
    {
      id: 5,
      title: "Creative Portfolio Submission",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'portfolio-submission.html' for creative professionals.",
        "Design a comprehensive form using all advanced input types covered.",
        "Include multiple file upload for portfolio pieces (images, PDFs).",
        "Add date inputs for project completion dates and availability.",
        "Create color inputs for brand color preferences.",
        "Include range sliders for experience levels in different creative areas.",
        "Add large textareas for project descriptions and creative philosophy.",
        "Use URL inputs for social media and portfolio website links.",
        "Implement proper form structure with fieldsets for different sections.",
        "Add comprehensive validation and ensure excellent user experience.",
        "Test thoroughly across different browsers and document any differences.",
        "Style the form with CSS to make it visually appealing and professional."
      ]
    }
  ]
};
