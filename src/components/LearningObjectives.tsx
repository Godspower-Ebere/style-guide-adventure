
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";

interface LearningObjectivesProps {
  objectives: string[];
}

export const LearningObjectives = ({ objectives }: LearningObjectivesProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Target className="h-5 w-5 mr-2" />
          Learning Objectives
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {objectives.map((objective, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-indigo-500 rounded-full mt-2" />
              <span className="text-gray-700">{objective}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
