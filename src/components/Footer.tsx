import Link from "next/link";
import { services } from "@/data/services";
import type { Dictionary, Locale } from "@/lib/i18n";

export default function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const company = [
    { href: `/${locale}/news`, label: t.nav.news },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];
  const linkClass = "text-ink-soft hover:text-foreground";

  return (
    <footer className="mt-16 border-t border-line bg-brand-soft">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm sm:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="font-heading text-lg font-bold">{t.siteName}</div>
          <p className="mt-2 max-w-xs text-ink-soft">{t.tagline}</p>
        </div>
        <div>
          <div className="font-semibold">{t.footer.services}</div>
          <ul className="mt-3 space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${locale}/services/${s.slug}`} className={linkClass}>
                  {s.name[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold">{t.footer.company}</div>
          <ul className="mt-3 space-y-2">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-ink-faint">
          © 2026 {t.siteName} · {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
