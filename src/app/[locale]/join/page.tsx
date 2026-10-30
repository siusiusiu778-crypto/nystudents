import { notFound } from "next/navigation";
import BlockList from "@/components/BlockList";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import { getDictionary, hasLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[locale]/join">) {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return { title: getDictionary(locale).join.title };
}

export default async function JoinPage({ params }: PageProps<"/[locale]/join">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  return (
    <>
      <PageHero title={t.join.title} subtitle={t.join.subtitle} />
      <section className="mx-auto max-w-6xl px-4 pt-12">
        <BlockList items={t.join.blocks} />
      </section>
      <ContactSection t={t} />
    </>
  );
}
