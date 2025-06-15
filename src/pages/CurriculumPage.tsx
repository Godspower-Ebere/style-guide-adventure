
import React from 'react';
import { Link } from 'react-router-dom';
import { getAllLessons } from '@/data/curriculum';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { BookOpen } from 'lucide-react';

type DayLessonType = ReturnType<typeof getAllLessons>[number];

const CurriculumPage = () => {
    const lessons = getAllLessons();

    const groupedLessons = lessons.reduce((acc, lesson) => {
        const category = lesson.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(lesson);
        return acc;
    }, {} as Record<string, DayLessonType[]>);

    const sortedCategories = Object.keys(groupedLessons).sort((a, b) => {
        const firstLessonA = groupedLessons[a].reduce((prev, curr) => prev.day < curr.day ? prev : curr);
        const firstLessonB = groupedLessons[b].reduce((prev, curr) => prev.day < curr.day ? prev : curr);
        return firstLessonA.day - firstLessonB.day;
    });

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1 pt-24">
                <div className="container mx-auto px-4 md:px-6 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
                            Full 100-Day Curriculum
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                            Explore every topic in our comprehensive JavaScript course, from basic concepts to advanced techniques.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {sortedCategories.map(category => (
                            <section key={category}>
                                <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-primary">{category}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {groupedLessons[category].sort((a, b) => a.day - b.day).map(lesson => (
                                        <Link key={lesson.day} to={`/day/${lesson.day}`} className="block group">
                                            <Card className="h-full flex flex-col hover:shadow-lg hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
                                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                                    <CardTitle className="text-lg font-semibold">{lesson.title}</CardTitle>
                                                    <Badge variant="outline">Day {lesson.day}</Badge>
                                                </CardHeader>
                                                <CardContent className="flex-grow flex flex-col justify-between">
                                                    <p className="text-sm text-muted-foreground line-clamp-2">{lesson.description}</p>
                                                    <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                                        Open Lesson <BookOpen className="ml-1 h-4 w-4" />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CurriculumPage;
