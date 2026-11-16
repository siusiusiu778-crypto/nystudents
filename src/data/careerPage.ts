import type { Locale } from "@/lib/i18n";

type Text = Record<Locale, string>;

/**
 * Career 页文案与职位数据。
 * ⚠️ 职位均为【占位示例，待补充】，上线前请替换为真实在招职位。
 * 新增职位：在对应城市的 jobs 里加一条；applyUrl 留空则默认走邮件申请。
 */
export const career = {
  hero: {
    label: { en: "CAREERS", zh: "职业机会" } as Text,
    title: {
      en: "Build Your Career With Us.",
      zh: "和我们一起，成就你的事业。",
    } as Text,
    body: {
      en: "Join a growing group of businesses serving international students and young professionals across the U.S. and beyond.",
      zh: "加入一个不断成长的集团，服务美国及海外的留学生与年轻职场人。",
    } as Text,
    cta: { en: "View Open Roles", zh: "查看在招职位" } as Text,
  },
  why: {
    label: { en: "WHY JOIN US", zh: "为什么加入我们" } as Text,
    title: {
      en: "Work That Matters to Real People.",
      zh: "做对真实的人有意义的事。",
    } as Text,
    items: [
      {
        title: { en: "Meaningful Impact", zh: "真实的影响力" },
        desc: {
          en: "Your work helps students and families settle in, study, and grow in a new country.",
          zh: "你的工作帮助留学生和家庭在异国安顿、学习与成长。",
        },
      },
      {
        title: { en: "Many Industries, One Team", zh: "多行业，一个团队" },
        desc: {
          en: "Education, healthcare, real estate, insurance, media and more — move across businesses as you grow.",
          zh: "教育、医疗、房产、保险、传媒等多条业务线，成长中可跨业务发展。",
        },
      },
      {
        title: { en: "Room to Grow", zh: "成长空间" },
        desc: {
          en: "Mentorship, hands-on ownership, and a clear path from intern to team lead.",
          zh: "导师带教、独立负责项目，从实习生到团队负责人有清晰路径。",
        },
      },
      {
        title: { en: "Bilingual Environment", zh: "中英双语环境" },
        desc: {
          en: "Work in English and Chinese with colleagues from diverse backgrounds.",
          zh: "与来自不同背景的同事，用中英文协作。",
        },
      },
    ] as { title: Text; desc: Text }[],
  },
  jobsSection: {
    label: { en: "OPEN ROLES", zh: "在招职位" } as Text,
    title: { en: "Find Your Role by City.", zh: "按城市查看职位。" } as Text,
    all: { en: "All Roles", zh: "全部职位" } as Text,
    empty: {
      en: "No open roles in this city right now. Send us your resume and we'll keep you in mind.",
      zh: "该城市暂无在招职位，欢迎投递简历，我们会为你保留。",
    } as Text,
    apply: { en: "Apply", zh: "申请" } as Text,
    roles: { en: "roles", zh: "个职位" } as Text,
    placeholder: {
      en: "Sample listings — real roles to be added.",
      zh: "以下为示例职位，真实职位待补充。",
    } as Text,
  },
  cta: {
    title: {
      en: "Don't See Your Role?",
      zh: "没有合适的职位？",
    } as Text,
    body: {
      en: "Send your resume and tell us how you'd like to contribute. We're always glad to meet great people.",
      zh: "把简历发给我们，告诉我们你想如何贡献。我们随时欢迎优秀的人。",
    } as Text,
    button: { en: "Email Your Resume", zh: "发送简历" } as Text,
    secondary: { en: "Contact Us", zh: "联系我们" } as Text,
  },
} as const;

export type CareerCityKey = "ny" | "boston" | "la";

export type Job = {
  title: Text;
  /** 所属业务线 */
  business: Text;
  type: Text;
  /** 链接留空 → 默认邮件申请 */
  applyUrl?: string;
};

export const careerCities: {
  key: CareerCityKey;
  name: Text;
  image: string;
  blurb: Text;
  jobs: Job[];
}[] = [
  {
    key: "ny",
    name: { en: "New York", zh: "纽约" },
    image: "/images/net-ny.webp",
    blurb: {
      en: "Our headquarters — where OSSC started in 2012.",
      zh: "集团总部，OSSC 2012 年起步之地。",
    },
    jobs: [
      {
        title: { en: "Education Consultant", zh: "留学顾问" },
        business: { en: "Luminary Education", zh: "留明留学" },
        type: { en: "Full-time", zh: "全职" },
      },
      {
        title: { en: "Marketing Specialist", zh: "市场营销专员" },
        business: { en: "OSSC Group", zh: "集团" },
        type: { en: "Full-time", zh: "全职" },
      },
      {
        title: { en: "Content & Social Media Intern", zh: "内容与社媒实习生" },
        business: { en: "Wukong Media", zh: "悟空传媒" },
        type: { en: "Internship", zh: "实习" },
      },
      {
        title: { en: "Patient Coordinator", zh: "患者接待专员" },
        business: { en: "The Smile Institute", zh: "TSI 牙科诊所" },
        type: { en: "Full-time", zh: "全职" },
      },
    ],
  },
  {
    key: "boston",
    name: { en: "Boston", zh: "波士顿" },
    image: "/images/net-boston.webp",
    blurb: {
      en: "Serving the city's large international student community.",
      zh: "服务波士顿庞大的留学生群体。",
    },
    jobs: [
      {
        title: { en: "Student Services Associate", zh: "学生服务专员" },
        business: { en: "Luminary Education", zh: "留明留学" },
        type: { en: "Full-time", zh: "全职" },
      },
      {
        title: { en: "Housing Advisor", zh: "租房顾问" },
        business: { en: "USWOO", zh: "美窝" },
        type: { en: "Full-time", zh: "全职" },
      },
      {
        title: { en: "Campus Ambassador", zh: "校园大使" },
        business: { en: "OSSC Group", zh: "集团" },
        type: { en: "Part-time", zh: "兼职" },
      },
    ],
  },
  {
    key: "la",
    name: { en: "Los Angeles", zh: "洛杉矶" },
    image: "/images/net-la.webp",
    blurb: {
      en: "Growing our West Coast presence.",
      zh: "持续拓展西海岸业务。",
    },
    jobs: [
      {
        title: { en: "Career Coach", zh: "求职顾问" },
        business: { en: "Luminary Career", zh: "留明求职" },
        type: { en: "Full-time", zh: "全职" },
      },
      {
        title: { en: "Insurance Agent", zh: "保险顾问" },
        business: { en: "OSSCINS", zh: "途美保险" },
        type: { en: "Full-time", zh: "全职" },
      },
    ],
  },
];
