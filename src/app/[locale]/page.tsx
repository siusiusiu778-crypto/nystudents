import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShowcaseCarousel from "@/components/ShowcaseCarousel";
import { ShowcaseFan } from "@/components/HomeShowcase";
import ImageSlot from "@/components/ImageSlot";
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
      <section className="l-section l-bg-white">
        <div className="l-container l-split">
          <ImageSlot src={homeImages.story.src} alt={h.story.title} t={t} />
          <div>
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
          </div>
        </div>
      </section>

      {/* 03 Our businesses */}
      <section id="businesses" className="l-section l-bg-gray scroll-mt-20">
        <div className="l-container">
          {eyebrow(h.businesses.label)}
          <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
            {h.businesses.title}
          </h2>
          <p className="mt-[var(--space-heading-gap)] max-w-3xl text-lg t-muted">
            {h.businesses.body}
          </p>
          <div className="l-cards mt-[var(--space-block-gap)]">
            {h.businesses.groups.map((group, i) => (
              <div
                key={group.title}
                className="rounded-[20px] border border-line bg-white p-3"
              >
                <ImageSlot
                  src={homeImages.businesses[i]?.src ?? ""}
                  alt={group.title}
                  t={t}
                  className="aspect-[16/10] rounded-[10px]"
                />
                <div className="px-[calc(var(--space-card-pad)-12px)] pb-[calc(var(--space-card-pad)-12px)]">
                  <p className="mt-6 text-sm font-medium t-faint">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    <span aria-hidden className="mr-2">
                      {group.icon}
                    </span>
                    {group.title}
                  </h3>
                  <p className="mt-2 t-muted">{group.body}</p>
                  <p className="mt-5 text-sm">
                    <span className="t-faint">
                      {("brandsLabel" in group && group.brandsLabel) ||
                        h.businesses.brandsLabel}
                      :
                    </span>{" "}
                    <span className="font-medium">{group.brands}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[var(--space-block-gap)]">
            <Link href={`/${locale}/services`} className={primaryBtn}>
              {h.businesses.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* 版本对比：A 卡片轮播 / B 重叠扇形（选定后删掉另一个） */}
      <p className="l-container pt-8 text-xs font-semibold tracking-widest t-faint">VERSION A</p>
      <ShowcaseCarousel copy={h.showcase} href={`/${locale}/services`} />
      <p className="l-container pt-8 text-xs font-semibold tracking-widest t-faint">VERSION B</p>
      <ShowcaseFan copy={h.showcase} href={`/${locale}/services`} />

      {/* 04 Our network */}
      <section className="l-section l-bg-white">
        <div className="l-container">
          <div className="max-w-3xl">
            {eyebrow(h.network.label)}
            <h2 className="text-3xl font-bold sm:text-4xl">
              {h.network.title}
            </h2>
            <p className="mt-[var(--space-heading-gap)] text-lg t-muted">
              {h.network.body}
            </p>
            <Link
              href={`/${locale}/city`}
              className="mt-[var(--space-action-gap)] inline-block font-medium underline underline-offset-4 hover:opacity-70"
            >
              {h.network.cta} →
            </Link>
          </div>
          <div className="mt-[var(--space-block-gap)]">
            <ImageSlot
              src={homeImages.network.src}
              alt={h.network.title}
              t={t}
              className="aspect-[16/9] rounded-sm"
              sizes="(min-width: 1280px) 1200px, 100vw"
            />
          </div>
          <div className="mt-[var(--space-block-gap)]">
            <p className="border-b border-line pb-5 text-center text-xs font-semibold tracking-widest uppercase">
              {h.network.logosCaption}
            </p>
            {networkLogos.map((row, i) => (
              <ul
                key={i}
                className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6 pt-8"
              >
                {row.map((logo) => (
                  <li key={logo.name} className="relative h-16 w-[120px] sm:w-[150px]">
                    {logo.src ? (
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        fill
                        sizes="150px"
                        className="object-contain opacity-80 grayscale"
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

      {/* 05 Let's connect —— 与页脚同为黑底，抵消页脚的 mt-20，中间不留白 */}
      <section className="l-section relative -mb-20 overflow-hidden bg-black pb-[calc(var(--space-section-y)+5rem)] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.14),transparent)]"
        />
        <div className="l-container relative grid items-end gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <div>
            {eyebrow(h.connect.label)}
            <h2 className="text-5xl leading-[1.05] font-bold text-balance sm:text-7xl">
              {h.connect.title}
            </h2>
          </div>
          <div className="border-white/20 lg:border-l lg:pl-10">
            <p className="text-lg leading-relaxed text-white/70">{h.connect.body}</p>
            <div className="mt-[var(--space-action-gap)]">
              <Link href={`/${locale}/contact`} className={primaryBtn}>
                {h.connect.cta} →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
