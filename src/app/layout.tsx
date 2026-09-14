import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import HtmlLangSync from "@/components/shared/HtmlLangSync";

export const metadata: Metadata = {
  metadataBase: new URL("https://biharmarine.org"),
  title: {
    default: "Bihar Marine Sustainability | Seas for Marine Environment Association",
    template: "%s | Bihar Marine Sustainability",
  },
  description:
    "Bihar Marine Sustainability works to protect marine ecosystems, conserve natural resources, empower communities and support a sustainable blue economy.",
  keywords: [
    "marine conservation",
    "Saudi marine environment",
    "blue economy",
    "ocean protection",
    "mangrove restoration",
    "environmental volunteering",
    "Seas for Marine Environment Association",
  ],
  authors: [{ name: "Bihar Marine Sustainability" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    url: "https://biharmarine.org",
    siteName: "Bihar Marine Sustainability",
    title: "Bihar Marine Sustainability | Seas for Marine Environment Association",
    description:
      "Bihar Marine Sustainability works to protect marine ecosystems, conserve natural resources, empower communities and support a sustainable blue economy.",
    images: [
      {
        url: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20Saudi%20Arabian%20coral%20reef%20sea%20turtle%20clear%20blue%20teal%20underwater%20marine%20biodiversity%20documentary%20photography&image_size=landscape_16_9",
        width: 1600,
        height: 900,
        alt: "Bihar Marine Sustainability - Healthy coral reef with sea turtle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bihar Marine Sustainability",
    description:
      "Working to protect marine ecosystems, conserve natural resources and support a sustainable blue economy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-ocean-900">
        <LanguageProvider>
          <HtmlLangSync />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-ocean-500 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
