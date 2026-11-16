import type { Locale } from "@/lib/i18n";

type Text = Record<Locale, string>;

/**
 * 首页 Our Network 的城市卡片，按顺序从左到右排列。第一个（纽约）就是左侧磨砂面板，其背景图见 networkCopy.bg，其余为右侧竖条。
 * 配图由用户提供（net3-*.webp，顺序同设计稿：纽约、波士顿、洛杉矶、芝加哥、英国）。
 * 想换图：放进 public/images/ 后改这里的路径与 pos 焦点。
 */
/** 塔尖对齐线：距卡片顶部的百分比（只对设置了 tip 的卡片生效） */
export const TIP_LINE = 16;

export const networkCities: {
  slug: string;
  name: Text;
  img: string;
  /** 图片原始像素宽高 */
  w: number;
  h: number;
  /** 画面里最高/最突出的建筑中心的横向位置（0=最左，1=最右）；桌面会让它始终位于卡片正中 */
  p: number;
  /** 把图片整体上移的幅度（占卡片高度的百分比，0–25），用于把偏低的地标往上挪 */
  y?: number;
  /** 塔尖在图片里的纵向位置（0=顶，1=底）。设置后，桌面上所有带 tip 的卡片会把塔尖对齐到同一水平线（见 TIP_LINE）；此时 y 不再起作用 */
  tip?: number;
}[] = [
  { slug: "ny", name: { en: "New York", zh: "纽约" }, img: "/images/net10-ny.webp", w: 1045, h: 1695, p: 0.417, tip: 0.1298 }, // 帝国大厦（图片顶部补了一段天空，用来把塔尖压低到对齐线）
  { slug: "boston", name: { en: "Boston", zh: "波士顿" }, img: "/images/net10-boston.webp", w: 1044, h: 1506, p: 0.677, tip: 0.1793 }, // 红砖教堂尖塔
  { slug: "la", name: { en: "Los Angeles", zh: "洛杉矶" }, img: "/images/net9-la.webp", w: 1045, h: 1505, p: 0.545, y: 20 }, // 市中心最高的塔楼
  { slug: "chicago", name: { en: "Chicago", zh: "芝加哥" }, img: "/images/net3-chicago.webp", w: 736, h: 1104, p: 0.5 }, // Tribune Tower
  { slug: "uk", name: { en: "United Kingdom", zh: "英国" }, img: "/images/net3-uk.webp", w: 736, h: 1349, p: 0.57, tip: 0.133 }, // 大本钟
];


/** Our Network 左侧磨砂面板的文案（来自设计稿） */
export const networkCopy = {
  label: { en: "OSSC GROUP", zh: "OSSC 集团" } as Text,
  title: {
    en: "From New York, For Every Stage of Life.",
    zh: "始于纽约，陪伴人生每一个阶段。",
  } as Text,
  body: {
    en: "A group built around your life — across cities, across stages.",
    zh: "一个围绕你的生活而建的集团——跨越城市，跨越阶段。",
  } as Text,
  /** 左侧磨砂背景用的图（会被高度模糊） */
  bg: "/images/about-hero.webp",
};
