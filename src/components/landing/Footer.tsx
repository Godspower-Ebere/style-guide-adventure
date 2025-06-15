
import React from 'react';

export const Footer = () => (
  <footer className="py-8 border-t bg-background">
    <div className="container mx-auto text-center text-sm text-muted-foreground px-4 md:px-6">
      <p>© {new Date().getFullYear()} Style Guide Adventure. Created with Lovable.</p>
    </div>
  </footer>
);
