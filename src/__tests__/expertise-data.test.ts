import { describe, it, expect } from "vitest";
import {
  expertiseData,
  getExpertiseBySlug,
  getAllExpertiseSlugs,
} from "@/data/expertise";

describe("expertise data", () => {
  it("has 6 expertise areas", () => {
    expect(expertiseData).toHaveLength(6);
  });

  it("each item has required fields", () => {
    for (const item of expertiseData) {
      expect(item.slug).toBeTruthy();
      expect(item.title).toBeTruthy();
      expect(item.tagline).toBeTruthy();
      expect(item.description).toBeTruthy();
      expect(item.sections.length).toBeGreaterThan(0);
      expect(item.highlights.length).toBeGreaterThan(0);
    }
  });

  it("all slugs are unique", () => {
    const slugs = expertiseData.map((e) => e.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("slugs use only lowercase and hyphens", () => {
    for (const item of expertiseData) {
      expect(item.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("getExpertiseBySlug returns correct item", () => {
    const item = getExpertiseBySlug("corporate-transformation");
    expect(item).toBeDefined();
    expect(item!.title).toBe("Corporate Transformation");
  });

  it("getExpertiseBySlug returns undefined for invalid slug", () => {
    const item = getExpertiseBySlug("nonexistent");
    expect(item).toBeUndefined();
  });

  it("getAllExpertiseSlugs returns all slugs", () => {
    const slugs = getAllExpertiseSlugs();
    expect(slugs).toHaveLength(6);
    expect(slugs).toContain("corporate-transformation");
    expect(slugs).toContain("digital-ai-strategy");
  });

  it("each section has heading and content", () => {
    for (const item of expertiseData) {
      for (const section of item.sections) {
        expect(section.heading).toBeTruthy();
        expect(section.content).toBeTruthy();
        expect(section.content.length).toBeGreaterThan(50);
      }
    }
  });

  it("each highlight has value and label", () => {
    for (const item of expertiseData) {
      for (const highlight of item.highlights) {
        expect(highlight.value).toBeTruthy();
        expect(highlight.label).toBeTruthy();
      }
    }
  });

  it("related links have valid hrefs", () => {
    for (const item of expertiseData) {
      for (const link of item.relatedLinks) {
        expect(link.label).toBeTruthy();
        expect(link.href).toMatch(/^https?:\/\//);
      }
    }
  });
});
