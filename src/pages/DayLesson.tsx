
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getAllLessons } from "@/data/curriculum";
import { ArrowLeft, BookOpen, Target, Home, School } from "lucide-react";
import { ExerciseCard } from "@/components/ExerciseCard";
import { LearningObjectives } from "@/components/LearningObjectives";
import { KeyTerms } from "@/components/KeyTerms";

const DayLesson = () => {
  const { dayNumber } = useParams();
  const lessons = getAllLessons();
  const currentDay = parseInt(dayNumber || "1");
  const lesson = lessons.find(l => l.day === currentDay);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const categories = {
    'HTML Basics': 'bg-blue-100 text-blue-800',
    'CSS Basics': 'bg-green-100 text-green-800',
    'HTML Forms': 'bg-purple-100 text-purple-800',
    'CSS Layouts': 'bg-orange-100 text-orange-800',
    'Advanced HTML': 'bg-red-100 text-red-800',
    'Advanced CSS': 'bg-indigo-100 text-indigo-800',
    'Responsive Design': 'bg-pink-100 text-pink-800',
    'CSS Animations': 'bg-yellow-100 text-yellow-800',
    'HTML5 Features': 'bg-cyan-100 text-cyan-800',
    'CSS Grid & Flexbox': 'bg-emerald-100 text-emerald-800',
    'JavaScript Basics': 'bg-teal-100 text-teal-800',
    'JavaScript Advanced': 'bg-fuchsia-100 text-fuchsia-800',
    'Asynchronous JavaScript': 'bg-sky-100 text-sky-800',
    'Web APIs': 'bg-lime-100 text-lime-800',
    'Modern JavaScript': 'bg-rose-100 text-rose-800',
  };

  const classworkExercises = lesson.exercises.filter(ex => ex.type === 'classwork');
  const homeworkExercises = lesson.exercises.filter(ex => ex.type === 'homework');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <Badge className={categories[lesson.category]}>
              {lesson.category}
            </Badge>
          </div>
          
          <div className="text-center">
            <Badge variant="outline" className="mb-3">Day {lesson.day}</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
            <p className="text-xl text-gray-600">{lesson.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Learning Objectives */}
        <LearningObjectives objectives={lesson.learningObjectives} />

        {/* Detailed Explanation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Detailed Explanation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-gray max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {lesson.detailedExplanation}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Terms */}
        <KeyTerms terms={lesson.keyTerms} />

        {/* Classwork Exercises */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <School className="h-5 w-5 mr-2" />
              Classwork Exercises
            </CardTitle>
            <CardDescription>
              Complete these exercises during your study session
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {classworkExercises.map((exercise, index) => (
                <div key={exercise.id}>
                  <ExerciseCard exercise={exercise} exerciseNumber={index + 1} />
                  {index < classworkExercises.length - 1 && <Separator className="mt-6" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Homework Exercises */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Home className="h-5 w-5 mr-2" />
              Homework Exercises
            </CardTitle>
            <CardDescription>
              Practice these exercises on your own time to reinforce learning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {homeworkExercises.map((exercise, index) => (
                <div key={exercise.id}>
                  <ExerciseCard exercise={exercise} exerciseNumber={index + 1} />
                  {index < homeworkExercises.length - 1 && <Separator className="mt-6" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          {currentDay > 1 && (
            <Link to={`/day/${currentDay - 1}`}>
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous Day
              </Button>
            </Link>
          )}
          
          <div className="flex-1" />
          
          {currentDay < 100 && (
            <Link to={`/day/${currentDay + 1}`}>
              <Button>
                Next Day
                <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DayLesson;
