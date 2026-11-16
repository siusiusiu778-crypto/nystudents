import { notFound } from "next/navigation";
import ShowcaseVariants, { type ShowcaseVariant } from "@/components/ShowcaseVariants";
import { getDictionary, hasLocale } from "@/lib/i18n";

const list: { key: ShowcaseVariant; name: string; bg: string }[] = [
  { key: "columns", name: "B · 左文右双列滚动（保留）", bg: "l-section l-bg-white" },
  { key: "accordion", name: "H · 竖条手风琴", bg: "l-section l-bg-gray" },
  { key: "fade", name: "I · 大图渐变轮播", bg: "l-section l-bg-white" },
  { key: "split", name: "K · 半屏拼图 + 文字", bg: "l-bg-gray" },
];

export default async function Page({ params }: PageProps<"/[locale]/showcase-layouts">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  return (
    <>
      {list.map((l) => (
        <section key={l.key} className={l.bg}>
          <div className="l-container py-6">
            <p className="inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">{l.name}</p>
          </div>
          <ShowcaseVariants copy={t.home.showcase} href={`/${locale}/services`} variant={l.key} />
        </section>
      ))}
    </>
  );
}
