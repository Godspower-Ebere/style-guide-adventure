
import { DayLesson } from "../types";

export const day6: DayLesson = {
  day: 6,
  title: "HTML Images and Media",
  category: "HTML Basics",
  description: "Learn to add images to your webpages using the img tag. Understand image attributes and best practices for web images.",
  learningObjectives: [
    "Learn to add images to webpages using the img tag.",
    "Understand essential image attributes like src, alt, width, and height.",
    "Learn about image file formats and when to use each.",
    "Practice responsive image techniques and accessibility considerations."
  ],
  detailedExplanation: `
Images make websites visually appealing and help communicate information more effectively than text alone.

## The Image Tag
The img tag is self-closing and requires the src attribute to specify the image source:

\`\`\`html
<img src="photo.jpg">
\`\`\`

## Essential Image Attributes
- **src**: The path to the image file (required)
- **alt**: Alternative text for accessibility and when images don't load (required)
- **width**: The display width of the image
- **height**: The display height of the image
- **title**: Additional information shown on hover

Example:
\`\`\`html
<img src="sunset.jpg" alt="Beautiful sunset over mountains" width="400" height="300" title="Sunset in Colorado">
\`\`\`

## Image File Formats
- **JPEG (.jpg)**: Best for photos with many colors
- **PNG (.png)**: Best for images with transparency or few colors
- **GIF (.gif)**: Best for simple animations
- **WebP (.webp)**: Modern format with excellent compression

## Image Paths
- **Absolute path**: Full URL to an image online
- **Relative path**: Path relative to your HTML file

Examples:
\`\`\`html
<!-- Absolute path -->
<img src="https://example.com/image.jpg" alt="Online image">

<!-- Relative path -->
<img src="images/photo.jpg" alt="Local image">
\`\`\`

## Accessibility and Best Practices
1. Always include alt text that describes the image
2. Keep file sizes reasonable for faster loading
3. Use appropriate dimensions to avoid stretching
4. Consider responsive design for different screen sizes
    `,
  keyTerms: [
    { term: "img Tag", definition: "A self-closing HTML tag used to embed images in webpages." },
    { term: "src Attribute", definition: "Specifies the path or URL to the image file to be displayed." },
    { term: "alt Attribute", definition: "Provides alternative text description for screen readers and when images fail to load." },
    { term: "Image Path", definition: "The location of an image file, either as an absolute URL or relative to the HTML file." },
    { term: "Image Format", definition: "The file type of an image (JPEG, PNG, GIF, etc.) that determines its compression and features." }
  ],
  exercises: [
    {
      id: 1,
      title: "Add Your First Image",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file with the basic structure.",
        "Add the title 'My Photo Gallery' to the head section.",
        "In the body, create an h1 tag and type 'Welcome to My Gallery'.",
        "Below the heading, add an img tag.",
        "Set the src attribute to 'https://picsum.photos/400/300' (this provides a random image).",
        "Add an alt attribute with the text 'Random sample image'.",
        "Save as 'images.html' and view your first image in the browser."
      ]
    },
    {
      id: 2,
      title: "Practice Image Attributes",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "In the same 'images.html' file, add an h2 tag with 'Nature Photos'.",
        "Add another img tag below the h2.",
        "Set src to 'https://picsum.photos/300/200?nature'.",
        "Add alt text 'Beautiful nature photograph'.",
        "Add width='300' and height='200' attributes.",
        "Add a title attribute with 'Hover to see this message'.",
        "Save and test both the size and hover effect."
      ]
    },
    {
      id: 3,
      title: "Create an Image with Caption",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'photo-story.html' with the basic structure.",
        "Set the page title to 'My Photo Story'.",
        "Create an h1 tag with 'A Day in My Life'.",
        "Add an img tag with src='https://picsum.photos/500/300?morning'.",
        "Set alt text to 'Morning scene'.",
        "Add width='500' and height='300' attributes.",
        "Below the image, add a p tag with 'This is how my morning started today.'.",
        "Add another img with src='https://picsum.photos/500/300?city' and appropriate alt text.",
        "Add another caption paragraph below the second image.",
        "Save and see your photo story."
      ]
    },
    {
      id: 4,
      title: "Build a Photo Album Page",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'album.html' with the basic structure.",
        "Set the page title to 'My Travel Album'.",
        "Create an h1 tag with 'Memories from My Travels'.",
        "Add an h2 tag with 'Beach Vacation'.",
        "Add an img with src='https://picsum.photos/400/250?beach'.",
        "Set alt text to 'Relaxing beach scene with clear blue water'.",
        "Add another h2 with 'Mountain Adventure'.",
        "Add an img with src='https://picsum.photos/400/250?mountain'.",
        "Set alt text to 'Majestic mountain landscape'.",
        "Add a third h2 with 'City Exploration'.",
        "Add an img with src='https://picsum.photos/400/250?city'.",
        "Set alt text to 'Bustling city street scene'.",
        "Under each image, add a p tag with a brief description of the 'trip'."
      ]
    },
    {
      id: 5,
      title: "Create a Complete Gallery with Navigation",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a new file called 'full-gallery.html' with the basic structure.",
        "Set the page title to 'Professional Photography Portfolio'.",
        "Create an h1 tag with 'John Doe Photography'.",
        "Add a navigation section with links to different galleries (you'll create these).",
        "Create an h2 with 'Featured Work'.",
        "Add three images in a row, each with different dimensions.",
        "First image: src='https://picsum.photos/300/200?featured1', width='300', height='200'.",
        "Second image: src='https://picsum.photos/300/200?featured2', width='300', height='200'.",
        "Third image: src='https://picsum.photos/300/200?featured3', width='300', height='200'.",
        "Add appropriate alt text for each image describing what a portfolio photo might show.",
        "Create an h2 with 'About the Photographer'.",
        "Add a smaller profile image with src='https://picsum.photos/150/150?portrait'.",
        "Include a paragraph about the fictional photographer below the profile image.",
        "Make sure all images have descriptive alt text and appropriate titles.",
        "Test that all images load correctly."
      ]
    }
  ]
};
