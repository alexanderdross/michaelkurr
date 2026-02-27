const timeline = [
  {
    date: "2019 – Present",
    title: "Global Head, Human Pharma Services",
    org: "Boehringer Ingelheim",
  },
  {
    date: "MIT Sloan",
    title: "AI Executive Academy",
    org: "Executive Education",
  },
  {
    date: "Earlier",
    title: "Management Consultant",
    org: "Schuh & Co. GmbH",
  },
  {
    date: "Earlier",
    title: "Head of Management Support",
    org: "University of St. Gallen (ITEM/TECTEM)",
  },
  {
    date: "Doctorate",
    title: "Dr. — University of St. Gallen",
    org: "Cooperation Management in the Supplier Industry",
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
              <strong className="text-charcoal">
                Global Head of Human Pharma Services
              </strong>{" "}
              at <strong className="text-charcoal">Boehringer Ingelheim</strong>,
              where he built the entire Global Human Pharma Services organization
              from scratch. Since joining in 2019, he has scaled the organization
              tenfold, achieving full geographical coverage across all global
              markets within just four years.
            </p>
            <p className="fade-in text-lg leading-relaxed text-charcoal/80">
              With over two decades of corporate transformation experience,
              Michael has shaped the success of major organizations including{" "}
              <strong className="text-charcoal">Novartis</strong>,{" "}
              <strong className="text-charcoal">Roche Diagnostics</strong>,{" "}
              <strong className="text-charcoal">Daimler</strong>, and{" "}
              <strong className="text-charcoal">Schott</strong> — serving as both
              a consultant and a transformation leader.
            </p>
            <p className="fade-in text-lg leading-relaxed text-charcoal/80">
              His academic foundation at the{" "}
              <strong className="text-charcoal">University of St. Gallen</strong>{" "}
              in Switzerland, where he earned his doctorate and served as Head of
              Management Support at the Institute for Technology Management,
              shaped his rigorous, research-driven approach to organizational
              design. He further advanced his expertise through executive
              education at the{" "}
              <strong className="text-charcoal">
                MIT Sloan AI Executive Academy
              </strong>
              .
            </p>
            <p className="fade-in text-xl font-heading italic text-navy/70 border-l-4 border-gold pl-6 mt-8">
              &ldquo;Structure follows process follows strategy&rdquo; — anchored
              in the three pillars of <strong>People, Process, and Technology</strong>.
            </p>
          </div>

          {/* Timeline */}
          <div className="fade-in">
            <div className="relative pl-8 border-l-2 border-navy/15 space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[calc(2rem+5px)] w-3 h-3 rounded-full bg-gold border-2 border-offwhite" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-gold">
                    {item.date}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-navy mt-1">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm">{item.org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
