const pubs = require('./collection/auto-collected/auto_collected.js');
const miss = pubs.filter((p) => !(((p && p.abstract) || '').toString().trim()));
console.log('total=' + pubs.length);
console.log('missing=' + miss.length);
for (let i = 0; i < miss.length; i++) {
  const p = miss[i] || {};
  console.log(`${i + 1}. ${(p.title || '').toString()} | ${(p.paperUrl || '').toString()}`);
}
