import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

// 1. Setup credentials
const KEY_FILE = path.join(process.cwd(), 'gsc-credentials.json');

// Check if file exists
if (!fs.existsSync(KEY_FILE)) {
  console.error('❌ Error: gsc-credentials.json not found in root directory.');
  process.exit(1);
}

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE,
  scopes: ['https://www.googleapis.com/auth/indexing'],
});

const indexing = google.indexing('v3');

// 2. Define URLs to index
// We extract these from the logic in sitemap.ts
const baseUrl = 'https://poolremovaltampa.com';
const urls = [
  '',
  '/pool-removal',
  '/pool-removal-cost-tampa',
  '/full-vs-partial-pool-removal',
  '/pool-demolition-process',
  '/tampa-service-areas',
  '/blog',
  '/contact',
  '/blog/do-you-need-a-permit-in-tampa',
  '/blog/high-water-table-issues',
  '/blog/building-after-pool-removal',
  '/tampa-service-areas/brandon',
  '/resources/hillsborough-pool-permits',
  '/tampa-service-areas/st-petersburg',
  '/resources/pinellas-pool-permits',
  '/tampa-service-areas/clearwater',
  '/tampa-service-areas/south-tampa',
  '/tampa-service-areas/riverview',
  '/tampa-service-areas/carrollwood',
  '/tampa-service-areas/wesley-chapel',
  '/resources/pasco-pool-permits',
  '/resources/high-water-table-dewatering',
  '/pool-removal/fiberglass',
  '/resources/soil-stabilization-backfill',
].map(p => `${baseUrl}${p}`);

async function indexUrls() {
  console.log(`🚀 Starting indexing for ${urls.length} URLs...`);

  for (const url of urls) {
    try {
      const response = await indexing.urlNotifications.publish({
        auth,
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`✅ Indexed: ${url}`);
    } catch (error) {
      console.error(`❌ Failed: ${url}`, error.message);
    }
    // Small delay to prevent rate limiting issues
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log('🏁 Indexing process complete.');
}

indexUrls();
