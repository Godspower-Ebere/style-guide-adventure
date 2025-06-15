
import { DayLesson } from "../types";

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
  category: 'HTML Basics' | 'CSS Basics' | 'HTML Forms' | 'CSS Layouts' | 'Advanced HTML' | 'Advanced CSS' | 'Responsive Design' | 'CSS Animations' | 'HTML5 Features' | 'CSS Grid & Flexbox' | 'JavaScript Basics';
  description: string;
  learningObjectives: string[];
  detailedExplanation: string;
  keyTerms: Array<{ term: string; definition: string }>;
  exercises: Exercise[];
}
