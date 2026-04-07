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
  return buildMetadata(safeLocale, "about", "/about");
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "zh-Hant";
  const content = siteContent[safeLocale];

  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="page-kicker">{content.about.kicker}</span>
          <h1 className="page-title">{content.about.title}</h1>
          <p className="page-description">{content.about.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <h2 className="section-title">{content.about.storyTitle}</h2>
            <div className="section-intro">
              {content.about.storyBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="paper-panel">
            <strong>{content.about.editorialTitle}</strong>
            <p>{content.about.editorialBody}</p>
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="container about-grid">
          <div>
            <h2 className="section-title">Timeline</h2>
            <div className="timeline">
              {content.about.timeline.map((item) => (
                <div key={`${item.year}-${item.title}`} className="timeline-item">
                  <div className="timeline-item__year">{item.year}</div>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-grid">
            <div className="paper-panel">
              <strong>{content.about.audienceTitle}</strong>
              <p>{content.about.audienceBody}</p>
            </div>
            <div className="paper-panel">
              <strong>{content.about.futureTitle}</strong>
              <p>{content.about.futureBody}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
