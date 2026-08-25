import { skillGroups } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading index="04" eyebrow="Craft" title="Skills">
          Honest foundations — coursework and practice, not padded expertise.
        </SectionHeading>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-xl bg-surface p-6 shadow-hairline sm:p-7"
            >
              <h3 className="text-xs font-medium tracking-widest text-muted uppercase">
                {group.label}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-3 border-b border-border pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-fg">{item.name}</span>
                    <span className="text-xs tracking-wide text-muted">{item.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
