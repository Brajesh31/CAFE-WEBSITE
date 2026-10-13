# Development

## Local preview

This site uses plain HTML, CSS, and JavaScript. Start **python -m http.server 8000** from the repository root and open **http://localhost:8000**. No package installation or compilation is configured.

## Source organization

- Change **index.html** for sections, text, and asset references.
- Change **css/styles.css** for custom presentation.
- Change **js/script.js** for browser interactions.
- Store page images under **images/** and preserve their exact filename casing.
- The root **image.png** currently is not referenced by the page.

## Existing implementation details

The Bootstrap CDN supplies the navbar collapse and testimonial carousel behavior. Custom smooth scrolling is written in **js/script.js**, but the HTML does not load that file. The CSS file is **css/styles.css**, while the current link points to a root-level **styles.css**. The coffee card similarly uses lowercase **coffee.jpg** while the tracked file is **Coffee.jpg**.

The contact form has no real submission behavior. Do not describe it as a working contact channel. Before wiring it to a service, define validation, consent, data handling, error states, and an accessible success response.

## Review guidance

Check the page at desktop and mobile viewport sizes, with and without network access to external CDNs. Confirm every asset request succeeds on a case-sensitive path. Use keyboard navigation for the navbar and carousel, verify visible focus, and check image alt text. Verify branch and testimonial copy before presenting it as factual.

There is no automated test, linter, or build script in this repository. Record manual checks actually performed.
