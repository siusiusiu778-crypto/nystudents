export default function BlockList({
  items,
}: {
  items: { title: string; desc: string }[];
}) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((b) => (
        <li key={b.title} className="rounded-sm border border-line p-6">
          <h2 className="text-lg font-semibold">{b.title}</h2>
          <p className="mt-2 text-sm text-ink-soft">{b.desc}</p>
        </li>
      ))}
    </ul>
  );
}
