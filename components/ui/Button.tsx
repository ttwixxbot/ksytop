import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
};

const variantClasses = {
  primary:
    "bg-[linear-gradient(135deg,#f2c78b,#a86f38_52%,#6f4429)] text-ink-950 shadow-bronze hover:shadow-[0_0_56px_rgba(231,191,132,0.32)]",
  secondary:
    "border border-bronze-300/45 bg-ivory/[0.03] text-ivory hover:border-bronze-200/80 hover:bg-bronze-300/10",
  ghost: "text-mist hover:text-ivory hover:bg-ivory/5"
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  icon,
  type = "button",
  onClick,
  disabled,
  ariaLabel
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      <span className="grid h-8 w-8 place-items-center rounded-full bg-ink-950/20">
        {icon ?? <ArrowRight size={16} aria-hidden />}
      </span>
    </>
  );
  const classes = cn(
    "premium-button inline-flex min-h-12 items-center justify-center gap-3 rounded-[10px] px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-200 disabled:cursor-not-allowed disabled:opacity-55",
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
