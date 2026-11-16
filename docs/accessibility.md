# ♿ Accessibility Guidelines

This is a practical checklist, not an accessibility certification.

## Semantics
Use one descriptive page-level `h1`, logical section headings, appropriate landmarks (`header`, `nav`, `main`, `footer`), links for navigation, and buttons for actions.

## Images
Meaningful images need concise alt text. Decorative images should use empty alt text. Verify usage rights and avoid repeating adjacent text in alt descriptions.

## Keyboard
All controls must be reachable by Tab and Shift+Tab. Focus indicators must remain visible. Test Bootstrap's collapsed navigation and carousel with keyboard input.

## Forms
Associate every field with a label. Identify required fields in text and markup. Give actionable validation feedback and announce success/failure once a submission receiver exists. Do not collect personal data without a defined purpose and notice.

## Color and motion
Check text contrast, avoid communicating state by color alone, and respect reduced-motion preferences for custom movement or smooth scrolling.

## Manual checklist
- [ ] Full page navigable by keyboard.
- [ ] Focus visible on all interactive elements.
- [ ] 200% zoom remains usable.
- [ ] Heading order and landmarks reviewed.
- [ ] Images have suitable alt text.
- [ ] Text and controls have sufficient contrast.
- [ ] Mobile and tablet widths checked.
- [ ] Carousel controls have understandable labels.
