
import { DayLesson } from "./types";
import { detailedLessons } from "./lessons";

export const curriculum: DayLesson[] = detailedLessons;

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
