"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About", title: "Learn about Dr. Michael Kurr's background and career" },
  { href: "#expertise", label: "Expertise", title: "View Dr. Kurr's areas of expertise" },
  { href: "#impact", label: "Impact", title: "See key achievements and career highlights" },
  { href: "#publications", label: "Publications", title: "Browse published books and academic works" },
  { href: "#leadership", label: "Leadership", title: "Discover Dr. Kurr's leadership philosophy" },
  { href: "#recommendations", label: "Testimonials", title: "Read LinkedIn recommendations and colleague testimonials" },
];

// Section IDs in page order — used to determine which nav link to highlight.
// "featured" maps to #recommendations (Testimonials); "contact" maps to Connect button.
const SECTION_IDS = [
  "hero",
  "about",
  "expertise",
  "impact",
  "publications",
  "leadership",
  "featured",
  "recommendations",
  "contact",
];

// Map section IDs to the nav hash they should highlight
const sectionToHash = (id: string): string => {
  if (id === "hero") return "";
  if (id === "featured") return "#recommendations";
  return `#${id}`;
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        }
        // Pick the first visible section in page order
        for (const id of SECTION_IDS) {
          if (visibleSections.has(id)) {
            setActiveHash(sectionToHash(id));
            return;
          }
        }
      },
      { threshold: 0.05, rootMargin: "-80px 0px -50% 0px" }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const isActive = (href: string) => activeHash === href;
  const isContactActive = activeHash === "#contact";

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="font-heading text-xl font-bold text-white tracking-wider"
          aria-label="Dr. Michael Kurr — Home"
          title="Dr. Michael Kurr — Back to top"
        >
          MK
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                title={link.title}
                aria-current={isActive(link.href) ? "true" : undefined}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-gold"
                    : "text-white/80 hover:text-gold"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              title="Get in touch with Dr. Michael Kurr"
              aria-current={isContactActive ? "true" : undefined}
              className={`text-sm font-medium px-5 py-2 border rounded transition-all duration-200 ${
                isContactActive
                  ? "border-gold bg-gold text-navy"
                  : "border-gold text-gold hover:bg-gold hover:text-navy"
              }`}
            >
              Connect
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-3"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-navy/95 backdrop-blur-md border-t border-white/10 mt-2"
        >
          <ul className="flex flex-col py-4 px-6 gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  title={link.title}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(link.href) ? "true" : undefined}
                  className={`block text-base transition-colors py-3 ${
                    isActive(link.href)
                      ? "text-gold"
                      : "text-white/80 hover:text-gold"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                title="Get in touch with Dr. Michael Kurr"
                onClick={() => setMenuOpen(false)}
                className={`inline-block text-base px-5 py-3 border rounded transition-all mt-2 ${
                  isContactActive
                    ? "border-gold bg-gold text-navy"
                    : "border-gold text-gold hover:bg-gold hover:text-navy"
                }`}
              >
                Connect
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
