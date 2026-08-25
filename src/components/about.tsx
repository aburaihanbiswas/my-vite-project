import { interests, person, profile } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading index="01" eyebrow="Profile" title="About">
            Currently in the {person.semester} at Aliah University, expected {person.expected}.
          </SectionHeading>
        </div>
        <div className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-fg">{profile}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {interests.map((item) => (
              <li
                key={item}
                className="rounded-md bg-surface px-3 py-2 text-sm text-fg shadow-hairline"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
