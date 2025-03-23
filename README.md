# home

🖖 Guany 的首页

## 部署

### 使用 Vercel 部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tlyboy/home)

1. 点击上方的 "Deploy with Vercel" 按钮
2. 如果没有登录，需要先登录 Vercel 账号
3. 设置以下环境变量:
   - `NUXT_GITHUB_USER_NAME`: 你的 GitHub 用户名

项目已包含 `vercel.json` 配置文件，无需额外配置。

### 使用 Netlify 部署

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tlyboy/home)

1. 点击上方的 "Deploy to Netlify" 按钮
2. 如果没有登录，需要先登录 Netlify 账号
3. 设置以下环境变量:
   - `NUXT_GITHUB_USER_NAME`: 你的 GitHub 用户名

项目已包含 `netlify.toml` 配置文件，已预配置：

- Node.js 版本: 22
- 构建命令: `pnpm run build`
- 发布目录: `dist`

### 本地开发

1. 克隆项目

```bash
git clone https://github.com/tlyboy/home.git
```

2. 安装依赖

```bash
pnpm install
```

3. 运行开发服务器

```bash
pnpm dev
```
