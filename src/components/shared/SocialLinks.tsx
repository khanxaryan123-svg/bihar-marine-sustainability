import Link from "next/link";
import { Icon, type IconKey } from "@/components/shared/icons";
import type { SocialLink } from "@/data/navigation";
import { useLanguage } from "@/i18n/LanguageProvider";

type Props = {
  links: SocialLink[];
  variant?: "dark" | "light" | "navy";
  size?: "sm" | "md";
  className?: string;
};

const baseLinkCls =
  "inline-flex items-center justify-center rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 focus-visible:ring-offset-2";

const variantCls = {
  dark: {
    link: "text-white border-white/25 hover:bg-white/10 hover:border-white/50 focus-visible:ring-offset-ocean-900",
  },
  light: {
    link: "text-ocean-800 border-ocean-800/15 hover:bg-ocean-50 hover:border-ocean-800/30 focus-visible:ring-offset-white",
  },
  navy: {
    link: "text-ocean-900 border-ocean-900/15 hover:bg-ocean-900 hover:text-white focus-visible:ring-offset-white",
  },
} as const;

const sizeCls = {
  sm: "h-9 w-9",
  md: "h-10 w-10",
} as const;

const iconMap: Record<SocialLink["iconKey"], IconKey> = {
  twitterX: "twitterX",
  linkedin: "linkedin",
  youtube: "youtube",
};

export default function SocialLinks({
  links,
  variant = "dark",
  size = "md",
  className = "",
}: Props) {
  const { locale } = useLanguage();

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => (
        <li key={link.iconKey}>
          <Link
            href={link.href}
            aria-label={link.label[locale]}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
            className={`${baseLinkCls} ${variantCls[variant].link} ${sizeCls[size]}`}
          >
            <Icon name={iconMap[link.iconKey]} size={size === "sm" ? 14 : 16} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
