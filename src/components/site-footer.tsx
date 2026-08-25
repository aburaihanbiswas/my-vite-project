import { person } from "@/lib/portfolio";
import { SignalMark } from "@/components/signal-mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2.5 text-sm text-muted">
          <SignalMark className="size-6" />
          <span>
            {person.name} · {person.location}
          </span>
        </div>
        <p className="text-sm text-muted">Aliah University · ECE · Expected {person.expected}</p>
      </div>
    </footer>
  );
}
