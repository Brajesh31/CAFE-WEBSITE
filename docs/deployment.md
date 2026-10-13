# Deployment

## Hosting model

Café Delight is a static page. A static hosting service can publish the repository root, where **index.html** is located. There is no backend process, database, server-side environment, or build artifact.

## Publish checklist

1. Serve the repository root as the site's document root.
2. Preserve the **css/** and **images/** directories and exact path capitalization.
3. Confirm the stylesheet path in **index.html** matches **css/styles.css**.
4. Confirm the coffee image path matches the tracked **images/Coffee.jpg** filename.
5. Decide whether to load **js/script.js** and add the correct script reference if its behavior is required.
6. Check the result on a case-sensitive static host.
7. Verify the Bootstrap and Google Fonts CDN requests and decide whether external dependencies are acceptable.

The current stylesheet and coffee image references contain path/case mismatches, and the JavaScript file is not loaded. These should be corrected in the source before treating the deployed page as polished.

## Contact form

The visible form is not connected to a submission service and should not be presented as a working contact channel. A real contact feature needs a trusted backend or form provider, server-side validation, spam prevention, privacy disclosures, and safe error handling. Never put private service credentials in browser JavaScript.

## Security and content

The page has no configured CSP or Subresource Integrity. It loads CSS and JavaScript from an external CDN. Review the external resources, pin an approved version, and consider self-hosting if the deployment requires stronger supply-chain or availability control. Verify image rights and all branch/testimonial claims before publication.
