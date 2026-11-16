import Image from "next/image";
import Link from "next/link";
import { servicesByDisplay } from "@/data/services";
import type { Dictionary, Locale } from "@/lib/i18n";

// 每条业务线的配图与分类标签（图片暂用站内现有图，之后可替换）
const meta: Record<
  string,
  { img: string; tags: { zh: string; en: string }[] }
> = {
  tsi: {
    img: "/images/showcase-tsi.webp",
    tags: [
      { zh: "牙科", en: "Dental" },
      { zh: "洗牙", en: "Cleaning" },
      { zh: "矫正", en: "Braces" },
    ],
  },
  aura: {
    img: "/images/showcase-aura.webp",
    tags: [
      { zh: "医美", en: "Med Spa" },
      { zh: "护肤", en: "Skincare" },
      { zh: "美丽", en: "Beauty" },
    ],
  },
  liuming: {
    img: "/images/showcase-campus.webp",
    tags: [
      { zh: "留学", en: "Study" },
      { zh: "申请", en: "Apply" },
      { zh: "教育", en: "Education" },
    ],
  },
  "luminary-career": {
    img: "/images/showcase-event.jpg",
    tags: [
      { zh: "求职", en: "Jobs" },
      { zh: "实习", en: "Intern" },
      { zh: "职业", en: "Career" },
    ],
  },
  express: {
    img: "/images/showcase-moving.webp",
    tags: [
      { zh: "快递", en: "Shipping" },
      { zh: "中美物流", en: "US-China" },
      { zh: "仓储", en: "Storage" },
    ],
  },
  uswoo: {
    img: "/images/showcase-home.webp",
    tags: [
      { zh: "租房", en: "Rentals" },
      { zh: "找房", en: "Housing" },
      { zh: "搬家", en: "Moving" },
    ],
  },
  celehome: {
    img: "/images/biz-realestate.webp",
    tags: [
      { zh: "买房", en: "Buy Home" },
      { zh: "豪宅", en: "Luxury" },
      { zh: "高净值", en: "HNW" },
    ],
  },
  insurance: {
    img: "/images/biz-health.webp",
    tags: [
      { zh: "保险", en: "Insurance" },
      { zh: "医疗", en: "Health" },
      { zh: "保障", en: "Safety" },
    ],
  },
  wukong: {
    img: "/images/showcase-party.webp",
    tags: [
      { zh: "传媒", en: "Media" },
      { zh: "内容", en: "Content" },
      { zh: "品牌", en: "Brand" },
    ],
  },
  foundation: {
    img: "/images/biz-community.webp",
    tags: [
      { zh: "公益", en: "Charity" },
      { zh: "社群", en: "Community" },
      { zh: "留学生", en: "Students" },
    ],
  },
};

// 展示顺序在 src/data/services.ts 的 servicesByDisplay 里统一维护
const sorted = servicesByDisplay;

export default function ServiceGrid({
  locale,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {sorted.map((s) => {
        const m = meta[s.slug];
        return (
          <Link
            key={s.slug}
            href={`/${locale}/services/${s.slug}`}
            className="group relative block aspect-square overflow-hidden rounded-[18px] bg-[var(--slot-bg)]"
          >
            {m && (
              <Image
                src={m.img}
                alt=""
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            {/* 底部渐变，保证文字清晰 */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
            />
            <span
              aria-hidden
              className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white text-sm text-[#282f83] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              ↗
            </span>
            <div className="absolute inset-x-0 bottom-0 p-4 text-white">
              <h3 className="text-lg leading-tight font-semibold">
                {s.name[locale]}
              </h3>
              <ul className="mt-2 flex flex-nowrap gap-1">
                {m?.tags.map((tag) => (
                  <li
                    key={tag.en}
                    className="rounded-full bg-white/20 px-2 py-0.5 text-[0.65rem] font-medium whitespace-nowrap backdrop-blur-sm"
                  >
                    {tag[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
