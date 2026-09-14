"use client";

import Image from "next/image";
import { buildImageUrl } from "@/lib/imageUrl";
import { useReveal } from "@/hooks/useReveal";
import { Icon, type IconKey } from "@/components/shared/icons";

type Props = {
  imagePrompt: string;
  imageAlt: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  overlay?: boolean;
  imageSize?:
    | "square_hd"
    | "square"
    | "portrait_4_3"
    | "portrait_16_9"
    | "landscape_4_3"
    | "landscape_16_9";
  aspect?: string;
  rounded?: string;
  icon?: IconKey;
  iconClassName?: string;
  children?: React.ReactNode;
  className?: string;
  priority?: boolean;
};

export default function ImageCard({
  imagePrompt,
  imageAlt,
  eyebrow,
  title,
  description,
  overlay = true,
  imageSize = "landscape_16_9",
  aspect = "aspect-[16/10]",
  rounded = "rounded-2xl",
  icon,
  iconClassName = "absolute top-5 left-5 text-white bg-ocean-500/90 backdrop-blur",
  children,
  className = "",
  priority = false,
}: Props) {
  const reveal = useReveal<HTMLDivElement>();
  const src = buildImageUrl(imagePrompt, imageSize);

  return (
    <div
      ref={reveal}
      className={`reveal group relative w-full ${rounded} overflow-hidden ${className}`}
    >
      <div className={`img-zoom-wrap relative w-full ${aspect} ${rounded}`}>
        <Image
          src={src}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="img-zoom-target object-cover"
          priority={priority}
        />
        {overlay && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ocean-900/70 via-ocean-900/15 to-transparent" />
        )}
        {icon && (
          <span
            className={`z-10 inline-flex h-10 w-10 items-center justify-center rounded-full shadow-sm ${iconClassName}`}
            aria-hidden
          >
            <Icon name={icon} size={18} />
          </span>
        )}
        {(eyebrow || title || description || children) && (
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2 p-5 md:p-6 text-white">
            {eyebrow && (
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-100/90">
                {eyebrow}
              </span>
            )}
            {title && <h3 className="text-lg md:text-xl font-bold leading-snug text-white">{title}</h3>}
            {description && (
              <p className="text-sm md:text-[15px] leading-relaxed text-white/80">{description}</p>
            )}
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
