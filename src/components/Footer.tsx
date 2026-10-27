import type { Dictionary } from "@/lib/i18n";

export default function Footer({ t }: { t: Dictionary }) {
  return (
    <footer className="mt-16 border-t border-black/5 bg-brand-soft">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-black/60">
        © 2026{t.siteName} · {t.footer.rights}
      </div>
    </footer>
  );
}
