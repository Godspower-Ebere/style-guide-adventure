
import { DayLesson } from "../types";

export const day9: DayLesson = {
  day: 9,
  title: "HTML Forms - Checkboxes and Radio Buttons for Smart Choices",
  category: "HTML Forms",
  description: "Welcome to day 9! Today we're going to learn about the selection superstars of HTML forms - checkboxes and radio buttons! These elements let your users make choices from predefined options, whether they're selecting pizza toppings (multiple choices) or choosing their favorite color (single choice). You'll discover when to use each one and how to create intuitive selection interfaces!",
  learningObjectives: [
    "Master the difference between checkboxes (multiple selections) and radio buttons (single selection)",
    "Learn to create grouped radio button selections that work together perfectly",
    "Understand how to implement checkboxes for multiple choice scenarios",
    "Discover the power of fieldset and legend for organizing form sections",
    "Practice building real-world forms with various selection controls"
  ],
  detailedExplanation: `
## Welcome to Day 9 - Let's Give Users Great Choices!

Hey there! You've done amazing work getting to day 9. Yesterday you mastered basic form inputs, and today we're adding two incredibly powerful elements that will make your forms much more interactive and user-friendly: checkboxes and radio buttons!

### Understanding the Two Types of Choices

Before we dive into the code, let me help you understand when to use each type of selection control:

**Radio Buttons** - Use when users can select ONLY ONE option from a group:
- "What's your favorite color?" (Red, Blue, Green - pick one)
- "What size do you want?" (Small, Medium, Large - pick one)
- "How did you hear about us?" (Google, Friend, Advertisement - pick one)

**Checkboxes** - Use when users can select MULTIPLE options:
- "What pizza toppings do you want?" (Pepperoni, Mushrooms, Cheese - pick any/all)
- "What are your interests?" (Sports, Music, Reading - pick any combination)
- "Which features do you want?" (GPS, Bluetooth, WiFi - pick what you need)

### Mastering Radio Buttons: Single Choice Selections

Radio buttons got their name from old car radios where you could only press one button at a time - press a new one, and the old one pops out! Here's how they work in HTML:

\`\`\`html
<fieldset>
  <legend>Choose your t-shirt size:</legend>
  
  <input type="radio" id="small" name="size" value="small">
  <label for="small">Small</label>
  
  <input type="radio" id="medium" name="size" value="medium">
  <label for="medium">Medium</label>
  
  <input type="radio" id="large" name="size" value="large">
  <label for="large">Large</label>
</fieldset>
\`\`\`

The magic happens with the **name** attribute - all radio buttons with the same name work together as a group. When you select one, the others automatically deselect!

### Key Radio Button Attributes

**name** - Groups radio buttons together (must be the same for all options):
\`\`\`html
<input type="radio" name="payment" value="credit">
<input type="radio" name="payment" value="debit">
<input type="radio" name="payment" value="paypal">
\`\`\`

**value** - What gets sent to the server when this option is selected:
\`\`\`html
<input type="radio" name="delivery" value="pickup">
<input type="radio" name="delivery" value="standard">
<input type="radio" name="delivery" value="express">
\`\`\`

**checked** - Makes an option selected by default:
\`\`\`html
<input type="radio" name="newsletter" value="yes">
<input type="radio" name="newsletter" value="no" checked>
\`\`\`

### Mastering Checkboxes: Multiple Choice Freedom

Checkboxes are perfect when users might want to select multiple options. Each checkbox works independently:

\`\`\`html
<fieldset>
  <legend>Select your favorite pizza toppings:</legend>
  
  <input type="checkbox" id="pepperoni" name="toppings" value="pepperoni">
  <label for="pepperoni">Pepperoni</label>
  
  <input type="checkbox" id="mushrooms" name="toppings" value="mushrooms">
  <label for="mushrooms">Mushrooms</label>
  
  <input type="checkbox" id="cheese" name="toppings" value="cheese">
  <label for="cheese">Extra Cheese</label>
  
  <input type="checkbox" id="olives" name="toppings" value="olives">
  <label for="olives">Black Olives</label>
</fieldset>
\`\`\`

Notice that checkboxes can use the same name (for grouping server-side) or different names (for individual tracking).

### Organizing Choices with Fieldset and Legend

The \`<fieldset>\` and \`<legend>\` elements are your best friends for organizing related form controls:

\`\`\`html
<fieldset>
  <legend>Delivery Options</legend>
  <input type="radio" id="pickup" name="delivery" value="pickup">
  <label for="pickup">Store Pickup (Free)</label>
  
  <input type="radio" id="standard" name="delivery" value="standard">
  <label for="standard">Standard Delivery ($5.99)</label>
  
  <input type="radio" id="express" name="delivery" value="express">
  <label for="express">Express Delivery ($12.99)</label>
</fieldset>
\`\`\`

The fieldset creates a visual and logical group, while the legend provides a clear title for the group.

### Real-World Example: Complete Pizza Order Form

Let me show you how radio buttons and checkboxes work together in a practical pizza ordering form:

\`\`\`html
<form action="/order" method="post">
  <h2>Build Your Perfect Pizza</h2>
  
  <!-- Radio buttons for size -->
  <fieldset>
    <legend>Choose Your Size (Select One)</legend>
    
    <input type="radio" id="small-pizza" name="size" value="small" checked>
    <label for="small-pizza">Small - 10" ($12.99)</label>
    
    <input type="radio" id="medium-pizza" name="size" value="medium">
    <label for="medium-pizza">Medium - 12" ($15.99)</label>
    
    <input type="radio" id="large-pizza" name="size" value="large">
    <label for="large-pizza">Large - 14" ($18.99)</label>
  </fieldset>
  
  <!-- Radio buttons for crust -->
  <fieldset>
    <legend>Choose Your Crust (Select One)</legend>
    
    <input type="radio" id="thin" name="crust" value="thin">
    <label for="thin">Thin Crust</label>
    
    <input type="radio" id="thick" name="crust" value="thick" checked>
    <label for="thick">Thick Crust</label>
    
    <input type="radio" id="stuffed" name="crust" value="stuffed">
    <label for="stuffed">Stuffed Crust (+$2.00)</label>
  </fieldset>
  
  <!-- Checkboxes for toppings -->
  <fieldset>
    <legend>Choose Your Toppings (Select Any)</legend>
    
    <input type="checkbox" id="pepperoni" name="toppings" value="pepperoni">
    <label for="pepperoni">Pepperoni (+$1.50)</label>
    
    <input type="checkbox" id="sausage" name="toppings" value="sausage">
    <label for="sausage">Italian Sausage (+$1.50)</label>
    
    <input type="checkbox" id="mushrooms" name="toppings" value="mushrooms">
    <label for="mushrooms">Fresh Mushrooms (+$1.00)</label>
    
    <input type="checkbox" id="peppers" name="toppings" value="peppers">
    <label for="peppers">Bell Peppers (+$1.00)</label>
    
    <input type="checkbox" id="cheese" name="toppings" value="cheese">
    <label for="cheese">Extra Cheese (+$2.00)</label>
  </fieldset>
  
  <!-- Delivery options -->
  <fieldset>
    <legend>Delivery Method (Select One)</legend>
    
    <input type="radio" id="pickup" name="delivery" value="pickup">
    <label for="pickup">Store Pickup (Free)</label>
    
    <input type="radio" id="delivery" name="delivery" value="delivery" checked>
    <label for="delivery">Home Delivery ($3.99)</label>
  </fieldset>
  
  <button type="submit">Add to Cart</button>
</form>
\`\`\`

See how each section uses the appropriate type of selection? Size and crust are radio buttons (single choice), while toppings are checkboxes (multiple choices).

### Advanced Techniques: Pre-selecting Popular Options

You can help users by pre-selecting popular or recommended options:

\`\`\`html
<fieldset>
  <legend>Subscription Plan</legend>
  
  <input type="radio" id="basic" name="plan" value="basic">
  <label for="basic">Basic Plan ($9.99/month)</label>
  
  <input type="radio" id="premium" name="plan" value="premium" checked>
  <label for="premium">Premium Plan ($19.99/month) - Most Popular!</label>
  
  <input type="radio" id="enterprise" name="plan" value="enterprise">
  <label for="enterprise">Enterprise Plan ($49.99/month)</label>
</fieldset>
\`\`\`

### Handling Complex Selections

Sometimes you need to organize many options. Here's how to handle a preferences survey:

\`\`\`html
<form>
  <h2>Customer Preferences Survey</h2>
  
  <fieldset>
    <legend>How often do you shop online?</legend>
    <input type="radio" id="daily" name="frequency" value="daily">
    <label for="daily">Daily</label>
    
    <input type="radio" id="weekly" name="frequency" value="weekly">
    <label for="weekly">Weekly</label>
    
    <input type="radio" id="monthly" name="frequency" value="monthly">
    <label for="monthly">Monthly</label>
    
    <input type="radio" id="rarely" name="frequency" value="rarely">
    <label for="rarely">Rarely</label>
  </fieldset>
  
  <fieldset>
    <legend>What product categories interest you? (Check all that apply)</legend>
    <input type="checkbox" id="electronics" name="interests" value="electronics">
    <label for="electronics">Electronics</label>
    
    <input type="checkbox" id="clothing" name="interests" value="clothing">
    <label for="clothing">Clothing & Fashion</label>
    
    <input type="checkbox" id="books" name="interests" value="books">
    <label for="books">Books & Media</label>
    
    <input type="checkbox" id="home" name="interests" value="home">
    <label for="home">Home & Garden</label>
    
    <input type="checkbox" id="sports" name="interests" value="sports">
    <label for="sports">Sports & Outdoors</label>
  </fieldset>
  
  <button type="submit">Submit Survey</button>
</form>
\`\`\`

### Accessibility Best Practices

**Always use labels** - Every radio button and checkbox should have a label:
\`\`\`html
<input type="checkbox" id="newsletter" name="newsletter" value="yes">
<label for="newsletter">Subscribe to our newsletter</label>
\`\`\`

**Group related options** - Use fieldset and legend for clarity:
\`\`\`html
<fieldset>
  <legend>Payment Method</legend>
  <!-- radio buttons here -->
</fieldset>
\`\`\`

**Provide clear value descriptions** - Make labels descriptive:
\`\`\`html
<label for="express">Express Shipping (1-2 business days) - $15.99</label>
\`\`\`

### Common Mistakes to Avoid

**Forgetting the name attribute** - Radio buttons won't group properly without matching names.

**Using radio buttons for multiple selections** - Use checkboxes when users can pick multiple options.

**Missing labels** - Every input needs a proper label for accessibility.

**Inconsistent grouping** - Keep related options together in fieldsets.

Radio buttons and checkboxes are the secret ingredients that make forms feel intuitive and user-friendly!
`,
  keyTerms: [
    { term: "Radio Button", definition: "Input type that allows selecting only one option from a group. All radio buttons in a group must share the same name attribute." },
    { term: "Checkbox", definition: "Input type that allows selecting multiple options independently. Each checkbox works on its own or as part of a group." },
    { term: "Fieldset", definition: "Element that groups related form controls together, creating visual and logical organization." },
    { term: "Legend", definition: "Element that provides a caption or title for a fieldset group, explaining what the grouped controls are for." },
    { term: "Name Attribute", definition: "Groups radio buttons together so only one can be selected at a time. Also used to identify form data on the server." },
    { term: "Value Attribute", definition: "Specifies what data gets sent to the server when a radio button or checkbox is selected." },
    { term: "Checked Attribute", definition: "Makes a radio button or checkbox selected by default when the page loads." },
    { term: "Single Selection", definition: "Interface pattern where users can choose only one option from multiple choices (radio buttons)." },
    { term: "Multiple Selection", definition: "Interface pattern where users can choose any number of options from available choices (checkboxes)." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create a Simple Pizza Order Form with Basic Selections",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'pizza-order.html' with complete document structure.",
        "Set the title to 'Pizza Palace - Order Form'.",
        "In the body, insert 'Pizza Palace Order Form' in <h1> tags.",
        "Add introduction: Insert 'Build your perfect pizza with our easy order form!' in <p> tags.",
        "Start the form with <form> tags using method=\"post\" and action=\"/order\".",
        "Create size selection using <fieldset> with 'Choose Your Pizza Size' in <legend> tags.",
        "Add small option: Insert input with type=\"radio\", id=\"small\", name=\"size\", value=\"small\", followed by label with for=\"small\" containing 'Small (10\") - $12.99'.",
        "Add medium option: Insert input with type=\"radio\", id=\"medium\", name=\"size\", value=\"medium\", checked, followed by label with for=\"medium\" containing 'Medium (12\") - $15.99'.",
        "Add large option: Insert input with type=\"radio\", id=\"large\", name=\"size\", value=\"large\", followed by label with for=\"large\" containing 'Large (14\") - $18.99'.",
        "Close the size fieldset.",
        "Create toppings selection using <fieldset> with 'Choose Your Toppings (Select Any)' in <legend> tags.",
        "Add pepperoni: Insert input with type=\"checkbox\", id=\"pepperoni\", name=\"toppings\", value=\"pepperoni\", followed by label with for=\"pepperoni\" containing 'Pepperoni (+$1.50)'.",
        "Add mushrooms: Insert input with type=\"checkbox\", id=\"mushrooms\", name=\"toppings\", value=\"mushrooms\", followed by label with for=\"mushrooms\" containing 'Mushrooms (+$1.00)'.",
        "Add cheese: Insert input with type=\"checkbox\", id=\"cheese\", name=\"toppings\", value=\"cheese\", followed by label with for=\"cheese\" containing 'Extra Cheese (+$2.00)'.",
        "Close the toppings fieldset.",
        "Add submit button: Insert 'Order Now' in <button> tags with type=\"submit\".",
        "Save and test the form to ensure radio buttons work as a group and checkboxes work independently."
      ]
    },
    {
      id: 2,
      title: "Build a Customer Preferences Survey Form",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'customer-survey.html' with complete HTML structure.",
        "Set the title to 'Customer Preferences Survey'.",
        "Create the header: Insert 'Help Us Serve You Better' in <h1> tags.",
        "Add introduction: Insert 'Your preferences help us improve our products and services. This survey takes less than 3 minutes.' in <p> tags.",
        "Start the form with method=\"post\" and action=\"/survey\".",
        "Create age group selection: Insert <fieldset> with 'What is your age group?' in <legend> tags.",
        "Add age options: Insert radio buttons with name=\"age\" for values '18-25', '26-35', '36-45', '46-55', '56+' with appropriate labels.",
        "Create shopping frequency: Insert <fieldset> with 'How often do you shop with us?' in <legend> tags.",
        "Add frequency options: Insert radio buttons with name=\"frequency\" for values 'weekly', 'monthly', 'quarterly', 'yearly' with descriptive labels.",
        "Create product interests: Insert <fieldset> with 'Which product categories interest you? (Check all that apply)' in <legend> tags.",
        "Add interest checkboxes: Insert checkboxes with name=\"interests\" for values 'electronics', 'clothing', 'books', 'home-garden', 'sports' with clear labels.",
        "Create communication preferences: Insert <fieldset> with 'How would you like to hear from us? (Check all that apply)' in <legend> tags.",
        "Add communication checkboxes: Insert checkboxes with name=\"communication\" for values 'email', 'sms', 'mail', 'phone' with descriptive labels.",
        "Create satisfaction rating: Insert <fieldset> with 'Rate your overall satisfaction' in <legend> tags.",
        "Add rating options: Insert radio buttons with name=\"satisfaction\" for values '1', '2', '3', '4', '5' with labels 'Very Poor', 'Poor', 'Average', 'Good', 'Excellent'.",
        "Add submit button: Insert 'Submit Survey' in <button> tags with type=\"submit\".",
        "Add privacy note: Insert 'Your responses are confidential and help us improve our services.' in <p> tags with <small> wrapper.",
        "Save and test all selection groups work correctly."
      ]
    },
    {
      id: 3,
      title: "Create a Comprehensive Event Registration Form",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'event-registration.html' with complete HTML structure.",
        "Set the title to 'Web Developers Conference 2024 - Registration'.",
        "Create event header: Insert 'Web Developers Conference 2024' in <h1> tags.",
        "Add event details: Insert 'October 15-17, 2024 | San Francisco Convention Center' in <h2> tags.",
        "Add description: Insert 'Join 500+ developers for three days of workshops, networking, and cutting-edge presentations.' in <p> tags.",
        "Start registration form with method=\"post\" and action=\"/register\".",
        "Add attendee name: Insert 'Full Name:' in <label> with for=\"name\", followed by input with type=\"text\", id=\"name\", name=\"name\", required.",
        "Add email: Insert 'Email Address:' in <label> with for=\"email\", followed by input with type=\"email\", id=\"email\", name=\"email\", required.",
        "Create registration type: Insert <fieldset> with 'Choose Your Registration Type' in <legend> tags.",
        "Add registration options: Insert radio buttons with name=\"registration\" for 'early-bird' ($299), 'regular' ($399), 'student' ($199) with pricing in labels.",
        "Create experience level: Insert <fieldset> with 'What is your experience level?' in <legend> tags.",
        "Add experience options: Insert radio buttons with name=\"experience\" for 'beginner', 'intermediate', 'advanced' with descriptive labels.",
        "Create workshop interests: Insert <fieldset> with 'Which workshops interest you most? (Select up to 3)' in <legend> tags.",
        "Add workshop checkboxes: Insert checkboxes with name=\"workshops\" for 'react', 'nodejs', 'python', 'ai-ml', 'devops', 'mobile' with full workshop titles.",
        "Create dietary requirements: Insert <fieldset> with 'Dietary Requirements (Check all that apply)' in <legend> tags.",
        "Add dietary checkboxes: Insert checkboxes with name=\"dietary\" for 'vegetarian', 'vegan', 'gluten-free', 'nut-allergy', 'no-restrictions'.",
        "Create networking preferences: Insert <fieldset> with 'Networking Interests (Check all that apply)' in <legend> tags.",
        "Add networking checkboxes: Insert checkboxes with name=\"networking\" for 'startup-founders', 'tech-recruiters', 'freelancers', 'enterprise-devs', 'students'.",
        "Create t-shirt size: Insert <fieldset> with 'Conference T-Shirt Size' in <legend> tags.",
        "Add size options: Insert radio buttons with name=\"tshirt\" for 'XS', 'S', 'M', 'L', 'XL', 'XXL'.",
        "Create marketing consent: Insert <fieldset> with 'Communication Preferences' in <legend> tags.",
        "Add consent checkbox: Insert checkbox with id=\"newsletter\", name=\"marketing\", value=\"yes\", followed by label 'I want to receive updates about future conferences and events'.",
        "Add agreement checkbox: Insert checkbox with id=\"terms\", name=\"terms\", value=\"agreed\", required, followed by label 'I agree to the terms and conditions and privacy policy'.",
        "Add submit button: Insert 'Complete Registration' in <button> tags with type=\"submit\".",
        "Add confirmation message: Insert 'You will receive a confirmation email within 24 hours.' in <p> tags with <em> wrapper.",
        "Save and thoroughly test the comprehensive registration form."
      ]
    },
    {
      id: 4,
      title: "Build a Product Customization and Ordering System",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'product-customization.html' with complete HTML structure.",
        "Set the title to 'Custom Laptop Builder - TechShop Pro'.",
        "Create the header: Insert 'Build Your Perfect Laptop' in <h1> tags.",
        "Add tagline: Insert 'Customize every component to match your needs and budget' in <h2> tags.",
        "Start the form with method=\"post\" and action=\"/customize\".",
        "Add customer info: Insert 'Customer Name:' in <label> with input type=\"text\", required, and 'Email:' in <label> with input type=\"email\", required.",
        "Create processor selection: Insert <fieldset> with 'Choose Your Processor' in <legend> tags.",
        "Add processor options: Insert radio buttons with name=\"processor\" for 'intel-i5' ($200), 'intel-i7' ($400), 'intel-i9' ($600), 'amd-ryzen5' ($180), 'amd-ryzen7' ($350) with full descriptions and prices.",
        "Create memory selection: Insert <fieldset> with 'Select Memory (RAM)' in <legend> tags.",
        "Add memory options: Insert radio buttons with name=\"memory\" for '8gb' ($100), '16gb' ($200), '32gb' ($400), '64gb' ($800) with descriptions.",
        "Create storage selection: Insert <fieldset> with 'Choose Storage Options (Select all you need)' in <legend> tags.",
        "Add storage checkboxes: Insert checkboxes with name=\"storage\" for '256gb-ssd' ($150), '512gb-ssd' ($250), '1tb-ssd' ($400), '2tb-hdd' ($100), '4tb-hdd' ($200).",
        "Create graphics selection: Insert <fieldset> with 'Graphics Card' in <legend> tags.",
        "Add graphics options: Insert radio buttons with name=\"graphics\" for 'integrated' (Free), 'gtx-1660' ($300), 'rtx-3060' ($500), 'rtx-3080' ($800).",
        "Create display selection: Insert <fieldset> with 'Display Options' in <legend> tags.",
        "Add display options: Insert radio buttons with name=\"display\" for '1080p-standard' ($0), '1080p-ips' ($100), '1440p-ips' ($250), '4k-oled' ($500).",
        "Create additional features: Insert <fieldset> with 'Additional Features (Select any)' in <legend> tags.",
        "Add feature checkboxes: Insert checkboxes with name=\"features\" for 'backlit-keyboard' ($50), 'fingerprint-reader' ($75), 'webcam-hd' ($25), 'wifi6' ($30), 'bluetooth5' ($20).",
        "Create operating system: Insert <fieldset> with 'Operating System' in <legend> tags.",
        "Add OS options: Insert radio buttons with name=\"os\" for 'windows11-home' ($139), 'windows11-pro' ($199), 'ubuntu-free' ($0), 'no-os' (-$50).",
        "Create warranty selection: Insert <fieldset> with 'Warranty Options' in <legend> tags.",
        "Add warranty options: Insert radio buttons with name=\"warranty\" for '1year-standard' (Free), '2year-extended' ($150), '3year-premium' ($300).",
        "Create color selection: Insert <fieldset> with 'Laptop Color' in <legend> tags.",
        "Add color options: Insert radio buttons with name=\"color\" for 'silver', 'black', 'blue', 'red' (some may have +$25 premium).",
        "Create accessories: Insert <fieldset> with 'Recommended Accessories (Select any)' in <legend> tags.",
        "Add accessory checkboxes: Insert checkboxes with name=\"accessories\" for 'wireless-mouse' ($35), 'laptop-bag' ($45), 'external-monitor' ($200), 'usb-hub' ($25), 'cooling-pad' ($30).",
        "Create delivery options: Insert <fieldset> with 'Delivery Options' in <legend> tags.",
        "Add delivery options: Insert radio buttons with name=\"delivery\" for 'standard' (5-7 days, Free), 'express' (2-3 days, $25), 'overnight' (Next day, $75).",
        "Add marketing preferences: Insert checkboxes for newsletter subscription and promotional offers.",
        "Add terms agreement: Insert required checkbox for terms and conditions acceptance.",
        "Add submit button: Insert 'Build My Laptop' in <button> tags with type=\"submit\".",
        "Add pricing note: Insert 'Final pricing will be calculated based on your selections. Starting price: $599' in <p> tags.",
        "Save and test the comprehensive product customization form with all selection types."
      ]
    },
    {
      id: 5,
      title: "Create a Multi-Section Subscription Service Setup Form",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'subscription-setup.html' with complete HTML structure.",
        "Set the title to 'StreamMax Pro - Subscription Setup'.",
        "Create service header: Insert 'Welcome to StreamMax Pro' in <h1> tags.",
        "Add service description: Insert 'Choose your perfect streaming package with our flexible subscription options.' in <p> tags.",
        "Start the subscription form with method=\"post\" and action=\"/subscribe\".",
        "Add account basics: Insert fields for 'Full Name', 'Email Address', 'Phone Number' with appropriate input types and required attributes.",
        "Create subscription plan: Insert <fieldset> with 'Choose Your Subscription Plan' in <legend> tags.",
        "Add plan options: Insert radio buttons with name=\"plan\" for 'basic' ($9.99/month, 1 device), 'standard' ($15.99/month, 2 devices), 'premium' ($19.99/month, 4 devices), 'family' ($24.99/month, 6 devices) with full feature descriptions.",
        "Create billing cycle: Insert <fieldset> with 'Billing Frequency' in <legend> tags.",
        "Add billing options: Insert radio buttons with name=\"billing\" for 'monthly' (standard rate), 'quarterly' (5% discount), 'annually' (15% discount) with savings calculations.",
        "Create streaming quality: Insert <fieldset> with 'Preferred Streaming Quality' in <legend> tags.",
        "Add quality options: Insert radio buttons with name=\"quality\" for 'standard-def', 'high-def', 'ultra-hd', 'auto-adjust' with bandwidth requirements.",
        "Create content preferences: Insert <fieldset> with 'Content Categories You Enjoy (Select all that apply)' in <legend> tags.",
        "Add content checkboxes: Insert checkboxes with name=\"content\" for 'movies', 'tv-series', 'documentaries', 'sports', 'news', 'kids', 'international', 'original-content'.",
        "Create device types: Insert <fieldset> with 'Devices You Plan to Use (Check all that apply)' in <legend> tags.",
        "Add device checkboxes: Insert checkboxes with name=\"devices\" for 'smart-tv', 'smartphone', 'tablet', 'computer', 'gaming-console', 'streaming-device'.",
        "Create add-on services: Insert <fieldset> with 'Optional Add-On Services' in <legend> tags.",
        "Add add-on checkboxes: Insert checkboxes with name=\"addons\" for 'premium-sports' (+$9.99), 'movie-channels' (+$7.99), 'international-package' (+$12.99), 'ad-free-experience' (+$4.99), 'offline-downloads' (+$2.99).",
        "Create parental controls: Insert <fieldset> with 'Parental Control Settings' in <legend> tags.",
        "Add parental options: Insert radio buttons with name=\"parental\" for 'none', 'basic', 'strict' with explanations of restrictions.",
        "Create language preferences: Insert <fieldset> with 'Language Preferences (Select all that apply)' in <legend> tags.",
        "Add language checkboxes: Insert checkboxes with name=\"languages\" for 'english', 'spanish', 'french', 'german', 'italian', 'portuguese', 'japanese', 'korean'.",
        "Create notification preferences: Insert <fieldset> with 'How would you like to receive updates? (Select preferred methods)' in <legend> tags.",
        "Add notification checkboxes: Insert checkboxes with name=\"notifications\" for 'email-newsletters', 'sms-alerts', 'in-app-notifications', 'new-content-alerts', 'billing-reminders'.",
        "Create auto-renewal: Insert <fieldset> with 'Subscription Management' in <legend> tags.",
        "Add auto-renewal: Insert radio buttons with name=\"auto-renew\" for 'enabled' (recommended), 'disabled' with explanations.",
        "Create trial preferences: Insert <fieldset> with 'Free Trial Options' in <legend> tags.",
        "Add trial options: Insert radio buttons with name=\"trial\" for '7-day-free', '14-day-free', '30-day-free', 'no-trial' with terms.",
        "Add payment method note: Insert 'Payment Method' in <h3> tags followed by 'You will be redirected to secure payment processing after subscription confirmation.' in <p> tags.",
        "Add privacy consent: Insert required checkbox for privacy policy and terms of service agreement.",
        "Add marketing consent: Insert optional checkbox for promotional communications.",
        "Add age verification: Insert required checkbox confirming user is 18+ or has parental consent.",
        "Add submit button: Insert 'Start My Subscription' in <button> tags with type=\"submit\".",
        "Add cancellation policy: Insert 'You can cancel your subscription at any time. No long-term commitments required.' in <p> tags with <small> wrapper.",
        "Save and thoroughly test the comprehensive subscription setup form with all selection groups working properly."
      ]
    }
  ]
};
