import type { Locale } from "@/lib/i18n";

type Text = Record<Locale, string>;

export type Post = {
  slug: string;
  img: string;
  title: Text;
  excerpt: Text;
  tags: Text[];
  author: Text;
  date: Text;
  read: Text;
};

/*
 * News & Stories 文章列表。目前均为占位内容（待补充真实文章），
 * 第一条是头图大卡片，其余在 "Featured posts" 里显示。
 * 新增文章：复制一个条目，换图和文字即可。
 */
const author: Text = { zh: "OSSC 团队", en: "OSSC Team" };

export const posts: Post[] = [
  {
    slug: "first-year-guide",
    img: "/images/story-washington-square.webp",
    title: {
      zh: "纽约留学第一年：从落地到安顿，我们帮你理清每一步",
      en: "Your first year in New York: from landing to feeling at home",
    },
    excerpt: {
      zh: "住房、保险、看病、寄东西……新生最常遇到的问题一次讲清楚。",
      en: "Housing, insurance, healthcare, shipping — the questions new students ask most.",
    },
    tags: [
      { zh: "留学指南", en: "Guide" },
      { zh: "新生", en: "New students" },
      { zh: "纽约", en: "New York" },
    ],
    author,
    date: { zh: "2026年11月", en: "Nov 2026" },
    read: { zh: "5 分钟阅读", en: "5 min read" },
  },
  {
    slug: "renting",
    img: "/images/showcase-home.webp",
    title: {
      zh: "在纽约租房，签约前一定要看的 6 件事",
      en: "Renting in New York: 6 things to check before you sign",
    },
    excerpt: {
      zh: "从中介费到担保人，避开常见的租房坑。",
      en: "From broker fees to guarantors, avoid the common pitfalls.",
    },
    tags: [{ zh: "生活", en: "Lifestyle" }],
    author,
    date: { zh: "2026年11月", en: "Nov 2026" },
    read: { zh: "4 分钟阅读", en: "4 min read" },
  },
  {
    slug: "dental",
    img: "/images/showcase-tsi.webp",
    title: {
      zh: "留学生看牙指南：保险、预约和常见项目",
      en: "A student's guide to dental care in the U.S.",
    },
    excerpt: {
      zh: "第一次在美国看牙，需要提前知道什么。",
      en: "What to know before your first dental visit in the U.S.",
    },
    tags: [{ zh: "健康", en: "Health" }],
    author,
    date: { zh: "2026年10月", en: "Oct 2026" },
    read: { zh: "3 分钟阅读", en: "3 min read" },
  },
  {
    slug: "community",
    img: "/images/showcase-party.webp",
    title: {
      zh: "留学生社群活动回顾：在异乡找到自己的圈子",
      en: "Community recap: finding your people far from home",
    },
    excerpt: {
      zh: "来自同学们的真实故事与活动瞬间。",
      en: "Real stories and moments from our student community.",
    },
    tags: [{ zh: "故事", en: "Stories" }],
    author,
    date: { zh: "2026年10月", en: "Oct 2026" },
    read: { zh: "3 分钟阅读", en: "3 min read" },
  },
];

export const newsLabels = {
  home: { zh: "首页", en: "Home" } as Text,
  featured: { zh: "精选文章", en: "Featured posts" } as Text,
  viewAll: { zh: "查看全部", en: "View all posts" } as Text,
  note: {
    zh: "以上为示例内容，真实文章待补充。",
    en: "Sample content shown — real articles coming soon.",
  } as Text,
};
