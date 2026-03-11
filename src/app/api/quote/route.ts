import { NextResponse } from "next/server";
import { getRandomQuote } from "@/data/bible-quotes";

export async function GET() {
  const quote = getRandomQuote();
  return NextResponse.json(quote);
}
