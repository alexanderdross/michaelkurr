"use client";

import { useEffect } from "react";
import { SECTION_IDS } from "@/constants/sections";

export default function ScrollAnimations() {
  useEffect(() => {
    // Fade-in observer
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document
      .querySelectorAll(".fade-in")
      .forEach((el) => fadeObserver.observe(el));

    // Hash tracking observer
    const hashObserver = new IntersectionObserver(
      (entries) => {
        // Find the most visible section among intersecting entries
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            (!best || entry.intersectionRatio > best.intersectionRatio)
          ) {
            best = entry;
          }
        }
        if (best) {
          const id = best.target.id;
          const newHash = id === "hero" ? "" : `#${id}`;
          if (window.location.hash !== newHash) {
            history.replaceState(null, "", newHash || window.location.pathname);
          }
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75], rootMargin: "-80px 0px -40% 0px" }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) hashObserver.observe(el);
    });

    return () => {
      fadeObserver.disconnect();
      hashObserver.disconnect();
    };
  }, []);

  return null;
}
