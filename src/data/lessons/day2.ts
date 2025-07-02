
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

I'm so glad you're back! Yesterday, you built your first complete HTML document and learned about the basic structure. Today, we're going to focus on something that might seem invisible but is absolutely crucial - the \\\`<head>\\\` section of your HTML document.

### Let Me Explain What the <head> Section Really Is

Think of your HTML document like a theater production. The \\\`<body>\\\` section is what the audience sees - the actors, the set, the performance. But the \\\`<head>\\\` section? That's like everything that happens backstage to make the show possible - the lighting instructions, the sound setup, the program notes that tell people what they're about to see.

The \\\`<head>\\\` section is where you put all the **metadata** - which is just a fancy word for "information about your webpage." This information doesn't show up on the actual page, but it's essential for making your website work properly.

### Here's Why the <head> Section Is So Important

Let me walk you through this with a real-world example. When you visit a website, your browser needs to know several things before it can display the page correctly:

- "What character encoding should I use so special characters display properly?"
- "How should I display this on a mobile phone versus a desktop computer?"
- "What should I show in the browser tab?"
- "Are there any external stylesheets or scripts I need to load?"

All of these questions get answered by the information you put in the \\\`<head>\\\` section. Without it, your webpage might look broken, display weird characters, or not work properly on mobile devices.

### Let's Break Down What Goes Inside the <head>

I want to show you the most important elements you'll be using in the \\\`<head>\\\` section:

**The \\\`<title>\\\` element** - This is probably the most visible effect of the \\\`<head>\\\` section. Whatever you put inside \\\`<title>\\\` tags shows up in your browser tab. It's also what search engines use as the clickable headline in search results!

**Meta tags** - These are special tags that provide information about your document. The two most important ones you'll use are:
- \\\`<meta charset="UTF-8">\\\` - This tells the browser how to handle text characters, ensuring things like accented letters, emojis, and special symbols display correctly
- \\\`<meta name="viewport" content="width=device-width, initial-scale=1.0">\\\` - This is crucial for mobile responsiveness. It tells mobile browsers to display your page at the right size instead of trying to shrink a desktop version

**Comments** - You can also add comments in the \\\`<head>\\\` section using \\\`<!-- comment text -->\\\`. These are notes for yourself or other developers that browsers completely ignore.

### Let Me Show You a Professional HTML Head Structure

Here's what a proper, professional \\\`<head>\\\` section looks like - this is the template you'll want to use for every website you build:

\\\`\\\`\\\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Day 2 Page</title>
    <!-- This is a comment - browsers ignore it but it helps me remember things -->
</head>
<body>
    <h1>Hello, Day 2!</h1>
    <p>Look at the title in the browser tab above!</p>
</body>
</html>
\\\`\\\`\\\`

**Let me explain each line:**
- \\\`<html lang="en">\\\` - I added the lang attribute to tell browsers this content is in English
- \\\`<meta charset="UTF-8">\\\` - This ensures all text displays correctly, including emojis and international characters
- \\\`<meta name="viewport"...>\\\` - This makes your page look good on mobile devices
- \\\`<title>\\\` - This shows up in the browser tab and search results
- The comment helps you (and other developers) understand what's happening in your code

This structure is so standard that you'll see it in virtually every modern website. Once you memorize this pattern, you'll be able to start any HTML project with confidence!

### Here's What's Really Cool About This

Once you save this file and open it in your browser, you'll immediately see the power of the \\\`<head>\\\` section. The browser tab will show your title, the page will display properly on mobile devices, and all your text will render correctly. It might seem like magic, but it's just good HTML structure doing its job!
`,
  keyTerms: [
    { term: "HTML Head", definition: "The behind-the-scenes section of your HTML document that contains all the information browsers need to display your page correctly. Think of it as the instruction manual for your webpage." },
    { term: "Element", definition: "The building blocks of HTML - they're like containers that hold your content. Most elements have opening and closing tags, like <title>...</title>." },
    { term: "Attribute", definition: "Extra information you can add to HTML elements, written as name=\"value\" pairs. They're like settings or options for how the element should behave." },
    { term: "Title", definition: "The text that appears in your browser tab or window title bar. It's also what shows up as the headline when people share your page on social media or find it in search results." },
    { term: "Metadata", definition: "Information about your webpage that browsers and search engines need to know, but that visitors don't see directly on the page. It's like the backstage information that makes everything work." },
    { term: "Charset", definition: "Short for 'character set' - it tells the browser how to interpret and display text characters. UTF-8 is the standard because it can handle any character from any language, plus emojis!" },
    { term: "Viewport", definition: "The visible area of your webpage in the browser window. The viewport meta tag is crucial for making your site look good on mobile devices instead of appearing tiny and zoomed out." }
  ],
  exercises: [
    {
      id: 1,
      title: "Build Your First Professional HTML Head Structure",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file with the complete document structure (DOCTYPE, html, head, body).",
        "Inside the <head> section, insert 'My Professional Page' in <title> tags.",
        "In the <body> section, insert 'Welcome to My Professional Website' in <h1> tags.",
        "Below that, insert 'Notice how the browser tab shows the title from the head section!' in <p> tags.",
        "Save the file as 'professional-page.html' and open it in your browser.",
        "Look at the browser tab - you should see your title displayed there."
      ]
    },
    {
      id: 2,
      title: "Add Character Encoding for Text Support",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Open your professional-page.html file from the previous exercise.",
        "Inside the <head> section, add a <meta> tag with charset=\"UTF-8\" as the very first element after the opening <head> tag.",
        "In your <body> section, add a new paragraph: Insert 'This page supports special characters like café, naïve, and even emojis! 🎉' in <p> tags.",
        "Save the file and refresh your browser to see how the special characters and emoji display correctly.",
        "Try removing the charset meta tag, save, and refresh - notice how some characters might display incorrectly, then add it back."
      ]
    },
    {
      id: 3,
      title: "Implement Mobile-Responsive Viewport Settings",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "In your professional-page.html file, add the viewport meta tag after the charset meta tag.",
        "The viewport meta tag should have name=\"viewport\" and content=\"width=device-width, initial-scale=1.0\".",
        "Add a new section in your <body>: Insert 'Mobile Responsiveness Test' in <h2> tags.",
        "Below that, insert 'This page is now optimized for mobile devices thanks to the viewport meta tag in the head section.' in <p> tags.",
        "Save the file and test it by opening it on your phone or using your browser's mobile device simulator (F12 > device toolbar).",
        "Compare how the page looks with and without the viewport meta tag by temporarily removing it."
      ]
    },
    {
      id: 4,
      title: "Create a Multi-Section Page with Comprehensive Head Setup",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'my-blog.html' with complete HTML structure.",
        "Set up the head section with charset, viewport, and insert 'My Personal Blog - Web Development Journey' in <title> tags.",
        "Add an HTML comment in the head section: Insert 'Head section contains metadata for proper page rendering' as a comment.",
        "In the body, create this structure: Insert 'My Web Development Blog' in <h1> tags.",
        "Add: Insert 'Day 2: Understanding HTML Head Section' in <h2> tags.",
        "Add: Insert 'Today I learned about the importance of the HTML head section. The head contains metadata that browsers need but users don\\'t see directly.' in <p> tags.",
        "Add: Insert 'Key Elements I Learned' in <h2> tags.",
        "Add: Insert 'The title element sets the browser tab text, meta charset ensures proper character encoding, and meta viewport makes pages mobile-friendly.' in <p> tags.",
        "Save and test the file, paying attention to how the browser tab displays your title."
      ]
    },
    {
      id: 5,
      title: "Build a Complete Business Website Template",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a new file called 'business-template.html' with full HTML structure.",
        "Set up a professional head section with charset UTF-8 and proper viewport settings.",
        "Insert 'TechSolutions Pro - Digital Marketing Agency' in <title> tags.",
        "Add a comment in the head: Insert 'Professional business website template with proper metadata setup' as a comment.",
        "Create this complete business page structure in the body:",
        "Insert 'TechSolutions Pro' in <h1> tags.",
        "Insert 'Your Digital Success Partner' in <h2> tags.",
        "Insert 'Welcome to TechSolutions Pro, where we combine cutting-edge technology with proven marketing strategies to grow your business online.' in <p> tags.",
        "Insert 'Our Services' in <h2> tags.",
        "Insert 'Website Development' in <h3> tags, followed by 'Custom websites built with modern HTML, CSS, and JavaScript.' in <p> tags.",
        "Insert 'Digital Marketing' in <h3> tags, followed by 'SEO, social media, and content marketing to increase your online visibility.' in <p> tags.",
        "Insert 'Analytics & Reporting' in <h3> tags, followed by 'Detailed insights into your website performance and marketing ROI.' in <p> tags.",
        "Insert 'Contact Us Today' in <h2> tags.",
        "Insert 'Ready to take your business to the next level? Our team is here to help you succeed in the digital landscape.' in <p> tags.",
        "Save the file and open it in your browser, then test it on mobile to see how the viewport meta tag ensures proper mobile display.",
        "Experiment with changing the title and refreshing to see how it updates the browser tab."
      ]
    }
  ]
};
