# ADR-0001: Retain a static-site architecture

- **Status:** Proposed
- **Date:** 2026-11-17
- **Decision owners:** Project maintainer

## Context
The current repository is a single-page HTML/CSS/JavaScript site with no data persistence or server-side behavior.

## Decision
Retain static hosting until a concrete requirement calls for a backend or framework.

## Alternatives
- Add a frontend framework: adds a build toolchain without demonstrated need.
- Add backend and database: unnecessary for the current read-only landing page.
- Retain static files: simplest operational model and matches current scope.

## Consequences
The site remains easy to host and maintain. Dynamic ordering, booking, and contact delivery remain out of scope.

## Follow-up
- [ ] Revisit when requirements justify server-side capabilities.
