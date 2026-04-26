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
  console.log(`📊 Fetching GSC data for ${SITE_URL}...`);

  try {
    const authClient = await auth.getClient();
    const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });

    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    // Query for Keywords
    const queryResponse = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query'],
        rowLimit: 50,
      },
    });

    // Query for Pages
    const pageResponse = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['page'],
        rowLimit: 50,
      },
    });

    const data = {
      period: `${startDate} to ${endDate}`,
      queries: queryResponse.data.rows || [],
      pages: pageResponse.data.rows || [],
    };

    const outputPath = path.join(process.cwd(), 'gsc-analysis-raw.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`✅ Data saved to ${outputPath}`);

  } catch (error) {
    console.error('❌ Failed to fetch GSC data:', error.message);
    if (error.response) {
       console.error('Response details:', JSON.stringify(error.response.data, null, 2));
    }
  }
}

fetchGscData();
