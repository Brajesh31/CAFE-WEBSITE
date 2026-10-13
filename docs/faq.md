# Frequently asked questions

## What is Café Delight?

It is a small static café website built with HTML and CSS. It includes a navigation bar, a hero area, menu imagery, testimonials, and contact-form markup.

## How do I run it locally?

From the repository root, run a static file server such as `python -m http.server 8000`, then open `http://localhost:8000`. See [Installation](installation.md) for details. No package manager or build step is currently required.

## Does it have a backend or database?

No. It is a static front end. There is no application API, database, authentication, ordering, or reservation service. See [Database](database.md) and [API](api.md).

## Does the contact form deliver messages?

No. It currently has no configured form endpoint or submit handler. It must not be presented as a working contact channel until a receiving service is implemented.

## Why are the stylesheet or an image missing after publishing?

The stylesheet link does not currently match the stylesheet's `css/styles.css` location, and the coffee image reference differs in capitalization from the tracked filename `Coffee.jpg`. These mismatches can be hidden on case-insensitive local systems and fail on case-sensitive hosting. See [Troubleshooting](troubleshooting.md).

## Is JavaScript required?

Bootstrap's bundled JavaScript supports the responsive navigation and carousel. A local `js/script.js` file exists, but the HTML does not currently load it. See [Architecture](architecture.md).

## Does it use npm?

No. The page loads Bootstrap and Google Fonts from external CDNs and has no package manifest or build tooling.

## Can I use the sample business details as factual information?

Treat locations, testimonials, and other business copy as example content unless independently verified by the site owner. Update the page before using it for a real business.

## How can I contribute or report a security issue?

Read [Contributing](../CONTRIBUTING.md) before opening a change. Report vulnerabilities privately as described in [Security](../SECURITY.md).
