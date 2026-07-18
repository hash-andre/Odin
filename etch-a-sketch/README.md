# Etch-a-Sketch

A responsive browser drawing toy built as part of The Odin Project Foundations course.

The project creates a square drawing grid with JavaScript. It includes a rainbow mode, a progressive darkening mode, and pointer controls that work with mouse, touch, and pen input.

## Features

* Dynamically generated 16 × 16 starting grid
* Custom grid sizes from 1 × 1 up to 100 × 100
* Rainbow mode with a new random color for every painted cell
* Drawing mode that progressively darkens a cell by 10% until it is fully black
* Mutually exclusive mode buttons with a clear active state
* Mouse drawing by clicking and dragging across the grid
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
* Tracking per-cell darkness with `data-*` attributes and CSS `opacity`
* Validating numeric user input
* Loops and DOM collections
* CSS custom properties
* Flexbox and responsive sizing
* `aspect-ratio`, `calc()`, and `clamp()`
* Media queries and mobile-friendly controls
* Preventing touch scrolling inside an interactive canvas

## What I learned

This project helped me practice building an interface whose content is generated entirely with JavaScript. The selected grid size is stored in a CSS custom property, allowing every cell to be calculated so that the grid remains square at different resolutions.

I also learned how mouse and touch interaction differ. Drawing on a phone requires pointer events, drawing-state tracking, pointer capture, and disabled touch scrolling inside the canvas. Each cell also stores its own darkness level, allowing repeated interactions to increase its opacity in ten predictable steps.

## Technologies used

* HTML
* CSS
* JavaScript

## Resources

* [MDN: `opacity` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
* draw-mypaint favicon from [SVG Repo](https://www.svgrepo.com/svg/454415/draw-mypaint-software), licensed under [CC0 License](https://www.svgrepo.com/page/licensing/).
