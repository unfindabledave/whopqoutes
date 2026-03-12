import { headers } from "next/headers";
import { hasAccess } from "@whop-apps/sdk";
import QuoteCard from "@/components/QuoteCard";
import PaymentPage from "@/components/PaymentPage";
import { getRandomQuote } from "@/data/bible-quotes";

const PRODUCT_ID = process.env.NEXT_PUBLIC_WHOP_PRODUCT_ID || "prod_aO6zaHBkLCIBD";

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ experienceId: string }>;
}) {
  const { experienceId } = await params;

  const headersList = await headers();

  let userHasAccess = false;
  try {
    userHasAccess = await hasAccess({
      to: PRODUCT_ID,
      headers: headersList,
    });
  } catch {
    // If auth fails (e.g. not in Whop iframe), default to no access
    userHasAccess = false;
  }

  if (!userHasAccess) {
    return (
      <main>
        <PaymentPage />
      </main>
    );
  }

  const initialQuote = getRandomQuote();

  return (
    <main>
      <QuoteCard initialQuote={initialQuote} />
    </main>
  );
}
