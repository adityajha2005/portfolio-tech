import type { Metadata } from "next";
import Link from "next/link";
import { AD_SLOTS, PAYMENT_METHODS, contactEmail } from "@/app/data/ads";
import { GridWrapper } from "@/app/components/GridWrapper";

export const metadata: Metadata = {
  title: "Advertise",
  description: "Sponsor slots on adityajhaa.co.",
  robots: { index: false, follow: false },
};

export default function SponsorPage() {
  const open = AD_SLOTS.filter((s) => !s.sponsor);
  const tiers = [...new Set(AD_SLOTS.map((s) => s.weeklyUsd))]
    .sort((a, b) => b - a)
    .map((weeklyUsd) => ({
      weeklyUsd,
      openIds: open.filter((s) => s.weeklyUsd === weeklyUsd).map((s) => s.id),
    }));
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
    "Sponsor slot — payment sent",
  )}&body=${encodeURIComponent(
    [
      "Slot ID: ",
      "Weeks: ",
      "Paid via (PayPal / Wise / Crypto): ",
      "Transaction ID or receipt: ",
      "Destination URL: ",
      "Tagline (max ~60 chars): ",
      "",
      "Logo attached: yes/no",
    ].join("\n"),
  )}`;

  return (
    <GridWrapper className="flex flex-col gap-y-12 py-16">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary">
          Advertise here
        </h1>
        <p className="text-text-secondary">
          Ten sponsor slots in the side rails, visible on every page. Logo, name,
          one line of copy, and a link to your site.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">Pricing</h2>
        <p className="text-sm text-text-secondary">
          Priced by position — the higher up the rail, the more it costs. Slots
          run weekly.
        </p>
        <div className="divide-y divide-border-primary rounded-[20px] border border-border-primary">
          {tiers.map(({ weeklyUsd, openIds }) => (
            <div
              key={weeklyUsd}
              className="flex items-center justify-between gap-4 px-6 py-4"
            >
              <div className="font-mono text-lg font-bold text-text-primary">
                ${weeklyUsd}
                <span className="text-sm font-normal text-text-tertiary">
                  {" "}
                  / week
                </span>
              </div>
              <div className="text-right text-sm">
                {openIds.length > 0 ? (
                  <span className="font-mono text-text-secondary">
                    {openIds.join(", ")}
                  </span>
                ) : (
                  <span className="text-text-tertiary">Sold out</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">How to buy</h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-text-secondary">
          <li>Pick an open slot ID above and decide how many weeks you want.</li>
          <li>Send payment using any method below.</li>
          <li>
            <strong className="font-semibold text-text-primary">
              Email me the slot ID, number of weeks, and your transaction ID or
              receipt
            </strong>
            , plus your logo, destination URL, and tagline. Payments arrive
            anonymously — without that email I can&apos;t tell who paid or which
            slot to give you.
          </li>
          <li>Your slot goes live the same day, and I confirm by email.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">
          Payment methods
        </h2>
        <div className="grid gap-4">
          {PAYMENT_METHODS.map((method) => (
            <div
              key={method.name}
              className="rounded-[20px] border border-border-primary p-6"
            >
              <div className="font-semibold text-text-primary">
                {method.name}
              </div>
              <code className="mt-1 block break-all font-mono text-sm text-text-secondary">
                {method.detail}
              </code>
              <p className="mt-2 text-xs text-text-tertiary">{method.note}</p>
              {method.href ? (
                <Link
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit items-center rounded-full bg-purple-primary px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  {method.hrefLabel ?? "Pay now"} →
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">
          Send the details
        </h2>
        <Link
          href={mailto}
          className="inline-flex w-fit items-center rounded-full bg-purple-primary px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Email me your receipt →
        </Link>
        <p className="text-xs text-text-tertiary">
          No gambling, adult, or malware advertisers. I reserve the right to
          refuse a sponsor and refund in full.
        </p>
      </section>
    </GridWrapper>
  );
}
