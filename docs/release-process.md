# 🚀 Release and Publication Process

## Before publishing
- [ ] Confirm target branch and commit.
- [ ] Review changed files and preserve required images.
- [ ] Confirm root `index.html` exists.
- [ ] Verify stylesheet, script, and image paths including case.
- [ ] Inspect locally via a static HTTP server.
- [ ] Test navbar, carousel, keyboard, and mobile layout.
- [ ] Review console/network errors.
- [ ] Verify branch and menu information with the owner.
- [ ] Confirm testimonial authenticity and permissions.
- [ ] Review external dependencies and asset licenses.
- [ ] Ensure contact behavior is accurately described.
- [ ] Update README, docs, and changelog.

## Publication
Deploy the repository root to a static host. Preserve relative directory structure. Configure HTTPS and intended domain through the host. Do not expose credentials in repository files.

## After publication
- [ ] Test deployed URL in a private browser window.
- [ ] Check a mobile viewport.
- [ ] Confirm images and fonts load.
- [ ] Confirm anchor navigation works.
- [ ] Test real form behavior only if a receiver exists.
- [ ] Record deployed commit and date.

Retain a known-good deployment for rollback.
