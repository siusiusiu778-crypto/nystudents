import type { Locale } from "@/lib/i18n";

type Text = Record<Locale, string>;

/** Partnership 页文案（英文为定稿，中文为待校对的参考翻译） */
export const partnership = {
  hero: {
    label: { en: "PARTNERSHIPS", zh: "合作" } as Text,
    title: {
      en: "Let's Build Something Together.",
      zh: "一起创造点什么。",
    } as Text,
    body: {
      en: "Connect with a New York-based group bringing together businesses, expertise, and communities across multiple industries.",
      zh: "与总部位于纽约的集团携手，连接多个行业的业务、专业能力与社群。",
    } as Text,
    cta: { en: "Partner With Us", zh: "与我们合作" } as Text,
  },
  why: {
    label: { en: "WHY OSSC", zh: "为什么选择 OSSC" } as Text,
    title: {
      en: "We Know the Communities We Serve.",
      zh: "我们了解所服务的社群。",
    } as Text,
    body: [
      {
        en: "With roots in international student services, OSSC has spent years understanding the needs of students and young professionals as they study, work, and build their lives.",
        zh: "OSSC 起步于国际学生服务，多年来深入了解学生与年轻职场人在学习、工作和生活中的需求。",
      },
      {
        en: "Today, our businesses and community networks create opportunities for partners to connect with these audiences in meaningful ways.",
        zh: "如今，我们的业务与社群网络为合作伙伴创造机会，以有意义的方式接触这些人群。",
      },
    ] as Text[],
  },
  strengths: {
    label: { en: "OUR STRENGTHS", zh: "我们的优势" } as Text,
    title: {
      en: "More Than a Network of Businesses.",
      zh: "不只是一个业务网络。",
    } as Text,
    body: {
      en: "Our experience, industry expertise, and community connections bring different strengths together under one group.",
      zh: "我们的经验、行业专业能力与社群连接，在同一个集团下汇聚成不同的优势。",
    } as Text,
    items: [
      {
        title: { en: "Audience Understanding", zh: "深入了解受众" },
        desc: {
          en: "Years of working with international students and young professionals have shaped our understanding of their needs, priorities, and everyday challenges.",
          zh: "多年服务国际学生与年轻职场人，让我们深刻理解他们的需求、关注点与日常挑战。",
        },
      },
      {
        title: { en: "Diverse Business Expertise", zh: "多元的业务专长" },
        desc: {
          en: "Our businesses span education, career development, real estate, insurance, healthcare, and lifestyle services, creating opportunities for collaboration across industries.",
          zh: "我们的业务涵盖教育、职业发展、房产、保险、医疗和生活服务，为跨行业合作创造机会。",
        },
      },
      {
        title: { en: "Community Connections", zh: "社群连接" },
        desc: {
          en: "Through our regional platforms, business networks, and community initiatives, we connect with students, young professionals, and local communities.",
          zh: "通过各地区平台、商业网络和社群活动，我们连接学生、年轻职场人与本地社区。",
        },
      },
    ] as { title: Text; desc: Text }[],
  },
  collaborate: {
    label: { en: "HOW WE COLLABORATE", zh: "合作方式" } as Text,
    title: {
      en: "Different Ways to Work Together.",
      zh: "多种携手方式。",
    } as Text,
    body: {
      en: "Explore opportunities to collaborate with OSSC and our businesses through services, brands, education, and community initiatives.",
      zh: "通过服务、品牌、教育和社群项目，探索与 OSSC 及旗下业务合作的机会。",
    } as Text,
    items: [
      {
        title: { en: "Business & Service Partnerships", zh: "业务与服务合作" },
        desc: {
          en: "Work with our businesses to explore new services, shared projects, and opportunities across industries.",
          zh: "与我们的业务线合作，探索新服务、共同项目以及跨行业机会。",
        },
      },
      {
        title: { en: "Brand & Marketing Partnerships", zh: "品牌与营销合作" },
        desc: {
          en: "Connect with students, young professionals, and local communities through brand campaigns, events, and collaborative marketing.",
          zh: "通过品牌活动、线下活动和联合营销，触达学生、年轻职场人与本地社区。",
        },
      },
      {
        title: {
          en: "Education & Community Partnerships",
          zh: "教育与社群合作",
        },
        desc: {
          en: "Collaborate on educational programs, career initiatives, student events, and community projects that bring people and organizations together.",
          zh: "共同举办教育项目、职业发展活动、学生活动和社群项目，把人与机构连接在一起。",
        },
      },
    ] as { title: Text; desc: Text }[],
  },
  contact: {
    label: { en: "GET IN TOUCH", zh: "联系我们" } as Text,
    title: { en: "Let's Start a Conversation.", zh: "聊聊你的想法。" } as Text,
    body: {
      en: "Have a partnership idea in mind? We'd love to learn more about your business and explore how we can work together.",
      zh: "有合作想法吗？我们很乐意了解你的业务，一起探讨合作的可能。",
    } as Text,
    cta: { en: "Contact Our Team", zh: "联系我们的团队" } as Text,
  },
  form: {
    name: { en: "Full Name", zh: "姓名" } as Text,
    company: { en: "Company / Organization", zh: "公司 / 机构" } as Text,
    email: { en: "Email Address", zh: "邮箱" } as Text,
    interest: { en: "Partnership Interest", zh: "合作意向" } as Text,
    options: [
      { en: "Business & Service Partnerships", zh: "业务与服务合作" },
      { en: "Brand & Marketing Partnerships", zh: "品牌与营销合作" },
      { en: "Education & Community Partnerships", zh: "教育与社群合作" },
      { en: "Other", zh: "其他" },
    ] as Text[],
    idea: { en: "Tell Us About Your Idea", zh: "介绍一下你的想法" } as Text,
    submit: { en: "Send Inquiry", zh: "提交咨询" } as Text,
    pending: {
      en: "The form isn't connected yet — please reach out through our Contact page.",
      zh: "表单暂未接入，请通过「联系我们」页面联系。",
    } as Text,
  },
};
