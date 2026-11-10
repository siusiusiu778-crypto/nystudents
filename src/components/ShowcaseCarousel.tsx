"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { homeImages } from "@/data/homeImages";

type Copy = { label: string; title: string; body: string; cta: string };

const pics = homeImages.showcase.map((b) => b.src).filter(Boolean);

// 版本 A：暖米色背景的横向卡片轮播，中间一张放大高亮，两侧缩小变暗，自动滑动，点击两侧卡片可切换
export default function ShowcaseCarousel({ copy, href }: { copy: Copy; href: string }) {
  const n = pics.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || n < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), 2600);
    return () => clearInterval(id);
  }, [paused, n]);

  const half = Math.floor(n / 2);

  return (
    <section
      className="l-section relative overflow-hidden bg-[var(--background-warm,#f8f4ec)]"
    >
      <div className="l-container text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.1] text-balance sm:text-6xl">
          {copy.title}
        </h2>
        <p className="mx-auto mt-[var(--space-heading-gap)] max-w-xl t-muted">{copy.body}</p>
      </div>

      <div
        className="relative mx-auto mt-[var(--space-block-gap)] h-[min(78vw,460px)] w-full max-w-[1240px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {pics.map((src, i) => {
          const d = ((i - active + n + half) % n) - half; // 离中心的位置：-half … half
          const abs = Math.abs(d);
          return (
            <button
              key={src}
              type="button"
              aria-label={`${i + 1} / ${n}`}
              onClick={() => setActive(i)}
              className="absolute left-1/2 top-1/2 aspect-[2/3] w-[46%] overflow-hidden rounded-[10px] bg-[var(--slot-bg)] shadow-[0_20px_40px_rgba(0,0,0,0.18)] transition-all duration-700 ease-out sm:w-[24%] lg:w-[20%]"
              style={{
                transform: `translate(calc(-50% + ${d * 108}%), -50%) scale(${d === 0 ? 1 : 0.82})`,
                opacity: abs > 2 ? 0 : d === 0 ? 1 : 0.55,
                zIndex: 10 - abs,
                pointerEvents: abs > 2 ? "none" : "auto",
                cursor: d === 0 ? "default" : "pointer",
              }}
            >
              <Image src={src} alt="" fill sizes="(min-width: 1024px) 250px, 46vw" className="object-cover" />
            </button>
          );
        })}
      </div>

      <div className="l-container mt-[var(--space-block-gap)] text-center">
        <Link
          href={href}
          className="inline-block btn-primary rounded-sm px-6 py-3 font-medium hover:opacity-90"
        >
          {copy.cta} →
        </Link>
      </div>
    </section>
  );
}
