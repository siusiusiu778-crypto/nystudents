"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { career, careerCities, type CareerCityKey } from "@/data/careerPage";

const j = career.jobsSection;

/** 按城市筛选的职位列表（纽约 / 波士顿 / 洛杉矶） */
export default function CareerJobs({
  locale,
  email,
}: {
  locale: Locale;
  email: string;
}) {
  const [city, setCity] = useState<CareerCityKey | "all">("all");

  const rows = careerCities.flatMap((c) =>
    c.jobs.map((job) => ({ ...job, city: c })),
  );
  const shown = city === "all" ? rows : rows.filter((r) => r.city.key === city);
  const active = careerCities.find((c) => c.key === city);

  const tab = (on: boolean) =>
    `rounded-full border px-5 py-2.5 text-sm font-medium transition ${
      on
        ? "border-[var(--surface-dark)] bg-[var(--surface-dark)] text-white"
        : "border-line bg-white hover:border-black/40"
    }`;

  return (
    <div>
      <div role="tablist" className="flex flex-wrap gap-2">
        <button
          role="tab"
          aria-selected={city === "all"}
          onClick={() => setCity("all")}
          className={tab(city === "all")}
        >
          {j.all[locale]} · {rows.length}
        </button>
        {careerCities.map((c) => (
          <button
            key={c.key}
            role="tab"
            aria-selected={city === c.key}
            onClick={() => setCity(c.key)}
            className={tab(city === c.key)}
          >
            {c.name[locale]} · {c.jobs.length}
          </button>
        ))}
      </div>

      {active && (
        <p className="mt-6 text-lg t-muted">{active.blurb[locale]}</p>
      )}

      <ul className="mt-8 border-t border-line">
        {shown.map((r) => {
          // 邮箱尚未提供时，退回到联系页
          const href =
            r.applyUrl ||
            (email
              ? `mailto:${email}?subject=${encodeURIComponent(
                  `${r.title.en} – ${r.city.name.en}`,
                )}`
              : `/${locale}/contact`);
          return (
            <li
              key={`${r.city.key}-${r.title.en}`}
              className="grid items-center gap-3 border-b border-line py-6 sm:grid-cols-[1fr_12rem_8rem_auto] sm:gap-6"
            >
              <div>
                <h3 className="text-xl font-bold">{r.title[locale]}</h3>
                <p className="mt-1 text-sm t-faint">{r.business[locale]}</p>
              </div>
              <p className="text-[#857d75]">{r.city.name[locale]}</p>
              <p className="text-[#857d75]">{r.type[locale]}</p>
              <a
                href={href}
                className="btn-primary inline-block justify-self-start rounded-sm px-5 py-2.5 text-sm font-medium hover:opacity-90"
              >
                {j.apply[locale]} →
              </a>
            </li>
          );
        })}
      </ul>

      {shown.length === 0 && (
        <p className="mt-8 text-lg t-muted">{j.empty[locale]}</p>
      )}
      <p className="mt-6 text-sm t-faint">{j.placeholder[locale]}</p>
    </div>
  );
}
