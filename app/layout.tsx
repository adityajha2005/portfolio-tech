import type { Metadata } from "next";
import "./globals.css";
import Navbar from "app/components/Navbar";
import { AdRail } from "./components/AdRails";
import { siteMetadata } from "app/data/siteMetadata";
import { Footer } from "./components/Footer";
import { BgGradient } from "./components/BgGradient";
import { ThemeProvider } from "./components/ThemeProvider";
import { cx } from "./lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: "/pfp.jpeg",
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ["/pfp.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistMono.variable} ${GeistSans.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-bg-primary font-sans text-text-primary md:max-w-7xl lg:mx-auto lg:flex-row xl:max-w-[104rem]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <AdRail side="left" />
          <main
            className={cx(
              "relative flex flex-1 flex-col overflow-x-hidden border-x border-border-primary/50",
            )}
          >
            <Navbar />
            <div className="grid flex-1 grid-cols-1 lg:grid-cols-[32px_1fr_32px]">
              <div className="hidden w-full border-r border-border-primary opacity-75 [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px] lg:block"></div>
              <div className="relative col-span-1 px-3 lg:px-0">
                <BgGradient />
                {children}
              </div>
              <div className="hidden w-full border-l border-border-primary opacity-75 [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px] lg:block"></div>
            </div>
            <Footer />
          </main>
          <AdRail side="right" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
