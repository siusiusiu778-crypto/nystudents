import type { Locale } from "@/lib/i18n";

type Text = Record<Locale, string>;
type Item = { title: Text; desc: Text };

/**
 * USWOO 详情页文案（版式参考 Aura 页）。中文为定稿，英文为对应译文。
 * 配图暂用站内现有图，之后替换成 USWOO 自己的图（放进 public/images/ 后改下面路径）。
 */
export const uswooPage = {
  /** 页面大标题 */
  title: { en: "USWOO Realty", zh: "美窝房产 USWOO" } as Text,
  eyebrow: { en: "Rentals & Settling In", zh: "租房与安居" } as Text,
  hero: {
    body: {
      en: "Rental and settling-in services to help you find your place in the city.",
      zh: "租房与安居服务，帮你找到适合的城市和住处。",
    } as Text,
    cta: { en: "Learn More", zh: "了解更多" } as Text,
    image: "/images/showcase-home.webp",
  },

  services: {
    label: { en: "OUR SERVICES", zh: "业务介绍" } as Text,
    title: { en: "Find Your Place in the City.", zh: "找到属于你的城市生活。" } as Text,
    body: {
      en: "USWOO Realty is the real estate brand of OSSC and has grown alongside OSSC since 2012. USWOO does more than help you find an apartment — it helps you decide where to live, how to settle in, and what comes next. Today, we operate across six core markets: New York and New Jersey, Chicago, Los Angeles, Washington, D.C., Philadelphia, and Boston.",
      zh: "美窝房产（USWOO Realty）是 OSSC 旗下的房产服务品牌，自2012年起与 OSSC 共同成长。美窝不只是帮你找一套公寓，更帮助你判断住在哪里、如何安顿下来，以及接下来的每一步。目前业务覆盖纽约及新泽西、芝加哥、洛杉矶、华盛顿特区、费城和波士顿六大核心市场。",
    } as Text,
    items: [
      {
        title: { en: "Choose the Right Neighborhood", zh: "选对居住区域" },
        desc: {
          en: "From neighborhood vibe and commute options to school resources and lifestyle, we help you decide where fits you best.",
          zh: "从社区氛围、通勤方式、学区资源到生活方式，帮助你判断哪里最适合自己。",
        },
      },
      {
        title: { en: "Find a Home & Move In", zh: "找房与搬家" },
        desc: {
          en: "We match you with suitable listings and support you from touring and signing to moving in.",
          zh: "匹配合适的房源，从看房、签约到搬入，全程提供支持。",
        },
      },
      {
        title: { en: "Settle In & Connect", zh: "入住与社区连接" },
        desc: {
          en: "After you move in, we keep supporting you with local resources, community events, and connections, so you can feel at home in your new city faster.",
          zh: "入住之后，继续提供本地资源、社区活动与人脉连接，帮助你更快融入新城市。",
        },
      },
    ] as Item[],
    /** 顺序同 items；留空则显示「图片待补充」 */
    images: [
      "/images/biz-realestate.webp",
      "/images/showcase-moving.webp",
      "/images/showcase-party.webp",
    ],
  },

  audience: {
    label: { en: "TARGET AUDIENCE", zh: "服务人群" } as Text,
    title: {
      en: "Here for Every Stage of Life in the U.S.",
      zh: "陪伴每一段在美国的生活。",
    } as Text,
    body: {
      en: "USWOO is dedicated to people who study, live, and work in the U.S., offering practical rental and settling-in support that fits each stage of their housing needs.",
      zh: "美窝长期致力于服务在美国学习、生活和工作的人群，根据不同阶段的居住需求，提供贴合实际的租房与安居支持。",
    } as Text,
    items: [
      {
        title: { en: "Students in the U.S.", zh: "在美留学生" },
        desc: {
          en: "For students heading to the U.S. or already enrolled: neighborhood selection near campus, commute planning, and rental guidance.",
          zh: "面向即将赴美或在读的学生，提供校园周边选区、通勤规划与租房指导。",
        },
      },
      {
        title: {
          en: "Young Professionals & Workers in the U.S.",
          zh: "职场新人与在美工作者",
        },
        desc: {
          en: "For those staying in the U.S. to work after graduation or relocating for work: we match your workplace and lifestyle to the right home in the right city.",
          zh: "面向毕业后留美工作或工作调动的人群，结合工作地点与生活方式，找到合适的城市居所。",
        },
      },
      {
        title: { en: "Renters New to a City", zh: "初到新城市的租客" },
        desc: {
          en: "For renters who have just moved to a new city and don't know it well yet: neighborhood introductions, help finding a home, and local resources after move-in.",
          zh: "面向刚搬到新城市、对当地还不熟悉的租客，提供街区介绍、找房支持与入住后的本地资源。",
        },
      },
    ] as Item[],
    image: "/images/showcase-campus.webp",
  },

  culture: {
    label: { en: "OUR CULTURE", zh: "企业文化" } as Text,
    title: {
      en: "Good Communication Makes Good Service.",
      zh: "沟通好，才能服务好。",
    } as Text,
    items: [
      {
        title: { en: "A Team That Gets It", zh: "懂你的团队" },
        desc: {
          en: "Every member of the USWOO team has studied abroad, and most graduated from well-known North American universities, so we understand what it's really like to find a home and settle in overseas.",
          zh: "美窝的团队成员都有海外求学经历，大多毕业于北美知名院校，更能理解在异国找房和安家的真实处境。",
        },
      },
      {
        title: { en: "Communication at the Core", zh: "以沟通为核心" },
        desc: {
          en: "We believe the core of real estate service is combining an understanding of the overseas property market with each client's specific needs, through good communication.",
          zh: "美窝认为，房产服务的核心是把对海外房产市场的理解，通过良好的沟通与客户的具体需求结合起来。",
        },
      },
      {
        title: { en: "Rooted Locally", zh: "扎根本地" },
        desc: {
          en: "We have served more than 200,000 clients, complete more than 20,000 leases every year, and work with more than 300 developers, brokerages, and service providers, using real local experience to help every renter find a home.",
          zh: "累计服务超过20万名客户，每年完成超过2万份租约，与300多家开发商、经纪公司及服务商合作，用真实的本地经验帮助每位租客找到家。",
        },
      },
    ] as Item[],
  },

  cta: {
    title: { en: "Let's Find Your Place.", zh: "一起找到你的住处。" } as Text,
    body: {
      en: "Explore rentals and settling-in support on the USWOO website.",
      zh: "到 USWOO 官网了解租房与安居服务。",
    } as Text,
    button: { en: "Explore USWOO", zh: "了解 USWOO" } as Text,
  },
};
