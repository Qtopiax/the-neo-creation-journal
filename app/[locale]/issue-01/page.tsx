import Image from "next/image";
import type { Metadata } from "next";
import { ContactQrTrigger } from "@/components/contact-qr-trigger";
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
  const archiveCopy: Record<
    Locale,
    {
      filterLabel: string;
      optionLabel: string;
      title: string;
      subtitle: string;
    }
  > = {
    "zh-Hant": {
      filterLabel: "查找往期",
      optionLabel: "創刊號",
      title: "創刊號",
      subtitle: "Issue 01",
    },
    "zh-Hans": {
      filterLabel: "查找往期",
      optionLabel: "创刊号",
      title: "创刊号",
      subtitle: "Issue 01",
    },
    ja: {
      filterLabel: "バックナンバーを選ぶ",
      optionLabel: "創刊号",
      title: "創刊号",
      subtitle: "Issue 01",
    },
    en: {
      filterLabel: "Browse past issues",
      optionLabel: "Launch Issue",
      title: "Launch Issue",
      subtitle: "Issue 01",
    },
  };
  const archive = archiveCopy[safeLocale];

  return (
    <>
      <section className="page-intro archive-intro">
        <div className="container">
          <div className="archive-toolbar">
            <label className="archive-toolbar__label" htmlFor="archive-select">
              {archive.filterLabel}
            </label>
            <div className="archive-toolbar__select">
              <select id="archive-select" className="archive-toolbar__input" defaultValue="issue-01">
                <option value="issue-01">{archive.optionLabel}</option>
              </select>
            </div>
          </div>

          <div className="archive-heading">
            <h1 className="archive-heading__title">{archive.title}</h1>
            <p className="archive-heading__subtitle">{archive.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="section archive-section">
        <div className="container issue-grid">
          <div className="issue-poster">
            <div className="issue-cover">
              <div className="issue-cover__inner">
                <Image
                  src="/images/cover-issue01.jpg"
                  alt={`${content.siteTitle} ${content.issueNumber}`}
                  width={843}
                  height={1200}
                  className="issue-cover__image"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="issue-copy">
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
              <button className="button button--solid button--disabled" type="button" disabled>
                {content.issue.actions.pdf}
              </button>
              <button className="button button--ghost button--disabled" type="button" disabled>
                {content.issue.actions.buy}
              </button>
              <ContactQrTrigger locale={safeLocale} label={content.issue.actions.contact} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
