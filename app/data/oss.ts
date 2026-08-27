export const ossData = {
  mergedCount: 50,
  summary:
    "Contributing to open source lately: AI agents, security hardening, and production bug fixes.",
  // /<user>?q=... is ignored by GitHub — it just renders the profile.
  // The PR search lives at /search with type=pullrequests.
  profileUrl:
    "https://github.com/search?q=is%3Apr+author%3Aadityajha2005+is%3Amerged&type=pullrequests&s=updated&o=desc",
  repos: [
    { name: "clawvisor/clawvisor", mergedCount: 14 },
    { name: "livekit/agents", mergedCount: 3 },
    { name: "superloglabs/skills", mergedCount: 1 },
    { name: "buildingjoshbetter/TrueMemory", mergedCount: 1 },
  ],
  pullRequests: [
    {
      title:
        "fix(neuphonic): use configured encoding and lang_code in TTS requests",
      repo: "livekit/agents",
      url: "https://github.com/livekit/agents/pull/6064",
      mergedAt: "Jun 2026",
    },
    {
      title: "fix(google): correct pitch parameter type from int to float in TTS",
      repo: "livekit/agents",
      url: "https://github.com/livekit/agents/pull/6058",
      mergedAt: "Jun 2026",
    },
    {
      title:
        "test(llmproxy): adversarial cross-conversation approval spoofing coverage",
      repo: "clawvisor/clawvisor",
      url: "https://github.com/clawvisor/clawvisor/pull/528",
      mergedAt: "Jun 2026",
    },
    {
      title:
        "fix(llmproxy): sanitize user-supplied fields in task approval prompt",
      repo: "clawvisor/clawvisor",
      url: "https://github.com/clawvisor/clawvisor/pull/481",
      mergedAt: "May 2026",
    },
    {
      title:
        "fix(mcp): url-encode service param to prevent query string injection",
      repo: "clawvisor/clawvisor",
      url: "https://github.com/clawvisor/clawvisor/pull/363",
      mergedAt: "May 2026",
    },
  ],
} as const;
