"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { partnership } from "@/data/partnershipPage";

const f = partnership.form;

/** 合作咨询表单。后端/邮箱尚未接入：提交时只提示，不会真正发送。 */
export default function PartnershipForm({ locale }: { locale: Locale }) {
  const [sent, setSent] = useState(false);
  const field =
    "mt-1.5 w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/60 focus:outline-none";
  const label = "block text-sm font-medium text-white/80";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          {f.name[locale]}
          <input required name="name" className={field} />
        </label>
        <label className={label}>
          {f.company[locale]}
          <input name="company" className={field} />
        </label>
      </div>
      <label className={label}>
        {f.email[locale]}
        <input required type="email" name="email" className={field} />
      </label>
      <label className={label}>
        {f.interest[locale]}
        <select
          name="interest"
          defaultValue={f.options[0].en}
          className={`${field} [&>option]:text-black`}
        >
          {f.options.map((o) => (
            <option key={o.en} value={o.en}>
              {o[locale]}
            </option>
          ))}
        </select>
      </label>
      <label className={label}>
        {f.idea[locale]}
        <textarea name="idea" rows={4} className={field} />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-sm bg-white px-6 py-3 font-medium text-[#303038] hover:opacity-90"
        >
          {f.submit[locale]}
        </button>
        {sent && <p className="text-sm text-white/70">{f.pending[locale]}</p>}
      </div>
    </form>
  );
}
