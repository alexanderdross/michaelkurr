"use client";

import { useState, useCallback, FormEvent } from "react";
import Turnstile from "@/components/Turnstile";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleVerify = useCallback((token: string) => setTurnstileToken(token), []);
  const handleExpire = useCallback(() => setTurnstileToken(null), []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Append Turnstile token if available
    if (turnstileToken) {
      data.append("cf-turnstile-response", turnstileToken);
    }

    try {
      const res = await fetch("https://formspree.io/f/xpwzgvkl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTurnstileToken(null);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-bold text-navy mb-2">
          Message Sent
        </h3>
        <p className="text-charcoal/70">
          Thank you for reaching out. I&rsquo;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-offwhite text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-offwhite text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">
          Company <span className="text-charcoal/40 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-offwhite text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors"
          placeholder="Your organization"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-navy mb-1.5">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-offwhite text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors"
        >
          <option value="" disabled>Select a topic</option>
          <option value="Fractional C-Level">Fractional C-Level Mandate</option>
          <option value="Transformation Advisory">Transformation Advisory</option>
          <option value="Strategic Counsel">Strategic Counsel / Board Advisory</option>
          <option value="Speaking">Speaking Engagement</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-offwhite text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors resize-y"
          placeholder="How can I help?"
        />
      </div>

      <Turnstile onVerify={handleVerify} onExpire={handleExpire} />

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email info@michaelkurr.com directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending" || !turnstileToken}
        className="w-full sm:w-auto px-8 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light focus:outline-none focus:ring-2 focus:ring-gold/40 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
