"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type City = { slug: string; name: string; img: string; p: number };

/**
 * 一排城市卡的出场动画（参考 Everything You Need 的扇形展开）：
 * 桌面上先全部叠在正中，进入视口后从中间向两边依次散开，到各自位置。
 * 手机/平板是多行网格，不做叠放，直接显示。
 */
export default function NetworkRow({ cities }: { cities: City[] }) {
  const n = cities.length;
  const ref = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOpen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setOpen(true), io.disconnect()),
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <ul
      ref={ref}
      className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
    >
      {cities.map((c, i) => {
        const t = (i - (n - 1) / 2) / ((n - 1) / 2); // -1 … 1
        return (
          <li
            key={c.slug}
            style={
              {
                zIndex: i,
                "--closed": `calc(${(n - 1) / 2 - i} * (100% + 1rem))`,
                transitionDelay: open ? `${Math.abs(t) * 80}ms` : "0ms",
              } as React.CSSProperties
            }
            className={`relative aspect-[3/4] overflow-hidden rounded-[20px] bg-[var(--slot-bg)] transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              i % 2 ? "lg:mt-10" : ""
            } ${open ? "lg:translate-x-0" : "lg:translate-x-[var(--closed)]"}`}
          >
            <Image
              src={c.img}
              alt=""
              fill
              unoptimized
              sizes="300px"
              className="object-cover"
              style={{ objectPosition: `${Math.round(c.p * 100)}% 30%` }}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            />
            <p className="absolute inset-x-0 bottom-0 p-4 text-center text-sm font-semibold tracking-[0.15em] text-white uppercase">
              {c.name}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
