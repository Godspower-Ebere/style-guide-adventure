import { DayLesson } from "../types";

export const day2: DayLesson = {
  day: 2,
  title: "Understanding the HTML <head>: Metadata, Titles, and More",
  category: "HTML Basics",
  description: "Welcome back! Today we're diving deeper into something really important - the <head> section of your HTML document. Think of it as the backstage area where all the magic happens that makes your webpage work properly. You'll learn about meta tags, titles, and why this invisible section is absolutely crucial for your websites.",
  learningObjectives: [
    "Discover what the <head> element actually does and why every professional website needs it",
    "Master the essential <head> elements like <title> and <meta> that you'll use in every project",
    "Understand the clear difference between what users see (<body>) and what browsers need (<head>)",
    "Set up character encoding and viewport settings that make your sites work on all devices",
    "Learn to add helpful HTML comments that make your code easier to understand and maintain"
  ],
  detailedExplanation: `
## Welcome Back to Day 2!

I'm so glad you're back! Yesterday, you built your first complete HTML document and learned about the basic structure. Today, we're going to focus on something that might seem invisible but is absolutely crucial - the <head> section of your HTML document.

### Let Me Explain What the <head> Section Really Is

Think of your HTML document like a theater production. The <body> section is what the audience sees - the actors, the set, the performance. But the <head> section? That's like everything that happens backstage to make the show possible - the lighting instructions, the sound setup, the program notes that tell people what they're about to see.

The <head> section is where you put all the **metadata** - which is just a fancy word for "information about your webpage." This information doesn't show up on the actual page, but it's essential for making your website work properly.

### Here's Why the <head> Section Is So Important

Let me walk you through this with a real-world example. When you visit a website, your browser needs to know several things before it can display the page correctly:

- "What character encoding should I use so special characters display properly?"
- "How should I display this on a mobile phone versus a desktop computer?"
- "What should I show in the browser tab?"
- "What description should I use if someone shares this page on social media?"

All of these questions get answered by the information you put in your <head> section!

### The Essential <head> Elements You Need to Know

Let me show you the most important elements that go inside your <head> section:

**The <title> Element**
This is what appears in your browser tab and in search results:

    <title>My Amazing Website - Home Page</title>

**Meta Tags for Character Encoding**
This tells the browser how to interpret your text:

    <meta charset="UTF-8">

**Viewport Meta Tag for Mobile Devices**
This makes your website work properly on phones and tablets:

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

**Description Meta Tag**
This is what shows up in search results and social media shares:

    <meta name="description" content="Learn web development with our step-by-step tutorials and hands-on projects.">

### Here's What a Complete <head> Section Looks Like

Let me show you a professional <head> section that you can use as a template:

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sarah's Portfolio - Web Developer</title>
      <meta name="description" content="Web developer specializing in modern, responsive websites. View my portfolio and get in touch.">
      <meta name="keywords" content="web developer, portfolio, HTML, CSS, JavaScript">
      <meta name="author" content="Sarah Johnson">
    </head>

See how each element serves a specific purpose? Let me break down what each one does:

- **charset="UTF-8"** - Supports all international characters
- **viewport** - Makes your site mobile-friendly
- **title** - Shows in browser tabs and search results
- **description** - Appears in search engine results
- **keywords** - Helps with search engine optimization
- **author** - Identifies who created the page

### HTML Comments - Your Secret Weapon for Organization

HTML comments are notes you can leave in your code that won't show up on the webpage. They're incredibly helpful for organizing your work and remembering what different sections do.

Here's how to write HTML comments:

    <!-- This is a comment - it won't appear on the webpage -->
    <h1>Welcome to My Site</h1>
    <!-- End of header section -->

Comments are especially useful in the <head> section to organize your meta tags:

    <head>
      <!-- Basic meta tags -->
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <!-- Page information -->
      <title>My Website</title>
      <meta name="description" content="This is my awesome website">
      
      <!-- SEO meta tags -->
      <meta name="keywords" content="web development, HTML, CSS">
      <meta name="author" content="Your Name">
    </head>

### Understanding the Difference Between <head> and <body>

This is really important to understand:

**The <head> section contains information FOR the browser and search engines:**
- Page title
- Character encoding
- Mobile viewport settings
- Search engine descriptions
- Links to CSS and JavaScript files (we'll learn about these later)

**The <body> section contains information FOR the website visitors:**
- Headlines and text
- Images and videos
- Links and navigation
- Forms and interactive elements

Think of it this way: <head> is the "behind the scenes" area, and <body> is the "on stage" area.

### A Complete Example to See Everything Together

Here's a full HTML document that shows how everything fits together:

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <!-- Character encoding for international support -->
      <meta charset="UTF-8">
      
      <!-- Mobile-friendly viewport -->
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <!-- Page title (shows in browser tab) -->
      <title>Tommy's Pizza Palace - Best Pizza in Town</title>
      
      <!-- Search engine description -->
      <meta name="description" content="Tommy's Pizza Palace serves authentic Italian pizza with fresh ingredients. Order online or visit our downtown location.">
      
      <!-- SEO keywords -->
      <meta name="keywords" content="pizza, Italian food, restaurant, delivery, downtown">
      
      <!-- Author information -->
      <meta name="author" content="Tommy Martinez">
    </head>
    <body>
      <!-- This is what visitors actually see -->
      <h1>Welcome to Tommy's Pizza Palace</h1>
      <p>Home of the best authentic Italian pizza in town!</p>
      
      <!-- Navigation section -->
      <nav>
        <ul>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <!-- Main content -->
      <main>
        <h2>Our Specialties</h2>
        <p>We use only the freshest ingredients imported directly from Italy.</p>
      </main>
    </body>
    </html>

### Key Points to Remember

1. **The <head> section is for browsers and search engines** - not for website visitors
2. **Always include charset="UTF-8"** - it prevents character display problems
3. **The viewport meta tag is essential** - without it, your site won't work well on mobile devices
4. **Write descriptive titles** - they appear in browser tabs and search results
5. **Use comments to organize your code** - your future self will thank you!
6. **Every element in <head> serves a purpose** - don't just copy and paste without understanding

The <head> section might be invisible to your website visitors, but it's absolutely crucial for making your website professional, accessible, and search-engine friendly!
`,
  keyTerms: [
    { term: "Metadata", definition: "Information about your webpage that browsers and search engines need, but that doesn't appear on the actual page." },
    { term: "<head> Element", definition: "The section of HTML that contains metadata - information about the webpage rather than content that visitors see." },
    { term: "Character Encoding", definition: "Instructions that tell the browser how to interpret and display text characters, especially important for international characters." },
    { term: "Viewport", definition: "The visible area of a webpage on different devices. The viewport meta tag controls how your page appears on mobile devices." },
    { term: "<title> Element", definition: "Sets the text that appears in the browser tab, bookmarks, and search engine results. Super important for SEO!" },
    { term: "Meta Description", definition: "A brief summary of your webpage that appears in search engine results and social media shares." },
    { term: "HTML Comments", definition: "Notes you can write in your HTML code that won't appear on the webpage - great for organizing and documenting your work." },
    { term: "SEO", definition: "Search Engine Optimization - techniques to help your website appear higher in search results." }
  ],
  exercises: [
    {
      id: 1,
      title: "Build Your First Professional <head> Section",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new file called 'professional-head.html' with the basic HTML structure.",
        "In the <head> section, add the charset meta tag: <meta charset=\"UTF-8\">",
        "Add the viewport meta tag: <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "Set the title to 'My Professional Website - [Your Name]' (replace [Your Name] with your actual name).",
        "Add a meta description: <meta name=\"description\" content=\"Personal website showcasing my web development journey and projects.\">",
        "In the body, add a simple heading and paragraph to test that everything works.",
        "Save and open in your browser - check that the title appears in the browser tab."
      ]
    },
    {
      id: 2,
      title: "Practice HTML Comments and Organization",
      type: "classwork",
      difficulty: "easy", 
      instructions: [
        "Open your professional-head.html file from the previous exercise.",
        "Add HTML comments to organize your <head> section with these labels:",
        "Add <!-- Basic meta tags --> before your charset and viewport tags.",
        "Add <!-- Page information --> before your title and description.",
        "In the <body>, add <!-- Header section --> before your heading.",
        "Add <!-- Main content --> before your paragraph.",
        "Add one more paragraph about your goals, with a comment <!-- Personal goals --> above it.",
        "Save and refresh your browser - the comments shouldn't appear on the page, but your content should still display."
      ]
    },
    {
      id: 3,
      title: "Create a Business Website <head> Section",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'business-site.html' with complete HTML structure.",
        "Build a comprehensive <head> section for a fictional business:",
        "Add charset and viewport meta tags.",
        "Set title to '[Business Name] - [Service Type]' (example: 'Green Thumb Landscaping - Professional Garden Services').",
        "Add description meta tag with a compelling business description (aim for 150-160 characters).",
        "Add keywords meta tag with relevant business terms.",
        "Add author meta tag with the business owner's name.",
        "Use HTML comments to organize each section of your <head>.",
        "In the body, create a basic business homepage with heading, description, and contact information.",
        "Test that all meta information displays correctly in the browser tab."
      ]
    },
    {
      id: 4,
      title: "Build a Portfolio Website with Advanced <head> Setup",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'portfolio-site.html' for your personal portfolio website.",
        "Create a professional <head> section with all essential meta tags:",
        "Include charset and viewport for international and mobile support.",
        "Write a compelling title that includes your name and profession/expertise.",
        "Craft a meta description that would make someone want to visit your portfolio (under 160 characters).",
        "Add relevant keywords that represent your skills and interests.",
        "Include your name as the author.",
        "Add HTML comments to clearly organize different sections of your <head>.",
        "In the body, create a portfolio homepage structure:",
        "Add a main heading with your name and title.",
        "Include a brief introduction paragraph about yourself.",
        "Add sections for 'About Me', 'Skills', and 'Contact' with appropriate headings.",
        "Use HTML comments to organize the body content sections as well.",
        "Save and test that everything displays correctly, paying attention to the browser tab title."
      ]
    },
    {
      id: 5,
      title: "Complete Restaurant Website with SEO-Optimized <head>",
      type: "homework", 
      difficulty: "hard",
      instructions: [
        "Create 'restaurant-website.html' for a complete restaurant website.",
        "Build a comprehensive, SEO-optimized <head> section:",
        "Add all basic meta tags (charset, viewport) with proper HTML comments.",
        "Create an engaging title that includes restaurant name and key selling point.",
        "Write a compelling meta description that would make people want to visit (mention cuisine type, location, special features).",
        "Add detailed keywords meta tag including: cuisine type, location, dining style, special features.",
        "Include restaurant owner/chef name as the author.",
        "Add lang=\"en\" attribute to the <html> tag for accessibility.",
        "Organize everything with clear, descriptive HTML comments.",
        "Create a complete restaurant homepage in the body:",
        "Add restaurant name and tagline in the main heading.",
        "Include welcome paragraph with restaurant story/description.",
        "Add sections for 'Our Menu', 'About Us', 'Location & Hours', and 'Contact' with proper headings.",
        "In each section, add placeholder content with appropriate paragraphs.",
        "Use HTML comments throughout the body to organize different sections.",
        "Add a footer with copyright information and contact details.",
        "Test the complete website and verify that all meta information works correctly.",
        "Check that the page displays well and the browser tab shows your optimized title."
      ]
    }
  ]
};
