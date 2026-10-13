# API and external requests

## Project API

The repository defines no application API, server routes, webhooks, database endpoints, or background jobs. It is a static HTML page.

The contact form is not an API client: it has no action URL, named fields, JavaScript submit handler, or backend integration. Clicking its submit button does not deliver the entered message to the maintainer.

## Browser requests

| Request | Purpose | Defined in |
| --- | --- | --- |
| Static document and local assets | Loads HTML, images, and resources from the static host. | **index.html**, **css/**, **images/** |
| Bootstrap CSS and JavaScript | Layout utilities, navbar collapse, and carousel behavior. | jsDelivr URLs in **index.html** |
| Roboto font stylesheet/font files | Provides the page font. | Google Fonts link in **index.html** |

The page makes no project-owned fetch, XMLHttpRequest, or form-post call. The **js/script.js** file only registers smooth scrolling for navbar links and is not currently included by the HTML.

## Future integration

If a backend, contact service, analytics provider, or other API is added, document the endpoint, data sent, authentication, privacy impact, error handling, and secret storage. Keep private credentials on the server, never in frontend code.
