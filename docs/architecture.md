# Architecture

## Overview

Café Delight is a single-page static site. The browser loads **index.html**, CSS, local images, and JavaScript files from a static host. The page also loads Bootstrap from jsDelivr and Roboto from Google Fonts. There is no server-side application, API, database, build step, or package manager.

    Browser
      |-- index.html
      |-- css/styles.css (local file; current link path is incorrect)
      |-- images/*
      |-- js/script.js (file exists; current HTML does not load it)
      |-- Bootstrap CDN and Google Fonts

## Files

| Path | Purpose |
| --- | --- |
| **index.html** | Navbar, hero, about, menu, branches, testimonials, and contact form markup. |
| **css/styles.css** | Custom typography, colors, layout, card, testimonial, and form styles. |
| **js/script.js** | Smooth-scroll handler for navbar links. |
| **images/cafe-bg.jpg** | Café hero background. |
| **images/Coffee.jpg** | Coffee image asset. The HTML currently requests lowercase **coffee.jpg**. |
| **images/pastry.jpg** | Pastry image. |
| **images/sandwich.jpg** | Sandwich image. |
| **image.png** | Additional image asset with no reference in current HTML or CSS. |

## Styling and interactive behavior

The document loads Bootstrap 5.3.0-alpha1 CSS and JavaScript from jsDelivr and Roboto from Google Fonts. The hero also defines inline background-image and sizing styles. The custom CSS is stored at **css/styles.css**, but the current HTML's stylesheet href is **styles.css** at the repository root. The custom stylesheet will not load from that path.

The HTML's Bootstrap navbar toggler and testimonial carousel use Bootstrap's data attributes and the Bootstrap JavaScript bundle. The local smooth-scroll code exists in **js/script.js**, but there is no script tag referencing it in **index.html**. The browser's native anchor navigation remains available.

## Form and data boundaries

The contact section is just markup. It has no action, method, named input fields, JavaScript handler, or backend, and it does not deliver a message. The repository stores no visitor data and has no API endpoints.

## Hosting implications

Serve the repository root as the static document directory so relative paths to **css/** and **images/** resolve. Static hosts often use case-sensitive paths; preserve the exact asset filename case. The external Bootstrap and font resources require a network connection.
