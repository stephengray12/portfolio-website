// app/robots.js
export default function robots() {
  const BASE_URL = "https://stephen.engineering";

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
