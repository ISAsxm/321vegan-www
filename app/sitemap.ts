import type { MetadataRoute } from "next";
import { sitemapData } from "@/assets/assets";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const pagesMapped = sitemapData
    .filter((item) => !["#"].includes(item.url))
    .map(({ url }) => ({
      url: `${baseUrl}${url}`,
    }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...pagesMapped,
  ];
}
