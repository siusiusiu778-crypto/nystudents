import { notFound } from "next/navigation";
import BlockList from "@/components/BlockList";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import { getDictionary, hasLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/partnership">) {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return { title: getDictionary(locale).partnership.title };
}

export default async function PartnershipPage({
  params,
}: PageProps<"/[locale]/partnership">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  return (
    <>
      <PageHero title={t.partnership.title} subtitle={t.partnership.subtitle} />
      <section className="mx-auto max-w-6xl px-4 pt-12">
        <BlockList items={t.partnership.blocks} />
      </section>
      <ContactSection t={t} />
    </>
  );
}
