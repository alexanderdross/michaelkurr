const features = [
  {
    name: "CIOLook Magazine",
    desc: "Feature Article",
    href: "https://ciolook.com/from-concept-to-reality-michael-kurr-building-internal-service-organizations-for-excellence-in-customer-experience/",
  },
  {
    name: "Hanser Verlag",
    desc: "Published Author",
    href: "https://www.hanser-elibrary.com/doi/10.3139/9783446410817",
  },
  {
    name: "University of St. Gallen",
    desc: "Research Profile",
    href: "https://www.alexandria.unisg.ch/persons/247",
  },
  {
    name: "ResearchGate",
    desc: "Academic Publications",
    href: "https://www.researchgate.net/publication/265078042_Prozessorientierte_Reorganisation",
  },
  {
    name: "Google Knowledge Graph",
    desc: "Verified Entity",
    href: "https://share.google/5Cq7JCmzDsnMDtf1W",
  },
];

export default function Featured() {
  return (
    <section id="featured" className="py-24 lg:py-32 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <span className="fade-in block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Recognition
        </span>
        <h2 className="fade-in font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-16">
          As Featured In
        </h2>

        <div className="fade-in grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {features.map((f) => (
            <a
              key={f.name}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              title={`Dr. Michael Kurr featured on ${f.name} — ${f.desc}`}
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:border-gold/40 hover:shadow-md transition-all duration-300 text-center min-h-[120px]"
            >
              <span className="font-heading text-lg font-semibold text-navy group-hover:text-gold transition-colors duration-200">
                {f.name}
              </span>
              <span className="text-xs text-charcoal/70 mt-1">{f.desc}</span>
            </a>
          ))}
        </div>

        {/* Testimonial */}
        <div className="fade-in max-w-3xl mx-auto bg-white rounded-2xl p-10 border border-gray-200 shadow-sm">
          <svg
            className="w-10 h-10 text-gold/40 mb-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-lg text-charcoal/80 leading-relaxed font-heading italic mb-6">
            &ldquo;Michael established Boehringer&rsquo;s service and delivery
            organisation from scratch. This is an impressive organisation that
            has proven its value across multiple services and departments ranging
            from commercial to medical. He is admired for his bold vision,
            incredible focus on people development, and ability to make things
            happen.&rdquo;
          </blockquote>
          <cite className="text-sm text-charcoal/70 not-italic">
            — LinkedIn Recommendation from a Colleague
          </cite>
        </div>
      </div>
    </section>
  );
}
