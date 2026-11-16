import { notFound } from "next/navigation";
import BusinessLayouts, { type BizLayout } from "@/components/BusinessLayouts";
import { getDictionary, hasLocale } from "@/lib/i18n";

const list: { key: BizLayout; name: string }[] = [
  { key: "bento", name: "E · 拼贴（一大三小）" },
  { key: "scroll", name: "F · 横向滑动" },
  { key: "stack", name: "G · 滚动层叠卡片" },
  { key: "chips", name: "H · 色块卡片 + 品牌标签" },
];

export default async function Page({ params }: PageProps<"/[locale]/biz-layouts">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  const h = t.home.businesses;
  return (
    <>
      {list.map((l, i) => (
        <section key={l.key} className={`l-section ${i % 2 ? "l-bg-white" : "l-bg-gray"}`}>
          <div className="l-container">
            <p className="mb-6 inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">{l.name}</p>
            <p className="mb-4 text-sm font-medium tracking-widest t-faint">{h.label}</p>
            <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">{h.title}</h2>
            <p className="mt-5 max-w-3xl text-lg t-muted">{h.body}</p>
            <BusinessLayouts t={t} layout={l.key} />
          </div>
        </section>
      ))}
    </>
  );
}
