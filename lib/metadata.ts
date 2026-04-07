import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import type { Locale } from "@/lib/i18n";

type PageKey = "home" | "about" | "issue";

export function buildMetadata(locale: Locale, page: PageKey, pathname: string): Metadata {
  const content = siteContent[locale];
  const pageContent = content[page];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const ogPath = pathname ? `${pathname}/opengraph-image` : "/opengraph-image";

  const languages = Object.fromEntries(
    (Object.keys(siteContent) as Locale[]).map((entryLocale) => [
      entryLocale,
      `${siteUrl}/${entryLocale}${pathname}`,
    ]),
  );

  return {
    title: pageContent.seoTitle,
    description: pageContent.seoDescription,
    alternates: {
      canonical: `${siteUrl}/${locale}${pathname}`,
      languages,
    },
    openGraph: {
      title: pageContent.seoTitle,
      description: pageContent.seoDescription,
      url: `${siteUrl}/${locale}${pathname}`,
      siteName: content.siteTitle,
      locale: content.localeCode,
      type: "website",
      images: [
        {
          url: `${siteUrl}/${locale}${ogPath}`,
          width: 1200,
          height: 630,
          alt: pageContent.seoTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageContent.seoTitle,
      description: pageContent.seoDescription,
      images: [`${siteUrl}/${locale}${ogPath}`],
    },
  };
}
