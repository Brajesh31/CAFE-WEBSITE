# 🤝 Contributing to Café Delight

Thank you for helping improve this project. Contributions should make the static website more useful, accessible, responsive, accurate, or maintainable.

## 1. Before starting

- Read the [Code of Conduct](CODE_OF_CONDUCT.md) and [Security Policy](SECURITY.md).
- Check the [README](README.md), [Roadmap](ROADMAP.md), and [Known Issues](docs/known-issues.md).
- Open an issue before large redesigns, dependency upgrades, or new service integrations.
- Do not assume the sample café copy, addresses, testimonials, or images are verified or licensed for reuse.

## 2. Local setup

This repository is a static website. No package installation or build step is required.

```bash
git clone https://github.com/Brajesh31/CAFE-WEBSITE.git
cd CAFE-WEBSITE
python -m http.server 8000
```

Open http://localhost:8000.

## 3. Where to make changes

| Area | File or directory |
|---|---|
| Page structure and content | index.html |
| Responsive presentation | css/styles.css |
| Browser interactions | js/script.js |
| Local images | images/ |
| Technical documentation | docs/ |
| GitHub issue and review workflow | .github/ |

Keep HTML semantic, CSS responsive, and JavaScript progressive-enhancement focused. Avoid adding a framework just to make a small static page more complicated.

## 4. Code and content standards

- Use meaningful names and consistent indentation.
- Keep changes focused and avoid unrelated formatting churn.
- Preserve exact path capitalization.
- Add useful alt text to meaningful images; use empty alt text for decorative images.
- Keep keyboard focus visible and respect reduced-motion preferences.
- Do not fabricate customer reviews, locations, business hours, prices, ingredients, or awards.
- Record image/font provenance, license, and attribution requirements.
- Never commit secrets, personal data, or private customer communications.
- Do not wire a form to an untrusted endpoint or expose credentials in browser JavaScript.

## 5. Pull request checklist

- [ ] Explain the user problem and the change.
- [ ] Keep the pull request focused.
- [ ] Preserve existing project assets unless removal is justified.
- [ ] Test at narrow mobile and desktop widths.
- [ ] Test navigation and interactive controls.
- [ ] Check keyboard access, focus, and reduced motion.
- [ ] Inspect browser console and Network panel.
- [ ] Include before/after screenshots for visual changes.
- [ ] Document new dependencies and external services.
- [ ] Update README, relevant docs, and changelog.
- [ ] State what was not tested.

## 6. Adding integrations

A real contact form, ordering system, reservation service, analytics provider, or backend changes the privacy and security boundary. Before implementation, document data collected, purpose, receiver, authentication, server-side validation, abuse prevention, retention/deletion, access control, error behavior, deployment, and tests.

## 7. Review

Maintainers may request changes where behavior, content accuracy, accessibility, security, licensing, or documentation is unclear. Technical disagreement is welcome when it remains evidence-based and respectful.