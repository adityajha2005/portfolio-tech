"use client";

import React, { useEffect, useRef, useState } from "react";
import { BentoCard } from "./BentoCard";
import { siteMetadata } from "../data/siteMetadata";

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarDay: React.FC<{ day: number | string; isHeader?: boolean }> = ({
  day,
  isHeader,
}) => {
  const randomBgWhite =
    !isHeader && Math.random() < 0.3
      ? "bg-bg-secondary/75 text-text-secondary hover:bg-bg-secondary"
      : "text-text-tertiary";

  return (
    <div
      className={`col-span-1 row-span-1 flex h-8 w-8 items-center justify-center ${
        isHeader ? "" : "rounded"
      } ${randomBgWhite}`}
    >
      <span className={`font-medium ${isHeader ? "text-xs" : "text-sm"}`}>
        {day}
      </span>
    </div>
  );
};

export function CalendarBento() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = new Date(
    currentYear,
    currentDate.getMonth() + 1,
    0,
  ).getDate();

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const renderCalendarDays = () => {
    const days: React.ReactNode[] = [
      ...dayNames.map((day) => (
        <CalendarDay key={`header-${day}`} day={day} isHeader />
      )),
      ...Array(firstDayOfWeek).map((_, i) => (
        <div
          key={`empty-start-${i}`}
          className="col-span-1 row-span-1 h-8 w-8"
        />
      )),
      ...Array(daysInMonth)
        .fill(null)
        .map((_, i) => <CalendarDay key={`date-${i + 1}`} day={i + 1} />),
    ];

    return days;
  };

  return (
    <div ref={containerRef} className="relative">
      <BentoCard height="h-[220px]" showHoverGradient={!open}>
        {open ? (
          /* Open state: full card, clean two-button layout */
          <div className="flex h-full flex-col justify-between">
            <div>
              <h2 className="mb-1 text-base font-medium">Get in touch</h2>
              <p className="text-sm text-text-secondary">
                Open to freelance projects and collaborations.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href={siteMetadata.email}
                className="flex-1 rounded-full border border-border-primary bg-bg-secondary px-4 py-2.5 text-center text-sm font-medium text-text-primary transition-colors hover:border-indigo-400 hover:text-indigo-600"
              >
                Email me
              </a>
              <a
                href={siteMetadata.cal}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-indigo-600 px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-indigo-500"
              >
                Book a 15 min call
              </a>
            </div>
          </div>
        ) : (
          /* Default state: text left, calendar peek right */
          <div
            className="group grid h-full cursor-pointer grid-cols-12 gap-5"
            onClick={() => setOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Open contact options"
            onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
          >
            <div className="relative z-10 col-span-5 text-balance md:col-span-5">
              <h2 className="mb-4 text-base font-medium">Get in touch</h2>
              <p className="mb-2 text-text-secondary">
                Open to freelance projects and collaborations.
              </p>
              <p className="text-xs text-text-tertiary">
                Click for email or a call
              </p>
            </div>
            <div className="pointer-events-none absolute left-[43%] top-7 transition-all duration-500 ease-out md:-right-14 md:left-auto md:group-hover:-right-12 md:group-hover:top-5">
              <div>
                <div className="h-[278px] w-[550px] rounded-[20px] border border-border-primary p-2 transition-colors duration-100 group-hover:border-indigo-400">
                  <div
                    className="h-full rounded-xl border-2 border-border-primary/10 bg-bg-elevated p-3"
                    style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                  >
                    <div className="flex items-center space-x-2">
                      <p className="text-sm text-text-tertiary">
                        <span className="font-medium">
                          {currentMonth}, {currentYear}
                        </span>
                      </p>
                      <span className="h-1 w-1 rounded-full bg-text-tertiary">
                        &nbsp;
                      </span>
                      <p className="text-xs text-text-tertiary">15 min call</p>
                    </div>
                    <div className="mt-4 grid grid-cols-7 grid-rows-5 gap-2 px-4">
                      {renderCalendarDays()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </BentoCard>
    </div>
  );
}
