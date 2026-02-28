const timeline = [
  {
    date: "2026 – Present",
    title: "Founder — Dr. Kurr Advisory",
    org: "Fractional C-Level & Advisory | Pharma & Life Sciences",
  },
  {
    date: "2026 – Present",
    title: "Fractional CCO, Lemna Bio",
    org: "Strategy & Partnerships | Computational Drug Design",
  },
  {
    date: "2026 – Present",
    title: "Fellow — THENA Capital",
    org: "MedTech Investment | Early-Stage Digital & Device Companies",
  },
  {
    date: "2019 – 2025",
    title: "Global Head, Human Pharma Services",
    org: "Boehringer Ingelheim",
  },
  {
    date: "2013 – 2019",
    title: "Head of Business Service Excellence & Senior Global Program Lead",
    org: "Novartis",
  },
  {
    date: "Earlier",
    title: "Management Consultant",
    org: "Schuh & Co. GmbH",
  },
  {
    date: "Doctorate",
    title: "Dr. oec. HSG — University of St. Gallen",
    org: "Economics, Technology Management",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-6">
        <span className="fade-in block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Background
        </span>
        <h2 className="fade-in font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-16 max-w-3xl">
          Two Decades of Transforming Global Organizations
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio text */}
          <div className="space-y-6">
            <p className="fade-in text-lg leading-relaxed text-charcoal/80">
              Dr. Michael A. Kurr is the{" "}
              <strong className="text-charcoal">Founder of Dr. Kurr Advisory</strong>,
              an independent platform for fractional C-level and advisory mandates
              in Pharma &amp; Life Sciences. He also serves as{" "}
              <strong className="text-charcoal">
                Fractional Chief Commercial Officer
              </strong>{" "}
              at <strong className="text-charcoal">Lemna Bio</strong> and as a{" "}
              <strong className="text-charcoal">Fellow</strong> at{" "}
              <strong className="text-charcoal">THENA Capital</strong>, a
              UK-based specialist MedTech investor.
            </p>
            <p className="fade-in text-lg leading-relaxed text-charcoal/80">
              Previously, he served as{" "}
              <strong className="text-charcoal">
                Global Head of Human Pharma Services
              </strong>{" "}
              at <strong className="text-charcoal">Boehringer Ingelheim</strong>{" "}
              (2019–2025), where he built the entire global services organization
              from scratch — scaling it tenfold to full geographical coverage
              within four years. Before that, he spent eight years at{" "}
              <strong className="text-charcoal">Novartis</strong> in senior
              leadership roles across global business services and product
              lifecycle services.
            </p>
            <p className="fade-in text-lg leading-relaxed text-charcoal/80">
              His academic foundation includes a{" "}
              <strong className="text-charcoal">Doctorate</strong> and{" "}
              <strong className="text-charcoal">Executive MBA</strong> from the{" "}
              <strong className="text-charcoal">University of St. Gallen</strong>,
              a <strong className="text-charcoal">Dipl.-Ing.</strong> from{" "}
              <strong className="text-charcoal">RWTH Aachen University</strong>,
              and executive programs at{" "}
              <strong className="text-charcoal">MIT Sloan</strong> and{" "}
              <strong className="text-charcoal">IMD</strong> in digital
              transformation and AI.
            </p>
            <p className="fade-in text-xl font-heading italic text-navy/70 border-l-4 border-gold pl-6 mt-8">
              &ldquo;Structure follows process follows strategy&rdquo; — anchored
              in the three pillars of <strong>People, Process, and Technology</strong>.
            </p>
          </div>

          {/* Timeline */}
          <div className="fade-in">
            <ol className="relative pl-8 border-l-2 border-navy/15 space-y-10 list-none">
              {timeline.map((item, i) => (
                <li key={i} className="relative">
                  <div className="absolute -left-[calc(2rem+5px)] w-3 h-3 rounded-full bg-gold border-2 border-offwhite" aria-hidden="true" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-gold">
                    {item.date}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-navy mt-1">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/65 text-sm">{item.org}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
