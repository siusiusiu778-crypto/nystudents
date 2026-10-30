import type { Locale } from "@/lib/i18n";

type Text = Record<Locale, string>;

export type Service = {
  slug: string;
  icon: string;
  name: Text;
  /** 一句话介绍，显示在首页卡片和详情页顶部 */
  summary: Text;
  /** 具体做什么服务：每项 = 标题 + 一两句说明 */
  offerings: { title: Text; desc: Text }[];
  /** 受众：适合哪些人（每条一句话） */
  audience: Text[];
  /** 跳转链接：官网 / 预约页 / 小程序等。url 留空则页面显示「链接待补充」 */
  link: { url: string; label?: Text };
};

const tbd = (zh: string, en: string): Text => ({ zh: `${zh}（待补充）`, en: `${en} (TBD)` });

// 未填写的服务项占位，复制后替换即可
const pendingOfferings: Service["offerings"] = [1, 2, 3].map(() => ({
  title: tbd("服务项目", "Service"),
  desc: tbd("一两句话说明这项服务具体做什么", "One or two sentences on what this service does"),
}));
const pendingAudience: Service["audience"] = [
  tbd("目标人群", "Target audience"),
  tbd("适用场景", "When to use it"),
];

/*
 * 每条业务线要填的内容（新增业务线时复制一个条目）：
 *   slug      网址里的名字，如 /zh/services/medical
 *   name      业务线名称（中英）
 *   summary   一句话介绍
 *   offerings 具体做什么服务，按 bullet point 来写，数量不限，每项标题 + 说明
 *   audience  受众人群，按 bullet point 来写，数量不限（谁会需要、什么场景）
 *   link      跳转链接（官网 / 预约 / 小程序），没有就留空 url: ""
 * 文案均为占位，待补充真实业务介绍
 */
export const services: Service[] = [
  {
    slug: "medical",
    icon: "✨",
    name: { zh: "医美 / 牙科", en: "Cosmetic & Dental" },
    summary: {
      zh: "专业医美与牙科服务，中文沟通，预约便捷。",
      en: "Professional cosmetic and dental care with Chinese-speaking support.",
    },
    offerings: pendingOfferings,
    audience: pendingAudience,
    link: { url: "" },
  },
  {
    slug: "liuming",
    icon: "🎓",
    name: { zh: "留明", en: "Liuming" },
    summary: {
      zh: "留学相关服务，陪伴你的学业与申请之路。",
      en: "Study-related services supporting your academic journey.",
    },
    offerings: pendingOfferings,
    audience: pendingAudience,
    link: { url: "" },
  },
  {
    slug: "express",
    icon: "📦",
    name: { zh: "快递", en: "Express" },
    summary: {
      zh: "中美快递与同城配送，安全可靠。",
      en: "Reliable US-China and local express delivery.",
    },
    offerings: pendingOfferings,
    audience: pendingAudience,
    link: { url: "" },
  },
  {
    slug: "celehome",
    icon: "🏠",
    name: { zh: "Celehome", en: "Celehome" },
    summary: {
      zh: "家居与居住相关服务，让你的新家更舒适。",
      en: "Home and living services to make your place feel like home.",
    },
    offerings: pendingOfferings,
    audience: pendingAudience,
    link: { url: "" },
  },
  {
    slug: "uswoo",
    icon: "🏢",
    name: { zh: "美窝 USWOO", en: "USWOO" },
    summary: {
      zh: "租房与安居服务，帮你找到适合的城市和住处。",
      en: "Rental and settling-in services to help you find your place in the city.",
    },
    // 内容参考 USWOO 官网，细节待补充
    offerings: [
      {
        title: { zh: "选对住处", en: "Know Where to Live" },
        desc: {
          zh: "社区、通勤、学区与生活方式，帮你判断住哪里（待补充）",
          en: "Neighborhoods, commute, schools and lifestyle (TBD)",
        },
      },
      {
        title: { zh: "找房与搬家", en: "Find & Move" },
        desc: {
          zh: "从看房到入住的全程协助（待补充）",
          en: "Support from touring to move-in (TBD)",
        },
      },
      {
        title: { zh: "安顿与融入", en: "Settle In & Connect" },
        desc: {
          zh: "入住后的本地资源与社区连接（待补充）",
          en: "Local resources and community after you move (TBD)",
        },
      },
    ],
    audience: [
      tbd("来美读书、需要找房的留学生", "Students looking for housing in the US"),
      tbd("为孩子租房的家长", "Parents renting for their children"),
      tbd("换城市、换工作的年轻租客", "Young renters relocating for school or work"),
    ],
    link: { url: "https://uswoo-website.vercel.app/" },
  },
  {
    slug: "insurance",
    icon: "🛡️",
    name: { zh: "保险", en: "Insurance" },
    summary: {
      zh: "留学生医疗、意外等保险咨询与办理。",
      en: "Insurance advice and enrollment for health, accident and more.",
    },
    offerings: pendingOfferings,
    audience: pendingAudience,
    link: { url: "" },
  },
  {
    slug: "wukong",
    icon: "🐒",
    name: { zh: "Wukong", en: "Wukong" },
    summary: {
      zh: "Wukong 业务介绍待补充。",
      en: "Wukong description coming soon.",
    },
    offerings: pendingOfferings,
    audience: pendingAudience,
    link: { url: "" },
  },
  {
    slug: "foundation",
    icon: "💛",
    name: { zh: "基金会", en: "Foundation" },
    summary: {
      zh: "公益与资助项目，回馈留学生社区。",
      en: "Charity and support programs giving back to the student community.",
    },
    offerings: pendingOfferings,
    audience: pendingAudience,
    link: { url: "" },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
