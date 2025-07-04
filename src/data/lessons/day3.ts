import { DayLesson } from "../types";

export const day3: DayLesson = {
  day: 3,
  title: "HTML Text Formatting: Making Your Content Look Great",
  category: "HTML Basics",
  description: "Hey there! Today we're going to make your text come alive with HTML formatting tags. You'll learn how to make text bold, italic, underlined, and much more. Think of these as your text styling toolkit - they'll make your content more engaging and easier to read!",
  learningObjectives: [
    "Master the essential text formatting tags like <strong>, <em>, <u>, and <mark>",
    "Understand the difference between visual formatting and semantic meaning", 
    "Learn to create superscript, subscript, and other special text effects",
    "Discover how to use line breaks and horizontal rules effectively",
    "Practice combining multiple formatting tags to create rich, engaging content"
  ],
  detailedExplanation: `
## Welcome to Day 3 - Making Your Text Beautiful!

Great job making it to day 3! Yesterday you learned about the invisible but crucial <head> section. Today, we're going to focus on something much more visual and fun - text formatting!

### Why Text Formatting Matters

Let me ask you something - when you read a book, what helps you understand the content better? Is it just the words, or do things like **bold text**, *italics*, and different formatting help guide your eye and emphasize important points?

The same principle applies to web pages. Plain text is boring and hard to read. But when you add formatting, you create visual hierarchy, emphasize important information, and make your content much more engaging for your visitors.

### The Two Types of Text Formatting in HTML

Here's something really important that many beginners don't realize - HTML has two types of formatting:

**1. Semantic formatting** - This tells the browser (and screen readers) that something is important or emphasized
**2. Visual formatting** - This just changes how text looks

For example:
- <strong> is semantic - it means "this is important"
- <b> is visual - it just makes text bold

Why does this matter? Because search engines and accessibility tools pay attention to semantic meaning, not just visual appearance. So using <strong> instead of <b> actually helps your SEO and makes your site more accessible!

### Let's Explore the Essential Text Formatting Tags

**Making Text Stand Out:**
- <strong> - Makes text bold AND tells browsers it's important
- <em> - Makes text italic AND emphasizes it semantically
- <mark> - Highlights text like a yellow marker
- <u> - Underlines text (use sparingly - people might think it's a link!)

**Special Text Effects:**
- <sup> - Creates superscript (like in math: x²)
- <sub> - Creates subscript (like in chemistry: H₂O)
- <small> - Makes text smaller (great for fine print)
- <del> - Shows deleted/crossed-out text
- <ins> - Shows inserted/underlined text

**Structural Elements:**
- <br> - Forces a line break (it's self-closing!)
- <hr> - Creates a horizontal rule/line (also self-closing!)

### Here's How These Look in Action

Let me show you a practical example:

    <h1>My Recipe Blog</h1>
    <p>Welcome to my <strong>amazing</strong> recipe collection! Today I'm sharing my <em>grandmother's secret</em> chocolate chip cookie recipe.</p>

    <h2>Chocolate Chip Cookies</h2>
    <p><mark>This recipe serves 24 cookies</mark> and takes about 30 minutes to make.</p>

    <p>Temperature: 350<sup>°</sup>F</p>
    <p>Sugar: C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> (just kidding - regular sugar works fine!)</p>

    <hr>

    <p><small>Recipe adapted from "Grandma's Kitchen Secrets" cookbook</small></p>

See how the formatting helps organize the information and makes it more interesting to read?

### Important Tips for Using Text Formatting

**Don't go overboard!** Just because you can make text bold, italic, underlined, and highlighted doesn't mean you should. Good formatting is like good seasoning - a little goes a long way.

**Think about your readers** - Use formatting to help them scan and understand your content better. Bold text should draw attention to key points, not just random words.

**Be consistent** - If you use <strong> for important terms in one paragraph, do the same throughout your page.

### Let's Practice With a Real Example

Here's how you might format a news article:

    <h1>Local Bakery Wins National Award</h1>
    <p><strong>Sweet Dreams Bakery</strong> in downtown Springfield has been named <em>Bakery of the Year</em> by the National Baking Association.</p>

    <p>The announcement came as a <mark>complete surprise</mark> to owner Maria Santos, who opened the bakery just two years ago.</p>

    <p>"I never expected this," Santos said. <em>"We just focus on making great bread and pastries every single day."</em></p>

    <hr>

    <p><small>This story was published on March 15<sup>th</sup>, 2024</small></p>

Notice how the formatting helps you quickly identify the key information? That's the power of good HTML text formatting!

### Advanced Formatting Combinations

You can combine multiple formatting tags to create exactly the effect you want:

    <p>This is <strong><em>very important and emphasized</em></strong> information!</p>
    <p>Chemical formula: H<sub>2</sub>O at 100<sup>°</sup>C</p>
    <p><mark>Special offer:</mark> <strong>50% off</strong> this weekend only!</p>

### When to Use Each Tag

**<strong>** - Use for important words or phrases that need emphasis
**<em>** - Use for stressed emphasis or titles of works
**<mark>** - Use to highlight relevant information or search results
**<u>** - Use sparingly, mainly for non-link underlines
**<sup>** - Use for exponents, ordinals (1st, 2nd), footnote references
**<sub>** - Use for chemical formulas, mathematical expressions
**<small>** - Use for fine print, disclaimers, copyright notices
**<del>** - Use to show removed or outdated content
**<ins>** - Use to show newly added content
**<br>** - Use to break lines in addresses, poems, or where line breaks matter
**<hr>** - Use to separate different sections of content

### Complete Example: A Professional Article

Here's how all these elements work together in a real article:

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Tech News - New AI Breakthrough</title>
    </head>
    <body>
      <h1>Revolutionary AI Breakthrough Announced</h1>
      
      <p><strong>Tech Giant Corp</strong> announced today a <em>groundbreaking advancement</em> in artificial intelligence that could <mark>change everything we know</mark> about machine learning.</p>
      
      <h2>Key Features</h2>
      <p>The new AI system, called <strong>SmartMind 3.0</strong>, offers:</p>
      <ul>
        <li><strong>10x faster</strong> processing speed</li>
        <li><em>Unprecedented accuracy</em> in predictions</li>
        <li><mark>Revolutionary natural language understanding</mark></li>
      </ul>
      
      <hr>
      
      <h2>Technical Specifications</h2>
      <p>Processing power: 10<sup>12</sup> operations per second<br>
      Memory usage: Optimized for H<sub>2</sub>O cooling systems<br>
      Efficiency: <strong>99.7% accuracy rate</strong></p>
      
      <p><small>*Results may vary based on implementation and usage conditions</small></p>
      
      <hr>
      
      <p><small>Published on January 15<sup>th</sup>, 2024 by the Tech News Team<br>
      © 2024 Tech News Daily. All rights reserved.</small></p>
    </body>
    </html>

This example shows how text formatting creates a professional, easy-to-read article with clear hierarchy and visual interest!
`,
  keyTerms: [
    { term: "Semantic Formatting", definition: "HTML tags that convey meaning about the content's importance or role, not just its appearance. Examples: <strong>, <em>" },
    { term: "Visual Formatting", definition: "HTML tags that only change how text looks without adding semantic meaning. Examples: <b>, <i>" },
    { term: "<strong>", definition: "Makes text bold AND indicates it's important content. Better for SEO and accessibility than just <b>." },
    { term: "<em>", definition: "Makes text italic AND emphasizes it semantically. Screen readers will emphasize this when reading aloud." },
    { term: "<mark>", definition: "Highlights text with a yellow background, like using a highlighter marker on paper." },
    { term: "Superscript", definition: "Text that appears above the normal line, like exponents in math (x²) or ordinal numbers (1st)." },
    { term: "Subscript", definition: "Text that appears below the normal line, like in chemical formulas (H₂O) or mathematical expressions." },
    { term: "Line Break", definition: "The <br> tag forces text to continue on the next line, like pressing Enter in a word processor." }
  ],
  exercises: [
    {
      id: 1,
      title: "Create Your First Formatted Text Page",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'formatted-text.html' with the complete document structure.",
        "Set the title to 'Learning Text Formatting'.",
        "In the body, insert 'Text Formatting Practice' in <h1> tags.",
        "Create a paragraph with normal text: Insert 'This is normal text, but this word is' in <p> tags, followed by 'important' in <strong> tags, then continue with 'and this word is emphasized.' in <em> tags.",
        "Add another paragraph: Insert 'I can also' in <p> tags, followed by 'highlight important information' in <mark> tags, then 'for readers.'",
        "Save and open in your browser to see how different formatting affects the text appearance."
      ]
    },
    {
      id: 2,
      title: "Practice Superscript and Subscript",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "In your formatted-text.html file, add a new heading: Insert 'Math and Science Examples' in <h2> tags.",
        "Add a paragraph for math: Insert 'Einstein's famous equation is E = mc' in <p> tags, followed by '2' in <sup> tags.",
        "Add a chemistry example: Insert 'Water has the chemical formula H' in <p> tags, followed by '2' in <sub> tags, then 'O'.",
        "Add a date example: Insert 'Today is March 21' in <p> tags, followed by 'st' in <sup> tags, then ', 2024.'",
        "Save and refresh your browser to see superscript and subscript in action."
      ]
    },
    {
      id: 3,
      title: "Build a Product Description with Rich Formatting",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'product-page.html' with complete HTML structure.",
        "Set the title to 'Amazing Smartphone - Product Details'.",
        "Create the product page structure: Insert 'UltraPhone Pro Max' in <h1> tags.",
        "Add a description paragraph: Insert 'The' in <p> tags, followed by 'most advanced smartphone' in <strong> tags, then 'on the market today. Features include', followed by 'lightning-fast' in <em> tags, then 'processing and', followed by 'crystal-clear' in <mark> tags, then 'display quality.'",
        "Add specifications: Insert 'Technical Specifications' in <h2> tags.",
        "Add spec details: Insert 'Screen size: 6.7' in <p> tags, add '\"' in <sup> tags, then 'diagonal'.",
        "Add a horizontal rule using <hr>.",
        "Add footer text: Insert 'Product information subject to change without notice.' in <small> tags within <p> tags.",
        "Save and review your formatted product page."
      ]
    },
    {
      id: 4,
      title: "Create a News Article with Professional Formatting",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'news-article.html' with full HTML structure.",
        "Set the title to 'Local News - Community Garden Opens'.",
        "Create the article structure: Insert 'New Community Garden Opens Downtown' in <h1> tags.",
        "Write the opening paragraph: Insert 'The' in <p> tags, followed by 'Grand Opening' in <strong> tags, then 'of Riverside Community Garden took place yesterday, marking a', followed by 'significant milestone' in <em> tags, then 'for local residents.'",
        "Add a quote section: Insert 'Community Response' in <h2> tags.",
        "Add a highlighted quote: Insert 'Mayor Johnson called the project' in <p> tags, followed by 'absolutely transformative for our neighborhood' in <mark> tags, then 'during the ribbon-cutting ceremony.'",
        "Add garden details: Insert 'The garden covers 2.5 acres and includes 150 individual plots for families.' in <p> tags.",
        "Add a horizontal rule using <hr>.",
        "Add article metadata: Insert 'Published March 20' in <small> tags within <p> tags, followed by 'th' in <sup> tags, then ', 2024 by Sarah Chen'.",
        "Save and review your professionally formatted news article."
      ]
    },
    {
      id: 5,
      title: "Build a Complete Recipe Page with Advanced Formatting",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a new file called 'recipe-page.html' with complete HTML structure.",
        "Set the title to 'Grandma's Secret Chocolate Chip Cookies'.",
        "Create the recipe header: Insert 'Grandma's Secret Chocolate Chip Cookies' in <h1> tags.",
        "Add recipe intro: Insert 'This' in <p> tags, followed by 'award-winning recipe' in <strong> tags, then 'has been in our family for', followed by 'three generations' in <em> tags, then '. The secret ingredient is', followed by 'pure vanilla extract' in <mark> tags, then '!'",
        "Add recipe info: Insert 'Recipe Details' in <h2> tags.",
        "Add serving info: Insert 'Serves: 24 cookies | Prep time: 15 minutes | Bake time: 12 minutes' in <p> tags.",
        "Add temperature: Insert 'Oven temperature: 375' in <p> tags, followed by '°' in <sup> tags, then 'F'.",
        "Add ingredients section: Insert 'Key Ingredients' in <h2> tags.",
        "List ingredients with formatting: Insert 'You'll need' in <p> tags, followed by 'high-quality butter' in <strong> tags, then ',', followed by 'farm-fresh eggs' in <em> tags, then ', and', followed by 'premium chocolate chips' in <mark> tags, then '.'",
        "Add a line break using <br> and continue: 'Don't forget the', followed by 'secret vanilla' in <strong> tags, then '!'",
        "Add a horizontal rule using <hr>.",
        "Add recipe notes: Insert 'Recipe adapted from' in <small> tags within <p> tags, followed by 'The Great American Cookbook, 1st' in regular text, followed by 'st' in <sup> tags, then 'Edition'.",
        "Add final tip: Insert 'For best results, chill dough for 30 minutes before baking.' in <p> tags.",
        "Save and open in your browser to see your beautifully formatted recipe page with all the text formatting techniques you've learned."
      ]
    }
  ]
};
