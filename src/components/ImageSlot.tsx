import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";

export default function ImageSlot({
  src,
  alt,
  t,
  className = "aspect-[4/3] rounded-sm",
  priority = false,
  sizes = "(min-width: 1152px) 560px, 100vw",
}: {
  src: string;
  alt: string;
  t: Dictionary;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[var(--slot-bg)] ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm text-[color:var(--slot-fg)]">
          {t.home.imagePending}
        </div>
      )}
    </div>
  );
}
