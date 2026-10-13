# Installation

## Requirements

- A modern web browser.
- Python 3 or another static HTTP server if you want to preview the page over HTTP.
- Network access for the Bootstrap and Google Fonts CDN resources currently referenced by the page.

No Node.js, npm, database, backend, environment variables, or build command is required.

## Get the project

Clone the repository and change into its root:

    git clone https://github.com/Brajesh31/CAFE-WEBSITE.git
    cd CAFE-WEBSITE

If the source is already on your computer, open a terminal in the directory containing **index.html**.

## Run a local static server

From the repository root:

    python -m http.server 8000

Open **http://localhost:8000** in a browser and keep the server process running. If Python is unavailable, use another static HTTP server configured to serve the repository root.

You can open **index.html** directly in a browser for a quick look, but serving it over HTTP better matches static hosting behavior.

## Current rendering notes

The custom stylesheet is stored at **css/styles.css**, while **index.html** currently requests **styles.css** from the root. Therefore the custom CSS is not loaded through the existing link until that path is corrected. Bootstrap still loads from its CDN when network access is available.

The HTML requests **images/coffee.jpg**, but the repository file is **images/Coffee.jpg**. This case difference may be tolerated on some local filesystems and fail on a case-sensitive host.

The local **js/script.js** is not referenced by the HTML and does not run in the current page.
