import type { ReactNode } from "react";

export function SectionHeading({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium tracking-widest text-muted uppercase">
        {index} / {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-4xl tracking-tight text-fg sm:text-5xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-4 text-base leading-relaxed text-muted">{children}</div>
      ) : null}
    </div>
  );
}
