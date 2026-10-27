import type { Locale } from "@/lib/i18n";

type Text = Record<Locale, string>;

export type Service = {
  slug: string;
  icon: string;
  name: Text;
  summary: Text;
  highlights: Text[];
};

// 文案均为占位，待补充真实业务介绍
export const services: Service[] = [
  {
    slug: "medical",
    icon: "✨",
    name: { zh: "医美 / 牙科", en: "Cosmetic & Dental" },
    summary: {
      zh: "专业医美与牙科服务，中文沟通，预约便捷。",
      en: "Professional cosmetic and dental care with Chinese-speaking support.",
    },
    highlights: [
      { zh: "中文沟通（待补充）", en: "Chinese-speaking support (TBD)" },
      { zh: "预约便捷（待补充）", en: "Easy booking (TBD)" },
      { zh: "价格透明（待补充）", en: "Transparent pricing (TBD)" },
    ],
  },
  {
    slug: "liuming",
    icon: "🎓",
    name: { zh: "留明", en: "Liuming" },
    summary: {
      zh: "留学相关服务，陪伴你的学业与申请之路。",
      en: "Study-related services supporting your academic journey.",
    },
    highlights: [
      { zh: "服务内容待补充", en: "Services to be added" },
      { zh: "服务内容待补充", en: "Services to be added" },
      { zh: "服务内容待补充", en: "Services to be added" },
    ],
  },
  {
    slug: "express",
    icon: "📦",
    name: { zh: "快递", en: "Express" },
    summary: {
      zh: "中美快递与同城配送，安全可靠。",
      en: "Reliable US-China and local express delivery.",
    },
    highlights: [
      { zh: "运费与时效待补充", en: "Rates and timing TBD" },
      { zh: "包裹追踪（待补充）", en: "Package tracking (TBD)" },
      { zh: "安全可靠（待补充）", en: "Safe and reliable (TBD)" },
    ],
  },
  {
    slug: "celehome",
    icon: "🏠",
    name: { zh: "Celehome", en: "Celehome" },
    summary: {
      zh: "家居与居住相关服务，让你的新家更舒适。",
      en: "Home and living services to make your place feel like home.",
    },
    highlights: [
      { zh: "服务内容待补充", en: "Services to be added" },
      { zh: "服务内容待补充", en: "Services to be added" },
      { zh: "服务内容待补充", en: "Services to be added" },
    ],
  },
  {
    slug: "insurance",
    icon: "🛡️",
    name: { zh: "保险", en: "Insurance" },
    summary: {
      zh: "留学生医疗、意外等保险咨询与办理。",
      en: "Insurance advice and enrollment for health, accident and more.",
    },
    highlights: [
      { zh: "险种待补充", en: "Plans to be added" },
      { zh: "咨询办理一站式（待补充）", en: "One-stop help (TBD)" },
      { zh: "理赔协助（待补充）", en: "Claims support (TBD)" },
    ],
  },
  {
    slug: "wukong",
    icon: "🐒",
    name: { zh: "Wukong", en: "Wukong" },
    summary: {
      zh: "Wukong 业务介绍待补充。",
      en: "Wukong description coming soon.",
    },
    highlights: [
      { zh: "服务内容待补充", en: "Services to be added" },
      { zh: "服务内容待补充", en: "Services to be added" },
      { zh: "服务内容待补充", en: "Services to be added" },
    ],
  },
  {
    slug: "foundation",
    icon: "💛",
    name: { zh: "基金会", en: "Foundation" },
    summary: {
      zh: "公益与资助项目，回馈留学生社区。",
      en: "Charity and support programs giving back to the student community.",
    },
    highlights: [
      { zh: "项目介绍待补充", en: "Programs to be added" },
      { zh: "如何参与（待补充）", en: "How to join (TBD)" },
      { zh: "公开透明（待补充）", en: "Open and transparent (TBD)" },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
