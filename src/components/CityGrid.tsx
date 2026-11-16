import Image from "next/image";
import { cities } from "@/data/cities";
import type { Locale } from "@/lib/i18n";

// 城市配图与标签（图片暂用站内现有图，之后可替换）
const meta: Record<
  string,
  { img: string; tags: { zh: string; en: string }[] }
> = {
  ny: {
    img: "/images/story-washington-square.webp",
    tags: [
      { zh: "纽约", en: "New York" },
      { zh: "留学生", en: "Students" },
      { zh: "总部", en: "HQ" },
    ],
  },
  boston: {
    img: "/images/showcase-campus.webp",
    tags: [
      { zh: "波士顿", en: "Boston" },
      { zh: "留学生", en: "Students" },
      { zh: "社群", en: "Community" },
    ],
  },
  california: {
    img: "/images/showcase-party.webp",
    tags: [
      { zh: "加州", en: "California" },
      { zh: "留学生", en: "Students" },
      { zh: "社群", en: "Community" },
    ],
  },
  uk: {
    img: "/images/showcase-event.jpg",
    tags: [
      { zh: "英国", en: "UK" },
      { zh: "留学生", en: "Students" },
      { zh: "社群", en: "Community" },
    ],
  },
};

export default function CityGrid({
  locale,
  pending,
}: {
  locale: Locale;
  pending: string;
}) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {cities.map((c) => {
        const m = meta[c.slug];
        const inner = (
          <>
            {m && (
              <Image
                src={m.img}
                alt=""
                fill
                sizes="(min-width: 640px) 560px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
            />
            {c.url ? (
              <span
                aria-hidden
                className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white text-sm text-[#282f83]"
              >
                ↗
              </span>
            ) : (
              <span className="absolute top-3 right-3 rounded-full bg-white px-3 py-1 text-[0.7rem] font-medium text-[#282f83]">
                {pending}
              </span>
            )}
            <div className="absolute inset-x-0 bottom-0 p-4 text-white">
              <h2 className="text-lg leading-tight font-semibold">
                {c.name[locale]}
              </h2>
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
          </>
        );
        const cls =
          "group relative block aspect-[16/10] overflow-hidden rounded-[18px] bg-[var(--slot-bg)]";
        return (
          <li key={c.slug} id={c.slug} className="scroll-mt-24">
            {c.url ? (
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
              >
                {inner}
              </a>
            ) : (
              <div className={cls}>{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
