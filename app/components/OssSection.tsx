import { GridWrapper } from "./GridWrapper";
import { ossData } from "../data/oss";

export function OssSection() {
  return (
    <section className="relative space-y-8">
      <div className="space-y-4">
        <GridWrapper>
          <div className="text-center text-sm font-medium text-indigo-600">
            <span>Open Source</span>
          </div>
        </GridWrapper>
        <GridWrapper>
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <h2 className="text-balance text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
              {ossData.mergedCount}+ merged pull requests
            </h2>
            <p className="text-base leading-7 text-text-secondary">
              {ossData.summary}
            </p>
          </div>
        </GridWrapper>
      </div>

      <GridWrapper>
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2">
          {ossData.repos.map((repo) => (
            <span
              key={repo.name}
              className="rounded-full border border-border-primary bg-bg-primary px-3 py-1 text-xs text-text-secondary"
            >
              {repo.name} · {repo.mergedCount}
            </span>
          ))}
        </div>
      </GridWrapper>

      <GridWrapper>
        <ul className="mx-auto grid max-w-3xl gap-2">
          {ossData.pullRequests.map((pr) => (
            <li key={pr.url}>
              <a
                href={pr.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl border border-border-primary bg-bg-primary p-4 transition-colors hover:border-indigo-400 hover:bg-surface-hover"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 3v12" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M18 9c0-3-3-3-3-3v12" />
                    <circle cx="18" cy="9" r="3" />
                  </svg>
                </span>
                <span className="min-w-0 text-left">
                  <span className="block text-sm font-medium text-text-primary group-hover:text-indigo-600">
                    {pr.title}
                  </span>
                  <span className="mt-1 block text-xs text-text-secondary">
                    {pr.repo} · merged {pr.mergedAt}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </GridWrapper>

      <GridWrapper>
        <div className="text-center">
          <a
            href={ossData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-indigo-600 hover:underline"
          >
            View all merged PRs on GitHub
          </a>
        </div>
      </GridWrapper>
    </section>
  );
}
