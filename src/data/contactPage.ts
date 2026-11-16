import type { Locale } from "@/lib/i18n";

type Text = Record<Locale, string>;

/** Contact 页：左图右表单。表单后端/邮箱尚未接入，提交仅提示。 */
export const contactPage = {
  image: "/images/contact-bridge.webp",
  label: { en: "CONTACT US", zh: "联系我们" } as Text,
  title: { en: "Let's Talk.", zh: "聊一聊吧。" } as Text,
  body: {
    en: "Questions about our services? Send us a message and we'll get back to you soon.",
    zh: "对我们的服务有疑问？留言给我们，我们会尽快回复。",
  } as Text,
  form: {
    name: { en: "Name", zh: "姓名" } as Text,
    email: { en: "Email", zh: "邮箱" } as Text,
    phone: { en: "Phone / WeChat", zh: "电话 / 微信" } as Text,
    topic: { en: "I'm interested in", zh: "咨询方向" } as Text,
    options: [
      { en: "General inquiry", zh: "综合咨询" },
      { en: "Education", zh: "留学服务" },
      { en: "Health & Beauty", zh: "医疗与医美" },
      { en: "Housing", zh: "租房购房" },
      { en: "Insurance", zh: "保险" },
      { en: "Careers", zh: "职业机会" },
      { en: "Other", zh: "其他" },
    ] as Text[],
    message: { en: "Message", zh: "留言" } as Text,
    submit: { en: "Send Message", zh: "发送" } as Text,
    pending: {
      en: "Form is not connected yet — nothing was sent (to be added).",
      zh: "表单尚未接入，暂不会真正发送（待补充）。",
    } as Text,
  },
};
