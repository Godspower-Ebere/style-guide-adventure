
import { DayLesson } from "../types";

export const day1: DayLesson = {
  day: 1,
  title: "Getting Started with HTML: The Skeleton of the Web",
  category: "HTML Basics",
  description: "Hey there! Welcome to your very first day of web development. Today, we're going to explore HTML - think of it as the backbone that holds every website together. You'll learn the essential building blocks and create your very first webpage!",
  learningObjectives: [
    "Discover what HTML really is and why every website needs it",
    "Master the basic structure that every HTML document must have",
    "Get comfortable with essential tags like <!DOCTYPE>, <html>, <head>, <title>, and <body>",
    "Understand the difference between what visitors see and what browsers need to know",
    "Build and view your very first HTML page in a web browser"
  ],
  detailedExplanation: `
## Welcome to Your Web Development Journey!

I'm so excited you're here! Today marks the beginning of something amazing - you're about to learn HTML, which is literally the foundation of every single website you've ever visited.

### Let Me Explain What HTML Really Is

Think about this for a moment - when you visit a website, how does your browser know what's a heading versus what's a paragraph? How does it know where to put images or how to organize the content? That's where **HTML** comes in.

HTML stands for HyperText Markup Language, but don't let that fancy name intimidate you. I like to think of HTML as the **skeleton of a house**. Just like a house needs a frame to tell builders where the walls go, where the doors should be, and how rooms connect, HTML tells your browser exactly how to structure and display your content.

### Here's How HTML Actually Works

Let me walk you through this step by step, because once you understand this concept, everything else will click into place.

**First, let's talk about HTML elements** - these are your building tools. They look like this:

    <p>

or 

    <h1>

Notice those angle brackets? Those tell the browser "Hey, this is an instruction, not regular text."

Most HTML elements come in pairs - they have an opening tag and a closing tag. Think of them like parentheses in a sentence, but for your webpage:

**Example:**
    <p>This is a paragraph that the browser will display.</p>

The opening tag <p> says "start a paragraph here" and the closing tag </p> says "okay, the paragraph ends here." Simple, right?

**Now, let's build your first HTML document structure**

Every HTML document - and I mean every single one - follows the same basic pattern. It's like a recipe that never changes:

1. **<!DOCTYPE html>** - This is like saying "Hey browser, I'm using modern HTML5, so get ready!"
2. **<html>** - This wraps everything else, like the outer walls of your house
3. **<head>** - This is the "behind the scenes" area where you put information about your page
4. **<title>** - This sets what appears in your browser tab (you know, that little text up there!)
5. **<body>** - This is where all your visible content lives

**Here's something important to understand** - there are two main sections in every HTML document:

- The **<head>** section is like the blueprint of your house. It contains important information that the browser needs to know, but visitors won't see it directly on the page.
- The **<body>** section is like the actual rooms of your house - this is where all the content that people will see and interact with goes.

### Let Me Show You Your First HTML Document

Here's what a complete HTML document looks like. Don't worry if it seems like a lot at first - we'll break it down together:

**Complete HTML Structure:**

    <!DOCTYPE html>
    <html>
    <head>
      <title>My First Webpage</title>
    </head>
    <body>
      <!-- Everything the visitor sees goes here -->
      <h1>Hello, World!</h1>
      <p>This is my first paragraph on my first webpage.</p>
    </body>
    </html>

Look at that! You're looking at a complete, working webpage. When you save this as an HTML file and open it in your browser, you'll see "Hello, World!" as a big heading, followed by a paragraph underneath.

**Here's what each part does:**
- The **<!DOCTYPE html>** tells the browser we're using modern HTML
- Everything is wrapped in **<html>** tags
- The **<head>** contains our page title (which shows up in the browser tab)
- The **<body>** contains what visitors actually see
- That **<!-- -->** thing? That's a comment - the browser ignores it, but it helps you remember things!

### Essential HTML Tags You'll Use Every Day

Let me show you the most important tags and how to use them:

**Document Structure Tags:**
- **<!DOCTYPE html>** - Always the first line
- **<html>** - Wraps everything
- **<head>** - Information about the page
- **<body>** - Visible content

**Text Content Tags:**
- **<h1>** - Main heading (biggest)
- **<h2>** - Secondary heading
- **<p>** - Paragraph of text
- **<!-- -->** - Comments (invisible to visitors)

**Example using all these tags:**

    <!DOCTYPE html>
    <html>
    <head>
      <title>My Personal Website</title>
    </head>
    <body>
      <h1>Welcome to My Website</h1>
      <h2>About Me</h2>
      <p>Hi! I'm learning web development and this is my first website.</p>
      <!-- This is a comment that won't show on the page -->
      <p>I'm excited to learn more HTML tags!</p>
    </body>
    </html>

This structure will be your template for every single webpage you create. Pretty cool, right?

### Key Points to Remember

1. **Every HTML document needs the same basic structure** - DOCTYPE, html, head, and body
2. **Most tags come in pairs** - opening tag <p> and closing tag </p>
3. **The head section is for browser information** - title, metadata, etc.
4. **The body section is for visible content** - what visitors see
5. **Comments help you organize** - use <!-- --> to leave notes for yourself

Ready to start building? Let's practice with some exercises!
`,
  keyTerms: [
    { term: "HTML", definition: "HyperText Markup Language - the standard language we use to create the structure and content of web pages. Think of it as the blueprint for websites." },
    { term: "Element / Tag", definition: "The building blocks of HTML. They're like containers that tell the browser what type of content you're putting in. Usually come in pairs like <p>...</p>." },
    { term: "Opening Tag", definition: "The tag that starts an element, like <p>. It's like opening a container to put your content in." },
    { term: "Closing Tag", definition: "The tag that ends an element, like </p>. Notice the forward slash? That tells the browser 'okay, this container is closed now.'" },
    { term: "Content", definition: "The actual text, images, or other stuff that goes between your opening and closing tags. This is what visitors will see." },
    { term: "<!DOCTYPE html>", definition: "A declaration that tells the browser 'I'm using HTML5.' Always put this at the very top of your HTML files." },
    { term: "<html>", definition: "The root element that wraps around everything else in your document. Think of it as the main container for your entire webpage." },
    { term: "<head>", definition: "The section where you put information about your webpage that browsers need but visitors don't see directly on the page." },
    { term: "<title>", definition: "Sets the text that appears in your browser tab or window title. Super important for bookmarks and search engines!" },
    { term: "<body>", definition: "Where all your visible content lives - headings, paragraphs, images, everything that visitors will see and interact with." }
  ],
  exercises: [
    {
      id: 1,
      title: "Build Your First HTML Document Structure",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Open your text editor and create a new file.",
        "Type exactly: <!DOCTYPE html> on the first line.",
        "Press Enter and type: <html> on the second line.",
        "Add the opening <head> tag on line 3, then press Enter twice and add the closing </head> tag.",
        "Between the head tags, insert 'My First HTML Page' in <title> tags",
        "After the closing </head> tag, add <body> and </body> tags with empty lines between them.",
        "Close your HTML document with </html> on the last line.",
        "Save the file as 'index.html' and open it in your browser to see the title in the tab."
      ]
    },
    {
      id: 2,
      title: "Add Content to the Body Section",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Open your index.html file from the previous exercise.",
        "Inside the <body> section, insert 'Welcome to My Website' in <h1> tags",
        "Press Enter and insert 'This is my first paragraph using HTML.' in <p> tags",
        "Add another paragraph: Insert 'HTML uses tags to structure content on web pages.' in <p> tags",
        "Save the file and refresh your browser to see your heading and paragraphs displayed.",
        "Notice how the <h1> appears larger and bolder than the <p> elements - this is the browser's default styling."
      ]
    },
    {
      id: 3,
      title: "Practice HTML Tag Structure and Nesting",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a new HTML file called 'practice.html' with the complete document structure.",
        "In the <title> tag, insert: 'HTML Tag Practice'",
        "Inside the <body>, create this exact structure:",
        "Insert 'Understanding HTML Elements' in <h1> tags",
        "Insert 'What are HTML Tags?' in <h2> tags",
        "Insert 'HTML tags are the building blocks of web pages. They come in pairs with opening and closing tags.' in <p> tags",
        "Insert 'Examples of Common Tags' in <h2> tags",
        "Insert 'The most common tags include headings, paragraphs, and the document structure tags we learned today.' in <p> tags",
        "Save and view in your browser to see the hierarchy of headings and content."
      ]
    },
    {
      id: 4,
      title: "Create a Personal Introduction Page",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'about-me.html' with the full HTML document structure.",
        "Set the title to: Insert 'About [Your Name] - Web Developer in Training' in <title> tags (replace [Your Name] with your actual name)",
        "In the body, start with: Insert 'About Me' in <h1> tags",
        "Add: Insert 'My Web Development Journey' in <h2> tags",
        "Write a paragraph about why you're learning web development: Insert 'I am learning web development because...' in <p> tags (complete this sentence with your own reasons)",
        "Add another heading: Insert 'What I'm Learning' in <h2> tags",
        "Add a paragraph: Insert 'Today I learned about HTML document structure, including the DOCTYPE declaration, html, head, title, and body elements.' in <p> tags",
        "Add one more paragraph: Insert 'Next, I will continue building my HTML skills and eventually learn CSS and JavaScript.' in <p> tags",
        "Save and open in your browser to review your personal introduction page."
      ]
    },
    {
      id: 5,
      title: "Build a Complete Website Landing Page Structure",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a new file called 'landing-page.html' with the complete HTML structure.",
        "In the title tag, insert: 'Welcome to TechStart Solutions - Your Digital Partner'",
        "Create this exact content structure in the body:",
        "Main heading: Insert 'TechStart Solutions' in <h1> tags",
        "Subheading: Insert 'Building Digital Experiences That Matter' in <h2> tags",
        "Introduction paragraph: Insert 'Welcome to TechStart Solutions, where we transform your ideas into powerful digital experiences. Our team specializes in creating websites that engage users and drive business growth.' in <p> tags",
        "Services section: Insert 'Our Services' in <h2> tags",
        "Service 1: Insert 'Web Development' in <h3> tags, then insert 'Custom websites built with modern technologies and best practices.' in <p> tags",
        "Service 2: Insert 'User Experience Design' in <h3> tags, then insert 'Intuitive designs that put your users first and maximize engagement.' in <p> tags",
        "Service 3: Insert 'Digital Strategy' in <h3> tags, then insert 'Comprehensive planning to ensure your digital presence achieves your business goals.' in <p> tags",
        "Contact section: Insert 'Get Started Today' in <h2> tags",
        "Closing paragraph: Insert 'Ready to transform your digital presence? Contact us today to discuss how we can help bring your vision to life.' in <p> tags",
        "Save the file and open it in your browser to see a complete business landing page structure using only the HTML elements you learned today."
      ]
    }
  ]
};
