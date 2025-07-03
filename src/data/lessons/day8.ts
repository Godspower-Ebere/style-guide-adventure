
import { DayLesson } from "../types";

export const day8: DayLesson = {
  day: 8,
  title: "HTML Forms - Your Gateway to User Interaction",
  category: "HTML Forms",
  description: "Welcome to day 8! Today we're diving into one of the most exciting parts of web development - HTML forms! This is where your websites stop being just displays and start becoming interactive experiences. You'll learn how to collect information from your visitors, whether it's contact details, feedback, or user registrations. Get ready to make your websites truly interactive!",
  learningObjectives: [
    "Master the fundamental form structure with <form>, <input>, and <label> elements",
    "Learn essential input types: text, email, password, number, and date",
    "Understand form attributes that make forms functional and user-friendly",
    "Discover how to create accessible forms that work for everyone",
    "Practice building real-world forms for contact, registration, and data collection"
  ],
  detailedExplanation: `
## Welcome to Day 8 - Let's Make Your Website Interactive!

Hey there! Congratulations on making it to day 8. You've learned so much - HTML structure, formatting, lists, links, images, and tables. Today we're taking a huge leap forward by learning about HTML forms - the bridge between your website and your visitors!

### Why Forms Are Game-Changers for Your Website

Think about every website you use regularly. How do you:
- Log into your social media accounts?
- Search for something on Google?
- Leave a review on Amazon?
- Sign up for a newsletter?
- Contact customer support?

The answer is forms! Forms transform your website from a one-way street (you showing information) into a two-way conversation (visitors interacting with your content).

### The Foundation: Understanding Form Structure

Every HTML form starts with the \`<form>\` element. Think of it as a container that holds all your input fields and tells the browser what to do when someone submits the form:

\`\`\`html
<form action="/submit" method="post">
  <!-- All your form inputs go here -->
</form>
\`\`\`

The two most important attributes are:
- **action** - Where the form data goes when submitted
- **method** - How the data is sent (usually "post" for sensitive data)

### Your First Form Input: The Text Field

The most basic input type is text. Here's how it works:

\`\`\`html
<form>
  <label for="username">Enter your username:</label>
  <input type="text" id="username" name="username" placeholder="johndoe123">
</form>
\`\`\`

Let me break this down:
- **\`<label>\`** - Tells users what the input is for
- **\`for="username"\`** - Connects the label to the input
- **\`type="text"\`** - Creates a text input field
- **\`id="username"\`** - Unique identifier (matches the label's "for")
- **\`name="username"\`** - How the server identifies this data
- **\`placeholder\`** - Helpful hint text that appears in the field

### Essential Input Types You'll Use All the Time

**Text Input** - For general text like names:
\`\`\`html
<label for="fullname">Full Name:</label>
<input type="text" id="fullname" name="fullname" placeholder="Enter your full name">
\`\`\`

**Email Input** - Automatically validates email format:
\`\`\`html
<label for="email">Email Address:</label>
<input type="email" id="email" name="email" placeholder="you@example.com" required>
\`\`\`

**Password Input** - Hides text as you type:
\`\`\`html
<label for="password">Password:</label>
<input type="password" id="password" name="password" placeholder="Enter secure password">
\`\`\`

**Number Input** - Only allows numbers:
\`\`\`html
<label for="age">Age:</label>
<input type="number" id="age" name="age" min="13" max="120" placeholder="25">
\`\`\`

**Date Input** - Provides a date picker:
\`\`\`html
<label for="birthday">Birthday:</label>
<input type="date" id="birthday" name="birthday">
\`\`\`

**Phone Input** - Optimized for phone numbers:
\`\`\`html
<label for="phone">Phone Number:</label>
<input type="tel" id="phone" name="phone" placeholder="(555) 123-4567">
\`\`\`

### Making Forms User-Friendly with Attributes

**Required Fields** - Makes fields mandatory:
\`\`\`html
<input type="email" name="email" required>
\`\`\`

**Character Limits** - Controls input length:
\`\`\`html
<input type="text" name="username" maxlength="20" minlength="3">
\`\`\`

**Numeric Limits** - Sets number ranges:
\`\`\`html
<input type="number" name="quantity" min="1" max="100">
\`\`\`

**Default Values** - Pre-fills inputs:
\`\`\`html
<input type="text" name="country" value="United States">
\`\`\`

### Your First Complete Contact Form

Let me show you how to build a real contact form that you might use on a business website:

\`\`\`html
<form action="/contact" method="post">
  <h2>Contact Us</h2>
  
  <label for="name">Your Name:</label>
  <input type="text" id="name" name="name" placeholder="Enter your full name" required>
  
  <label for="email">Email Address:</label>
  <input type="email" id="email" name="email" placeholder="your@email.com" required>
  
  <label for="phone">Phone Number:</label>
  <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567">
  
  <label for="subject">Subject:</label>
  <input type="text" id="subject" name="subject" placeholder="What is this regarding?">
  
  <label for="message">Message:</label>
  <textarea id="message" name="message" placeholder="Tell us how we can help you..." required></textarea>
  
  <button type="submit">Send Message</button>
</form>
\`\`\`

Notice how I used different input types based on the data being collected, and included helpful placeholder text and required attributes where appropriate.

### Understanding Form Methods: GET vs POST

**GET Method** - Data appears in the URL:
\`\`\`html
<form action="/search" method="get">
  <input type="text" name="query" placeholder="Search...">
  <button type="submit">Search</button>
</form>
\`\`\`
URL becomes: website.com/search?query=html+forms

**POST Method** - Data is sent privately:
\`\`\`html
<form action="/login" method="post">
  <input type="email" name="email" required>
  <input type="password" name="password" required>
  <button type="submit">Log In</button>
</form>
\`\`\`

Use GET for searches, POST for sensitive information like passwords or personal data.

### Real-World Example: User Registration Form

Here's a comprehensive registration form that demonstrates multiple input types and validation:

\`\`\`html
<form action="/register" method="post">
  <h2>Create Your Account</h2>
  
  <fieldset>
    <legend>Personal Information</legend>
    
    <label for="firstname">First Name:</label>
    <input type="text" id="firstname" name="firstname" required maxlength="50">
    
    <label for="lastname">Last Name:</label>
    <input type="text" id="lastname" name="lastname" required maxlength="50">
    
    <label for="birthdate">Date of Birth:</label>
    <input type="date" id="birthdate" name="birthdate" required>
    
    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567">
  </fieldset>
  
  <fieldset>
    <legend>Account Details</legend>
    
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required minlength="3" maxlength="20">
    
    <label for="email">Email Address:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required minlength="8">
    
    <label for="confirm-password">Confirm Password:</label>
    <input type="password" id="confirm-password" name="confirm-password" required>
  </fieldset>
  
  <button type="submit">Create Account</button>
  <button type="reset">Clear Form</button>
</form>
\`\`\`

### Form Accessibility: Making Forms Work for Everyone

**Always use labels** - Every input should have a descriptive label:
\`\`\`html
<label for="email">Email Address:</label>
<input type="email" id="email" name="email">
\`\`\`

**Group related fields** - Use fieldset and legend:
\`\`\`html
<fieldset>
  <legend>Shipping Address</legend>
  <!-- address fields here -->
</fieldset>
\`\`\`

**Provide helpful hints** - Use placeholder text and descriptions:
\`\`\`html
<label for="password">Password:</label>
<input type="password" id="password" name="password">
<small>Password must be at least 8 characters long</small>
\`\`\`

### Form Validation: Helping Users Get It Right

**HTML5 validation** happens automatically with certain input types and attributes:
- \`type="email"\` validates email format
- \`required\` makes fields mandatory
- \`min\` and \`max\` set numeric limits
- \`pattern\` allows custom validation rules

\`\`\`html
<input type="password" 
       pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
       title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 characters">
\`\`\`

### Best Practices for Great Forms

**Keep it simple** - Only ask for information you actually need.

**Use appropriate input types** - They provide better user experience on mobile devices.

**Provide clear labels** - Users should never guess what to enter.

**Give helpful feedback** - Use validation messages and placeholder text.

**Make it accessible** - Use proper labels, fieldsets, and keyboard navigation.

**Test on mobile** - Forms should work well on all devices.

Forms are incredibly powerful tools that will make your websites come alive with user interaction!
`,
  keyTerms: [
    { term: "Form Element", definition: "The container that holds all form inputs and defines where data is sent when submitted. Uses <form> tags." },
    { term: "Input Element", definition: "The basic building block of forms that allows users to enter data. Different types collect different kinds of information." },
    { term: "Label Element", definition: "Provides a description for form inputs, making forms accessible and user-friendly. Always associate with inputs using 'for' and 'id'." },
    { term: "Form Action", definition: "The URL where form data is sent when submitted. Specified in the action attribute of the form element." },
    { term: "Form Method", definition: "Determines how data is sent: GET (visible in URL) for searches, POST (hidden) for sensitive data." },
    { term: "Input Type", definition: "Specifies what kind of data an input accepts: text, email, password, number, date, etc." },
    { term: "Required Attribute", definition: "Makes a form field mandatory - users cannot submit the form without filling it out." },
    { term: "Placeholder Text", definition: "Helpful hint text that appears inside input fields to guide users on what to enter." },
    { term: "Form Validation", definition: "The process of checking that user input is correct before submitting the form." },
    { term: "Fieldset", definition: "Groups related form controls together, often used with legend to provide a caption for the group." }
  ],
  exercises: [
    {
      id: 1,
      title: "Build Your First Simple Contact Form",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'contact-form.html' with complete document structure.",
        "Set the title to 'Contact Us - My Website'.",
        "In the body, insert 'Contact Us' in <h1> tags.",
        "Add an introduction: Insert 'We\\'d love to hear from you! Fill out the form below and we\\'ll get back to you soon.' in <p> tags.",
        "Create a form using <form> tags with method=\"post\" and action=\"#\".",
        "Add the name field: Insert 'Your Name:' in <label> tags with for=\"name\", then insert an input with type=\"text\", id=\"name\", name=\"name\", and placeholder=\"Enter your full name\".",
        "Add the email field: Insert 'Email Address:' in <label> tags with for=\"email\", then insert an input with type=\"email\", id=\"email\", name=\"email\", placeholder=\"your@email.com\", and required attribute.",
        "Add the message field: Insert 'Message:' in <label> tags with for=\"message\", then insert a textarea with id=\"message\", name=\"message\", placeholder=\"Tell us how we can help you...\", and required attribute.",
        "Add a submit button: Insert 'Send Message' in <button> tags with type=\"submit\".",
        "Save and test the form to ensure all labels are properly connected to inputs."
      ]
    },
    {
      id: 2,
      title: "Create a User Registration Form with Multiple Input Types",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'registration-form.html' with complete HTML structure.",
        "Set the title to 'Sign Up - Create Your Account'.",
        "Create the main heading: Insert 'Create Your Account' in <h1> tags.",
        "Add subtitle: Insert 'Join thousands of users who trust our platform' in <p> tags.",
        "Start the form: Insert <form> tags with method=\"post\" and action=\"/register\".",
        "Add username field: Insert 'Username:' in <label> with for=\"username\", then input with type=\"text\", id=\"username\", name=\"username\", required, minlength=\"3\", maxlength=\"20\", and placeholder=\"Choose a unique username\".",
        "Add email field: Insert 'Email Address:' in <label> with for=\"email\", then input with type=\"email\", id=\"email\", name=\"email\", required, and placeholder=\"your@email.com\".",
        "Add password field: Insert 'Password:' in <label> with for=\"password\", then input with type=\"password\", id=\"password\", name=\"password\", required, minlength=\"8\", and placeholder=\"Create a secure password\".",
        "Add age field: Insert 'Age:' in <label> with for=\"age\", then input with type=\"number\", id=\"age\", name=\"age\", min=\"13\", max=\"120\", and placeholder=\"Your age\".",
        "Add birthdate field: Insert 'Date of Birth:' in <label> with for=\"birthdate\", then input with type=\"date\", id=\"birthdate\", name=\"birthdate\", and required.",
        "Add phone field: Insert 'Phone Number (optional):' in <label> with for=\"phone\", then input with type=\"tel\", id=\"phone\", name=\"phone\", and placeholder=\"(555) 123-4567\".",
        "Add submit button: Insert 'Create Account' in <button> tags with type=\"submit\".",
        "Add reset button: Insert 'Clear Form' in <button> tags with type=\"reset\".",
        "Save and test all input types and validation."
      ]
    },
    {
      id: 3,
      title: "Build a Product Feedback Survey Form",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'feedback-survey.html' with full HTML structure.",
        "Set the title to 'Product Feedback Survey'.",
        "Create the header: Insert 'Help Us Improve Our Product' in <h1> tags.",
        "Add introduction: Insert 'Your feedback is valuable to us. Please take a few minutes to share your experience.' in <p> tags.",
        "Start the form with method=\"post\" and action=\"/feedback\".",
        "Create customer info section: Insert 'Customer Information' in <h2> tags.",
        "Add name field: Insert 'Full Name:' in <label> with for=\"name\", then input with type=\"text\", id=\"name\", name=\"name\", required, and placeholder=\"Enter your full name\".",
        "Add email field: Insert 'Email Address:' in <label> with for=\"email\", then input with type=\"email\", id=\"email\", name=\"email\", required, and placeholder=\"your@email.com\".",
        "Add purchase date: Insert 'Purchase Date:' in <label> with for=\"purchase-date\", then input with type=\"date\", id=\"purchase-date\", name=\"purchase-date\", required.",
        "Add product section: Insert 'Product Information' in <h2> tags.",
        "Add product name: Insert 'Product Name:' in <label> with for=\"product\", then input with type=\"text\", id=\"product\", name=\"product\", required, and placeholder=\"Which product are you reviewing?\".",
        "Add rating: Insert 'Overall Rating (1-10):' in <label> with for=\"rating\", then input with type=\"number\", id=\"rating\", name=\"rating\", min=\"1\", max=\"10\", required.",
        "Add feedback section: Insert 'Your Feedback' in <h2> tags.",
        "Add what you liked: Insert 'What did you like most?:' in <label> with for=\"liked\", then textarea with id=\"liked\", name=\"liked\", placeholder=\"Tell us what you enjoyed...\".",
        "Add improvements: Insert 'What could be improved?:' in <label> with for=\"improvements\", then textarea with id=\"improvements\", name=\"improvements\", placeholder=\"Share your suggestions...\".",
        "Add recommendation: Insert 'Would you recommend this product?:' in <label> with for=\"recommend\", then input with type=\"text\", id=\"recommend\", name=\"recommend\", placeholder=\"Yes/No and why?\".",
        "Add additional comments: Insert 'Additional Comments:' in <label> with for=\"comments\", then textarea with id=\"comments\", name=\"comments\", placeholder=\"Any other thoughts?\".",
        "Add submit button: Insert 'Submit Feedback' in <button> tags with type=\"submit\".",
        "Add note: Insert 'Thank you for taking the time to provide feedback!' in <p> tags with <small> wrapper.",
        "Save and test the complete survey form."
      ]
    },
    {
      id: 4,
      title: "Create a Professional Job Application Form",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'job-application.html' with complete HTML structure.",
        "Set the title to 'Job Application - Web Developer Position'.",
        "Create the header: Insert 'Web Developer Position - Application Form' in <h1> tags.",
        "Add company info: Insert 'TechCorp Solutions is looking for talented developers to join our team.' in <p> tags.",
        "Start the form with method=\"post\" and action=\"/apply\".",
        "Create personal info fieldset with <fieldset> and insert 'Personal Information' in <legend> tags.",
        "Add first name: Insert 'First Name:' in <label> with for=\"firstname\", then input with type=\"text\", id=\"firstname\", name=\"firstname\", required, maxlength=\"50\".",
        "Add last name: Insert 'Last Name:' in <label> with for=\"lastname\", then input with type=\"text\", id=\"lastname\", name=\"lastname\", required, maxlength=\"50\".",
        "Add email: Insert 'Email Address:' in <label> with for=\"email\", then input with type=\"email\", id=\"email\", name=\"email\", required.",
        "Add phone: Insert 'Phone Number:' in <label> with for=\"phone\", then input with type=\"tel\", id=\"phone\", name=\"phone\", required, placeholder=\"(555) 123-4567\".",
        "Add address: Insert 'Address:' in <label> with for=\"address\", then input with type=\"text\", id=\"address\", name=\"address\", placeholder=\"Street address\".",
        "Add city: Insert 'City:' in <label> with for=\"city\", then input with type=\"text\", id=\"city\", name=\"city\".",
        "Add birth date: Insert 'Date of Birth:' in <label> with for=\"birthdate\", then input with type=\"date\", id=\"birthdate\", name=\"birthdate\", required.",
        "Close personal info fieldset.",
        "Create professional info fieldset with <fieldset> and insert 'Professional Information' in <legend> tags.",
        "Add position: Insert 'Position Applied For:' in <label> with for=\"position\", then input with type=\"text\", id=\"position\", name=\"position\", value=\"Web Developer\", required.",
        "Add experience: Insert 'Years of Experience:' in <label> with for=\"experience\", then input with type=\"number\", id=\"experience\", name=\"experience\", min=\"0\", max=\"50\".",
        "Add salary: Insert 'Expected Salary:' in <label> with for=\"salary\", then input with type=\"number\", id=\"salary\", name=\"salary\", min=\"30000\", max=\"200000\", placeholder=\"Annual salary expectation\".",
        "Add start date: Insert 'Available Start Date:' in <label> with for=\"start-date\", then input with type=\"date\", id=\"start-date\", name=\"start-date\", required.",
        "Add skills: Insert 'Technical Skills:' in <label> with for=\"skills\", then textarea with id=\"skills\", name=\"skills\", placeholder=\"List your programming languages, frameworks, and tools...\".",
        "Add education: Insert 'Education Background:' in <label> with for=\"education\", then textarea with id=\"education\", name=\"education\", placeholder=\"Your educational qualifications...\".",
        "Close professional info fieldset.",
        "Create additional info fieldset with <fieldset> and insert 'Additional Information' in <legend> tags.",
        "Add portfolio: Insert 'Portfolio Website:' in <label> with for=\"portfolio\", then input with type=\"url\", id=\"portfolio\", name=\"portfolio\", placeholder=\"https://yourportfolio.com\".",
        "Add linkedin: Insert 'LinkedIn Profile:' in <label> with for=\"linkedin\", then input with type=\"url\", id=\"linkedin\", name=\"linkedin\", placeholder=\"https://linkedin.com/in/yourname\".",
        "Add cover letter: Insert 'Cover Letter:' in <label> with for=\"cover-letter\", then textarea with id=\"cover-letter\", name=\"cover-letter\", required, placeholder=\"Tell us why you\\'re perfect for this position...\".",
        "Close additional info fieldset.",
        "Add submit button: Insert 'Submit Application' in <button> tags with type=\"submit\".",
        "Add reset button: Insert 'Clear Form' in <button> tags with type=\"reset\".",
        "Add disclaimer: Insert 'By submitting this application, you agree to our terms and conditions.' in <p> tags with <small> wrapper.",
        "Save and thoroughly test the complete job application form."
      ]
    },
    {
      id: 5,
      title: "Build a Comprehensive Event Registration System",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'event-registration.html' with complete HTML structure.",
        "Set the title to 'Tech Conference 2024 - Registration'.",
        "Create the event header: Insert 'Tech Conference 2024 Registration' in <h1> tags.",
        "Add event details: Insert 'Join us for three days of cutting-edge technology presentations, networking, and workshops.' in <p> tags.",
        "Add event info: Insert 'Date: October 15-17, 2024 | Location: San Francisco Convention Center' in <p> tags with <strong> around the details.",
        "Start the registration form with method=\"post\" and action=\"/register-event\".",
        "Create attendee info fieldset with <fieldset> and insert 'Attendee Information' in <legend> tags.",
        "Add title field: Insert 'Title:' in <label> with for=\"title\", then input with type=\"text\", id=\"title\", name=\"title\", placeholder=\"Mr./Ms./Dr.\".",
        "Add first name: Insert 'First Name:' in <label> with for=\"firstname\", then input with type=\"text\", id=\"firstname\", name=\"firstname\", required, maxlength=\"50\".",
        "Add last name: Insert 'Last Name:' in <label> with for=\"lastname\", then input with type=\"text\", id=\"lastname\", name=\"lastname\", required, maxlength=\"50\".",
        "Add job title: Insert 'Job Title:' in <label> with for=\"jobtitle\", then input with type=\"text\", id=\"jobtitle\", name=\"jobtitle\", placeholder=\"Software Developer, Manager, etc.\".",
        "Add company: Insert 'Company/Organization:' in <label> with for=\"company\", then input with type=\"text\", id=\"company\", name=\"company\", placeholder=\"Where do you work?\".",
        "Add email: Insert 'Email Address:' in <label> with for=\"email\", then input with type=\"email\", id=\"email\", name=\"email\", required, placeholder=\"your@company.com\".",
        "Add phone: Insert 'Phone Number:' in <label> with for=\"phone\", then input with type=\"tel\", id=\"phone\", name=\"phone\", required, placeholder=\"(555) 123-4567\".",
        "Close attendee info fieldset.",
        "Create registration details fieldset and insert 'Registration Details' in <legend> tags.",
        "Add registration type: Insert 'Registration Type:' in <label> with for=\"reg-type\", then input with type=\"text\", id=\"reg-type\", name=\"reg-type\", placeholder=\"Early Bird, Regular, Student\".",
        "Add ticket quantity: Insert 'Number of Tickets:' in <label> with for=\"tickets\", then input with type=\"number\", id=\"tickets\", name=\"tickets\", min=\"1\", max=\"10\", value=\"1\", required.",
        "Add dietary restrictions: Insert 'Dietary Restrictions:' in <label> with for=\"dietary\", then input with type=\"text\", id=\"dietary\", name=\"dietary\", placeholder=\"Vegetarian, Vegan, Allergies, etc.\".",
        "Add accessibility needs: Insert 'Accessibility Requirements:' in <label> with for=\"accessibility\", then textarea with id=\"accessibility\", name=\"accessibility\", placeholder=\"Let us know if you need any special accommodations...\".",
        "Add emergency contact: Insert 'Emergency Contact Name:' in <label> with for=\"emergency-name\", then input with type=\"text\", id=\"emergency-name\", name=\"emergency-name\", placeholder=\"Full name\".",
        "Add emergency phone: Insert 'Emergency Contact Phone:' in <label> with for=\"emergency-phone\", then input with type=\"tel\", id=\"emergency-phone\", name=\"emergency-phone\", placeholder=\"(555) 123-4567\".",
        "Close registration details fieldset.",
        "Create workshop preferences fieldset and insert 'Workshop Preferences' in <legend> tags.",
        "Add workshop interest: Insert 'Workshop Interests:' in <label> with for=\"workshops\", then textarea with id=\"workshops\", name=\"workshops\", placeholder=\"Which workshops are you most interested in attending?\".",
        "Add experience level: Insert 'Experience Level:' in <label> with for=\"experience\", then input with type=\"text\", id=\"experience\", name=\"experience\", placeholder=\"Beginner, Intermediate, Advanced\".",
        "Add special requests: Insert 'Special Requests:' in <label> with for=\"requests\", then textarea with id=\"requests\", name=\"requests\", placeholder=\"Any special requests or questions?\".",
        "Close workshop preferences fieldset.",
        "Add agreement checkbox: Insert a checkbox input with id=\"agree\", name=\"agree\", required, followed by 'I agree to the terms and conditions and privacy policy' in <label> with for=\"agree\".",
        "Add marketing consent: Insert a checkbox input with id=\"marketing\", name=\"marketing\", followed by 'I would like to receive updates about future events' in <label> with for=\"marketing\".",
        "Add submit button: Insert 'Complete Registration' in <button> tags with type=\"submit\".",
        "Add reset button: Insert 'Clear Form' in <button> tags with type=\"reset\".",
        "Add confirmation note: Insert 'You will receive a confirmation email within 24 hours of registration.' in <p> tags with <em> wrapper.",
        "Save and test the comprehensive event registration form with all sections."
      ]
    }
  ]
};
