import type { MetadataRoute } from "next";
import { ROUTES, SITE } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${SITE.reviewedAt}T00:00:00.000Z`);

  return ROUTES.map((route) => ({
    url: new URL(route.href, SITE.url).toString(),
    lastModified,
    changeFrequency: route.href === "/" ? "weekly" : "monthly",
    priority: route.href === "/" ? 1 : 0.8,
  }));
}
