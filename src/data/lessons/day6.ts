
import { DayLesson } from "../types";

export const day6: DayLesson = {
  day: 6,
  title: "HTML Images and Media - Bringing Your Pages to Life",
  category: "HTML Basics",
  description: "Welcome to day 6! Today we're going to transform your text-based websites into visually stunning experiences. You'll learn how to add images, optimize them for the web, and even incorporate audio and video. Get ready to make your websites come alive with multimedia content!",
  learningObjectives: [
    "Master the <img> tag and its essential attributes like src, alt, width, and height",
    "Understand image formats and when to use JPEG, PNG, GIF, and modern formats",
    "Learn to create responsive images that work on all devices",
    "Discover how to add audio and video content to your websites",
    "Practice building image galleries and multimedia-rich web pages"
  ],
  detailedExplanation: `
## Welcome to Day 6 - Adding Images and Media!

Fantastic work making it to day 6! You've learned HTML structure, formatting, lists, and links. Now it's time to add the visual elements that will make your websites truly engaging - images, audio, and video!

### Why Images and Media Matter So Much

Think about your favorite websites - what makes them memorable and engaging? While good content and structure are essential, it's often the visual elements that capture attention and create emotional connections. Images can:

- Explain complex concepts quickly
- Create emotional connections with visitors
- Break up large blocks of text
- Show products or services in action
- Build trust and credibility
- Make content more shareable on social media

### The Mighty <img> Tag - Your Visual Powerhouse

The image tag is self-closing (no closing tag needed) and uses attributes to define how images display:

    <img src="photo.jpg" alt="Description of the image">

Let's break down the essential attributes:

**src (source)** - The path to your image file
**alt (alternative text)** - Description for screen readers and when images don't load

### Essential Image Attributes You Need to Know

**The src Attribute - Where to Find Your Image**

    <img src="images/sunset.jpg" alt="Beautiful sunset over the ocean">
    <img src="https://example.com/photo.jpg" alt="External image">

**The alt Attribute - Making Images Accessible**

This is crucial for accessibility and SEO:

    <img src="team-photo.jpg" alt="Our development team of 5 people standing in front of the office">

**Width and Height Attributes**

    <img src="logo.png" alt="Company Logo" width="200" height="100">

**The title Attribute - Adding Tooltips**

    <img src="product.jpg" alt="New smartphone" title="Click to see full specifications">

### Understanding Image Formats

**JPEG (.jpg)** - Best for photographs with many colors
- Pros: Small file sizes, good for photos
- Cons: Lossy compression, no transparency
- Use for: Photos, complex images with gradients

**PNG (.png)** - Best for graphics with transparency or few colors  
- Pros: Lossless compression, supports transparency
- Cons: Larger file sizes than JPEG
- Use for: Logos, icons, graphics with text

**GIF (.gif)** - Best for simple animations
- Pros: Supports animation, small file sizes for simple graphics
- Cons: Limited to 256 colors
- Use for: Simple animations, very basic graphics

**Modern Formats:**
- **WebP** - Google's format, smaller than JPEG/PNG
- **AVIF** - Even newer, excellent compression

### Building Responsive Images

**Using CSS-friendly approaches:**

    <img src="hero-image.jpg" alt="Welcome to our website" style="max-width: 100%; height: auto;">

**Using the figure and figcaption elements:**

    <figure>
      <img src="chart.png" alt="Sales growth chart showing 25% increase">
      <figcaption>Our sales have grown 25% this year</figcaption>
    </figure>

### Creating Image Galleries

Here's how to create a simple image gallery:

    <h2>Our Portfolio</h2>
    <div>
      <figure>
        <img src="project1.jpg" alt="Modern website design for restaurant" width="300" height="200">
        <figcaption>Restaurant Website Design</figcaption>
      </figure>
      
      <figure>
        <img src="project2.jpg" alt="E-commerce store homepage" width="300" height="200">
        <figcaption>E-commerce Platform</figcaption>
      </figure>
      
      <figure>
        <img src="project3.jpg" alt="Mobile app interface design" width="300" height="200">
        <figcaption>Mobile App Interface</figcaption>
      </figure>
    </div>

### Adding Audio Content

**Basic Audio Element:**

    <audio controls>
      <source src="podcast.mp3" type="audio/mpeg">
      <source src="podcast.ogg" type="audio/ogg">
      Your browser does not support the audio element.
    </audio>

**Audio with Additional Attributes:**

    <audio controls preload="auto" loop>
      <source src="background-music.mp3" type="audio/mpeg">
      <p>Your browser doesn't support HTML5 audio.</p>
    </audio>

**Audio Attributes:**
- `controls` - Shows play/pause/volume controls
- `autoplay` - Starts playing automatically (avoid this!)
- `loop` - Repeats the audio
- `preload` - How much to load initially ("auto", "metadata", "none")

### Adding Video Content

**Basic Video Element:**

    <video controls width="640" height="360">
      <source src="intro-video.mp4" type="video/mp4">
      <source src="intro-video.webm" type="video/webm">
      Your browser does not support the video tag.
    </video>

**Video with Poster Image:**

    <video controls width="640" height="360" poster="video-thumbnail.jpg">
      <source src="company-intro.mp4" type="video/mp4">
      <p>Your browser doesn't support HTML5 video.</p>
    </video>

**Video Attributes:**
- `controls` - Shows video controls
- `poster` - Image shown before video plays
- `autoplay` - Starts automatically (use carefully!)
- `loop` - Repeats the video
- `muted` - Starts muted (required for autoplay)

### Real-World Example: Complete Portfolio Page

Here's how images and media work together:

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sarah Johnson - Digital Designer Portfolio</title>
    </head>
    <body>
      <!-- Header with Logo -->
      <header>
        <img src="logo.png" alt="Sarah Johnson Design Logo" width="150" height="50">
        <h1>Sarah Johnson</h1>
        <p>Digital Designer & Creative Professional</p>
      </header>

      <!-- Hero Section -->
      <section>
        <img src="hero-image.jpg" alt="Creative workspace with design tools and colorful artwork" style="width: 100%; height: 400px; object-fit: cover;">
        <h2>Welcome to My Creative World</h2>
        <p>I create beautiful, functional designs that help businesses connect with their audiences.</p>
      </section>

      <!-- About Section with Photo -->
      <section>
        <h2>About Me</h2>
        <figure>
          <img src="sarah-photo.jpg" alt="Sarah Johnson smiling in her design studio" width="250" height="300">
          <figcaption>Sarah in her design studio</figcaption>
        </figure>
        <p>With over 8 years of experience in digital design, I've helped dozens of businesses create memorable brand experiences.</p>
      </section>

      <!-- Portfolio Gallery -->
      <section>
        <h2>Featured Work</h2>
        
        <figure>
          <img src="project-brand-identity.jpg" alt="Modern logo design and brand identity system" width="400" height="300">
          <figcaption>Brand Identity Design for Tech Startup</figcaption>
        </figure>

        <figure>
          <img src="project-website.jpg" alt="Clean, modern website design on laptop screen" width="400" height="300">
          <figcaption>Responsive Website Design</figcaption>
        </figure>

        <figure>
          <img src="project-mobile-app.jpg" alt="Mobile app interface showing clean, user-friendly design" width="400" height="300">
          <figcaption>Mobile App User Interface</figcaption>
        </figure>
      </section>

      <!-- Process Video -->
      <section>
        <h2>My Design Process</h2>
        <video controls width="640" height="360" poster="process-video-poster.jpg">
          <source src="design-process.mp4" type="video/mp4">
          <source src="design-process.webm" type="video/webm">
          <p>Your browser doesn't support video. <a href="design-process.mp4">Download the video</a> instead.</p>
        </video>
        <p>Watch this behind-the-scenes look at how I approach each design project.</p>
      </section>

      <!-- Client Testimonials with Photos -->
      <section>
        <h2>What Clients Say</h2>
        
        <figure>
          <img src="client-john.jpg" alt="John Smith, CEO of TechCorp" width="100" height="100">
          <blockquote>
            <p>"Sarah's designs transformed our brand. Our website conversions increased by 40%!"</p>
            <figcaption>John Smith, CEO of TechCorp</figcaption>
          </blockquote>
        </figure>

        <figure>
          <img src="client-maria.jpg" alt="Maria Rodriguez, Marketing Director" width="100" height="100">
          <blockquote>
            <p>"Professional, creative, and always delivers on time. Highly recommended!"</p>
            <figcaption>Maria Rodriguez, Marketing Director</figcaption>
          </blockquote>
        </figure>
      </section>

      <!-- Contact Section -->
      <section>
        <h2>Let's Work Together</h2>
        <p>Ready to elevate your brand? I'd love to hear about your project!</p>
        <p>Email: <a href="mailto:sarah@sarahdesigns.com">sarah@sarahdesigns.com</a></p>
        <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
        
        <!-- Social Media Icons -->
        <div>
          <a href="https://instagram.com/sarahdesigns" target="_blank">
            <img src="instagram-icon.png" alt="Follow me on Instagram" width="32" height="32">
          </a>
          <a href="https://behance.net/sarahdesigns" target="_blank">
            <img src="behance-icon.png" alt="View my Behance portfolio" width="32" height="32">
          </a>
          <a href="https://linkedin.com/in/sarahdesigns" target="_blank">
            <img src="linkedin-icon.png" alt="Connect on LinkedIn" width="32" height="32">
          </a>
        </div>
      </section>

      <!-- Footer -->
      <footer>
        <p>&copy; 2024 Sarah Johnson Design. All rights reserved.</p>
      </footer>
    </body>
    </html>

### Best Practices for Images and Media

**1. Optimize Image Sizes**
- Use appropriate dimensions for your layout
- Compress images without losing quality
- Consider using modern formats like WebP

**2. Always Include Alt Text**
- Describe what's in the image
- Don't just repeat the filename
- Keep descriptions concise but informative

**3. Use Descriptive Filenames**
Good: `team-meeting-conference-room.jpg`
Bad: `IMG_001.jpg`

**4. Consider Loading Performance**
- Don't make images larger than necessary
- Use appropriate formats for different image types
- Consider lazy loading for image galleries

**5. Make Media Accessible**
- Provide captions for videos
- Include transcripts for audio content
- Use the `poster` attribute for videos

**6. Test on Different Devices**
- Ensure images scale properly on mobile
- Check that videos work across browsers
- Verify audio controls are accessible

### Image Organization Tips

**Folder Structure:**
```
website/
├── index.html
├── images/
│   ├── logos/
│   ├── portfolio/
│   ├── team/
│   └── icons/
├── videos/
└── audio/
```

**Naming Convention:**
- Use lowercase letters
- Use hyphens instead of spaces
- Be descriptive: `hero-banner-home.jpg`
- Include dimensions if needed: `logo-200x50.png`

Images and media transform websites from simple text documents into engaging, visual experiences. Master these elements, and you'll be able to create websites that truly capture and hold your audience's attention!
`,
  keyTerms: [
    { term: "Image Tag", definition: "The <img> tag used to embed images in HTML documents. It's a self-closing tag." },
    { term: "src Attribute", definition: "Specifies the source URL or path to the image file that should be displayed." },
    { term: "alt Attribute", definition: "Provides alternative text for images, crucial for accessibility and SEO." },
    { term: "Figure Element", definition: "Semantic HTML element that groups an image with its caption using figcaption." },
    { term: "Responsive Images", definition: "Images that scale and adapt to different screen sizes and devices." },
    { term: "Image Formats", definition: "Different file types for images (JPEG, PNG, GIF, WebP) each with specific use cases." },
    { term: "Video Element", definition: "HTML5 element for embedding video content with built-in controls and attributes." },
    { term: "Audio Element", definition: "HTML5 element for embedding audio content like music or podcasts." }
  ],
  exercises: [
    {
      id: 1,
      title: "Add Your First Images",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'my-images.html' with complete document structure.",
        "Set the title to 'Learning HTML Images'.",
        "Add a main heading 'My Image Gallery' using <h1>.",
        "Find 3 images online (use free stock photo sites like Unsplash or Pexels).",
        "Add each image using the <img> tag with proper src and alt attributes.",
        "Set appropriate width and height for each image (try 300x200).",
        "Add a descriptive caption under each image using <p> tags.",
        "Save and test that all images display correctly in your browser."
      ]
    },
    {
      id: 2,
      title: "Create a Photo Gallery with Captions",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'photo-gallery.html' with full HTML structure.",
        "Set the title to 'My Photography Gallery'.",
        "Add main heading 'Nature Photography' using <h1>.",
        "Create 5 image sections using <figure> and <figcaption> elements.",
        "Each figure should contain an image and a descriptive caption.",
        "Use consistent image dimensions (400x300) for all photos.",
        "Add meaningful alt text that describes each image's content.", 
        "Include a paragraph introduction explaining your photography passion.",
        "Test that all images load and captions display properly."
      ]
    },
    {
      id: 3,
      title: "Build a Business Profile with Media",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'business-profile.html' with complete HTML structure.",
        "Set the title to 'ABC Company - About Us'.",
        "Add company logo using <img> with appropriate sizing.",
        "Create an 'About Us' section with company photo and description.",
        "Add a 'Team' section with photos and names of team members (use stock photos).",
        "Include a 'Our Work' section showcasing project images.",
        "Add a video element with controls (use a placeholder or free video).",
        "Use figure and figcaption elements where appropriate.",
        "Ensure all images have descriptive alt text and proper sizing."
      ]
    },
    {
      id: 4,
      title: "Create a Personal Portfolio Website",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'portfolio.html' with complete HTML structure.",
        "Set the title to 'Your Name - Portfolio'.",
        "Add a professional headshot or avatar image.",
        "Create sections for: About, Skills, Projects, Contact.",
        "In the Projects section, showcase 4-6 project images with descriptions.",
        "Add social media icons that link to your profiles.",
        "Include a background or hero image for visual appeal.",
        "Use figure elements with captions for your project images.",
        "Ensure all images are properly optimized and have alt text.",
        "Test the complete portfolio on different screen sizes."
      ]
    },
    {
      id: 5,
      title: "Build a Complete Restaurant Website",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'restaurant.html' for a complete restaurant website.",
        "Set the title to 'Bella Vista Restaurant - Authentic Italian Cuisine'.",
        "Add restaurant logo and hero image of the restaurant interior.",
        "Create an image gallery of signature dishes (at least 6 food photos).",
        "Add photos of the chef and restaurant staff with captions.",
        "Include a video tour of the restaurant or cooking process.",
        "Add background music using the audio element (optional).",
        "Create a section showing the restaurant's atmosphere with multiple photos.",
        "Include social media icons linking to restaurant pages.",
        "Add a map or location image in the contact section.",
        "Use proper figure and figcaption elements throughout.",
        "Ensure all media has appropriate alt text and accessibility features.",
        "Test that all media loads properly and the page performs well."
      ]
    }
  ]
};
