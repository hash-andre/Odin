# Rock Paper Scissors

A browser-based Rock Paper Scissors game built while studying The Odin Project Foundations course.

The game runs for 5 rounds and lets the player choose between Rock, Paper, and Scissors using browser prompts. It includes input validation, score tracking, a start button, a theme toggle, and basic page styling.

## Features

- Random computer choice
- Human choice through `window.prompt()`
- Input normalization with title case
- Input validation with a whitelist
- Score tracking
- 5-round game loop
- Reset logic before starting a new game
- Dark/light theme toggle
- Basic responsive centered layout
- Footer and favicon

## Main topics practiced

- JavaScript functions
- Function return values
- Global state and variable scope
- Callback functions
- Event listeners
- DOM selection with `querySelector()`
- `classList.add()`, `classList.toggle()`, and theme switching
- `window.prompt()` and `window.alert()`
- Input validation
- Guard clauses with `return`
- Arrays and `includes()`
- Random number generation with `Math.random()`
- String methods:
  - `trim()`
  - `toLowerCase()`
  - `toUpperCase()`
  - `at()`
  - `slice()`
- CSS custom properties
- Flexbox layout
- Button hover and active states
- Basic project documentation

## What I learned

This project helped me understand how JavaScript interacts with a webpage through the DOM.

The most important concepts practiced were:

- how to separate logic into smaller functions;
- how global variables can be updated by functions;
- how event listeners register callbacks that run later;
- how to validate user input before using it;
- how to avoid duplicated logic by refactoring functions;
- how CSS variables can be changed by adding or removing classes from the root element.

The game still uses `prompt()` and `alert()`, so the interface is intentionally simple. A future improvement would be replacing prompts with buttons and rendering the score directly in the page.

## Icon Credits

- Favicon: [Punch Fist Hit SVG Vector](https://www.svgrepo.com/svg/307071/punch-fist-hit) from SVG Repo, licensed under CC0.