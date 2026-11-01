# Assignment 6 — jQuery Lab

**Student:** Amirlan Kuan  
**Group:** SE-2528

A responsive five-page demonstration of jQuery selectors, effects, DOM manipulation, forms and animations. Task 11 is an accordion menu. Original landscape SVG assets are included.

## Run
Open index.html in a browser. An internet connection is needed for the jQuery 3.7.1 CDN and optional Google Fonts. No build or installation is required. A system font fallback is provided.

## Pages and tasks
- index.html: tasks 0–1; ready callback, console message, ID/class/tag selectors, text(), html(), css().
- effects.html: tasks 2–4; hide/show/toggle, fadeIn/fadeOut/fadeToggle, slideUp/slideDown/slideToggle.
- dom.html: tasks 5–7; append/prepend/remove, attr(), live name/email with val() and text().
- animations.html: tasks 8–10; basic, queued, and combined animate() calls. Reset buttons stop animations and restore initial values.
- project.html: task 11; accordion with slide effects and synchronized aria-expanded attributes.

## Publish with GitHub Pages
1. Create a GitHub repository (for example jquery-assignment-6).
2. Upload the CONTENTS of this folder to the repository root, including assets and .nojekyll.
3. Open Settings → Pages. Select Deploy from a branch, main, /(root), then Save.
4. Wait for deployment and open the URL shown by GitHub Pages.
5. Submit the repository link in Moodle before the deadline. Add the deployed website URL to the repository About field.

## Alternative: Netlify
Drag this folder into Netlify's manual deployment area, or connect its GitHub repository. For this static site, leave the build command empty and use the repository root as the publish directory.

## Manual verification
Visit all five navbar links. Check the console ready message. Try every button, clear the list completely, type special characters into the form, replay and reset animations, and open/close accordion sections using both mouse and keyboard. Test at a narrow mobile width.

## Defense notes
- The ready callback waits for the DOM before binding events.
- ID selectors start with #, class selectors with a dot; tag selectors use the tag name.
- text() inserts plain text, while html() interprets HTML. User input is displayed with text().
- attr() reads or changes an HTML attribute; val() reads form values.
- append() adds at the end; prepend() adds at the beginning; remove() deletes an element.
- animate() interpolates numeric CSS properties. Chained calls queue sequentially; properties in one object animate simultaneously.
- stop(true, true) clears pending effects and finishes the active effect, preventing a long queue after repeated clicks.
- The accordion updates aria-expanded and closes other panels before toggling the selected panel.

No backend is used and form data is not transmitted or stored.
