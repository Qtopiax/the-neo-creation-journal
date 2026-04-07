import Link from "next/link";
import { siteContent } from "@/content/site";
import { withLocale, type Locale } from "@/lib/i18n";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const content = siteContent[locale];

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
            <span>{content.home.footer.contactLabel}</span>
            <a className="text-link" href={`mailto:${content.contactEmail}`}>
              {content.contactEmail}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
