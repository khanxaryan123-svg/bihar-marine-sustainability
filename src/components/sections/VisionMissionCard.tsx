"use client";

import { Icon, type IconKey } from "@/components/shared/icons";
import { useReveal } from "@/hooks/useReveal";

type Props = {
  icon: IconKey;
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export default function VisionMissionCard({
  icon,
  eyebrow,
  title,
  description,
  className = "",
}: Props) {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <div
      ref={reveal}
      className={`reveal card-elevated group relative flex flex-col gap-5 p-6 md:p-8 border border-ocean-50 hover:border-ocean-100 transition-all duration-300 ${className}`}
    >
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700 group-hover:bg-ocean-500 group-hover:text-white transition-colors duration-300">
        <Icon name={icon} size={26} />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-[11px] md:text-xs font-semibold tracking-[0.18em] uppercase text-ocean-700">
          {eyebrow}
        </span>
        <h3 className="text-xl md:text-2xl font-bold leading-snug text-ocean-900">
          {title}
        </h3>
        <p className="text-[15px] md:text-base leading-relaxed text-ocean-800/70">
          {description}
        </p>
      </div>
    </div>
  );
}
