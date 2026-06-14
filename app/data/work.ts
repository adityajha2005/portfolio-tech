export type WorkItem = {
  title: string;
  company: string;
  role: string;
  description: string;
  image: string;
  url?: string;
  status?: string;
};

export const workItems: WorkItem[] = [
  {
    title: "Codewisp",
    company: "Codewisp",
    role: "AI Engineer (YC W26)",
    description:
      "Built and optimized LLM pipelines for game creation workflows. Cut inference costs by 61%, reduced latency by 34%, and shortened end-to-end generation time by 17% through pipeline and workflow execution improvements.",
    image: "/projects/codewisp.png",
    url: "https://codewisp.com/",
  },
  {
    title: "HydraDB Workbench",
    company: "HydraDB",
    role: "Product Designer & Full Stack Engineer",
    description:
      "Built and shipped HydraDB Workbench 2.0, including the Comparison workspace for simulating retrieval performance, cost, and token efficiency against baseline LLM calls. Led product design, UI/UX, and full-stack implementation with backend API integration.",
    image: "/projects/hydradb.png",
    url: "https://workbench.hydradb.com/comparison",
  },
  {
    title: "Pikme",
    company: "Pikme",
    role: "Full Stack Developer",
    description:
      "Redesigned core game mechanics for a photo voting platform, including Taste, Compete, and Leaderboard flows. Built single-player and multiplayer experiences, improved performance through caching and lazy loading, and managed production deployment on AWS.",
    image: "/projects/pikme.png",
    url: "https://www.playpikme.com/",
  },
];
