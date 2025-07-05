
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

    // Filter to show HTML through JavaScript topics
    const webDevCategories = [
        'HTML Basics',
        'HTML Forms',
        'Advanced HTML',
        'HTML5 Features',
        'CSS Basics',
        'CSS Layouts',
        'Advanced CSS',
        'CSS Grid & Flexbox',
        'Responsive Design',
        'CSS Animations',
        'JavaScript Basics',
        'JavaScript Advanced',
        'Asynchronous JavaScript',
        'Web APIs',
        'Modern JavaScript'
    ];

    const webDevLessons = lessons.filter(lesson => 
        webDevCategories.includes(lesson.category)
    );

    const groupedLessons = webDevLessons.reduce((acc, lesson) => {
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

    const categories = {
        'HTML Basics': 'bg-blue-100 text-blue-800',
        'HTML Forms': 'bg-purple-100 text-purple-800',
        'Advanced HTML': 'bg-red-100 text-red-800',
        'HTML5 Features': 'bg-cyan-100 text-cyan-800',
        'CSS Basics': 'bg-green-100 text-green-800',
        'CSS Layouts': 'bg-orange-100 text-orange-800',
        'Advanced CSS': 'bg-indigo-100 text-indigo-800',
        'CSS Grid & Flexbox': 'bg-emerald-100 text-emerald-800',
        'Responsive Design': 'bg-pink-100 text-pink-800',
        'CSS Animations': 'bg-yellow-100 text-yellow-800',
        'JavaScript Basics': 'bg-teal-100 text-teal-800',
        'JavaScript Advanced': 'bg-fuchsia-100 text-fuchsia-800',
        'Asynchronous JavaScript': 'bg-sky-100 text-sky-800',
        'Web APIs': 'bg-lime-100 text-lime-800',
        'Modern JavaScript': 'bg-rose-100 text-rose-800',
    };

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-1 pt-24">
                <div className="container mx-auto px-4 md:px-6 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
                            Web Development Curriculum
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                            Complete journey from HTML basics through CSS styling to JavaScript programming. Master web development step by step.
                        </p>
                        <div className="mt-6 flex justify-center">
                            <Badge variant="secondary" className="text-sm px-4 py-2">
                                {webDevLessons.length} Lessons Available
                            </Badge>
                        </div>
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
                                                    <div>
                                                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{lesson.description}</p>
                                                        <Badge className={categories[lesson.category]} variant="secondary">
                                                            {lesson.category}
                                                        </Badge>
                                                    </div>
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

                    {webDevLessons.length === 0 && (
                        <div className="text-center py-12">
                            <h3 className="text-xl font-semibold mb-2">No Lessons Available</h3>
                            <p className="text-muted-foreground">Content is currently being developed.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CurriculumPage;
