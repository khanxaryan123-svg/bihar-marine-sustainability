import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconKey } from "@/components/shared/icons";

type Variant = "primary" | "secondary" | "dark" | "ghost" | "outline-light";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  iconRight?: IconKey | false;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

type AsLink = {
  href: string;
  onClick?: never;
} & BaseProps;

type AsButton = {
  href?: never;
  onClick?: () => void;
} & BaseProps;

type Props = AsLink | AsButton;

const baseCls =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 focus-visible:ring-offset-2 select-none whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none";

const sizeCls: Record<Size, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-[13px] md:text-sm",
  lg: "h-12 md:h-14 px-7 md:px-8 text-sm md:text-[15px]",
};

const variantCls: Record<Variant, string> = {
  primary:
    "bg-ocean-500 text-white shadow-[0_6px_20px_-8px_rgba(24,199,200,0.6)] hover:bg-ocean-700 hover:-translate-y-0.5 focus-visible:ring-offset-white",
  secondary:
    "bg-white text-ocean-900 border border-ocean-50 shadow-[0_1px_2px_rgba(6,44,67,0.04),0_8px_20px_-16px_rgba(6,44,67,0.18)] hover:border-ocean-100 hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-offset-white",
  dark:
    "bg-ocean-900 text-white hover:bg-ocean-800 hover:-translate-y-0.5 focus-visible:ring-offset-ocean-900",
  ghost:
    "bg-transparent text-ocean-900 hover:bg-ocean-50 focus-visible:ring-offset-white",
  "outline-light":
    "bg-transparent text-white border border-white/40 backdrop-blur-sm hover:bg-white/10 hover:border-white/60 focus-visible:ring-offset-transparent",
};

export default function CTAButton(props: Props) {
  const {
    variant = "primary",
    size = "md",
    iconRight = "arrowRight",
    className = "",
    children,
    ariaLabel,
    disabled,
    type,
  } = props;
  const classes = `${baseCls} ${sizeCls[size]} ${variantCls[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {iconRight && (
        <Icon name={iconRight} size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />
      )}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={classes}
        aria-label={ariaLabel}
        aria-disabled={disabled}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type ?? "button"}
      onClick={(props as AsButton).onClick}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
