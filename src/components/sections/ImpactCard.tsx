"use client";

import { Icon, type IconKey } from "@/components/shared/icons";
import { useReveal } from "@/hooks/useReveal";

type Props = {
  icon: IconKey;
  title: string;
  description: string;
  className?: string;
};

export default function ImpactCard({
  icon,
  title,
  description,
  className = "",
}: Props) {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <div
      ref={reveal}
      className={`reveal group relative flex flex-col gap-4 p-6 md:p-7 rounded-2xl bg-white border border-ocean-100 hover:border-ocean-500/30 transition-all duration-300 ${className}`}
    >
      <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-100 text-ocean-500 overflow-hidden transition-colors duration-300 group-hover:bg-ocean-500 group-hover:text-white">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ocean-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Icon name={icon} size={26} className="relative z-10" />
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-lg md:text-xl font-bold leading-snug text-ocean-900 group-hover:text-ocean-700 transition-colors">
          {title}
        </h3>
        <p className="text-sm md:text-[15px] leading-relaxed text-ocean-800/70">
          {description}
        </p>
      </div>
      <div className="absolute left-6 right-6 top-0 h-0.5 bg-ocean-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-full" />
    </div>
  );
}
