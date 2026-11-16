import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CareerJobs from "@/components/CareerJobs";
import { career as c } from "@/data/careerPage";
import { contact } from "@/data/site";
import { getDictionary, hasLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[locale]/career">) {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return { title: getDictionary(locale).career.title };
}

export default async function CareerPage({ params }: PageProps<"/[locale]/career">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const eyebrow = (text: string) => (
    <p className="mb-[var(--space-eyebrow-gap)] text-sm font-medium tracking-widest t-faint">
      {text}
    </p>
  );
  const num = (i: number) => String(i + 1).padStart(2, "0");
  const ctaHref = contact.email ? `mailto:${contact.email}` : `/${locale}/contact`;

  return (
    <>
      {/* 01 Hero */}
      <section className="l-section l-bg-dark relative overflow-hidden py-24 lg:py-32">
        <Image
          src="/images/career-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10"
        />
        <div className="l-container relative">
          {eyebrow(c.hero.label[locale])}
          <h1 className="max-w-4xl text-5xl leading-[1.05] font-bold text-balance sm:text-7xl">
            {c.hero.title[locale]}
          </h1>
          <p className="mt-[var(--space-heading-gap)] max-w-2xl text-lg t-muted">
            {c.hero.body[locale]}
          </p>
          <a
            href="#roles"
            className="btn-primary mt-[var(--space-action-gap)] inline-block rounded-sm px-6 py-3 font-medium hover:opacity-90"
          >
            {c.hero.cta[locale]} →
          </a>
        </div>
      </section>

      {/* 02 Why join */}
      <section className="l-section l-bg-gray">
        <div className="l-container">
          {eyebrow(c.why.label[locale])}
          <h2 className="max-w-3xl text-3xl leading-[1.1] font-bold text-balance sm:text-5xl">
            {c.why.title[locale]}
          </h2>
          <div className="l-cards mt-[var(--space-block-gap)] lg:!grid-cols-4">
            {c.why.items.map((it, i) => (
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

      {/* 03 Open roles（按城市） */}
      <section id="roles" className="l-section l-bg-white scroll-mt-16">
        <div className="l-container">
          {eyebrow(c.jobsSection.label[locale])}
          <h2 className="mb-[var(--space-block-gap)] max-w-3xl text-3xl leading-[1.1] font-bold text-balance sm:text-5xl">
            {c.jobsSection.title[locale]}
          </h2>
          <CareerJobs locale={locale} email={contact.email} />
        </div>
      </section>

      {/* 04 CTA —— 居中、白底、双按钮（-mb-20 抵消页脚的 mt-20） */}
      <section className="l-section l-bg-gray -mb-20">
        <div className="mx-auto max-w-3xl px-[var(--space-gutter)] py-8 text-center sm:py-12">
          <p className="mb-[var(--space-eyebrow-gap)] text-sm font-bold tracking-widest">
            <span className="text-[#282f83]">04</span>{" "}
            <span className="t-faint">CTA</span>
          </p>
          <h2 className="text-4xl leading-[1.1] font-bold text-balance sm:text-6xl">
            {c.cta.title[locale]}
          </h2>
          <p className="mx-auto mt-[var(--space-heading-gap)] max-w-xl text-lg t-muted">
            {c.cta.body[locale]}
          </p>
          <div className="mt-[var(--space-action-gap)] flex flex-wrap justify-center gap-3">
            <a
              href={ctaHref}
              className="rounded-sm bg-[#282f83] px-7 py-3.5 font-medium text-white hover:opacity-90"
            >
              {c.cta.button[locale]}
            </a>
            <Link
              href={`/${locale}/contact`}
              className="rounded-sm border border-line bg-white px-7 py-3.5 font-medium hover:border-black/40"
            >
              {c.cta.secondary[locale]}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
