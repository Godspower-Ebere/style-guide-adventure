import React from 'react';
export const Footer = () => {
  return <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Learning Platform</h3>
            <p className="text-muted-foreground text-sm">
              Master web development with our comprehensive 100-day curriculum.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/curriculum" className="text-muted-foreground hover:text-foreground">Full Curriculum</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-foreground">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Topics</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">HTML & CSS</span></li>
              <li><span className="text-muted-foreground">JavaScript</span></li>
              <li><span className="text-muted-foreground">Advanced JS</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#help" className="text-muted-foreground hover:text-foreground">Help Center</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2025 Learning Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};