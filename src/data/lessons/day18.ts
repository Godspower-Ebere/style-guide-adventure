
import { DayLesson } from "../types";

export const day18: DayLesson = {
  day: 18,
  title: "HTML Audio and Video",
  category: "HTML5 Features",
  description: "Master HTML5 multimedia elements to embed and control audio and video content in web pages.",
  learningObjectives: [
    "Learn to embed audio files using the HTML5 audio element.",
    "Master video embedding with the HTML5 video element.",
    "Understand multimedia attributes for controls, autoplay, and loops.",
    "Create accessible multimedia content with fallbacks and captions."
  ],
  detailedExplanation: `
HTML5 introduced native multimedia support, eliminating the need for plugins like Flash for audio and video content.

## The Audio Element
The audio element embeds sound content in web pages:

\`\`\`html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
\`\`\`

### Audio Attributes
- **controls**: Shows play/pause, volume, and progress controls
- **autoplay**: Automatically starts playing (use carefully!)
- **loop**: Repeats the audio when it ends
- **muted**: Starts with audio muted
- **preload**: How much to buffer (none, metadata, auto)

\`\`\`html
<audio controls loop preload="metadata">
  <source src="background-music.mp3" type="audio/mpeg">
  <source src="background-music.wav" type="audio/wav">
  Audio not supported in your browser.
</audio>
\`\`\`

## The Video Element
The video element embeds video content:

\`\`\`html
<video width="640" height="360" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser does not support the video element.
</video>
\`\`\`

### Video Attributes
- **width/height**: Set video dimensions
- **poster**: Image shown before video plays
- **controls**: Shows video control interface
- **autoplay**: Automatically starts playing
- **loop**: Repeats video when finished
- **muted**: Required for autoplay in most browsers

\`\`\`html
<video width="800" height="450" controls poster="thumbnail.jpg">
  <source src="presentation.mp4" type="video/mp4">
  <source src="presentation.webm" type="video/webm">
  <p>Your browser doesn't support HTML5 video. 
     <a href="presentation.mp4">Download the video</a> instead.
  </p>
</video>
\`\`\`

## Multiple Source Formats
Provide multiple formats for better browser compatibility:

\`\`\`html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogv" type="video/ogg">
  <p>Video not supported. Try a modern browser.</p>
</video>
\`\`\`

## Accessibility with Subtitles
Add captions and subtitles using the track element:

\`\`\`html
<video controls>
  <source src="lecture.mp4" type="video/mp4">
  <track kind="subtitles" src="subtitles-en.vtt" srclang="en" label="English">
  <track kind="subtitles" src="subtitles-es.vtt" srclang="es" label="Spanish">
  <track kind="captions" src="captions.vtt" srclang="en" label="English Captions" default>
</video>
\`\`\`

## Responsive Multimedia
Make audio and video responsive:

\`\`\`html
<style>
  .responsive-video {
    width: 100%;
    height: auto;
    max-width: 800px;
  }
  
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
  }
  
  .video-container video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<div class="video-container">
  <video controls class="responsive-video">
    <source src="responsive-video.mp4" type="video/mp4">
  </video>
</div>
\`\`\`

## Complete Multimedia Page Example
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Multimedia Showcase</title>
  <style>
    .media-section {
      margin: 2rem 0;
      padding: 1rem;
      border: 1px solid #ddd;
    }
    
    video, audio {
      width: 100%;
      max-width: 600px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Multimedia Content Demo</h1>
  </header>

  <main>
    <section class="media-section">
      <h2>Featured Video</h2>
      <video controls poster="video-thumbnail.jpg">
        <source src="featured-video.mp4" type="video/mp4">
        <source src="featured-video.webm" type="video/webm">
        <track kind="subtitles" src="subtitles.vtt" srclang="en" label="English">
        <p>Your browser doesn't support video playback.</p>
      </video>
      <p>This video demonstrates our latest product features.</p>
    </section>

    <section class="media-section">
      <h2>Podcast Episode</h2>
      <audio controls preload="metadata">
        <source src="podcast-episode.mp3" type="audio/mpeg">
        <source src="podcast-episode.ogg" type="audio/ogg">
        <p>Your browser doesn't support audio playback.</p>
      </audio>
      <p>Episode 42: The Future of Web Development</p>
    </section>

    <section class="media-section">
      <h2>Background Ambience</h2>
      <audio controls loop>
        <source src="ambient-sounds.mp3" type="audio/mpeg">
        <p>Relaxing background sounds for focus.</p>
      </audio>
    </section>
  </main>
</body>
</html>
\`\`\`
    `,
  keyTerms: [
    { term: "Audio Element", definition: "HTML5 element for embedding sound content directly in web pages." },
    { term: "Video Element", definition: "HTML5 element for embedding video content with native browser support." },
    { term: "Source Element", definition: "Child element that specifies multiple media resources for audio/video elements." },
    { term: "Track Element", definition: "Element for adding text tracks like subtitles and captions to video content." },
    { term: "Multimedia Fallback", definition: "Alternative content shown when the browser doesn't support audio/video elements." },
    { term: "Preload Attribute", definition: "Attribute that controls how much media content to buffer before playing." }
  ],
  exercises: [
    {
      id: 1,
      title: "Basic Audio Player",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create 'audio-player.html' with a simple audio player.",
        "Add an audio element with controls enabled.",
        "Use placeholder audio files or royalty-free music URLs.",
        "Include fallback text for unsupported browsers.",
        "Test the audio controls in your browser."
      ]
    },
    {
      id: 2,
      title: "Video Showcase",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create 'video-showcase.html' with embedded video content.",
        "Add a video element with poster image and controls.",
        "Set appropriate width and height dimensions.",
        "Include multiple source formats for compatibility.",
        "Add a descriptive paragraph below each video."
      ]
    },
    {
      id: 3,
      title: "Multimedia Gallery",
      type: "classwork",
      difficulty: "hard",
      instructions: [
        "Create 'multimedia-gallery.html' with mixed media content.",
        "Include both audio and video elements on the same page.",
        "Use different attributes (loop, autoplay, muted) appropriately.",
        "Make the multimedia elements responsive with CSS.",
        "Ensure all content has proper fallback messages."
      ]
    },
    {
      id: 4,
      title: "Podcast Website",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create 'podcast-site.html' for a podcast show website.",
        "Include multiple audio episodes with descriptive information.",
        "Add episode titles, descriptions, and publication dates.",
        "Use appropriate preload settings for better performance.",
        "Style the page to look like a professional podcast platform."
      ]
    },
    {
      id: 5,
      title: "Educational Video Platform",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create 'video-learning.html' for an educational platform.",
        "Include multiple video lessons with different topics.",
        "Add subtitles or captions using track elements.",
        "Create a responsive layout that works on different screen sizes.",
        "Include course progress indicators and lesson descriptions."
      ]
    }
  ]
};
