
import { DayLesson } from "./types";
import { detailedLessons } from "./lessons";

export const curriculum: DayLesson[] = detailedLessons;

// Generate remaining days with HTML topics first, then CSS
export const generateRemainingDays = (): DayLesson[] => {
  const htmlTopics = [
    "HTML Tables - Basic Structure", "HTML Tables - Advanced Features", "HTML Forms - Input Types",
    "HTML Forms - Buttons and Labels", "HTML Forms - Select and Options", "HTML Forms - Validation",
    "HTML Semantic Elements - Header and Nav", "HTML Semantic Elements - Main and Section", 
    "HTML Semantic Elements - Article and Aside", "HTML Semantic Elements - Footer",
    "HTML5 New Elements", "HTML Audio and Video", "HTML Canvas Basics", "HTML Geolocation",
    "HTML Local Storage", "HTML Drag and Drop", "HTML Web Workers", "HTML Accessibility",
    "HTML Meta Tags and SEO", "HTML Character Encoding"
  ];

  const cssTopics = [
    "CSS Introduction and Syntax", "CSS Selectors - Basic", "CSS Selectors - Advanced", 
    "CSS Colors and Backgrounds", "CSS Fonts and Text", "CSS Box Model", "CSS Margins and Padding",
    "CSS Borders and Outlines", "CSS Display Property", "CSS Position", "CSS Float and Clear",
    "CSS Flexbox Basics", "CSS Flexbox Advanced", "CSS Grid Basics", "CSS Grid Advanced",
    "CSS Responsive Design", "CSS Media Queries", "CSS Transitions", "CSS Animations",
    "CSS Transform", "CSS Variables", "CSS Pseudo-classes", "CSS Pseudo-elements",
    "CSS Z-index and Stacking", "CSS Overflow and Clipping", "CSS Filters and Effects",
    "CSS Layout Techniques",  "CSS Preprocessing", "CSS Frameworks", "CSS Best Practices"
  ];

  const allTopics = [...htmlTopics, ...cssTopics];

  const categories: Array<DayLesson['category']> = [
    'HTML Basics', 'HTML Forms', 'Advanced HTML', 'HTML5 Features', 
    'CSS Basics', 'CSS Layouts', 'Advanced CSS', 'CSS Grid & Flexbox', 
    'Responsive Design', 'CSS Animations'
  ];

  const remainingDays: DayLesson[] = [];
  
  for (let day = 7; day <= 100; day++) {
    const topicIndex = (day - 7) % allTopics.length;
    let categoryIndex;
    
    // First 20 days (7-26) focus on HTML
    if (day <= 26) {
      categoryIndex = day <= 16 ? 0 : (day <= 21 ? 1 : (day <= 24 ? 2 : 3)); // HTML categories
    } else {
      // Days 27-100 focus on CSS
      categoryIndex = 4 + ((day - 27) % 6); // CSS categories
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
            `Try to combine ${allTopics[topicIndex]} with other HTML/CSS techniques you have learned.`,
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
