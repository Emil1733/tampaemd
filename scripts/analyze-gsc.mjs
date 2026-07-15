import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'gsc', '07-15-2026', 'raw_data.json');
if (!fs.existsSync(dataPath)) {
  console.error('File not found:', dataPath);
  process.exit(1);
}

const rawData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const { current, previous } = rawData;

function calculateTotals(rows) {
  let clicks = 0;
  let impressions = 0;
  let sumPosition = 0;
  
  rows.forEach(r => {
    clicks += r.clicks || 0;
    impressions += r.impressions || 0;
    sumPosition += r.position || 0;
  });

  const avgPosition = rows.length > 0 ? (sumPosition / rows.length).toFixed(2) : 0;
  const avgCtr = impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) : 0;

  return { clicks, impressions, avgCtr, avgPosition };
}

const currentQueryTotals = calculateTotals(current.queries);
const previousQueryTotals = calculateTotals(previous.queries);

const currentPageTotals = calculateTotals(current.pages);
const previousPageTotals = calculateTotals(previous.pages);

console.log('--- Overall Site Performance (USA Only) ---');
console.log(`Current Period: ${current.period}`);
console.log(`Previous Period: ${previous.period}`);
console.log('\n--- Query-based Totals ---');
console.log(`Current: Clicks: ${currentQueryTotals.clicks}, Impressions: ${currentQueryTotals.impressions}, CTR: ${currentQueryTotals.avgCtr}%, Avg Pos: ${currentQueryTotals.avgPosition}`);
console.log(`Previous: Clicks: ${previousQueryTotals.clicks}, Impressions: ${previousQueryTotals.impressions}, CTR: ${previousQueryTotals.avgCtr}%, Avg Pos: ${previousQueryTotals.avgPosition}`);

console.log('\n--- Page-based Totals ---');
console.log(`Current: Clicks: ${currentPageTotals.clicks}, Impressions: ${currentPageTotals.impressions}, CTR: ${currentPageTotals.avgCtr}%, Avg Pos: ${currentPageTotals.avgPosition}`);
console.log(`Previous: Clicks: ${previousPageTotals.clicks}, Impressions: ${previousPageTotals.impressions}, CTR: ${previousPageTotals.avgCtr}%, Avg Pos: ${previousPageTotals.avgPosition}`);

// Compare growth
const clickDiff = currentQueryTotals.clicks - previousQueryTotals.clicks;
const clickGrowth = previousQueryTotals.clicks > 0 ? ((clickDiff / previousQueryTotals.clicks) * 100).toFixed(1) : 'N/A';
const impDiff = currentQueryTotals.impressions - previousQueryTotals.impressions;
const impGrowth = previousQueryTotals.impressions > 0 ? ((impDiff / previousQueryTotals.impressions) * 100).toFixed(1) : 'N/A';

console.log(`\nGrowth Analysis:`);
console.log(`Clicks: ${clickDiff >= 0 ? '+' : ''}${clickDiff} (${clickGrowth}%)`);
console.log(`Impressions: ${impDiff >= 0 ? '+' : ''}${impDiff} (${impGrowth}%)`);

// Helper to map lists to objects
function listToMap(list, keyIndex = 0) {
  const map = new Map();
  list.forEach(item => {
    const key = item.keys[keyIndex];
    map.set(key, item);
  });
  return map;
}

const prevQueriesMap = listToMap(previous.queries);
const prevPagesMap = listToMap(previous.pages);

// Top queries in current
console.log('\n--- Top Queries in Current Period (USA) ---');
current.queries.slice(0, 20).forEach((q, idx) => {
  const queryText = q.keys[0];
  const prev = prevQueriesMap.get(queryText);
  const prevClicks = prev ? prev.clicks : 0;
  const clickChange = q.clicks - prevClicks;
  console.log(`${idx + 1}. "${queryText}": Clicks: ${q.clicks} (${clickChange >= 0 ? '+' : ''}${clickChange}), Imp: ${q.impressions}, Pos: ${q.position.toFixed(1)} (was ${prev ? prev.position.toFixed(1) : 'N/A'})`);
});

// Top pages in current
console.log('\n--- Top Pages in Current Period (USA) ---');
current.pages.slice(0, 25).forEach((p, idx) => {
  const pagePath = p.keys[0].replace('https://poolremovaltampa.com', '');
  const prev = prevPagesMap.get(p.keys[0]);
  const prevClicks = prev ? prev.clicks : 0;
  const clickChange = p.clicks - prevClicks;
  console.log(`${idx + 1}. ${pagePath}: Clicks: ${p.clicks} (${clickChange >= 0 ? '+' : ''}${clickChange}), Imp: ${p.impressions}, Pos: ${p.position.toFixed(1)} (was ${prev ? prev.position.toFixed(1) : 'N/A'})`);
});

// Top Winners
const winners = [];
current.queries.forEach(q => {
  const queryText = q.keys[0];
  const prev = prevQueriesMap.get(queryText);
  const prevClicks = prev ? prev.clicks : 0;
  const clickDiff = q.clicks - prevClicks;
  const posDiff = prev ? prev.position - q.position : 0; // positive means position improved (decreased)
  winners.push({ query: queryText, clickDiff, posDiff, current: q, prev });
});

console.log('\n--- Top Winning Queries (by Clicks) ---');
winners.sort((a,b) => b.clickDiff - a.clickDiff).slice(0, 15).forEach((w, idx) => {
  console.log(`${idx + 1}. "${w.query}": Clicks changed by ${w.clickDiff >= 0 ? '+' : ''}${w.clickDiff} (Current: ${w.current.clicks}), Pos: ${w.current.position.toFixed(1)} (was ${w.prev ? w.prev.position.toFixed(1) : 'N/A'})`);
});

console.log('\n--- Top Position Improvements ---');
winners.sort((a,b) => b.posDiff - a.posDiff).slice(0, 15).forEach((w, idx) => {
  console.log(`${idx + 1}. "${w.query}": Position improved by +${w.posDiff.toFixed(1)} (Current: ${w.current.position.toFixed(1)} from ${w.prev ? w.prev.position.toFixed(1) : 'N/A'}), Clicks: ${w.current.clicks}`);
});
