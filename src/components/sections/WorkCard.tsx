"use client";

import Image from "next/image";
import Link from "next/link";
import { buildImageUrl, type ImageSize } from "@/lib/imageUrl";
import { useReveal } from "@/hooks/useReveal";
import { Icon, type IconKey, ChevronRight } from "@/components/shared/icons";

type Props = {
  imagePrompt: string;
  imageAlt: string;
  icon: IconKey;
  title: string;
  description: string;
  href: string;
  imageSize?: ImageSize;
  className?: string;
  localImage?: string;
  localVideo?: string;
};

export default function WorkCard({
  imagePrompt,
  imageAlt,
  icon,
  title,
  description,
  href,
  imageSize = "landscape_16_9",
  className = "",
  localImage,
  localVideo,
}: Props) {
  const reveal = useReveal<HTMLAnchorElement>();
  const generatedSrc = buildImageUrl(imagePrompt, imageSize);
  const src = localImage ?? generatedSrc;
  const posterSrc = localImage ?? undefined;

  return (
    <Link
      ref={reveal}
      href={href}
      className={`reveal group relative block w-full rounded-2xl overflow-hidden bg-white shadow-[0_1px_2px_rgba(6,44,67,0.04),0_8px_24px_-12px_rgba(6,44,67,0.12)] border border-ocean-50 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(6,44,67,0.04),0_20px_40px_-16px_rgba(6,44,67,0.22)] ${className}`}
    >
      <div className="img-zoom-wrap relative w-full aspect-[16/10]">
        {localVideo ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={posterSrc}
              aria-hidden="true"
              className="img-zoom-target absolute inset-0 h-full w-full object-cover"
            >
              <source src={localVideo} type="video/mp4" />
            </video>
            {posterSrc && (
              <Image
                src={posterSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover -z-10"
              />
            )}
          </>
        ) : (
          <Image
            src={src}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="img-zoom-target object-cover"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ocean-900/75 via-ocean-900/20 to-transparent" />
        <span className="absolute top-5 left-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ocean-500/90 backdrop-blur text-white shadow-lg">
          <Icon name={icon} size={20} />
        </span>
      </div>
      <div className="relative flex flex-col gap-3 p-6 md:p-7">
        <h3 className="text-lg md:text-xl font-bold leading-snug text-ocean-900 group-hover:text-ocean-700 transition-colors">
          {title}
        </h3>
        <p className="text-sm md:text-[15px] leading-relaxed text-ocean-800/70 line-clamp-2">
          {description}
        </p>
        <div className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean-700 group-hover:text-ocean-500 transition-colors">
          <span>Learn more</span>
          <ChevronRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
