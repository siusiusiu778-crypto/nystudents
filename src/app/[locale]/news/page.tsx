import { notFound } from "next/navigation";
import BlockList from "@/components/BlockList";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import { getDictionary, hasLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[locale]/news">) {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return { title: getDictionary(locale).news.title };
}

export default async function NewsPage({ params }: PageProps<"/[locale]/news">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  return (
    <>
      <PageHero title={t.news.title} subtitle={t.news.subtitle} />
      <section className="mx-auto max-w-6xl px-4 pt-12">
        <BlockList items={t.news.sections} />
        <p className="mt-6 text-sm text-ink-faint">{t.news.empty}</p>
      </section>
      <ContactSection t={t} />
    </>
  );
}
