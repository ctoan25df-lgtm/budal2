import type { MetadataRoute } from "next";
import { ROUTES, SITE, absoluteUrl } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${SITE.reviewedAt}T00:00:00+09:00`);

  return ROUTES.map((route) => ({
    url: absoluteUrl(route.href),
    lastModified,
    changeFrequency: route.href === "/" ? "weekly" : "monthly",
    priority: route.href === "/" ? 1 : 0.8,
  }));
}
