# 🐞 Known Issues and Implementation Gaps

Findings are based on source inspection, not a full cross-browser test.

| ID | Priority | Finding | Impact | Recommended action |
|---|---|---|---|---|
| CAFE-001 | High | HTML links `styles.css`; file is `css/styles.css` | Custom CSS may not load | Correct stylesheet href |
| CAFE-002 | High | HTML requests `images/coffee.jpg`; tracked file is `images/Coffee.jpg` | Fails on case-sensitive hosts | Match exact case |
| CAFE-003 | Medium | `js/script.js` is not loaded | Smooth-scroll handler does not run | Link script or remove unused code |
| CAFE-004 | Medium | Menu images have `width: 200%` | Card overflow | Constrain to 100% |
| CAFE-005 | High | Contact form has no action/method/named fields/handler | Messages are not delivered | Add a secure receiver before advertising the form |
| CAFE-006 | Medium | Bootstrap 5.3.0-alpha1 | Alpha dependency may be unsuitable for production | Upgrade and test stable version |
| CAFE-007 | Medium | Branch/testimonial details are sample content | Potentially misleading | Verify or replace |
| CAFE-008 | Low | `image.png` is unreferenced | Unclear asset purpose | Retain with explanation or remove only after owner review |
| CAFE-009 | Medium | Hero rules duplicated inline and in CSS | Maintenance complexity | Consolidate styles |

## Fix order
1. Fix stylesheet and image references.
2. Decide whether to load the local script.
3. Fix image sizing and mobile overflow.
4. Define contact requirements before implementing.
5. Review Bootstrap version and asset rights.
6. Verify all public-facing sample content.

Update this register only when a fix is committed and verified.
