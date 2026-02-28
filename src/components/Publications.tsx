import Image from "next/image";

const academicWorks = [
  {
    title:
      "Potentialorientiertes Kooperationsmanagement in der Zulieferindustrie — Vom strategischen Kooperationspotential zur operativen Umsetzung",
    venue: "Dissertation, University of St. Gallen (HSG)",
    isThesis: true,
    href: "https://www.alexandria.unisg.ch/persons/247",
  },
  {
    title:
      "Success factors for collaboration management in manufacturing companies",
    venue:
      "International Journal of Services and Operations Management, Vol. 2(3), pp. 203–221, 2006",
    href: "https://www.inderscienceonline.com/doi/abs/10.1504/IJSOM.2006.009860",
  },
  {
    title:
      "Aufbau und Nutzen von Kooperationen: ApoKop — ein Erfahrungsbericht aus dem Gesundheitswesen",
    venue: "Schuh & Co. Komplexitätsmanagement, 2007",
    href: "https://www.researchgate.net/publication/265078042_Prozessorientierte_Reorganisation",
  },
  {
    title: "Netzwerke in Virtuellen Fabriken",
    venue:
      "SATW-Bulletin / Schweizerische Akademie der technischen Wissenschaften, 2004",
    href: "https://www.amazon.com/Michael-A.-Kurr/e/B004597QVS",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 lg:py-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-6">
        <span className="fade-in block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Research
        </span>
        <h2 className="fade-in font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-16">
          Published Works
        </h2>

        {/* Books */}
        <div className="space-y-12 mb-20">
          {/* Book 1 */}
          <div className="fade-in flex flex-col sm:flex-row gap-8 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="shrink-0 flex justify-center">
              <div className="relative w-40 h-56 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://m.media-amazon.com/images/I/51tu8QPHJnL._SL1026_.jpg"
                  alt="Book cover: Prozessorientierte Reorganisation by Günther Schuh, Thomas Friedli, and Michael A. Kurr"
                  fill
                  quality={80}
                  className="object-cover"
                  sizes="160px"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlNmVhIi8+PC9zdmc+"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-2xl font-semibold text-navy mb-1" lang="de">
                Prozessorientierte Reorganisation
              </h3>
              <p className="text-charcoal/60 text-sm mb-3" lang="de">
                Reengineering-Projekte professionell gestalten und umsetzen
              </p>
              <p className="text-gold font-medium text-sm mb-2">
                Günther Schuh, Thomas Friedli, Michael A. Kurr
              </p>
              <p className="text-charcoal/65 text-sm mb-4">
                Carl Hanser Verlag, 2006 · 204 pages
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                A guide for process-oriented reorganization that combines the
                strengths of radical reengineering with the human factor and
                practical implementability. Features case studies from Schiesser,
                Alu Menziken, and Lista.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.amazon.de/Prozessorientierte-Reorganisation-Reengineering-Projekte-professionell-gestalten/dp/3446407200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2 bg-navy text-white text-sm font-medium rounded hover:bg-navy-light transition-colors"
                >
                  Amazon
                </a>
                <a
                  href="https://www.hanser-elibrary.com/doi/10.3139/9783446410817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2 border border-navy/30 text-navy text-sm font-medium rounded hover:border-navy hover:bg-navy/5 transition-colors"
                >
                  Hanser eLibrary
                </a>
              </div>
            </div>
          </div>

          {/* Book 2 */}
          <div className="fade-in flex flex-col sm:flex-row gap-8 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="shrink-0 flex justify-center">
              <div className="w-40 h-56 rounded-lg bg-gradient-to-br from-navy to-navy-light flex items-center justify-center p-4 shadow-md">
                <span className="text-center font-heading text-white text-lg leading-snug">
                  Kooperations&shy;management
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-2xl font-semibold text-navy mb-1" lang="de">
                Kooperationsmanagement
              </h3>
              <p className="text-charcoal/60 text-sm mb-3" lang="de">
                Systematische Vorbereitung – Gezielter Auf- und Ausbau –
                Entscheidende Erfolgsfaktoren
              </p>
              <p className="text-gold font-medium text-sm mb-2">
                Günther Schuh, Thomas Friedli, Michael A. Kurr
              </p>
              <p className="text-charcoal/65 text-sm mb-4">
                Carl Hanser Verlag, 2005 · 207 pages
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                A step-by-step guide for building successful inter-company
                cooperations, covering systematic preparation, targeted
                development, and the critical success factors that determine
                long-term partnership viability.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.hanser-fachbuch.de/fachbuch/artikel/9783446403796"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2 bg-navy text-white text-sm font-medium rounded hover:bg-navy-light transition-colors"
                >
                  Hanser Fachbuch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Academic work */}
        <div className="fade-in">
          <h3 className="font-heading text-2xl font-semibold text-navy mb-8">
            Academic Work
          </h3>
          <ul className="space-y-6">
            {academicWorks.map((work, i) => (
              <li
                key={i}
                className="border-l-2 border-gold/40 pl-6 py-1"
              >
                {work.isThesis && (
                  <span className="inline-block text-xs font-semibold tracking-wider uppercase text-gold mb-1">
                    Dissertation
                  </span>
                )}
                {work.href ? (
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-navy font-medium hover:text-teal transition-colors"
                  >
                    {work.title}
                  </a>
                ) : (
                  <p className="text-navy font-medium">{work.title}</p>
                )}
                <p className="text-charcoal/65 text-sm mt-1">{work.venue}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
