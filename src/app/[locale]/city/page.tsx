import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import { cities } from "@/data/cities";
import { getDictionary, hasLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[locale]/city">) {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return { title: getDictionary(locale).city.title };
}

export default async function CityPage({ params }: PageProps<"/[locale]/city">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  return (
    <>
      <PageHero title={t.city.title} subtitle={t.city.subtitle} />
      <section className="mx-auto max-w-6xl px-4 pt-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <li
              key={c.slug}
              id={c.slug}
              className="scroll-mt-24 rounded-sm border border-line p-6"
            >
              <h2 className="text-lg font-semibold">{c.name[locale]}</h2>
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-accent"
                >
                  {t.city.visit} ↗
                </a>
              ) : (
                <p className="mt-4 text-sm text-ink-faint">{t.city.linkPending}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <ContactSection t={t} />
    </>
  );
}
