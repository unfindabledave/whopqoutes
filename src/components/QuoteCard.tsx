"use client";

import { useState, useCallback } from "react";
import type { BibleQuote } from "@/data/bible-quotes";

export default function QuoteCard({
  initialQuote,
}: {
  initialQuote: BibleQuote;
}) {
  const [quote, setQuote] = useState<BibleQuote>(initialQuote);
  const [isLoading, setIsLoading] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const fetchNewQuote = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/quote");
      const data = await res.json();
      setQuote(data);
      setAnimationKey((prev) => prev + 1);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16">
      {/* Title */}
      <h1
        className="text-sm tracking-[0.35em] uppercase mb-20"
        style={{
          color: "var(--accent)",
          fontFamily: "'Bodoni Moda', serif",
          fontWeight: 500,
        }}
      >
        The Word
      </h1>

      {/* Quote */}
      <div
        key={animationKey}
        className="animate-fade-in w-full max-w-xl text-center px-4"
      >
        <blockquote
          className="text-2xl md:text-3xl leading-snug mb-10"
          style={{
            color: "var(--text-primary)",
            fontWeight: 300,
            fontStyle: "italic",
            letterSpacing: "0.01em",
          }}
        >
          {quote.text}
        </blockquote>

        {/* Thin rule */}
        <div
          className="w-12 h-px mx-auto mb-6"
          style={{ backgroundColor: "var(--accent)" }}
        />

        {/* Reference */}
        <p
          className="text-xs tracking-[0.3em] uppercase"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "'Bodoni Moda', serif",
            fontWeight: 400,
          }}
        >
          {quote.reference}
        </p>
      </div>

      {/* Button */}
      <button
        onClick={fetchNewQuote}
        disabled={isLoading}
        className="mt-20 px-6 py-2.5 text-xs tracking-[0.25em] uppercase transition-all duration-500 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-70"
        style={{
          color: "var(--accent)",
          border: "1px solid var(--border)",
          backgroundColor: "transparent",
          fontFamily: "'Bodoni Moda', serif",
          fontWeight: 500,
        }}
      >
        {isLoading ? "..." : "Refresh"}
      </button>
    </div>
  );
}
