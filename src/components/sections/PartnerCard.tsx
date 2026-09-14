"use client";

import { Icon, type IconKey } from "@/components/shared/icons";
import { useReveal } from "@/hooks/useReveal";

type Props = {
  icon: IconKey;
  name: string;
  label?: string;
  className?: string;
};

export default function PartnerCard({
  icon,
  name,
  label = "Potential Partner",
  className = "",
}: Props) {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <div
      ref={reveal}
      className={`reveal group relative flex flex-col items-center justify-center gap-4 p-6 md:p-8 rounded-2xl bg-white border border-ocean-100 hover:border-ocean-500/30 hover:shadow-[0_1px_2px_rgba(6,44,67,0.04),0_12px_28px_-16px_rgba(6,44,67,0.18)] transition-all duration-300 text-center ${className}`}
    >
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700 group-hover:bg-ocean-500 group-hover:text-white transition-colors duration-300">
        <Icon name={icon} size={30} />
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] text-ocean-500">
          {label}
        </span>
        <h3 className="text-sm md:text-base font-bold leading-snug text-ocean-900 group-hover:text-ocean-700 transition-colors">
          {name}
        </h3>
      </div>
    </div>
  );
}
