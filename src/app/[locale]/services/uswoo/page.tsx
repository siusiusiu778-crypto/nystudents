import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageSlot from "@/components/ImageSlot";
import { getService } from "@/data/services";
import { uswooPage as u } from "@/data/uswooPage";
import { getDictionary, hasLocale } from "@/lib/i18n";

const service = getService("uswoo")!;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services/uswoo">) {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return { title: u.title[locale], description: u.hero.body[locale] };
}

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-medium tracking-[0.2em] uppercase t-faint">
      {children}
    </p>
  );
}

const btn =
  "btn-primary mt-8 inline-block rounded-full px-8 py-3.5 font-medium hover:opacity-90";
const num = (i: number) => String(i + 1).padStart(2, "0");

export default async function UswooPage({
  params,
}: PageProps<"/[locale]/services/uswoo">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  const url = service.link.url;
  const ext = url ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <>
      {/* Hero: 左文右图 */}
      <section className="l-bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:py-20 md:grid-cols-2 md:gap-16">
          <div>
            <Link
              href={`/${locale}/services`}
              className="text-sm text-ink-soft hover:text-black"
            >
              ← {t.services.back}
            </Link>
            <div className="mt-8">
              <Eyebrow>{`USWOO · ${u.eyebrow[locale]}`}</Eyebrow>
            </div>
            <h1 className="mt-5 text-4xl leading-[1.1] font-bold sm:text-6xl">
              {u.title[locale]}
            </h1>
            <p className="mt-6 text-lg text-ink-soft">{u.hero.body[locale]}</p>
            <a href={url || "#services"} {...ext} className={btn}>
              {u.hero.cta[locale]} {url ? "↗" : "↓"}
            </a>
          </div>
          <ImageSlot
            src={u.hero.image}
            alt={u.title[locale]}
            t={t}
            className="aspect-[4/5] rounded-[2rem]"
            priority
          />
        </div>
      </section>

      {/* Our Services: 标题 + 介绍 + 三张方图（错落） */}
      <section id="services" className="l-bg-gray scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="grid gap-6 md:grid-cols-2 md:gap-16">
            <div>
              <Eyebrow>{u.services.label[locale]}</Eyebrow>
              <h2 className="mt-4 max-w-md text-3xl font-bold text-balance sm:text-5xl">
                {u.services.title[locale]}
              </h2>
            </div>
            <p className="text-lg text-ink-soft">{u.services.body[locale]}</p>
          </div>
          <ul className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-3 sm:items-start">
            {u.services.items.map((o, i) => (
              <li
                key={i}
                className={`text-center ${i === 1 ? "sm:mt-16" : ""}`}
              >
                <div className="relative aspect-square overflow-hidden rounded-[1.25rem] bg-[var(--slot-bg)]">
                  {u.services.images[i] ? (
                    <Image
                      src={u.services.images[i]}
                      alt={o.title.en}
                      fill
                      sizes="(min-width: 640px) 360px, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-[color:var(--slot-fg)]">
                      {t.home.imagePending}
                    </div>
                  )}
                </div>
                <p className="mt-6 text-sm t-faint">{num(i)}</p>
                <h3 className="mt-1 text-xl font-semibold">{o.title[locale]}</h3>
                <p className="mx-auto mt-2 max-w-[19rem] text-ink-soft">
                  {o.desc[locale]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Target Audience: 左图右文 + 三条人群 */}
      <section className="l-bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-24 md:grid-cols-2 md:gap-16">
          <ImageSlot
            src={u.audience.image}
            alt={u.audience.label.en}
            t={t}
            className="aspect-[4/5] rounded-[2rem] md:sticky md:top-24 md:self-start"
          />
          <div>
            <Eyebrow>{u.audience.label[locale]}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-balance sm:text-4xl">
              {u.audience.title[locale]}
            </h2>
            <p className="mt-4 text-lg text-ink-soft">{u.audience.body[locale]}</p>
            <ol className="mt-8 border-t border-line">
              {u.audience.items.map((a, i) => (
                <li
                  key={i}
                  className="grid gap-x-5 gap-y-1 border-b border-line py-6 sm:grid-cols-[2.5rem_1fr]"
                >
                  <span className="text-sm t-faint">{num(i)}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{a.title[locale]}</h3>
                    <p className="mt-1.5 text-ink-soft">{a.desc[locale]}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Our Culture: 三列文字 */}
      <section className="l-bg-gray">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <Eyebrow>{u.culture.label[locale]}</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold text-balance sm:text-5xl">
            {u.culture.title[locale]}
          </h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {u.culture.items.map((c, i) => (
              <li
                key={i}
                className="rounded-[1.25rem] border border-line bg-[var(--surface-white)] p-7"
              >
                <p className="text-sm t-faint">{num(i)}</p>
                <h3 className="mt-3 text-xl font-semibold">{c.title[locale]}</h3>
                <p className="mt-3 text-ink-soft">{c.desc[locale]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA（-mb-20 抵消页脚的 mt-20，避免底部露出空白条） */}
      <section className="-mb-20 bg-[var(--champagne)]/20">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:py-28">
          <h2 className="text-4xl font-bold sm:text-5xl">{u.cta.title[locale]}</h2>
          <p className="mt-5 text-lg text-ink-soft">{u.cta.body[locale]}</p>
          <a href={url || "#"} {...ext} className={btn}>
            {u.cta.button[locale]} ↗
          </a>
        </div>
      </section>
    </>
  );
}
