"use client";

import { useEffect, useMemo, useRef } from "react";
import type { ContributionDay } from "@/lib/github";
import { cn } from "@/lib/utils";

const LEVEL_CLASS: Record<ContributionDay["level"], string> = {
  0: "bg-muted",
  1: "bg-accent/30",
  2: "bg-accent/55",
  3: "bg-accent/80",
  4: "bg-accent"
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

type Cell = ContributionDay | null;

function toWeeks(days: ContributionDay[]): Cell[][] {
  if (!days.length) return [];
  // Columns start on Sunday, like the calendar on the GitHub profile.
  const firstWeekday = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();
  const cells: Cell[] = [...Array<Cell>(firstWeekday).fill(null), ...days];
  const weeks: Cell[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

function formatDay(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  });
}

export function ContributionCalendar({ days }: { days: ContributionDay[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const weeks = useMemo(() => toWeeks(days), [days]);

  // On narrow screens, start scrolled to the most recent weeks.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, []);

  const monthLabels = weeks.map((week, index) => {
    const first = week.find(Boolean);
    if (!first) return "";
    const month = new Date(`${first.date}T00:00:00Z`).getUTCMonth();
    const prev = index > 0 ? weeks[index - 1].find(Boolean) : null;
    const prevMonth = prev ? new Date(`${prev.date}T00:00:00Z`).getUTCMonth() : -1;
    return month !== prevMonth && index < weeks.length - 1 ? MONTHS[month] : "";
  });

  return (
    <div>
      <div ref={scrollRef} className="overflow-x-auto pb-2">
        <div className="mx-auto flex w-fit flex-col gap-1.5">
          <div className="flex gap-[3px] text-[10px] leading-none text-muted-foreground" aria-hidden>
            {monthLabels.map((label, index) => (
              <span key={index} className="w-[11px] shrink-0 overflow-visible whitespace-nowrap">
                {label}
              </span>
            ))}
          </div>
          <div className="flex gap-[3px]" role="img" aria-label="GitHub contribution calendar for the last 12 months">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }, (_, dayIndex) => {
                  const day = week[dayIndex];
                  if (!day) return <span key={dayIndex} className="h-[11px] w-[11px]" />;
                  return (
                    <span
                      key={day.date}
                      title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDay(day.date)}`}
                      className={cn("h-[11px] w-[11px] rounded-[2px]", LEVEL_CLASS[day.level])}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-3 flex max-w-[680px] items-center justify-end gap-1.5 text-[11px] text-muted-foreground" aria-hidden>
        <span>Less</span>
        {([0, 1, 2, 3, 4] as const).map((level) => (
          <span key={level} className={cn("h-[11px] w-[11px] rounded-[2px]", LEVEL_CLASS[level])} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
