import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import { getDictionary, hasLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return { title: getDictionary(locale).servicesPage.title };
}

export default async function ServicesPage({ params }: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  return (
    <>
      <PageHero white center title={t.servicesPage.title} />
      <section className="bg-[var(--surface-white)] pb-14">
        <div className="mx-auto max-w-6xl px-4">
          <ServiceGrid locale={locale} t={t} />
        </div>
      </section>
    </>
  );
}
