# 🧪 Testing and Quality Assurance

## Current status
No build pipeline, package scripts, automated unit tests, or browser automation is configured. The following is a manual verification baseline.

## Smoke test
1. Run `python -m http.server 8000` from the repository root.
2. Open `http://localhost:8000`.
3. Inspect browser console and Network requests.
4. Confirm CSS and every image load.
5. Test navbar collapse on mobile.
6. Test carousel controls with pointer and keyboard.
7. Confirm every section link has a target.
8. Check widths 320px, 375px, 768px, 1024px, and desktop.
9. Confirm contact form is not represented as working.
10. Repeat from the exact deployment directory structure.

## Test matrix
| Area | Expected |
|---|---|
| Page request | Root HTML served |
| Stylesheet | Exact local CSS path resolves |
| Images | Correct path and filename case |
| Navbar | Opens and closes |
| Anchors | Navigate to intended section |
| Carousel | Previous/next changes slide |
| Keyboard | Logical order and visible focus |
| Responsive | No unexpected horizontal scroll |
| Form | No false claim of message delivery |
| CDN failure | Impact understood and documented |

## Evidence
Record browser, OS, viewport, commit SHA, exact steps, actual results, and failures in the test report template. Never mark an unrun check as passed.
