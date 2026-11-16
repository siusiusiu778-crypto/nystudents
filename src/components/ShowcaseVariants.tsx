import Image from "next/image";
import Link from "next/link";
import StartOnView from "@/components/StartOnView";
import { homeImages } from "@/data/homeImages";

export type ShowcaseVariant = "bento" | "columns" | "skyline" | "mosaic" | "rows" | "stack" | "circles" | "accordion" | "fade" | "split";

type Copy = { label: string; title: string; body: string; cta: string };

const pics = homeImages.showcase.map((b) => b.src).filter(Boolean);
const at = (i: number) => pics[i % pics.length];

function Pic({ i, className = "", sizes = "400px" }: { i: number; className?: string; sizes?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[var(--slot-bg)] ${className}`}>
      <Image src={at(i)} alt="" fill sizes={sizes} className="object-cover" />
    </div>
  );
}

const btn = "btn-primary inline-block rounded-sm px-6 py-3 font-medium hover:opacity-90";

export default function ShowcaseVariants({
  copy,
  href,
  variant,
}: {
  copy: Copy;
  href: string;
  variant: ShowcaseVariant;
}) {
  const cta = (
    <Link href={href} className={btn}>
      {copy.cta} →
    </Link>
  );

  // 1. 拼贴：标题在上，下面一组大小不一的图 + 一块说明卡
  if (variant === "bento") {
    return (
      <div className="l-container">
        <h2 className="max-w-3xl text-4xl leading-[1.1] font-bold text-balance sm:text-6xl">{copy.title}</h2>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-[240px_240px_240px]">
          <Pic i={0} className="col-span-2 row-span-2 min-h-[260px] rounded-[20px]" sizes="600px" />
          <Pic i={1} className="min-h-[180px] rounded-[20px]" />
          <Pic i={2} className="min-h-[180px] rounded-[20px]" />
          <div className="col-span-2 flex flex-col justify-center rounded-[20px] bg-[var(--surface-white)] p-7 lg:col-span-2">
            <p className="text-lg t-muted">{copy.body}</p>
            <div className="mt-5">{cta}</div>
          </div>
          <Pic i={3} className="min-h-[180px] rounded-[20px]" />
          <Pic i={4} className="min-h-[180px] rounded-[20px]" />
          <Pic i={5} className="col-span-2 min-h-[180px] rounded-[20px]" sizes="600px" />
        </div>
      </div>
    );
  }

  // 2. 左文右双列滚动：右侧两列图片一上一下缓慢循环滚动，上下渐隐
  if (variant === "columns") {
    // 两列各用不同的图（0-3 / 4-6），互不重复；每列各复制一份以便无缝循环
    const setA = [0, 1, 2, 3];
    const setB = [4, 5, 6];
    const colA = [...setA, ...setA];
    const colB = [...setB, ...setB];
    return (
      <div className="l-container grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="pt-14 lg:pt-0">
          <p className="text-sm font-medium tracking-[0.35em] t-faint">{copy.label.toUpperCase()}</p>
          <h2 className="mt-6 text-4xl leading-[1.1] font-bold text-balance sm:text-6xl">{copy.title}</h2>
          <p className="mt-6 max-w-md text-lg t-muted">{copy.body}</p>
          <div className="mt-8">{cta}</div>
        </div>
        <StartOnView className="grid h-[640px] grid-cols-2 gap-4 overflow-hidden lg:h-[720px]">
          {[colA, colB].map((col, k) => (
            <div key={k} className="overflow-hidden">
              <div className={`flex flex-col gap-4 ${k ? "show-col-down" : "show-col-up"}`} style={{ animationDuration: k ? "28s" : "38s" }}>
                {col.map((p, j) => (
                  <Pic key={j} i={p} className="aspect-[3/4] shrink-0 rounded-[18px]" />
                ))}
              </div>
            </div>
          ))}
        </StartOnView>
      </div>
    );
  }

  // 3. 天际线：标题居中，一排高低不一的竖图底部对齐，像城市天际线
  if (variant === "skyline") {
    const h = ["h-[260px]", "h-[340px]", "h-[300px]", "h-[400px]", "h-[320px]", "h-[360px]", "h-[280px]"];
    return (
      <div className="l-container text-center">
        <h2 className="mx-auto max-w-3xl text-4xl leading-[1.1] font-bold text-balance sm:text-6xl">{copy.title}</h2>
        <div className="mt-14 flex items-end justify-center gap-3 overflow-hidden">
          {Array.from({ length: 7 }, (_, i) => (
            <Pic
              key={i}
              i={i}
              className={`${h[i]} min-w-0 flex-1 rounded-t-[999px] rounded-b-[14px] ${i > 4 ? "hidden sm:block" : ""} ${i > 5 ? "sm:hidden lg:block" : ""}`}
              sizes="200px"
            />
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-xl t-muted">{copy.body}</p>
        <div className="mt-6">{cta}</div>
      </div>
    );
  }

  // 5. 双行反向跑马灯：标题居中，两行整宽图片一左一右循环滚动
  if (variant === "rows") {
    const row = [0, 1, 2, 3, 4, 5, 6];
    const loop = [...row, ...row];
    return (
      <div>
        <div className="l-container text-center">
          <h2 className="mx-auto max-w-3xl text-4xl leading-[1.1] font-bold text-balance sm:text-6xl">{copy.title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg t-muted">{copy.body}</p>
        </div>
        <div className="mt-14 grid gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          {[0, 1].map((k) => (
            <ul key={k} className={`flex w-max gap-4 pr-4 ${k ? "show-row-right" : "net-marquee"}`}>
              {loop.map((p, j) => (
                <li key={j} className="shrink-0">
                  <Pic i={k ? p + 3 : p} className="h-[180px] w-[270px] rounded-[18px] sm:h-[220px] sm:w-[330px]" sizes="340px" />
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-12 text-center">{cta}</div>
      </div>
    );
  }

  // 6. 左侧固定、右侧大图依次滚过
  if (variant === "stack") {
    return (
      <div className="l-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-medium tracking-[0.35em] t-faint">{copy.label.toUpperCase()}</p>
          <h2 className="mt-6 text-4xl leading-[1.1] font-bold text-balance sm:text-5xl">{copy.title}</h2>
          <p className="mt-6 max-w-md text-lg t-muted">{copy.body}</p>
          <div className="mt-8">{cta}</div>
        </div>
        <div className="grid gap-6">
          {[0, 4, 2, 5].map((p, i) => (
            <Pic key={i} i={p} className="aspect-[16/10] rounded-[24px]" sizes="700px" />
          ))}
        </div>
      </div>
    );
  }

  // 7. 圆形群：大小不一的圆形图片相互叠压成一团，文字在左
  if (variant === "circles") {
    const c = [
      { l: 2, t: 14, s: 44, i: 0 },
      { l: 38, t: 0, s: 34, i: 1 },
      { l: 52, t: 30, s: 44, i: 2 },
      { l: 10, t: 54, s: 34, i: 3 },
      { l: 42, t: 66, s: 28, i: 4 },
      { l: 78, t: 4, s: 20, i: 5 },
      { l: 76, t: 74, s: 22, i: 6 },
    ];
    return (
      <div className="l-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-sm font-medium tracking-[0.35em] t-faint">{copy.label.toUpperCase()}</p>
          <h2 className="mt-6 text-4xl leading-[1.1] font-bold text-balance sm:text-6xl">{copy.title}</h2>
          <p className="mt-6 max-w-md text-lg t-muted">{copy.body}</p>
          <div className="mt-8">{cta}</div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[560px]">
          {c.map((x) => (
            <div
              key={x.i}
              className="absolute overflow-hidden rounded-full border-[6px] border-white bg-[var(--slot-bg)] shadow-[0_12px_30px_rgba(0,0,0,0.14)]"
              style={{ left: `${x.l}%`, top: `${x.t}%`, width: `${x.s}%`, height: `${x.s}%` }}
            >
              <Image src={at(x.i)} alt="" fill sizes="300px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 8. 竖条手风琴：标题居中，一排窄竖条，鼠标移上去的那条展开
  if (variant === "accordion") {
    return (
      <div className="l-container text-center">
        <h2 className="mx-auto max-w-3xl text-4xl leading-[1.1] font-bold text-balance sm:text-6xl">{copy.title}</h2>
        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:flex lg:h-[460px]">
          {Array.from({ length: 7 }, (_, i) => (
            <li
              key={i}
              className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-[var(--slot-bg)] transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:aspect-auto lg:flex-1 lg:hover:flex-[4]"
            >
              <Image src={at(i)} alt="" fill sizes="(min-width: 1024px) 600px, 50vw" className="object-cover" />
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-xl t-muted">{copy.body}</p>
        <div className="mt-6">{cta}</div>
      </div>
    );
  }

  // 9. 大图渐变轮播：一张圆角大图在七张图之间自动淡入淡出，标题压在图上
  if (variant === "fade") {
    return (
      <div className="l-container">
        <div className="relative h-[480px] overflow-hidden rounded-[28px] bg-[var(--slot-bg)] sm:h-[560px]">
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i} className="show-fade absolute inset-0" style={{ animationDelay: `${i * 4}s` }}>
              <Image src={at(i)} alt="" fill sizes="1200px" className="object-cover" />
            </div>
          ))}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 grid items-end gap-6 p-8 text-white sm:p-12 md:grid-cols-[1.2fr_1fr]">
            <h2 className="text-4xl leading-[1.1] font-bold text-balance sm:text-6xl">{copy.title}</h2>
            <div>
              <p className="text-white/85">{copy.body}</p>
              <Link href={href} className="mt-5 inline-block rounded-sm bg-white px-6 py-3 font-medium text-[#303038] hover:opacity-90">
                {copy.cta} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 10. 半屏拼图：左半屏四张图无缝拼合并铺满到页面左边缘，右半边是文字
  if (variant === "split") {
    return (
      <div className="grid lg:grid-cols-2">
        <div className="grid grid-cols-2 grid-rows-2">
          {[0, 1, 2, 3].map((i) => (
            <Pic key={i} i={i} className="aspect-square" sizes="400px" />
          ))}
        </div>
        <div className="flex items-center px-[var(--space-gutter)] py-14 lg:py-20 lg:pr-[max(var(--space-gutter),calc((100vw-var(--space-container))/2+var(--space-gutter)))] lg:pl-20">
          <div className="max-w-md">
            <p className="text-sm font-medium tracking-[0.35em] t-faint">{copy.label.toUpperCase()}</p>
            <h2 className="mt-6 text-4xl leading-[1.1] font-bold text-balance sm:text-5xl">{copy.title}</h2>
            <p className="mt-6 text-lg t-muted">{copy.body}</p>
            <div className="mt-8">{cta}</div>
          </div>
        </div>
      </div>
    );
  }

  // 4. 中心说明格：四列图片墙，正中一格放标题、说明和按钮
  return (
    <div className="l-container">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:grid-rows-[230px_230px_230px]">
        <Pic i={0} className="aspect-square rounded-[18px] lg:aspect-auto" />
        <Pic i={1} className="aspect-square rounded-[18px] lg:aspect-auto" />
        <Pic i={2} className="aspect-square rounded-[18px] lg:aspect-auto" />
        <Pic i={3} className="aspect-square rounded-[18px] lg:aspect-auto" />
        <div className="order-first col-span-2 flex flex-col items-center justify-center rounded-[18px] bg-[var(--surface-dark)] p-8 text-center text-white lg:order-none lg:col-start-2 lg:row-start-2 lg:row-span-1">
          <h2 className="text-2xl leading-[1.15] font-bold text-balance sm:text-3xl">{copy.title}</h2>
          <p className="mt-3 text-sm text-white/70">{copy.body}</p>
          <Link href={href} className="mt-5 inline-block rounded-sm bg-white px-5 py-2.5 text-sm font-medium text-[#303038] hover:opacity-90">
            {copy.cta} →
          </Link>
        </div>
        <Pic i={4} className="aspect-square rounded-[18px] lg:col-start-1 lg:row-start-2 lg:aspect-auto" />
        <Pic i={5} className="aspect-square rounded-[18px] lg:col-start-4 lg:row-start-2 lg:aspect-auto" />
        <Pic i={6} className="aspect-square rounded-[18px] lg:aspect-auto" />
        <Pic i={2} className="aspect-square rounded-[18px] lg:aspect-auto" />
        <Pic i={0} className="aspect-square rounded-[18px] lg:aspect-auto" />
        <Pic i={4} className="aspect-square rounded-[18px] lg:aspect-auto" />
      </div>
    </div>
  );
}
