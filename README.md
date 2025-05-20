# Kustom Tools - Useful Snippets for Troubleshooting KCO

This repository contains bookmarklets and small static pages used when working with Kustom Checkout.

## Building

All source files are located in the `src` directory. Run the build script to generate the files under `static` which are served by GitHub Pages.

```bash
node src/build.js
```

The build script copies each snippet to `static` and creates a `*.bookmarklet.txt` file containing a ready to use bookmarklet.

## Available Snippets

### Open `html_snippet` in a Separate Page

Loads the `html_snippet` inside the checkout iframe into a new tab. Bookmarklet content can be found in [`static/openCheckoutSnippet.bookmarklet.txt`](static/openCheckoutSnippet.bookmarklet.txt).

### Get `order_id` / `session_id`

Displays the order ID from the checkout iframe together with links to DataDog. Bookmarklet content can be found in [`static/getOrderId.bookmarklet.txt`](static/getOrderId.bookmarklet.txt).

## Usage

Create a new bookmark in your browser and copy the text from the corresponding `*.bookmarklet.txt` file as the URL. When visiting a page containing the checkout, click the bookmark to execute the snippet.
