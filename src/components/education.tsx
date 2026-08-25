import { education } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading index="02" eyebrow="Path" title="Education" />
        <ol className="mt-12 divide-y divide-border">
          {education.map((item) => (
            <li
              key={item.id}
              className="grid gap-3 py-8 first:pt-0 sm:grid-cols-12 sm:items-baseline sm:gap-6"
            >
              <div className="sm:col-span-3">
                <p className="text-sm text-muted">{item.period}</p>
                {item.current ? (
                  <p className="mt-1 text-xs font-medium tracking-widest text-primary uppercase">
                    In progress
                  </p>
                ) : null}
              </div>
              <div className="sm:col-span-6">
                <h3 className="font-serif text-2xl tracking-tight text-fg">
                  {item.program}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {item.school}
                  {item.meta ? ` · ${item.meta}` : ""}
                </p>
              </div>
              <p className="text-sm text-fg sm:col-span-3 sm:text-right">{item.result}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
