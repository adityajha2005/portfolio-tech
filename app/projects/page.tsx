import { GridWrapper } from "@/app/components/GridWrapper";
import { workItems, type WorkItem } from "@/app/data/work";

interface Project {
  title: string;
  description: string;
  image: string;
  url?: string;
  status?: string;
}

const projects: Project[] = [
  {
    title: "Aplyx",
    description:
      "AI-powered workspace for international university applications: SOPs, resumes, scholarships, and deadlines. Cross-document reasoning catches timeline mismatches and weak narrative alignment. Built with LangChain and RAG pipelines for contextual document-level reasoning.",
    image: "/projects/aplyx.png",
    url: "https://aplyx.site",
  },
  {
    title: "FoundersDB",
    description:
      "A comprehensive, searchable database of accelerator-backed startup founders and companies. Built structured search, filtering, and export flows for YC founder data. Reached 5,000+ visitors before the product was taken offline.",
    image: "/projects/foundersdb.png",
    status: "Currently offline",
  },
  {
    title: "SnapChain",
    description:
      "AI-powered drag-and-drop platform for Rust smart contract creation. Scratch-like interface with AI-assisted generation, templates, real-time updates, and an interactive dashboard with curated contract catalogs.",
    image: "/projects/snap.png",
    url: "https://snapchain.vercel.app",
  },
  {
    title: "Vylin",
    description:
      "A Solana-first AI assistant grounded in official docs. No hallucinations, no wallet access, and on-chain analysis only when you ask for it. Built for Solana developers with Exa AI search, Helius, and xAI.",
    image: "/projects/vylin.png",
    status: "Currently offline",
  },
  {
    title: "Layer0",
    description:
      "An x402-compatible platform where users pay AI agents per call (0.001 MON) and agents hire sub-agents with fully autonomous payments. Orchestration agents pay downstream agents with no human in the loop. On-chain settlement on Monad testnet with off-chain balance tracking. Demo-ready Playground, Marketplace, and Balance UI.",
    image: "/projects/layer0.png",
    status: "Currently offline",
  },
  {
    title: "Aura Protocol",
    description:
      "DeFi protocol on Avalanche offering fast, secure decentralized financial solutions with a modern Next.js frontend and Solidity smart contracts.",
    image: "/projects/aura.png",
    url: "https://auraprotocol.vercel.app/",
  },
  {
    title: "ForkYouDaddy",
    description:
      "Web3 app for creating, remixing, and licensing creative IP onchain. 100+ registered works and $5K+ in licensing revenue with attribution-based forking.",
    image: "/projects/fork.png",
    url: "https://forkyoudaddy.vercel.app",
  },
  {
    title: "MEMEFI",
    description:
      "Gamified meme staking platform with 50+ active users and $1K+ in staked value. Wallet abstraction with 90%+ user retention.",
    image: "/projects/memefi.png",
    url: "https://memefi-platform.vercel.app",
  },
  {
    title: "Capsulr",
    description:
      "Decentralized time capsule on Monad testnet. 50+ stored memories with 99%+ data integrity and on-chain timestamp verification.",
    image: "/projects/capsulr.png",
    url: "https://t-ime-capsule-monad.vercel.app",
  },
  {
    title: "OnlyNerds",
    description:
      "Decentralized learning platform where builders fork courses, learn with AI agents, and earn dynamic skill NFTs.",
    image: "/projects/onlynerds.png",
    url: "https://onlynerds-rose.vercel.app/",
  },
];

function ProjectImage(props: { src: string; alt: string }) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className="drama-shadow aspect-[4/3] w-full rounded-xl object-cover object-top"
    />
  );
}

function ProjectLink(props: { title: string; url?: string; status?: string }) {
  if (props.url) {
    return (
      <a
        className="inline-flex items-center text-sm font-medium text-indigo-600"
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit {props.title}
        <svg
          className="relative ml-2.5 mt-px overflow-visible"
          width="3"
          height="6"
          viewBox="0 0 3 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 0L3 3L0 6"></path>
        </svg>
      </a>
    );
  }

  return (
    <p className="text-sm font-medium text-text-secondary">
      {props.status ?? "Link coming soon"}
    </p>
  );
}

function ProjectCard({
  title,
  subtitle,
  description,
  image,
  url,
  status,
}: {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  url?: string;
  status?: string;
}) {
  return (
    <article className="space-y-4">
      <ProjectImage src={image} alt={title} />
      <div className="text-balance px-1">
        {subtitle ? (
          <p className="mb-1 text-sm font-medium text-indigo-600">{subtitle}</p>
        ) : null}
        <h2 className="mb-2 text-xl font-medium leading-6 tracking-tight text-text-primary md:text-2xl md:leading-none">
          {title}
        </h2>
        <p className="mb-3 text-sm leading-6 text-text-secondary md:text-base">
          {description}
        </p>
        <ProjectLink title={title} url={url} status={status} />
      </div>
    </article>
  );
}

function ProjectSection({
  id,
  label,
  heading,
  children,
}: {
  id?: string;
  label: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="space-y-8">
      <div className="space-y-4 text-center">
        <div className="text-sm font-medium text-indigo-600">
          <span>{label}</span>
        </div>
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-medium leading-10 tracking-tighter text-text-primary md:text-4xl">
          {heading}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-6 md:gap-y-12">
        {children}
      </div>
    </section>
  );
}

export default function ProjectPage() {
  return (
    <div className="relative space-y-16">
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          Work and projects I&apos;ve shipped.
        </h1>
      </GridWrapper>

      <GridWrapper className="space-y-20">
        <ProjectSection
          id="work"
          label="Work"
          heading="Company products and client work"
        >
          {workItems.map((item: WorkItem) => (
            <ProjectCard
              key={item.title}
              title={item.title}
              subtitle={`${item.company} · ${item.role}`}
              description={item.description}
              image={item.image}
              url={item.url}
              status={item.status}
            />
          ))}
        </ProjectSection>

        <ProjectSection label="Projects" heading="Personal builds and side projects">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
              status={project.status}
            />
          ))}
        </ProjectSection>
      </GridWrapper>
    </div>
  );
}
