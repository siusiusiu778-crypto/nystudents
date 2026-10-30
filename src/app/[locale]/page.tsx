import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import { services } from "@/data/services";
import { getDictionary, hasLocale } from "@/lib/i18n";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <section className="bg-brand-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-black/60">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#services"
              className="rounded-sm bg-brand px-6 py-3 font-medium text-white hover:opacity-90"
            >
              {t.hero.cta}
            </Link>
            <Link
              href="#contact"
              className="rounded-sm border border-brand px-6 py-3 font-medium text-brand hover:bg-white"
            >
              {t.hero.ctaContact}
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-4 pt-16">
        <h2 className="text-2xl font-bold">{t.services.title}</h2>
        <p className="mt-2 text-black/60">{t.services.subtitle}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/${locale}/services/${s.slug}`}
              className="group rounded-sm border border-line p-6 transition hover:border-brand hover:shadow-md"
            >
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-3 text-lg font-semibold">{s.name[locale]}</h3>
              <p className="mt-2 text-sm text-black/60">{s.summary[locale]}</p>
              <span className="mt-4 inline-block text-sm font-medium text-brand">
                {t.services.learnMore} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <ContactSection t={t} />
    </>
  );
}
