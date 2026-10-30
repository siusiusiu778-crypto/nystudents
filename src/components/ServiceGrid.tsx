import Link from "next/link";
import { services } from "@/data/services";
import type { Dictionary, Locale } from "@/lib/i18n";

export default function ServiceGrid({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <Link
          key={s.slug}
          href={`/${locale}/services/${s.slug}`}
          className="group rounded-sm border border-line p-6 transition hover:border-brand hover:shadow-md"
        >
          <div className="text-3xl">{s.icon}</div>
          <h3 className="mt-3 text-lg font-semibold">{s.name[locale]}</h3>
          <p className="mt-2 text-sm text-ink-soft">{s.summary[locale]}</p>
          <span className="mt-4 inline-block text-sm font-medium text-brand">
            {t.services.learnMore} →
          </span>
        </Link>
      ))}
    </div>
  );
}
