# Kustom Tools - Useful Snippets for Troubleshooting KCO

This repository contains bookmarklets and small static pages used when working with Kustom Checkout.

## Installation

Install dependencies using npm:

```bash
npm install
```

## Building

All source files are located in the `src` directory. Run the build script through npm to generate the files under `static` which are served by GitHub Pages.

```bash
npm run build
```

The build script copies each snippet to `static` and creates a `*.bookmarklet.txt` file containing a ready to use bookmarklet. These text files hold the bookmarklet code that you can paste directly into a new bookmark.

## Bookmarklet Files

After building, each snippet has a corresponding `*.bookmarklet.txt` file under `static/`. The contents of these files can be used as the URL when creating a bookmark in your browser.

## Linting

Run the linter with:

```bash
npm run lint
```

## Testing

Execute the unit tests with:

```bash
npm test
```

## Available Snippets

### Open `html_snippet` in a Separate Page

Loads the `html_snippet` inside the checkout iframe into a new tab. Bookmarklet content can be found in [`static/openCheckoutSnippet.bookmarklet.txt`](static/openCheckoutSnippet.bookmarklet.txt).

### Get `order_id` / `session_id`

Displays the order ID from the checkout iframe together with links to DataDog. Bookmarklet content can be found in [`static/getOrderId.bookmarklet.txt`](static/getOrderId.bookmarklet.txt).

## Usage

Create a new bookmark in your browser and copy the text from the corresponding `*.bookmarklet.txt` file as the URL. When visiting a page containing the checkout, click the bookmark to execute the snippet.
