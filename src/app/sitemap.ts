import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: "2026-11-24",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
