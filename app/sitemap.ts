import type { MetadataRoute } from "next";
import { ROUTES, SITE } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: new URL(route.href, SITE.url).toString(),
    ...(route.href === "/"
      ? { lastModified: new Date(SITE.reviewedAt) }
      : {}),
    changeFrequency: route.href === "/" ? "weekly" : "monthly",
    priority: route.href === "/" ? 1 : 0.8,
  }));
}
