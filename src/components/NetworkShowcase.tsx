import Image from "next/image";
import Link from "next/link";
import { networkCities, networkCopy, TIP_LINE } from "@/data/networkCities";
import type { Locale } from "@/lib/i18n";

/**
 * 首页 Our Network：整幅横向版面。
 * 左侧是磨砂玻璃面板（标签 + 标题 + 副标题），右侧是七个城市竖条（第一条是纽约）（紧贴无间隙、无磨砂），
 * 每条底部是城市名和一条短横线。桌面鼠标移入的那条变宽；手机上面板在上、城市条竖排在下。
 */
export default function NetworkShowcase({
  locale,
  href,
  cta,
}: {
  locale: Locale;
  href: string;
  cta: string;
}) {
  return (
    <div className="flex flex-col lg:h-[min(86vh,720px)] lg:min-h-[560px] lg:flex-row">
      {/* 左：磨砂面板 */}
      <div className="relative flex shrink-0 items-center overflow-hidden px-[var(--space-gutter)] py-16 lg:w-[38%] lg:py-0 lg:pr-12 lg:pl-[max(var(--space-gutter),calc((100vw-var(--space-container))/2+var(--space-gutter)))]">
        <Image
          src={networkCopy.bg}
          alt=""
          fill
          sizes="40vw"
          className="scale-125 object-cover blur-3xl"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/45 to-white/25 backdrop-blur-2xl"
        />
        <div className="relative max-w-md">
          <p className="flex items-center gap-5 text-sm font-medium tracking-[0.35em] text-[var(--foreground)]">
            {networkCopy.label[locale]}
            <span aria-hidden className="block h-px w-16 bg-[var(--foreground)]/40" />
          </p>
          <h2 className="mt-8 text-4xl leading-[1.15] font-medium text-balance text-[var(--foreground)] sm:text-5xl">
            {networkCopy.title[locale]}
          </h2>
          <p className="mt-8 max-w-sm text-lg leading-relaxed text-[var(--foreground)]/75">
            {networkCopy.body[locale]}
          </p>
          <Link
            href={href}
            className="mt-8 inline-block font-medium underline underline-offset-4 hover:opacity-70"
          >
            {cta} →
          </Link>
        </div>
      </div>

      {/* 右：城市竖条，细线分隔 */}
      <ul className="net-strips flex min-w-0 flex-1 flex-col lg:flex-row">
        {networkCities.map((c) => (
          <li
            key={c.slug}
            className="net-strip relative h-32 overflow-hidden bg-[var(--slot-bg)] lg:h-auto"
          >
            {/* 图片：桌面按建筑中心定位，高的建筑始终位于卡片正中；展开时向两侧露出更多。
                高度取 max(125%, 够盖住展开宽度所需的高度)，底部多出的部分被裁掉。 */}
            <Image
              src={c.img}
              alt=""
              width={c.w}
              height={c.h}
              unoptimized
              loading="eager"
              className="net-img absolute inset-0 h-full w-full object-cover lg:inset-auto lg:top-[calc(var(--T)*1%_-_var(--t)*var(--h))] lg:left-1/2 lg:h-[var(--h)] lg:w-auto lg:max-w-none lg:[transform:translateX(calc(var(--p)*-100%))]"
              style={
                {
                  "--p": c.p,
                  // 高度 = max(125%, 够盖住展开宽度所需的高度)
                  "--h": `max(125%, calc(17.8vw / ${(Math.min(c.p, 1 - c.p) * (c.w / c.h)).toFixed(4)}))`,
                  // 顶部偏移 = T% − t × 图高：带 tip 的卡片把塔尖压到 TIP_LINE%，否则按 y 上移
                  "--T": c.tip != null ? TIP_LINE : -(c.y ?? 0),
                  "--t": c.tip ?? 0,
                } as React.CSSProperties
              }
            />
            {/* 底部渐变模糊（progressive blur）：6 层模糊半径逐级加倍、各自用遮罩只显现一段，
                从上到下模糊平滑增强，没有可见的边缘；样式见 globals.css 的 .net-glass */}
            <div aria-hidden className="net-glass">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            {/* 城市名：位于渐变模糊玻璃区的正中 */}
            <div className="absolute inset-x-0 bottom-0 flex h-[14%] min-h-[56px] flex-col items-center justify-center px-1 text-center text-white">
              <p className="net-label font-medium uppercase drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]">
                {c.name[locale]}
              </p>
              <span aria-hidden className="net-dash mt-3 block h-px bg-white/70" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
