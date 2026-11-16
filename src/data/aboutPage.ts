import type { Locale } from "@/lib/i18n";

type Text = Record<Locale, string>;

/** About Us 页图片：放在 public/images/，src 留空显示「图片待补充」占位框 */
export const aboutImages = {
  hero: "/images/about-hero.webp",
  steps: [
    "/images/showcase-campus.webp", // Study
    "/images/showcase-home.webp", // Settle In
    "/images/showcase-event.jpg", // Work
    "/images/biz-realestate.webp", // Build a Life
  ],
  culture: "/images/showcase-party.webp",
  culture2: "/images/showcase-event.jpg",
  ahead: "/images/network-map.webp", // Looking Ahead 面板背景
};

/** About Us 页文案（英文为定稿，中文为待校对的参考翻译） */
export const about = {
  hero: {
    label: { en: "ABOUT US", zh: "关于我们" } as Text,
    title: { en: "It All Started in New York.", zh: "一切，从纽约开始。" } as Text,
    body: [
      {
        en: "Founded in 2012, OSSC began by helping international students navigate life in New York, from finding a place to live to settling into a new city.",
        zh: "OSSC 成立于 2012 年，最初帮助国际学生在纽约安顿生活，从找房子到适应一座新城市。",
      },
      {
        en: "Over the years, what started as student services has grown into a group of businesses spanning education, career development, real estate, healthcare, and everyday services.",
        zh: "多年来，从最初的留学生服务，发展成涵盖教育、职业发展、房产、医疗和日常生活服务的集团业务。",
      },
    ] as Text[],
  },
  journey: {
    label: { en: "OUR JOURNEY", zh: "我们的历程" } as Text,
    title: { en: "As Life Changes, So Do We.", zh: "生活在变，我们也在变。" } as Text,
    body: [
      {
        en: "Our story started with students, but it didn't end at graduation.",
        zh: "我们的故事从学生开始，但并未在毕业时结束。",
      },
      {
        en: "As the people we served began their careers, moved into new homes, and built their lives beyond school, we saw how their needs continued to change. That understanding shaped the way OSSC grew, bringing new businesses and services into the group.",
        zh: "当我们服务的人开始工作、搬进新家、在校园之外建立生活，我们看到他们的需求也在不断变化。这份理解塑造了 OSSC 的成长方式，让新的业务与服务陆续加入集团。",
      },
    ] as Text[],
    steps: [
      {
        tag: { en: "Study", zh: "求学" },
        title: { en: "The First Step.", zh: "第一步。" },
        desc: {
          en: "From choosing a school to preparing for a new city, we guide students and families, and support life beyond the classroom.",
          zh: "从选校到适应新城市，我们陪伴学生和家庭，也为课堂之外的生活提供支持。",
        },
      },
      {
        tag: { en: "Settle In", zh: "安顿" },
        title: { en: "Finding Your Place.", zh: "找到属于你的位置。" },
        desc: {
          en: "Finding an apartment, arranging insurance, shipping belongings — we make settling into everyday life easier.",
          zh: "找公寓、办保险、寄行李，我们让融入日常生活更轻松。",
        },
      },
      {
        tag: { en: "Work", zh: "职场" },
        title: { en: "Starting What's Next.", zh: "开启下一站。" },
        desc: {
          en: "Through career guidance and job preparation, we help young professionals move from student life to working life.",
          zh: "通过职业指导与求职准备，帮助年轻人从校园走向职场。",
        },
      },
      {
        tag: { en: "Build a Life", zh: "安家立业" },
        title: { en: "Making a Life Your Own.", zh: "过上自己的生活。" },
        desc: {
          en: "From buying a home to caring for your health and well-being, our businesses grow with your priorities.",
          zh: "从买房到照顾健康与身心，我们的业务随你的需求一路相伴。",
        },
      },
    ] as { tag: Text; title: Text; desc: Text }[],
  },
  culture: {
    label: { en: "OUR CULTURE", zh: "我们的文化" } as Text,
    title: { en: "The People Behind OSSC.", zh: "OSSC 背后的人。" } as Text,
    body: [
      {
        en: "OSSC brings together teams working in different industries, each with their own experiences, skills, and perspectives.",
        zh: "OSSC 汇集了来自不同行业的团队，每个人都有自己的经验、技能与视角。",
      },
      {
        en: "Some of us work directly with students and families. Others focus on real estate, healthcare, marketing, or the day-to-day operations that keep our businesses running.",
        zh: "有的同事直接服务学生和家庭，有的专注于房产、医疗、市场营销，或支撑业务运转的日常运营。",
      },
      {
        en: "We share ideas across teams, learn from one another, and work together to solve problems. It's this mix of people and experiences that continues to shape how OSSC grows.",
        zh: "我们跨团队分享想法、互相学习、一起解决问题。正是这种人与经验的交融，持续塑造着 OSSC 的成长。",
      },
    ] as Text[],
  },
  ahead: {
    label: { en: "LOOKING AHEAD", zh: "展望未来" } as Text,
    title: {
      en: "From New York, and Still Growing.",
      zh: "始于纽约，仍在成长。",
    } as Text,
    body: [
      {
        en: "New York is where OSSC began, and it's where we've learned so much about the people and communities we serve.",
        zh: "纽约是 OSSC 的起点，也让我们深入了解所服务的人群与社区。",
      },
      {
        en: "As we continue to expand into new industries and markets, our focus remains on understanding what people need and building businesses that can support them through life's changes.",
        zh: "随着我们不断进入新的行业与市场，我们始终专注于理解人们的需求，打造能陪伴他们走过生活变化的业务。",
      },
      {
        en: "There's more to come, and we're looking forward to what we build next.",
        zh: "更多精彩即将到来，我们期待下一步的成果。",
      },
    ] as Text[],
    cta: { en: "Explore Our Businesses", zh: "探索我们的业务" } as Text,
  },
};
