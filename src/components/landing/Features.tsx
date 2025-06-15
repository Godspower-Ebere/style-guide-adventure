import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const features = [{
  title: "Core Concepts",
  description: "Solidify your understanding of variables, data types, and control flow with practical exercises."
}, {
  title: "Asynchronous JS",
  description: "Master Promises, async/await, and handle asynchronous operations with ease and confidence."
}, {
  title: "Modern APIs",
  description: "Explore powerful browser APIs like Fetch, Web Workers, and the DOM to build rich applications."
}, {
  title: "Advanced Topics",
  description: "Dive into generators, proxies, modules, and functional programming patterns to write expert-level code."
}];
export const Features = () => {
  return <section className="py-20 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">A Comprehensive Curriculum</h2>
                    <p className="text-muted-foreground">Our curriculum is designed to take you from beginner to pro, covering the full spectrum of modern development.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map(feature => <Card key={feature.title} className="bg-card hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">{feature.description}</p>
                            </CardContent>
                        </Card>)}
                </div>
            </div>
        </section>;
};