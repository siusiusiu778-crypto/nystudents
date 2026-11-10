import Link from "next/link";
import { notFound } from "next/navigation";
import ImageSlot from "@/components/ImageSlot";
import { aura } from "@/data/auraPage";
import { getDictionary, hasLocale } from "@/lib/i18n";

const WARM = "bg-[#f6f1ec]";

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

export default async function AuraPage({
  params,
}: PageProps<"/[locale]/services/aura">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      {/* Hero: 左文右图 */}
      <section className={WARM}>
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
          </div>
          <ImageSlot src="" alt="AURA Institute" t={t} className="aspect-[4/5] rounded-[2rem]" priority />
        </div>
      </section>

      {/* Services: 编辑式列表行 */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <Eyebrow>{aura.services.label[locale]}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{aura.services.title[locale]}</h2>
            <p className="mt-4 text-ink-soft">{aura.services.body[locale]}</p>
          </div>
          <ul className="border-t border-line">
            {aura.services.items.map((s, i) => (
              <li key={i} className="flex gap-5 border-b border-line py-6 sm:gap-8 sm:py-8">
                <span className="pt-1 text-sm text-[#9a7b63]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-semibold sm:text-2xl">{s.title[locale]}</h3>
                  <p className="mt-2 text-ink-soft">{s.desc[locale]}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach: 居中大字 */}
      <section className={WARM}>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:py-28">
          <Eyebrow>{aura.approach.label[locale]}</Eyebrow>
          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">{aura.approach.title[locale]}</h2>
          <p className="mt-6 text-lg text-ink-soft">{aura.approach.body[locale]}</p>
        </div>
      </section>

      {/* Who we serve: 左图右文 */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-24 md:grid-cols-2 md:gap-16">
        <ImageSlot src="" alt="" t={t} className="aspect-[4/3] rounded-[2rem]" />
        <div>
          <Eyebrow>{aura.who.label[locale]}</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{aura.who.title[locale]}</h2>
          <p className="mt-4 text-lg text-ink-soft">{aura.who.body[locale]}</p>
        </div>
      </section>

      {/* Technology: 深色 + 设备网格 */}
      <section className="bg-[var(--surface-dark)] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d3b79c]">
              {aura.tech.label[locale]}
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{aura.tech.title[locale]}</h2>
            <p className="mt-4 text-white/70">{aura.tech.body[locale]}</p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-3 lg:grid-cols-5">
            {aura.tech.names.map((n) => (
              <li key={n} className="bg-[var(--surface-dark)] px-5 py-8 text-center text-lg font-semibold">
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className={WARM}>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:py-28">
          <h2 className="text-4xl font-bold sm:text-5xl">{aura.cta.title[locale]}</h2>
          <p className="mt-5 text-lg text-ink-soft">{aura.cta.body[locale]}</p>
          <a
            href={aura.cta.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-black px-8 py-3.5 font-medium text-white hover:opacity-85"
          >
            {aura.cta.button[locale]} ↗
          </a>
        </div>
      </section>
    </>
  );
}
