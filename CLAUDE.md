# 纽约留学生网 官网 (NY Students Network)

## 项目定位
- 官网的作用：**业务介绍 + 服务导流**。访客了解各业务线，再通过微信 / 电话 / 表单联系对应业务。
- 目标用户：在纽约的中国留学生及家长、准留学生。
- 语言：**中英双语**，英文为默认语言（`/en`，主站），中文（`/zh`）。所有文案放在 `messages/zh.json` 和 `messages/en.json`，不要把文字写死在组件里。

## 业务线（栏目暂定，后续可调整）
| 业务线 | slug | 说明 |
|---|---|---|
| 医美 / 牙科 | `medical` | 待补充详细介绍 |
| 留明 | `liuming` | 待补充详细介绍 |
| 快递 | `express` | 待补充详细介绍 |
| Celehome | `celehome` | 待补充详细介绍 |
| 美窝 USWOO（租房） | `uswoo` | 已有独立官网 https://uswoo-website.vercel.app/ ，主站只做简介 + 跳转 |
| 保险 | `insurance` | 待补充详细介绍 |
| Wukong | `wukong` | 待补充详细介绍 |
| 基金会 | `foundation` | 待补充详细介绍 |

业务线数据统一放在 `src/data/services.ts`，首页和详情页都从这里读取。
每条业务线的内容框架：`name` 名称、`summary` 一句话介绍、`offerings` 具体服务（标题+说明）、`audience` 受众人群、`link` 跳转链接（官网/预约/小程序，留空显示「链接待补充」）。文件顶部有填写说明。

## 页面框架
导航：Services 业务介绍 / News & Stories 新闻与故事 / About Us 关于我们 / Contact 联系我们（黑色按钮）。点 Logo 回首页。
| 页面 | 路由 | 说明 |
|---|---|---|
| 首页 | `/[locale]` | 简介 + 业务线入口 + 联系 |
| 业务介绍 | `/[locale]/services` | 全部业务线总览 |
| 业务线详情 | `/[locale]/services/[slug]` | 数据来自 `services.ts` |
| 新闻与故事 | `/[locale]/news` | 新闻动态 / 用户故事 / 留学指南（内容待补充） |
| 关于我们 | `/[locale]/about` | 集团介绍、历程、团队、资质（内容待补充） |
| 联系我们 | `/[locale]/contact` | 微信 / 电话 / 邮箱 / 地址 |
页脚：业务线链接 + 公司链接。隐私政策、服务条款页暂未做。

## 技术栈
- Next.js (App Router) + TypeScript + Tailwind CSS
- 中英路由：`src/app/[locale]/...`，简单自实现，不引入额外 i18n 库
- 部署目标：Vercel

## 品牌
- Logo：放在 `public/logo.svg`（或 `.png`），尚未提供时用文字占位
- 主色：定义在 `src/app/globals.css` 的 CSS 变量 `--brand`，尚未提供时用占位色
- 风格：干净、可信、手机优先（访客多用手机）

## 约定
- 每个业务线详情页都要有明确的联系入口（微信二维码 / 电话 / 表单）。
- 先做内容骨架，真实文案和图片后补；占位内容必须标注「待补充」。
- 每完成一个阶段提交一次 git。
- 常用命令：`npm run dev`（本地预览），`npm run build`（上线前检查）。
