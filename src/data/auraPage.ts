import type { Locale } from "@/lib/i18n";

type Text = Record<Locale, string>;

/** Aura Institute 详情页文案（中文为待校对的参考翻译，英文为定稿） */
export const aura = {
  eyebrow: { en: "Medical Aesthetics & Wellness", zh: "医美与健康管理" },
  hero: {
    title: { en: "Feel Good in Your Own Skin.", zh: "做自在舒适的自己。" },
    body: {
      en: "Located at Rockefeller Center in New York City, AURA Institute brings together advanced medical aesthetics and personalized wellness care.",
      zh: "AURA Institute 位于纽约洛克菲勒中心，融合先进医美技术与个性化健康护理。",
    },
    body2: {
      en: "As part of OSSC Group, we believe taking care of yourself is an important part of living well. Our approach combines Eastern aesthetic principles with modern technology to help you look and feel like the best version of yourself.",
      zh: "作为 OSSC 集团的一员，我们相信照顾自己是美好生活的重要一部分。我们将东方美学理念与现代科技结合，帮助你呈现并感受最好的自己。",
    },
  },
  services: {
    label: { en: "Our Services", zh: "服务项目" },
    title: { en: "Care That's Made for You.", zh: "为你量身定制的护理。" },
    body: {
      en: "From everyday skincare to advanced aesthetic treatments, our services are tailored to your individual needs.",
      zh: "从日常护肤到先进医美项目，我们根据你的个人需求量身定制服务。",
    },
    items: [
      {
        title: { en: "Face Design", zh: "面部设计" },
        desc: {
          en: "Personalized facial treatments focused on natural-looking results and balanced proportions.",
          zh: "个性化面部护理，注重自然效果与均衡比例。",
        },
      },
      {
        title: { en: "Skin & Glow", zh: "肌肤焕采" },
        desc: {
          en: "Advanced skincare solutions for healthier, clearer, and more radiant skin.",
          zh: "先进的护肤方案，让肌肤更健康、通透、有光泽。",
        },
      },
      {
        title: { en: "Wellness & Longevity", zh: "健康与抗衰" },
        desc: {
          en: "Wellness treatments designed to complement your self-care routine and overall well-being.",
          zh: "与日常自我护理相辅相成的健康项目，关注整体状态。",
        },
      },
      {
        title: { en: "Body Contouring", zh: "身体塑形" },
        desc: {
          en: "Non-surgical treatments focused on body contours, skin firmness, and texture.",
          zh: "非手术方式，改善身体线条、肌肤紧致度与质感。",
        },
      },
    ] as { title: Text; desc: Text }[],
  },
  approach: {
    label: { en: "Our Approach", zh: "我们的理念" },
    title: { en: "Still You. Just More Confident.", zh: "依然是你，只是更自信。" },
    body: {
      en: "We believe the best aesthetic care enhances what makes you unique. With a focus on balance, subtlety, and personalized attention, our goal is to help you feel comfortable and confident in your own skin.",
      zh: "我们相信最好的医美护理是凸显你的独特之处。注重平衡、自然与个性化关怀，帮助你在自己的肌肤里感到舒适与自信。",
    },
  },
  who: {
    label: { en: "Who We Serve", zh: "服务对象" },
    title: { en: "For Every Stage of You.", zh: "陪伴你的每个阶段。" },
    body: {
      en: "Whether you're exploring skincare for the first time, looking for subtle facial enhancements, or making wellness a bigger part of your life, we're here to help you find what feels right for you.",
      zh: "无论你是第一次接触护肤、想要细微的面部提升，还是希望让健康管理成为生活的一部分，我们都会帮你找到适合自己的方式。",
    },
  },
  tech: {
    label: { en: "Our Technology", zh: "设备与技术" },
    title: { en: "Good Care Starts with Trust.", zh: "好的护理，从信任开始。" },
    body: {
      en: "We bring together trusted aesthetic technologies, including Thermage® FLX, EMFACE®, Exion™, EXOMIND™, and BBL™, with personalized care from licensed professionals.",
      zh: "我们汇集值得信赖的医美设备，包括 Thermage® FLX、EMFACE®、Exion™、EXOMIND™ 与 BBL™，并由持证专业人员提供个性化护理。",
    },
    names: ["Thermage® FLX", "EMFACE®", "Exion™", "EXOMIND™", "BBL™"],
  },
  cta: {
    /** 跳转到 Aura 官网/预约页的链接，待补充 */
    url: "",
    title: { en: "Let's Start with You.", zh: "从你开始。" },
    body: {
      en: "Discover personalized aesthetic and wellness care at AURA Institute.",
      zh: "来 AURA Institute，体验个性化的医美与健康护理。",
    },
    button: { en: "Explore AURA Institute", zh: "了解 AURA Institute" },
  },
};
