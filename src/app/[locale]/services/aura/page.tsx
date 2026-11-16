import Link from "next/link";
import { notFound } from "next/navigation";
import ImageSlot from "@/components/ImageSlot";
import AuraServices, { type AuraServicesLayout } from "@/components/AuraServices";
import { aura } from "@/data/auraPage";
import { getDictionary, hasLocale } from "@/lib/i18n";

const CREAM = "bg-[#f8f0eb]"; // 奶油粉（主色调）
const BLUSH = "bg-[#f0e2da]"; // 深一档的裸粉
// 配色只用 奶油粉 / 裸粉 / 白 三色，从上到下：奶油 → 白 → 裸粉 → 白 → 奶油

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services/aura">) {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return { title: "AURA Institute", description: aura.hero.body[locale] };
}

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9a7b63]">
      {children}
    </p>
  );
}

/** Our Services 排版：cards 四卡 / rows 左右交替 / overlay 2×2 叠字 / bento 拼贴 */
const layout: AuraServicesLayout = "arches";

export default async function AuraPage({
  params,
}: PageProps<"/[locale]/services/aura">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      {/* Hero: 左文右图 */}
      <section className={CREAM}>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:py-20 md:grid-cols-2 md:gap-16">
          <div>
            <Link href={`/${locale}/services`} className="text-sm text-ink-soft hover:text-black">
              ← {t.services.back}
            </Link>
            <div className="mt-8">
              <Eyebrow>{`AURA Institute · ${aura.eyebrow[locale]}`}</Eyebrow>
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-6xl">
              {aura.hero.title[locale]}
            </h1>
            <p className="mt-6 text-lg text-ink-soft">{aura.hero.body[locale]}</p>
            <p className="mt-4 text-ink-soft">{aura.hero.body2[locale]}</p>
            <a
              href={aura.cta.url || "#services"}
              {...(aura.cta.url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="mt-8 inline-block rounded-full bg-[#b07e6a] px-8 py-3.5 font-medium text-white hover:opacity-90"
            >
              {aura.hero.cta[locale]} {aura.cta.url ? "↗" : "↓"}
            </a>
          </div>
          <ImageSlot src="/images/aura-hero.jpg" alt="AURA Institute reception" t={t} className="aspect-[4/5] rounded-[2rem]" priority />
        </div>
      </section>

      {/* Services: 标题 + 四张图文卡片 */}
      <section id="services" className="scroll-mt-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-16">
            <div>
              <Eyebrow>{aura.services.label[locale]}</Eyebrow>
              <h2 className="mt-4 max-w-md text-3xl font-bold text-balance sm:text-5xl">
                {aura.services.title[locale]}
              </h2>
            </div>
            <p className="text-lg text-ink-soft">{aura.services.body[locale]}</p>
          </div>
          <AuraServices locale={locale} t={t} layout={layout} />
        </div>
      </section>

      {/* Who we serve: 左图右文 */}
      <section className={BLUSH}>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-24 md:grid-cols-2 md:gap-16">
        <ImageSlot src="/images/aura-prime.webp" alt="AURA Prime" t={t} className="aspect-[5/3] rounded-[2rem]" imgClassName="object-cover object-[90%_center]" />
        <div>
          <Eyebrow>{aura.who.label[locale]}</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{aura.who.title[locale]}</h2>
          <p className="mt-4 text-lg text-ink-soft">{aura.who.body[locale]}</p>
        </div>
      </div>
      </section>

      {/* Technology + CTA 合并为一个区块（-mb-20 抵消页脚的 mt-20，避免底部露出空白条） */}
      <section className="-mb-20">
        <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9a7b63]">
              {aura.tech.label[locale]}
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{aura.tech.title[locale]}</h2>
            <p className="mt-4 text-ink-soft">{aura.tech.body[locale]}</p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#b07e6a]/25 sm:grid-cols-3 lg:grid-cols-5">
            {aura.tech.names.map((n) => (
              <li key={n} className="bg-white px-5 py-8 text-center text-lg font-semibold">
                {n}
              </li>
            ))}
          </ul>
        </div>
        </div>
        <div className={CREAM}>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:py-28">
          <h2 className="text-4xl font-bold sm:text-5xl">{aura.cta.title[locale]}</h2>
          <p className="mt-5 text-lg text-ink-soft">{aura.cta.body[locale]}</p>
          <a
            href={aura.cta.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#b07e6a] px-8 py-3.5 font-medium text-white hover:opacity-90"
          >
            {aura.cta.button[locale]} ↗
          </a>
        </div>
        </div>
      </section>
    </>
  );
}
