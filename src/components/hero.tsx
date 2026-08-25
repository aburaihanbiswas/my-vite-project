import { ArrowDownRight, MapPin } from "lucide-react";
import { person } from "@/lib/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { Waveform } from "@/components/signal-mark";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-5 py-16 sm:px-8 sm:py-24"
    >
      <p
        className="rise text-xs font-medium tracking-widest text-muted uppercase"
        style={{ animationDelay: "40ms" }}
      >
        {person.role} · {person.semester}
      </p>

      <h1
        className="rise mt-6 font-serif text-6xl leading-none tracking-tight text-fg sm:text-7xl md:text-8xl"
        style={{ animationDelay: "120ms" }}
      >
        <span className="block">{person.first}</span>
        <span className="block italic text-primary">{person.last}</span>
      </h1>

      <p
        className="rise mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
        style={{ animationDelay: "200ms" }}
      >
        {person.headline}
      </p>

      <div
        className="rise mt-10 flex flex-wrap items-center gap-3"
        style={{ animationDelay: "280ms" }}
      >
        <a href="#work" className={cn(buttonVariants(), "pr-3.5")}>
          Selected work
          <ArrowDownRight className="size-4" />
        </a>
        <a href="#contact" className={cn(buttonVariants({ variant: "ghost" }))}>
          Get in touch
        </a>
      </div>

      <div
        className="rise mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted"
        style={{ animationDelay: "360ms" }}
      >
        <span className="inline-flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          {person.status}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-3.5" />
          {person.location}
        </span>
      </div>

      <div className="mt-16 sm:mt-20">
        <Waveform className="h-16 opacity-80 sm:h-20" />
      </div>
    </section>
  );
}
