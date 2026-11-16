"use client";

import { useEffect, useRef, useState } from "react";

/** 进入视口后才给子元素打上 data-run，用来让 CSS 动画从头开始播放（而不是页面一加载就在后台跑） */
export default function StartOnView({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setRun(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setRun(true), io.disconnect()),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-run={run} className={className}>
      {children}
    </div>
  );
}
