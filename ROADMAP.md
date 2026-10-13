# Roadmap

This roadmap lists possible improvements and does not set a delivery schedule.

## Current baseline

The repository has one HTML page, one custom CSS file, one JavaScript file, and local image assets. The page uses Bootstrap and Google Fonts from external CDNs. The custom CSS link points to the wrong path, the menu coffee image casing differs from the committed filename, the JavaScript file is not loaded, and the contact form has no submission behavior.

## Potential improvements

### Fix page resources

- Link **index.html** to **css/styles.css**.
- Correct the coffee image filename reference to match **images/Coffee.jpg**, or rename the asset consistently.
- Load **js/script.js** with an appropriate script tag if the smooth-scroll behavior is desired.
- Verify all assets and styles on a case-sensitive static host.

### Improve content and accessibility

- Replace placeholder branch details and testimonials with verified content or label them as examples.
- Add responsive checks, keyboard focus behavior, and reduced-motion handling.
- Review image alternative text, form validation, and semantics.
- Improve contrast and ensure the hero text remains readable over its background.

### Add real contact behavior

- Choose a contact provider or backend before wiring the form.
- Validate input, provide clear success/error states, disclose data handling, and add spam prevention.
- Document retention and privacy behavior before collecting visitor information.

### Asset provenance

- Record the source and license for every image and vector asset.
- Replace material that cannot be cleared for reuse.
- Consider self-hosting pinned frontend dependencies if offline operation or tighter control is needed.

## Suggesting changes

Open an issue with the user need, expected scope, accessibility impact, and any new external service or asset.
