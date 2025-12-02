const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const API_KEY = '06c4beab42e84d99ad85cef051bc3699';
const HOST = 'remind-apps.vercel.app';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;

// Lire le sitemap pour extraire les URLs
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf-8');

// Extraire les URLs du sitemap
const urlMatches = sitemap.match(/<loc>(.*?)<\/loc>/g);
const urls = urlMatches ? urlMatches.map(url => url.replace(/<\/?loc>/g, '')) : [];

console.log(`Found ${urls.length} URLs in sitemap`);

// Préparer la requête IndexNow
const payload = JSON.stringify({
  host: HOST,
  key: API_KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls
});

console.log('\nSubmitting to IndexNow...');
console.log('Payload:', JSON.stringify(JSON.parse(payload), null, 2));

const options = {
  hostname: 'api.indexnow.org',
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
};

const req = https.request(options, (res) => {
  console.log(`\nStatus Code: ${res.statusCode}`);

  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 200) {
      console.log('✅ SUCCESS! URLs submitted to IndexNow');
      console.log('Bing will crawl your URLs soon');
    } else if (res.statusCode === 400) {
      console.log('❌ ERROR: Invalid format');
      console.log('Response:', data);
    } else if (res.statusCode === 403) {
      console.log('❌ ERROR: Key not valid');
      console.log('Make sure the key file is accessible at:', KEY_LOCATION);
    } else if (res.statusCode === 422) {
      console.log('❌ ERROR: URLs don\'t belong to host or key mismatch');
    } else if (res.statusCode === 429) {
      console.log('❌ ERROR: Too many requests (spam protection)');
    } else {
      console.log('Response:', data);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ ERROR:', error.message);
});

req.write(payload);
req.end();
