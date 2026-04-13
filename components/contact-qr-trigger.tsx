"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

const modalCopy: Record<
  Locale,
  {
    title: string;
    body: string;
    close: string;
  }
> = {
  "zh-Hant": {
    title: "聯絡編輯部",
    body: "請使用微信掃描下方二維碼聯絡編輯部。",
    close: "關閉",
  },
  "zh-Hans": {
    title: "联系编辑部",
    body: "请使用微信扫描下方二维码联系编辑部。",
    close: "关闭",
  },
  ja: {
    title: "編集部へ連絡",
    body: "以下のQRコードをWeChatで読み取り、編集部へご連絡ください。",
    close: "閉じる",
  },
  en: {
    title: "Contact the editors",
    body: "Scan the QR code below with WeChat to contact the editors.",
    close: "Close",
  },
};

type ContactQrTriggerProps = {
  locale: Locale;
  label: string;
  variant?: "button" | "text";
};

export function ContactQrTrigger({
  locale,
  label,
  variant = "button",
}: ContactQrTriggerProps) {
  const [open, setOpen] = useState(false);
  const copy = modalCopy[locale];

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        className={variant === "text" ? "text-link text-link--button" : "button button--ghost"}
        type="button"
        onClick={() => setOpen(true)}
      >
        {label}
      </button>

      {open ? (
        <div className="qr-modal" role="dialog" aria-modal="true" aria-label={copy.title}>
          <button
            className="qr-modal__backdrop"
            type="button"
            aria-label={copy.close}
            onClick={() => setOpen(false)}
          />
          <div className="qr-modal__panel">
            <button className="qr-modal__close" type="button" onClick={() => setOpen(false)}>
              {copy.close}
            </button>
            <p className="qr-modal__body">{copy.body}</p>
            <div className="qr-modal__image-wrap">
              <Image
                src="/images/wechat-qr-code.jpg"
                alt={copy.title}
                width={720}
                height={720}
                className="qr-modal__image"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
