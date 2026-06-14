"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteMetadata } from "@/app/data/siteMetadata";
import { LifeOrbitRing } from "./LifeOrbitRing";

export function ProfilePicture() {
  const [imageSrc] = useState(siteMetadata.avatarImage);

  return (
    <div className="my-5 md:mt-9">
      <LifeOrbitRing birthDate={siteMetadata.birthDate}>
        <div className="relative h-[116px] w-[116px]">
          <motion.svg
            width="116"
            height="116"
            viewBox="0 0 116 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
            className="absolute inset-0"
          >
            <circle
              cx="58"
              cy="58"
              r="57"
              stroke="currentColor"
              strokeOpacity="0.12"
              className="text-text-primary"
            />
            <rect
              x="4"
              y="4"
              width="108"
              height="108"
              rx="54"
              className="fill-bg-primary"
            />
          </motion.svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={imageSrc}
                className="h-[100px] w-[100px] rounded-full object-cover ring-1 ring-border-primary/30"
                src={imageSrc}
                alt={siteMetadata.title}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              />
            </AnimatePresence>
          </div>
        </div>
      </LifeOrbitRing>
    </div>
  );
}
