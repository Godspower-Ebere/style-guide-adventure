import { DayLesson } from "../types";

export const day43: DayLesson = {
  day: 43,
  title: "Mastering Media Queries: Precision Responsive Control",
  category: "Responsive Design",
  description: "A deep dive into Media Queries, the CSS feature that allows you to apply styles based on device characteristics like viewport width, orientation, and resolution.",
  learningObjectives: [
    "Write effective media queries using `min-width` and `max-width` for mobile-first design.",
    "Combine multiple conditions in a single media query using logical operators.",
    "Target specific media types like `screen` and `print`.",
    "Understand how to choose logical breakpoints based on content, not devices.",
    "Apply media queries for more than just layout, including typography and element visibility."
  ],
  detailedExplanation: `
Media queries are the cornerstone of responsive design. They are CSS rules that apply styles only when certain conditions about the device or viewport are met.

### The Syntax of a Media Query
A media query is composed of a media type and can have one or more media features as expressions.

\`\`\`css
@media media-type and (media-feature: value) {
  /* CSS rules to apply when the conditions are true */
  .selector {
    property: value;
  }
}
\`\`\`

### Media Types
You can target the rules to specific types of media. The most common are:
- **\`screen\`**: For computer screens, tablets, smart-phones, etc. (This is the most common).
- **\`print\`**: For paged material and for documents viewed on screen in print preview mode.
- **\`all\`**: Suitable for all devices. This is the default if no type is specified.

### Media Features (The Conditions)
This is where the power lies. You test for specific features of the user's device.
- **\`width\` / \`height\`**: The width/height of the viewport. You almost always use the prefixed versions:
  - **\`min-width\`**: Applies styles when the viewport is *wider* than the specified value. **(Key for Mobile-First)**.
  - **\`max-width\`**: Applies styles when the viewport is *narrower* than the specified value. **(Used for Desktop-First)**.
- **\`orientation\`**: Can be \`portrait\` (height is greater than or equal to width) or \`landscape\` (width is greater than height).
- **\`aspect-ratio\`**: The ratio of width to height (e.g., \`16/9\`).
- **\`hover\`**: Can the user's primary input mechanism hover over elements? Useful for distinguishing touch vs. mouse devices. (\`hover: hover\` vs \`hover: none\`).

### Logical Operators
You can create more complex queries using logical operators.
- **\`and\`**: Combines multiple media features. All conditions must be true.
  \`\`\`css
  /* Applies when the viewport is between 600px and 900px wide */
  @media (min-width: 600px) and (max-width: 900px) { ... }
  \`\`\`
- **`,` (comma)**: Acts as a logical OR. The styles apply if *any* of the queries match.
  \`\`\`css
  /* Applies on very small screens OR when printing */
  @media (max-width: 480px), print { ... }
  \`\`\`
- **\`not\`**: Negates an entire media query.
  \`\`\`css
  /* Applies to everything EXCEPT color screens */
  @media not screen and (color) { ... }
  \`\`\`

### Choosing Breakpoints: Content is King
A **breakpoint** is the point at which your layout "breaks" and needs a media query to adjust it.
- **Don't use device-specific breakpoints!** (e.g., 320px for iPhone, 768px for iPad). There are too many devices, and they change constantly.
- **Instead, let your content determine the breakpoints.** Start with your mobile layout, slowly widen your browser, and when the layout starts to look awkward (e.g., line lengths get too long, elements look stretched), that's where you should add a breakpoint.

**Common Starting Points (but adjust as needed!):**
- **~600px**: Small tablets and large phones (landscape).
- **~900px**: Tablets (portrait) and small desktops.
- **~1200px**: Standard desktop screens.

Example of Mobile-First implementation:
\`\`\`css
/* Base styles for all screen sizes (mobile) */
.nav-links {
  display: none; /* Hide navigation links */
}

/* Styles for screens 600px and wider */
@media (min-width: 600px) {
  .hamburger-menu {
    display: none; /* Hide the mobile menu icon */
  }
  .nav-links {
    display: flex; /* Show the full navigation */
  }
}
\`\`\`
`,
  keyTerms: [
    { term: "Media Query", definition: "A CSS technique for applying styles based on the characteristics of the device rendering the content, such as viewport width." },
    { term: "Breakpoint", definition: "The point (a specific viewport width) at which a website's content and design adapt to provide an optimal user experience." },
    { term: "min-width", definition: "A media feature that applies styles if the viewport is wider than or equal to the specified value. The foundation of mobile-first design." },
    { term: "max-width", definition: "A media feature that applies styles if the viewport is narrower than or equal to the specified value." },
    { term: "Media Type", definition: "A category of device, such as `screen` or `print`, that a media query can target." },
    { term: "Mobile-First", definition: "An approach where base styles target narrow screens, and media queries using `min-width` add complexity for larger screens." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Background Color Change",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML page with a `<body>` tag.",
        "Set the default background color of the body to `lightblue`.",
        "Write a media query that targets screens with a `min-width` of `768px`.",
        "Inside this media query, change the background color of the body to `lightgreen`.",
        "Resize your browser to see the color change when you cross the 768px threshold."
      ]
    },
    {
      id: 2,
      title: "Mobile-First Navigation",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an HTML header with a 'Logo' and a button with a hamburger icon inside. Also include a `<nav>` with a list of links.",
        "In your base CSS (mobile styles), hide the `<nav>` element (`display: none;`).",
        "Write a media query for a `min-width` of `800px`.",
        "Inside the media query, hide the hamburger button (`display: none;`) and show the `<nav>` (`display: block;` or `display: flex;`).",
        "Style the `<nav>` links to appear horizontally on the larger screen."
      ]
    },
    {
      id: 3,
      title: "Creating a Print Stylesheet",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Take any previous exercise with a header, navigation, main content, and footer.",
        "Create a new media query: `@media print { ... }`.",
        "Inside this query, hide the header, navigation, and footer elements, as they are not useful on a printed page.",
        "Change the font color of all text to black (`color: #000 !important;`) and the background of the page to white to save ink.",
        "Remove any box shadows.",
        "Open your browser's Print Preview to test your print styles."
      ]
    },
    {
      id: 4,
      title: "Responsive Typography",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a page with an `<h1>` and several `<p>` tags.",
        "Set a base `font-size` for the `<html>` element (e.g., `16px`). Use `rem` units for typography throughout your page.",
        "Create a media query for screens wider than `600px`. Inside it, increase the base font size on the `<html>` element to `18px`.",
        "Create another media query for screens wider than `1200px`. Increase the `<html>` font size to `20px`.",
        "Because you used `rem` units, all the text on your page will scale up proportionally and harmoniously at each breakpoint."
      ]
    }
  ]
};
