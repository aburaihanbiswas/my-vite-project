import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[transform,background-color,box-shadow,color] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 enabled:active:scale-(--scale-press)",
  {
    variants: {
      variant: {
        primary: "bg-primary text-ink hover:bg-primary/90",
        ghost:
          "bg-transparent text-fg shadow-hairline hover:bg-surface hover:shadow-hairline-hover",
        text: "bg-transparent text-muted hover:text-fg",
      },
      size: {
        md: "h-11 min-h-11 rounded-md px-5 text-sm",
        sm: "h-9 min-h-9 rounded-sm px-3 text-sm",
        icon: "size-11 min-h-11 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { Button, buttonVariants };
