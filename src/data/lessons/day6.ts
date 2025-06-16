
import { DayLesson } from "../types";

export const day6: DayLesson = {
  day: 6,
  title: "HTML Images and Media",
  category: "HTML Basics",
  description: "Learn to embed images and other media content in web pages using proper HTML tags and attributes.",
  learningObjectives: [
    "Master the img tag and its essential attributes.",
    "Understand image formats, sizing, and optimization for web.",
    "Learn to add alternative text for accessibility.",
    "Explore other media elements like audio and video basics."
  ],
  detailedExplanation: `
Images and media make websites visually appealing and engaging. Today we'll learn how to properly include them in our HTML.

## The Image Tag
The `<img>` tag is used to embed images. It's a self-closing tag with several important attributes.

\`\`\`html
<img src="image.jpg" alt="Description of image">
\`\`\`

## Essential Image Attributes

### Src Attribute
Specifies the path to the image file:
\`\`\`html
<!-- Relative path -->
<img src="images/photo.jpg" alt="My photo">

<!-- Absolute path -->
<img src="https://example.com/image.jpg" alt="External image">
\`\`\`

### Alt Attribute
Provides alternative text for accessibility:
\`\`\`html
<img src="sunset.jpg" alt="Beautiful sunset over the ocean">
\`\`\`

### Width and Height Attributes
Control image dimensions:
\`\`\`html
<img src="logo.png" alt="Company logo" width="200" height="100">
\`\`\`

### Title Attribute
Provides additional information (tooltip):
\`\`\`html
<img src="product.jpg" alt="Red bicycle" title="Click to view larger image">
\`\`\`

## Image Formats
Common web image formats:
- **JPEG (.jpg)**: Best for photographs with many colors
- **PNG (.png)**: Best for images with transparency or few colors
- **GIF (.gif)**: Best for simple animations
- **SVG (.svg)**: Best for scalable graphics and icons
- **WebP (.webp)**: Modern format with better compression

## Best Practices
- Always include alt text for accessibility
- Optimize images for web (compress file sizes)
- Use appropriate image formats
- Consider responsive design
- Don't rely solely on images for important information

## Basic Audio and Video
HTML5 introduced native support for audio and video:

\`\`\`html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<video controls width="400">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>
\`\`\`
    `,
  keyTerms: [
    { term: "Img Tag", definition: "HTML element used to embed images in web pages." },
    { term: "Src Attribute", definition: "Specifies the source URL or path of an image file." },
    { term: "Alt Attribute", definition: "Provides alternative text description for images, important for accessibility." },
    { term: "Image Optimization", definition: "Process of reducing image file sizes while maintaining acceptable quality for web use." },
    { term: "Responsive Images", definition: "Images that adapt to different screen sizes and devices." }
  ],
  exercises: [
    {
      id: 1,
      title: "Add Your First Image",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'images.html'.",
        "Find a free image online or use a placeholder service like picsum.photos.",
        "Add an image using the img tag with proper src and alt attributes.",
        "Set the image width to 300 pixels.",
        "View your page to ensure the image displays correctly."
      ]
    },
    {
      id: 2,
      title: "Image Gallery",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an HTML page called 'gallery.html'.",
        "Add at least 4 different images in a simple gallery layout.",
        "Each image should have descriptive alt text.",
        "Vary the sizes of the images using width and height attributes.",
        "Add titles to each image that appear on hover."
      ]
    },
    {
      id: 3,
      title: "Product Showcase",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'products.html' showcasing 3 different products.",
        "Each product should have an image, heading, and description.",
        "Use different image formats if possible (JPEG, PNG).",
        "Ensure all images have proper alt text.",
        "Include image dimensions for consistent layout."
      ]
    },
    {
      id: 4,
      title: "Personal Photo Album",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'album.html' for a personal photo collection.",
        "Include at least 6 images with captions.",
        "Organize images with headings for different categories or events.",
        "Add descriptive alt text for each image.",
        "Use a mix of different sized images for visual interest."
      ]
    },
    {
      id: 5,
      title: "Complete Media Page",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'media.html' that includes various types of media.",
        "Add multiple images with different formats and sizes.",
        "Include at least one audio element (you can use placeholder URLs).",
        "Add a video element with controls.",
        "Ensure all media has appropriate fallback text.",
        "Create a well-organized layout with headings and descriptions."
      ]
    }
  ]
};
