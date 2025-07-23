
import { DayLesson } from "./types";
import { detailedLessons } from "./lessons";

export const curriculum: DayLesson[] = detailedLessons;

// Generate remaining days with HTML topics first, then CSS, then JavaScript
export const generateRemainingDays = (): DayLesson[] => {
  const htmlTopics = [
    // Days 1-11 are covered by detailed lessons
  ];

  const cssTopics = [
    // Days 12-15 are covered by detailed lessons (CSS Introduction, Selectors, Colors, etc.)
    "CSS Selectors - Advanced", "CSS Colors and Backgrounds", "CSS Fonts and Text", 
    "CSS Box Model", "CSS Margins and Padding", "CSS Borders and Outlines", 
    "CSS Display Property", "CSS Position", "CSS Float and Clear", "CSS Flexbox Basics", 
    "CSS Flexbox Advanced", "CSS Grid Basics", "CSS Grid Advanced", "CSS Responsive Design", 
    "CSS Media Queries", "CSS Transitions", "CSS Animations", "CSS Transform", 
    "CSS Variables", "CSS Pseudo-classes", "CSS Pseudo-elements", "CSS Z-index and Stacking", 
    "CSS Overflow and Clipping", "CSS Filters and Effects", "CSS Layout Techniques", 
    "CSS Preprocessing", "CSS Frameworks", "CSS Best Practices"
  ];

  const jsTopics = [
    "JavaScript Basics", "JavaScript Variables and Data Types", "JavaScript Functions", 
    "JavaScript Objects and Arrays", "JavaScript DOM Manipulation", "JavaScript Events", 
    "JavaScript Conditionals and Loops", "JavaScript Error Handling", "JavaScript Modules", 
    "JavaScript Advanced", "Asynchronous JavaScript", "JavaScript Promises", 
    "JavaScript Async/Await", "JavaScript Fetch API", "Web APIs", "JavaScript ES6+", 
    "JavaScript Closures", "JavaScript Prototypes", "JavaScript Classes", "Modern JavaScript"
  ];

  const allTopics = [...cssTopics, ...jsTopics];

  const categories: Array<DayLesson['category']> = [
    'HTML Basics', 'HTML Forms', 'Advanced HTML', 'HTML5 Features', 
    'CSS Basics', 'CSS Layouts', 'Advanced CSS', 'CSS Grid & Flexbox', 
    'Responsive Design', 'CSS Animations', 'JavaScript Basics', 'JavaScript Advanced', 
    'Asynchronous JavaScript', 'Web APIs', 'Modern JavaScript'
  ];

  const remainingDays: DayLesson[] = [];
  
  for (let day = 16; day <= 100; day++) {
    const topicIndex = (day - 16) % allTopics.length;
    let categoryIndex;
    
    // Days 16-45 focus on CSS (continuing from day 12-15)
    if (day <= 45) {
      categoryIndex = 4 + ((day - 16) % 6); // CSS categories (4-9)
    } else {
      // Days 46-100 focus on JavaScript
      categoryIndex = 10 + ((day - 46) % 5); // JavaScript categories (10-14)
    }
    
    remainingDays.push({
      day,
      title: allTopics[topicIndex],
      category: categories[categoryIndex],
      description: `Master ${allTopics[topicIndex]} with hands-on exercises and detailed explanations`,
      learningObjectives: [
        `Understand the fundamentals of ${allTopics[topicIndex]}`,
        "Apply concepts through practical exercises",
        "Build real-world examples",
        "Develop problem-solving skills"
      ],
      detailedExplanation: `Today we'll dive deep into ${allTopics[topicIndex]}. This lesson will provide you with comprehensive understanding and practical skills that you can immediately apply to your web development projects.`,
      keyTerms: [
        { term: "Key Concept 1", definition: `Important aspect of ${allTopics[topicIndex]}` },
        { term: "Key Concept 2", definition: "Essential terminology for today's lesson" }
      ],
      exercises: [
        {
          id: 1,
          title: `Basic ${allTopics[topicIndex]} Exercise`,
          type: "classwork",
          difficulty: "easy",
          instructions: [
            "Create a new HTML file for this exercise.",
            "Set up the basic HTML structure with DOCTYPE, html, head, and body tags.",
            `Create a basic example using the primary techniques for ${allTopics[topicIndex]} discussed in this lesson.`,
            "Test your code in the browser to ensure it works correctly."
          ]
        },
        {
          id: 2,
          title: `Intermediate ${allTopics[topicIndex]} Practice`,
          type: "classwork",
          difficulty: "medium",
          instructions: [
            "Build upon your previous exercise.",
            "Expand your example by adding more complexity as shown in the detailed explanation.",
            `Try to combine ${allTopics[topicIndex]} with other techniques you have learned.`,
            "Verify everything works correctly and looks good."
          ]
        },
        {
          id: 3,
          title: `Advanced ${allTopics[topicIndex]} Challenge`,
          type: "classwork",
          difficulty: "hard",
          instructions: [
            "Create a comprehensive example from scratch that showcases advanced usage.",
            "Integrate today's lesson with previous knowledge from earlier days.",
            "Focus on implementing the best practices mentioned in the lesson.",
            "Test your implementation thoroughly in different scenarios."
          ]
        },
        {
          id: 4,
          title: `${allTopics[topicIndex]} Project - Part 1`,
          type: "homework",
          difficulty: "medium",
          instructions: [
            "Start a mini-project that heavily uses today's concepts.",
            "Plan your approach and create a basic structure before coding.",
            "Implement the foundational elements for your project.",
            "Document your progress with comments explaining your code choices."
          ]
        },
        {
          id: 5,
          title: `${allTopics[topicIndex]} Project - Part 2`,
          type: "homework",
          difficulty: "hard",
          instructions: [
            "Complete your mini-project from the previous exercise.",
            "Add additional features and polish to demonstrate mastery.",
            "Test thoroughly for any issues or areas of improvement.",
            "Reflect on what you've learned by adding detailed comments explaining your final code."
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
