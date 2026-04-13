import Link from "next/link";
import type { Metadata } from "next";
import { ContactQrCard } from "@/components/contact-qr-card";
import { ContactQrTrigger } from "@/components/contact-qr-trigger";
import { siteContent } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, withLocale, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "zh-Hant";
  return buildMetadata(safeLocale, "home", "");
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "zh-Hant";
  const content = siteContent[safeLocale];

  return (
    <>
      <section className="hero">
        <div className="hero__layout">
          <div className="hero__copy">
            <span className="eyebrow">{content.home.hero.eyebrow}</span>
            <h1 className="hero__title">{content.home.hero.title}</h1>
            <div className="hero__meta">
              <span>
                <strong>{content.home.hero.launchLabel}</strong> {content.home.hero.launchValue}
              </span>
            </div>

            <div className="hero__actions">
              <Link className="button button--solid" href={withLocale(safeLocale, "/issue-01")}>
                {content.home.hero.primaryCta}
              </Link>
              <ContactQrTrigger locale={safeLocale} label={content.home.hero.secondaryCta} />
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="issue-cover">
              <div className="issue-cover__inner">
                <div className="issue-cover__label">
                  <span>{content.siteTitle}</span>
                  <span>{content.issueNumber}</span>
                </div>
                <h2 className="issue-cover__title">
                  {content.issue.coverTitle.split("\n").map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h2>
                <div className="issue-cover__footer">
                  <span>{content.issueDate}</span>
                  <span>{content.issue.coverSubtitle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bordered final-cta">
        <div className="reading-container">
          <h2 className="section-title">{content.home.finalCta.title}</h2>
          <p className="section-intro">{content.home.finalCta.body}</p>
          <div className="contact-qr-card-wrap">
            <ContactQrCard locale={safeLocale} />
          </div>
        </div>
      </section>
    </>
  );
}
