export default function PageHero({
  title,
  subtitle,
  white,
  center,
}: {
  title: string;
  subtitle?: string;
  white?: boolean;
  center?: boolean;
}) {
  return (
    <section className={white ? "bg-[var(--surface-white)]" : "bg-brand-soft"}>
      <div
        className={`mx-auto max-w-6xl px-4 py-12 sm:py-16 ${center ? "text-center" : ""}`}
      >
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        {subtitle && (
          <p
            className={`mt-3 max-w-2xl text-lg ${center ? "mx-auto" : ""} text-ink-soft`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
