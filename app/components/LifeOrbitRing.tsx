"use client";

import { useEffect, useState, type ReactNode } from "react";
import { formatOrbitTime, getLifeOrbitStats } from "@/app/lib/age";

const SIZE = 200;
const RADIUS = 88;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const CENTER = SIZE / 2;

type LifeOrbitRingProps = {
  birthDate: string;
  children: ReactNode;
};

export function LifeOrbitRing({ birthDate, children }: LifeOrbitRingProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const stats = getLifeOrbitStats(birthDate, now);
  const progressOffset = CIRCUMFERENCE * (1 - stats.yearProgress);
  const birthdayRad = ((stats.yearProgress * 360 - 90) * Math.PI) / 180;
  const markerX = CENTER + Math.cos(birthdayRad) * RADIUS;
  const markerY = CENTER + Math.sin(birthdayRad) * RADIUS;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: SIZE, height: SIZE }}>
        <svg
          className="absolute inset-0"
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          aria-hidden="true"
        >
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.08"
            strokeWidth="1.5"
            className="text-text-primary"
          />
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="url(#lifeOrbitGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={progressOffset}
            transform={`rotate(-90 ${CENTER} ${CENTER})`}
            className="opacity-90"
          />
          <circle
            cx={markerX}
            cy={markerY}
            r="3.5"
            fill="#818cf8"
            className="drop-shadow-[0_0_6px_rgba(129,140,248,0.55)]"
          />
          <defs>
            <linearGradient id="lifeOrbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      </div>

      <div className="mt-5 text-center">
        <p className="text-lg tracking-tight text-text-primary">
          <span className="text-2xl font-semibold tabular-nums">{stats.age}</span>
          <span className="mx-2 text-text-secondary/50">→</span>
          <span className="font-medium text-indigo-500/90">{stats.nextAge}</span>
        </p>
        <p className="mt-1.5 text-sm text-text-secondary">
          {stats.daysUntilBirthday === 0 ? (
            "Lap complete today"
          ) : (
            <>
              <span className="tabular-nums">{stats.daysUntilBirthday}d</span> left in this lap
            </>
          )}
          <span className="mx-2 text-border-primary/80">·</span>
          <span className="font-mono text-xs tabular-nums text-text-secondary/90">
            {formatOrbitTime(now)}
          </span>
        </p>
      </div>
    </div>
  );
}
