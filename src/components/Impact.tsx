const metrics = [
  { value: "10", suffix: "x", desc: "Organization growth at Boehringer Ingelheim" },
  { value: "4", suffix: "years", desc: "From zero to full global scale" },
  { value: "20", suffix: "+", desc: "Years of corporate transformation experience" },
  { value: "5", suffix: "", desc: "Major global organizations transformed" },
];

export default function Impact() {
  return (
    <section id="impact" className="py-24 lg:py-32 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6">
        <span className="fade-in block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Results
        </span>
        <h2 className="fade-in font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-16">
          From Concept to Reality
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((m) => (
            <div key={m.desc} className="fade-in text-center lg:text-left">
              <div className="flex items-baseline justify-center lg:justify-start gap-1 mb-2">
                <span className="text-5xl sm:text-6xl font-heading font-bold text-gold">
                  {m.value}
                </span>
                {m.suffix && (
                  <span className="text-2xl font-heading text-gold/70">
                    {m.suffix}
                  </span>
                )}
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* #1 highlight */}
        <div className="fade-in flex flex-col sm:flex-row items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
          <div className="shrink-0 w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center">
            <span className="text-3xl font-heading font-bold text-gold">#1</span>
          </div>
          <p className="text-white/75 text-lg leading-relaxed text-center sm:text-left">
            Built one of the{" "}
            <strong className="text-white">
              leading content supply chains in the industry
            </strong>
            , according to external benchmarking studies — scaling from a small
            delivery unit to a comprehensive global services organization spanning
            every market worldwide.
          </p>
        </div>

        <div className="fade-in max-w-3xl">
          <p className="text-white/55 leading-relaxed">
            From his academic roots at the University of St. Gallen to building
            one of the pharma industry&rsquo;s leading service organizations at
            Boehringer Ingelheim, Dr. Kurr&rsquo;s career is defined by turning
            ambitious visions into operational reality. His journey through
            consulting, academia, and corporate leadership across five major
            global organizations has shaped a unique perspective on what it takes
            to transform from the ground up.
          </p>
        </div>
      </div>
    </section>
  );
}
