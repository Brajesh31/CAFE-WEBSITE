# Database

## Current storage model

Café Delight is a static front-end demonstration. It has no database, server-side application, or persistence layer.

The repository contains a single HTML page, local CSS and JavaScript assets, and image files. Bootstrap and Google Fonts are requested from external CDNs when the page loads. Neither those services nor the browser cache acts as application storage.

The contact form is currently presentation-only markup. It has no configured endpoint, submission method, field names, or client-side handler, so it does not save or deliver a visitor's message. Do not tell visitors that messages are being received until a working submission flow exists and has been tested.

## Data and privacy implications

- No visitor account, order, reservation, or message data is collected by application code in this repository.
- The page does not define a cookie or analytics integration.
- A future hosting provider, CDN, or third-party asset provider may process ordinary request metadata under its own policies.
- Do not put credentials or private configuration in this public static bundle. Anything shipped to a browser can be inspected by visitors.

## Adding persistence

If the site needs bookings, orders, or contact submissions, add a server-side service or a carefully selected hosted form/API provider. Define the data collected, retention, access controls, validation, abuse protection, and deletion process before collecting real personal information.

Keep privileged credentials on the server. A static page must never connect to a database using an administrator credential embedded in HTML or JavaScript. Document the new service, environment configuration, schema, backup approach, and local development workflow in this guide and the related API, deployment, and security documentation.
