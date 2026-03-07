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
        <h2 className="fade-in font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-16 group/heading">
          <a href="#publications" title="Published Books & Academic Papers by Dr. Michael Kurr" className="hover:text-navy/80 transition-colors">
            Published Works
            <span className="text-gold/0 group-hover/heading:text-gold/60 transition-colors ml-2 text-2xl" aria-hidden="true">#</span>
          </a>
        </h2>

        {/* Books */}
        <div className="space-y-12 mb-20">
          {/* Book 1 */}
          <article className="fade-in flex flex-col sm:flex-row gap-8 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="shrink-0 flex justify-center" aria-hidden="true">
              <div className="w-40 h-56 rounded-lg overflow-hidden shadow-md">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/images/book-reorganisation-160.webp 160w, /images/book-reorganisation-320.webp 320w"
                    sizes="160px"
                  />
                  <source
                    type="image/jpeg"
                    srcSet="/images/book-reorganisation-160.jpg 160w, /images/book-reorganisation-320.jpg 320w"
                    sizes="160px"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/book-reorganisation-160.jpg"
                    alt="Book cover: Prozessorientierte Reorganisation by Günther Schuh, Thomas Friedli, and Michael A. Kurr"
                    title="Prozessorientierte Reorganisation — Carl Hanser Verlag, 2006"
                    width={160}
                    height={224}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-2xl font-semibold text-navy mb-1" lang="de">
                Prozessorientierte Reorganisation
              </h3>
              <p className="text-charcoal/80 text-sm mb-3" lang="de">
                Reengineering-Projekte professionell gestalten und umsetzen
              </p>
              <p className="text-gold font-medium text-sm mb-2">
                Günther Schuh, Thomas Friedli, Michael A. Kurr
              </p>
              <p className="text-charcoal/70 text-sm mb-4">
                Carl Hanser Verlag, 2006 · 204 pages
              </p>
              <p className="text-charcoal/75 leading-relaxed mb-6">
                A guide for process-oriented reorganization that combines the
                strengths of radical reengineering with the human factor and
                practical implementability. Features case studies from Schiesser,
                Alu Menziken, and Lista.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://amzn.to/4b4Ridf"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  title="Buy Prozessorientierte Reorganisation on Amazon — Reengineering-Projekte professionell gestalten und umsetzen by Schuh, Friedli & Kurr"
                  aria-label="Buy Prozessorientierte Reorganisation on Amazon"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-navy text-white text-sm font-medium rounded hover:bg-navy-light transition-colors"
                >
                  <svg className="w-16 h-5" viewBox="0 0 602.28 181.499" fill="currentColor" aria-hidden="true"><path d="M373.642 141.938c-34.999 25.797-85.729 39.561-129.406 39.561-61.243 0-116.377-22.651-158.088-60.325-3.277-2.963-.341-7.005 3.592-4.7 45.014 26.191 100.673 41.947 158.166 41.947 38.775 0 81.429-8.022 120.65-24.67 5.925-2.517 10.88 3.879 5.086 8.187" /><path d="M388.193 125.29c-4.464-5.716-29.573-2.7-40.846-1.365-3.435.419-3.959-2.569-.865-4.7 20.003-14.078 52.822-10.015 56.648-5.3 3.826 4.742-.996 37.59-19.787 53.26-2.884 2.412-5.637 1.127-4.358-2.073 4.228-10.567 13.672-34.105 9.208-39.822" /><path d="M348.133 23.783V7.307c0-2.503 1.896-4.176 4.176-4.176h73.863c2.373 0 4.269 1.7 4.269 4.176v14.105c-.026 2.373-2.029 5.468-5.572 10.382l-38.267 54.644c14.212-.341 29.231 1.776 42.115 9.071 2.909 1.645 3.695 4.059 3.92 6.432v17.563c0 2.399-2.648 5.2-5.428 3.748-22.677-11.891-52.796-13.196-77.86.131-2.556 1.392-5.23-1.374-5.23-3.774v-16.69c0-2.674.026-7.242 2.726-11.312l44.33-63.584h-38.592c-2.373 0-4.269-1.673-4.269-4.176m-262.66 96.885h-22.467c-2.149-.157-3.853-1.776-4.01-3.826V7.517c0-2.306 1.907-4.15 4.269-4.15h20.938c2.176.079 3.92 1.75 4.084 3.826v13.949h.341c5.468-13.666 15.745-20.024 29.598-20.024 14.078 0 22.887 6.358 29.179 20.024 5.441-13.666 17.825-20.024 31.097-20.024 9.436 0 19.735 3.879 26.033 12.598 7.111 9.697 5.664 23.775 5.664 36.136l-.026 56.727c0 2.306-1.907 4.176-4.269 4.176h-22.44c-2.202-.157-3.959-1.959-3.959-4.176V54.244c0-4.856.446-16.977-.629-21.574-1.673-7.738-6.695-9.907-13.196-9.907-5.441 0-11.131 3.617-13.457 9.411-2.326 5.795-2.1 15.483-2.1 22.07v52.335c0 2.306-1.907 4.176-4.269 4.176h-22.44c-2.228-.157-3.959-1.959-3.959-4.176l-.026-52.335c0-12.834 2.1-31.717-13.825-31.717-15.587 0-15.562 18.41-15.562 31.717v52.335c0 2.306-1.907 4.176-4.269 4.176m407.093-97.55c33.326 0 51.36 28.622 51.36 65.024 0 35.168-19.919 63.061-51.36 63.061-32.67 0-50.443-28.622-50.443-64.295 0-35.907 17.982-63.79 50.443-63.79m.184 23.539c-16.53 0-17.563 22.519-17.563 36.555 0 14.063-.21 44.094 17.379 44.094 17.353 0 18.176-24.223 18.176-38.989 0-9.697-.419-21.31-3.382-30.566-2.543-8.029-7.608-11.094-14.61-11.094m93.127 74.011h-22.388c-2.202-.157-3.959-1.959-3.959-4.176l-.026-99.132c.21-2.073 2.018-3.695 4.269-3.695h20.833c1.933.105 3.514 1.392 3.985 3.172v15.168h.341c6.226-13.875 14.948-20.415 30.328-20.415 10.094 0 19.945 3.617 26.27 13.589 5.9 9.254 5.9 24.818 5.9 36.136v55.483c-.288 1.959-2.073 3.514-4.269 3.514h-22.545c-2.018-.157-3.669-1.62-3.906-3.514V55.245c0-12.362 1.434-30.486-14.029-30.486-5.441 0-10.462 3.617-12.945 9.124-3.146 6.982-3.565 13.928-3.565 21.362v51.308c-.026 2.306-1.959 4.176-4.295 4.176" /></svg>
                  Buy on Amazon
                </a>
              </div>
            </div>
          </article>

          {/* Book 2 */}
          <article className="fade-in flex flex-col sm:flex-row gap-8 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
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
              <p className="text-charcoal/80 text-sm mb-3" lang="de">
                Systematische Vorbereitung – Gezielter Auf- und Ausbau –
                Entscheidende Erfolgsfaktoren
              </p>
              <p className="text-gold font-medium text-sm mb-2">
                Günther Schuh, Thomas Friedli, Michael A. Kurr
              </p>
              <p className="text-charcoal/70 text-sm mb-4">
                Carl Hanser Verlag, 2005 · 207 pages
              </p>
              <p className="text-charcoal/75 leading-relaxed mb-6">
                A step-by-step guide for building successful inter-company
                cooperations, covering systematic preparation, targeted
                development, and the critical success factors that determine
                long-term partnership viability.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://amzn.to/3OOyTdn"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  title="Buy Kooperationsmanagement on Amazon — Systematische Vorbereitung, Gezielter Auf- und Ausbau by Schuh, Friedli & Kurr"
                  aria-label="Buy Kooperationsmanagement on Amazon"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-navy text-white text-sm font-medium rounded hover:bg-navy-light transition-colors"
                >
                  <svg className="w-16 h-5" viewBox="0 0 602.28 181.499" fill="currentColor" aria-hidden="true"><path d="M373.642 141.938c-34.999 25.797-85.729 39.561-129.406 39.561-61.243 0-116.377-22.651-158.088-60.325-3.277-2.963-.341-7.005 3.592-4.7 45.014 26.191 100.673 41.947 158.166 41.947 38.775 0 81.429-8.022 120.65-24.67 5.925-2.517 10.88 3.879 5.086 8.187" /><path d="M388.193 125.29c-4.464-5.716-29.573-2.7-40.846-1.365-3.435.419-3.959-2.569-.865-4.7 20.003-14.078 52.822-10.015 56.648-5.3 3.826 4.742-.996 37.59-19.787 53.26-2.884 2.412-5.637 1.127-4.358-2.073 4.228-10.567 13.672-34.105 9.208-39.822" /><path d="M348.133 23.783V7.307c0-2.503 1.896-4.176 4.176-4.176h73.863c2.373 0 4.269 1.7 4.269 4.176v14.105c-.026 2.373-2.029 5.468-5.572 10.382l-38.267 54.644c14.212-.341 29.231 1.776 42.115 9.071 2.909 1.645 3.695 4.059 3.92 6.432v17.563c0 2.399-2.648 5.2-5.428 3.748-22.677-11.891-52.796-13.196-77.86.131-2.556 1.392-5.23-1.374-5.23-3.774v-16.69c0-2.674.026-7.242 2.726-11.312l44.33-63.584h-38.592c-2.373 0-4.269-1.673-4.269-4.176m-262.66 96.885h-22.467c-2.149-.157-3.853-1.776-4.01-3.826V7.517c0-2.306 1.907-4.15 4.269-4.15h20.938c2.176.079 3.92 1.75 4.084 3.826v13.949h.341c5.468-13.666 15.745-20.024 29.598-20.024 14.078 0 22.887 6.358 29.179 20.024 5.441-13.666 17.825-20.024 31.097-20.024 9.436 0 19.735 3.879 26.033 12.598 7.111 9.697 5.664 23.775 5.664 36.136l-.026 56.727c0 2.306-1.907 4.176-4.269 4.176h-22.44c-2.202-.157-3.959-1.959-3.959-4.176V54.244c0-4.856.446-16.977-.629-21.574-1.673-7.738-6.695-9.907-13.196-9.907-5.441 0-11.131 3.617-13.457 9.411-2.326 5.795-2.1 15.483-2.1 22.07v52.335c0 2.306-1.907 4.176-4.269 4.176h-22.44c-2.228-.157-3.959-1.959-3.959-4.176l-.026-52.335c0-12.834 2.1-31.717-13.825-31.717-15.587 0-15.562 18.41-15.562 31.717v52.335c0 2.306-1.907 4.176-4.269 4.176m407.093-97.55c33.326 0 51.36 28.622 51.36 65.024 0 35.168-19.919 63.061-51.36 63.061-32.67 0-50.443-28.622-50.443-64.295 0-35.907 17.982-63.79 50.443-63.79m.184 23.539c-16.53 0-17.563 22.519-17.563 36.555 0 14.063-.21 44.094 17.379 44.094 17.353 0 18.176-24.223 18.176-38.989 0-9.697-.419-21.31-3.382-30.566-2.543-8.029-7.608-11.094-14.61-11.094m93.127 74.011h-22.388c-2.202-.157-3.959-1.959-3.959-4.176l-.026-99.132c.21-2.073 2.018-3.695 4.269-3.695h20.833c1.933.105 3.514 1.392 3.985 3.172v15.168h.341c6.226-13.875 14.948-20.415 30.328-20.415 10.094 0 19.945 3.617 26.27 13.589 5.9 9.254 5.9 24.818 5.9 36.136v55.483c-.288 1.959-2.073 3.514-4.269 3.514h-22.545c-2.018-.157-3.669-1.62-3.906-3.514V55.245c0-12.362 1.434-30.486-14.029-30.486-5.441 0-10.462 3.617-12.945 9.124-3.146 6.982-3.565 13.928-3.565 21.362v51.308c-.026 2.306-1.959 4.176-4.295 4.176" /></svg>
                  Buy on Amazon
                </a>
              </div>
            </div>
          </article>
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
                    title={`Read: ${work.title}`}
                    className="block text-navy font-medium hover:text-teal transition-colors"
                  >
                    {work.title}
                  </a>
                ) : (
                  <p className="text-navy font-medium">{work.title}</p>
                )}
                <p className="text-charcoal/70 text-sm mt-1">{work.venue}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
