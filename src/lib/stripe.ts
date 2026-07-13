import Stripe from "stripe";

let client: Stripe | null = null;

export function getStripeClient(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  if (!client) {
    // Cloudflare Workers has no Node `https` module -- the Stripe SDK's default
    // HTTP client hangs indefinitely there. Force the Fetch-based client instead.
    client = new Stripe(key, { httpClient: Stripe.createFetchHttpClient() });
  }
  return client;
}
