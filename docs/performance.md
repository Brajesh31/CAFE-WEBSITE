# ⚡ Performance and Asset Optimization

The page loads Bootstrap CSS/JS from jsDelivr and Roboto from Google Fonts. It uses local JPGs and an unreferenced PNG. The menu image CSS currently sets width to 200%, which can cause overflow.

## Improvements
1. Resize and compress images for actual display dimensions.
2. Consider modern image formats with suitable fallbacks.
3. Set image width/height attributes to reduce layout shift.
4. Lazy-load below-the-fold images where appropriate.
5. Remove unused external resources.
6. Use a reviewed stable Bootstrap version.
7. Consolidate duplicate inline and stylesheet rules.
8. Test slow networks and CDN failure.

Measure with browser tools or Lighthouse. Record URL, device, network profile, date, and commit. Do not invent scores.
