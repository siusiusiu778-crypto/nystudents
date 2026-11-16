import ImageSlot from "@/components/ImageSlot";
import { homeImages } from "@/data/homeImages";
import type { Dictionary } from "@/lib/i18n";

export type BizLayout =
  | "rows"
  | "overlay"
  | "panels"
  | "list"
  | "bento"
  | "scroll"
  | "stack"
  | "chips";

type Group = Dictionary["home"]["businesses"]["groups"][number];

function brandsOf(g: Group, fallback: string) {
  return ("brandsLabel" in g && g.brandsLabel) || fallback;
}

export default function BusinessLayouts({
  t,
  layout,
  part = 0,
}: {
  t: Dictionary;
  layout: BizLayout;
  /** 仅 chips 版：显示第几排（0 或 1） */
  part?: 0 | 1;
}) {
  const b = t.home.businesses;
  const groups = b.groups as Group[];
  const img = (i: number) => homeImages.businesses[i]?.src ?? "";
  const num = (i: number) => String(i + 1).padStart(2, "0");

  // A. 左右交替的大横幅行
  if (layout === "rows") {
    return (
      <div className="mt-[var(--space-block-gap)] grid gap-14 lg:gap-20">
        {groups.map((g, i) => (
          <div
            key={g.title}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
          >
            <ImageSlot
              src={img(i)}
              alt={g.title}
              t={t}
              className={`aspect-[4/3] rounded-[20px] ${i % 2 ? "md:order-2" : ""}`}
            />
            <div>
              <p className="text-sm font-medium t-faint">{num(i)}</p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{g.title}</h3>
              <p className="mt-4 text-lg t-muted">{g.body}</p>
              <p className="mt-6 border-t border-line pt-4 text-sm">
                <span className="t-faint">{brandsOf(g, b.brandsLabel)}:</span>{" "}
                <span className="font-medium">{g.brands}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // B. 2×2 整图卡片，文字叠在图上
  if (layout === "overlay") {
    return (
      <div className="mt-[var(--space-block-gap)] grid gap-5 md:grid-cols-2">
        {groups.map((g, i) => (
          <div
            key={g.title}
            className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[var(--slot-bg)] sm:aspect-[16/11]"
          >
            <ImageSlot
              src={img(i)}
              alt={g.title}
              t={t}
              className="absolute! inset-0 h-full"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
            />
            <span className="absolute top-5 left-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#303038]">
              {num(i)}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <h3 className="text-2xl font-bold">{g.title}</h3>
              <p className="mt-2 max-w-md text-sm text-white/85 sm:text-base">
                {g.body}
              </p>
              <p className="mt-4 text-xs text-white/70">{g.brands}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // C. 竖条展开：四条竖向图片，悬停的一条展开显示文字（手机上改为竖排）
  if (layout === "panels") {
    return (
      <div className="group/panels mt-[var(--space-block-gap)] flex flex-col gap-3 lg:h-[560px] lg:flex-row">
        {groups.map((g, i) => (
          <div
            key={g.title}
            tabIndex={0}
            className="group relative min-h-[260px] flex-1 overflow-hidden rounded-[20px] bg-[var(--slot-bg)] transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:min-h-0 lg:hover:flex-[3] lg:focus-within:flex-[3] lg:focus:flex-[3]"
          >
            <ImageSlot
              src={img(i)}
              alt={g.title}
              t={t}
              className="absolute! inset-0 h-full"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-xs font-medium text-white/70">{num(i)}</p>
              <h3 className="mt-1 text-xl font-bold lg:whitespace-nowrap">
                {g.title}
              </h3>
              <div className="grid grid-rows-[1fr] transition-all duration-500 lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] lg:group-focus:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="mt-3 max-w-sm text-sm text-white/85">
                    {g.body}
                  </p>
                  <p className="mt-3 text-xs text-white/70">{g.brands}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // D. 编辑式列表：大编号 + 标题 + 描述，右侧小缩略图，分隔线
  if (layout === "list")
    return (
      <ul className="mt-[var(--space-block-gap)] border-t border-line">
        {groups.map((g, i) => (
          <li
            key={g.title}
            className="grid items-center gap-6 border-b border-line py-8 md:grid-cols-[5rem_1.1fr_1.4fr_11rem] md:gap-10"
          >
            <p className="text-4xl font-bold t-faint sm:text-5xl">{num(i)}</p>
            <h3 className="text-2xl font-bold">{g.title}</h3>
            <div>
              <p className="t-muted">{g.body}</p>
              <p className="mt-3 text-sm font-medium">{g.brands}</p>
            </div>
            <ImageSlot
              src={img(i)}
              alt={g.title}
              t={t}
              className="aspect-[4/3] rounded-[14px] md:justify-self-end md:w-44"
            />
          </li>
        ))}
      </ul>
    );

  // E. 拼贴：左侧一张高图跨两行，右侧三张
  if (layout === "bento") {
    const area = ["lg:row-span-2", "", "", "lg:col-span-2"];
    return (
      <div className="mt-[var(--space-block-gap)] grid gap-5 lg:grid-cols-3 lg:grid-rows-[300px_300px_260px]">
        {groups.map((g, i) => (
          <div
            key={g.title}
            className={`relative min-h-[260px] overflow-hidden rounded-[20px] bg-[var(--slot-bg)] ${area[i]}`}
          >
            <ImageSlot
              src={img(i)}
              alt={g.title}
              t={t}
              className="absolute! inset-0 h-full"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-xs text-white/70">{num(i)}</p>
              <h3 className="mt-1 text-xl font-bold sm:text-2xl">{g.title}</h3>
              <p className="mt-2 max-w-md text-sm text-white/85">{g.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // F. 横向滑动：卡片横排，可左右滑动
  if (layout === "scroll") {
    return (
      <div className="-mx-[var(--space-gutter)] mt-[var(--space-block-gap)] flex snap-x snap-mandatory gap-5 overflow-x-auto px-[var(--space-gutter)] pb-4">
        {groups.map((g, i) => (
          <div
            key={g.title}
            className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
          >
            <ImageSlot
              src={img(i)}
              alt={g.title}
              t={t}
              className="aspect-[3/4] rounded-[20px]"
            />
            <p className="mt-5 text-sm font-medium t-faint">{num(i)}</p>
            <h3 className="mt-1 text-xl font-bold">{g.title}</h3>
            <p className="mt-2 t-muted">{g.body}</p>
            <p className="mt-3 text-sm font-medium">{g.brands}</p>
          </div>
        ))}
      </div>
    );
  }

  // G. 层叠：滚动时卡片依次叠在上一张上面
  if (layout === "stack") {
    return (
      <div className="mt-[var(--space-block-gap)] grid gap-6">
        {groups.map((g, i) => (
          <div
            key={g.title}
            style={{ top: "4.9rem" }}
            className="sticky mx-[calc(50%-50vw)] grid overflow-hidden rounded-tr-[32px] border-y border-line bg-white md:grid-cols-2"
          >
            <div className="flex flex-col justify-between py-8 pr-8 pl-[max(var(--space-gutter),calc((100vw-var(--space-container))/2+var(--space-gutter)))] sm:py-12 md:pr-12">
              <p className="text-5xl font-bold t-faint">{num(i)}</p>
              <div className="mt-10">
                <h3 className="text-2xl font-bold sm:text-3xl">{g.title}</h3>
                <p className="mt-3 t-muted">{g.body}</p>
                <p className="mt-5 text-sm font-medium">{g.brands}</p>
              </div>
            </div>
            <ImageSlot
              src={img(i)}
              alt={g.title}
              t={t}
              className="aspect-[4/3] md:aspect-auto md:min-h-[480px]"
            />
          </div>
        ))}
      </div>
    );
  }

  // H. 色块卡片：文字为主，品牌做成标签，图片放在卡片底部。
  // part 选择显示第几排（每排两张）：首页把两排放在两个 section 里，后一个 section 向上盖住前一个。
  const row = groups.slice(part * 2, part * 2 + 2);
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:min-h-[531px]">
      {row.map((g, k) => {
        const i = part * 2 + k;
        return (
          <div
            key={g.title}
            className="flex h-full flex-col rounded-[24px] border border-line bg-white p-7 sm:p-9"
          >
            <p className="text-sm font-medium t-faint">{num(i)}</p>
            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{g.title}</h3>
            <p className="mt-3 t-muted">{g.body}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.brands.split(" · ").map((n) => (
                <li
                  key={n}
                  className="rounded-full border border-line bg-white/70 px-3 py-1 text-xs font-medium"
                >
                  {n}
                </li>
              ))}
            </ul>
            <ImageSlot
              src={img(i)}
              alt={g.title}
              t={t}
              className="mt-7 min-h-[255px] flex-1 rounded-[14px]"
            />
          </div>
        );
      })}
    </div>
  );
}
