
import { format } from 'date-fns';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

/**
 * Updates the sitemap.xml file with the latest data
 */
export const updateSitemap = async (customUrls?: SitemapUrl[]) => {
  try {
    // In a production environment, this would make a request to a backend service
    // that can write to the file system
    console.log('Sitemap update would be triggered here in production');
    
    // Get today's date in the format 'YYYY-MM-DD'
    const today = format(new Date(), 'yyyy-MM-dd');
    
    // This is a mock implementation since client-side JavaScript can't write to the filesystem
    // In a real implementation, this would send data to a backend endpoint
    const sitemapData = {
      urls: customUrls || [],
      lastUpdated: today,
    };
    
    // In a real implementation, the server would:
    // 1. Read the existing sitemap.xml
    // 2. Update entries or add new ones
    // 3. Write back to the sitemap.xml file
    
    console.log('Sitemap data that would be sent to server:', sitemapData);
    return true;
  } catch (error) {
    console.error('Error updating sitemap:', error);
    return false;
  }
};

/**
 * Extracts all routes from the application and generates sitemap entries
 */
export const generateSitemapFromRoutes = () => {
  // This is a placeholder function
  // In a real implementation, this would parse your route configuration
  // or use a library like react-router-config to extract all routes
  
  const baseUrl = 'https://sfg-ins.com';
  const today = format(new Date(), 'yyyy-MM-dd');
  
  // Sample implementation
  const routes = [
    { path: '/', priority: 1.0, changefreq: 'weekly' as const },
    { path: '/about', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/service', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/products', priority: 0.9, changefreq: 'monthly' as const },
    { path: '/contact', priority: 0.8, changefreq: 'monthly' as const },
    { path: '/blog', priority: 0.7, changefreq: 'weekly' as const },
    // Add more routes as needed
  ];
  
  const sitemapUrls: SitemapUrl[] = routes.map(route => ({
    loc: `${baseUrl}${route.path}`,
    lastmod: today,
    changefreq: route.changefreq,
    priority: route.priority
  }));
  
  return sitemapUrls;
};

/**
 * Creates a sitemap.xml string from an array of URLs
 */
export const createSitemapXml = (urls: SitemapUrl[]): string => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
};

/**
 * Updates sitemap.xml automatically when called
 * This can be integrated with your deployment process
 */
export const autoUpdateSitemap = async () => {
  const urls = generateSitemapFromRoutes();
  return updateSitemap(urls);
};
