import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// A single-page site has one canonical URL; anchors are not listed separately.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
