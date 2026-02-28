import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://michaelkurr.com"),
  title: "Dr. Michael Kurr — Operator & Transformation Leader | Pharma & Life Sciences",
  description:
    "Dr. Michael A. Kurr — Founder of Dr. Kurr Advisory. Fractional C-level executive and transformation leader with 20+ years of experience across Boehringer Ingelheim, Novartis, and global pharma. Published author and expert in building world-class organizations.",
  authors: [{ name: "Dr. Michael A. Kurr" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dr. Michael Kurr — Operator & Transformation Leader",
    description:
      "Founder of Dr. Kurr Advisory. Fractional C-level executive in Pharma & Life Sciences. Published author and corporate transformation expert with 20+ years of experience.",
    type: "profile",
    url: "https://michaelkurr.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Dr. Michael Kurr — Operator & Transformation Leader",
    description:
      "Founder of Dr. Kurr Advisory. Fractional C-level executive in Pharma & Life Sciences.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dr. Michael A. Kurr",
              honorificPrefix: "Dr.",
              givenName: "Michael",
              familyName: "Kurr",
              url: "https://michaelkurr.com",
              sameAs: [
                "https://www.linkedin.com/in/michaelkurr/",
                "https://www.amazon.com/Michael-A.-Kurr/e/B004597QVS",
                "https://www.researchgate.net/publication/265078042_Prozessorientierte_Reorganisation",
                "https://www.alexandria.unisg.ch/persons/247",
              ],
              jobTitle: "Founder & Fractional C-Level Executive",
              worksFor: [
                { "@type": "Organization", name: "Dr. Kurr Advisory" },
                { "@type": "Organization", name: "Lemna Bio" },
                { "@type": "Organization", name: "THENA Capital" },
              ],
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "University of St. Gallen (HSG)",
                  url: "https://www.unisg.ch",
                },
                { "@type": "EducationalOrganization", name: "RWTH Aachen University" },
                { "@type": "EducationalOrganization", name: "MIT Sloan School of Management" },
                { "@type": "EducationalOrganization", name: "IMD Business School" },
              ],
              knowsAbout: [
                "Corporate Transformation",
                "Process Reengineering",
                "Global Services Delivery",
                "Cooperation Management",
                "Digital Strategy",
                "AI in Pharmaceuticals",
                "Leadership Development",
                "Fractional C-Level Advisory",
                "Commercial & Medical Operations",
              ],
            }),
          }}
        />
        {/* Book schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Book",
                name: "Prozessorientierte Reorganisation",
                author: [
                  { "@type": "Person", name: "Günther Schuh" },
                  { "@type": "Person", name: "Thomas Friedli" },
                  { "@type": "Person", name: "Dr. Michael A. Kurr" },
                ],
                isbn: "978-3-446-40720-6",
                publisher: { "@type": "Organization", name: "Carl Hanser Verlag" },
                datePublished: "2006",
                numberOfPages: 204,
                url: "https://www.hanser-elibrary.com/doi/10.3139/9783446410817",
              },
              {
                "@context": "https://schema.org",
                "@type": "Book",
                name: "Kooperationsmanagement",
                author: [
                  { "@type": "Person", name: "Günther Schuh" },
                  { "@type": "Person", name: "Thomas Friedli" },
                  { "@type": "Person", name: "Dr. Michael A. Kurr" },
                ],
                isbn: "978-3-446-40036-8",
                publisher: { "@type": "Organization", name: "Carl Hanser Verlag" },
                datePublished: "2005",
                numberOfPages: 207,
                url: "https://www.hanser-fachbuch.de/fachbuch/artikel/9783446403796",
              },
            ]),
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-navy focus:px-4 focus:py-2 focus:rounded focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
