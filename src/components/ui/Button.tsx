import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  download?: boolean | string;
  external?: boolean;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-accent text-accent-foreground hover:brightness-110 shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_40%,transparent)]",
  secondary:
    "border border-border bg-surface/70 text-foreground hover:border-accent/50 hover:bg-accent-soft",
  ghost: "text-muted hover:text-foreground hover:bg-accent-soft",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  download,
  external,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-200",
    variants[variant],
    className,
  );

  if (href) {
    const isExternal = external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          download={download}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
