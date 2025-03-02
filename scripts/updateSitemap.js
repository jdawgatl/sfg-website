
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
  { path: '/surety-bonds', priority: 1.0, changefreq: 'weekly' },
  { path: '/landing/title-bonds', priority: 1.0, changefreq: 'weekly' },
];

const baseUrl = 'https://sfg-ins.com';
const today = format(new Date(), 'yyyy-MM-dd');

function generateSitemapXml() {
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

fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log(`Sitemap updated at ${sitemapPath}`);
