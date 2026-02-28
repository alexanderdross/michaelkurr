"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen flex items-center justify-center bg-navy text-white">
          <div className="max-w-md mx-auto px-6 text-center">
            <div className="w-12 h-1 bg-gold mx-auto mb-8 rounded-full" />
            <h1 className="font-heading text-3xl font-bold mb-4">
              Something went wrong
            </h1>
            <p className="text-white/60 mb-8">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-gold text-navy font-semibold rounded hover:bg-gold-light transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
