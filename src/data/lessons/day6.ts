
import { DayLesson } from "../types";

export const day6: DayLesson = {
  day: 6,
  title: "HTML Images and Media - Bringing Your Pages to Life",
  category: "HTML Basics",
  description: "Welcome to day 6! Today we're going to transform your text-based pages into visually stunning websites by learning how to add images and media. You'll discover how to embed photos, optimize them for the web, and make them accessible to all users. Get ready to make your websites come alive with visual content!",
  learningObjectives: [
    "Master the <img> tag and its essential attributes for displaying images perfectly",
    "Learn to write effective alt text that makes your images accessible to everyone",
    "Understand different image formats and when to use each one for best results",
    "Discover how to control image sizes and positioning within your layouts",
    "Explore basic audio and video embedding to create rich multimedia experiences"
  ],
  detailedExplanation: `
## Welcome to Day 6 - Let's Add Visual Magic!

Hey there! You've come so far already - you can build HTML structure, format text beautifully, organize content with lists, and connect pages with links. Today, we're going to take your websites to the next level by adding images and media content!

### Why Images Transform Your Website

Think about your favorite websites. What makes them engaging? Sure, great content is important, but images play a huge role in capturing attention, conveying information quickly, and creating emotional connections with your visitors.

A well-placed image can:
- Explain complex concepts instantly
- Break up large blocks of text
- Create visual interest and engagement
- Support your brand identity
- Make your content more shareable on social media

### The IMG Tag - Your Gateway to Visual Content

The \\\`<img>\\\` tag is unique in HTML because it's **self-closing** - it doesn't need a closing tag. But it does need some essential attributes to work properly:

\\\`\\\`\\\`html
<img src="photo.jpg" alt="Description of the image">
\\\`\\\`\\\`

Let me break down the two most important attributes:

**src (source)** - This tells the browser where to find your image file
**alt (alternative text)** - This describes your image for accessibility and SEO

### Understanding Image Paths - Where to Find Your Images

There are two main ways to reference images:

**Relative Paths** - For images stored on your website:
\\\`\\\`\\\`html
<!-- Image in the same folder as your HTML file -->
<img src="sunset.jpg" alt="Beautiful sunset over the ocean">

<!-- Image in a subfolder -->
<img src="images/team-photo.jpg" alt="Our development team at the office">

<!-- Image in a parent folder -->
<img src="../photos/logo.png" alt="Company logo">
\\\`\\\`\\\`

**Absolute URLs** - For images hosted elsewhere:
\\\`\\\`\\\`html
<img src="https://example.com/images/sample.jpg" alt="Sample image from external site">
\\\`\\\`\\\`

### The Art of Writing Great Alt Text

Alt text is crucial for accessibility - it's what screen readers announce to visually impaired users. It also shows up if your image fails to load. Here's how to write effective alt text:

**Good alt text examples:**
\\\`\\\`\\\`html
<img src="dog-park.jpg" alt="Golden retriever playing fetch with a tennis ball">
<img src="chart.png" alt="Sales increased 40% from January to March 2024">
<img src="recipe.jpg" alt="Chocolate chip cookies cooling on a wire rack">
\\\`\\\`\\\`

**What makes alt text great:**
- Be specific and descriptive
- Include important details that support your content
- Keep it under 100 characters when possible
- Don't start with "Image of..." or "Picture of..."

### Controlling Image Size and Appearance

You can control how your images display using width and height attributes:

\\\`\\\`\\\`html
<!-- Specific dimensions -->
<img src="logo.png" alt="Company logo" width="200" height="100">

<!-- Just width (height scales automatically) -->
<img src="banner.jpg" alt="Welcome banner" width="800">

<!-- Percentage-based sizing -->
<img src="photo.jpg" alt="Team photo" width="50%">
\\\`\\\`\\\`

### Image Formats - Choosing the Right Type

Different image formats work better for different purposes:

**JPEG (.jpg)** - Best for photographs with lots of colors
- Great compression for photos
- Not good for images with text or sharp lines
- No transparency support

**PNG (.png)** - Best for logos, screenshots, images with text
- Supports transparency
- Larger file sizes than JPEG
- Perfect for graphics with sharp edges

**GIF (.gif)** - Best for simple animations
- Limited to 256 colors
- Supports basic animation
- Small file sizes for simple graphics

**SVG (.svg)** - Best for icons and scalable graphics
- Vector-based (scales perfectly at any size)
- Small file sizes for simple graphics
- Can be styled with CSS

### Adding Rich Content with Audio and Video

HTML5 introduced native support for audio and video content:

**Audio Element:**
\\\`\\\`\\\`html
<audio controls>
    <source src="podcast-episode.mp3" type="audio/mpeg">
    <source src="podcast-episode.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>
\\\`\\\`\\\`

**Video Element:**
\\\`\\\`\\\`html
<video controls width="600">
    <source src="tutorial-video.mp4" type="video/mp4">
    <source src="tutorial-video.webm" type="video/webm">
    Your browser does not support the video element.
</video>
\\\`\\\`\\\`

### Real-World Example - A Complete Photo Gallery

Here's how you might create a photo gallery for a travel blog:

\\\`\\\`\\\`html
<article>
    <h1>My Trip to Paris</h1>
    
    <p>Last month, I had the incredible opportunity to visit Paris for the first time. Here are some highlights from my journey!</p>
    
    <h2>The Eiffel Tower</h2>
    <img src="images/eiffel-tower.jpg" 
         alt="Eiffel Tower illuminated at sunset with golden light" 
         width="600">
    <p>Nothing quite prepares you for seeing the Eiffel Tower in person. This photo was taken during the golden hour - absolutely magical!</p>
    
    <h2>Louvre Museum</h2>
    <img src="images/mona-lisa-crowd.jpg" 
         alt="Crowd of visitors viewing the Mona Lisa painting" 
         width="500">
    <p>The Mona Lisa draws quite a crowd, but the entire Louvre is filled with incredible art worth exploring.</p>
    
    <h2>Local Café Culture</h2>
    <img src="images/cafe-scene.jpg" 
         alt="Outdoor café with people enjoying coffee and croissants" 
         width="600">
    <p>One of my favorite parts of Paris was the café culture. Perfect spots for people-watching and enjoying amazing coffee!</p>
    
    <h2>Travel Video Diary</h2>
    <video controls width="700">
        <source src="videos/paris-highlights.mp4" type="video/mp4">
        <p>Your browser doesn't support video playback. <a href="videos/paris-highlights.mp4">Download the video</a> to watch it.</p>
    </video>
    <p>A short video compilation of my favorite moments from the trip.</p>
</article>
\\\`\\\`\\\`

### Best Practices for Images and Media

**Optimize your images:**
- Compress images to reduce file size without losing quality
- Use appropriate dimensions (don't make the browser resize huge images)
- Choose the right format for your content type

**Always include alt text:**
- Every image should have descriptive alt text
- Empty alt attributes (alt="") are okay for purely decorative images
- Good alt text improves SEO and accessibility

**Consider loading performance:**
- Large images slow down your site
- Consider using smaller images for thumbnails
- Lazy loading can improve performance for pages with many images

**Make media accessible:**
- Provide captions or transcripts for audio/video content
- Include fallback content for browsers that don't support certain formats
- Test your media on different devices and browsers

The key to great web images isn't just technical - it's about choosing images that enhance your content and create a better experience for your visitors!
`,
  keyTerms: [
    { term: "IMG Tag", definition: "The HTML element used to embed images in web pages. It's self-closing and requires src and alt attributes." },
    { term: "Src Attribute", definition: "Specifies the source location of an image file, either as a relative path or absolute URL." },
    { term: "Alt Attribute", definition: "Provides alternative text description for images, essential for accessibility and SEO. Shows when images fail to load." },
    { term: "Relative Path", definition: "A file path that's relative to the current HTML file's location, like 'images/photo.jpg' or '../logo.png'." },
    { term: "Absolute URL", definition: "A complete web address including the protocol and domain, like 'https://example.com/image.jpg'." },
    { term: "Image Optimization", definition: "The process of reducing image file sizes while maintaining acceptable quality for faster web loading." },
    { term: "JPEG Format", definition: "A compressed image format ideal for photographs with many colors. Uses .jpg or .jpeg extension." },
    { term: "PNG Format", definition: "An image format that supports transparency and is ideal for graphics, logos, and images with sharp edges." },
    { term: "Accessibility", definition: "Making web content usable by people with disabilities, including providing alt text for screen readers." }
  ],
  exercises: [
    {
      id: 1,
      title: "Add Your First Image to a Webpage",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'my-photos.html' with complete document structure.",
        "Set the title to 'My Photo Gallery'.",
        "In the body, insert 'My Favorite Photos' in <h1> tags.",
        "Find a free image online (try unsplash.com or pixabay.com) or use a photo you have.",
        "Add the image using: <img src=\"your-image-url-here\" alt=\"Describe what's in your image\">",
        "Make sure to write descriptive alt text that explains what's in the image.",
        "Add a paragraph below the image describing why this photo is meaningful to you.",
        "Save and open the file to make sure your image displays correctly."
      ]
    },
    {
      id: 2,
      title: "Create a Small Photo Gallery with Descriptions",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a new file called 'photo-gallery.html' with full HTML structure.",
        "Set the title to 'Nature Photo Gallery'.",
        "Create the main heading: Insert 'Beautiful Nature Photography' in <h1> tags.",
        "Add an introduction: Insert 'Here are some stunning nature photographs that showcase the beauty of our natural world.' in <p> tags.",
        "Create your first photo section: Insert 'Mountain Landscapes' in <h2> tags.",
        "Add a mountain image: <img src=\"mountain-image-url\" alt=\"Snow-capped mountain peaks against blue sky\" width=\"500\">",
        "Add a description: Insert 'The majestic beauty of mountain ranges never fails to inspire awe and wonder.' in <p> tags.",
        "Create a second section: Insert 'Ocean Views' in <h2> tags.",
        "Add an ocean image: <img src=\"ocean-image-url\" alt=\"Turquoise ocean waves meeting sandy beach\" width=\"500\">",
        "Add description: Insert 'The rhythmic sound of ocean waves creates a sense of peace and tranquility.' in <p> tags.",
        "Create a third section: Insert 'Forest Scenes' in <h2> tags.",
        "Add a forest image with proper alt text and width=\"500\".",
        "Add a description paragraph for the forest image.",
        "Save and test that all images load correctly with appropriate sizes."
      ]
    },
    {
      id: 3,
      title: "Build a Product Showcase Page with Optimized Images",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'product-showcase.html' with complete HTML structure.",
        "Set the title to 'TechGadgets Pro - Latest Products'.",
        "Create the header: Insert 'TechGadgets Pro' in <h1> tags.",
        "Add subtitle: Insert 'Discover Our Latest Technology Products' in <h2> tags.",
        "Create first product section: Insert 'Wireless Headphones' in <h3> tags.",
        "Add product image: <img src=\"headphones-image-url\" alt=\"Black wireless headphones with cushioned ear cups\" width=\"300\">",
        "Add product description: Insert 'Premium wireless headphones with noise cancellation and 24-hour battery life. Perfect for music lovers and professionals.' in <p> tags.",
        "Add price: Insert 'Price: $199.99' in <p> tags wrapped in <strong> tags.",
        "Create second product: Insert 'Smart Watch' in <h3> tags.",
        "Add watch image with descriptive alt text and width=\"300\".",
        "Add description: Insert 'Advanced fitness tracking, heart rate monitoring, and smartphone integration in a sleek design.' in <p> tags.",
        "Add price in bold.",
        "Create third product: Insert 'Laptop Stand' in <h3> tags.",
        "Add stand image with proper alt text and consistent width.",
        "Add description and price following the same pattern.",
        "Add a contact section: Insert 'Questions? Contact us at' in <p> tags with an email link.",
        "Save and ensure all product images display consistently and professionally."
      ]
    },
    {
      id: 4,
      title: "Create a Travel Blog Post with Rich Media",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'travel-blog.html' with full HTML structure.",
        "Set the title to 'Amazing Adventure in Costa Rica - Travel Blog'.",
        "Create the blog header: Insert 'My Amazing Adventure in Costa Rica' in <h1> tags.",
        "Add byline: Insert 'Written by [Your Name] | March 2024' in <p> tags with <small> tags around the date.",
        "Add introduction: Insert 'Last month, I embarked on an incredible journey to Costa Rica, a country known for its biodiversity and natural beauty. Here are the highlights from my adventure!' in <p> tags.",
        "Create day 1 section: Insert 'Day 1: Arrival in San José' in <h2> tags.",
        "Add arrival photo: <img src=\"san-jose-image-url\" alt=\"Colorful buildings in downtown San José with mountains in background\" width=\"600\">",
        "Add day 1 description: Insert 'Landing in San José was just the beginning. The vibrant capital city welcomed us with colorful architecture and friendly locals.' in <p> tags.",
        "Create day 2 section: Insert 'Day 2: Manuel Antonio National Park' in <h2> tags.",
        "Add wildlife photo: <img src=\"wildlife-image-url\" alt=\"Sloth hanging from tree branch in rainforest\" width=\"500\">",
        "Add day 2 description: Insert 'The national park exceeded all expectations. We spotted sloths, monkeys, and countless exotic birds in their natural habitat.' in <p> tags.",
        "Create day 3 section: Insert 'Day 3: Beach Day at Playa Espadilla' in <h2> tags.",
        "Add beach photo: <img src=\"beach-image-url\" alt=\"Pristine beach with palm trees and turquoise water\" width=\"600\">",
        "Add day 3 description: Insert 'Nothing beats relaxing on pristine beaches with crystal-clear water and gentle waves. Pure paradise!' in <p> tags.",
        "Add video section: Insert 'Video Highlights' in <h2> tags.",
        "Add video element: <video controls width=\"700\"> with source for mp4 format and fallback text.",
        "Add video description: Insert 'A compilation of the most memorable moments from our Costa Rica adventure.' in <p> tags.",
        "Create tips section: Insert 'Travel Tips for Costa Rica' in <h2> tags.",
        "Add tips list using <ul> with at least 4 travel tips as <li> items.",
        "Add conclusion: Insert 'Final Thoughts' in <h2> tags with a closing paragraph about the experience.",
        "Add social sharing: Insert 'Share this post:' in <p> tags with links to social media platforms (you can use # as href for now).",
        "Save and review your complete travel blog with multiple images, consistent formatting, and engaging content."
      ]
    },
    {
      id: 5,
      title: "Build a Complete Photography Portfolio Website",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'portfolio.html' with complete HTML structure.",
        "Set the title to 'Sarah Chen Photography - Professional Portfolio'.",
        "Create the header: Insert 'Sarah Chen Photography' in <h1> tags.",
        "Add tagline: Insert 'Capturing Life\\'s Beautiful Moments' in <h2> tags with <em> tags around the text.",
        "Add photographer intro: Insert 'Welcome to my photography portfolio. I specialize in portrait, landscape, and event photography, with a passion for storytelling through images.' in <p> tags.",
        "Create portfolio navigation: Insert 'Portfolio Categories' in <h2> tags.",
        "Add internal navigation using <ul>: 'Portrait Photography', 'Landscape Photography', 'Event Photography', 'About the Photographer'.",
        "Create portrait section: Insert 'Portrait Photography' in <h2> tags with id=\"portraits\".",
        "Add portrait intro: Insert 'Capturing the essence and personality of individuals through thoughtful composition and lighting.' in <p> tags.",
        "Add 3 portrait images: Each with <img> tag, descriptive alt text, width=\"400\", and a caption in <p> tags below each image.",
        "Create landscape section: Insert 'Landscape Photography' in <h2> tags with id=\"landscapes\".",
        "Add landscape intro: Insert 'Exploring the natural world and showcasing the beauty of diverse landscapes.' in <p> tags.",
        "Add 3 landscape images with proper alt text, width=\"500\", and captions.",
        "Create events section: Insert 'Event Photography' in <h2> tags with id=\"events\".",
        "Add events intro: Insert 'Documenting special occasions and preserving precious memories for families and businesses.' in <p> tags.",
        "Add 3 event images with descriptive alt text, width=\"450\", and captions.",
        "Create about section: Insert 'About the Photographer' in <h2> tags with id=\"about\".",
        "Add photographer photo: <img src=\"photographer-image-url\" alt=\"Professional headshot of Sarah Chen holding camera\" width=\"300\">",
        "Add bio: Insert 'With over 8 years of experience in professional photography, I bring a unique artistic vision to every project. My work has been featured in several local galleries and publications.' in <p> tags.",
        "Add credentials: Insert 'Education & Experience' in <h3> tags followed by a <ul> with education and experience items.",
        "Create contact section: Insert 'Get In Touch' in <h2> tags.",
        "Add contact info: Insert 'Ready to capture your special moments?' in <p> tags.",
        "Add email: Insert 'Email:' in <p> tags with mailto link.",
        "Add phone: Insert 'Phone:' in <p> tags with tel link.",
        "Add social media: Insert 'Follow my work:' in <p> tags with links to Instagram and Facebook (use # for now).",
        "Add audio testimonial: Insert 'Client Testimonial' in <h3> tags.",
        "Add audio element: <audio controls> with source for mp3 and fallback text.",
        "Add testimonial text: Insert 'Listen to what our clients say about working with Sarah Chen Photography.' in <p> tags.",
        "Add back to top navigation at the bottom of each major section.",
        "Save and thoroughly test the portfolio for consistent image sizes, working navigation, and professional presentation."
      ]
    }
  ]
};
