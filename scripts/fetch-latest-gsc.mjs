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
  const outputDir = path.join(process.cwd(), 'gsc', '05-09-2026');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`📊 Fetching latest 7-day GSC data (USA Only) for ${SITE_URL}...`);

  try {
    const authClient = await auth.getClient();
    const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });

    // 7-day window after the last pull
    const endDate = '2026-05-08';
    const startDate = '2026-05-02';

    // Query for Keywords (USA Only)
    const queryResponse = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query'],
        dimensionFilterGroups: [
          {
            filters: [
              {
                dimension: 'country',
                operator: 'equals',
                expression: 'usa'
              }
            ]
          }
        ],
        rowLimit: 250,
      },
    });

    // Query for Pages (USA Only)
    const pageResponse = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['page'],
        dimensionFilterGroups: [
          {
            filters: [
              {
                dimension: 'country',
                operator: 'equals',
                expression: 'usa'
              }
            ]
          }
        ],
        rowLimit: 250,
      },
    });

    const data = {
      period: `${startDate} to ${endDate}`,
      queries: queryResponse.data.rows || [],
      pages: pageResponse.data.rows || [],
    };

    const outputPath = path.join(outputDir, 'raw_data.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`✅ Latest GSC Data (USA) saved to ${outputPath}`);

  } catch (error) {
    console.error('❌ Failed to fetch GSC data:', error.message);
  }
}

fetchGscData();
