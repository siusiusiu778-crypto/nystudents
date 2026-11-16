import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
// import ShowcaseCarousel from "@/components/ShowcaseCarousel"; // 版本 A 已隐藏
import { ShowcaseFan } from "@/components/HomeShowcase";
import BusinessLayouts from "@/components/BusinessLayouts";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import ShowcaseVariants from "@/components/ShowcaseVariants";
import NetworkVariants from "@/components/NetworkVariants";
import NetworkShowcase from "@/components/NetworkShowcase";
import { homeImages, networkLogos } from "@/data/homeImages";
import { getDictionary, hasLocale } from "@/lib/i18n";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);
  const h = t.home;
  const primaryBtn =
    "btn-primary inline-block rounded-sm px-6 py-3 font-medium hover:opacity-90";

  const eyebrow = (text: string) => (
    <p className="mb-[var(--space-eyebrow-gap)] text-sm font-medium tracking-widest t-faint">
      {text}
    </p>
  );

  return (
    <>
      {/* 01 Hero：整幅背景图 + 居中文字 */}
      <section className="l-hero l-bg-dark relative flex min-h-[560px] items-end overflow-hidden pb-16 lg:min-h-[min(82vh,760px)] lg:pb-24">
        {homeImages.hero.video ? (
          <>
            <video
              src={homeImages.hero.video}
              poster={homeImages.hero.src || undefined}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
            />
          </>
        ) : homeImages.hero.src ? (
          <>
            <Image
              src={homeImages.hero.src}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" aria-hidden />
          </>
        ) : (
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm t-faint">
            {h.imagePending}
          </p>
        )}
      </section>

      {/* 02 Who we are */}
      <section className="l-section l-bg-gray">
        <div className="l-container l-split">
          <Reveal from="left">
            <ImageSlot src={homeImages.story.src} alt={h.story.title} t={t} />
          </Reveal>
          <Reveal delay={150}>
            {eyebrow(h.story.label)}
            <h2 className="text-3xl font-bold sm:text-4xl">{h.story.title}</h2>
            <p className="mt-[var(--space-heading-gap)] text-lg t-muted">
              {h.story.body}
            </p>
            <Link
              href={`/${locale}/about`}
              className="mt-[var(--space-action-gap)] inline-block font-medium underline underline-offset-4 hover:opacity-70"
            >
              {h.story.cta} →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 03 Our businesses：色块卡片 */}
      {/* 已隐藏 版本 G（层叠卡片）；要恢复，取消注释并把 id="businesses" 移回这里
      <section id="businesses" className="l-section l-bg-gray scroll-mt-20">
        <div className="l-container">
          <p className="mb-4 text-xs font-semibold tracking-widest t-faint">VERSION G</p>
          {eyebrow(h.businesses.label)}
          <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
            {h.businesses.title}
          </h2>
          <p className="mt-[var(--space-heading-gap)] max-w-3xl text-lg t-muted">
            {h.businesses.body}
          </p>
          <BusinessLayouts t={t} layout="stack" />
          <div className="mt-[var(--space-block-gap)]">
            <Link href={`/${locale}/services`} className={primaryBtn}>
              {h.businesses.cta}
            </Link>
          </div>
        </div>
      </section>
      */}

      {/* 03 Our businesses：标题 section + 卡片区。
          第一排卡片（01、02）在桌面上滚到顶部后钉住，第二排（03、04）连同整块背景向上滑过来把它盖住。 */}
      <section
        id="businesses"
        className="l-section l-bg-white scroll-mt-20 !pb-[var(--space-block-gap)]"
      >
        <div className="l-container">
          {eyebrow(h.businesses.label)}
          <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
            {h.businesses.title}
          </h2>
          <p className="mt-[var(--space-heading-gap)] max-w-3xl text-lg t-muted">
            {h.businesses.body}
          </p>
        </div>
      </section>
      <div className="l-bg-white">
        <div className="l-container pb-5 lg:sticky lg:top-[5.5rem] lg:pb-0">
          <BusinessLayouts t={t} layout="chips" part={0} />
        </div>
        <section className="l-bg-white relative z-10 pt-0 pb-24 lg:pt-[36px]">
          <div className="l-container">
            <BusinessLayouts t={t} layout="chips" part={1} />
            <div className="mt-[var(--space-block-gap)]">
              <Link href={`/${locale}/services`} className={primaryBtn}>
                {h.businesses.cta}
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* 版本对比：A 卡片轮播 / B 重叠扇形（选定后删掉另一个） */}
      {/* 已隐藏 版本 A（卡片轮播）；要恢复，取消下面两行注释
      <ShowcaseCarousel copy={h.showcase} href={`/${locale}/services`} />
      */}
      {/* 已隐藏 原版（重叠扇形）；要恢复，取消下面一行注释
      <ShowcaseFan copy={h.showcase} href={`/${locale}/services`} />
      */}

      {/* Showcase：左文右双列滚动（图片列上下贴着 section 边缘，没有内边距） */}
      <section className="l-bg-gray overflow-hidden">
        <ShowcaseVariants
          copy={h.showcase}
          href={`/${locale}/services`}
          variant="columns"
        />
      </section>

      {/* 04a Our network 新版：居中标题 + 一排城市卡（与下面原版同时显示，选定后删掉一个） */}
      <section className="l-section l-bg-white">
        <NetworkVariants
          locale={locale}
          href={`/${locale}/city`}
          cta={h.network.cta}
          variant="row"
        />
      </section>

      {/* 04b Our network 原版（磨砂面板 + 城市竖条）已隐藏；要恢复，取消下面注释，
          并把本 section 的 l-section 改回 pb-[var(--space-section-y)]、把下面 div 的 mt 加回去
      <NetworkShowcase
        locale={locale}
        href={`/${locale}/city`}
        cta={h.network.cta}
      />
      */}
      <section className="l-section l-bg-gray">
        <div className="l-container">
          <div>
            <p className="border-b border-line pb-5 text-center text-xs font-semibold tracking-widest uppercase">
              {h.network.logosCaption}
            </p>
            {networkLogos.map((row, i) => (
              <ul
                key={i}
                className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6 pt-8"
              >
                {row.map((logo) => (
                  <li
                    key={logo.name}
                    className="relative h-16 w-[120px] sm:w-[150px]"
                  >
                    {logo.src ? (
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        fill
                        sizes="150px"
                        className="object-contain grayscale contrast-[1.8] brightness-90"
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center rounded-sm bg-[var(--slot-bg)] text-xs text-[color:var(--slot-fg)]">
                        {h.network.logoPending}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Let's connect —— 居中白底 CTA（-mb-20 抵消页脚的 mt-20，与页脚之间不留白） */}
      <section className="l-section l-bg-white -mb-20">
        <div className="mx-auto max-w-3xl px-[var(--space-gutter)] py-8 text-center sm:py-12">
          <p className="mb-[var(--space-eyebrow-gap)] text-sm font-bold tracking-widest">
            <span className="text-[#282f83]">05</span>{" "}
            <span className="t-faint">{h.connect.label}</span>
          </p>
          <h2 className="text-4xl leading-[1.1] font-bold text-balance sm:text-6xl">
            {h.connect.title}
          </h2>
          <p className="mx-auto mt-[var(--space-heading-gap)] max-w-xl text-lg t-muted">
            {h.connect.body}
          </p>
          <div className="mt-[var(--space-action-gap)] flex justify-center">
            <Link
              href={`/${locale}/contact`}
              className="rounded-sm bg-[#282f83] px-7 py-3.5 font-medium text-white hover:opacity-90"
            >
              {h.connect.cta} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
