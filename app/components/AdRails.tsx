import Image from "next/image";
import Link from "next/link";
import { AD_SLOTS } from "@/app/data/ads";

// Rendered as a flex sibling of <main>, so the rails take real layout width and
// the content column narrows to fit — rather than floating over the margins,
// which only works past ~1700px. Hidden below xl, where there is no room at all.
export function AdRail({ side }: { side: "left" | "right" }) {
  const slots = AD_SLOTS.filter((s) => s.side === side);

  return (
    <aside
      aria-label={`${side} sponsors`}
      className="sticky top-0 hidden h-screen w-48 shrink-0 flex-col gap-3 self-start py-3 xl:flex"
    >
      {slots.map(({ id, sponsor, weeklyUsd }) =>
        sponsor ? (
          <Link
            key={id}
            href={sponsor.url}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="flex flex-1 flex-col items-center justify-center gap-2 rounded-[20px] border border-border-primary p-4 text-center transition-colors hover:bg-surface-hover"
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
        ) : (
          <Link
            key={id}
            href="/sponsor"
            className="group flex flex-1 flex-col items-center justify-center gap-1.5 rounded-[20px] border border-dashed border-border-primary p-4 text-center transition-colors hover:bg-surface-hover"
          >
            <span className="text-sm font-semibold text-text-secondary transition-colors group-hover:text-text-primary">
              Your brand here
            </span>
            <span className="font-mono text-base font-bold text-text-primary">
              ${weeklyUsd}
              <span className="text-xs font-normal text-text-tertiary">
                {" "}
                / week
              </span>
            </span>
            <span className="text-xs leading-snug text-text-tertiary">
              Seen on every page · Slot {id}
            </span>
          </Link>
        ),
      )}
    </aside>
  );
}
