import { notFound } from "next/navigation";
import BlockList from "@/components/BlockList";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import { getDictionary, hasLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[locale]/career">) {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return { title: getDictionary(locale).career.title };
}

export default async function CareerPage({ params }: PageProps<"/[locale]/career">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  return (
    <>
      <PageHero title={t.career.title} subtitle={t.career.subtitle} />
      <section className="mx-auto max-w-6xl px-4 pt-12">
        <BlockList items={t.career.blocks} />
      </section>
      <ContactSection t={t} />
    </>
  );
}
