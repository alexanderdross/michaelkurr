import { MetadataRoute } from "next";
import { getAllExpertiseSlugs } from "@/data/expertise";
import { getAllLeadershipSlugs } from "@/data/leadership";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://michaelkurr.com";
  const lastModified = new Date("2026-02-28");

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...getAllExpertiseSlugs().map((slug) => ({
      url: `${base}/expertise/${slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...getAllLeadershipSlugs().map((slug) => ({
      url: `${base}/leadership/${slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
