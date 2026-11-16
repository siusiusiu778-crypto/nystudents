"use client";

import Image from "next/image";
import { useState } from "react";

type Step = { tag: string; title: string; desc: string };

// 标题前的 emoji：Study / Settle In / Work / Build a Life
const icons = ["📖", "🛋️", "💼", "🌆"];

/**
 * About 页 Our Journey：横向展开面板。
 * 当前面板展开并显示说明（默认第 2 个，鼠标移入/聚焦时切换），其余面板收窄。
 * 传入 images 时为「图片背景版」：未展开的块用照片做背景，展开的那块变为纯蓝色；
 * 不传则为纯色版（展开的那块为蓝色底）。手机上改为竖排，说明全部显示。
 */
export default function JourneySteps({
  steps,
  images,
  defaultIndex = 1,
}: {
  steps: Step[];
  images?: string[];
  defaultIndex?: number;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const active = hover ?? defaultIndex;
  const withImage = !!images?.length;

  return (
    <ol
      className="mt-[var(--space-block-gap)] flex flex-col gap-1 lg:mt-20 lg:h-[440px] lg:flex-row"
      onMouseLeave={() => setHover(null)}
    >
      {steps.map((s, i) => {
        const on = i === active;
        const light = on || withImage; // 文字是否为白色
        return (
          <li
            key={s.title}
            tabIndex={0}
            onMouseEnter={() => setHover(i)}
            onFocus={() => setHover(i)}
            onBlur={() => setHover(null)}
            className={`relative flex min-h-[260px] min-w-0 flex-col justify-between overflow-hidden rounded-[20px] p-6 outline-none transition-[flex-grow,background-color,border-color,box-shadow] duration-500 ease-out lg:basis-0 lg:p-8 ${
              withImage
                ? `text-white ${on ? "bg-[var(--brand)]" : "bg-[#303038]"}`
                : on
                  ? "bg-[var(--brand)] text-white"
                  : "border border-line bg-white"
            } ${on ? "shadow-[0_24px_48px_-28px_rgba(40,47,131,0.6)] lg:grow-[2.1]" : "lg:grow-[1]"}`}
          >
            {withImage && (
              <>
                <Image
                  src={images![i] ?? ""}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className={`object-cover transition-opacity duration-500 ease-out ${
                    on ? "opacity-0" : "opacity-100"
                  }`}
                />
                <div
                  aria-hidden
                  className={`absolute inset-0 transition-colors duration-500 ${
                    on
                      ? "bg-transparent"
                      : "bg-gradient-to-t from-black/75 via-black/45 to-black/30"
                  }`}
                />
              </>
            )}

            <span
              className={`relative text-6xl leading-none font-extrabold tracking-tight transition-colors duration-500 lg:text-7xl ${
                light ? "text-white" : "text-[var(--foreground)]"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="relative mt-10 lg:mt-0 lg:h-[170px]">
              <p
                className={`text-sm tracking-wide italic transition-colors duration-500 ${
                  light ? "text-white/65" : "t-faint"
                }`}
              >
                / {s.tag}
              </p>
              <h3
                className={`mt-2 flex items-start gap-2 font-bold transition-[font-size] duration-500 ${
                  on ? "text-xl lg:text-2xl" : "text-xl lg:text-lg"
                }`}
              >
                <span aria-hidden className="shrink-0 leading-[1.35]">
                  {icons[i]}
                </span>
                <span className="lg:text-balance">{s.title}</span>
              </h3>
              {/* 说明：桌面仅在展开时显示 */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                  on
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[1fr] opacity-100 lg:grid-rows-[0fr] lg:opacity-0"
                }`}
              >
                <p
                  className={`overflow-hidden leading-relaxed lg:max-w-md ${
                    light ? "text-white/85" : "t-muted"
                  } mt-4 ${on ? "" : "lg:mt-0"}`}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
