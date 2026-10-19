# Café Delight

Café Delight is a small static café landing-page prototype made with HTML, CSS, Bootstrap, and a short JavaScript file. It presents an about section, sample menu cards, branch copy, customer testimonials, and a contact form layout.

## Current state

This repository is a visual prototype, not a functioning café service. There is no order system, booking flow, backend, database, analytics, or contact-mail integration. The contact form has no action, method, or JavaScript handler, so it does not submit messages.

A few source paths currently prevent the intended local behavior:

- **index.html** links to **styles.css** at the repository root, while the stylesheet is **css/styles.css**. The custom stylesheet therefore does not load through the current link.
- The menu references **images/coffee.jpg**, but the committed file is **images/Coffee.jpg**. This mismatch can fail on case-sensitive hosts.
- **js/script.js** contains smooth-scroll behavior but is not included by **index.html**, so that script does not run.
- The page loads Bootstrap CSS and JavaScript from a CDN and Roboto from Google Fonts; those parts need network access.

These are documented as findings; this documentation update does not change the page implementation. See [Troubleshooting](docs/troubleshooting.md) and [Roadmap](ROADMAP.md).

## Contents

- **index.html** — single-page site structure and Bootstrap CDN references.
- **css/styles.css** — custom styling for navigation, hero, menu, branches, testimonials, and contact sections.
- **js/script.js** — optional smooth scrolling for navbar links; currently not loaded by the page.
- **images/** — café background, coffee, pastry, and sandwich imagery.
- **image.png** — an additional image asset not referenced by the HTML or CSS.
- **docs/** — architecture, setup, development, deployment, API, data, troubleshooting, and FAQ documentation.

## View locally

No Node.js or package installation is required. From the repository root, start a static server:

    python -m http.server 8000

Open **http://localhost:8000**. Keep the server running while using the page. Opening **index.html** directly may also render basic markup, but an HTTP server is a more reliable way to check relative paths.

The page uses external CDN links for Bootstrap and Google Fonts. If the browser is offline or those hosts are blocked, their CSS, font, or interactive components may not load.

## Page sections

The navbar links to About, Menu, Branches, Testimonials, and Contact. The menu shows cappuccino, pastries, and sandwiches. Branch names and addresses and testimonial quotes are sample page copy; verify them before presenting them as real café locations or customer statements.

## Asset rights

The project code and documentation use the MIT License; see [LICENSE](LICENSE). The repository does not record the source or license for the bundled café images. The MIT license does not grant rights to those image files. Verify image provenance and permission before reusing or redistributing them.

## Documentation

- [Architecture](docs/architecture.md)
- [Installation](docs/installation.md)
- [Development](docs/development.md)
- [Deployment](docs/deployment.md)
- [API](docs/api.md)
- [Database and persistence](docs/database.md)
- [Troubleshooting](docs/troubleshooting.md)
- [FAQ](docs/faq.md)
- [Contributing](CONTRIBUTING.md)
- [Security policy](SECURITY.md)
- [Support](SUPPORT.md)
- [Roadmap](ROADMAP.md)

## Maintainer

Brajesh Kumar — GitHub [@brajesh31](https://github.com/brajesh31).

Last updated: 2026-10-19 23:27 UTC
