"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export default function LanguageSwitch({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const target: Locale = locale === "zh" ? "en" : "zh";
  const rest = pathname.split("/").slice(2).join("/");
  const href = `/${target}${rest ? `/${rest}` : ""}`;
  const dim = "opacity-50";

  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex items-center gap-1.5 rounded-sm border border-line px-3 py-[7px] text-[0.78rem] leading-none font-semibold tracking-[0.02em] whitespace-nowrap text-ink-soft hover:text-foreground"
    >
      <span className={locale === "en" ? "text-foreground" : dim}>EN</span>
      <span className="opacity-35">/</span>
      <span className={locale === "zh" ? "text-foreground" : dim}>中文</span>
    </Link>
  );
}
