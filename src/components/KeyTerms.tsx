
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface KeyTerm {
  term: string;
  definition: string;
}

interface KeyTermsProps {
  terms: KeyTerm[];
}

export const KeyTerms = ({ terms }: KeyTermsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BookOpen className="h-5 w-5 mr-2" />
          Key Terms
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {terms.map((term, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="font-semibold text-indigo-700 mb-1">{term.term}</div>
              <div className="text-sm text-gray-600">{term.definition}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
