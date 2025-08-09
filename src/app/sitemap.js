// app/sitemap.js
// Generates: /sitemap.xml
export default function sitemap() {
  const BASE_URL = "https://stephen.engineering";
  const now = new Date();

  const routes = [
    { url: `${BASE_URL}/`, changeFrequency: "monthly", priority: 1.0 },
    // Add more when you create real routes (e.g. /projects, /blog)
  ];

  return routes.map((r) => ({
    url: r.url,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
