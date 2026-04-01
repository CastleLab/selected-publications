const fs = require('fs');
const path = require('path');

const collectionBase = path.resolve('collection');
const autoPath = path.join(collectionBase, 'auto-collected', 'auto_collected.js');

function loadArray(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.js') {
    delete require.cache[require.resolve(filePath)];
    const data = require(filePath);
    return Array.isArray(data) ? data : [];
  }
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return Array.isArray(data) ? data : [];
}

function normTitle(text) {
  return String(text || '')
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ');
}

const autoItems = loadArray(autoPath);
const refMap = new Map();

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const abs = path.join(dir, name);
    const rel = path.relative(collectionBase, abs).split(path.sep).join('/');
    const st = fs.statSync(abs);
    if (st.isDirectory()) {
      if (rel === 'auto-collected' || rel.startsWith('auto-collected/')) continue;
      walk(abs);
      continue;
    }
    if (!/\.(js|json)$/i.test(name)) continue;

    let arr = [];
    try {
      arr = loadArray(abs);
    } catch {
      continue;
    }

    for (const item of arr) {
      if (!item || typeof item !== 'object') continue;
      const tk = normTitle(item.title);
      if (!tk) continue;
      if (!refMap.has(tk)) refMap.set(tk, []);
      refMap.get(tk).push({ file: rel, title: item.title || '' });
    }
  }
}

walk(collectionBase);

const duplicates = [];
const missing = {
  venue: [],
  venueShort: [],
  abstract: [],
};

for (const item of autoItems) {
  if (!item || typeof item !== 'object') continue;
  const title = String(item.title || '').trim() || '(untitled)';
  const tk = normTitle(title);

  if (tk && refMap.has(tk)) {
    duplicates.push({
      title,
      files: [...new Set(refMap.get(tk).map(x => x.file))],
    });
  }

  if (!String(item.venue || '').trim()) missing.venue.push(title);
  if (!String(item.venueShort || '').trim()) missing.venueShort.push(title);
  if (!String(item.abstract || '').trim()) missing.abstract.push(title);
}

const out = {
  autoCount: autoItems.length,
  duplicateCount: duplicates.length,
  missingCounts: {
    venue: missing.venue.length,
    venueShort: missing.venueShort.length,
    abstract: missing.abstract.length,
  },
  duplicates,
  missing,
};

console.log(JSON.stringify(out, null, 2));
