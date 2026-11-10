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
  { slug: "ny", name: { zh: "NYStudents", en: "NYStudents" }, url: "" },
  {
    slug: "boston",
    name: { zh: "Boston Students", en: "Boston Students" },
    url: "",
  },
  {
    slug: "california",
    name: { zh: "California Students", en: "California Students" },
    url: "",
  },
  { slug: "uk", name: { zh: "UKStudents", en: "UKStudents" }, url: "" },
];
