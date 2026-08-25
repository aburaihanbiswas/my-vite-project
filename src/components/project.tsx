import { ArrowUpRight } from "lucide-react";
import { achievement, project } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Project() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading index="03" eyebrow="Selected work" title="Project">
          One concept taken from lab idea to a national hackathon shortlist.
        </SectionHeading>

        <article className="mt-12 overflow-hidden rounded-xl bg-surface shadow-hairline">
          <div className="grid lg:grid-cols-12">
            <div className="flex flex-col justify-between gap-8 p-6 sm:p-10 lg:col-span-5">
              <div>
                <p className="text-xs font-medium tracking-widest text-primary uppercase">
                  {project.context}
                </p>
                <h3 className="mt-3 font-serif text-4xl tracking-tight text-fg">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {project.summary}
                </p>
              </div>
              <dl className="grid gap-4 text-sm">
                <div>
                  <dt className="text-muted">Team</dt>
                  <dd className="mt-1 text-fg">{project.team}</dd>
                </div>
                <div>
                  <dt className="text-muted">Venue</dt>
                  <dd className="mt-1 text-fg">{project.venue}</dd>
                </div>
                <div>
                  <dt className="text-muted">Result</dt>
                  <dd className="mt-1 text-fg">{project.outcome}</dd>
                </div>
              </dl>
            </div>

            <div className="border-t border-border p-6 sm:p-10 lg:col-span-7 lg:border-t-0 lg:border-l">
              <ol className="space-y-6">
                {project.points.map((point, i) => (
                  <li key={point} className="flex gap-4">
                    <span className="mt-0.5 w-8 shrink-0 font-serif text-lg text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base leading-relaxed text-fg">{point}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </article>

        <div className="mt-6 flex items-start gap-3 rounded-lg px-1 py-4">
          <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted">
            <span className="text-fg">{achievement.title}.</span> {achievement.detail}
          </p>
        </div>
      </div>
    </section>
  );
}
