import type { MetadataRoute } from "next";
import { hasConfiguredSiteUrl, siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    // Only advertise a sitemap once a real production domain is configured.
    ...(hasConfiguredSiteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
