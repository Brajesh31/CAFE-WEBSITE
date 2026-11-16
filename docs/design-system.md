# 🎨 Design System and UI Guidelines

This guide records the current visual direction and proposes maintainable rules. It is not an approved brand book.

## Current direction
- Dark fixed navigation.
- Large photographic hero.
- Light neutral content areas.
- Bootstrap grid, cards, and carousel.
- Roboto font with sans-serif fallback.

## Suggested reusable tokens

```css
:root {
  --color-ink: #212529;
  --color-surface: #ffffff;
  --color-muted: #f4f4f4;
  --color-dark: #333333;
  --font-body: "Roboto", Arial, sans-serif;
  --content-width: 1140px;
  --radius-card: 0.625rem;
}
```

These values are proposals, not current CSS declarations.

## Layout principles
Use Bootstrap's grid consistently. Avoid fixed oversized widths and transforms that create horizontal scrolling. Keep section spacing and content width coherent. Ensure fixed navigation does not cover anchor targets.

## Components
- Navigation must show visible keyboard focus.
- Menu images must fit their cards and use consistent dimensions.
- Testimonials must be genuine and permissioned.
- Forms need labels, required-field guidance, validation, and accessible result feedback. The current form is not connected to a receiver.

## Responsive review
Check narrow mobile, tablet, and desktop. Verify stacked cards, readable text, and no horizontal overflow.
