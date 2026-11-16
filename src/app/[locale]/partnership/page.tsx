import Image from "next/image";
import { notFound } from "next/navigation";
import PartnershipForm from "@/components/PartnershipForm";
import { partnership as p } from "@/data/partnershipPage";
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

  const eyebrow = (text: string) => (
    <p className="mb-[var(--space-eyebrow-gap)] text-sm font-medium tracking-widest t-faint">
      {text}
    </p>
  );
  const num = (i: number) => String(i + 1).padStart(2, "0");

  return (
    <>
      {/* 01 Hero */}
      <section className="l-section l-bg-dark relative overflow-hidden py-24 lg:py-32">
        <Image
          src="/images/partnership-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30"
        />
        <div className="l-container relative">
          {eyebrow(p.hero.label[locale])}
          <h1 className="max-w-4xl text-5xl leading-[1.05] font-bold text-balance sm:text-7xl">
            {p.hero.title[locale]}
          </h1>
          <p className="mt-[var(--space-heading-gap)] max-w-2xl text-lg t-muted">
            {p.hero.body[locale]}
          </p>
          <a
            href="#contact"
            className="btn-primary mt-[var(--space-action-gap)] inline-block rounded-sm px-6 py-3 font-medium hover:opacity-90"
          >
            {p.hero.cta[locale]} →
          </a>
        </div>
      </section>

      {/* 02 Why OSSC */}
      <section className="l-section l-bg-white">
        <div className="l-container grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            {eyebrow(p.why.label[locale])}
            <h2 className="text-3xl leading-[1.1] font-bold text-balance sm:text-5xl">
              {p.why.title[locale]}
            </h2>
          </div>
          <div className="grid gap-5 text-lg t-muted lg:pt-9">
            {p.why.body.map((b) => (
              <p key={b.en}>{b[locale]}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Our strengths */}
      <section className="l-section l-bg-gray">
        <div className="l-container">
          {eyebrow(p.strengths.label[locale])}
          <h2 className="max-w-3xl text-3xl leading-[1.1] font-bold text-balance sm:text-5xl">
            {p.strengths.title[locale]}
          </h2>
          <p className="mt-[var(--space-heading-gap)] max-w-2xl text-lg t-muted">
            {p.strengths.body[locale]}
          </p>
          <div className="l-cards mt-[var(--space-block-gap)] lg:!grid-cols-3">
            {p.strengths.items.map((it, i) => (
              <div
                key={it.title.en}
                className="rounded-[20px] border border-line bg-white p-7"
              >
                <p className="text-sm font-medium text-[#282f83]">{num(i)}</p>
                <h3 className="mt-6 text-xl font-bold">{it.title[locale]}</h3>
                <p className="mt-3 leading-relaxed text-[#857d75]">
                  {it.desc[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 How we collaborate */}
      <section className="l-section l-bg-white">
        <div className="l-container">
          {eyebrow(p.collaborate.label[locale])}
          <h2 className="max-w-3xl text-3xl leading-[1.1] font-bold text-balance sm:text-5xl">
            {p.collaborate.title[locale]}
          </h2>
          <p className="mt-[var(--space-heading-gap)] max-w-2xl text-lg t-muted">
            {p.collaborate.body[locale]}
          </p>
          <ul className="mt-[var(--space-block-gap)] border-t border-line">
            {p.collaborate.items.map((it, i) => (
              <li
                key={it.title.en}
                className="grid gap-3 border-b border-line py-8 sm:grid-cols-[5rem_1fr_1.2fr] sm:gap-8"
              >
                <span className="text-3xl font-bold text-[#282f83]">
                  {num(i)}
                </span>
                <h3 className="text-xl font-bold">{it.title[locale]}</h3>
                <p className="leading-relaxed text-[#857d75]">
                  {it.desc[locale]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 05 Contact —— 与页脚同为黑底，抵消页脚的 mt-20，中间不留白 */}
      <section
        id="contact"
        className="l-section relative -mb-20 scroll-mt-16 bg-[var(--surface-dark)] pb-[calc(var(--space-section-y)+5rem)] text-white"
      >
        <div className="l-container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            {eyebrow(p.contact.label[locale])}
            <h2 className="text-4xl leading-[1.05] font-bold text-balance sm:text-6xl">
              {p.contact.title[locale]}
            </h2>
            <p className="mt-[var(--space-heading-gap)] max-w-md text-lg text-white/70">
              {p.contact.body[locale]}
            </p>
            <a
              href={`/${locale}/contact`}
              className="mt-[var(--space-action-gap)] inline-block rounded-sm border border-white/40 px-6 py-3 font-medium hover:bg-white/10"
            >
              {p.contact.cta[locale]} →
            </a>
          </div>
          <PartnershipForm locale={locale} />
        </div>
      </section>
    </>
  );
}
