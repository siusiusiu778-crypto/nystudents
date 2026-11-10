// 首页图片位置。
// 把图片放进 public/images/，然后把对应的 src 填成 "/images/文件名.jpg"。
// src 留空时，页面会显示灰色「图片待补充」占位框。
// 建议：横图、宽度不小于 1600px，单张压缩到 500KB 以内。

export const homeImages = {
  // Hero，整幅背景图（横图，建议 2400×1350 以上；上面会盖一层 50% 黑色遮罩保证文字清晰）
  // hero.video 填了视频就优先播放视频（静音循环），src 作为视频加载前的封面图
  hero: { src: "", video: "/videos/hero.mp4" },
  // Our Story，左侧图（4:3）
  story: { src: "/images/story-washington-square.webp" },
  // Our Businesses 四张卡片顶部图（16:10），顺序与 messages 里 home.businesses.groups 一致
  businesses: [
    { src: "/images/biz-realestate.webp" }, // 01 Real Estate & Lifestyle 房产与生活
    { src: "/images/biz-education.webp" }, // 02 Education & Career 教育与职业
    { src: "/images/biz-health.webp" }, // 03 Health & Wellness 健康与美丽
    { src: "/images/biz-community.webp" }, // 04 Regional Services & Community 地区服务与社群
  ],
  // 业务展示（版本 B/C 的卡片），按顺序循环使用
  showcase: [
    { src: "/images/showcase-campus.webp" }, // 校园
    { src: "/images/showcase-party.webp" }, // 社群聚会
    { src: "/images/showcase-home.webp" }, // 公寓客厅
    { src: "/images/showcase-event.jpg" }, // 咨询
    { src: "/images/showcase-aura.webp" }, // Aura Institute
    { src: "/images/showcase-tsi.webp" }, // The Smile Institute
    { src: "/images/showcase-moving.webp" }, // 快递/仓储
  ],



  // Our Network，宽幅横图（21:9）
  network: { src: "/images/network-map.webp" },
};

// Our Network 下方的 Logo 条：两排，每排横向等距排开，显示为灰度。
// logo 放在 public/images/logos/（透明底 PNG/SVG 最佳，横向为宜）；src 留空显示「Logo 待补充」占位。
// 每排增减条目即可。
const logo = (name: string, file: string) => ({ name, src: `/images/logos/${file}.png` });
export const networkLogos = [
  [
    logo("Harvard CSSA", "harvard-cssa"),
    logo("MIT CSSA", "mit-cssa"),
    logo("Columbia CUCSSA", "cucssa"),
    logo("USC CSSA", "usc-cssa"),
    logo("Boston University CSSA", "bu-cssa"),
    logo("CSSA NYU", "nyu-cssa"),
  ],
  [
    logo("NYU Tandon CSSA", "nyu-tandon-cssa"),
    logo("FU CSSA", "fu-cssa"),
    logo("CSSAD", "cssad"),
    logo("NYIT CSSA", "nyit-cssa"),
    logo("Pace University CSSA", "pace-cssa"),
    logo("CSSA UCR", "ucr-cssa"),
  ],
];
