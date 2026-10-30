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
          <Link href={`/${locale}#services`} className="text-sm text-brand">
            ← {t.services.back}
          </Link>
          <div className="mt-4 text-4xl">{service.icon}</div>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{service.name[locale]}</h1>
          <p className="mt-3 max-w-2xl text-lg text-black/60">{service.summary[locale]}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-12">
        <h2 className="text-xl font-bold">{t.services.highlights}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {service.highlights.map((h, i) => (
            <li key={i} className="rounded-sm border border-line p-4">
              {h[locale]}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-black/40">{t.services.placeholder}</p>
      </section>

      <ContactSection t={t} />
    </>
  );
}
