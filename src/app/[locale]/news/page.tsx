import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsLabels as L, posts } from "@/data/news";
import { getDictionary, hasLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/news">) {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return { title: getDictionary(locale).news.title };
}

export default async function NewsPage({
  params,
}: PageProps<"/[locale]/news">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  const [lead, ...rest] = posts;

  const meta = (p: (typeof posts)[number], light = false) => (
    <div
      className={`flex items-center gap-2 text-xs ${light ? "text-white/80" : "text-[#857d75]"}`}
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#282f83] text-[0.6rem] font-semibold text-white">
        O
      </span>
      <span className="font-medium">{p.author[locale]}</span>
      <span>·</span>
      <span>{p.date[locale]}</span>
    </div>
  );

  return (
    <section className="bg-[var(--surface-white)] pb-16">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:pt-10">
        {/* 面包屑 */}
        <nav className="flex items-center gap-2 text-sm text-[#857d75]">
          <Link href={`/${locale}`} className="hover:text-[#282f83]">
            {L.home[locale]}
          </Link>
          <span>›</span>
          <span className="rounded-full bg-[#282f83]/10 px-3 py-0.5 text-xs font-medium text-[#282f83]">
            {t.news.title}
          </span>
        </nav>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-balance sm:text-5xl">
          {t.news.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[#857d75]">
          {t.news.subtitle}
        </p>

        {/* 头条 */}
        <article id="headlines" className="relative mt-8 scroll-mt-24 aspect-[4/5] overflow-hidden rounded-[20px] bg-[var(--slot-bg)] sm:aspect-[16/8]">
          <Image
            src={lead.img}
            alt=""
            fill
            priority
            sizes="(min-width: 1152px) 1120px, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
            <h2 className="max-w-3xl text-2xl leading-tight font-bold text-balance sm:text-4xl">
              {lead.title[locale]}
            </h2>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              {meta(lead, true)}
              <ul className="flex flex-wrap gap-1.5">
                {lead.tags.map((tag) => (
                  <li
                    key={tag.en}
                    className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm"
                  >
                    {tag[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        {/* 精选文章 */}
        <div id="featured" className="mt-14 flex scroll-mt-24 items-center justify-between gap-4">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {L.featured[locale]}
          </h2>
          <span className="rounded-full border border-[#303038]/20 px-4 py-1.5 text-sm font-medium">
            {L.viewAll[locale]}
          </span>
        </div>
        <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <article key={p.slug}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--slot-bg)]">
                <Image
                  src={p.img}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg leading-snug font-semibold">
                {p.title[locale]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#857d75]">
                {p.excerpt[locale]}
              </p>
              <div className="mt-3">{meta(p)}</div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-[#b0a89e]">{L.note[locale]}</p>
      </div>
    </section>
  );
}
