import { LinkedInIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-navy text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="fade-in block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Connect
        </span>
        <h2 className="fade-in font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          Let&rsquo;s Connect
        </h2>
        <p className="fade-in text-white/60 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Interested in corporate transformation, global services, or
          organizational design? I&rsquo;m always open to meaningful
          conversations.
        </p>
        <div className="fade-in">
          <a
            href="https://www.linkedin.com/in/michaelkurr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-navy font-semibold text-lg rounded-lg hover:bg-gold-light transition-colors duration-200 shadow-lg shadow-gold/20"
          >
            <LinkedInIcon className="w-6 h-6" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
