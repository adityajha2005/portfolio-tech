import type { Metadata } from "next";
import { GridWrapper } from "@/app/components/GridWrapper";
import { Button } from "@/app/components/Button";
import { socialStats } from "@/app/data/social";

export const metadata: Metadata = {
  title: "On X | Aditya Jha",
  description: socialStats.blurb,
};

export default function ConnectionsPage() {
  return (
    <div className="relative space-y-16">
      <GridWrapper>
        <div className="mx-auto mt-16 max-w-2xl space-y-6 text-center">
          <h1 className="text-balance text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
            {socialStats.followers} followers on {socialStats.platform}
          </h1>
          <p className="text-lg leading-8 text-text-secondary">
            {socialStats.blurb}
          </p>
          <div className="flex justify-center pt-2">
            <Button href={socialStats.url} variant="primary">
              Follow {socialStats.handle}
            </Button>
          </div>
        </div>
      </GridWrapper>

      <GridWrapper>
        <div className="mx-auto flex max-w-sm flex-col items-center rounded-2xl border border-border-primary bg-bg-primary p-8 text-center">
          <img
            src="/pfp.jpeg"
            alt="Aditya Jha"
            className="h-24 w-24 rounded-full object-cover"
          />
          <p className="mt-4 text-4xl font-semibold tracking-tight text-text-primary">
            {socialStats.followers}
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            followers · {socialStats.handle}
          </p>
        </div>
      </GridWrapper>
    </div>
  );
}
