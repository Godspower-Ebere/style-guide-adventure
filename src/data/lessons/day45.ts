
import { DayLesson } from "../types";

export const day45: DayLesson = {
  day: 45,
  title: "Crafting Complex Animations with Keyframes",
  category: "CSS Animations",
  description: "Go beyond simple transitions by learning how to create complex, multi-step animations using @keyframes, giving you full control over the animation sequence.",
  learningObjectives: [
    "Clearly differentiate between CSS Transitions and CSS Animations and know when to use each.",
    "Define custom, multi-step animation sequences using the `@keyframes` at-rule with percentage-based steps.",
    "Apply animations to elements using `animation-name` and `animation-duration`.",
    "Gain fine-grained control over animation playback with properties like `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.",
    "Master the `animation` shorthand property for concise and readable animation declarations."
  ],
  detailedExplanation: `
While transitions are perfect for simple state changes, CSS animations give you the power to create complex, self-running sequences without needing a trigger like a hover. This is achieved with the \`@keyframes\` at-rule.

### Transitions vs. Animations
- **Transitions**: Need a trigger (state change). They go from a start state to an end state. Simple and efficient for UI feedback.
- **Animations**: Can run automatically on page load. Can have multiple steps (\`0%\`, \`50%\`, \`100%\`). More powerful for complex sequences.

### The \`@keyframes\` At-Rule
This is where you define the steps of your animation. You give the animation a name and specify the CSS properties for each step of the sequence.

\`\`\`css
/* The animation is named "pulse" */
@keyframes pulse {
  /* At the beginning of the animation */
  from { /* 'from' is the same as 0% */
    transform: scale(1);
    opacity: 1;
  }
  /* At the end of the animation */
  to { /* 'to' is the same as 100% */
    transform: scale(1.1);
    opacity: 0.7;
  }
}
\`\`\`

You can also define intermediate steps using percentages:
\`\`\`css
@keyframes slide-and-fade {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  70% {
    transform: translateX(10px);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
\`\`\`

### Applying the Animation
Once you've defined your \`@keyframes\`, you use various \`animation-*\` properties to apply it to an element.

- \`animation-name\`: The name of the \`@keyframes\` rule you want to use.
- \`animation-duration\`: How long one cycle of the animation should take.
- \`animation-iteration-count\`: How many times the animation should repeat. Can be a number or \`infinite\`.
- \`animation-direction\`: The direction of the animation.
  - \`normal\`: (Default) Plays forward.
  - \`reverse\`: Plays backward.
  - \`alternate\`: Plays forward then backward.
  - \`alternate-reverse\`: Plays backward then forward.
- \`animation-timing-function\`: Speed curve, just like in transitions (\`ease\`, \`linear\`, etc.).
- \`animation-fill-mode\`: What styles are applied before the animation starts and after it ends.
  - \`forwards\`: Retains the styles of the last keyframe after the animation finishes.
  - \`backwards\`: Applies the styles of the first keyframe before the animation starts (useful with \`animation-delay\`).
  - \`both\`: Applies both \`forwards\` and \`backwards\` rules.
- \`animation-delay\`: A delay before the animation starts.
- \`animation-play-state\`: Allows you to pause (\`paused\`) or resume (\`running\`) an animation.

### The \`animation\` Shorthand
As with transitions, there's a shorthand for animations.
**\`animation: [name] [duration] [timing-function] [delay] [iteration-count] [direction] [fill-mode] [play-state];\`**

\`\`\`css
.loader {
  /* This loader will spin infinitely */
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
\`\`\`
`,
  keyTerms: [
    { term: "@keyframes", definition: "The CSS at-rule used to define the stages and styles of an animation sequence." },
    { term: "animation-name", definition: "Specifies the name of the @keyframes rule to apply to an element." },
    { term: "animation-duration", definition: "Defines the time it takes for one cycle of an animation to complete." },
    { term: "animation-iteration-count", definition: "Sets the number of times an animation sequence should be played. Can be 'infinite'." },
    { term: "animation-direction", definition: "Specifies whether an animation should play forwards, backwards, or alternate between directions." },
    { term: "animation-fill-mode", definition: "Determines the styles an element has when the animation is not playing (i.e., before it starts or after it ends)." }
  ],
  exercises: [
    {
      id: 1,
      title: "Simple Fading Text",
      type: "classwork",
      difficulty: "easy",
      instructions: [
        "Create an `<h1>` with some text.",
        "Define a `@keyframes` rule named `fadeIn`.",
        "In the `fadeIn` rule, set `from { opacity: 0; }` and `to { opacity: 1; }`.",
        "Apply this animation to the `<h1>`. Give it an `animation-name` of `fadeIn`, an `animation-duration` of `2s`, and an `animation-fill-mode` of `forwards` (so it stays visible).",
        "The text should fade in smoothly when the page loads."
      ]
    },
    {
      id: 2,
      title: "Infinite Loading Spinner",
      type: "classwork",
      difficulty: "medium",
      instructions: [
        "Create a `<div>` for the spinner.",
        "Style it to be a circle with a thick border, but make one side of the border transparent (e.g., `border: 4px solid #f3f3f3; border-top: 4px solid #3498db;`).",
        "Define a `@keyframes` rule named `spin` that animates `transform: rotate()` from `0deg` to `360deg`.",
        "Apply the `spin` animation to your div with a `1s` duration, a `linear` timing function, and an `infinite` iteration count.",
        "You've created a classic loading spinner!"
      ]
    },
    {
      id: 3,
      title: "Attention-Seeking Shake",
      type: "homework",
      difficulty: "medium",
      instructions: [
        "Create a button or a card element.",
        "Define a `@keyframes` rule named `shake`.",
        "The `shake` animation should have multiple steps: at `0%` and `100%`, `transform` is `translateX(0)`. At `10%`, `30%`, `50%`, `70%`, `90%`, `transform` is `translateX(-10px)`. At `20%`, `40%`, `60%`, `80%`, `transform` is `translateX(10px)`.",
        "Create a class named `.is-shaking` that applies the `shake` animation for a short duration (e.g., `0.8s`).",
        "Use JavaScript to add the `.is-shaking` class to your element when you click another button. (Optional: To make it re-triggerable, you'll need to listen for the `animationend` event to remove the class)."
      ]
    },
    {
      id: 4,
      title: "Bouncing Ball",
      type: "homework",
      difficulty: "hard",
      instructions: [
        "Create a `<div>` styled as a circle (the ball) and position it at the top of a container.",
        "Define a `@keyframes` rule named `bounce`.",
        "The animation should control the `transform: translateY()` property and the `animation-timing-function` at different keyframes.",
        "At `0%` and `20%`, the ball should be at `translateY(0)` with a timing function of `ease-out` (the drop).",
        "At `50%`, the ball should be at `translateY(300px)` (the bottom) with a timing function of `ease-in`.",
        "At `80%` and `100%`, it should bounce back up to `translateY(0)` with `ease-out`.",
        "Apply this animation to the ball with an infinite iteration count. This is tricky but creates a very realistic bouncing effect."
      ]
    }
  ]
};
