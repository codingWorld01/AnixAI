import axios from "axios";
import { createClient } from "redis";
import { parseStringPromise } from "xml2js";

const redisClient = createClient();
await redisClient.connect();

const CACHE_KEY = "website_content";
const CACHE_TTL = 24 * 60 * 60; // Cache for 24 hours

export async function fetchWebsiteContent(forceRefresh = false) {
  if (!forceRefresh) {
    const cachedContent = await redisClient.get(CACHE_KEY);
    if (cachedContent) {
      return JSON.parse(cachedContent);
    }
  }

  const baseUrl = "http://localhost:3000";
  const sitemapUrl = `${baseUrl}/sitemap.xml`;
  const contentMap: { path: string; title: string; content: string }[] = [];

  try {
    const sitemapResponse = await axios.get(sitemapUrl);
    const sitemapXml = sitemapResponse.data;
    const sitemap = await parseStringPromise(sitemapXml);

    const routes = sitemap.urlset.url.map((entry: any) => {
      const loc = entry.loc[0];
      return loc.replace(baseUrl, "");
    });

    for (const route of routes) {
      try {
        const response = await axios.get(`${baseUrl}${route}`);
        const html = response.data;

        const titleMatch = html.match(/<title>(.*?)<\/title>/);
        const title = titleMatch ? titleMatch[1] : route;
        const bodyMatch = html.match(/<main>(.*?)<\/main>/s);
        const content = bodyMatch ? bodyMatch[1].replace(/<[^>]+>/g, "").trim() : "";

        contentMap.push({ path: route, title, content });
      } catch (error) {
        console.error(`Error fetching ${route}:`, error);
      }
    }
  } catch (error) {
    console.error("Error fetching sitemap:", error);
    // Fallback to hardcoded routes if sitemap fails
    const fallbackRoutes = [
      "/",
      "/services/generative-ai",
      "/services/ai-development",
      "/services/data-engineering",
      "/industries/healthcare",
      "/industries/retail",
      "/industries/fintech",
      "/work",
      "/company",
      "/blog",
      "/resources",
      "/login",
      "/signup",
    ];

    for (const route of fallbackRoutes) {
      try {
        const response = await axios.get(`${baseUrl}${route}`);
        const html = response.data;

        const titleMatch = html.match(/<title>(.*?)<\/title>/);
        const title = titleMatch ? titleMatch[1] : route;
        const bodyMatch = html.match(/<main>(.*?)<\/main>/s);
        const content = bodyMatch ? bodyMatch[1].replace(/<[^>]+>/g, "").trim() : "";

        contentMap.push({ path: route, title, content });
      } catch (error) {
        console.error(`Error fetching ${route}:`, error);
      }
    }
  }

  await redisClient.setEx(CACHE_KEY, CACHE_TTL, JSON.stringify(contentMap));
  return contentMap;
}

export async function refreshWebsiteContent() {
  await fetchWebsiteContent(true);
}

