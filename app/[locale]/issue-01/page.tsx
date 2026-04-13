import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "zh-Hant";
  return buildMetadata(safeLocale, "issue", "/issue-01");
}

export default async function IssuePage({ params }: PageProps) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "zh-Hant";
  const content = siteContent[safeLocale];

  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="page-kicker">{content.issue.kicker}</span>
          <h1 className="page-title">{content.issue.title}</h1>
          <p className="page-description">{content.issue.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container issue-grid">
          <div className="issue-poster">
            <div className="issue-cover">
              <div className="issue-cover__inner">
                <div className="issue-cover__label">
                  <span>{content.issue.coverTag}</span>
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
                <p className="issue-cover__subtitle">{content.issue.coverSubtitle}</p>
                <div className="issue-cover__footer">
                  <span>{content.issueDate}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="issue-copy">
            <div>
              <h2 className="section-title">{content.issue.summaryTitle}</h2>
              <div className="section-intro">
                {content.issue.summaryBody.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <dl className="issue-meta-list">
              {content.issue.meta.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="paper-panel">
              <strong>{content.issue.tocTitle}</strong>
              <ol className="issue-list">
                {content.issue.toc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>

            <div className="paper-panel">
              <strong>{content.issue.creditTitle}</strong>
              <div className="detail-grid">
                {content.issue.credits.map((item) => (
                  <div key={item.title} className="paper-panel">
                    <strong>{item.title}</strong>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="paper-panel">
              <strong>{content.issue.publicationTitle}</strong>
              <ul>
                {content.issue.publicationInfo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="issue-actions">
              <a className="button button--solid" href={content.pdfHref} target="_blank" rel="noreferrer">
                {content.issue.actions.pdf}
              </a>
              <a className="button button--ghost" href={content.buyHref} target="_blank" rel="noreferrer">
                {content.issue.actions.buy}
              </a>
              <a className="button button--ghost" href={`mailto:${content.contactEmail}`}>
                {content.issue.actions.contact}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
