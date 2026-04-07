import { ImageResponse } from "next/og";

type OgImageProps = {
  title: string;
  subtitle: string;
  meta: string;
};

export const ogImageSize = {
  width: 1200,
  height: 630,
};

export const ogImageContentType = "image/png";

export function renderOgImage({ title, subtitle, meta }: OgImageProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, rgba(248,242,234,1) 0%, rgba(239,229,217,1) 55%, rgba(233,221,210,1) 100%)",
          color: "#201816",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 48,
            border: "1px solid rgba(32,24,22,0.12)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "44px 48px",
            background:
              "radial-gradient(circle at 18% 18%, rgba(157,50,37,0.18), transparent 26%), radial-gradient(circle at 82% 22%, rgba(29,51,45,0.16), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.38), rgba(255,255,255,0.08))",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 26,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            <span>Neo Creation Journal</span>
            <span>{meta}</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 720,
            }}
          >
            <div
              style={{
                fontSize: 76,
                lineHeight: 0.94,
                fontWeight: 600,
                letterSpacing: "-0.04em",
                whiteSpace: "pre-wrap",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.5,
                color: "#4f3d38",
              }}
            >
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    ),
    ogImageSize,
  );
}
