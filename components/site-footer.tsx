import Link from "next/link";
import { ContactQrTrigger } from "@/components/contact-qr-trigger";
import { siteContent } from "@/content/site";
import { withLocale, type Locale } from "@/lib/i18n";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const content = siteContent[locale];
  const contactLabels: Record<Locale, string> = {
    "zh-Hant": "編輯部微信",
    "zh-Hans": "编辑部微信",
    ja: "編集部 WeChat",
    en: "Editorial WeChat",
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="brand-lockup__title">{content.siteTitle}</p>
          <p className="footer-note">{content.home.footer.about}</p>
          <p className="footer-note">{content.home.footer.rights}</p>
        </div>

        <div>
          <h2 className="footer-heading">{content.home.footer.linksTitle}</h2>
          <div className="footer-links">
            {content.home.nav.map((item) => (
              <Link key={item.href} className="text-link" href={withLocale(locale, item.href)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="footer-heading">{content.home.footer.contactTitle}</h2>
          <div className="footer-links">
            <ContactQrTrigger locale={locale} label={contactLabels[locale]} variant="text" />
          </div>
        </div>
      </div>
    </footer>
  );
}
