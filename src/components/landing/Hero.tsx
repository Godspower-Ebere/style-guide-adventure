
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Hero = () => (
  <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-background">
    <div className="container mx-auto text-center px-4 md:px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
        Master Modern JavaScript
      </h1>
      <p className="max-w-[700px] mx-auto text-lg md:text-xl text-muted-foreground mb-10">
        Embark on a 100-day adventure to become a JavaScript expert. From fundamentals to advanced topics, we've got you covered, one day at a time.
      </p>
      <Button asChild size="lg">
        <Link to="/day/31">Begin Your Adventure</Link>
      </Button>
    </div>
  </section>
);
