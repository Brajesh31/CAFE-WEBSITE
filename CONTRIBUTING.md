# Contributing

Thank you for considering a contribution to Café Delight. Contributions should improve the page's clarity, functionality, accessibility, responsive behavior, or maintainability.

## Before you begin

- Read the [Code of Conduct](CODE_OF_CONDUCT.md), [Security Policy](SECURITY.md), and [License](LICENSE).
- Review the [README](README.md), [Roadmap](ROADMAP.md), and relevant docs.
- Open an issue before a substantial redesign or new backend/service integration.
- Verify the source and permitted use of any image, logo, font, or other visual asset before committing it.

## Local workflow

This is a static project with no package manager or build step. Start a local server from the repository root with **python -m http.server 8000** and open **http://localhost:8000**.

Edit **index.html** for content and markup, **css/styles.css** for styling, and **js/script.js** for browser interactions. Note that the current page does not link to the stylesheet's actual path and does not load the JavaScript file; account for these issues when reviewing behavior.

## Contribution expectations

- Use semantic HTML and preserve a clear heading hierarchy.
- Keep content responsive and test narrow and wide browser viewports.
- Give informative images meaningful alternative text.
- Ensure controls have keyboard-accessible behavior and visible focus.
- Do not add a form, analytics, external library, or data collection without documenting its purpose, privacy impact, and deployment needs.
- Do not present sample branch information or testimonials as verified facts.
- Keep secrets and personal data out of the repository.

## Pull requests

Explain the user-facing change, include screenshots for visible changes, describe browsers and viewport sizes checked, and state any manual checks performed. For new assets, provide source and license/attribution details. For any form or external service, document how it handles data, consent, errors, and security. Keep each pull request focused and reviewable.
