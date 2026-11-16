import { notFound } from "next/navigation";
import CityGrid from "@/components/CityGrid";
import PageHero from "@/components/PageHero";
import { getDictionary, hasLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/city">) {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return { title: getDictionary(locale).city.title };
}

export default async function CityPage({
  params,
}: PageProps<"/[locale]/city">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  return (
    <>
      <PageHero white center title={t.city.title} />
      <section className="bg-[var(--surface-white)] pb-14">
        <div className="mx-auto max-w-6xl px-4">
          <CityGrid locale={locale} pending={t.city.linkPending} />
        </div>
      </section>
    </>
  );
}
