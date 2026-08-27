import Image from "next/image";
import Link from "next/link";
import { AD_SLOTS, type AdSlot } from "@/app/data/ads";

// One card, shared by the desktop rails and the mobile strip. `grow` lets the
// rails divide the viewport height; the strip keeps cards their natural size.
function SlotCard({
  slot: { id, sponsor, weeklyUsd },
  grow,
}: {
  slot: AdSlot;
  grow?: boolean;
}) {
  const shape = `flex flex-col items-center justify-center gap-2 rounded-[20px] p-4 text-center transition-colors hover:bg-surface-hover ${
    grow ? "flex-1" : "w-40 shrink-0 snap-start"
  }`;

  if (sponsor) {
    return (
      <Link
        href={sponsor.url}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        className={`${shape} border border-border-primary`}
      >
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={40}
          height={40}
          className="size-10 rounded-md object-contain"
        />
        <span className="text-sm font-semibold text-text-primary">
          {sponsor.name}
        </span>
        <span className="text-xs leading-snug text-text-secondary">
          {sponsor.tagline}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href="/sponsor"
      className={`${shape} group gap-1.5 border border-dashed border-border-primary`}
    >
      <span className="text-sm font-semibold text-text-secondary transition-colors group-hover:text-text-primary">
        Your brand here
      </span>
      <span className="font-mono text-base font-bold text-text-primary">
        ${weeklyUsd}
        <span className="text-xs font-normal text-text-tertiary"> / week</span>
      </span>
      <span className="text-xs leading-snug text-text-tertiary">
        Seen on every page · Slot {id}
      </span>
    </Link>
  );
}

// Rendered as a flex sibling of <main>, so the rails take real layout width and
// the content column narrows to fit — rather than floating over the margins,
// which only works past ~1700px. Hidden below xl, where there is no room at all.
export function AdRail({ side }: { side: "left" | "right" }) {
  return (
    <aside
      aria-label={`${side} sponsors`}
      className="sticky top-0 hidden h-screen w-48 shrink-0 flex-col gap-3 self-start py-3 xl:flex"
    >
      {AD_SLOTS.filter((s) => s.side === side).map((slot) => (
        <SlotCard key={slot.id} slot={slot} grow />
      ))}
    </aside>
  );
}

// Phones and tablets have no room beside the content, so the same slots become
// a horizontal scroller above the footer. Shown exactly where the rails aren't.
export function AdStrip() {
  return (
    <section aria-label="sponsors" className="px-3 pb-2 pt-4 xl:hidden">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-tertiary">
        Sponsors
      </h2>
      {/* ponytail: native overflow scroll, no carousel library */}
      <div className="-mx-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 pb-2">
        {/* Priciest first — one rail's order would bury R1 behind the cheap
            left-hand slots. Sort is stable, so L comes before R at equal price. */}
        {[...AD_SLOTS]
          .sort((a, b) => b.weeklyUsd - a.weeklyUsd)
          .map((slot) => (
            <SlotCard key={slot.id} slot={slot} />
          ))}
      </div>
    </section>
  );
}
