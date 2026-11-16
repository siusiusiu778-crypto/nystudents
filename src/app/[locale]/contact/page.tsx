import Image from "next/image";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { contactPage as c } from "@/data/contactPage";
import { contact } from "@/data/site";
import { getDictionary, hasLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  return { title: getDictionary(locale).contact.title };
}

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = getDictionary(locale);

  const rows = [
    { label: t.contact.wechat, value: contact.wechat },
    { label: t.contact.phone, value: contact.phone },
    { label: t.contact.email, value: contact.email },
    { label: t.contact.address, value: contact.address },
  ];

  return (
    /* 左右对半分屏：左侧图片铺满，右侧表单（与 About 页同构，左右对调） */
    <section className="l-bg-gray -mb-20 grid min-h-[calc(100svh-4.9rem)] grid-rows-[minmax(240px,42svh)_1fr] lg:grid-cols-2 lg:grid-rows-1">
      <div className="relative bg-[var(--slot-bg)]">
        <Image
          src={c.image}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex items-center px-[var(--space-gutter)] py-12 lg:py-20 lg:pr-[max(var(--space-gutter),calc((100vw-var(--space-container))/2+var(--space-gutter)))] lg:pl-20">
        <div className="w-full max-w-xl">
          <p className="mb-[var(--space-eyebrow-gap)] text-sm font-medium tracking-widest t-faint">
            {c.label[locale]}
          </p>
          <h1 className="text-4xl leading-[1.08] font-bold text-balance sm:text-6xl">
            {c.title[locale]}
          </h1>
          <p className="mt-[var(--space-heading-gap)] mb-8 text-lg t-muted">
            {c.body[locale]}
          </p>
          <ContactForm locale={locale} />
          <dl className="mt-10 grid gap-x-8 gap-y-4 border-t border-line pt-6 text-sm sm:grid-cols-2">
            {rows.map((r) => (
              <div key={r.label}>
                <dt className="t-faint">{r.label}</dt>
                <dd className="mt-0.5 font-medium">{r.value || t.contact.pending}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
