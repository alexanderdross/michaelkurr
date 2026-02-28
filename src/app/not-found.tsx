import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="min-h-screen flex items-center justify-center bg-navy text-white"
    >
      <div className="max-w-xl mx-auto px-6 text-center">
        <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Page Not Found
        </p>
        <h1 className="font-heading text-5xl sm:text-6xl font-bold mb-6">
          404
        </h1>
        <p className="text-white/70 text-lg leading-relaxed mb-10">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-navy font-semibold rounded hover:bg-gold-light transition-colors duration-200"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
