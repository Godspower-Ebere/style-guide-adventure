
import { DayLesson } from "../types";

export const day10: DayLesson = {
  day: 10,
  title: "HTML Forms - Buttons and Labels for Perfect User Experience",
  category: "HTML Forms",
  description: "Welcome to day 10! Today we're going to perfect your HTML forms by mastering two crucial elements that make the difference between good forms and great forms: buttons and labels. You'll learn how to create forms that are not only functional but also accessible, user-friendly, and professional. Get ready to build forms that users will actually enjoy using!",
  learningObjectives: [
    "Master the art of writing effective labels that make forms accessible to everyone",
    "Understand the different types of buttons and when to use each one",
    "Learn to associate labels with form controls properly for perfect accessibility",
    "Discover how to organize forms with fieldsets and legends for clear structure",
    "Practice creating user-friendly forms with clear navigation and intuitive actions"
  ],
  detailedExplanation: `
## Welcome to Day 10 - Let's Perfect Your Forms!

Congratulations on reaching day 10! You've learned so much - from basic HTML structure to complex form inputs, radio buttons, and checkboxes. Today we're going to put the finishing touches on your form-building skills by mastering labels and buttons - the elements that transform confusing forms into delightful user experiences.

### Why Labels and Buttons Matter More Than You Think

Let me paint you a picture. Imagine walking into a store where nothing has price tags, the checkout buttons don't work properly, and you can't tell what anything is for. Frustrating, right?

That's exactly how users feel when they encounter forms with poor labels and buttons. But when you get these elements right, something magical happens:
- Users know exactly what to do
- Forms become accessible to people with disabilities
- Everyone can navigate your forms easily
- Your conversion rates improve dramatically

### The Foundation: Understanding Label Elements

Labels are like friendly tour guides for your forms. They tell users what each input field is for, and they make forms accessible to screen readers. Every single form input should have a proper label.

Here's the basic structure:
\`\`\`html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
\`\`\`

The magic happens with the connection between \`for="username"\` in the label and \`id="username"\` in the input. This creates an invisible but powerful link that:
- Lets users click the label to focus the input
- Tells screen readers what each field is for
- Makes your forms more professional and accessible

### Two Ways to Use Labels

**Method 1: Using the 'for' attribute (most common):**
\`\`\`html
<label for="email">Email Address:</label>
<input type="email" id="email" name="email" required>
\`\`\`

**Method 2: Wrapping the input (sometimes useful):**
\`\`\`html
<label>
  Email Address:
  <input type="email" name="email" required>
</label>
\`\`\`

I recommend Method 1 because it's more flexible and works better with complex layouts.

### Writing Labels That Actually Help Users

**Be specific and clear:**
- Bad: "Name"
- Good: "Full Name" or "First Name"

**Include helpful context:**
- Bad: "Phone"
- Good: "Phone Number (Optional)"

**Explain requirements:**
- Bad: "Password"
- Good: "Password (At least 8 characters)"

Here's a real-world example:
\`\`\`html
<label for="phone">Phone Number (Optional):</label>
<input type="tel" id="phone" name="phone" placeholder="(555) 123-4567">

<label for="password">Password (Minimum 8 characters):</label>
<input type="password" id="password" name="password" required minlength="8">

<label for="confirm-email">Confirm Email Address:</label>
<input type="email" id="confirm-email" name="confirm-email" required>
\`\`\`

### Mastering Different Types of Buttons

HTML gives you three main types of buttons, each with a specific purpose:

**Submit Button - Sends the form data:**
\`\`\`html
<button type="submit">Create Account</button>
<!-- or -->
<input type="submit" value="Create Account">
\`\`\`

**Reset Button - Clears all form fields:**
\`\`\`html
<button type="reset">Clear Form</button>
<!-- or -->
<input type="reset" value="Clear Form">
\`\`\`

**Regular Button - For custom JavaScript actions:**
\`\`\`html
<button type="button">Calculate Total</button>
<!-- or -->
<input type="button" value="Calculate Total">
\`\`\`

### Writing Button Text That Guides Users

Your button text should clearly describe what will happen when users click:

**Instead of generic text:**
- "Submit" → "Create My Account"
- "Send" → "Send Message"
- "Go" → "Search Products"

**Be specific and action-oriented:**
\`\`\`html
<button type="submit">Register for Free Trial</button>
<button type="submit">Download Your Report</button>
<button type="submit">Save My Preferences</button>
<button type="reset">Start Over</button>
\`\`\`

### Organizing Forms with Fieldsets and Legends

When you have complex forms, group related fields using \`<fieldset>\` and \`<legend>\`:

\`\`\`html
<form>
  <fieldset>
    <legend>Personal Information</legend>
    
    <label for="firstname">First Name:</label>
    <input type="text" id="firstname" name="firstname" required>
    
    <label for="lastname">Last Name:</label>
    <input type="text" id="lastname" name="lastname" required>
    
    <label for="birthdate">Date of Birth:</label>
    <input type="date" id="birthdate" name="birthdate">
  </fieldset>
  
  <fieldset>
    <legend>Account Details</legend>
    
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
  </fieldset>
  
  <button type="submit">Create Account</button>
  <button type="reset">Clear All Fields</button>
</form>
\`\`\`

### Real-World Example: Complete Contact Form

Let me show you how all these elements work together in a professional contact form:

\`\`\`html
<form action="/contact" method="post">
  <h2>Get in Touch</h2>
  <p>We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
  
  <fieldset>
    <legend>Your Information</legend>
    
    <label for="fullname">Full Name:</label>
    <input type="text" id="fullname" name="fullname" required 
           placeholder="Enter your first and last name">
    
    <label for="email">Email Address:</label>
    <input type="email" id="email" name="email" required 
           placeholder="your@email.com">
    
    <label for="phone">Phone Number (Optional):</label>
    <input type="tel" id="phone" name="phone" 
           placeholder="(555) 123-4567">
    
    <label for="company">Company/Organization (Optional):</label>
    <input type="text" id="company" name="company" 
           placeholder="Where do you work?">
  </fieldset>
  
  <fieldset>
    <legend>Your Message</legend>
    
    <label for="subject">Subject:</label>
    <input type="text" id="subject" name="subject" required 
           placeholder="What is this regarding?">
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" required 
              placeholder="Please provide details about your inquiry..."
              rows="5"></textarea>
    
    <label for="priority">Priority Level:</label>
    <select id="priority" name="priority">
      <option value="low">Low - General inquiry</option>
      <option value="medium" selected>Medium - Need response within a week</option>
      <option value="high">High - Urgent response needed</option>
    </select>
  </fieldset>
  
  <fieldset>
    <legend>Preferences</legend>
    
    <input type="checkbox" id="newsletter" name="newsletter" value="yes">
    <label for="newsletter">Subscribe to our monthly newsletter</label>
    
    <input type="checkbox" id="updates" name="updates" value="yes">
    <label for="updates">Receive updates about new products and services</label>
  </fieldset>
  
  <button type="submit">Send Message</button>
  <button type="reset">Clear Form</button>
</form>
\`\`\`

### Advanced Label Techniques

**Labels for radio buttons and checkboxes:**
\`\`\`html
<fieldset>
  <legend>How did you hear about us?</legend>
  
  <input type="radio" id="google" name="source" value="google">
  <label for="google">Google Search</label>
  
  <input type="radio" id="friend" name="source" value="friend">
  <label for="friend">Friend Recommendation</label>
  
  <input type="radio" id="social" name="source" value="social">
  <label for="social">Social Media</label>
</fieldset>
\`\`\`

**Adding helpful descriptions:**
\`\`\`html
<label for="password">Password:</label>
<input type="password" id="password" name="password" required>
<small>Must be at least 8 characters with letters and numbers</small>
\`\`\`

**Required field indicators:**
\`\`\`html
<label for="email">Email Address <span class="required">*</span>:</label>
<input type="email" id="email" name="email" required>
\`\`\`

### Button Placement and Styling Considerations

**Primary action first:**
\`\`\`html
<button type="submit">Save Changes</button>
<button type="button">Cancel</button>
\`\`\`

**Group related buttons:**
\`\`\`html
<div class="button-group">
  <button type="submit">Register Now</button>
  <button type="reset">Clear Form</button>
</div>
\`\`\`

**Provide clear cancel/back options:**
\`\`\`html
<button type="submit">Complete Purchase</button>
<button type="button" onclick="history.back()">Go Back</button>
\`\`\`

### Accessibility Best Practices

**Every input needs a label:**
\`\`\`html
<!-- Good -->
<label for="search">Search Products:</label>
<input type="search" id="search" name="search">

<!-- Bad -->
<input type="search" name="search" placeholder="Search...">
\`\`\`

**Use fieldsets for grouped content:**
\`\`\`html
<fieldset>
  <legend>Billing Address</legend>
  <!-- address fields here -->
</fieldset>
\`\`\`

**Make button purposes clear:**
\`\`\`html
<button type="submit">Create Free Account</button>
<button type="button" aria-label="Close dialog">×</button>
\`\`\`

### Common Mistakes to Avoid

**Forgetting to connect labels and inputs** - Always use matching \`for\` and \`id\` attributes.

**Using placeholder text instead of labels** - Placeholders disappear when users start typing.

**Vague button text** - "Submit" tells users nothing about what will happen.

**Missing fieldsets** - Group related fields for better organization.

**No reset option** - Give users a way to start over if they make mistakes.

### Testing Your Forms

Before you publish any form, test these things:
- Click every label to make sure it focuses the right input
- Try using Tab to navigate through the form
- Test what happens when you click each button
- Fill out the form completely to make sure it works
- Try the form on a mobile device

When you master labels and buttons, your forms transform from obstacles into helpful tools that users actually want to use!
`,
  keyTerms: [
    { term: "Label Element", definition: "HTML element that provides a caption or description for a form control, making forms accessible and user-friendly." },
    { term: "For Attribute", definition: "Attribute that associates a label with a specific form element by matching the input's ID, creating an accessible connection." },
    { term: "Submit Button", definition: "Button that sends form data to the server when clicked. The most important button in any form." },
    { term: "Reset Button", definition: "Button that clears all form fields back to their default values, giving users a fresh start." },
    { term: "Button Element", definition: "Versatile HTML element for creating clickable buttons with custom text and actions." },
    { term: "Fieldset", definition: "Element used to group related form controls together, creating logical sections in complex forms." },
    { term: "Legend", definition: "Element that provides a caption for a fieldset group, explaining what the grouped controls are for." },
    { term: "Form Accessibility", definition: "Making forms usable by everyone, including people using screen readers or keyboard navigation." },
    { term: "Button Type", definition: "Attribute that defines button behavior: submit (sends form), reset (clears form), or button (custom action)." },
    { term: "Form Navigation", definition: "How users move through and interact with form elements, including keyboard and mouse interactions." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create a Simple Newsletter Signup with Perfect Labels",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'newsletter-signup.html' with complete document structure.",
        "Set the title to 'Subscribe to Our Newsletter'.",
        "In the body, insert 'Join Our Newsletter' in <h1> tags.",
        "Add introduction: Insert 'Get weekly updates on web development tips, tutorials, and industry news delivered to your inbox.' in <p> tags.",
        "Start the form with <form> tags using method=\"post\" and action=\"/subscribe\".",
        "Add name field: Insert 'Full Name:' in <label> tags with for=\"name\", then add input with type=\"text\", id=\"name\", name=\"name\", required, and placeholder=\"Enter your full name\".",
        "Add email field: Insert 'Email Address:' in <label> tags with for=\"email\", then add input with type=\"email\", id=\"email\", name=\"email\", required, and placeholder=\"your@email.com\".",
        "Add interests field: Insert 'Primary Interest:' in <label> tags with for=\"interest\", then add input with type=\"text\", id=\"interest\", name=\"interest\", and placeholder=\"Web development, design, etc.\".",
        "Add preferences checkbox: Insert input with type=\"checkbox\", id=\"weekly\", name=\"frequency\", value=\"weekly\", followed by 'Send me weekly digest emails' in <label> tags with for=\"weekly\".",
        "Add marketing checkbox: Insert input with type=\"checkbox\", id=\"promotions\", name=\"promotions\", value=\"yes\", followed by 'Notify me about special offers and courses' in <label> tags with for=\"promotions\".",
        "Add submit button: Insert 'Subscribe Now' in <button> tags with type=\"submit\".",
        "Add privacy note: Insert 'We respect your privacy and will never share your email address.' in <p> tags with <small> wrapper.",
        "Save and test that clicking each label focuses the correct input field."
      ]
    },
    {
      id: 2,
      title: "Build a User Feedback Form with Multiple Button Types",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'feedback-form.html' with complete HTML structure.",
        "Set the title to 'Customer Feedback - Help Us Improve'.",
        "Create the header: Insert 'We Value Your Feedback' in <h1> tags.",
        "Add introduction: Insert 'Your feedback helps us improve our products and services. This form takes less than 2 minutes to complete.' in <p> tags.",
        "Start the form with method=\"post\" and action=\"/feedback\".",
        "Add customer name: Insert 'Your Name (Optional):' in <label> with for=\"customer-name\", then input with type=\"text\", id=\"customer-name\", name=\"customer-name\", placeholder=\"How should we address you?\".",
        "Add email: Insert 'Email Address (Optional):' in <label> with for=\"customer-email\", then input with type=\"email\", id=\"customer-email\", name=\"customer-email\", placeholder=\"For follow-up if needed\".",
        "Add service experience: Insert 'Rate Your Overall Experience:' in <label> with for=\"rating\", then input with type=\"number\", id=\"rating\", name=\"rating\", min=\"1\", max=\"5\", required, placeholder=\"1-5 scale\".",
        "Add product satisfaction: Insert 'Product/Service Used:' in <label> with for=\"product\", then input with type=\"text\", id=\"product\", name=\"product\", required, placeholder=\"Which product or service?\".",
        "Add recommendation: Insert 'Would You Recommend Us? (1-10):' in <label> with for=\"recommend\", then input with type=\"number\", id=\"recommend\", name=\"recommend\", min=\"1\", max=\"10\", required.",
        "Add feedback text: Insert 'Your Detailed Feedback:' in <label> with for=\"feedback\", then textarea with id=\"feedback\", name=\"feedback\", required, placeholder=\"Please share your thoughts, suggestions, or concerns...\", rows=\"4\".",
        "Add improvements: Insert 'What Could We Improve?:' in <label> with for=\"improvements\", then textarea with id=\"improvements\", name=\"improvements\", placeholder=\"Any specific areas for improvement?\", rows=\"3\".",
        "Add contact permission: Insert input with type=\"checkbox\", id=\"contact-ok\", name=\"contact-ok\", value=\"yes\", followed by 'Permission to contact me about this feedback' in <label> with for=\"contact-ok\".",
        "Add anonymous option: Insert input with type=\"checkbox\", id=\"anonymous\", name=\"anonymous\", value=\"yes\", followed by 'Submit this feedback anonymously' in <label> with for=\"anonymous\".",
        "Add three buttons: Insert 'Submit Feedback' in <button> with type=\"submit\", 'Save as Draft' in <button> with type=\"button\", and 'Clear Form' in <button> with type=\"reset\".",
        "Add thank you note: Insert 'Thank you for taking the time to help us improve!' in <p> tags with <em> wrapper.",
        "Save and test all three button types to ensure they work correctly."
      ]
    },
    {
      id: 3,
      title: "Create a Professional Job Application with Organized Fieldsets",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'job-application-advanced.html' with complete HTML structure.",
        "Set the title to 'Senior Developer Position - Application Form'.",
        "Create the header: Insert 'Senior Web Developer Application' in <h1> tags.",
        "Add position details: Insert 'Position: Senior Web Developer | Department: Engineering | Location: Remote/Hybrid' in <p> tags with <strong> around key details.",
        "Start the form with method=\"post\" and action=\"/apply\".",
        "Create personal information fieldset: Insert <fieldset> with 'Personal Information' in <legend> tags.",
        "Add name fields: Insert 'First Name:' in <label> with for=\"first-name\", input with type=\"text\", id=\"first-name\", name=\"first-name\", required, maxlength=\"50\".",
        "Add last name: Insert 'Last Name:' in <label> with for=\"last-name\", input with type=\"text\", id=\"last-name\", name=\"last-name\", required, maxlength=\"50\".",
        "Add email: Insert 'Email Address:' in <label> with for=\"email\", input with type=\"email\", id=\"email\", name=\"email\", required.",
        "Add phone: Insert 'Phone Number:' in <label> with for=\"phone\", input with type=\"tel\", id=\"phone\", name=\"phone\", required, placeholder=\"(555) 123-4567\".",
        "Add location: Insert 'Current Location (City, State):' in <label> with for=\"location\", input with type=\"text\", id=\"location\", name=\"location\", required, placeholder=\"San Francisco, CA\".",
        "Close personal information fieldset.",
        "Create professional experience fieldset: Insert <fieldset> with 'Professional Experience' in <legend> tags.",
        "Add experience years: Insert 'Years of Web Development Experience:' in <label> with for=\"experience\", input with type=\"number\", id=\"experience\", name=\"experience\", min=\"0\", max=\"30\", required.",
        "Add current role: Insert 'Current Job Title:' in <label> with for=\"current-title\", input with type=\"text\", id=\"current-title\", name=\"current-title\", placeholder=\"Your current position\".",
        "Add current company: Insert 'Current Company:' in <label> with for=\"current-company\", input with type=\"text\", id=\"current-company\", name=\"current-company\", placeholder=\"Where do you currently work?\".",
        "Add salary expectation: Insert 'Salary Expectation (Annual):' in <label> with for=\"salary\", input with type=\"number\", id=\"salary\", name=\"salary\", min=\"50000\", max=\"300000\", placeholder=\"USD\".",
        "Add availability: Insert 'Available Start Date:' in <label> with for=\"start-date\", input with type=\"date\", id=\"start-date\", name=\"start-date\", required.",
        "Close professional experience fieldset.",
        "Create technical skills fieldset: Insert <fieldset> with 'Technical Skills & Qualifications' in <legend> tags.",
        "Add skills summary: Insert 'Key Technical Skills:' in <label> with for=\"skills\", textarea with id=\"skills\", name=\"skills\", required, placeholder=\"List your programming languages, frameworks, tools, etc.\", rows=\"4\".",
        "Add education: Insert 'Education Background:' in <label> with for=\"education\", textarea with id=\"education\", name=\"education\", placeholder=\"Degrees, certifications, relevant coursework\", rows=\"3\".",
        "Add portfolio: Insert 'Portfolio Website:' in <label> with for=\"portfolio\", input with type=\"url\", id=\"portfolio\", name=\"portfolio\", placeholder=\"https://yourportfolio.com\".",
        "Add github: Insert 'GitHub Profile:' in <label> with for=\"github\", input with type=\"url\", id=\"github\", name=\"github\", placeholder=\"https://github.com/yourusername\".",
        "Close technical skills fieldset.",
        "Create additional information fieldset: Insert <fieldset> with 'Additional Information' in <legend> tags.",
        "Add cover letter: Insert 'Cover Letter:' in <label> with for=\"cover-letter\", textarea with id=\"cover-letter\", name=\"cover-letter\", required, placeholder=\"Tell us why you\\'re the perfect fit for this role...\", rows=\"6\".",
        "Add work preference: Insert 'Work Preference:' in <label> with for=\"work-style\", input with type=\"text\", id=\"work-style\", name=\"work-style\", placeholder=\"Remote, Hybrid, On-site\".",
        "Add references available: Insert input with type=\"checkbox\", id=\"references\", name=\"references\", value=\"available\", followed by 'Professional references available upon request' in <label> with for=\"references\".",
        "Add authorization: Insert input with type=\"checkbox\", id=\"authorized\", name=\"authorized\", value=\"yes\", required, followed by 'I am authorized to work in the United States' in <label> with for=\"authorized\".",
        "Add background check: Insert input with type=\"checkbox\", id=\"background\", name=\"background\", value=\"consent\", followed by 'I consent to a background check if selected for interview' in <label> with for=\"background\".",
        "Close additional information fieldset.",
        "Add button group: Insert 'Submit Application' in <button> with type=\"submit\", followed by 'Save Draft' in <button> with type=\"button\", and 'Clear All Fields' in <button> with type=\"reset\".",
        "Add application note: Insert 'Applications are reviewed weekly. You will receive confirmation within 3 business days.' in <p> tags with <small> wrapper.",
        "Save and thoroughly test the form with all fieldsets, labels, and buttons working correctly."
      ]
    },
    {
      id: 4,
      title: "Build a Comprehensive Event Registration System with Advanced Organization",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'event-registration-advanced.html' with complete HTML structure.",
        "Set the title to 'TechSummit 2024 - Complete Registration'.",
        "Create event header: Insert 'TechSummit 2024 Registration' in <h1> tags.",
        "Add event details: Insert 'March 15-17, 2024 | Silicon Valley Convention Center | 3 Days of Innovation' in <h2> tags.",
        "Add event description: Insert 'Join 1,000+ technology professionals for workshops, keynotes, and networking opportunities.' in <p> tags.",
        "Start the comprehensive form with method=\"post\" and action=\"/register-event\".",
        "Create attendee information fieldset: Insert <fieldset> with 'Attendee Information' in <legend> tags.",
        "Add title: Insert 'Title:' in <label> with for=\"title\", input with type=\"text\", id=\"title\", name=\"title\", placeholder=\"Mr./Ms./Dr./Prof.\".",
        "Add full name: Insert 'Full Name:' in <label> with for=\"full-name\", input with type=\"text\", id=\"full-name\", name=\"full-name\", required, maxlength=\"100\".",
        "Add professional title: Insert 'Professional Title:' in <label> with for=\"job-title\", input with type=\"text\", id=\"job-title\", name=\"job-title\", required, placeholder=\"Software Engineer, CTO, etc.\".",
        "Add organization: Insert 'Company/Organization:' in <label> with for=\"organization\", input with type=\"text\", id=\"organization\", name=\"organization\", required, placeholder=\"Where do you work?\".",
        "Add industry: Insert 'Industry:' in <label> with for=\"industry\", input with type=\"text\", id=\"industry\", name=\"industry\", placeholder=\"Technology, Healthcare, Finance, etc.\".",
        "Add email: Insert 'Email Address:' in <label> with for=\"reg-email\", input with type=\"email\", id=\"reg-email\", name=\"reg-email\", required.",
        "Add phone: Insert 'Phone Number:' in <label> with for=\"reg-phone\", input with type=\"tel\", id=\"reg-phone\", name=\"reg-phone\", required, placeholder=\"(555) 123-4567\".",
        "Add linkedin: Insert 'LinkedIn Profile (Optional):' in <label> with for=\"linkedin\", input with type=\"url\", id=\"linkedin\", name=\"linkedin\", placeholder=\"https://linkedin.com/in/yourname\".",
        "Close attendee information fieldset.",
        "Create registration details fieldset: Insert <fieldset> with 'Registration & Ticket Details' in <legend> tags.",
        "Add registration type: Insert 'Registration Type:' in <label> with for=\"ticket-type\", input with type=\"text\", id=\"ticket-type\", name=\"ticket-type\", required, placeholder=\"Early Bird, Regular, VIP, Student\".",
        "Add number of days: Insert 'Days Attending:' in <label> with for=\"days\", input with type=\"number\", id=\"days\", name=\"days\", min=\"1\", max=\"3\", value=\"3\", required.",
        "Add ticket quantity: Insert 'Number of Tickets:' in <label> with for=\"quantity\", input with type=\"number\", id=\"quantity\", name=\"quantity\", min=\"1\", max=\"5\", value=\"1\", required.",
        "Add promo code: Insert 'Promotional Code (Optional):' in <label> with for=\"promo\", input with type=\"text\", id=\"promo\", name=\"promo\", placeholder=\"Enter discount code\".",
        "Add special rates: Insert input with type=\"checkbox\", id=\"student-rate\", name=\"student-rate\", value=\"yes\", followed by 'I am eligible for student pricing (ID required)' in <label> with for=\"student-rate\".",
        "Add group discount: Insert input with type=\"checkbox\", id=\"group-rate\", name=\"group-rate\", value=\"yes\", followed by 'Part of group registration (5+ people)' in <label> with for=\"group-rate\".",
        "Close registration details fieldset.",
        "Create session preferences fieldset: Insert <fieldset> with 'Workshop & Session Preferences' in <legend> tags.",
        "Add experience level: Insert 'Technical Experience Level:' in <label> with for=\"tech-level\", input with type=\"text\", id=\"tech-level\", name=\"tech-level\", placeholder=\"Beginner, Intermediate, Advanced, Expert\".",
        "Add primary interests: Insert 'Primary Technology Interests:' in <label> with for=\"tech-interests\", textarea with id=\"tech-interests\", name=\"tech-interests\", placeholder=\"AI/ML, Cloud Computing, Web Development, Mobile, etc.\", rows=\"3\".",
        "Add workshop preferences: Insert 'Preferred Workshop Topics:' in <label> with for=\"workshops\", textarea with id=\"workshops\", name=\"workshops\", placeholder=\"List your top 3 workshop topics of interest...\", rows=\"3\".",
        "Add keynote interest: Insert 'Most Anticipated Keynote:' in <label> with for=\"keynote\", input with type=\"text\", id=\"keynote\", name=\"keynote\", placeholder=\"Which speaker are you most excited to see?\".",
        "Add hands-on preference: Insert input with type=\"checkbox\", id=\"hands-on\", name=\"hands-on\", value=\"yes\", followed by 'I prefer hands-on technical workshops' in <label> with for=\"hands-on\".",
        "Add networking interest: Insert input with type=\"checkbox\", id=\"networking\", name=\"networking\", value=\"yes\", followed by 'I\\'m interested in networking events' in <label> with for=\"networking\".",
        "Close session preferences fieldset.",
        "Create accommodation & logistics fieldset: Insert <fieldset> with 'Accommodation & Special Requirements' in <legend> tags.",
        "Add dietary restrictions: Insert 'Dietary Restrictions/Allergies:' in <label> with for=\"dietary\", textarea with id=\"dietary\", name=\"dietary\", placeholder=\"Please list any dietary restrictions, allergies, or special meal requirements...\", rows=\"2\".",
        "Add accessibility needs: Insert 'Accessibility Requirements:' in <label> with for=\"accessibility\", textarea with id=\"accessibility\", name=\"accessibility\", placeholder=\"Please describe any accessibility accommodations needed...\", rows=\"2\".",
        "Add hotel interest: Insert input with type=\"checkbox\", id=\"hotel-info\", name=\"hotel-info\", value=\"yes\", followed by 'I need information about partner hotel discounts' in <label> with for=\"hotel-info\".",
        "Add parking needs: Insert input with type=\"checkbox\", id=\"parking\", name=\"parking\", value=\"yes\", followed by 'I will need parking at the venue' in <label> with for=\"parking\".",
        "Add shuttle service: Insert input with type=\"checkbox\", id=\"shuttle\", name=\"shuttle\", value=\"yes\", followed by 'I\\'m interested in airport shuttle service' in <label> with for=\"shuttle\".",
        "Close accommodation fieldset.",
        "Create emergency contact fieldset: Insert <fieldset> with 'Emergency Contact Information' in <legend> tags.",
        "Add emergency name: Insert 'Emergency Contact Name:' in <label> with for=\"emergency-name\", input with type=\"text\", id=\"emergency-name\", name=\"emergency-name\", required, placeholder=\"Full name\".",
        "Add emergency relationship: Insert 'Relationship:' in <label> with for=\"emergency-relationship\", input with type=\"text\", id=\"emergency-relationship\", name=\"emergency-relationship\", required, placeholder=\"Spouse, Parent, Sibling, etc.\".",
        "Add emergency phone: Insert 'Emergency Contact Phone:' in <label> with for=\"emergency-phone\", input with type=\"tel\", id=\"emergency-phone\", name=\"emergency-phone\", required, placeholder=\"(555) 123-4567\".",
        "Add medical conditions: Insert 'Medical Conditions/Medications (Optional):' in <label> with for=\"medical\", textarea with id=\"medical\", name=\"medical\", placeholder=\"Any medical conditions we should be aware of in case of emergency...\", rows=\"2\".",
        "Close emergency contact fieldset.",
        "Create marketing & communication fieldset: Insert <fieldset> with 'Communication & Marketing Preferences' in <legend> tags.",
        "Add event updates: Insert input with type=\"checkbox\", id=\"event-updates\", name=\"event-updates\", value=\"yes\", checked, followed by 'Send me updates about this event' in <label> with for=\"event-updates\".",
        "Add future events: Insert input with type=\"checkbox\", id=\"future-events\", name=\"future-events\", value=\"yes\", followed by 'Notify me about future TechSummit events' in <label> with for=\"future-events\".",
        "Add partner offers: Insert input with type=\"checkbox\", id=\"partner-offers\", name=\"partner-offers\", value=\"yes\", followed by 'I\\'m interested in offers from event partners and sponsors' in <label> with for=\"partner-offers\".",
        "Add career opportunities: Insert input with type=\"checkbox\", id=\"career-opps\", name=\"career-opps\", value=\"yes\", followed by 'Send me relevant career opportunities and job postings' in <label> with for=\"career-opps\".",
        "Add contact method: Insert 'Preferred Contact Method:' in <label> with for=\"contact-method\", input with type=\"text\", id=\"contact-method\", name=\"contact-method\", placeholder=\"Email, Phone, LinkedIn, etc.\".",
        "Close marketing fieldset.",
        "Create agreements fieldset: Insert <fieldset> with 'Terms & Agreements' in <legend> tags.",
        "Add photo consent: Insert input with type=\"checkbox\", id=\"photo-consent\", name=\"photo-consent\", value=\"yes\", followed by 'I consent to photography/videography at the event for promotional purposes' in <label> with for=\"photo-consent\".",
        "Add code of conduct: Insert input with type=\"checkbox\", id=\"code-conduct\", name=\"code-conduct\", value=\"agreed\", required, followed by 'I agree to abide by the TechSummit Code of Conduct' in <label> with for=\"code-conduct\".",
        "Add terms agreement: Insert input with type=\"checkbox\", id=\"terms-conditions\", name=\"terms-conditions\", value=\"agreed\", required, followed by 'I agree to the Terms & Conditions and Privacy Policy' in <label> with for=\"terms-conditions\".",
        "Add liability waiver: Insert input with type=\"checkbox\", id=\"liability\", name=\"liability\", value=\"agreed\", required, followed by 'I acknowledge the liability waiver and assume responsibility for my participation' in <label> with for=\"liability\".",
        "Close agreements fieldset.",
        "Add comprehensive button group: Insert 'Complete Registration' in <button> with type=\"submit\", 'Save Progress' in <button> with type=\"button\", 'Review Selections' in <button> with type=\"button\", and 'Start Over' in <button> with type=\"reset\".",
        "Add confirmation details: Insert 'Registration Confirmation' in <h3> tags followed by 'You will receive email confirmation within 1 hour. Event tickets and additional details will be sent 1 week before the event.' in <p> tags.",
        "Add support contact: Insert 'Questions? Contact our registration team at registration@techsummit.com or (555) 123-EVENT.' in <p> tags with <small> wrapper.",
        "Save and thoroughly test the comprehensive form with all fieldsets, labels, and buttons working perfectly."
      ]
    },
    {
      id: 5,
      title: "Create a Multi-Step Onboarding Form with Advanced Navigation",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'user-onboarding.html' with complete HTML structure.",
        "Set the title to 'Welcome to DevTools Pro - Account Setup'.",
        "Create the welcome header: Insert 'Welcome to DevTools Pro!' in <h1> tags.",
        "Add progress indicator: Insert 'Account Setup Progress: Step 1 of 5' in <p> tags with <strong> wrapper.",
        "Add welcome message: Insert 'Let\\'s get your account set up so you can start building amazing projects. This should take about 5 minutes.' in <p> tags.",
        "Start the comprehensive onboarding form with method=\"post\" and action=\"/onboard\".",
        "Create basic account fieldset: Insert <fieldset> with 'Step 1: Basic Account Information' in <legend> tags.",
        "Add username: Insert 'Choose a Username:' in <label> with for=\"username\", input with type=\"text\", id=\"username\", name=\"username\", required, minlength=\"3\", maxlength=\"20\", placeholder=\"Choose a unique username\".",
        "Add email: Insert 'Email Address:' in <label> with for=\"user-email\", input with type=\"email\", id=\"user-email\", name=\"user-email\", required, placeholder=\"your@email.com\".",
        "Add password: Insert 'Create Password:' in <label> with for=\"user-password\", input with type=\"password\", id=\"user-password\", name=\"user-password\", required, minlength=\"8\", placeholder=\"At least 8 characters\".",
        "Add confirm password: Insert 'Confirm Password:' in <label> with for=\"confirm-password\", input with type=\"password\", id=\"confirm-password\", name=\"confirm-password\", required, placeholder=\"Re-enter your password\".",
        "Add password requirements: Insert 'Password must contain at least 8 characters with letters, numbers, and special characters.' in <small> tags within <p>.",
        "Close basic account fieldset.",
        "Create profile information fieldset: Insert <fieldset> with 'Step 2: Profile Information' in <legend> tags.",
        "Add first name: Insert 'First Name:' in <label> with for=\"profile-first\", input with type=\"text\", id=\"profile-first\", name=\"profile-first\", required, maxlength=\"50\".",
        "Add last name: Insert 'Last Name:' in <label> with for=\"profile-last\", input with type=\"text\", id=\"profile-last\", name=\"profile-last\", required, maxlength=\"50\".",
        "Add display name: Insert 'Display Name (Optional):' in <label> with for=\"display-name\", input with type=\"text\", id=\"display-name\", name=\"display-name\", placeholder=\"How should others see your name?\".",
        "Add bio: Insert 'Short Bio (Optional):' in <label> with for=\"bio\", textarea with id=\"bio\", name=\"bio\", placeholder=\"Tell others about yourself in a few sentences...\", rows=\"3\", maxlength=\"200\".",
        "Add location: Insert 'Location (Optional):' in <label> with for=\"user-location\", input with type=\"text\", id=\"user-location\", name=\"user-location\", placeholder=\"City, Country\".",
        "Add website: Insert 'Personal Website (Optional):' in <label> with for=\"user-website\", input with type=\"url\", id=\"user-website\", name=\"user-website\", placeholder=\"https://yourwebsite.com\".",
        "Close profile information fieldset.",
        "Create professional details fieldset: Insert <fieldset> with 'Step 3: Professional Details' in <legend> tags.",
        "Add job title: Insert 'Current Job Title:' in <label> with for=\"job-title-current\", input with type=\"text\", id=\"job-title-current\", name=\"job-title-current\", placeholder=\"Software Developer, Designer, etc.\".",
        "Add company: Insert 'Company/Organization:' in <label> with for=\"user-company\", input with type=\"text\", id=\"user-company\", name=\"user-company\", placeholder=\"Where do you work?\".",
        "Add experience level: Insert 'Experience Level:' in <label> with for=\"experience-level\", input with type=\"text\", id=\"experience-level\", name=\"experience-level\", placeholder=\"Junior, Mid-level, Senior, Lead\".",
        "Add years experience: Insert 'Years of Experience:' in <label> with for=\"years-exp\", input with type=\"number\", id=\"years-exp\", name=\"years-exp\", min=\"0\", max=\"50\", placeholder=\"Number of years\".",
        "Add skills: Insert 'Primary Skills/Technologies:' in <label> with for=\"primary-skills\", textarea with id=\"primary-skills\", name=\"primary-skills\", placeholder=\"JavaScript, Python, React, Node.js, etc.\", rows=\"3\".",
        "Add github: Insert 'GitHub Profile (Optional):' in <label> with for=\"user-github\", input with type=\"url\", id=\"user-github\", name=\"user-github\", placeholder=\"https://github.com/yourusername\".",
        "Add portfolio: Insert 'Portfolio URL (Optional):' in <label> with for=\"user-portfolio\", input with type=\"url\", id=\"user-portfolio\", name=\"user-portfolio\", placeholder=\"https://yourportfolio.com\".",
        "Close professional details fieldset.",
        "Create interests and goals fieldset: Insert <fieldset> with 'Step 4: Interests & Goals' in <legend> tags.",
        "Add interests: Insert 'Development Interests (Check all that apply):' in <label> with for=\"dev-interests\".",
        "Add interest checkboxes: Insert multiple checkboxes with name=\"interests\" for values like 'web-development', 'mobile-development', 'ai-ml', 'devops', 'design', 'data-science' with descriptive labels.",
        "Add goals: Insert 'Primary Goals (Check your top 3):' in <label> with for=\"user-goals\".",
        "Add goal checkboxes: Insert checkboxes with name=\"goals\" for 'learn-new-tech', 'advance-career', 'build-portfolio', 'start-business', 'contribute-opensource', 'find-job' with clear labels.",
        "Add learning preference: Insert 'Preferred Learning Style:' in <label> with for=\"learning-style\", input with type=\"text\", id=\"learning-style\", name=\"learning-style\", placeholder=\"Visual, Hands-on, Reading, Videos, etc.\".",
        "Add time commitment: Insert 'Weekly Time for Development:' in <label> with for=\"time-commitment\", input with type=\"text\", id=\"time-commitment\", name=\"time-commitment\", placeholder=\"5-10 hours, 10-20 hours, etc.\".",
        "Close interests and goals fieldset.",
        "Create preferences and settings fieldset: Insert <fieldset> with 'Step 5: Preferences & Settings' in <legend> tags.",
        "Add notification preferences: Insert 'Notification Preferences (Check all you want):' in <label>.",
        "Add notification checkboxes: Insert checkboxes with name=\"notifications\" for 'email-digest', 'project-updates', 'community-posts', 'learning-reminders', 'job-opportunities' with descriptions.",
        "Add privacy settings: Insert 'Profile Visibility:' in <label> with for=\"profile-visibility\", input with type=\"text\", id=\"profile-visibility\", name=\"profile-visibility\", placeholder=\"Public, Private, Friends Only\".",
        "Add newsletter signup: Insert input with type=\"checkbox\", id=\"newsletter-signup\", name=\"newsletter-signup\", value=\"yes\", checked, followed by 'Subscribe to DevTools Pro newsletter (weekly tips and updates)' in <label> with for=\"newsletter-signup\".",
        "Add marketing consent: Insert input with type=\"checkbox\", id=\"marketing-consent\", name=\"marketing-consent\", value=\"yes\", followed by 'I\\'m interested in partner offers and educational content' in <label> with for=\"marketing-consent\".",
        "Add beta features: Insert input with type=\"checkbox\", id=\"beta-features\", name=\"beta-features\", value=\"yes\", followed by 'I want to try beta features and provide feedback' in <label> with for=\"beta-features\".",
        "Add timezone: Insert 'Timezone:' in <label> with for=\"user-timezone\", input with type=\"text\", id=\"user-timezone\", name=\"user-timezone\", placeholder=\"America/New_York, Europe/London, etc.\".",
        "Close preferences and settings fieldset.",
        "Create terms and final setup fieldset: Insert <fieldset> with 'Final Setup & Agreements' in <legend> tags.",
        "Add referral source: Insert 'How did you hear about us?:' in <label> with for=\"referral-source\", input with type=\"text\", id=\"referral-source\", name=\"referral-source\", placeholder=\"Search engine, friend, social media, etc.\".",
        "Add setup completion: Insert input with type=\"checkbox\", id=\"profile-complete\", name=\"profile-complete\", value=\"yes\", followed by 'I have completed my profile information' in <label> with for=\"profile-complete\".",
        "Add terms acceptance: Insert input with type=\"checkbox\", id=\"accept-terms\", name=\"accept-terms\", value=\"agreed\", required, followed by 'I agree to the Terms of Service and Privacy Policy' in <label> with for=\"accept-terms\".",
        "Add age verification: Insert input with type=\"checkbox\", id=\"age-verify\", name=\"age-verify\", value=\"confirmed\", required, followed by 'I confirm that I am 13 years of age or older' in <label> with for=\"age-verify\".",
        "Add community guidelines: Insert input with type=\"checkbox\", id=\"community-guidelines\", name=\"community-guidelines\", value=\"agreed\", required, followed by 'I agree to follow the DevTools Pro Community Guidelines' in <label> with for=\"community-guidelines\".",
        "Close terms fieldset.",
        "Add navigation buttons: Insert 'Complete Setup' in <button> with type=\"submit\", 'Save Progress' in <button> with type=\"button\", 'Preview Profile' in <button> with type=\"button\", and 'Start Over' in <button> with type=\"reset\".",
        "Add completion message: Insert 'Almost done! Click \"Complete Setup\" to finish creating your DevTools Pro account.' in <p> tags with <strong> wrapper.",
        "Add support information: Insert 'Need help? Visit our Help Center or contact support@devtoolspro.com' in <p> tags with <small> wrapper.",
        "Save and thoroughly test the comprehensive onboarding form ensuring all labels, fieldsets, and buttons work perfectly together."
      ]
    }
  ]
};
