import type { Locale } from "@/lib/i18n";

type Text = Record<Locale, string>;

export type City = {
  slug: string;
  name: Text;
  /** 该城市留学生网的链接；留空则导航指向城市总览页，页面显示「链接待补充」 */
  url: string;
};

// 各城市的留学生网，链接待补充
export const cities: City[] = [
  { slug: "boston", name: { zh: "波士顿留学生网", en: "Boston Students Network" }, url: "" },
  { slug: "newyork", name: { zh: "纽约留学生网", en: "New York Students Network" }, url: "" },
  { slug: "california", name: { zh: "加州留学生网", en: "California Students Network" }, url: "" },
];
