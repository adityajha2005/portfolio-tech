// Sponsor slots shown in the left/right rails (very wide screens only).
// To fill one: drop the logo in public/sponsors/, set `sponsor` on that slot, push.
// ponytail: hand-managed array. Move to a DB when selling gets annoying.
import { siteMetadata } from "@/app/data/siteMetadata";

export const contactEmail = siteMetadata.email.replace("mailto:", "");

export type Sponsor = {
  name: string;
  url: string;
  logo: string; // path under public/, e.g. "/sponsors/acme.png"
  tagline: string;
};

export type AdSlot = {
  id: string; // quoted by buyers when they email the receipt
  side: "left" | "right";
  weeklyUsd: number;
  sponsor?: Sponsor;
};

// Priced by position: the higher up the rail, the more it costs.
// Priced by position: the higher up the rail, the more it costs.
const SLOTS: AdSlot[] = [
  { id: "L1", side: "left", weeklyUsd: 100 },
  { id: "L2", side: "left", weeklyUsd: 90 },
  { id: "L3", side: "left", weeklyUsd: 80 },
  { id: "L4", side: "left", weeklyUsd: 70 },
  { id: "L5", side: "left", weeklyUsd: 60 },
  { id: "R1", side: "right", weeklyUsd: 100 },
  { id: "R2", side: "right", weeklyUsd: 90 },
  { id: "R3", side: "right", weeklyUsd: 80 },
  { id: "R4", side: "right", weeklyUsd: 70 },
  { id: "R5", side: "right", weeklyUsd: 60 },
];

// Placeholder sponsors for previewing the rail design locally:
//   NEXT_PUBLIC_AD_DEMO=1 npm run dev
// ponytail: env-gated rather than commented out, so fake sponsors can never ship.
const DEMO: Record<string, Sponsor> = {
  L1: { name: "Chatbase", url: "https://example.com", logo: "/pfp.jpeg", tagline: "AI agent for customer support & sales" },
  L2: { name: "Blotato", url: "https://example.com", logo: "/pfp.jpeg", tagline: "Social Media API & MCP for Claude" },
  R1: { name: "Watchgoose", url: "https://example.com", logo: "/pfp.jpeg", tagline: "Catch failed cron jobs before your users do" },
  R2: { name: "Okara", url: "https://example.com", logo: "/pfp.jpeg", tagline: "The best AI CMO for growth and marketing" },
};

export const AD_SLOTS: AdSlot[] =
  process.env.NEXT_PUBLIC_AD_DEMO === "1"
    ? SLOTS.map((slot) => ({ ...slot, sponsor: DEMO[slot.id] ?? slot.sponsor }))
    : SLOTS;

export const PAYMENT_METHODS = [
  {
    name: "PayPal",
    // Goods & Services only — friends-and-family on commercial payments breaks PayPal's terms.
    detail: contactEmail,
    note: "Send as Goods & Services, not Friends & Family.",
  },
  {
    name: "Wise",
    detail: contactEmail,
    note: "USD transfer. Email me first if you need an invoice with full bank details.",
  },
  {
    name: "Crypto — Solana",
    detail: "5ATbz8aVUxSqechYP9mkUYoDLCY4CMuBtMYFUqpFi7xp",
    note: "SOL or USDC on Solana. Send the txid with your email.",
  },
  {
    name: "Crypto — Ethereum",
    detail: "0xf5c25078B74444C93E619c307dA0eAad194C5Fdd",
    note: "ETH, USDT, or USDC on Ethereum mainnet. Send the txid with your email.",
  },
];
