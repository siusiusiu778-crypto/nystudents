import type { Locale } from "@/lib/i18n";

type Text = Record<Locale, string>;

export type City = {
  slug: string;
  name: Text;
  /** 该城市的链接；留空则导航指向城市总览页，页面显示「链接待补充」 */
  url: string;
};

// 导航 City 下拉与城市页的条目，链接待补充
export const cities: City[] = [
  { slug: "boston", name: { zh: "波士顿", en: "Boston" }, url: "" },
  { slug: "california", name: { zh: "加州", en: "California" }, url: "" },
  { slug: "uk", name: { zh: "英国", en: "United Kingdom" }, url: "" },
];
