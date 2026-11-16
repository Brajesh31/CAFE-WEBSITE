# 🔐 Security Policy

## Supported scope

Café Delight is a static front-end project. It has no application server, authentication, database, payment processing, or working contact-message delivery. Security reports may concern unsafe browser code, compromised dependencies, workflow permissions, or a future integration.

## Current external dependencies and data boundary

- Bootstrap CSS and JavaScript are loaded from jsDelivr.
- Roboto is loaded from Google Fonts.
- The contact form is a visual demonstration. Its submit control is disabled and it does not send or store messages.
- The repository does not intentionally collect visitor information.
- No application secrets are required in browser code.

Third-party resource requests are still visible to those providers. Review their policies before using the site in a sensitive context.

## Reporting

Please do not publish exploit details or personal information in a public issue. Use [GitHub private vulnerability reporting](https://github.com/Brajesh31/CAFE-WEBSITE/security/advisories/new) if enabled. If unavailable, contact the maintainer privately through GitHub and request a private reporting channel.

Include:
- Affected path, dependency, or commit.
- Reproduction steps and expected versus actual behavior.
- Potential impact and practical exploitability.
- Suggested mitigation, if known.

Do not include credentials, tokens, or real visitor data.

## Response and disclosure

The maintainer will make a reasonable effort to acknowledge, investigate, and coordinate remediation. This repository has no formal security response SLA. Avoid public disclosure until a fix or coordinated disclosure plan is agreed.

## Requirements for future integrations

Any form receiver, analytics, API, account, ordering, or payment feature must document its data flow and threat model. Validate input server-side, keep credentials server-side, use HTTPS, apply least-privilege access, prevent abuse, and define retention and deletion behavior.