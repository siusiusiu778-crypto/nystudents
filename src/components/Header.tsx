import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { services } from "@/data/services";
import LanguageSwitch from "./LanguageSwitch";
import MobileMenu from "./MobileMenu";

export default function Header({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  const serviceItems = services.map((s) => ({
    href: `/${locale}/services/${s.slug}`,
    label: s.name[locale],
  }));
  const links = [
    { href: `/${locale}/services`, label: t.nav.services, children: serviceItems },
    { href: `/${locale}/news`, label: t.nav.news },
    { href: `/${locale}/about`, label: t.nav.about },
  ];
  const cta = { href: `/${locale}/contact`, label: t.nav.contact };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-[clamp(20px,5vw,56px)] py-[18px]">
        <Link
          href={`/${locale}`}
          aria-label={t.siteName}
          className="flex shrink-0 items-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt={t.siteName} width={40} height={40} className="h-10 w-10" />
        </Link>
        <nav className="hidden items-center gap-[clamp(12px,1.8vw,22px)] md:flex">
          {links.map((l) => {
            const linkClass =
              "border-b border-transparent px-0.5 py-1 text-[0.86rem] font-medium whitespace-nowrap text-ink-soft transition-colors hover:border-accent hover:text-foreground";
            if (!l.children) {
              return (
                <Link key={l.href} href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              );
            }
            return (
              <div key={l.href} className="group relative">
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
                <div className="invisible absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="min-w-[200px] rounded-sm border border-line bg-white py-2 shadow-lg">
                    {l.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="block px-4 py-2 text-[0.86rem] whitespace-nowrap text-ink-soft hover:bg-brand-soft hover:text-foreground"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href={cta.href}
            className="hidden rounded-sm bg-accent px-[18px] py-2.5 text-[0.85rem] font-semibold whitespace-nowrap text-white hover:opacity-85 md:inline-block"
          >
            {cta.label}
          </Link>
          <LanguageSwitch locale={locale} label={t.lang.switchTo} />
          <MobileMenu links={[...links, cta]} />
        </div>
      </div>
    </header>
  );
}
