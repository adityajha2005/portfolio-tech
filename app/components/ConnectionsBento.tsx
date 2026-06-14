"use client";

import { BentoCard } from "./BentoCard";
import { socialStats } from "../data/social";

export function ConnectionsBento({
  linkTo,
}: {
  linkTo?: string;
}): React.ReactNode {
  return (
    <BentoCard height="h-[300px]" linkTo={linkTo ?? socialStats.url}>
      <div className="flex h-full flex-col">
        <div className="relative flex flex-1 items-center justify-center">
          <BackgroundPattern />
          <div className="relative z-10 text-center">
            <div className="relative mx-auto w-fit">
              <svg
                className="mx-auto"
                width="148"
                height="148"
                viewBox="0 0 148 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_followers)">
                  <rect
                    x="16"
                    y="16"
                    width="116"
                    height="116"
                    rx="58"
                    fill="#F7F7F8"
                  />
                  <rect
                    className="stroke-[#D6DADE] transition-colors delay-200 duration-500 group-hover:stroke-indigo-400"
                    x="16.75"
                    y="16.75"
                    width="114.5"
                    height="114.5"
                    rx="57.25"
                    stroke="#D6DADE"
                    strokeWidth="1.5"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_followers"
                    x="16"
                    y="14"
                    width="116"
                    height="118"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="-2" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_0_1"
                    />
                  </filter>
                </defs>
              </svg>
              <img
                className="absolute left-1/2 top-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 transform rounded-full object-cover"
                src="/pfp.jpeg"
                alt="Aditya Jha"
              />
            </div>
            <p className="mt-4 text-3xl font-semibold tracking-tight text-text-primary">
              {socialStats.followers}
            </p>
            <p className="text-sm text-text-secondary">followers on {socialStats.platform}</p>
          </div>
        </div>
        <div className="z-20 w-full text-balance text-center">
          <h2 className="text-base font-medium">On X</h2>
          <p className="mt-1 text-text-secondary">{socialStats.blurb}</p>
        </div>
      </div>
    </BentoCard>
  );
}

function BackgroundPattern() {
  return (
    <svg
      className="absolute left-1/2 top-0 -translate-x-1/2 opacity-60"
      width="704"
      height="250"
      viewBox="0 0 637 250"
    >
      <g clipPath="url(#clip0_followers)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-24.5145 175.237C5.95935 205.744 55.3673 205.744 85.8412 175.237C116.315 144.731 116.315 95.2694 85.8412 64.7626C55.3673 34.2558 5.95935 34.2558 -24.5145 64.7626L-79.6924 120L-24.5145 175.237Z"
          fill="#D6DADE"
          fillOpacity="0.24"
        />
      </g>
      <defs>
        <clipPath id="clip0_followers">
          <rect width="704" height="250" fill="white" transform="translate(-34)" />
        </clipPath>
      </defs>
    </svg>
  );
}
