
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
    description: "Learn the fundamentals of HTML and create your first webpage",
    learningObjectives: [
      "Understand what HTML is and its purpose",
      "Learn the basic structure of an HTML document",
      "Create your first HTML file",
      "Understand HTML tags and elements"
    ],
    detailedExplanation: `
HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using markup tags.

## What is HTML?
HTML is not a programming language; it's a markup language that uses tags to structure content. Every HTML document is made up of elements, which are defined by tags.

## Basic HTML Structure
Every HTML document has a basic structure:
- DOCTYPE declaration
- HTML element (root element)
- HEAD element (metadata)
- BODY element (visible content)

## HTML Tags
HTML tags are keywords surrounded by angle brackets: <tagname>
Most HTML tags come in pairs: opening tag <tagname> and closing tag </tagname>
The content goes between the opening and closing tags.

## HTML Elements
An HTML element includes the opening tag, content, and closing tag:
<tagname>Content goes here</tagname>

Some elements are self-closing and don't need a closing tag, like <br> and <img>.
    `,
    keyTerms: [
      { term: "HTML", definition: "HyperText Markup Language - the standard markup language for web pages" },
      { term: "Tag", definition: "Keywords surrounded by angle brackets that define HTML elements" },
      { term: "Element", definition: "A complete HTML tag including opening tag, content, and closing tag" },
      { term: "DOCTYPE", definition: "Declaration that defines the document type and version of HTML" }
    ],
    exercises: [
      {
        id: 1,
        title: "Create Your First HTML File",
        type: "classwork",
        difficulty: "easy",
        instructions: [
          "Create a new file called 'index.html'",
          "Add the DOCTYPE declaration: <!DOCTYPE html>",
          "Create the opening and closing <html> tags",
          "Inside the html tags, add <head> and </head> tags",
          "Inside the html tags, after the head section, add <body> and </body> tags",
          "Save the file and open it in a web browser"
        ]
      },
      {
        id: 2,
        title: "Add a Page Title",
        type: "classwork",
        difficulty: "easy",
        instructions: [
          "Open your index.html file",
          "Inside the <head> section, add <title> and </title> tags",
          "Between the title tags, type 'My First Web Page'",
          "Save the file and refresh your browser",
          "Notice how the title appears in the browser tab"
        ]
      },
      {
        id: 3,
        title: "Create Your First Heading",
        type: "classwork",
        difficulty: "easy",
        instructions: [
          "In your index.html file, inside the <body> section",
          "Add an <h1> and </h1> tag",
          "Between the h1 tags, type 'Hello World!'",
          "Save the file and refresh your browser",
          "You should see your heading displayed on the page"
        ]
      },
      {
        id: 4,
        title: "Add Multiple Headings",
        type: "homework",
        difficulty: "easy",
        instructions: [
          "Create a new file called 'headings.html'",
          "Set up the basic HTML structure (DOCTYPE, html, head, body)",
          "Add a title 'Learning HTML Headings'",
          "In the body, create headings h1 through h6",
          "For h1, type 'This is Heading 1'",
          "For h2, type 'This is Heading 2'",
          "Continue this pattern through h6",
          "Save and view in browser to see the size differences"
        ]
      },
      {
        id: 5,
        title: "Create a Personal Introduction Page",
        type: "homework",
        difficulty: "medium",
        instructions: [
          "Create a new file called 'about.html'",
          "Set up the complete HTML structure",
          "Add a title 'About Me'",
          "Create an h1 heading with your name",
          "Add an h2 heading that says 'Introduction'",
          "Add an h3 heading that says 'My Goals'",
          "Save the file and open it in your browser",
          "Observe how the different heading levels create visual hierarchy"
        ]
      }
    ]
  },
  {
    day: 2,
    title: "HTML Paragraphs and Text Formatting",
    category: "HTML Basics",
    description: "Learn how to add paragraphs and format text in HTML",
    learningObjectives: [
      "Learn to create paragraphs with the <p> tag",
      "Understand line breaks and spacing in HTML",
      "Learn basic text formatting tags",
      "Practice combining headings with paragraphs"
    ],
    detailedExplanation: `
Text is the foundation of web content. HTML provides several ways to structure and format text content.

## Paragraphs
The <p> tag defines a paragraph. Browsers automatically add space before and after paragraphs.

## Line Breaks
The <br> tag creates a line break. It's a self-closing tag, meaning it doesn't need a closing tag.

## Text Formatting
HTML provides several tags for formatting text:
- <strong> or <b> for bold text
- <em> or <i> for italic text
- <u> for underlined text
- <small> for smaller text

## Whitespace in HTML
HTML ignores extra spaces and line breaks in your code. Multiple spaces become one space, and line breaks are ignored unless you use specific tags.
    `,
    keyTerms: [
      { term: "Paragraph", definition: "A block of text defined by the <p> tag" },
      { term: "Line Break", definition: "A tag <br> that forces text to continue on the next line" },
      { term: "Strong", definition: "A tag that makes text bold and indicates importance" },
      { term: "Emphasis", definition: "A tag <em> that makes text italic and adds emphasis" }
    ],
    exercises: [
      {
        id: 1,
        title: "Create Your First Paragraph",
        type: "classwork",
        difficulty: "easy",
        instructions: [
          "Open your index.html file from yesterday",
          "After your h1 heading, add a <p> tag",
          "Inside the p tags, write: 'This is my first paragraph in HTML.'",
          "Add the closing </p> tag",
          "Save and refresh your browser to see the paragraph"
        ]
      },
      {
        id: 2,
        title: "Add Multiple Paragraphs",
        type: "classwork",
        difficulty: "easy",
        instructions: [
          "In the same index.html file",
          "Add two more paragraphs after your first one",
          "In the second paragraph, write about what you hope to learn",
          "In the third paragraph, write about why you're interested in web development",
          "Notice how browsers add space between paragraphs automatically"
        ]
      },
      {
        id: 3,
        title: "Text Formatting Practice",
        type: "classwork",
        difficulty: "medium",
        instructions: [
          "Create a new paragraph in your index.html",
          "Write a sentence and make one word <strong>bold</strong>",
          "In the same paragraph, make another word <em>italic</em>",
          "Add a line break <br> in the middle of your paragraph",
          "Save and view the formatting changes in your browser"
        ]
      },
      {
        id: 4,
        title: "Create a Story Page",
        type: "homework",
        difficulty: "medium",
        instructions: [
          "Create a new file called 'story.html'",
          "Set up the complete HTML structure",
          "Add the title 'My Short Story'",
          "Create an h1 heading with a story title of your choice",
          "Write a short story using at least 4 paragraphs",
          "Use <strong> tags to emphasize important words",
          "Use <em> tags for dialogue or thoughts",
          "Add line breaks where appropriate for dramatic effect"
        ]
      },
      {
        id: 5,
        title: "Format a Recipe",
        type: "homework",
        difficulty: "medium",
        instructions: [
          "Create a new file called 'recipe.html'",
          "Set up the HTML structure with title 'My Favorite Recipe'",
          "Add an h1 with the recipe name",
          "Create an h2 heading called 'Description'",
          "Write a paragraph describing the dish",
          "Add another h2 heading called 'Why I Love This Recipe'",
          "Write a paragraph explaining why it's your favorite",
          "Use formatting tags to emphasize key words like cooking techniques or flavors"
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
            "Create a new HTML file for this exercise",
            "Set up the basic HTML structure",
            "Implement the core concept from today's lesson",
            "Test your code in the browser"
          ]
        },
        {
          id: 2,
          title: `Intermediate ${topics[topicIndex]} Practice`,
          type: "classwork",
          difficulty: "medium",
          instructions: [
            "Build upon your previous exercise",
            "Add more complex elements",
            "Combine multiple concepts",
            "Verify everything works correctly"
          ]
        },
        {
          id: 3,
          title: `Advanced ${topics[topicIndex]} Challenge`,
          type: "classwork",
          difficulty: "hard",
          instructions: [
            "Create a comprehensive example",
            "Integrate today's lesson with previous knowledge",
            "Focus on best practices",
            "Test across different scenarios"
          ]
        },
        {
          id: 4,
          title: `${topics[topicIndex]} Project - Part 1`,
          type: "homework",
          difficulty: "medium",
          instructions: [
            "Start a mini-project using today's concepts",
            "Plan your approach before coding",
            "Implement the foundational structure",
            "Document your progress"
          ]
        },
        {
          id: 5,
          title: `${topics[topicIndex]} Project - Part 2`,
          type: "homework",
          difficulty: "hard",
          instructions: [
            "Complete your mini-project",
            "Add styling and enhancements",
            "Test thoroughly for any issues",
            "Reflect on what you've learned"
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
