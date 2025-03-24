
/**
 * This is a Node.js script that can be run during the build process
 * to automatically update the sitemap.xml file based on your routes.
 * 
 * To use this, you would add it to your build scripts in package.json:
 * "scripts": {
 *   "build": "vite build && node scripts/updateSitemap.js",
 *   ...
 * }
 */

const fs = require('fs');
const path = require('path');
const { format } = require('date-fns');

// Define your routes here or import them from your route configuration
const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/service', priority: 0.8, changefreq: 'monthly' },
  { path: '/products', priority: 1.0, changefreq: 'monthly' },
  { path: '/products/auto', priority: 1.0, changefreq: 'monthly' },
  { path: '/products/home', priority: 1.0, changefreq: 'monthly' },
  { path: '/products/commercial', priority: 1.0, changefreq: 'monthly' },
  { path: '/products/bonds', priority: 1.0, changefreq: 'monthly' },
  { path: '/quote', priority: 1.0, changefreq: 'weekly' },
  { path: '/contact', priority: 1.0, changefreq: 'monthly' },
  { path: '/blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/georgia-insurance', priority: 1.0, changefreq: 'monthly' },
  { path: '/tennessee-auto-insurance', priority: 1.0, changefreq: 'monthly' },
  { path: '/mississippi-home-insurance', priority: 1.0, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.5, changefreq: 'yearly' },
  { path: '/sitemap', priority: 0.5, changefreq: 'monthly' },
  { path: '/surety-bonds', priority: 1.0, changefreq: 'weekly' },
  { path: '/landing/title-bonds', priority: 1.0, changefreq: 'weekly' },
  { path: '/glossary', priority: 0.8, changefreq: 'monthly' },
  { path: '/safeway-insurance', priority: 1.0, changefreq: 'weekly' },
];

const baseUrl = 'https://sfg-ins.com';
const today = format(new Date(), 'yyyy-MM-dd');

function generateSitemapXml() {
  // Ensure no BOM or whitespace is added before the XML declaration
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>\n';
  return xml;
}

// Update the sitemap.xml file
const sitemap = generateSitemapXml();
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

// Use the {encoding: 'utf8'} option to ensure no BOM is added
fs.writeFileSync(sitemapPath, sitemap, {encoding: 'utf8'});
console.log(`Sitemap updated at ${sitemapPath}`);

// Generate an HTML sitemap file
function generateHtmlSitemap() {
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Site Map | Standard Financial Group Insurance Agency</title>
  <meta name="description" content="Complete listing of all pages on the Standard Financial Group insurance website. Find the insurance information you need.">
  <meta name="robots" content="index, follow">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; color: #333; }
    h1 { color: #2563eb; }
    h2 { color: #1e40af; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-top: 24px; }
    ul { list-style-type: none; padding-left: 0; }
    li { margin-bottom: 8px; }
    a { color: #2563eb; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .container { max-width: 800px; margin: 0 auto; }
    .category { margin-bottom: 32px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Site Map</h1>
    
    <div class="category">
      <h2>Main Pages</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/service">Our Services</a></li>
        <li><a href="/products">Insurance Products</a></li>
        <li><a href="/quote">Get a Quote</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/blog">Insurance Blog</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
      </ul>
    </div>

    <div class="category">
      <h2>Insurance Products</h2>
      <ul>
        <li><a href="/products/auto">Auto Insurance</a></li>
        <li><a href="/products/home">Home Insurance</a></li>
        <li><a href="/products/commercial">Commercial Insurance</a></li>
        <li><a href="/products/bonds">Surety Bonds</a></li>
      </ul>
    </div>

    <div class="category">
      <h2>Service Areas</h2>
      <ul>
        <li><a href="/georgia-insurance">Georgia Insurance</a></li>
        <li><a href="/tennessee-auto-insurance">Tennessee Auto Insurance</a></li>
        <li><a href="/mississippi-home-insurance">Mississippi Home Insurance</a></li>
      </ul>
    </div>

    <div class="category">
      <h2>Specialty Services</h2>
      <ul>
        <li><a href="/surety-bonds">Surety Bonds</a></li>
        <li><a href="/landing/title-bonds">Title Bonds</a></li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  const htmlSitemapPath = path.resolve(__dirname, '../public/sitemap.html');
  fs.writeFileSync(htmlSitemapPath, html, 'utf8');
  console.log(`HTML Sitemap created at ${htmlSitemapPath}`);
}

// Generate the HTML sitemap
generateHtmlSitemap();
