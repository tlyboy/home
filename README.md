# home

🖖 Guany 的首页

- 📦 基于 Nuxt 3 构建，享受现代化开发体验
- 🎨 集成 TailwindCSS，快速构建美观界面
- 🌓 内置深色/浅色主题切换功能
- 📱 针对各种设备的响应式设计
- 🚀 支持一键部署到 Vercel/Netlify/Docker

## 安装

```bash
git clone https://github.com/tlyboy/home.git
```

## 使用说明

### 环境准备

| 依赖项   | 要求   | 说明                                            |
| -------- | ------ | ----------------------------------------------- |
| Node.js  | 24.x   | 推荐使用 fnm 或其他 Node.js 版本管理器          |
| corepack | enable | 启用 corepack 功能，使用 `corepack enable` 命令 |

### 本地开发

复制 `.env.example` 为 `.env` 并配置：

```sh
# GitHub Token（必需）
NUXT_GITHUB_TOKEN="your_github_token"

# 备案信息配置（可选）
NUXT_PUBLIC_ICP_NUMBER="your_icp_number"
NUXT_PUBLIC_ICP_LINK="https://beian.miit.gov.cn/"
NUXT_PUBLIC_POLICE_NUMBER="your_police_number"
NUXT_PUBLIC_POLICE_LINK="your_police_link"
```

> **注意**：备案信息为可选配置。如果配置了备案信息，页面底部将显示备案链接；如果未配置，则显示 MIT 许可和版权信息。

```bash
pnpm install
pnpm dev
pnpm build
```

### 部署

#### Vercel 部署

1. 点击顶部 "Deploy with Vercel" 按钮
2. 登录或注册 Vercel 账号
3. 环境变量配置：

| 环境变量                       | 值              | 必需 | 说明             |
| ------------------------------ | --------------- | ---- | ---------------- |
| `ENABLE_EXPERIMENTAL_COREPACK` | `1`             | ✅   | 启用 corepack    |
| `NUXT_GITHUB_TOKEN`            | GitHub 访问令牌 | ✅   | 用于 API 访问    |
| `NUXT_PUBLIC_ICP_NUMBER`       | ICP 备案号      | ⬜   | ICP 备案信息     |
| `NUXT_PUBLIC_ICP_LINK`         | ICP 备案链接    | ⬜   | ICP 备案跳转地址 |
| `NUXT_PUBLIC_POLICE_NUMBER`    | 公安备案号      | ⬜   | 公安备案信息     |
| `NUXT_PUBLIC_POLICE_LINK`      | 公安备案链接    | ⬜   | 公安备案跳转地址 |

#### Netlify 部署

1. 点击顶部 "Deploy to Netlify" 按钮
2. 登录或注册 Netlify 账号
3. 环境变量配置：

| 环境变量                    | 值              | 必需 | 说明             |
| --------------------------- | --------------- | ---- | ---------------- |
| `NUXT_GITHUB_TOKEN`         | GitHub 访问令牌 | ✅   | 用于 API 访问    |
| `NUXT_PUBLIC_ICP_NUMBER`    | ICP 备案号      | ⬜   | ICP 备案信息     |
| `NUXT_PUBLIC_ICP_LINK`      | ICP 备案链接    | ⬜   | ICP 备案跳转地址 |
| `NUXT_PUBLIC_POLICE_NUMBER` | 公安备案号      | ⬜   | 公安备案信息     |
| `NUXT_PUBLIC_POLICE_LINK`   | 公安备案链接    | ⬜   | 公安备案跳转地址 |

#### Docker 部署

```sh
docker compose up -d
```

## 使用许可

[MIT](https://opensource.org/licenses/MIT) © Guany
