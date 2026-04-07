import Link from "next/link";
import type { Metadata } from "next";
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
            <p className="hero__lede">{content.home.hero.lede}</p>

            <div className="hero__meta">
              <span>
                <strong>{content.home.hero.launchLabel}</strong> {content.home.hero.launchValue}
              </span>
              <span>
                <strong>{content.home.hero.founderLabel}</strong> {content.home.hero.founderValue}
              </span>
              <span>
                <strong>{content.home.hero.locationLabel}</strong> {content.home.hero.locationValue}
              </span>
            </div>

            <div className="hero__actions">
              <Link className="button button--solid" href={withLocale(safeLocale, "/issue-01")}>
                {content.home.hero.primaryCta}
              </Link>
              <a className="button button--ghost" href={`mailto:${content.contactEmail}`}>
                {content.home.hero.secondaryCta}
              </a>
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

      <section className="section">
        <div className="container">
          <h2 className="section-title">{content.home.manifesto.title}</h2>
          <p className="section-intro">{content.home.manifesto.intro}</p>

          <div className="manifesto-grid">
            {content.home.manifesto.items.map((item) => (
              <div key={item.title} className="manifesto-block">
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="container split-section">
          <div>
            <h2 className="section-title">{content.home.feature.title}</h2>
            <p className="section-intro">{content.home.feature.body}</p>

            <div className="split-actions">
              <Link className="button button--solid" href={withLocale(safeLocale, "/issue-01")}>
                {content.home.feature.primaryCta}
              </Link>
              <Link className="button button--ghost" href={withLocale(safeLocale, "/about")}>
                {content.home.feature.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="atmosphere-panel">
            <div className="atmosphere-panel__content">
              <div className="quote-block">{content.home.feature.quote}</div>
              <p className="quote-caption">{content.home.feature.caption}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="container">
          <h2 className="section-title">{content.home.issuePreview.title}</h2>
          <p className="section-intro">{content.home.issuePreview.intro}</p>

          <div className="issue-grid">
            <div className="issue-poster">
              <div className="issue-cover">
                <div className="issue-cover__inner">
                  <div className="issue-cover__label">
                    <span>{content.issue.coverTag}</span>
                    <span>{content.issueDate}</span>
                  </div>
                  <h3 className="issue-cover__title">
                    {content.issue.coverTitle.split("\n").map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h3>
                  <p className="issue-cover__subtitle">{content.issue.coverSubtitle}</p>
                </div>
              </div>
            </div>

            <div className="issue-copy">
              <p>{content.home.issuePreview.summary}</p>

              <dl className="issue-meta-list">
                {content.home.issuePreview.meta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="paper-panel">
                <strong>{content.home.issuePreview.tocTitle}</strong>
                <ol className="issue-list">
                  {content.home.issuePreview.toc.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>

              <div className="issue-actions">
                <Link className="button button--solid" href={withLocale(safeLocale, "/issue-01")}>
                  {content.home.issuePreview.ctas.issue}
                </Link>
                <a className="button button--ghost" href={content.pdfHref} target="_blank" rel="noreferrer">
                  {content.home.issuePreview.ctas.pdf}
                </a>
                <a className="button button--ghost" href={content.buyHref} target="_blank" rel="noreferrer">
                  {content.home.issuePreview.ctas.buy}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bordered final-cta">
        <div className="reading-container">
          <h2 className="section-title">{content.home.finalCta.title}</h2>
          <p className="section-intro">{content.home.finalCta.body}</p>
          <div className="hero__actions" style={{ justifyContent: "center" }}>
            <a className="button button--solid" href={`mailto:${content.contactEmail}`}>
              {content.home.finalCta.button}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
