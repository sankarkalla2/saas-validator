// src/config/lemonsqueezy.ts

import { lemonSqueezySetup } from "@lemonsqueezy/lemonsqueezy.js";
/**
 * Ensures that required environment variables are set and sets up the Lemon
 * Squeezy JS SDK. Throws an error if any environment variables are missing or
 * if there's an error setting up the SDK.
 */
export function configureLemonSqueezy() {
  const requiredVars = [
    process.env.LEMONSQUEEZY_API_KEY!,
    process.env.LEMONSQUEEZY_STORE_ID!,
    process.env.LEMONSQUEEZY_WEBHOOK_SECRET!,
  ];

  lemonSqueezySetup({
    apiKey: process.env.LEMONSQUEEZY_API_KEY,
    onError: (error) => {
      throw new Error(`Lemon Squeezy API error: ${error.message}`);
    },
  });
}
