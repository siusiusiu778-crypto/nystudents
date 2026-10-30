import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import { getService, services } from "@/data/services";
import { getDictionary, hasLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services/[slug]">) {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!hasLocale(locale) || !service) return {};
  return { title: service.name[locale], description: service.summary[locale] };
}

export default async function ServicePage({
  params,
}: PageProps<"/[locale]/services/[slug]">) {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!hasLocale(locale) || !service) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <section className="bg-brand-soft">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <Link href={`/${locale}/services`} className="text-sm text-brand">
            ← {t.services.back}
          </Link>
          <div className="mt-4 text-4xl">{service.icon}</div>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{service.name[locale]}</h1>
          <p className="mt-3 max-w-2xl text-lg text-black/60">{service.summary[locale]}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-12">
        <h2 className="text-xl font-bold">{t.services.offerings}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {service.offerings.map((o, i) => (
            <li key={i} className="rounded-sm border border-line p-4">
              <h3 className="font-semibold">{o.title[locale]}</h3>
              <p className="mt-1 text-sm text-ink-soft">{o.desc[locale]}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-12">
        <h2 className="text-xl font-bold">{t.services.audience}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {service.audience.map((a, i) => (
            <li key={i} className="rounded-sm bg-brand-soft p-4">
              {a[locale]}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-12">
        {service.link.url ? (
          <a
            href={service.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-sm bg-brand px-6 py-3 font-medium text-white hover:opacity-85"
          >
            {service.link.label?.[locale] ?? t.services.visit} ↗
          </a>
        ) : (
          <span className="inline-block rounded-sm border border-line px-6 py-3 text-ink-faint">
            {t.services.linkPending}
          </span>
        )}
      </section>

      <ContactSection t={t} />
    </>
  );
}
