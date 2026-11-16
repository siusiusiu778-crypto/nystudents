import { notFound } from "next/navigation";
import NetworkVariants, { type NetworkVariant } from "@/components/NetworkVariants";
import { getDictionary, hasLocale } from "@/lib/i18n";

const list: { key: NetworkVariant; name: string; bg: string }[] = [
  { key: "row", name: "A · 居中标题 + 一排城市卡（保留）", bg: "l-section l-bg-gray" },
  { key: "sentence", name: "H · 文字大句 + 嵌入小图", bg: "l-section l-bg-gray" },
  { key: "hero", name: "I · 纽约主图 + 叠卡", bg: "l-section l-bg-white" },
  { key: "bands", name: "J · 整宽横幅叠行", bg: "l-section l-bg-gray" },
  { key: "marquee", name: "K · 跑马灯循环滚动", bg: "l-section l-bg-white" },
];

export default async function Page({ params }: PageProps<"/[locale]/network-layouts">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  return (
    <>
      {list.map((l) => (
        <section key={l.key} className={l.bg}>
          <div className={`l-container ${l.key === "banner" ? "py-8" : "mb-8"}`}>
            <p className="inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">{l.name}</p>
          </div>
          <NetworkVariants locale={locale} href={`/${locale}/city`} cta={t.home.network.cta} variant={l.key} />
        </section>
      ))}
    </>
  );
}
