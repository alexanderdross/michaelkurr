import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Michael Kurr — Global Transformation Leader",
  description:
    "Dr. Michael A. Kurr — Global Head of Human Pharma Services at Boehringer Ingelheim. Published author, transformation leader, and expert in building world-class organizations from the ground up.",
  authors: [{ name: "Dr. Michael A. Kurr" }],
  openGraph: {
    title: "Dr. Michael Kurr — Global Transformation Leader",
    description:
      "Global Head of Human Pharma Services at Boehringer Ingelheim. Published author and corporate transformation expert with 20+ years of experience.",
    type: "profile",
    url: "https://michaelkurr.com",
    locale: "en_US",
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
              jobTitle: "Global Head of Human Pharma Services",
              worksFor: {
                "@type": "Organization",
                name: "Boehringer Ingelheim",
                url: "https://www.boehringer-ingelheim.com",
              },
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "University of St. Gallen (HSG)",
                  url: "https://www.unisg.ch",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "MIT Sloan School of Management",
                },
              ],
              knowsAbout: [
                "Corporate Transformation",
                "Process Reengineering",
                "Global Services Delivery",
                "Cooperation Management",
                "Digital Strategy",
                "AI in Pharmaceuticals",
                "Leadership Development",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
