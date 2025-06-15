
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
    <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <Link to="/" className="font-bold text-lg flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
        <span>Style Guide Adventure</span>
      </Link>
      <nav>
        <Button asChild>
          <Link to="/curriculum">Start Learning</Link>
        </Button>
      </nav>
    </div>
  </header>
);
