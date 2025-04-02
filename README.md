# home

🖖 Guany 的首页

## ✨ 特性

- 📦 基于 Nuxt 3 构建，享受现代化开发体验
- 🎨 集成 TailwindCSS，快速构建美观界面
- 🌓 内置深色/浅色主题切换功能
- 📱 针对各种设备的响应式设计
- 🚀 支持一键部署到 Netlify/Vercel/Docker
- 🔧 完整的开发文档和部署指南

## 🛠️ 技术栈

- [Nuxt 3](https://nuxt.com/) - 强大的 Vue 全栈框架
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [TailwindCSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript 超集

## 📦 开始使用

### 环境准备

| 依赖项  | 版本要求 | 说明                                   |
| ------- | -------- | -------------------------------------- |
| Node.js | 22.x     | 推荐使用 fnm 或其他 Node.js 版本管理器 |
| pnpm    | 10.x     | 高性能的包管理工具                     |

### 本地开发

1. 克隆项目并安装依赖

```bash
git clone https://github.com/tlyboy/home.git
cd home
pnpm install
```

2. 配置环境变量

创建 `.env` 文件并配置以下环境变量：

| 环境变量            | 值              | 说明          | 必须 |
| ------------------- | --------------- | ------------- | ---- |
| `NUXT_GITHUB_TOKEN` | GitHub 访问令牌 | 用于 API 访问 | ✅   |

3. 启动开发服务器

```bash
pnpm dev
```

访问 `http://localhost:3000` 开始开发

## 🚀 部署指南

### Netlify 部署

1. 点击顶部 "Deploy to Netlify" 按钮
2. 登录或注册 Netlify 账号
3. 环境变量配置：

| 环境变量            | 值              | 说明          | 必须 |
| ------------------- | --------------- | ------------- | ---- |
| `NUXT_GITHUB_TOKEN` | GitHub 访问令牌 | 用于 API 访问 | ✅   |

> 📝 **部署说明**
>
> `netlify.toml` 已预配置以下内容：
>
> ```toml
> Node.js 版本：22
> 构建命令：pnpm run build
> 发布目录：dist
> ```

### Vercel 部署

1. 点击顶部 "Deploy with Vercel" 按钮
2. 登录或注册 Vercel 账号
3. 必要环境变量配置：

| 环境变量                       | 值              | 说明           | 必须 |
| ------------------------------ | --------------- | -------------- | ---- |
| `NUXT_GITHUB_TOKEN`            | GitHub 访问令牌 | 用于 API 访问  | ✅   |
| `ENABLE_EXPERIMENTAL_COREPACK` | `1`             | 启用 pnpm 支持 | ✅   |

> ⚠️ **重要提示**
>
> - `ENABLE_EXPERIMENTAL_COREPACK=1` 为必填项，否则部署会失败
> - 项目根目录的 `vercel.json` 已包含必要配置，无需额外设置

### Docker 部署

1. 使用 Docker Compose（推荐）

```bash
# 克隆项目
git clone https://github.com/tlyboy/home.git
cd home

# 创建 .env 文件（可选）
echo "NUXT_GITHUB_TOKEN=your_token" > .env

# 启动服务
docker compose up -d
```

2. 使用 Docker 命令

```bash
# 构建镜像
docker build -t home .

# 运行容器（使用 .env 文件）
docker run -d -p 3000:3000 --env-file .env --name home home
```

> 📝 **环境变量配置**
>
> 你可以通过以下两种方式配置环境变量：
>
> 1. 使用 `.env` 文件（推荐）：
>
>    ```bash
>    # 创建 .env 文件
>    echo "NUXT_GITHUB_TOKEN=your_token" > .env
>
>    # Docker Compose 会自动读取 .env 文件
>    docker compose up -d
>
>    # 或使用 Docker 命令时指定 .env 文件
>    docker run -d -p 3000:3000 --env-file .env --name home home
>    ```
>
> 2. 直接设置环境变量：
>
>    ```bash
>    # Docker Compose
>    NUXT_GITHUB_TOKEN=your_token docker compose up -d
>
>    # Docker 命令
>    docker run -d -p 3000:3000 -e NUXT_GITHUB_TOKEN=your_token --name home home
>    ```

访问 `http://localhost:3000` 即可查看网站。

## 📄 开源协议

本项目采用 [MIT 协议](./LICENSE) 开源，欢迎 Star 和贡献！

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支
3. 提交改动
4. 发起 Pull Request

## 📮 问题反馈

如有问题或建议，欢迎提交 [Issue](https://github.com/tlyboy/home/issues)
