import { notFound } from "next/navigation";
import BlockList from "@/components/BlockList";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
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
        <BlockList items={t.city.blocks} />
      </section>
      <ContactSection t={t} />
    </>
  );
}
