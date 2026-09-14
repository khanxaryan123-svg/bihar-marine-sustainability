import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconKey } from "@/components/shared/icons";

type Props = {
  eyebrow?: string;
  heading: ReactNode;
  subtitle?: ReactNode;
  viewAllHref?: string;
  viewAllLabel?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  heading,
  subtitle,
  viewAllHref,
  viewAllLabel = "View All",
  align = "left",
  dark = false,
  className = "",
}: Props) {
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const eyebrowCls = dark ? "eyebrow-light" : "eyebrow";
  const headingCls = dark ? "text-white" : "text-ocean-900";
  const subtitleCls = dark ? "text-ocean-100/80" : "text-ocean-800/70";
  const linkCls = dark ? "text-ocean-100 hover:text-white" : "text-ocean-700 hover:text-ocean-900";

  return (
    <div
      className={`relative z-10 flex flex-col w-full gap-4 md:gap-5 lg:gap-6 max-w-4xl ${alignCls} ${className}`}
    >
      {eyebrow && <span className={eyebrowCls}>{eyebrow}</span>}
      <h2 className={`heading-lg text-balance ${headingCls}`}>{heading}</h2>
      {subtitle && <p className={`body-lg max-w-3xl ${subtitleCls}`}>{subtitle}</p>}
      {viewAllHref && (
        <div className={align === "center" ? "mx-auto" : "ml-0"}>
          <Link
            href={viewAllHref}
            className={`inline-flex items-center gap-2 text-sm font-semibold transition group ${linkCls}`}
          >
            <span>{viewAllLabel}</span>
            <Icon
              name="arrowRight"
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      )}
    </div>
  );
}
