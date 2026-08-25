import { useState, type FormEvent } from "react";
import { Check, Copy, Download, Linkedin, Mail, Phone } from "lucide-react";
import { person } from "@/lib/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${person.email}`;
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      name ? `Hello from ${name}` : "Hello from your portfolio",
    );
    const body = encodeURIComponent(
      [message.trim(), from ? `\n\n— ${name || "Visitor"} (${from})` : name ? `\n\n— ${name}` : ""]
        .join("")
        .trim(),
    );
    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading index="06" eyebrow="Connect" title="Get in touch">
            For internships, research, or a conversation about electronics and embedded systems.
          </SectionHeading>

          <ul className="mt-10 space-y-2">
            <li>
              <button
                type="button"
                onClick={copyEmail}
                className="flex min-h-11 w-full items-center gap-3 rounded-md px-2 text-left text-sm text-fg transition-colors duration-150 hover:bg-surface"
              >
                <Mail className="size-4 text-primary" />
                <span className="flex-1 truncate">{person.email}</span>
                {copied ? (
                  <Check className="size-4 text-primary" />
                ) : (
                  <Copy className="size-4 text-muted" />
                )}
                <span className="sr-only">{copied ? "Copied" : "Copy email"}</span>
              </button>
            </li>
            <li>
              <a
                href={person.phoneHref}
                className="flex min-h-11 items-center gap-3 rounded-md px-2 text-sm text-fg transition-colors duration-150 hover:bg-surface"
              >
                <Phone className="size-4 text-primary" />
                {person.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center gap-3 rounded-md px-2 text-sm text-fg transition-colors duration-150 hover:bg-surface"
              >
                <Linkedin className="size-4 text-primary" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={person.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-3 rounded-md px-2 text-sm text-fg transition-colors duration-150 hover:bg-surface"
              >
                <Download className="size-4 text-primary" />
                Download resume
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-xl bg-surface p-6 shadow-hairline sm:p-8 lg:col-span-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="text-muted">Name</span>
              <input
                required
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 h-11 w-full rounded-md bg-bg px-3 text-fg shadow-hairline outline-none transition-[box-shadow] duration-150 placeholder:text-muted focus:shadow-hairline-hover"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm">
              <span className="text-muted">Email</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="mt-2 h-11 w-full rounded-md bg-bg px-3 text-fg shadow-hairline outline-none transition-[box-shadow] duration-150 placeholder:text-muted focus:shadow-hairline-hover"
                placeholder="you@email.com"
              />
            </label>
          </div>
          <label className="mt-5 block text-sm">
            <span className="text-muted">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full resize-y rounded-md bg-bg px-3 py-3 text-fg shadow-hairline outline-none transition-[box-shadow] duration-150 placeholder:text-muted focus:shadow-hairline-hover"
              placeholder="What would you like to talk about?"
            />
          </label>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button type="submit" className="pr-4">
              Open email
            </Button>
            <a
              href={`mailto:${person.email}`}
              className={cn(buttonVariants({ variant: "text" }), "px-2")}
            >
              Or write directly
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
