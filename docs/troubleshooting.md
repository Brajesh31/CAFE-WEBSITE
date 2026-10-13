# Troubleshooting

## The page appears without its styles

The HTML currently links to `styles.css`, while the stylesheet is stored at `css/styles.css`. Update the link in `index.html` to the actual relative path, then reload with the browser cache disabled. In developer tools, inspect the Network panel for a failed CSS request.

## A coffee image is missing on a case-sensitive host

The page references `images/coffee.jpg`, but the tracked file is named `images/Coffee.jpg`. Windows file systems commonly hide this capitalization mismatch; Linux static hosts generally do not. Change the HTML path to match the tracked name exactly (or rename the asset and update every reference).

## JavaScript behavior does not run

The repository has `js/script.js`, but `index.html` does not include it. Add a script reference only if the page needs its behavior, use a path relative to `index.html`, and confirm the browser loads it without a console error. Bootstrap's carousel and responsive navigation use the Bootstrap bundle loaded by the page; the local script is separate.

## The navigation or carousel does not respond

Check browser developer tools for failed Bootstrap CDN requests, JavaScript errors, or blocked network access. The current page depends on a Bootstrap 5.3.0-alpha1 CDN asset. A production release should use a supported, reviewed version and follow the provider's integrity and loading guidance.

## Web fonts do not look as expected

Google Fonts are loaded remotely. If the request is blocked or unavailable, the browser falls back to the CSS font stack. Confirm connectivity and inspect the font request in the Network panel; keep a readable local fallback.

## The contact form does not send anything

This repository has no form endpoint or submission handler. The form is only a visual element. A working form requires a backend or trusted form service, server-side validation, abuse protection, and clear user feedback. Do not enter real personal information into a demonstration form.

## Changes do not appear after deployment

Confirm the hosting service publishes the repository root, including `index.html`, `css/`, `js/`, and `images/`. Ensure paths and filename capitalization match exactly. Then clear the browser cache or test in a private window.
