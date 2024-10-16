# Kustom Tools - Useful Snippets for Troubleshooting KCO

This repository contains a collection of useful JavaScript snippets designed to assist with troubleshooting KCO (Kustom Checkout).

## Available Snippets

### Open `html_snippet` in a Separate Page

This snippet opens the `html_snippet` in a separate page to help with testing or troubleshooting.

Bookmarklet:
```javascript
javascript:(function(){var script=document.createElement('script');script.src='https://svantekco.github.io/kustom-tools/snippet.js';document.body.appendChild(script);})();
```

### Get `order_id` / `session_id`

This snippet helps you extract the `order_id` or `session_id` for troubleshooting purposes.

Bookmarklet:
```javascript
javascript:(function(){window.s0=document.createElement('script');window.s0.setAttribute('type','text/javascript');window.s0.setAttribute('src','https://bookmarkify.it/bookmarklets/58579/raw');document.getElementsByTagName('body')[0].appendChild(window.s0);})();
```

## Usage

To use these snippets, simply create a bookmark in your browser with the JavaScript code provided above. When you visit a page related to KCO, click on the bookmark to execute the snippet.

