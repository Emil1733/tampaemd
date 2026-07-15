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

async function fetchGscData(startDate, endDate, label) {
  const authClient = await auth.getClient();
  const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });

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

  return {
    period: `${startDate} to ${endDate}`,
    label,
    queries: queryResponse.data.rows || [],
    pages: pageResponse.data.rows || [],
  };
}

async function run() {
  const outputDir = path.join(process.cwd(), 'gsc', '07-15-2026');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`📊 Fetching 30-day GSC data (USA Only) for ${SITE_URL}...`);

  try {
    // Current 30 days: 2026-06-13 to 2026-07-12
    const currentData = await fetchGscData('2026-06-13', '2026-07-12', 'current');
    
    // Previous 30 days: 2026-05-14 to 2026-06-12
    const previousData = await fetchGscData('2026-05-14', '2026-06-12', 'previous');

    const data = {
      current: currentData,
      previous: previousData
    };

    const outputPath = path.join(outputDir, 'raw_data.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`✅ July GSC Data (USA) saved to ${outputPath}`);

  } catch (error) {
    console.error('❌ Failed to fetch GSC data:', error.message);
  }
}

run();
