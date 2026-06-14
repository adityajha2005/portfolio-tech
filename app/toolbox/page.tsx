import { ToolboxLogo } from "@/app/components/ToolboxLogo";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { softwareData } from "app/data/toolbox";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { GridWrapper } from "@/app/components/GridWrapper";

export default function ToolboxPage() {
  return (
    <div className="relative">
      <title>Toolbox | Aditya Jha</title>
      <span className="absolute left-1/2 top-20 -translate-y-1/2 translate-x-1/2">
        <HorizontalLine />
      </span>
      <div className="relative space-y-10 md:space-y-16">
        <div className="mx-auto text-balance pt-14 md:pt-16">
          <GridWrapper>
            <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
              Software I keep in my toolbox
            </h1>
          </GridWrapper>
        </div>
        <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        <div className="relative">
          <GridWrapper>
            <div className="text-center text-sm font-medium text-indigo-600">
              <span>Applications</span>
            </div>
          </GridWrapper>
        </div>

        <GridWrapper>
          <div className="relative grid grid-cols-3 place-items-center md:grid-cols-4 lg:grid-cols-8 lg:gap-6">
            {softwareData.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
              >
                <div className="group inline-block text-center">
                  <div className="h-28 w-28 rounded-[20px] border border-border-primary bg-bg-primary p-2 transition-all duration-300 group-hover:-translate-y-3 group-hover:border-indigo-400">
                    <div
                      className="grid h-full place-items-center rounded-xl border-2 border-border-primary/10 bg-bg-elevated"
                      style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                    >
                      <ToolboxLogo
                        title={item.title}
                        imgSrc={item.imgSrc}
                        invertInDark={item.invertInDark}
                      />
                    </div>
                  </div>
                  {item.title ? (
                    <p className="mt-3 text-sm text-text-secondary">{item.title}</p>
                  ) : null}
                </div>
              </a>
            ))}
          </div>
        </GridWrapper>

        <NewsletterSignUp />
      </div>
    </div>
  );
}
