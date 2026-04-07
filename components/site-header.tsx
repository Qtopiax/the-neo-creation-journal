import Link from "next/link";
import { siteContent } from "@/content/site";
import { localeLabels, locales, withLocale, type Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const content = siteContent[locale];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand-lockup" href={withLocale(locale)}>
          <span className="brand-lockup__title">{content.siteTitle}</span>
          <span className="brand-lockup__subtitle">{content.issueDate}</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {content.home.nav.map((item) => (
            <Link key={item.href} href={withLocale(locale, item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="locale-switcher" aria-label="Language switcher">
          {locales.map((entryLocale) => {
            const className = entryLocale === locale ? "locale-switcher__current" : undefined;
            return (
              <Link key={entryLocale} className={className} href={withLocale(entryLocale)}>
                {localeLabels[entryLocale]}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
