import QuoteCard from "@/components/QuoteCard";
import { getRandomQuote } from "@/data/bible-quotes";

export default function Home() {
  const initialQuote = getRandomQuote();

  return (
    <main>
      <QuoteCard initialQuote={initialQuote} />
    </main>
  );
}
