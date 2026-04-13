import type { Metadata } from "next";
import Image from "next/image";
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
  const historyCaptions: Record<
    Locale,
    {
      section: string;
      memberAlt: string;
      memberCaption: string;
      bookAlt: string;
      bookCaption: string;
    }
  > = {
    "zh-Hant": {
      section: "歷史參照",
      memberAlt: "歷史上的創造社創立者合影",
      memberCaption: "創造社創立者合影",
      bookAlt: "《創造月刊》第一卷第一期封面",
      bookCaption: "《創造月刊》第一卷第一期封面",
    },
    "zh-Hans": {
      section: "历史参照",
      memberAlt: "历史上的创造社创立者合影",
      memberCaption: "创造社创立者合影",
      bookAlt: "《创造月刊》第一卷第一期封面",
      bookCaption: "《创造月刊》第一卷第一期封面",
    },
    ja: {
      section: "歴史的参照",
      memberAlt: "歴史上の創造社創立者の集合写真",
      memberCaption: "創造社創立者の集合写真",
      bookAlt: "『創造月刊』第1巻第1号の表紙",
      bookCaption: "『創造月刊』第1巻第1号の表紙",
    },
    en: {
      section: "Historical Reference",
      memberAlt: "Founders of the historical Creation Society",
      memberCaption: "Founders of the historical Creation Society",
      bookAlt: "Cover of Volume 1 Issue 1 of Creation Monthly",
      bookCaption: "Cover of Volume 1 Issue 1 of Creation Monthly",
    },
  };
  const history = historyCaptions[safeLocale];

  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="page-kicker">{content.about.kicker}</span>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container about-grid">
          <div>
            <h2 className="section-title">{content.about.storyTitle}</h2>
            <div className="section-intro">
              {content.about.storyBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="about-history">
              <p className="about-history__label">{history.section}</p>
              <div className="about-history__grid">
                <figure className="about-history__figure">
                  <Image
                    src="/images/first-member.jpg"
                    alt={history.memberAlt}
                    width={400}
                    height={339}
                    className="about-history__image"
                  />
                  <figcaption>{history.memberCaption}</figcaption>
                </figure>
                <figure className="about-history__figure about-history__figure--book">
                  <Image
                    src="/images/first-book.jpg"
                    alt={history.bookAlt}
                    width={330}
                    height={484}
                    className="about-history__image"
                  />
                  <figcaption>{history.bookCaption}</figcaption>
                </figure>
              </div>
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
        </div>
      </section>
    </>
  );
}
