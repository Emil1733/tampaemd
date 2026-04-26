import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..', 'src', 'app');

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  });
  return fileList;
}

function countWords(content) {
  // Extract all strings in double quotes, single quotes, or backticks
  const stringMatches = content.match(/["'`](.*?)["'`]/g) || [];
  const stringText = stringMatches.map(s => s.slice(1, -1)).join(' ');

  // Standard JSX cleanup for the rest
  const jsxText = content
    .replace(/<[^>]+>/g, ' ') // Remove JSX tags
    .replace(/\s+/g, ' '); // Collapse whitespace
  
  const combinedText = (stringText + ' ' + jsxText).trim();
  return combinedText.split(' ').filter(w => w.length > 3).length; // Filter short code-like words
}

const allPages = getFiles(rootDir);
const results = allPages.map(p => {
  const content = fs.readFileSync(p, 'utf8');
  const relPath = path.relative(rootDir, p).replace(/\\/g, '/').replace('/page.tsx', '') || '/';
  return {
    path: relPath === 'page.tsx' ? '/' : relPath,
    words: countWords(content)
  };
});

console.log(JSON.stringify(results, null, 2));
