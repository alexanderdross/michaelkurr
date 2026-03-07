import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Impact from "@/components/Impact";
import Publications from "@/components/Publications";
import Leadership from "@/components/Leadership";
import Featured from "@/components/Featured";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import {
  bookSchemas,
  profilePageSchema,
  articleSchemas,
  navigationSchema,
  faqSchema,
  productSchema,
} from "@/data/schemas";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            bookSchemas,
            profilePageSchema,
            articleSchemas,
            navigationSchema,
            faqSchema,
            productSchema,
          ].flat()),
        }}
      />
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Expertise />
        <Impact />
        <Publications />
        <Leadership />
        <Featured />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  );
}
