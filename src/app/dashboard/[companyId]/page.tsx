import { getRandomQuote, bibleQuotes } from "@/data/bible-quotes";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ companyId: string }>;
}) {
  const { companyId } = await params;

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: "var(--accent)" }}
          >
            ✝ Bible Quote App Dashboard
          </h1>
          <p style={{ color: "var(--text-secondary)" }}>
            Manage your Daily Bible Quote app
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div
            className="rounded-xl p-6 text-center"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <p
              className="text-3xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              {bibleQuotes.length}
            </p>
            <p style={{ color: "var(--text-secondary)" }}>Total Quotes</p>
          </div>
          <div
            className="rounded-xl p-6 text-center"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <p
              className="text-3xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              {new Set(bibleQuotes.map((q) => q.book)).size}
            </p>
            <p style={{ color: "var(--text-secondary)" }}>Books Covered</p>
          </div>
          <div
            className="rounded-xl p-6 text-center"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <p
              className="text-3xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              Active
            </p>
            <p style={{ color: "var(--text-secondary)" }}>Status</p>
          </div>
        </div>

        {/* Quote List */}
        <div
          className="rounded-xl p-6"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
        >
          <h2
            className="text-xl font-bold mb-4"
            style={{ color: "var(--accent)" }}
          >
            All Quotes
          </h2>
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
            {bibleQuotes.map((quote, index) => (
              <div
                key={index}
                className="rounded-lg p-4 transition-colors"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="text-sm italic mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  &ldquo;{quote.text}&rdquo;
                </p>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  — {quote.reference}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
