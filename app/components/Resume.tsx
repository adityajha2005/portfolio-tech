import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "Codewisp",
      period: "Apr 2026 - Present",
      positions: [
        {
          title: "AI Engineer (YC W26)",
          description: [
            "Built and optimized LLM pipelines for game creation workflows.",
            "Cut inference costs by 61%, reduced latency by 34%, and shortened end-to-end generation time by 17%.",
          ],
        },
      ],
    },
    {
      company: "HydraDB",
      period: "Mar 2026 - Apr 2026",
      positions: [
        {
          title: "Product Designer & Full Stack Engineer (Contract)",
          description: [
            "Built and shipped HydraDB Workbench 2.0, leading product design, UI/UX, and full-stack implementation.",
            "Integrated backend APIs and optimized workflows for a fast, responsive playground/workbench experience.",
            "Collaborated on product direction and developer experience improvements for internal tooling.",
          ],
        },
      ],
    },
    {
      company: "Skate Chain",
      period: "Oct 2025 - Feb 2026",
      positions: [
        {
          title: "Developer Intern",
          description: [
            "Contributed to smart contract implementation on a cross-chain infrastructure project.",
          ],
        },
      ],
    },
    {
      company: "Pikme",
      period: "Jul 2025 - Oct 2025",
      positions: [
        {
          title: "Full Stack Developer",
          description: [
            "Architected and developed single-player and multiplayer experiences for Pikme, a platform for photography enthusiasts.",
            "Improved performance through caching, lazy loading, and frontend optimizations.",
            "Managed production deployment on AWS using EC2, S3, and scalable server configuration.",
          ],
        },
      ],
    },
    {
      company: "Stealth Startup",
      period: "Aug 2025 - Oct 2025",
      positions: [
        {
          title: "Full Stack Developer (Freelance)",
          description: [
            "Developed and deployed DAO governance smart contracts handling $50K+ in TVL with 100% test coverage.",
            "Built the frontend and integrated contracts with backend for seamless Web3 UX.",
          ],
        },
      ],
    },
    {
      company: "Euclid Protocol",
      period: "May 2025 - Jul 2025",
      positions: [
        {
          title: "Full Stack Developer (Internship)",
          description: [
            "Built EuclidAI, reducing operational costs by 30% and processing 10K+ transactions.",
            "Designed EuclidMail, enabling 1K+ users to send crypto via email with 99.5% success rate.",
            "Updated EuclidSwap, increasing trading volume by 200%.",
          ],
        },
      ],
    },
    {
      company: "Solana Superteam",
      period: "Mar 2025 - Present",
      positions: [
        {
          title: "Community Member & Builder",
          description: [
            "Active builder in the Solana ecosystem through projects, hackathons, and developer initiatives.",
            "Awarded a $2,700 Solana grant, selected among the top 126 recipients across India.",
          ],
        },
      ],
    },
    {
      company: "Aiphi AI",
      period: "Feb 2025 - Apr 2025",
      positions: [
        {
          title: "Full Stack AI Engineer (Internship)",
          description: [
            "Contributed to AI-driven product development, combining backend systems with AI model integration.",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/pfp.jpeg",
};

export function Resume() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={`${experience.company}-${experience.period}`}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold">
                        {position.title}
                      </h4>
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <p key={i} className="text-gray-600">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
