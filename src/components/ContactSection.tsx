import type { Dictionary } from "@/lib/i18n";
import { contact } from "@/data/site";

export default function ContactSection({ t }: { t: Dictionary }) {
  const rows = [
    { label: t.contact.wechat, value: contact.wechat },
    { label: t.contact.phone, value: contact.phone },
    { label: t.contact.email, value: contact.email },
    { label: t.contact.address, value: contact.address },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-4 pt-16">
      <div className="rounded-sm bg-brand-soft p-6 sm:p-10">
        <h2 className="text-2xl font-bold">{t.contact.title}</h2>
        <p className="mt-2 text-black/60">{t.contact.subtitle}</p>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {rows.map((row) => (
            <div key={row.label} className="rounded-sm bg-white p-4">
              <dt className="text-sm text-black/50">{row.label}</dt>
              <dd className="mt-1 font-medium">
                {row.value || t.contact.pending}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
