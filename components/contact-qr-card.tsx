import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const qrCopy: Record<
  Locale,
  {
    label: string;
    alt: string;
  }
> = {
  "zh-Hant": {
    label: "編輯部微信",
    alt: "創造新誌編輯部微信二維碼",
  },
  "zh-Hans": {
    label: "编辑部微信",
    alt: "创造新志编辑部微信二维码",
  },
  ja: {
    label: "編集部 WeChat",
    alt: "創造新誌編集部のWeChat QRコード",
  },
  en: {
    label: "Editorial WeChat",
    alt: "WeChat QR code for the Neo Creation Journal editorial office",
  },
};

type ContactQrCardProps = {
  locale: Locale;
  compact?: boolean;
};

export function ContactQrCard({ locale, compact = false }: ContactQrCardProps) {
  const copy = qrCopy[locale];

  return (
    <div className={`contact-qr-card${compact ? " contact-qr-card--compact" : ""}`}>
      <span className="contact-qr-card__label">{copy.label}</span>
      <div className="contact-qr-card__frame">
        <Image
          src="/images/wechat-qr-code.jpg"
          alt={copy.alt}
          width={720}
          height={720}
          className="contact-qr-card__image"
          priority
        />
      </div>
    </div>
  );
}
