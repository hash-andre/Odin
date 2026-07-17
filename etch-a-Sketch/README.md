# Etch-a-Sketch

A responsive browser drawing toy built as part of The Odin Project Foundations course.

The project creates a square drawing grid with JavaScript. Moving the pointer across the grid paints each visited cell with a random color, while touch users can draw by pressing and dragging a finger across the canvas.

## Features

* Dynamically generated 16 × 16 starting grid
* Custom grid sizes from 1 × 1 up to 100 × 100
* Random color generated for every painted cell
* Mouse drawing by moving across the grid
* Phone and tablet drawing with press-and-drag pointer controls
* Clear button that resets the canvas
* Responsive square canvas that adapts to the viewport
* Etch-a-Sketch-inspired frame and controls

## Main topics practiced

* Creating and removing DOM elements with JavaScript
* Event listeners and callback functions
* Pointer events for mouse and touch input
* Pointer capture for continuous touch drawing
* Finding the cell under the pointer with `elementFromPoint()`
* Managing drawing state
* Generating random hexadecimal colors
* Validating numeric user input
* Loops and DOM collections
* CSS custom properties
* Flexbox and responsive sizing
* `aspect-ratio`, `calc()`, and `clamp()`
* Media queries
* Preventing touch scrolling inside an interactive canvas

## What I learned

This project helped me practice building an interface whose content is generated entirely with JavaScript. The selected grid size is stored in a CSS custom property, allowing every cell to be calculated so that the grid remains square at different resolutions.

I also learned how mouse and touch interaction differ. Hover events work well on a computer, while drawing on a phone requires pointer events, drawing-state tracking, pointer capture, and disabled touch scrolling inside the canvas. This made the same drawing experience usable across desktop and mobile devices.

## Technologies used

* HTML
* CSS
* JavaScript
