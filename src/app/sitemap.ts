import { MetadataRoute } from "next";
import { getAllExpertiseSlugs } from "@/data/expertise";
import { getAllLeadershipSlugs } from "@/data/leadership";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://michaelkurr.com";

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...getAllExpertiseSlugs().map((slug) => ({
      url: `${base}/expertise/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...getAllLeadershipSlugs().map((slug) => ({
      url: `${base}/leadership/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
