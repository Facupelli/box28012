import { SITE_INDEXABLE, SITE_URL } from "../../site.config.mjs";

export function GET() {
  // Search/retrieval permissions are independent from training permissions.
  // Google-Extended remains allowed through the wildcard group.
  const trainingBots = [
    "GPTBot",
    "ClaudeBot",
    "CCBot",
    "Applebot-Extended",
    "Bytespider",
  ];
  const body = SITE_INDEXABLE
    ? [
        "User-agent: *\nAllow: /",
        ...[
          "OAI-SearchBot",
          "ChatGPT-User",
          "Claude-SearchBot",
          "Claude-User",
          "PerplexityBot",
          "Perplexity-User",
        ].map((bot) => `User-agent: ${bot}\nAllow: /`),
        ...trainingBots.map((bot) => `User-agent: ${bot}\nDisallow: /`),
        `Sitemap: ${new URL("/sitemap.xml", SITE_URL).href}`,
      ].join("\n\n")
    : // Allow fetching preview HTML so crawlers can observe its noindex directive.
      "User-agent: *\nAllow: /";
  return new Response(`${body}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
