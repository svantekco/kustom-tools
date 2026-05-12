# Markdown Viewer

This is an example document rendered by the viewer.

## Usage

Open `markdown/?file=example.md` to view this file. Drop additional `.md`
files into `static/markdown/docs/` and link to them the same way.

## Features

- GitHub-flavored markdown via [marked](https://marked.js.org/)
- Syntax highlighting via [highlight.js](https://highlightjs.org/)
- HTML sanitization via [DOMPurify](https://github.com/cure53/DOMPurify)
- GitHub-style typography via `github-markdown-css`

### Code

```js
function hello(name) {
  return `Hello, ${name}!`;
}
```

### Tables

| Tool | Purpose |
| ---- | ------- |
| marked | Parse markdown |
| DOMPurify | Sanitize HTML |
| highlight.js | Highlight code |
