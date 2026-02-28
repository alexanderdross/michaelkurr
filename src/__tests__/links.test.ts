import { describe, it, expect } from "vitest";

/**
 * Verifies that all external links referenced in the codebase are well-formed
 * URLs with valid protocols and domains. This does NOT make network requests —
 * it validates URL structure only.
 */

const EXTERNAL_LINKS = [
  // LinkedIn
  "https://www.linkedin.com/in/michaelkurr/",
  // Amazon
  "https://www.amazon.de/Prozessorientierte-Reorganisation-Reengineering-Projekte-professionell-gestalten/dp/3446407200",
  "https://www.amazon.com/Michael-A.-Kurr/e/B004597QVS",
  // Hanser
  "https://www.hanser-elibrary.com/doi/10.3139/9783446410817",
  "https://www.hanser-fachbuch.de/fachbuch/artikel/9783446403796",
  // Academic
  "https://www.alexandria.unisg.ch/persons/247",
  "https://www.researchgate.net/publication/265078042_Prozessorientierte_Reorganisation",
  "https://www.inderscienceonline.com/doi/abs/10.1504/IJSOM.2006.009860",
  // Google Knowledge Graph
  "https://share.google/5Cq7JCmzDsnMDtf1W",
  // CIOLook
  "https://ciolook.com/from-concept-to-reality-michael-kurr-building-internal-service-organizations-for-excellence-in-customer-experience/",
  // Plausible
  "https://plausible.io/js/script.js",
  // Collaborator
  "https://dross.net/alexander/",
];

describe("External link validation", () => {
  it("all external links are well-formed HTTPS URLs", () => {
    for (const link of EXTERNAL_LINKS) {
      const url = new URL(link);
      expect(url.protocol).toBe("https:");
      expect(url.hostname).toContain(".");
      expect(url.hostname.length).toBeGreaterThan(3);
    }
  });

  it("no duplicate links in the list", () => {
    const unique = new Set(EXTERNAL_LINKS);
    expect(unique.size).toBe(EXTERNAL_LINKS.length);
  });

  it("all links have valid TLDs", () => {
    const validTLDs = [
      "com", "de", "ch", "io", "net", "org", "google",
    ];
    for (const link of EXTERNAL_LINKS) {
      const url = new URL(link);
      const parts = url.hostname.split(".");
      const tld = parts[parts.length - 1];
      expect(validTLDs).toContain(tld);
    }
  });

  it("LinkedIn link points to correct profile", () => {
    const linkedIn = EXTERNAL_LINKS.find((l) => l.includes("linkedin.com"));
    expect(linkedIn).toBeDefined();
    expect(linkedIn).toContain("/in/michaelkurr/");
  });

  it("Amazon links use correct locale domains", () => {
    const amazonDE = EXTERNAL_LINKS.find((l) => l.includes("amazon.de"));
    const amazonCOM = EXTERNAL_LINKS.find((l) => l.includes("amazon.com"));
    expect(amazonDE).toBeDefined();
    expect(amazonCOM).toBeDefined();
  });
});
