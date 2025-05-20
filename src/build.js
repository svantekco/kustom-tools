const fs = require('fs');
const path = require('path');

const repoBase = 'https://svantekco.github.io/kustom-tools';
const staticDir = path.resolve(__dirname, '../static');
const snippetDir = path.resolve(__dirname, 'snippets');

if (!fs.existsSync(staticDir)) {
  fs.mkdirSync(staticDir, { recursive: true });
}

// copy pages if src/pages exists
const pagesDir = path.resolve(__dirname, 'pages');
if (fs.existsSync(pagesDir)) {
  for (const file of fs.readdirSync(pagesDir)) {
    fs.copyFileSync(path.join(pagesDir, file), path.join(staticDir, file));
  }
}

for (const file of fs.readdirSync(snippetDir)) {
  if (!file.endsWith('.js')) continue;
  const srcPath = path.join(snippetDir, file);
  const destPath = path.join(staticDir, file);
  fs.copyFileSync(srcPath, destPath);

  const bookmarkletUrl = `${repoBase}/static/${file}`;
  const bookmarklet = `(function(){var s=document.createElement('script');s.setAttribute('type','text/javascript');s.setAttribute('src','${bookmarkletUrl}');document.body.appendChild(s);})();`;
  const bookmarkletPath = path.join(staticDir, file.replace(/\.js$/, '.bookmarklet.txt'));
  fs.writeFileSync(bookmarkletPath, bookmarklet);
}
