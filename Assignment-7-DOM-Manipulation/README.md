# Assignment 7 — DOM Manipulation

Solutions for the supplied Assignment 7. Each question has its own self-contained JavaScript file. The scripts create their own interface and use browser DOM APIs, HTML, CSS, and core JavaScript (ES6+); no frameworks or external JavaScript libraries are used.

## Questions

1. Dynamic Product List Manager — Add/edit/delete products with event delegation; inline edits auto-save on blur.
2. Live Character Counter — 100-character textarea, yellow warning at 20 characters remaining, red at the limit, preventDefault(), and Reset.
3. Multi-Step Form — Name, email, and password steps with Next/Back validation and a final summary.
4. Theme Switcher — Light, Dark, and Blue themes using setAttribute() and body[data-theme].
5. Image Gallery with Modal Preview — Six images, enlarged modal, backdrop close, and stopPropagation() inside the modal.
6. Real-Time Student Table Filter — Case-insensitive filtering on the input event and “No results found” message.
7. Mouse Path & Coordinates Logger — 400×400 box, live clientX/clientY, and red dots on double-click.
8. Custom Dropdown — Button/list-based dropdown (no select tag), selected option updates, capturing-phase outside-click close.
9. Form Submit Blocker with Live Errors — preventDefault(), required name, email containing @, password minimum six characters, live error clearing, and success message.

## How to run in a browser

These files use document and browser DOM APIs, so run them in a browser rather than plain Node.js.

1. Open a blank HTML page in a browser, or create an index.html file.
2. Open Developer Tools (usually F12) and select Console.
3. Copy one JavaScript file into the console and press Enter. Alternatively, include one script in HTML, for example: <script src="q1-dynamic-product-list-manager.js"></script>.
4. Run one question at a time. Reload the page before testing another file so each example starts cleanly.

## Notes

- Q5 loads demonstration pictures from picsum.photos and needs an internet connection.
- Q3 validates a non-empty name and a valid email; the assignment does not specify a password rule for that form, so it checks that a password is provided. Q9 follows the explicit six-character password requirement.
- DOM examples cannot run as-is in a plain Node.js environment without a DOM implementation.
