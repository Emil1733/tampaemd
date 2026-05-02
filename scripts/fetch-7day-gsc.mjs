import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

// 1. Setup credentials
const KEY_FILE = path.join(process.cwd(), 'gsc-credentials.json');
const SITE_URL = 'sc-domain:poolremovaltampa.com';

if (!fs.existsSync(KEY_FILE)) {
  console.error('❌ Error: gsc-credentials.json not found.');
  process.exit(1);
}

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE,
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
});

async function fetchGscData() {
  const outputDir = path.join(process.cwd(), 'gsc', '05-02-2026');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`📊 Fetching 7-day GSC data for ${SITE_URL}...`);

  try {
    const authClient = await auth.getClient();
    const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });

    // 7-day window
    const endDate = '2026-05-02';
    const startDate = '2026-04-25';

    // Query for Keywords
    const queryResponse = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query'],
        rowLimit: 100,
      },
    });

    // Query for Pages
    const pageResponse = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['page'],
        rowLimit: 100,
      },
    });

    const data = {
      period: `${startDate} to ${endDate}`,
      queries: queryResponse.data.rows || [],
      pages: pageResponse.data.rows || [],
    };

    const outputPath = path.join(outputDir, 'raw_data.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`✅ Data saved to ${outputPath}`);

  } catch (error) {
    console.error('❌ Failed to fetch GSC data:', error.message);
  }
}

fetchGscData();
