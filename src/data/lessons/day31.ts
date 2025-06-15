
import { DayLesson } from "../types";

export const day31: DayLesson = {
  day: 31,
  title: "CSS Fonts and Text",
  category: "CSS Basics",
  description: "Learn how to control typography on the web by styling fonts and text with CSS properties.",
  learningObjectives: [
    "Apply different font families using `font-family`.",
    "Control font size, weight, and style.",
    "Align text, control spacing, and apply decorations.",
    "Understand how to use web fonts with `@font-face`."
  ],
  detailedExplanation: `
Typography is a critical part of web design. CSS gives you extensive control over how fonts and text appear.

## Font Properties

### font-family
Specifies a prioritized list of fonts. The browser will use the first font in the list that it has available.
\\\`\\\`\\\`css
p {
  /* Starts with a specific font, falls back to more generic ones */
  font-family: "Roboto", Arial, sans-serif;
}
\\\`\\\`\\\`

### font-size
Controls the size of the text. You can use pixels (\`px\`), ems (\`em\`), rems (\`rem\`), or percentages (\`%\`).
\\\`\\\`\\\`css
h1 { font-size: 2.5rem; } /* 2.5 times the root font size */
p { font-size: 16px; }
\\\`\\\`\\\`

### font-weight
Sets how thick or thin characters are. It can be a keyword (\`normal\`, \`bold\`) or a number (100-900).
\\\`\\\`\\\`css
.heavy { font-weight: 700; } /* Same as 'bold' */
.light { font-weight: 300; }
\\\`\\\`\\\`

### font-style
Used to specify italic text.
\\\`\\\`\\\`css
.emphasis { font-style: italic; }
\\\`\\\`\\\`

### font (shorthand)
Combines multiple font properties into one line. The order is important: \`font-style font-weight font-size/line-height font-family\`.
\\\`\\\`\\\`css
body {
  font: italic 700 16px/1.5 "Helvetica", sans-serif;
}
\\\`\\\`\\\`

## Text Properties

### text-align
Specifies the horizontal alignment of text.
\\\`\\\`\\\`css
.center-text { text-align: center; }
.right-text { text-align: right; }
.justified-text { text-align: justify; }
\\\`\\\`\\\`

### text-decoration
Adds or removes decorations from text (like underlines).
\\\`\\\`\\\`css
a { text-decoration: none; } /* Removes underline from links */
.strike { text-decoration: line-through; }
\\\`\\\`\\\`

### line-height
Sets the distance between lines of text. Using a unitless value is recommended.
\\\`\\\`\\\`css
p { line-height: 1.6; } /* 1.6 times the font size */
\\\`\\\`\\\`

### letter-spacing and word-spacing
Adjusts the space between characters or words.
\\\`\\\`\\\`css
h1 { letter-spacing: 2px; }
p { word-spacing: 4px; }
\\\`\\\`\\\`

## Using Web Fonts with @font-face
You can use custom fonts that aren't installed on the user's computer. First, get the font files (e.g., from Google Fonts).

\\\`\\\`\\\`css
@font-face {
  font-family: "MyCustomFont";
  src: url("my-custom-font.woff2") format("woff2"),
       url("my-custom-font.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: "MyCustomFont", sans-serif;
}
\\\`\\\`\\\`
This allows for unique and consistent branding across all users' devices.
`,
  keyTerms: [
    { term: "font-family", definition: "A CSS property that specifies a prioritized list of one or more font family names for an element." },
    { term: "font-weight", definition: "A CSS property that sets how thick or thin characters in text should be displayed." },
    { term: "text-align", definition: "A CSS property that specifies the horizontal alignment of text in an element." },
    { term: "line-height", definition: "A CSS property that sets the amount of space used for lines, such as in text." },
    { term: "@font-face", definition: "A CSS at-rule used to specify a custom font to be displayed on a web page." },
    { term: "sans-serif", definition: "A generic font family that describes fonts without decorative strokes (or 'serifs') at the ends of characters." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Typography Styling",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an HTML file with an <h1> and a few <p> elements.",
        "In a <style> block, set a different `font-family` for the h1 and the p tags.",
        "Set the `font-size` of the h1 to be larger than the p tags.",
        "Make the h1 `font-weight` bold."
      ]
    },
    {
      id: 2,
      title: "Article Text Formatting",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create an HTML file structured like a simple article.",
        "Set a base `font-size` and `line-height` on the <body> for readability.",
        "Use `text-align: justify` on the article's paragraphs.",
        "Use `text-decoration: none` to remove underlines from any links within the article.",
        "Use `letter-spacing` to slightly expand the characters in your headings."
      ]
    },
    {
      id: 3,
      title: "Using a Custom Google Font",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Go to Google Fonts (fonts.google.com) and choose a font (e.g., 'Lato' or 'Montserrat').",
        "Follow Google's instructions to get the `@import` URL or <link> tag for the font.",
        "Add the font to your HTML/CSS file.",
        "Apply the custom font to the `font-family` of your body or another element.",
        "Experiment with different weights of the font that you imported."
      ]
    },
    {
      id: 4,
      title: "Blog Post Typography",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a mock blog post with a title, author, date, and several paragraphs of text.",
        "Choose two different fonts (one for headings, one for body text) and apply them.",
        "Set an ideal `line-height` for the body text (e.g., 1.5 to 1.7).",
        "Style a blockquote element within the post with an `italic` font style and a distinct look."
      ]
    },
    {
      id: 5,
      title: "Full Typography System",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a style guide page in HTML.",
        "Define styles for h1, h2, h3, p, a, and list elements.",
        "Use a combination of `font-family`, `font-size`, `font-weight`, and `line-height` to create a clear visual hierarchy.",
        "Use the `font` shorthand property where appropriate.",
        "Add a section demonstrating different text alignments and decorations."
      ]
    }
  ]
};
