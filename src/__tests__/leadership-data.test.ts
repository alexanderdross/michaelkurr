import { describe, it, expect } from "vitest";
import {
  leadershipData,
  getLeadershipBySlug,
  getAllLeadershipSlugs,
} from "@/data/leadership";

describe("leadership data", () => {
  it("has 5 leadership traits", () => {
    expect(leadershipData).toHaveLength(5);
  });

  it("each trait has required fields", () => {
    for (const trait of leadershipData) {
      expect(trait.slug).toBeTruthy();
      expect(trait.name).toBeTruthy();
      expect(trait.tagline).toBeTruthy();
      expect(trait.description).toBeTruthy();
      expect(trait.sections.length).toBeGreaterThan(0);
    }
  });

  it("includes the five core traits", () => {
    const names = leadershipData.map((t) => t.name);
    expect(names).toContain("Transparency");
    expect(names).toContain("Respect");
    expect(names).toContain("Empowerment");
    expect(names).toContain("Fairness");
    expect(names).toContain("Vision");
  });

  it("all slugs are unique", () => {
    const slugs = leadershipData.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("slugs use only lowercase and hyphens", () => {
    for (const trait of leadershipData) {
      expect(trait.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("getLeadershipBySlug returns correct trait", () => {
    const trait = getLeadershipBySlug("transparency");
    expect(trait).toBeDefined();
    expect(trait!.name).toBe("Transparency");
  });

  it("getLeadershipBySlug returns undefined for invalid slug", () => {
    const trait = getLeadershipBySlug("nonexistent");
    expect(trait).toBeUndefined();
  });

  it("getAllLeadershipSlugs returns all slugs", () => {
    const slugs = getAllLeadershipSlugs();
    expect(slugs).toHaveLength(5);
    expect(slugs).toContain("transparency");
    expect(slugs).toContain("vision");
  });

  it("each section has heading and meaningful content", () => {
    for (const trait of leadershipData) {
      for (const section of trait.sections) {
        expect(section.heading).toBeTruthy();
        expect(section.content).toBeTruthy();
        expect(section.content.length).toBeGreaterThan(50);
      }
    }
  });

  it("each trait has a quote", () => {
    for (const trait of leadershipData) {
      expect(trait.quote).toBeTruthy();
    }
  });
});
