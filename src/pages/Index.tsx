
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { getAllLessons } from "@/data/curriculum";
import { BookOpen, Target, Award, Calendar } from "lucide-react";

const Index = () => {
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const lessons = getAllLessons();
  const progressPercentage = (completedDays.length / 100) * 100;

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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">HTML & CSS Mastery</h1>
              <p className="text-gray-600 mt-1">100 Days of Web Development Excellence</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-indigo-600">{completedDays.length}/100</div>
              <div className="text-sm text-gray-500">Days Completed</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Overall Progress</span>
              <span className="text-sm text-gray-500">{progressPercentage.toFixed(1)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="flex items-center p-6">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <div className="text-2xl font-bold">100</div>
                <div className="text-sm text-gray-600">Total Lessons</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex items-center p-6">
              <Target className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <div className="text-2xl font-bold">500</div>
                <div className="text-sm text-gray-600">Exercises</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex items-center p-6">
              <Calendar className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <div className="text-2xl font-bold">{completedDays.length}</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex items-center p-6">
              <Award className="h-8 w-8 text-orange-600 mr-3" />
              <div>
                <div className="text-2xl font-bold">{Math.floor(completedDays.length / 10)}</div>
                <div className="text-sm text-gray-600">Milestones</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lesson Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {lessons.map((lesson) => (
            <Card 
              key={lesson.day} 
              className={`hover:shadow-lg transition-all duration-200 ${
                completedDays.includes(lesson.day) ? 'ring-2 ring-green-500 bg-green-50' : 'hover:scale-105'
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    Day {lesson.day}
                  </Badge>
                  <Badge className={categories[lesson.category]}>
                    {lesson.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{lesson.title}</CardTitle>
                <CardDescription className="text-sm">
                  {lesson.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="text-xs text-gray-500">
                    {lesson.exercises.filter(ex => ex.type === 'classwork').length} Classwork • {lesson.exercises.filter(ex => ex.type === 'homework').length} Homework
                  </div>
                  
                  <Link to={`/day/${lesson.day}`}>
                    <Button 
                      className="w-full" 
                      variant={completedDays.includes(lesson.day) ? "outline" : "default"}
                    >
                      {completedDays.includes(lesson.day) ? 'Review Lesson' : 'Start Learning'}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
