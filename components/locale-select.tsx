"use client";

import { usePathname, useRouter } from "next/navigation";
import { localeLabels, locales, withLocale, type Locale } from "@/lib/i18n";

type LocaleSelectProps = {
  locale: Locale;
};

export function LocaleSelect({ locale }: LocaleSelectProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleChange(nextLocale: string) {
    const currentPath = pathname ?? "/";
    const pathWithoutLocale = currentPath.replace(new RegExp(`^/${locale}`), "") || "/";
    router.push(withLocale(nextLocale as Locale, pathWithoutLocale));
  }

  return (
    <div className="locale-select">
      <label className="sr-only" htmlFor="locale-select">
        Language switcher
      </label>
      <select
        id="locale-select"
        className="locale-select__input"
        aria-label="Language switcher"
        value={locale}
        onChange={(event) => handleChange(event.target.value)}
      >
        {locales.map((entryLocale) => (
          <option key={entryLocale} value={entryLocale}>
            {localeLabels[entryLocale]}
          </option>
        ))}
      </select>
    </div>
  );
}
