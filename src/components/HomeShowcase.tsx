"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeImages } from "@/data/homeImages";

type Copy = { label: string; title: string; body: string; cta: string };

const pics = homeImages.showcase.map((b) => b.src).filter(Boolean);
const picAt = (i: number) => pics[i % pics.length] ?? "";

function Card({ i, className = "", style }: { i: number; className?: string; style?: React.CSSProperties }) {
  const src = picAt(i);
  return (
    <div
      className={`absolute overflow-hidden rounded-[10px] bg-[var(--slot-bg)] shadow-[0_12px_30px_rgba(0,0,0,0.14)] ${className}`}
      style={style}
    >
      {src && <Image src={src} alt="" fill sizes="200px" className="object-cover" />}
    </div>
  );
}

const btn = "btn-primary inline-block rounded-sm px-6 py-3 font-medium hover:opacity-90";

// 版本 B：大标题在上，一排规整、略带弧度的重叠卡片（鼠标移上去放大），下面是说明和按钮
export function ShowcaseFan({ copy, href }: { copy: Copy; href: string }) {
  const n = 7;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  // 触屏没有 hover：滚动到一半可见时也展开
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setOpen(true), io.disconnect()),
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      className="l-section overflow-hidden bg-[var(--background-warm,#f8f4ec)]"
    >
      <div className="l-container text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.1] text-balance sm:text-6xl">
          {copy.title}
        </h2>
        <div className="mx-auto mt-[var(--space-block-gap)] flex max-w-[1240px] items-center justify-center py-8 sm:py-12">
          {Array.from({ length: n }, (_, i) => {
            const t = (i - (n - 1) / 2) / ((n - 1) / 2); // -1 … 1
            return (
              <div
                key={i}
                className="relative aspect-[2/3] w-[22%] shrink-0 [--step:84%] hover:!z-50 sm:w-[15.5%] sm:[--step:77.4%]"
                style={{
                  marginLeft: i ? "-3.5%" : 0,
                  zIndex: i,
                  // 收起：全部叠在中间；展开：回到各自位置，两端略低成弧形
                  transform: open
                    ? `translate(0, ${t * t * 28}px)`
                    : `translate(calc(${(n - 1) / 2 - i} * var(--step)), 0)`,
                  transition: "transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
                  transitionDelay: open ? `${Math.abs(t) * 80}ms` : "0ms",
                }}
              >
                <div
                  className="h-full w-full origin-center rotate-[var(--r)] transition-transform duration-300 ease-out hover:rotate-0 hover:scale-[1.22]"
                  style={{ "--r": open ? `${t * 9}deg` : "0deg" } as React.CSSProperties}
                >
                  <Card i={i} className="inset-0 h-full w-full" />
                </div>
              </div>
            );
          })}
        </div>
        <p className="mx-auto mt-[var(--space-block-gap)] max-w-xl t-muted">{copy.body}</p>
        <div className="mt-6">
          <Link href={href} className={btn}>
            {copy.cta} →
          </Link>
        </div>
      </div>
    </section>
  );
}
