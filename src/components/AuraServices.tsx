import Image from "next/image";
import AuraServicesTabs from "@/components/AuraServicesTabs";
import ImageSlot from "@/components/ImageSlot";
import { aura, auraServiceImages } from "@/data/auraPage";
import type { Dictionary, Locale } from "@/lib/i18n";

export type AuraServicesLayout =
  | "cards"
  | "rows"
  | "overlay"
  | "bento"
  | "accordion"
  | "arches"
  | "list"
  | "tabs"
  | "scroll"
  | "splitcards";

const num = (i: number) => String(i + 1).padStart(2, "0");

function Pic({ i, className, sizes }: { i: number; className: string; sizes: string }) {
  const src = auraServiceImages[i];
  return (
    <div className={`relative overflow-hidden bg-[var(--slot-bg)] ${className}`}>
      {src && (
        <Image
          src={src}
          alt={aura.services.items[i].title.en}
          fill
          sizes={sizes}
          className="object-cover"
        />
      )}
    </div>
  );
}

/** Aura「Our Services」区块的多种排版：cards 四卡 / rows 左右交替 / overlay 2×2 叠字 / bento 拼贴 */
export default function AuraServices({
  locale,
  t,
  layout,
}: {
  locale: Locale;
  t: Dictionary;
  layout: AuraServicesLayout;
}) {
  const items = aura.services.items;

  if (layout === "rows") {
    // 左右交替的大图文行
    return (
      <div className="mt-14 grid gap-16 sm:gap-24">
        {items.map((s, i) => (
          <div
            key={i}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
          >
            <Pic
              i={i}
              sizes="(min-width: 768px) 560px, 100vw"
              className={`aspect-[4/3] rounded-[2rem] ${i % 2 ? "md:order-2" : ""}`}
            />
            <div className={i % 2 ? "md:order-1" : ""}>
              <p className="text-sm text-[#9a7b63]">{num(i)}</p>
              <h3 className="mt-3 text-3xl font-bold sm:text-4xl">{s.title[locale]}</h3>
              <p className="mt-4 max-w-md text-lg text-ink-soft">{s.desc[locale]}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (layout === "overlay") {
    // 2×2 大图，文字压在图片底部
    return (
      <ul className="mt-12 grid gap-5 sm:grid-cols-2">
        {items.map((s, i) => (
          <li key={i} className="relative">
            <Pic i={i} sizes="(min-width: 640px) 560px, 100vw" className="aspect-[4/3] rounded-[1.75rem]" />
            <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-sm text-white/70">{num(i)}</p>
              <h3 className="mt-1 text-2xl font-bold">{s.title[locale]}</h3>
              <p className="mt-2 max-w-md text-white/85">{s.desc[locale]}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  if (layout === "bento") {
    // 拼贴：左侧一张高图，右侧上两张、下一张横幅
    const spans = [
      "lg:row-span-2 lg:col-span-1 min-h-[360px]",
      "min-h-[240px]",
      "min-h-[240px]",
      "lg:col-span-2 min-h-[240px]",
    ];
    return (
      <ul className="mt-12 grid gap-5 lg:grid-cols-3 lg:grid-rows-[repeat(2,minmax(260px,1fr))]">
        {items.map((s, i) => (
          <li key={i} className={`relative overflow-hidden rounded-[1.75rem] bg-[var(--slot-bg)] ${spans[i]}`}>
            {auraServiceImages[i] && (
              <Image
                src={auraServiceImages[i]}
                alt={s.title.en}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-sm text-white/70">{num(i)}</p>
              <h3 className="mt-1 text-xl font-bold sm:text-2xl">{s.title[locale]}</h3>
              <p className="mt-1.5 max-w-sm text-sm text-white/85 sm:text-base">{s.desc[locale]}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  if (layout === "accordion") {
    // 竖条手风琴：鼠标移到哪条，哪条展开显示说明（纯 CSS）
    return (
      <ul className="mt-12 flex h-[520px] flex-col gap-3 sm:flex-row">
        {items.map((s, i) => (
          <li
            key={i}
            className="group relative min-h-[110px] flex-1 overflow-hidden rounded-[1.75rem] bg-[var(--slot-bg)] transition-[flex-grow] duration-500 sm:hover:flex-[3.2]"
          >
            {auraServiceImages[i] && (
              <Image
                src={auraServiceImages[i]}
                alt={s.title.en}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-sm text-white/70">{num(i)}</p>
              <h3 className="mt-1 text-xl font-bold sm:text-2xl">{s.title[locale]}</h3>
              <p className="mt-2 max-w-xs text-white/85 sm:max-h-0 sm:overflow-hidden sm:opacity-0 sm:transition-all sm:duration-500 sm:group-hover:max-h-32 sm:group-hover:opacity-100">
                {s.desc[locale]}
              </p>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  if (layout === "arches") {
    // 方形图片，错落排布
    return (
      <ul className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
        {items.map((s, i) => (
          <li key={i} className={`text-center ${i % 2 ? "lg:mt-16" : ""}`}>
            <Pic
              i={i}
              sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 100vw"
              className="aspect-square rounded-[1.25rem]"
            />
            <p className="mt-6 text-sm text-[#9a7b63]">{num(i)}</p>
            <h3 className="mt-1 text-xl font-semibold">{s.title[locale]}</h3>
            <p className="mx-auto mt-2 max-w-[16rem] text-ink-soft">{s.desc[locale]}</p>
          </li>
        ))}
      </ul>
    );
  }

  if (layout === "list") {
    // 大字号文字列表，右侧圆形小图
    return (
      <ul className="mt-12 border-t border-[#b07e6a]/30">
        {items.map((s, i) => (
          <li
            key={i}
            className="grid items-center gap-4 border-b border-[#b07e6a]/30 py-8 sm:grid-cols-[4rem_1fr_auto] sm:gap-8 sm:py-10"
          >
            <p className="text-sm text-[#9a7b63]">{num(i)}</p>
            <div>
              <h3 className="text-3xl font-bold sm:text-5xl">{s.title[locale]}</h3>
              <p className="mt-3 max-w-xl text-lg text-ink-soft">{s.desc[locale]}</p>
            </div>
            <Pic
              i={i}
              sizes="160px"
              className="order-first h-28 w-28 rounded-full sm:order-none sm:h-40 sm:w-40"
            />
          </li>
        ))}
      </ul>
    );
  }

  if (layout === "tabs") {
    return <AuraServicesTabs locale={locale} />;
  }

  if (layout === "scroll") {
    // 横向滑动卡片（scroll-snap），手机上可左右滑
    return (
      <ul className="-mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((s, i) => (
          <li key={i} className="w-[78%] shrink-0 snap-start sm:w-[44%] lg:w-[31%]">
            <Pic i={i} sizes="(min-width: 1024px) 380px, 80vw" className="aspect-[4/5] rounded-[1.75rem]" />
            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-sm text-[#9a7b63]">{num(i)}</span>
              <h3 className="text-2xl font-bold">{s.title[locale]}</h3>
            </div>
            <p className="mt-2 text-ink-soft">{s.desc[locale]}</p>
          </li>
        ))}
      </ul>
    );
  }

  if (layout === "splitcards") {
    // 2×2 白色横向卡片：左图右文
    return (
      <ul className="mt-12 grid gap-5 lg:grid-cols-2">
        {items.map((s, i) => (
          <li
            key={i}
            className="grid overflow-hidden rounded-[1.75rem] bg-white shadow-sm sm:grid-cols-[0.9fr_1fr]"
          >
            <Pic i={i} sizes="(min-width: 640px) 260px, 100vw" className="aspect-[4/3] sm:aspect-auto sm:min-h-[260px]" />
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="text-sm text-[#9a7b63]">{num(i)}</p>
              <h3 className="mt-2 text-2xl font-bold">{s.title[locale]}</h3>
              <p className="mt-3 text-ink-soft">{s.desc[locale]}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  // cards：四列图文卡片（当前使用）
  return (
    <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s, i) => (
        <li key={i}>
          <ImageSlot
            src={auraServiceImages[i] ?? ""}
            alt={s.title.en}
            t={t}
            sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 100vw"
            className="aspect-[4/5] rounded-[1.5rem]"
          />
          <p className="mt-5 text-sm text-[#9a7b63]">{num(i)}</p>
          <h3 className="mt-1 text-xl font-semibold">{s.title[locale]}</h3>
          <p className="mt-2 text-ink-soft">{s.desc[locale]}</p>
        </li>
      ))}
    </ul>
  );
}
