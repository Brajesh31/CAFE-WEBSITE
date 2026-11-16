# 📚 Café Delight Documentation Hub

This directory documents the current static website, its implementation, design conventions, quality expectations, and operating limits.

> The repository does not include a backend, API, database, ordering, booking, payment, or working contact-message service.

## 🧭 Recommended reading paths

**New contributors:** [Project overview](project-overview.md) → [Installation](installation.md) → [Project structure](project-structure.md) → [Development](development.md).

**Design and frontend:** [Architecture](architecture.md) → [Design system](design-system.md) → [Accessibility](accessibility.md) → [Performance](performance.md).

**Maintainers:** [Known issues](known-issues.md) → [Testing](testing.md) → [Deployment](deployment.md) → [Release process](release-process.md).

**Content owners:** [Content guide](content-guide.md) → [Privacy](privacy.md) → [SEO](seo.md).

## 📖 Documentation catalogue

| Guide | Purpose |
|---|---|
| [Project overview](project-overview.md) | Purpose, audience, scope, current feature inventory |
| [Architecture](architecture.md) | Browser rendering, local assets, external dependencies |
| [Project structure](project-structure.md) | Directory map and file responsibilities |
| [Design system](design-system.md) | Visual direction, layout and component guidance |
| [Accessibility](accessibility.md) | Semantics, keyboard, contrast, motion, responsive checks |
| [Content guide](content-guide.md) | Menu, branch, testimonial, image and font verification |
| [Installation](installation.md) | Local static preview |
| [Development](development.md) | Editing workflow and conventions |
| [Deployment](deployment.md) | Static hosting guidance |
| [Known issues](known-issues.md) | Source-level defects, fixes and remaining gaps |
| [Testing](testing.md) | Manual quality checks and evidence |
| [Security](security.md) | Current threat surface and safe integration practices |
| [Privacy](privacy.md) | Data collection boundaries and future form requirements |
| [SEO](seo.md) | Metadata and verified business information |
| [Performance](performance.md) | Image, font and rendering optimization |
| [Maintenance](maintenance.md) | Routine upkeep and documentation ownership |
| [Release process](release-process.md) | Pre-release and post-deployment checklist |
| [API](api.md) | Current integration inventory |
| [Database](database.md) | Explicit absence of a data store |
| [FAQ](faq.md) | Common project questions |
| [Troubleshooting](troubleshooting.md) | Local preview and deployment issues |
| [Templates](templates/README.md) | ADR, test, content approval and release templates |
| [Diagrams](assets/README.md) | Architecture, page-flow and content workflow diagrams |
| [Decision records](decisions/README.md) | Architecture decision record index |
| [Review reports](reports/README.md) | Evidence-based QA and review records |

## 🧱 Current implementation snapshot

| Capability | State |
|---|---|
| Single-page landing page | Implemented |
| Responsive CSS and menu cards | Implemented at source level |
| Bootstrap navbar and testimonial carousel | CDN-dependent |
| In-page navigation enhancement | Implemented |
| Contact message delivery | Not implemented, demo submit is disabled |
| Online ordering and reservations | Not implemented |
| API, database and admin panel | Not implemented |
| Browser automation | Not configured |
| CI local resource and whitespace check | Configured |

## 🗺️ Diagrams

- [Static architecture](assets/architecture.svg)
- [Visitor page flow](assets/page-flow.svg)
- [Content verification workflow](assets/content-workflow.svg)

The content workflow is guidance, not an existing CMS or automated approval service.

## 🧾 Project boundaries

The site is intended to remain a lightweight static project unless an actual requirement justifies a backend. Do not add infrastructure simply to make the repository appear more complex. If a contact, ordering, or booking service is proposed, document its data flow, privacy, security, accessibility, deployment and maintenance impact before implementation.
