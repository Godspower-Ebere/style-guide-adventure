
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Exercise } from "@/data/types";
import { CheckCircle2, Circle } from "lucide-react";

interface ExerciseCardProps {
  exercise: Exercise;
  exerciseNumber: number;
}

export const ExerciseCard = ({ exercise, exerciseNumber }: ExerciseCardProps) => {
  const difficultyColors = {
    easy: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    hard: "bg-red-100 text-red-800"
  };

  const typeColors = {
    classwork: "bg-blue-100 text-blue-800",
    homework: "bg-purple-100 text-purple-800"
  };

  return (
    <Card className="border-l-4 border-l-indigo-500">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">
            Exercise {exerciseNumber}: {exercise.title}
          </CardTitle>
          <div className="flex gap-2">
            <Badge className={typeColors[exercise.type]}>
              {exercise.type}
            </Badge>
            <Badge className={difficultyColors[exercise.difficulty]}>
              {exercise.difficulty}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <CardDescription>
            Follow these step-by-step instructions to complete the exercise:
          </CardDescription>
          
          <div className="space-y-2">
            {exercise.instructions.map((instruction, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 text-sm text-gray-700">
                  {instruction}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start gap-2">
              <div className="text-amber-600 mt-0.5">
                <Circle className="h-4 w-4" />
              </div>
              <div className="text-sm text-amber-800">
                <strong>Remember:</strong> No code answers are provided. This encourages you to think through the problem and learn by doing. If you get stuck, review the lesson explanation above or try breaking the problem into smaller steps.
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
