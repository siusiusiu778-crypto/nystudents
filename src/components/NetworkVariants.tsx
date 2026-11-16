import Image from "next/image";
import Link from "next/link";
import NetworkRow from "@/components/NetworkRow";
import { networkCities, networkCopy } from "@/data/networkCities";
import type { Locale } from "@/lib/i18n";

export type NetworkVariant = "row" | "split" | "list" | "banner" | "polaroid" | "route" | "dark" | "sentence" | "hero" | "bands" | "marquee";

const pos = (p: number) => `${Math.round(p * 100)}% 30%`;

function CityImg({ c, sizes = "300px" }: { c: (typeof networkCities)[number]; sizes?: string }) {
  return (
    <Image
      src={c.img}
      alt=""
      fill
      unoptimized
      sizes={sizes}
      className="object-cover"
      style={{ objectPosition: pos(c.p) }}
    />
  );
}

export default function NetworkVariants({
  locale,
  href,
  cta,
  variant,
}: {
  locale: Locale;
  href: string;
  cta: string;
  variant: NetworkVariant;
}) {
  const n = networkCopy;
  const label = (
    <p className="text-sm font-medium tracking-[0.35em]">{n.label[locale]}</p>
  );
  const link = (
    <Link href={href} className="mt-8 inline-block font-medium underline underline-offset-4 hover:opacity-70">
      {cta} →
    </Link>
  );

  // 1. 居中标题 + 一排等宽圆角城市卡
  if (variant === "row") {
    return (
      <div className="l-container">
        <div className="mx-auto max-w-3xl text-center">
          {label}
          <h2 className="mt-6 text-4xl leading-[1.12] font-bold text-balance sm:text-6xl">{n.title[locale]}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg t-muted">{n.body[locale]}</p>
        </div>
        <NetworkRow
          cities={networkCities.map((c) => ({ slug: c.slug, name: c.name[locale], img: c.img, p: c.p }))}
        />
        <div className="mt-10 text-center">{link}</div>
      </div>
    );
  }

  // D. 整幅横条：五张城市图紧贴铺满全宽，中间压一张白色标题卡
  if (variant === "banner") {
    return (
      <div className="relative">
        <ul className="grid grid-cols-2 sm:grid-cols-5">
          {networkCities.map((c) => (
            <li key={c.slug} className="relative aspect-[3/4] bg-[var(--slot-bg)] sm:aspect-auto sm:h-[620px]">
              <CityImg c={c} />
              <p className="absolute inset-x-0 bottom-5 text-center text-xs font-semibold tracking-[0.2em] text-white uppercase drop-shadow">
                {c.name[locale]}
              </p>
            </li>
          ))}
        </ul>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
          <div className="pointer-events-auto max-w-xl rounded-[24px] bg-white p-8 text-center shadow-2xl sm:p-12">
            {label}
            <h2 className="mt-5 text-3xl leading-[1.15] font-bold text-balance sm:text-5xl">{n.title[locale]}</h2>
            <p className="mt-5 t-muted">{n.body[locale]}</p>
            {link}
          </div>
        </div>
      </div>
    );
  }

  // E. 明信片：略微倾斜的白边照片，错落排开
  if (variant === "polaroid") {
    const rot = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];
    return (
      <div className="l-container">
        <div className="mx-auto max-w-3xl text-center">
          {label}
          <h2 className="mt-6 text-4xl leading-[1.12] font-bold text-balance sm:text-6xl">{n.title[locale]}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg t-muted">{n.body[locale]}</p>
        </div>
        <ul className="mt-16 flex flex-wrap items-start justify-center gap-x-6 gap-y-10">
          {networkCities.map((c, i) => (
            <li
              key={c.slug}
              className={`w-[44%] rounded-[6px] bg-white p-3 pb-5 shadow-[0_14px_34px_rgba(0,0,0,0.14)] transition-transform duration-300 hover:rotate-0 hover:scale-105 sm:w-[17%] ${rot[i]} ${i % 2 ? "sm:mt-10" : ""}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--slot-bg)]">
                <CityImg c={c} sizes="260px" />
              </div>
              <p className="mt-4 text-center text-xs font-semibold tracking-[0.15em] uppercase">{c.name[locale]}</p>
            </li>
          ))}
        </ul>
        <div className="mt-14 text-center">{link}</div>
      </div>
    );
  }

  // F. 路线：圆形城市图沿一条虚线串联，像网络节点
  if (variant === "route") {
    return (
      <div className="l-container">
        <div className="mx-auto max-w-3xl text-center">
          {label}
          <h2 className="mt-6 text-4xl leading-[1.12] font-bold text-balance sm:text-6xl">{n.title[locale]}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg t-muted">{n.body[locale]}</p>
        </div>
        <div className="relative mt-16">
          <div aria-hidden className="absolute top-[calc(50%-1.2rem)] right-[10%] left-[10%] hidden border-t-2 border-dashed border-[var(--champagne)] lg:block" />
          <ul className="relative grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {networkCities.map((c) => (
              <li key={c.slug} className="flex flex-col items-center">
                <div className="relative aspect-square w-[78%] max-w-[210px] overflow-hidden rounded-full border-[6px] border-white bg-[var(--slot-bg)] shadow-[0_10px_28px_rgba(0,0,0,0.14)]">
                  <CityImg c={c} sizes="220px" />
                </div>
                <p className="mt-5 text-sm font-semibold tracking-[0.15em] uppercase">{c.name[locale]}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 text-center">{link}</div>
      </div>
    );
  }

  // G. 深色：深底，左文右横向滑动的宽幅城市卡
  if (variant === "dark") {
    return (
      <div className="l-container">
        <div className="grid items-end gap-6 md:grid-cols-2 md:gap-16">
          <div>
            {label}
            <h2 className="mt-6 text-4xl leading-[1.12] font-bold text-balance sm:text-5xl">{n.title[locale]}</h2>
          </div>
          <div>
            <p className="text-lg text-white/70">{n.body[locale]}</p>
            <Link href={href} className="mt-6 inline-block rounded-sm bg-white px-6 py-3 font-medium text-[#303038] hover:opacity-90">
              {cta} →
            </Link>
          </div>
        </div>
        <ul className="-mx-[var(--space-gutter)] mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--space-gutter)] pb-2">
          {networkCities.map((c) => (
            <li key={c.slug} className="relative aspect-[4/5] w-[70%] shrink-0 snap-start overflow-hidden rounded-[20px] bg-white/10 sm:w-[34%] lg:w-[24%]">
              <CityImg c={c} sizes="400px" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 text-lg font-semibold">{c.name[locale]}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // 2. 左文右图：左边标题，右边不规则拼贴（大图 + 小图）
  if (variant === "split") {
    const cities = networkCities;
    return (
      <div className="l-container grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          {label}
          <h2 className="mt-6 text-4xl leading-[1.12] font-bold text-balance sm:text-5xl">{n.title[locale]}</h2>
          <p className="mt-6 max-w-md text-lg t-muted">{n.body[locale]}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {cities.map((c) => (
              <li key={c.slug} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium">
                {c.name[locale]}
              </li>
            ))}
          </ul>
          {link}
        </div>
        <div className="grid grid-cols-3 grid-rows-[repeat(2,minmax(0,1fr))] gap-3 lg:h-[560px]">
          {cities.map((c, i) => (
            <div
              key={c.slug}
              className={`relative min-h-[180px] overflow-hidden rounded-[18px] bg-[var(--slot-bg)] ${
                i === 0 ? "col-span-2 row-span-1" : ""
              } ${i === 2 ? "row-span-2" : ""}`}
            >
              <CityImg c={c} sizes="400px" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-4 text-xs font-semibold tracking-[0.15em] text-white uppercase">
                {c.name[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 3. 文字列表：大号城市名逐行排开，右侧小图，细线分隔
  if (variant === "list") return (
    <div className="l-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        {label}
        <h2 className="mt-6 text-4xl leading-[1.12] font-bold text-balance sm:text-5xl">{n.title[locale]}</h2>
        <p className="mt-6 max-w-md text-lg t-muted">{n.body[locale]}</p>
        {link}
      </div>
      <ul className="border-t border-line">
        {networkCities.map((c, i) => (
          <li key={c.slug} className="flex items-center justify-between gap-6 border-b border-line py-5">
            <div className="flex items-baseline gap-5">
              <span className="text-sm t-faint">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-3xl font-bold sm:text-4xl">{c.name[locale]}</span>
            </div>
            <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-[10px] bg-[var(--slot-bg)] sm:h-20 sm:w-32">
              <CityImg c={c} sizes="128px" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  // H. 文字大句：城市名排成一句大标题，中间嵌入圆角小图
  if (variant === "sentence") {
    return (
      <div className="l-container">
        <div className="text-center">{label}</div>
        <p className="mx-auto mt-10 max-w-6xl text-center text-4xl leading-[1.35] font-bold sm:text-6xl sm:leading-[1.3] lg:text-7xl lg:leading-[1.25]">
          {networkCities.map((c) => (
            <span key={c.slug} className="whitespace-normal">
              {c.name[locale]}
              <span className="relative mx-2 inline-block h-[0.85em] w-[1.5em] translate-y-[0.12em] overflow-hidden rounded-full bg-[var(--slot-bg)] sm:mx-3">
                <CityImg c={c} sizes="160px" />
              </span>
            </span>
          ))}
        </p>
        <div className="mx-auto mt-12 max-w-xl text-center">
          <h2 className="text-xl font-medium text-balance">{n.title[locale]}</h2>
          <p className="mt-3 t-muted">{n.body[locale]}</p>
          {link}
        </div>
      </div>
    );
  }

  // I. 主图 + 叠卡：纽约整幅大图压标题，其余城市卡片叠在大图底边
  if (variant === "hero") {
    const [ny, ...rest] = networkCities;
    return (
      <div className="l-container">
        <div className="relative h-[460px] overflow-hidden rounded-[28px] bg-[var(--slot-bg)] sm:h-[520px]">
          <Image
            src={ny.img}
            alt=""
            fill
            unoptimized
            sizes="1200px"
            className="object-cover"
            style={{ objectPosition: "50% 25%" }}
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
          <div className="absolute inset-0 flex items-center p-8 text-white sm:p-14">
            <div className="max-w-lg">
              <p className="text-sm font-medium tracking-[0.35em]">{n.label[locale]}</p>
              <h2 className="mt-6 text-4xl leading-[1.12] font-bold text-balance sm:text-5xl">{n.title[locale]}</h2>
              <p className="mt-5 text-white/80">{n.body[locale]}</p>
            </div>
          </div>
        </div>
        <ul className="relative z-10 mx-4 -mt-20 grid grid-cols-2 gap-4 sm:mx-10 lg:grid-cols-4">
          {rest.map((c) => (
            <li key={c.slug} className="rounded-[18px] bg-white p-2.5 shadow-[0_14px_34px_rgba(0,0,0,0.14)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] bg-[var(--slot-bg)]">
                <CityImg c={c} sizes="300px" />
              </div>
              <p className="px-1.5 pt-3 pb-1 text-sm font-semibold">{c.name[locale]}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">{link}</div>
      </div>
    );
  }

  // J. 横幅叠行：每个城市一条整宽横幅，图作背景，城市名大字居左
  if (variant === "bands") {
    return (
      <div>
        <div className="l-container grid items-end gap-6 pb-12 md:grid-cols-2 md:gap-16">
          <div>
            {label}
            <h2 className="mt-6 text-4xl leading-[1.12] font-bold text-balance sm:text-5xl">{n.title[locale]}</h2>
          </div>
          <div>
            <p className="text-lg t-muted">{n.body[locale]}</p>
            {link}
          </div>
        </div>
        <ul>
          {networkCities.map((c, i) => (
            <li key={c.slug} className="relative h-36 overflow-hidden bg-[var(--slot-bg)] sm:h-44">
              <Image
                src={c.img}
                alt=""
                fill
                unoptimized
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: `50% ${20 + i * 12}%` }}
              />
              <div aria-hidden className="absolute inset-0 bg-black/45" />
              <div className="l-container relative flex h-full items-center justify-between text-white">
                <span className="text-4xl font-bold tracking-tight sm:text-6xl">{c.name[locale]}</span>
                <span className="text-sm text-white/80">{String(i + 1).padStart(2, "0")} / {String(networkCities.length).padStart(2, "0")}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // K. 跑马灯：城市卡片横向循环滚动，鼠标移入暂停
  const loop = [...networkCities, ...networkCities];
  return (
    <div>
      <div className="l-container mx-auto max-w-3xl text-center">
        {label}
        <h2 className="mt-6 text-4xl leading-[1.12] font-bold text-balance sm:text-6xl">{n.title[locale]}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg t-muted">{n.body[locale]}</p>
      </div>
      <div className="group mt-14 overflow-hidden">
        <ul className="net-marquee flex w-max gap-4 pr-4 group-hover:[animation-play-state:paused]">
          {loop.map((c, i) => (
            <li key={`${c.slug}-${i}`} className="relative aspect-[3/4] w-[220px] shrink-0 overflow-hidden rounded-[20px] bg-[var(--slot-bg)] sm:w-[280px]">
              <CityImg c={c} sizes="300px" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-5 text-sm font-semibold tracking-[0.15em] text-white uppercase">{c.name[locale]}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 text-center">{link}</div>
    </div>
  );
}
