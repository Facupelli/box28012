export const SITE_URL = "https://box28012.com";
// Static hosting cannot change indexing directives after the build.
// Missing values are non-indexable locally; the build hook requires an explicit value.
const environment = process.env.SITE_ENV;
if (
  environment !== undefined &&
  !["production", "preview"].includes(environment)
) {
  throw new Error("SITE_ENV must be production or preview");
}
export const SITE_INDEXABLE = environment === "production";
