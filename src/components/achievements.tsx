import { achievements } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading index="04" eyebrow="Highlights" title="Achievements">
          Recent fellowships, selections, workshop participation, and community milestones.
        </SectionHeading>

        <ul className="mt-12 divide-y divide-border">
          {achievements.map((item) => (
            <li
              key={item.title}
              className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
            >
              <p className="text-xs font-medium tracking-widest text-primary uppercase sm:col-span-3">
                {item.kind}
              </p>
              <div className="sm:col-span-9">
                <h3 className="text-lg text-fg">{item.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
