# 🐞 Known Issues and Implementation Gaps

This register reflects source inspection after the current website cleanup. It is not a browser audit.

| ID | Priority | Status | Finding | Next action |
|---|---|---|---|---|
| CAFE-001 | High | Fixed | Stylesheet href pointed to the wrong directory | Updated to css/styles.css |
| CAFE-002 | High | Fixed | Coffee image used incorrect filename case | Updated to images/Coffee.jpg |
| CAFE-003 | Medium | Fixed | Local navigation script was not loaded | Added deferred script reference |
| CAFE-004 | Medium | Fixed | Menu images used 200% width | Constrained images to card width |
| CAFE-005 | High | Mitigated | Contact form looked functional but had no receiver | Added explicit demo notice and disabled submit |
| CAFE-006 | Medium | Open | Bootstrap 5.3.0-alpha1 is an alpha dependency | Upgrade and regression-test stable release |
| CAFE-007 | Medium | Open | Branch and testimonial content is unverified sample copy | Obtain owner approval or replace |
| CAFE-008 | Medium | Open | Image asset provenance and licenses are not recorded | Verify source and usage rights |
| CAFE-009 | Low | Improved | Hero styles were duplicated inline and in CSS | Consolidated hero presentation in stylesheet |

## Verification still required

- [ ] Run the page in current Chrome, Firefox, and Safari.
- [ ] Test 320px, 375px, 768px, 1024px, and desktop widths.
- [ ] Confirm carousel and collapsed navbar behavior.
- [ ] Run keyboard-only navigation and screen-reader spot checks.
- [ ] Confirm image licenses and content accuracy.
- [ ] Test static deployment on a case-sensitive host.

A source-level fix is not proof of a successful cross-browser test.