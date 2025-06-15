
import { DayLesson } from "../types";

export const day42: DayLesson = {
  day: 42,
  title: "Responsive Web Design: Adapting to Any Screen",
  category: "Responsive Design",
  description: "Learn the core principles of responsive web design (RWD) to ensure your websites look and work great on any device, from a small phone to a large desktop.",
  learningObjectives: [
    "Understand the three pillars of RWD: Fluid Grids, Flexible Images, and Media Queries.",
    "Implement the crucial viewport meta tag and understand its purpose.",
    "Differentiate between fixed, fluid, and responsive layouts.",
    "Adopt a 'mobile-first' design philosophy and understand its benefits."
  ],
  detailedExplanation: `
Responsive Web Design (RWD) is an approach that makes your web pages render well on a variety of devices and window or screen sizes. Content, design, and performance are necessary across all devices to ensure usability and satisfaction.

### The Problem: A Multi-Device World
In the early days of the web, everyone viewed sites on similar-sized desktop monitors. Today, users access the web on phones, tablets, laptops, desktops, and even TVs. A website with a fixed width would be unusable on a phone (requiring horizontal scrolling) and might look empty on a giant monitor. RWD solves this.

### The Three Pillars of Responsive Web Design

RWD stands on three technical pillars:

**1. The Viewport Meta Tag: The Starting Point**
This is the most critical first step. Without it, mobile browsers will lie about their width. They pretend to be a desktop browser (e.g., 980px wide) and then shrink the resulting page down, leading to tiny, unreadable text.

You must add this tag to the \`<head>\` of all your HTML pages:
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`
- \`width=device-width\`: This tells the browser to set the viewport's width to the actual width of the device's screen.
- \`initial-scale=1.0\`: This sets the initial zoom level when the page is first loaded by the browser.

**2. Fluid Grids: Building with Percentages**
Instead of defining layout widths in absolute pixels (\`px\`), a fluid grid uses relative units like percentages (\`%\`), viewport units (\`vw\`), or grid fractions (\`fr\`). This allows the layout to stretch and shrink gracefully with the viewport size.

\`\`\`css
/* Instead of this: */
.container { width: 960px; }
.sidebar { width: 300px; }
.content { width: 660px; }

/* Do this: */
.container { max-width: 960px; width: 100%; } /* Max width but fluid */
.sidebar { width: 31.25%; } /* 300 / 960 */
.content { width: 68.75%; } /* 660 / 960 */
\`\`\`

**3. Flexible Media: Images and Videos**
Fluid grids are not enough if the media inside them doesn't also scale. A large, fixed-width image will break out of its container on a small screen. The solution is simple but powerful:

\`\`\`css
img, video, iframe {
  max-width: 100%;
  height: auto;
}
\`\`\`
This rule tells media elements to never be wider than their container. \`height: auto;\` ensures their aspect ratio is maintained as they scale.

### The "Mobile-First" Philosophy
This isn't just a technical pattern; it's a design and development strategy.
- **Traditional (Desktop-First)**: You design for a large screen and then use media queries to subtract features or rearrange content for smaller screens. This can lead to bloated CSS and poor performance on mobile.
- **Mobile-First**: You start by designing and building for the smallest screen (mobile). The base CSS contains only the essential styles for a mobile experience. Then, you use \`min-width\` media queries to add complexity and features as the screen size *increases*.

**Benefits of Mobile-First:**
- **Performance**: Mobile users download a simpler, smaller CSS file.
- **Cleaner Code**: It forces you to prioritize content and leads to more organized, additive styles.
- **Better User Experience**: It ensures the core experience is solid on the most constrained devices.
`,
  keyTerms: [
    { term: "Responsive Web Design (RWD)", definition: "An approach to web design that makes web pages render well on a variety of devices and screen sizes." },
    { term: "Viewport", definition: "The user's visible area of a web page. It varies with the device used to view the page." },
    { term: "Viewport Meta Tag", definition: "An HTML tag that gives the browser instructions on how to control the page's dimensions and scaling." },
    { term: "Fluid Grid", definition: "A layout system that uses relative units, like percentages, to allow the layout to scale with the viewport." },
    { term: "Flexible Media", definition: "Images, videos, and other media that scale within a fluid layout, typically using `max-width: 100%`." },
    { term: "Mobile-First", definition: "A design and development strategy that starts with the base styles for the smallest screen and progressively enhances the layout for larger screens." }
  ],
  exercises: [
    {
      id: 1,
      title: "The Viewport Meta Tag Effect",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a basic HTML page with a paragraph of text.",
        "Open it in your browser and use the developer tools to simulate a mobile device (e.g., iPhone 12).",
        "Observe how the text is tiny and you have to zoom in. The browser is simulating a desktop viewport.",
        "Now, add `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` to the `<head>`.",
        "Refresh the page in the mobile simulator. Notice how the text is now readable and fits the screen width correctly."
      ]
    },
    {
      id: 2,
      title: "Creating a Fluid Two-Column Layout",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a container `<div>` with two child `<div>`s inside: 'main-content' and 'sidebar'.",
        "Use Flexbox or Float to position them side-by-side.",
        "Instead of pixel widths, give 'main-content' a width of `70%` and 'sidebar' a width of `25%`.",
        "Give the sidebar a `margin-left` of `5%` to create a gutter.",
        "Resize your browser window and watch how the columns maintain their proportions."
      ]
    },
    {
      id: 3,
      title: "Making Images Flexible",
      type: "homework",
      difficulty: "easy",
      instructions: [
        "Create an HTML page with a container `<div>` that has a fixed pixel width (e.g., `width: 500px;`).",
        "Place a large image (wider than 500px) inside the container.",
        "Observe how the image overflows its container.",
        "In your CSS, add the rule: `img { max-width: 100%; height: auto; }`.",
        "Refresh the page. The image should now scale down to fit perfectly within its container."
      ]
    },
    {
      id: 4,
      title: "Simple Mobile-First Card",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a 'card' component with an image, a title, and some text.",
        "Style it for mobile first: the card should take up `100%` width, and the image, title, and text should stack vertically.",
        "Now, add a media query: `@media (min-width: 600px) { ... }`.",
        "Inside the media query, change the card's layout. For example, set a `max-width` on the card and use Flexbox or Grid to place the image to the left of the text content.",
        "This demonstrates the mobile-first approach: simple by default, more complex on larger screens."
      ]
    }
  ]
};
