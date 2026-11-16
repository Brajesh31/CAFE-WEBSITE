# 🔐 Security Overview

## Current attack surface
The site is static and has no server, database, login, payment, or API. Risks are primarily external frontend dependencies, future form integration, third-party assets, and repository workflow integrity.

## Current limits
- No application secrets are required.
- Public CDN assets are loaded by the browser.
- No server-side form validation exists because no receiver exists.
- No CSP or Subresource Integrity policy is configured.

## Safe development
1. Never commit credentials, tokens, visitor details, or personal data.
2. Never put private keys in browser JavaScript.
3. Pin and review CDN dependencies; use integrity metadata where appropriate.
4. Validate future form inputs on the server.
5. Use HTTPS and trusted hosting.
6. Restrict workflow permissions to the minimum.
7. Review dependency and workflow changes.
8. Document third-party assets.

A future contact implementation must define storage, access, retention, spam prevention, consent, and deletion. Report vulnerabilities using `SECURITY.md`.
