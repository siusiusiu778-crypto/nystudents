import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import LanguageSwitch from "./LanguageSwitch";

export default function Header({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  return (
    <header className="sticky top-0 z-10 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          {/* 拿到 Logo 后放到 public/logo.svg，并替换下面的占位方块 */}
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
            NY
          </span>
          <span className="font-semibold">{t.siteName}</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href={`/${locale}#services`} className="hidden hover:text-brand sm:inline">
            {t.nav.services}
          </Link>
          <Link href={`/${locale}#contact`} className="hidden hover:text-brand sm:inline">
            {t.nav.contact}
          </Link>
          <LanguageSwitch locale={locale} label={t.lang.switchTo} />
        </nav>
      </div>
    </header>
  );
}
