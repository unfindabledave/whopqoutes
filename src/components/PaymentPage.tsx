"use client";

import { useCallback, useState } from "react";

const PRODUCT_ID = process.env.NEXT_PUBLIC_WHOP_PRODUCT_ID || "prod_aO6zaHBkLCIBD";
const WHOP_URL = "https://whop.com/bibleqoutes/";

export default function PaymentPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = useCallback(async () => {
    setIsLoading(true);

    try {
      // Try Whop iFrame SDK if embedded in Whop
      const { createAppIframeSDK } = await import("@whop-apps/sdk");
      const sdk = createAppIframeSDK();
      await sdk.unlockExperience({ productId: PRODUCT_ID });
    } catch {
      // Fallback: redirect to Whop product page
      window.open(WHOP_URL, "_blank");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16">
      {/* Title */}
      <h1
        className="text-sm tracking-[0.35em] uppercase mb-16"
        style={{
          color: "var(--accent)",
          fontFamily: "'Bodoni Moda', serif",
          fontWeight: 500,
        }}
      >
        The Word
      </h1>

      {/* Tagline */}
      <p
        className="text-2xl md:text-3xl text-center leading-snug max-w-md mb-4"
        style={{
          color: "var(--text-primary)",
          fontWeight: 300,
          fontStyle: "italic",
          letterSpacing: "0.01em",
        }}
      >
        Daily scripture, delivered with grace.
      </p>

      <p
        className="text-sm text-center max-w-sm mb-16"
        style={{
          color: "var(--text-secondary)",
          fontFamily: "'Bodoni Moda', serif",
          lineHeight: 1.8,
        }}
      >
        A curated collection of Bible verses to inspire and uplift your spirit,
        every single day.
      </p>

      {/* Thin rule */}
      <div
        className="w-12 h-px mx-auto mb-10"
        style={{ backgroundColor: "var(--accent)" }}
      />

      {/* Price */}
      <p
        className="text-3xl mb-2"
        style={{
          color: "var(--text-primary)",
          fontFamily: "'Bodoni Moda', serif",
          fontWeight: 500,
        }}
      >
        $9.99
      </p>
      <p
        className="text-xs tracking-[0.2em] uppercase mb-14"
        style={{
          color: "var(--text-secondary)",
          fontFamily: "'Bodoni Moda', serif",
        }}
      >
        One-time access
      </p>

      {/* CTA Button */}
      <button
        onClick={handlePurchase}
        disabled={isLoading}
        className="px-10 py-3 text-xs tracking-[0.3em] uppercase transition-all duration-500 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-80"
        style={{
          color: "var(--bg-primary)",
          backgroundColor: "var(--accent)",
          fontFamily: "'Bodoni Moda', serif",
          fontWeight: 500,
        }}
      >
        {isLoading ? "..." : "Get Access"}
      </button>
    </div>
  );
}
