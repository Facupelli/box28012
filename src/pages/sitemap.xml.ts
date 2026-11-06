import { SITE_URL } from "../../site.config.mjs";

export function GET() {
  const urls = ["/", "/horarios/", "/tarifas/"];
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((path) => `<url><loc>${new URL(path, SITE_URL).href}</loc></url>`).join("")}</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
}
