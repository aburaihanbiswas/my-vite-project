import { useMemo, useState } from "react";
import { certifications } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const filters = ["All", "Course", "Simulation", "Training", "Workshop"] as const;
type Filter = (typeof filters)[number];

export function Certs() {
  const [filter, setFilter] = useState<Filter>("All");
  const items = useMemo(
    () =>
      filter === "All"
        ? certifications
        : certifications.filter((c) => c.kind === filter),
    [filter],
  );

  return (
    <section id="training" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading index="05" eyebrow="Training" title="Certificates">
          Courses, job simulations, and workshops from 2026.
        </SectionHeading>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter certificates"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "inline-flex h-11 min-w-11 items-center rounded-md px-4 text-sm transition-[background-color,color,box-shadow] duration-150",
                filter === f
                  ? "bg-primary text-ink"
                  : "text-muted shadow-hairline hover:text-fg hover:shadow-hairline-hover",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="mt-8 divide-y divide-border">
          {items.map((item) => (
            <li
              key={`${item.title}-${item.date}`}
              className="grid gap-1 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6"
            >
              <p className="text-sm text-muted sm:col-span-3">{item.date}</p>
              <div className="sm:col-span-7">
                <h3 className="text-base text-fg">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.issuer}</p>
              </div>
              <p className="text-xs tracking-wide text-muted sm:col-span-2 sm:text-right">
                {item.kind}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
