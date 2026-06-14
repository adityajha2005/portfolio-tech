type SoftwareDataItem = {
  title: string;
  imgSrc: string;
  link: string;
  invertInDark?: boolean;
};

const softwareData: SoftwareDataItem[] = [
  {
    title: "VSCode",
    imgSrc: "/vscode_logo.png",
    link: "https://code.visualstudio.com/",
  },
  {
    title: "Cursor",
    imgSrc: "/cursor_logo.svg",
    link: "https://cursor.com/",
    invertInDark: true,
  },
  {
    title: "Claude Code",
    imgSrc: "/claude_code_logo.svg",
    link: "https://www.anthropic.com/claude-code",
  },
  {
    title: "Codex",
    imgSrc: "/codex_logo.svg",
    link: "https://openai.com/codex/",
  },
  {
    title: "LangChain",
    imgSrc: "/langchain_logo.svg",
    link: "https://www.langchain.com/",
  },
  {
    title: "LangGraph",
    imgSrc: "/langgraph_logo.svg",
    link: "https://www.langchain.com/langgraph",
    invertInDark: true,
  },
  {
    title: "Slack",
    imgSrc: "/slack_logo.svg",
    link: "https://slack.com/",
  },
  {
    title: "Figma",
    imgSrc: "/figma_logo.png",
    link: "https://www.figma.com/",
  },
  {
    title: "Notion",
    imgSrc: "/notion_logo.png",
    link: "https://www.notion.so/",
  },
  {
    title: "Linear",
    imgSrc: "/linear_logo.png",
    link: "https://linear.app/",
  },
  {
    title: "Docker",
    imgSrc: "/docker_logo.svg",
    link: "https://www.docker.com/",
  },
  {
    title: "Postman",
    imgSrc: "/postman_logo.svg",
    link: "https://www.postman.com/",
  },
  {
    title: "GitHub",
    imgSrc: "/github_logo.svg",
    link: "https://github.com/",
  },
  {
    title: "Internet",
    imgSrc: "/internet_logo.svg",
    link: "https://www.adityajhaa.co/",
  },
];

export { softwareData };
