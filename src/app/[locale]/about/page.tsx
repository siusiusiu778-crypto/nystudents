import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageSlot from "@/components/ImageSlot";
import JourneySteps from "@/components/JourneySteps";
import { about as a, aboutImages } from "@/data/aboutPage";
import { getDictionary, hasLocale } from "@/lib/i18n";

/** Our Journey 样式：image = 图片背景版，plain = 纯色版（展开的为蓝色块） */
const JOURNEY_VARIANT: "image" | "plain" = "image";

export async function generateMetadata({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return { title: getDictionary(locale).about.title };
}

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);

  const eyebrow = (text: string) => (
    <p className="mb-[var(--space-eyebrow-gap)] text-sm font-medium tracking-widest t-faint">
      {text}
    </p>
  );

  return (
    <>
      {/* 01 Hero：左右对半分屏，右侧图片铺满 */}
      <section className="l-bg-gray grid min-h-[calc(100svh-4.9rem)] grid-rows-[minmax(240px,42svh)_1fr] lg:grid-cols-2 lg:grid-rows-1">
        <div className="order-2 flex items-center px-[var(--space-gutter)] py-12 lg:order-1 lg:py-20 lg:pr-20 lg:pl-[max(var(--space-gutter),calc((100vw-var(--space-container))/2+var(--space-gutter)))]">
          <div>
            {eyebrow(a.hero.label[locale])}
            <h1 className="max-w-2xl text-4xl leading-[1.08] font-bold text-balance sm:text-6xl lg:text-7xl">
              {a.hero.title[locale]}
            </h1>
            <div className="mt-[var(--space-heading-gap)] grid max-w-xl gap-4 text-lg t-muted lg:mt-8 lg:text-xl lg:leading-relaxed">
              {a.hero.body.map((b) => (
                <p key={b.en}>{b[locale]}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="relative order-1 bg-[var(--slot-bg)] lg:order-2">
          {aboutImages.hero && (
            <Image
              src={aboutImages.hero}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          )}
        </div>
      </section>

      {/* 02 Our journey：时间轴 */}
      <section id="journey" className="l-section l-bg-white scroll-mt-16">
        <div className="l-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              {eyebrow(a.journey.label[locale])}
              <h2 className="text-3xl font-bold sm:text-4xl">
                {a.journey.title[locale]}
              </h2>
            </div>
            <div className="grid gap-4 text-lg t-muted lg:pt-9">
              {a.journey.body.map((b) => (
                <p key={b.en}>{b[locale]}</p>
              ))}
            </div>
          </div>

          {/* 四列：当前列蓝色色块，默认第 2 列，鼠标移入切换 */}
          <JourneySteps
            images={JOURNEY_VARIANT === "image" ? aboutImages.steps : undefined}
            steps={a.journey.steps.map((s) => ({
              tag: s.tag[locale],
              title: s.title[locale],
              desc: s.desc[locale],
            }))}
          />
        </div>
      </section>

      {/* 03 Our culture：大标题 + 导语，下方拼贴（大图 / 小图 / 蓝色文字卡） */}
      <section id="culture" className="l-section l-bg-gray scroll-mt-16">
        <div className="l-container">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              {eyebrow(a.culture.label[locale])}
              <h2 className="text-4xl leading-[1.05] font-bold text-balance sm:text-6xl">
                {a.culture.title[locale]}
              </h2>
            </div>
            <p className="text-lg leading-relaxed t-muted lg:col-span-5 lg:pb-1 lg:text-xl">
              {a.culture.body[0][locale]}
            </p>
          </div>

          <div className="mt-[var(--space-block-gap)] grid gap-4 lg:mt-16 lg:h-[540px] lg:grid-cols-12">
            <ImageSlot
              src={aboutImages.culture}
              alt={a.culture.title[locale]}
              t={t}
              className="aspect-[4/3] rounded-[20px] lg:col-span-7 lg:aspect-auto lg:h-full"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div className="flex min-h-0 flex-col gap-4 lg:col-span-5">
              <ImageSlot
                src={aboutImages.culture2}
                alt={a.culture.title[locale]}
                t={t}
                className="aspect-[16/10] rounded-[20px] lg:aspect-auto lg:min-h-0 lg:flex-1"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="grid gap-4 rounded-[20px] bg-[var(--brand)] p-7 leading-relaxed text-white/85 lg:p-8">
                {a.culture.body.slice(1).map((b) => (
                  <p key={b.en}>{b[locale]}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Looking ahead：圆角图片面板 */}
      <section id="ahead" className="l-section l-bg-white scroll-mt-16">
        <div className="l-container">
          <div className="relative overflow-hidden rounded-[20px] bg-[var(--brand)] text-white [--btn-bg:#ffffff] [--btn-fg:#282f83] [--text-faint:rgba(255,255,255,0.6)]">
            <Image
              src={aboutImages.ahead}
              alt=""
              fill
              sizes="(min-width: 1536px) 1440px, 100vw"
              className="object-cover opacity-30 mix-blend-luminosity"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-[var(--brand)] via-[var(--brand)]/85 to-[var(--brand)]/40"
            />
            <div className="relative grid gap-10 p-8 sm:p-14 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:p-20">
              <div className="flex flex-col justify-between gap-10">
                <div>
                  {eyebrow(a.ahead.label[locale])}
                  <h2 className="text-4xl leading-[1.05] font-bold text-balance sm:text-6xl">
                    {a.ahead.title[locale]}
                  </h2>
                </div>
                <div>
                  <Link
                    href={`/${locale}/services`}
                    className="btn-primary inline-block rounded-sm px-6 py-3 font-medium hover:opacity-90"
                  >
                    {a.ahead.cta[locale]} →
                  </Link>
                </div>
              </div>
              <div className="grid content-start gap-4 text-lg leading-relaxed text-white/80 lg:pt-9">
                {a.ahead.body.map((b) => (
                  <p key={b.en}>{b[locale]}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
