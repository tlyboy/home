# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是 Guany 的个人主页，基于 Nuxt 4 构建。页面展示用户的 GitHub 信息和最近更新的仓库列表，背景使用必应每日壁纸。

## 常用命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器 (http://localhost:3000)
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview

# Docker 部署
docker compose up -d
```

## 技术栈

- **Nuxt 4** + **Vue 3** - 全栈框架
- **TailwindCSS 4** - 样式（通过 Vite 插件集成）
- **@nuxtjs/color-mode** - 深色/浅色主题切换
- **@egoist/tailwindcss-icons** + **@iconify-json/carbon** - 图标系统

## 代码架构

### 目录结构
```
app/
├── assets/css/main.css   # TailwindCSS 入口，定义全局样式和组件类
├── components/           # Vue 组件（如 DarkToggle.vue）
├── pages/index.vue       # 主页面，包含 header、背景图、仓库卡片、footer
└── app.vue              # 根组件
server/api/
├── user/index.ts        # GET /api/user - 获取 GitHub 用户信息
├── user/repos.ts        # GET /api/user/repos - 获取最近 6 个更新的仓库
└── background.ts        # GET /api/background - 获取必应每日壁纸 URL
types/                    # TypeScript 类型定义
```

### 关键实现

- **主题切换**: `DarkToggle.vue` 使用 View Transitions API 实现圆形扩散动画效果
- **CSS 组件**: `main.css` 中定义了 `.btn` 和 `.icon-btn` 两个 TailwindCSS 组件类
- **备案信息**: Footer 根据环境变量 `NUXT_PUBLIC_ICP_*` 和 `NUXT_PUBLIC_POLICE_*` 动态显示备案或 MIT 许可信息

## 环境变量

必需：
- `NUXT_GITHUB_TOKEN` - GitHub API Token

可选（备案信息）：
- `NUXT_PUBLIC_ICP_NUMBER` / `NUXT_PUBLIC_ICP_LINK`
- `NUXT_PUBLIC_POLICE_NUMBER` / `NUXT_PUBLIC_POLICE_LINK`

## 运行要求

- Node.js >= 22
- pnpm 10.22.0（通过 corepack 管理）
