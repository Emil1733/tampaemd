import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

const KEY_FILE = path.join(process.cwd(), 'gsc-credentials.json');

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE,
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
});

async function listSites() {
  const authClient = await auth.getClient();
  const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });

  try {
    const response = await searchconsole.sites.list();
    console.log('Available sites:');
    console.log(JSON.stringify(response.data.siteEntry, null, 2));
  } catch (error) {
    console.error('Error listing sites:', error.message);
  }
}

listSites();
