
export interface Exercise {
  id: number;
  title: string;
  type: 'classwork' | 'homework';
  instructions: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface DayLesson {
  day: number;
  title: string;
  category: 'HTML Basics' | 'CSS Basics' | 'HTML Forms' | 'CSS Layouts' | 'Advanced HTML' | 'Advanced CSS' | 'Responsive Design' | 'CSS Animations' | 'HTML5 Features' | 'CSS Grid & Flexbox';
  description: string;
  learningObjectives: string[];
  detailedExplanation: string;
  keyTerms: Array<{ term: string; definition: string }>;
  exercises: Exercise[];
}

export const curriculum: DayLesson[] = [
  {
    day: 1,
    title: "Introduction to HTML",
    category: "HTML Basics",
    description: "Learn the fundamentals of HTML and create your first webpage. This lesson covers the core concepts that form the foundation of all websites.",
    learningObjectives: [
      "Understand what HTML is and its crucial role in web development.",
      "Learn the basic structure of an HTML document, including the doctype, head, and body.",
      "Create, save, and open your first HTML file in a web browser.",
      "Understand the concept of HTML tags and elements, the building blocks of a webpage."
    ],
    detailedExplanation: `
Welcome to your first day! Today, we dive into the world of HTML.

## What is HTML?
HTML stands for **HyperText Markup Language**. It's the standard language used to create and design documents on the World Wide Web. Think of it as the skeleton of a webpage. While other technologies like CSS (for styling) and JavaScript (for interactivity) are essential, HTML provides the fundamental structure.

Every website you visit, from Google to your favorite blog, is built on a foundation of HTML.

## The Basic Structure of an HTML Document
Every HTML document follows a standard structure. This ensures that web browsers can understand and render your page correctly. Here’s a breakdown of the essential parts:

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
\`\`\`

Let's break down this example:
- **\`<!DOCTYPE html>\`**: This declaration defines that the document is an HTML5 document. It's the very first thing in your HTML file and tells the browser how to interpret the code.
- **\`<html>\`**: This is the root element of an HTML page. All other elements are nested inside it.
- **\`<head>\`**: This element contains meta-information about the HTML document. This information is not displayed on the webpage itself but is used by browsers and search engines. It includes things like the page title, character set, and links to CSS files.
- **\`<title>\`**: This element specifies a title for the HTML page, which is shown in the browser's title bar or in the page's tab.
- **\`<body>\`**: This element defines the document's body. It contains all the visible content of the webpage, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

## HTML Tags and Elements
HTML uses "tags" to mark up content.
- Tags are keywords surrounded by angle brackets, like \`<p>\`.
- Most tags come in pairs: an opening tag (e.g., \`<h1>\`) and a closing tag (e.g., \`</h1>\`).
- The closing tag is written like the opening tag, but with a forward slash (/) before the tag name.
- The combination of an opening tag, the content, and a closing tag is called an **HTML element**.

Some elements are "self-closing" and don't need a closing tag, like \`<br>\` for a line break or \`<img>\` for an image. We'll learn more about these later.
    `,
    keyTerms: [
      { term: "HTML", definition: "HyperText Markup Language - the standard markup language for creating the structure of web pages." },
      { term: "Tag", definition: "A command in HTML that tells the browser how to format the text or content. For example: <p>." },
      { term: "Element", definition: "A complete HTML structure, consisting of an opening tag, the content, and a closing tag." },
      { term: "DOCTYPE", definition: "A declaration at the beginning of an HTML file that defines the document type and version of HTML being used." },
      { term: "Head", definition: "The section of an HTML document that contains metadata, which is not displayed on the page itself." },
      { term: "Body", definition: "The section of an HTML document that contains the visible content of the webpage." }
    ],
    exercises: [
      {
        id: 1,
        title: "Create Your First HTML File",
        type: "classwork",
        difficulty: "easy",
        instructions: [
          "Open a simple text editor (like Notepad on Windows, or TextEdit on Mac).",
          "Create a new file.",
          "Add the DOCTYPE declaration at the very top: `<!DOCTYPE html>`",
          "Create the root element using an `html` tag.",
          "Inside the `html` tag, add a `head` section.",
          "After the `head` section, add a `body` section.",
          "Save the file on your desktop as 'index.html'. Make sure the file extension is .html, not .txt."
        ]
      },
      {
        id: 2,
        title: "Add a Page Title",
        type: "classwork",
        difficulty: "easy",
        instructions: [
          "Open your 'index.html' file if it's not already open.",
          "Inside the `head` section, add a `title` tag.",
          "Inside the `title` tag, write the text: 'My Web Development Journey'",
          "Save your file.",
          "Open 'index.html' in a web browser (like Chrome or Firefox) by double-clicking it. You should see your title in the browser tab."
        ]
      },
      {
        id: 3,
        title: "Create Your First Heading and Paragraph",
        type: "classwork",
        difficulty: "easy",
        instructions: [
          "In your 'index.html' file, find the `body` section.",
          "Add a main heading using an `h1` tag. The content should be 'Welcome to My Website'.",
          "Below the heading, add a paragraph using a `p` tag. The content should be 'This is the start of my journey to become a web developer. I am excited to learn HTML!'.",
          "Save the file and refresh the page in your browser.",
          "You should now see your heading and paragraph displayed on the page."
        ]
      },
      {
        id: 4,
        title: "Explore Different Heading Levels",
        type: "homework",
        difficulty: "easy",
        instructions: [
          "Create a new file named 'headings.html'.",
          "Set up the basic HTML structure (DOCTYPE, html, head with a title, and body).",
          "For the title, use 'Exploring HTML Headings'.",
          "In the body, create a heading for each level from h1 to h6.",
          "For the `h1` tag, use the content: 'The Importance of Structure'",
          "For the `h2` tag, use: 'Main Topics'",
          "For the `h3` tag, use: 'Sub-topic 1'",
          "For the `h4` tag, use: 'Details of Sub-topic 1'",
          "For the `h5` tag, use: 'A Finer Point'",
          "For the `h6` tag, use: 'A Minor Note'",
          "Save the file and view it in your browser to see how the different heading sizes create a visual hierarchy."
        ]
      },
      {
        id: 5,
        title: "Create a Personal Introduction Page",
        type: "homework",
        difficulty: "medium",
        instructions: [
          "Create a new file called 'about.html'.",
          "Set up the full HTML structure with a title 'About Me'.",
          "Inside the `body`, create an `h1` heading with your name.",
          "Add an `h2` heading with the content 'My Coding Journey'.",
          "Under this heading, add a paragraph with the content: 'I am starting this journey to build amazing things on the web. My goal is to understand how websites are created from the ground up.'",
          "Add another `h2` heading with the content 'My Goals for This Course'.",
          "Under this heading, add a paragraph with the content: 'By the end of this 100-day course, I want to be able to build responsive and interactive websites confidently.'",
          "Save the file and open it in your browser."
        ]
      }
    ]
  },
  {
    day: 2,
    title: "HTML Paragraphs and Text Formatting",
    category: "HTML Basics",
    description: "Learn how to structure text with paragraphs and apply formatting to emphasize and style your content.",
    learningObjectives: [
      "Use the <p> tag to create well-structured paragraphs.",
      "Understand how browsers handle whitespace and line breaks in HTML.",
      "Apply common text formatting tags like <strong>, <em>, <b>, <i>, and <u>.",
      "Differentiate between semantic (<strong>, <em>) and presentational (<b>, <i>) tags."
    ],
    detailedExplanation: `
Now that you can create a basic HTML page, let's focus on its most common content: text.

## Paragraphs: The \`<p>\` Tag
The \`<p>\` tag is one of the most fundamental tags in HTML. It defines a paragraph of text. Web browsers automatically add some vertical space (a margin) before and after each paragraph, which helps to separate them visually.

\`\`\`html
<p>This is a paragraph. It can contain one or many sentences.</p>
<p>This is another paragraph. The browser will render it separately from the one above.</p>
\`\`\`

## Whitespace and Line Breaks
A common point of confusion for beginners is how HTML handles whitespace. If you put multiple spaces or line breaks in your HTML code, the browser will collapse them into a single space when it renders the page.

To force a line break without starting a new paragraph, you can use the line break tag: \`<br>\`. This is a self-closing tag.

\`\`\`html
<p>This text is on one line.<br>This text appears on the next line.</p>
\`\`\`

## Text Formatting: Making Your Text Stand Out
HTML provides several tags to format text. It's important to distinguish between **semantic** tags (which add meaning to the content) and **presentational** tags (which just change the appearance).

### Semantic Formatting
- **\`<strong>\`**: Defines text with strong importance. Browsers typically render this as **bold**. You should use this when the text is semantically important.
  - Example: \`<strong>Warning:</strong> Do not touch.\`
- **\`<em>\`**: Defines emphasized text. Browsers typically render this as *italic*. Use this to change the meaning of a sentence.
  - Example: \`You *must* complete this step.\`

### Presentational Formatting
- **\`<b>\`**: Defines bold text without any extra importance.
  - Example: \`This word is in <b>bold</b>.\`
- **\`<i>\`**: Defines italic text, often used for technical terms, thoughts, or ship names.
  - Example: \`The term <i>hyperlink</i> is fundamental to the web.\`
- **\`<u>\`**: Defines underlined text. Be careful with this one, as users often associate underlined text with hyperlinks.
  - Example: \`This text is <u>underlined</u>.\`

**Best Practice:** Whenever possible, prefer using \`<strong>\` and \`<em>\` over \`<b>\` and \`<i>\`. It's better for accessibility (screen readers can use them to add vocal emphasis) and for search engine optimization (SEO).
    `,
    keyTerms: [
      { term: "Paragraph (`<p>`)", definition: "A tag used to define a block of text as a paragraph." },
      { term: "Line Break (`<br>`)", definition: "A self-closing tag that creates a line break within a block of text." },
      { term: "Strong (`<strong>`)", definition: "A semantic tag that indicates strong importance, typically rendered as bold." },
      { term: "Emphasis (`<em>`)", definition: "A semantic tag used to add emphasis to text, typically rendered as italic." },
      { term: "Whitespace", definition: "Any sequence of space, tab, and newline characters in your HTML code. Browsers collapse multiple whitespace characters into a single space." }
    ],
    exercises: [
      {
        id: 1,
        title: "Create and Style Your First Paragraph",
        type: "classwork",
        difficulty: "easy",
        instructions: [
          "Open your 'index.html' file.",
          "Delete the placeholder paragraph you created yesterday.",
          "Add a new paragraph using a `p` tag with the following content: 'HTML is the skeleton of every webpage. It provides the structure and meaning of the content.'",
          "Save and refresh your browser to see the new paragraph."
        ]
      },
      {
        id: 2,
        title: "Add Multiple Paragraphs and Line Breaks",
        type: "classwork",
        difficulty: "easy",
        instructions: [
          "In the same 'index.html' file, add a second paragraph below the first one.",
          "Content for the second paragraph: 'Learning HTML is the first and most crucial step in web development. With it, you lay the foundation upon which you'll build with CSS and JavaScript.'",
          "In the middle of the second paragraph, add a line break using a `br` tag right after the first sentence.",
          "Save the file and observe how the line break affects the paragraph's display."
        ]
      },
      {
        id: 3,
        title: "Practice with Text Formatting",
        type: "classwork",
        difficulty: "medium",
        instructions: [
          "Create a new paragraph in 'index.html'.",
          "Add a new paragraph with the sentence: 'It is very important to distinguish between semantic and presentational tags.'",
          "Wrap the word 'important' with `strong` tags.",
          "Wrap the words 'semantic' and 'presentational' with `em` tags.",
          "Add another paragraph with the content: 'This text is bold and this one is italic.'. Then, wrap the word 'bold' with a `b` tag, and the word 'italic' with an `i` tag.",
          "Save and view the formatting changes in your browser."
        ]
      },
      {
        id: 4,
        title: "Create a Story Page with Formatting",
        type: "homework",
        difficulty: "medium",
        instructions: [
          "Create a new file called 'story.html'.",
          "Set up the complete HTML structure, with the title 'The Dragon\\'s Treasure'.",
          "Create an `h1` with the title: `The Dragon\\'s Treasure`.",
          "Create an `h2` with the author: `By [Your Name]`.",
          "Write a short story using at least three paragraphs.",
          "In the first paragraph, describe the setting. Use an `em` tag for the name of the ancient forest.",
          "In the second paragraph, describe the hero's challenge. Use a `strong` tag to highlight the main danger, for example, 'a slumbering dragon'.",
          "In the third paragraph, describe the treasure. Use `b` and `i` tags to describe some of the items. For example, in a sentence like 'a golden chalice and an enchanted scroll', make 'golden' bold and 'enchanted' italic."
        ]
      },
      {
        id: 5,
        title: "Format a Recipe Page",
        type: "homework",
        difficulty: "medium",
        instructions: [
          "Create a new file called 'recipe.html'.",
          "Set up the HTML structure with the title 'My Favorite Chocolate Chip Cookies'.",
          "Add an `h1` with the recipe name: `The Ultimate Chocolate Chip Cookies`.",
          "Create an `h2` heading called 'Description'.",
          "Write a paragraph describing the cookies. Use a `strong` tag on the word `best`.",
          "Add another `h2` heading called 'A Note from the Baker'.",
          "Write a paragraph with a personal tip. Emphasize a key instruction with an `em` tag. For example, in the sentence 'You must chill the dough for at least one hour', wrap the word 'must' in `em` tags.",
          "Use a `u` tag for a fun fact. For example, create a paragraph with 'Fun Fact: Chocolate chip cookies were invented by accident!' and wrap the entire sentence in a `u` tag."
        ]
      }
    ]
  }
  // Additional days would continue here...
];

// Generate remaining days with varied content
export const generateRemainingDays = (): DayLesson[] => {
  const topics = [
    "HTML Lists", "HTML Links", "HTML Images", "HTML Tables", "HTML Forms - Input Fields",
    "HTML Forms - Buttons and Labels", "HTML Semantic Elements", "CSS Introduction", 
    "CSS Selectors", "CSS Colors", "CSS Fonts", "CSS Text Styling", "CSS Box Model",
    "CSS Margins and Padding", "CSS Borders", "CSS Background", "CSS Display Property",
    "CSS Position", "CSS Float", "CSS Flexbox Basics", "CSS Grid Basics", 
    "Responsive Design Introduction", "CSS Media Queries", "CSS Animations",
    "CSS Transitions", "HTML5 Semantic Tags", "CSS Variables", "CSS Pseudo-classes",
    "CSS Pseudo-elements", "Advanced Selectors"
  ];

  const categories: Array<DayLesson['category']> = [
    'HTML Basics', 'CSS Basics', 'HTML Forms', 'CSS Layouts', 'Advanced HTML', 
    'Advanced CSS', 'Responsive Design', 'CSS Animations', 'HTML5 Features', 'CSS Grid & Flexbox'
  ];

  const remainingDays: DayLesson[] = [];
  
  for (let day = 3; day <= 100; day++) {
    const topicIndex = (day - 3) % topics.length;
    const categoryIndex = Math.floor((day - 1) / 10) % categories.length;
    
    remainingDays.push({
      day,
      title: topics[topicIndex],
      category: categories[categoryIndex],
      description: `Master ${topics[topicIndex]} with hands-on exercises and detailed explanations`,
      learningObjectives: [
        `Understand the fundamentals of ${topics[topicIndex]}`,
        "Apply concepts through practical exercises",
        "Build real-world examples",
        "Develop problem-solving skills"
      ],
      detailedExplanation: `Today we'll dive deep into ${topics[topicIndex]}. This lesson will provide you with comprehensive understanding and practical skills that you can immediately apply to your web development projects.`,
      keyTerms: [
        { term: "Key Concept 1", definition: `Important aspect of ${topics[topicIndex]}` },
        { term: "Key Concept 2", definition: "Essential terminology for today's lesson" }
      ],
      exercises: [
        {
          id: 1,
          title: `Basic ${topics[topicIndex]} Exercise`,
          type: "classwork",
          difficulty: "easy",
          instructions: [
            "Create a new HTML file for this exercise.",
            "Set up the basic HTML structure.",
            `Create a basic example using the primary HTML tags for ${topics[topicIndex]} discussed in this lesson.`,
            "Test your code in the browser."
          ]
        },
        {
          id: 2,
          title: `Intermediate ${topics[topicIndex]} Practice`,
          type: "classwork",
          difficulty: "medium",
          instructions: [
            "Build upon your previous exercise.",
            "Expand your example by adding attributes or nesting elements as shown in the detailed explanation.",
            `Try to combine ${topics[topicIndex]} with other HTML elements you have learned, like headings and paragraphs.`,
            "Verify everything works correctly."
          ]
        },
        {
          id: 3,
          title: `Advanced ${topics[topicIndex]} Challenge`,
          type: "classwork",
          difficulty: "hard",
          instructions: [
            "Create a comprehensive example from scratch.",
            "Integrate today's lesson with previous knowledge.",
            "Focus on the best practices mentioned in the lesson.",
            "Test across different scenarios, if applicable."
          ]
        },
        {
          id: 4,
          title: `${topics[topicIndex]} Project - Part 1`,
          type: "homework",
          difficulty: "medium",
          instructions: [
            "Start a mini-project using today's concepts.",
            "Plan your approach before coding.",
            "Implement the foundational structure for your project.",
            "Document your progress in comments within your code."
          ]
        },
        {
          id: 5,
          title: `${topics[topicIndex]} Project - Part 2`,
          type: "homework",
          difficulty: "hard",
          instructions: [
            "Complete your mini-project from the previous exercise.",
            "Add styling and any possible enhancements.",
            "Test thoroughly for any issues or bugs.",
            "Reflect on what you've learned by adding comments explaining your code."
          ]
        }
      ]
    });
  }
  
  return remainingDays;
};

export const getAllLessons = (): DayLesson[] => {
  return [...curriculum, ...generateRemainingDays()];
};
