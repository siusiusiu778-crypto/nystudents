"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { contactPage } from "@/data/contactPage";

const f = contactPage.form;

/** 联系表单。后端/邮箱尚未接入：提交时只提示，不会真正发送。 */
export default function ContactForm({ locale }: { locale: Locale }) {
  const [sent, setSent] = useState(false);
  const field =
    "mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-3 placeholder:text-black/30 focus:border-[#282f83] focus:outline-none";
  const label = "block text-sm font-medium t-muted";
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
          {f.phone[locale]}
          <input name="phone" className={field} />
        </label>
      </div>
      <label className={label}>
        {f.email[locale]}
        <input required type="email" name="email" className={field} />
      </label>
      <label className={label}>
        {f.topic[locale]}
        <select name="topic" defaultValue={f.options[0].en} className={field}>
          {f.options.map((o) => (
            <option key={o.en} value={o.en}>
              {o[locale]}
            </option>
          ))}
        </select>
      </label>
      <label className={label}>
        {f.message[locale]}
        <textarea required name="message" rows={5} className={field} />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-sm bg-[#282f83] px-7 py-3.5 font-medium text-white hover:opacity-90"
        >
          {f.submit[locale]}
        </button>
        {sent && <p className="text-sm t-faint">{f.pending[locale]}</p>}
      </div>
    </form>
  );
}
