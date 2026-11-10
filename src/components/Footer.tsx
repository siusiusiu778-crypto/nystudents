import Link from "next/link";
import { services } from "@/data/services";
import type { Dictionary, Locale } from "@/lib/i18n";

export default function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const company = [
    { href: `/${locale}/city`, label: t.nav.city },
    { href: `/${locale}/news`, label: t.nav.news },
    { href: `/${locale}/partnership`, label: t.nav.partnership },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/career`, label: t.nav.career },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];
  // 业务线平分两列
  const half = Math.ceil(services.length / 2);
  const serviceCols = [services.slice(0, half), services.slice(half)];
  const labelClass =
    "mb-3 text-[0.72rem] font-semibold tracking-[0.1em] text-white/50 uppercase";
  const linkClass = "text-[0.9rem] text-white/80 transition-colors hover:text-white";

  return (
    <footer className="mt-20 bg-black pt-12 text-white">
      <div className="mx-auto max-w-[1180px] px-[clamp(20px,5vw,56px)]">
        <div className="flex flex-wrap justify-between gap-8 border-b border-white/15 pb-10">
          <div className="min-w-[200px] max-w-xs">
            <div className={labelClass}>{t.siteName}</div>
            <p className="text-[0.86rem] leading-[1.7] text-white/60">{t.tagline}</p>
          </div>
          <div>
            <div className={labelClass}>{t.footer.services}</div>
            <div className="grid grid-cols-2 gap-x-10 sm:gap-x-14">
              {[serviceCols[0], serviceCols[1]].map((col, i) => (
                <ul key={i} className="grid content-start gap-2">
                  {col.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${locale}/services/${s.slug}`} className={linkClass}>
                        {s.name[locale]}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="min-w-[200px]">
            <div className={labelClass}>{t.footer.company}</div>
            <ul className="grid gap-2">
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
        <p className="pt-6 text-[0.66rem] leading-[1.6] text-white/45">
          © 2026 {t.siteName} · {t.footer.rights}
        </p>
        <div className="overflow-hidden pt-7 pb-5 text-center">
          <div className="font-heading text-[clamp(3.2rem,14vw,11rem)] leading-none font-extrabold tracking-[-0.02em] whitespace-nowrap">
            {t.footer.wordmark}
          </div>
        </div>
      </div>
    </footer>
  );
}
