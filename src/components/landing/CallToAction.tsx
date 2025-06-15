
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const CallToAction = () => (
    <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto text-center px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Adventure?</h2>
            <p className="max-w-xl mx-auto text-muted-foreground mb-8">
                Don't wait. The best time to start learning is now. Join hundreds of other developers on this journey.
            </p>
            <Button asChild size="lg">
                <Link to="/curriculum">I'm Ready!</Link>
            </Button>
        </div>
    </section>
);
