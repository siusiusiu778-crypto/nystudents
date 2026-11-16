import Image from "next/image";
import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import { aura } from "@/data/auraPage";
import type { Dictionary, Locale } from "@/lib/i18n";

export type AuraHeroLayout =
  | "split"
  | "overlay"
  | "centered"
  | "bleed"
  | "banner"
  | "editorial"
  | "arch"
  | "collage"
  | "card"
  | "caption";

const IMG = "/images/aura-hero.jpg";

function Eyebrow({ children, light }: { children: string; light?: boolean }) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.2em] ${
        light ? "text-white/75" : "text-[#9a7b63]"
      }`}
    >
      {children}
    </p>
  );
}

/** Aura 页 Hero 的多种排版：split 左文右图 / overlay 整图背景 / centered 居中文字+横图 / bleed 半屏出血 */
export default function AuraHero({
  locale,
  t,
  layout,
}: {
  locale: Locale;
  t: Dictionary;
  layout: AuraHeroLayout;
}) {
  const back = (light?: boolean) => (
    <Link
      href={`/${locale}/services`}
      className={`text-sm ${light ? "text-white/80 hover:text-white" : "text-ink-soft hover:text-black"}`}
    >
      ← {t.services.back}
    </Link>
  );
  const eyebrow = `AURA Institute · ${aura.eyebrow[locale]}`;

  if (layout === "overlay") {
    // 整图背景 + 左侧文字（白字）
    return (
      <section className="relative flex min-h-[calc(100svh-4.9rem)] items-center overflow-hidden bg-[#f0e2da]">
        <Image src={IMG} alt="AURA Institute reception" fill priority sizes="100vw" className="object-cover object-[center_40%]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/5" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 text-white">
          {back(true)}
          <div className="mt-8">
            <Eyebrow light>{eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-5 max-w-2xl text-5xl leading-[1.05] font-bold text-balance sm:text-7xl">
            {aura.hero.title[locale]}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">{aura.hero.body[locale]}</p>
          <p className="mt-4 max-w-xl text-white/75">{aura.hero.body2[locale]}</p>
        </div>
      </section>
    );
  }

  if (layout === "centered") {
    // 居中文字 + 下方通栏横图
    return (
      <section className="bg-[#f8f0eb]">
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:pt-14 sm:pb-24">
          {back()}
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 text-5xl leading-[1.05] font-bold text-balance sm:text-7xl">
              {aura.hero.title[locale]}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">{aura.hero.body[locale]}</p>
            <p className="mx-auto mt-4 max-w-2xl text-ink-soft">{aura.hero.body2[locale]}</p>
          </div>
          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[2rem] bg-[var(--slot-bg)] sm:aspect-[2.2/1]">
            <Image src={IMG} alt="AURA Institute reception" fill priority sizes="(min-width: 1152px) 1120px, 100vw" className="object-cover object-[center_55%]" />
          </div>
        </div>
      </section>
    );
  }

  if (layout === "bleed") {
    // 左右对半，图片贴边铺满（与 About 页同构）
    return (
      <section className="grid min-h-[calc(100svh-4.9rem)] grid-rows-[minmax(260px,42svh)_1fr] bg-[#f8f0eb] lg:grid-cols-2 lg:grid-rows-1">
        <div className="order-2 flex items-center px-4 py-12 lg:order-1 lg:py-20 lg:pr-20 lg:pl-[max(1rem,calc((100vw-72rem)/2+1rem))]">
          <div>
            {back()}
            <div className="mt-8">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1 className="mt-5 max-w-xl text-4xl leading-[1.08] font-bold text-balance sm:text-6xl">
              {aura.hero.title[locale]}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">{aura.hero.body[locale]}</p>
            <p className="mt-4 max-w-xl text-ink-soft">{aura.hero.body2[locale]}</p>
          </div>
        </div>
        <div className="relative order-1 bg-[var(--slot-bg)] lg:order-2">
          <Image src={IMG} alt="AURA Institute reception" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>
    );
  }

  if (layout === "banner") {
    // 上方通栏图（贴边），下方标题与说明分两列
    return (
      <section className="bg-[#f8f0eb]">
        <div className="relative h-[46svh] min-h-[280px] bg-[var(--slot-bg)] sm:h-[56svh]">
          <Image src={IMG} alt="AURA Institute reception" fill priority sizes="100vw" className="object-cover object-[center_55%]" />
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:py-16 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div>
            {back()}
            <div className="mt-6">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1 className="mt-4 text-4xl leading-[1.08] font-bold text-balance sm:text-6xl">
              {aura.hero.title[locale]}
            </h1>
          </div>
          <div className="grid content-end gap-4 text-ink-soft">
            <p className="text-lg">{aura.hero.body[locale]}</p>
            <p>{aura.hero.body2[locale]}</p>
          </div>
        </div>
      </section>
    );
  }

  if (layout === "editorial") {
    // 超大标题 + 错位叠放的图片（杂志感）
    return (
      <section className="overflow-hidden bg-[#f8f0eb]">
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:pb-24">
          {back()}
          <div className="mt-6">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1 className="relative z-10 mt-4 max-w-4xl text-6xl leading-[0.98] font-bold text-balance sm:text-8xl lg:text-9xl">
            {aura.hero.title[locale]}
          </h1>
          <div className="relative mt-8 grid gap-8 md:grid-cols-12 md:items-start">
            <div className="order-2 grid gap-4 text-ink-soft md:order-1 md:col-span-5 md:pt-24">
              <p className="text-lg">{aura.hero.body[locale]}</p>
              <p>{aura.hero.body2[locale]}</p>
            </div>
            <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-[2rem] bg-[var(--slot-bg)] md:order-2 md:col-span-7 md:-mt-24 md:aspect-[5/4]">
              <Image src={IMG} alt="AURA Institute reception" fill priority sizes="(min-width: 768px) 640px, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (layout === "arch") {
    // 左文右图，图片为顶部拱形、底部贴齐区块边缘（呼应诊所拱形装饰）
    return (
      <section className="overflow-hidden bg-[#f8f0eb]">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 pt-12 md:grid-cols-[1.1fr_1fr] md:gap-16 md:pt-20">
          <div className="pb-4 md:self-center md:pb-20">
            {back()}
            <div className="mt-8">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1 className="mt-5 text-4xl leading-[1.08] font-bold text-balance sm:text-6xl">
              {aura.hero.title[locale]}
            </h1>
            <p className="mt-6 text-lg text-ink-soft">{aura.hero.body[locale]}</p>
            <p className="mt-4 text-ink-soft">{aura.hero.body2[locale]}</p>
          </div>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-t-[999px] bg-[var(--slot-bg)] md:max-w-none">
            <Image src={IMG} alt="AURA Institute reception" fill priority sizes="(min-width: 768px) 480px, 90vw" className="object-cover" />
          </div>
        </div>
      </section>
    );
  }

  if (layout === "collage") {
    // 左文右三图拼贴：主图 + 两张叠放小图
    return (
      <section className="overflow-hidden bg-[#f8f0eb]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:py-20 md:grid-cols-[1fr_1.05fr] md:gap-16">
          <div>
            {back()}
            <div className="mt-8">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1 className="mt-5 text-4xl leading-[1.08] font-bold text-balance sm:text-6xl">
              {aura.hero.title[locale]}
            </h1>
            <p className="mt-6 text-lg text-ink-soft">{aura.hero.body[locale]}</p>
            <p className="mt-4 text-ink-soft">{aura.hero.body2[locale]}</p>
          </div>
          <div className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[520px] md:max-w-none">
            <div className="absolute top-0 right-0 h-[78%] w-[72%] overflow-hidden rounded-[2rem] bg-[var(--slot-bg)]">
              <Image src={IMG} alt="AURA Institute reception" fill priority sizes="(min-width: 768px) 380px, 70vw" className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 h-[44%] w-[46%] overflow-hidden rounded-[1.5rem] border-4 border-[#f8f0eb] bg-[var(--slot-bg)]">
              <Image src="/images/aura-room.png" alt="" fill sizes="240px" className="object-cover" />
            </div>
            <div className="absolute right-[6%] bottom-[2%] h-[30%] w-[34%] overflow-hidden rounded-[1.25rem] border-4 border-[#f8f0eb] bg-[var(--slot-bg)]">
              <Image src="/images/aura-prime.webp" alt="" fill sizes="180px" className="object-cover object-[60%_center]" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (layout === "card") {
    // 右侧大图铺底，白色文字卡片压在图片左缘
    return (
      <section className="relative bg-[#f8f0eb] lg:min-h-[calc(100svh-4.9rem)]">
        <div className="relative h-[46svh] min-h-[280px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[68%]">
          <Image src={IMG} alt="AURA Institute reception" fill priority sizes="(min-width: 1024px) 68vw, 100vw" className="object-cover" />
        </div>
        <div className="relative mx-auto flex max-w-6xl items-center px-4 lg:min-h-[calc(100svh-4.9rem)]">
          <div className="-mt-10 w-full rounded-[1.75rem] bg-white p-8 shadow-xl sm:p-12 lg:mt-0 lg:max-w-xl">
            {back()}
            <div className="mt-6">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1 className="mt-4 text-4xl leading-[1.08] font-bold text-balance sm:text-5xl">
              {aura.hero.title[locale]}
            </h1>
            <p className="mt-5 text-lg text-ink-soft">{aura.hero.body[locale]}</p>
            <p className="mt-3 text-ink-soft">{aura.hero.body2[locale]}</p>
          </div>
        </div>
        <div className="h-10 lg:hidden" />
      </section>
    );
  }

  if (layout === "caption") {
    // 整图背景，标题在左下、说明在右下
    return (
      <section className="relative flex min-h-[calc(100svh-4.9rem)] items-end overflow-hidden bg-[#f0e2da]">
        <Image src={IMG} alt="AURA Institute reception" fill priority sizes="100vw" className="object-cover object-[center_45%]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 pt-40 pb-12 text-white sm:pb-16 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-16">
          <div>
            <Eyebrow light>{eyebrow}</Eyebrow>
            <h1 className="mt-4 text-5xl leading-[1.02] font-bold text-balance sm:text-7xl">
              {aura.hero.title[locale]}
            </h1>
          </div>
          <div className="grid gap-3 text-white/85">
            <p className="text-lg">{aura.hero.body[locale]}</p>
            <p className="text-white/70">{aura.hero.body2[locale]}</p>
            {back(true)}
          </div>
        </div>
      </section>
    );
  }

  // split：左文右图（当前使用）
  return (
    <section className="bg-[#f8f0eb]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:py-20 md:grid-cols-2 md:gap-16">
        <div>
          {back()}
          <div className="mt-8">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-6xl">{aura.hero.title[locale]}</h1>
          <p className="mt-6 text-lg text-ink-soft">{aura.hero.body[locale]}</p>
          <p className="mt-4 text-ink-soft">{aura.hero.body2[locale]}</p>
        </div>
        <ImageSlot src={IMG} alt="AURA Institute reception" t={t} className="aspect-[4/5] rounded-[2rem]" priority />
      </div>
    </section>
  );
}
