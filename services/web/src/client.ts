export async function loadQuote(lane: string) {
  const response = await fetch(`/lanes/${lane}/quote`);
  return response.json() as Promise<{ currency: string; amountCents: number }>;
}
