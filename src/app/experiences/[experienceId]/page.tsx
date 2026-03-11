import { headers } from "next/headers";
import QuoteCard from "@/components/QuoteCard";
import { getRandomQuote } from "@/data/bible-quotes";

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ experienceId: string }>;
}) {
  const { experienceId } = await params;
  const initialQuote = getRandomQuote();

  // In production, you would verify the user's access here using the Whop SDK:
  // import { WhopAPI } from "@whop-apps/sdk";
  // const headersList = await headers();
  // const { userId } = await WhopAPI.verifyUserToken(headersList);
  // const access = await WhopAPI.checkAccess({ userId, resourceId: experienceId });

  return (
    <main>
      <QuoteCard initialQuote={initialQuote} />
    </main>
  );
}
