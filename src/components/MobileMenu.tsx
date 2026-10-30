"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={`h-px w-5 bg-foreground transition ${open ? "translate-y-[3px] rotate-45" : ""}`}
        />
        <span
          className={`h-px w-5 bg-foreground transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute inset-x-0 top-full border-b border-line bg-white px-[clamp(20px,5vw,56px)] py-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-4 text-[0.95rem] font-medium last:border-b-0"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
