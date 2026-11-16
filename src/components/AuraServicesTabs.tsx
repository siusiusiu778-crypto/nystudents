"use client";

import Image from "next/image";
import { useState } from "react";
import { aura, auraServiceImages } from "@/data/auraPage";
import type { Locale } from "@/lib/i18n";

/** 左侧服务列表，右侧大图随选中项切换 */
export default function AuraServicesTabs({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const items = aura.services.items;
  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      <ul className="order-2 lg:order-1" role="tablist">
        {items.map((s, i) => {
          const on = i === active;
          return (
            <li key={i} className="border-b border-[#b07e6a]/30 first:border-t">
              <button
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className="flex w-full items-start gap-5 py-6 text-left"
              >
                <span className="pt-2 text-sm text-[#9a7b63]">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1">
                  <span
                    className={`block text-2xl font-bold transition-colors sm:text-4xl ${
                      on ? "text-[#b07e6a]" : ""
                    }`}
                  >
                    {s.title[locale]}
                  </span>
                  <span
                    className={`block overflow-hidden text-lg text-ink-soft transition-all duration-500 ${
                      on ? "mt-3 max-h-28 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {s.desc[locale]}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="relative order-1 aspect-square overflow-hidden rounded-[2rem] bg-[var(--slot-bg)] lg:order-2 lg:aspect-[4/5]">
        {items.map((s, i) =>
          auraServiceImages[i] ? (
            <Image
              key={i}
              src={auraServiceImages[i]}
              alt={s.title.en}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className={`object-cover transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : null,
        )}
      </div>
    </div>
  );
}
