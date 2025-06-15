
import { DayLesson } from "../types";

export const day26: DayLesson = {
  day: 26,
  title: "HTML Character Encoding",
  category: "HTML5 Features", 
  description: "Master HTML character encoding, internationalization, and proper text handling for global web applications.",
  learningObjectives: [
    "Understand character encoding and its importance in web development.",
    "Learn to properly handle international characters and symbols.",
    "Master UTF-8 encoding and HTML entities.",
    "Build multilingual and internationally accessible web pages."
  ],
  detailedExplanation: `
Character encoding defines how characters are represented in computer memory and transmitted over networks. Proper encoding is essential for displaying international content correctly.

## Character Encoding Basics
### UTF-8 Encoding
UTF-8 is the recommended character encoding for web pages:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Character Encoding Example</title>
</head>
<body>
  <p>This page uses UTF-8 encoding</p>
</body>
</html>
\`\`\`

## HTML Entities
HTML entities represent special characters that have meaning in HTML:

### Reserved Characters
\`\`\`html
<!-- Less than and greater than -->
<p>HTML tags use &lt; and &gt; symbols</p>
<p>To display <code>&lt;p&gt;</code> literally, use entities</p>

<!-- Ampersand -->
<p>Johnson &amp; Johnson</p>

<!-- Quotes -->
<p>He said &quot;Hello world&quot;</p>
<p>It's &apos;quoted&apos; text</p>

<!-- Non-breaking space -->
<p>Price:&nbsp;$29.99</p>
\`\`\`

### Common Symbol Entities
\`\`\`html
<!-- Copyright and trademark -->
<p>&copy; 2024 Company Name &trade;</p>
<p>&reg; Registered trademark</p>

<!-- Currency symbols -->
<p>&dollar;100 &euro;85 &pound;75 &yen;10000</p>

<!-- Mathematical symbols -->
<p>2 &times; 3 = 6</p>
<p>10 &divide; 2 = 5</p>
<p>&plusmn; 5 degrees</p>

<!-- Arrows -->
<p>&larr; Back | Next &rarr;</p>
<p>&uarr; Up | Down &darr;</p>
\`\`\`

## International Characters
### Accented Characters
\`\`\`html
<!-- French -->
<p>Café, naïve, résumé</p>
<p>Caf&eacute;, na&iuml;ve, r&eacute;sum&eacute;</p>

<!-- Spanish -->
<p>Señor, niño, año</p>
<p>Se&ntilde;or, ni&ntilde;o, a&ntilde;o</p>

<!-- German -->
<p>Müller, Größe, weiß</p>
<p>M&uuml;ller, Gr&ouml;&szlig;e, wei&szlig;</p>
\`\`\`

### Language-Specific Characters
\`\`\`html
<!-- Greek letters -->
<p>Alpha: &alpha;, Beta: &beta;, Gamma: &gamma;</p>
<p>Pi: &pi;, Omega: &omega;</p>

<!-- Mathematical notation -->
<p>Infinity: &infin;</p>
<p>Sum: &sum;</p>
<p>Integral: &int;</p>
\`\`\`

## Numeric Character References
You can also use numeric codes for characters:

\`\`\`html
<!-- Decimal format -->
<p>Copyright: &#169;</p>
<p>Euro: &#8364;</p>

<!-- Hexadecimal format -->
<p>Copyright: &#x00A9;</p>
<p>Euro: &#x20AC;</p>
\`\`\`

## Multilingual Web Pages
### Language Declaration
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Multilingual Page</title>
</head>
<body>
  <!-- English content -->
  <section lang="en">
    <h2>Welcome</h2>
    <p>Hello, welcome to our website!</p>
  </section>
  
  <!-- Spanish content -->
  <section lang="es">
    <h2>Bienvenido</h2>
    <p>¡Hola, bienvenido a nuestro sitio web!</p>
  </section>
  
  <!-- French content -->
  <section lang="fr">
    <h2>Bienvenue</h2>
    <p>Bonjour, bienvenue sur notre site web!</p>
  </section>
</body>
</html>
\`\`\`

## Complete Character Encoding Example
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>International Character Showcase</title>
  <style>
    body { 
      font-family: Arial, sans-serif; 
      line-height: 1.6; 
      margin: 20px;
    }
    .language-section { 
      border: 1px solid #ccc; 
      margin: 10px 0; 
      padding: 15px; 
    }
    .symbols { 
      font-size: 1.2em; 
    }
  </style>
</head>
<body>
  <header>
    <h1>International Text &amp; Symbols</h1>
    <p>&copy; 2024 Global Web Solutions &trade;</p>
  </header>
  
  <main>
    <section class="language-section" lang="en">
      <h2>English</h2>
      <p>Hello! This is a demonstration of proper character encoding.</p>
      <p>Price: &dollar;99.99 &ndash; Special offer!</p>
    </section>
    
    <section class="language-section" lang="es">
      <h2>Spanish</h2>
      <p>¡Hola! Esta es una demostración de codificación de caracteres.</p>
      <p>Señor González visitó el año pasado.</p>
    </section>
    
    <section class="language-section" lang="fr">
      <h2>French</h2>
      <p>Bonjour! Voici une démonstration d'encodage de caractères.</p>
      <p>Le café coûte 5&euro; &ndash; très raisonnable!</p>
    </section>
    
    <section class="language-section" lang="de">
      <h2>German</h2>
      <p>Hallo! Dies ist eine Demonstration der Zeichenkodierung.</p>
      <p>Herr Müller sagte: &quot;Das ist größartig!&quot;</p>
    </section>
    
    <section class="symbols">
      <h3>Mathematical &amp; Scientific Symbols</h3>
      <p>Temperature: 25&deg;C &plusmn; 2&deg;</p>
      <p>Formula: E = mc&sup2;</p>
      <p>Greek: &alpha;, &beta;, &gamma;, &pi;, &omega;</p>
      <p>Math: &sum;, &int;, &infin;, &radic;, &ne;</p>
    </section>
    
    <section>
      <h3>Navigation Symbols</h3>
      <p>&larr; Previous | Home &uarr; | Next &rarr;</p>
      <p>&laquo; First | Last &raquo;</p>
    </section>
    
    <section>
      <h3>HTML Code Examples</h3>
      <p>To display &lt;p&gt; tags literally, use HTML entities.</p>
      <p>The &amp; symbol must be escaped as &amp;amp;</p>
      <code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2024 &ndash; All rights reserved &trade;</p>
  </footer>
</body>
</html>
\`\`\`
    `,
  keyTerms: [
    { term: "Character Encoding", definition: "System that defines how characters are represented in computer memory and transmitted over networks." },
    { term: "UTF-8", definition: "Unicode encoding that supports all international characters and is the standard for web pages." },
    { term: "HTML Entities", definition: "Special codes that represent characters that have special meaning in HTML or are difficult to type." },
    { term: "Numeric Character Reference", definition: "Method of representing characters using their Unicode code point numbers." },
    { term: "Unicode", definition: "International standard for character encoding that supports text in most world languages." },
    { term: "ASCII", definition: "Basic character encoding standard that covers English letters, numbers, and common symbols." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic HTML Entities",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create a new HTML file called 'html-entities.html' with complete HTML5 structure including proper charset declaration.",
        "Add a title 'HTML Entities Practice' and create content about HTML coding.",
        "Write a paragraph explaining how to create HTML tags, using HTML entities to show literal <p>, <div>, and <span> tags.",
        "Create another paragraph about a fictional company 'Johnson & Smith' using the proper entity for the ampersand.",
        "Add a paragraph with a quoted sentence using HTML entities for both double and single quotes.",
        "Include copyright and trademark symbols using HTML entities.",
        "Add a price list using dollar sign entity and non-breaking spaces for proper formatting.",
        "Create a simple math equation using multiplication and division entities.",
        "Test your page to ensure all entities display correctly in the browser."
      ]
    },
    {
      id: 2,
      title: "International Characters",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'international-text.html' with proper HTML5 structure and UTF-8 charset.",
        "Build a page showcasing international names and places from different countries.",
        "Create sections for different languages: Spanish, French, German, and Italian.",
        "In each section, include 3-4 names or place names with proper accented characters.",
        "Use both direct UTF-8 characters and HTML entities to show the difference.",
        "Add a section with common international symbols like currency symbols (euro, pound, yen).",
        "Include mathematical symbols like degree, plus-minus, and multiplication signs.",
        "Add navigation arrows using HTML entities for previous/next buttons.",
        "Create a comparison table showing the same text with and without proper encoding.",
        "Test your page to ensure all international characters display correctly across different browsers."
      ]
    },
    {
      id: 3,
      title: "Multilingual Website Section",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'multilingual-site.html' with complete HTML5 structure and proper encoding setup.",
        "Design a website section that displays the same content in 4 different languages: English, Spanish, French, and German.",
        "Use proper lang attributes for each language section to help screen readers and search engines.",
        "Create a business introduction paragraph for each language with appropriate accented characters and punctuation.",
        "Include contact information with international phone number formats and address styles.",
        "Add a pricing section with different currency symbols appropriate for each region.",
        "Implement a language switcher menu using flag symbols or language names.",
        "Include proper meta tags in the head section for international SEO.",
        "Add CSS styling to clearly separate each language section.",
        "Use HTML entities where appropriate and direct UTF-8 characters where suitable.",
        "Include mathematical or scientific notation that works across all language sections.",
        "Test thoroughly to ensure all characters display correctly and the page is accessible.",
        "Validate your HTML to ensure proper structure and encoding compliance."
      ]
    },
    {
      id: 4,
      title: "Character Reference Guide",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'character-reference.html' as a comprehensive guide to HTML character encoding.",
        "Build a reference page organized into categories: Reserved Characters, Currency, Mathematical Symbols, and International Characters.",
        "In the Reserved Characters section, show how to display HTML tags literally using entities.",
        "Create a Currency section displaying symbols for dollar, euro, pound, yen, and other major currencies.",
        "Add a Mathematical Symbols section with common symbols like multiplication, division, plus-minus, infinity, and Greek letters.",
        "Include an International Characters section with examples from Spanish, French, German, and Italian.",
        "Create comparison tables showing the character, HTML entity, numeric reference, and description.",
        "Add a practical examples section showing real-world usage in addresses, business names, and technical content.",
        "Include a troubleshooting section explaining common encoding problems and solutions.",
        "Add proper navigation within the page using anchor links to each section.",
        "Style the page professionally with CSS to make it a useful reference tool.",
        "Test all character references to ensure they display correctly and provide accurate information."
      ]
    },
    {
      id: 5,
      title: "Global E-commerce Product Page",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'global-ecommerce.html' simulating an international e-commerce product page with proper character encoding.",
        "Design a product page for a fictional electronics store that serves multiple countries.",
        "Include product descriptions in at least 4 languages with proper lang attributes and character handling.",
        "Create pricing sections with different currencies and proper formatting for international markets.",
        "Add customer reviews section with international names containing accented characters.",
        "Include technical specifications using mathematical symbols, degrees, and scientific notation.",
        "Implement a contact section with international address formats and phone number styles.",
        "Add legal text including copyright, trademark, and registered symbols.",
        "Create navigation elements with directional arrows and special symbols.",
        "Include product dimensions using proper measurement symbols and international units.",
        "Add shipping information for different countries with appropriate currency and address formats.",
        "Implement proper meta tags for international SEO and social media sharing.",
        "Use a combination of HTML entities and direct UTF-8 characters appropriately throughout.",
        "Add comprehensive CSS styling to create a professional, internationally-aware design.",
        "Test the page thoroughly across different browsers and ensure all international content displays correctly and remains accessible."
      ]
    }
  ]
};
