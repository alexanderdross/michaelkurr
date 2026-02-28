export default function Footer() {
  return (
    <footer className="py-8 bg-navy-dark text-white/40 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dr. Michael A. Kurr. All rights
          reserved.
        </p>
        <nav aria-label="Footer navigation" className="flex items-center gap-6 text-sm">
          <a
            href="#about"
            className="hover:text-white/70 transition-colors"
          >
            About
          </a>
          <a
            href="#publications"
            className="hover:text-white/70 transition-colors"
          >
            Publications
          </a>
          <a
            href="https://www.linkedin.com/in/michaelkurr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70 transition-colors"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
