# Rock Paper Scissors

A browser-based Rock Paper Scissors game built as part of The Odin Project Foundations course.

The original console game has been expanded into a graphical interface. The player starts a five-round match, chooses a move with the on-page buttons, and sees the result and updated score directly in the page.

## Features

* Graphical interface for the full game
* Rock, Paper, and Scissors selection buttons
* Random computer choice
* Five-round matches
* Live round and score display
* A message showing the result of each round
* Controls disabled when the match is complete
* Restart button that resets the game state
* Dark and light theme toggle
* Responsive button layout for mobile screens
* Footer and favicon

## Main topics practiced

* JavaScript functions and return values
* Global state and variable scope
* Event listeners and callback functions
* DOM selection and manipulation
* Updating page content with `textContent`
* Showing, hiding, enabling, and disabling buttons
* Working with `event.currentTarget`
* Objects and bracket notation for the winning-move rules
* Arrays and iteration with `forEach()`
* Random number generation with `Math.random()`
* Conditional logic and guard clauses
* Resetting and restarting application state
* Theme switching with `classList.toggle()`
* CSS custom properties
* Flexbox and media queries
* Button hover, active, and disabled states

## What I learned

This project helped me understand how to connect JavaScript game logic to a graphical interface. Instead of collecting choices through browser prompts, the game now responds to button clicks and renders its score and messages in the page.

I also practiced controlling the different stages of a game: resetting the scores, starting a match, accepting one choice per round, detecting the final round, and preventing additional moves after the game ends. Building the interface also gave me more experience with responsive CSS, reusable color variables, and changing themes by applying a class to the root element.

## Technologies used

* HTML
* CSS
* JavaScript

## Icon credits

* Favicon: [Punch Fist Hit SVG Vector](https://www.svgrepo.com/svg/307071/punch-fist-hit) from SVG Repo, licensed under CC0.
