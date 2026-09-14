import * as React from "react";

type IconProps = { className?: string; size?: number | string };
type SVGComponent = React.FC<IconProps>;

const baseProps = (size: number | string = 24, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
});

export const Eye: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Target: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const Leaf: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 9-9h6v6c0 5-4 9-9 9Z" />
    <path d="M4 20c4-4 7-7 13-13" />
  </svg>
);

export const Search: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const Menu: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </svg>
);

export const X: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const ChevronRight: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className ? `ChevronRight ${className}` : "ChevronRight")}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const ArrowRight: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className ? `ArrowRight ${className}` : "ArrowRight")}>
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </svg>
);

export const Home: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2Z" />
  </svg>
);

export const Info: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export const Briefcase: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 12h18" />
  </svg>
);

export const Flag: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M4 22V4" />
    <path d="M4 4h13l-2 4 2 4H4" />
  </svg>
);

export const Users: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="10" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M17 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const Mail: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const Phone: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const Globe: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
  </svg>
);

export const WaveLogo: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M2 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" />
    <path d="M2 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" />
    <path d="M2 11c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" />
  </svg>
);

export const Book: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
  </svg>
);

export const Fish: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M6.5 12c1.5-2 4.5-3 7.5-3s6 1 7.5 3c-1.5 2-4.5 3-7.5 3s-6-1-7.5-3Z" />
    <path d="M2 12c1.5-1 3-1.5 4.5-1" />
    <path d="M2 12c1.5 1 3 1.5 4.5 1" />
    <circle cx="17" cy="11" r="0.8" fill="currentColor" />
    <path d="M21 7v10l3-5-3-5Z" />
  </svg>
);

export const Tree: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M12 2 5 10h3l-5 6h5v6h8v-6h5l-5-6h3L12 2Z" />
  </svg>
);

export const Shield: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Innovation: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V17h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2Z" />
  </svg>
);

export const Institution: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M3 22v-4h18v4" />
    <path d="M5 18V10" />
    <path d="M9 18V10" />
    <path d="M15 18V10" />
    <path d="M19 18V10" />
    <path d="m2 10 10-6 10 6" />
    <path d="M12 4v4" />
  </svg>
);

export const University: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M22 10 12 4 2 10l10 6 10-6Z" />
    <path d="M6 12v5" />
    <path d="M18 12v5" />
    <path d="M3 22h18" />
    <path d="M8 14v8" />
    <path d="M16 14v8" />
    <path d="M12 11v11" />
  </svg>
);

export const Corporate: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <rect x="9" y="2" width="6" height="6" rx="1" />
    <rect x="3" y="16" width="6" height="6" rx="1" />
    <rect x="15" y="16" width="6" height="6" rx="1" />
    <path d="M12 8v3" />
    <path d="M12 11v2" />
    <path d="M6 16v-3l6-2 6 2v3" />
  </svg>
);

export const Municipality: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M3 22V10l3-2V5l3 2V7l3-2 3 2V5l3 2v3l3 2v12" />
    <path d="M6 22v-4h3v4" />
    <path d="M12 22v-4h3v4" />
    <path d="M18 22v-4h3v4" />
    <path d="M9 10h.01" />
    <path d="M15 10h.01" />
    <path d="M9 13h.01" />
    <path d="M15 13h.01" />
  </svg>
);

export const Ngo: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
    <circle cx="7" cy="8" r="1.2" fill="currentColor" />
    <circle cx="17" cy="8" r="1.2" fill="currentColor" />
  </svg>
);

export const Sprout: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M7 20h10" />
    <path d="M12 20v-8" />
    <path d="M12 12C9 7 12 4 17 4c0 5-3 8-5 8" />
    <path d="M12 12c-3-5 0-8 5-8 0 5-3 8-5 8" />
  </svg>
);

export const HandHeart: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M11 14h2a2 2 0 0 1 2 2v3a4 4 0 0 1-4 4H9a4 4 0 0 1-3.9-3L3 15a2 2 0 0 1 2.2-2.8L7 13" />
    <path d="M7 13V7a2 2 0 0 1 4 0v6" />
    <path d="M11 10V5a2 2 0 0 1 4 0v7" />
    <path d="M15 9V6a2 2 0 0 1 4 0v6" />
    <path d="M18 8.5c.5-1 2-2 3.5-1 1.5 1 1.5 3 0 4.5L19 15l-2.5-3c-1.5-1.5-1.5-3.5 0-4.5 1.5-1 3 0 3.5 1Z" />
  </svg>
);

export const BookOpen: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z" />
  </svg>
);

export const Flask: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M9 3h6" />
    <path d="M10 3v6L4.5 19a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9V3" />
    <path d="M7 15h10" />
  </svg>
);

export const Anchor: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <circle cx="12" cy="5" r="3" />
    <path d="M12 8v13" />
    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    <path d="M5 12a7 7 0 0 1 14 0" />
  </svg>
);

export const Linkedin: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const TwitterX: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Youtube: SVGComponent = ({ className, size }) => (
  <svg {...baseProps(size, className)}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33Z" />
    <path d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54Z" fill="currentColor" />
  </svg>
);

export const icons = {
  eye: Eye,
  target: Target,
  leaf: Leaf,
  search: Search,
  menu: Menu,
  x: X,
  chevronRight: ChevronRight,
  arrowRight: ArrowRight,
  home: Home,
  info: Info,
  briefcase: Briefcase,
  flag: Flag,
  users: Users,
  mail: Mail,
  phone: Phone,
  globe: Globe,
  waveLogo: WaveLogo,
  book: Book,
  bookOpen: BookOpen,
  fish: Fish,
  tree: Tree,
  sprout: Sprout,
  shield: Shield,
  innovation: Innovation,
  flask: Flask,
  institution: Institution,
  university: University,
  corporate: Corporate,
  municipality: Municipality,
  ngo: Ngo,
  handHeart: HandHeart,
  anchor: Anchor,
  twitterX: TwitterX,
  linkedin: Linkedin,
  youtube: Youtube,
};

export type IconKey = keyof typeof icons;

export const Icon: React.FC<
  IconProps & { name: IconKey }
> = ({ name, className, size }) => {
  const Component = icons[name];
  if (!Component) return null;
  return <Component className={className} size={size} />;
};
