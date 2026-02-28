import { describe, it, expect } from "vitest";
import { expertiseData, getAllExpertiseSlugs } from "@/data/expertise";
import { leadershipData, getAllLeadershipSlugs } from "@/data/leadership";

describe("SEO: sitemap coverage", () => {
  it("expertise slugs produce valid URL paths", () => {
    const slugs = getAllExpertiseSlugs();
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9-]+$/);
      expect(`/expertise/${slug}`).toMatch(/^\/expertise\/[a-z0-9-]+$/);
    }
  });

  it("leadership slugs produce valid URL paths", () => {
    const slugs = getAllLeadershipSlugs();
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9-]+$/);
      expect(`/leadership/${slug}`).toMatch(/^\/leadership\/[a-z0-9-]+$/);
    }
  });

  it("total pages equals expected count (1 home + 6 expertise + 5 leadership)", () => {
    const totalPages =
      1 + getAllExpertiseSlugs().length + getAllLeadershipSlugs().length;
    expect(totalPages).toBe(12);
  });
});

describe("SEO: content uniqueness", () => {
  it("all expertise taglines are unique", () => {
    const taglines = expertiseData.map(
      (e: { tagline: string }) => e.tagline
    );
    expect(new Set(taglines).size).toBe(taglines.length);
  });

  it("all leadership taglines are unique", () => {
    const taglines = leadershipData.map(
      (t: { tagline: string }) => t.tagline
    );
    expect(new Set(taglines).size).toBe(taglines.length);
  });
});
