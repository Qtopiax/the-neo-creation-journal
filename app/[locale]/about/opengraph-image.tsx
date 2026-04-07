import { siteContent } from "@/content/site";
import { isLocale, type Locale } from "@/lib/i18n";
import { ogImageContentType, ogImageSize, renderOgImage } from "@/components/og-image";

export const contentType = ogImageContentType;
export const size = ogImageSize;

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "zh-Hant";
  const content = siteContent[safeLocale];

  return renderOgImage({
    title: content.about.title,
    subtitle: content.about.description,
    meta: content.siteTitle,
  });
}
