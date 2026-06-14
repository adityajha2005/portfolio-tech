import { cn } from "@/app/lib/utils";
import { GitHubIcon } from "./icons/GitHubIcon";

type ToolboxLogoProps = {
  title: string;
  imgSrc: string;
  invertInDark?: boolean;
  className?: string;
};

export function ToolboxLogo({
  title,
  imgSrc,
  invertInDark,
  className = "h-10 w-10",
}: ToolboxLogoProps) {
  if (title === "GitHub") {
    return (
      <GitHubIcon className={cn(className, "h-8 w-8 text-text-primary")} />
    );
  }

  return (
    <img
      className={cn(className, invertInDark && "dark:invert")}
      alt={title}
      src={imgSrc}
    />
  );
}
