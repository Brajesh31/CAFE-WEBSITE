# Security Policy

## Scope

Café Delight is a static page prototype. It does not currently submit contact form data, implement accounts, expose an application API, or store visitor data. Reports about unsafe code, unexpected data collection, or vulnerable third-party dependencies are welcome.

## Current data behavior

The form fields in **index.html** are not connected to a submission handler or server. Do not enter real personal information with the expectation that the page will securely deliver or store it. The project loads Bootstrap from jsDelivr and a font from Google Fonts, so page visits make requests to those external services.

The repository does not configure a Content Security Policy, Subresource Integrity attributes, analytics, or an automatic dependency update process.

## Reporting a concern

Please do not publish exploit details or private information in a public issue. Use GitHub's private vulnerability reporting for this repository if enabled: [Report a vulnerability](https://github.com/Brajesh31/CAFE-WEBSITE/security/advisories/new). If unavailable, contact the maintainer through [@brajesh31](https://github.com/brajesh31) and request a private reporting channel.

Include the affected file or dependency, steps to reproduce, likely impact, and a suggested mitigation. Never include passwords or personal information.

## Response

The maintainer will acknowledge reports when reasonably able, investigate the affected revision, and coordinate a fix and disclosure with the reporter. This individual project has no guaranteed response-time or service-level commitment.

## Safe changes

Before adding a contact service or other integration, define what data is collected, where it is sent and stored, retention and deletion behavior, access controls, and privacy notice. Keep credentials out of frontend source code.
