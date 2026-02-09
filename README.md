# home

🖖 Guany's homepage

- 📦 Built with Nuxt 3 for a modern development experience
- 🎨 Integrated with TailwindCSS for building beautiful interfaces
- 🌓 Built-in dark / light theme switching
- 📱 Responsive design for all devices
- 🚀 One-click deployment to Vercel / Netlify / Docker

## Install

```bash
git clone https://github.com/tlyboy/home.git
```

## Usage

### Prerequisites

| Dependency | Requirement | Description                                          |
| ---------- | ----------- | ---------------------------------------------------- |
| Node.js    | 24.x        | Recommended to use fnm or another Node.js version manager |
| corepack   | enable      | Enable corepack with the `corepack enable` command   |

### Local Development

Copy `.env.example` to `.env` and configure:

```sh
# GitHub Token (required)
NUXT_GITHUB_TOKEN="your_github_token"

# ICP filing info (optional)
NUXT_PUBLIC_ICP_NUMBER="your_icp_number"
NUXT_PUBLIC_ICP_LINK="https://beian.miit.gov.cn/"
NUXT_PUBLIC_POLICE_NUMBER="your_police_number"
NUXT_PUBLIC_POLICE_LINK="your_police_link"
```

> **Note**: ICP filing info is optional. If configured, filing links will be displayed at the bottom of the page; otherwise, MIT license and copyright information will be shown.

```bash
pnpm install
pnpm dev
pnpm build
```

### Deployment

#### Vercel Deployment

1. Click the "Deploy with Vercel" button at the top
2. Sign in or sign up for a Vercel account
3. Configure environment variables:

| Environment Variable           | Value              | Required | Description          |
| ------------------------------ | ------------------ | -------- | -------------------- |
| `ENABLE_EXPERIMENTAL_COREPACK` | `1`                | ✅       | Enable corepack      |
| `NUXT_GITHUB_TOKEN`            | GitHub access token | ✅       | For API access       |
| `NUXT_PUBLIC_ICP_NUMBER`       | ICP filing number  | ⬜       | ICP filing info      |
| `NUXT_PUBLIC_ICP_LINK`         | ICP filing link    | ⬜       | ICP filing URL       |
| `NUXT_PUBLIC_POLICE_NUMBER`    | Police filing number | ⬜     | Police filing info   |
| `NUXT_PUBLIC_POLICE_LINK`      | Police filing link | ⬜       | Police filing URL    |

#### Netlify Deployment

1. Click the "Deploy to Netlify" button at the top
2. Sign in or sign up for a Netlify account
3. Configure environment variables:

| Environment Variable        | Value              | Required | Description          |
| --------------------------- | ------------------ | -------- | -------------------- |
| `NUXT_GITHUB_TOKEN`         | GitHub access token | ✅       | For API access       |
| `NUXT_PUBLIC_ICP_NUMBER`    | ICP filing number  | ⬜       | ICP filing info      |
| `NUXT_PUBLIC_ICP_LINK`      | ICP filing link    | ⬜       | ICP filing URL       |
| `NUXT_PUBLIC_POLICE_NUMBER` | Police filing number | ⬜     | Police filing info   |
| `NUXT_PUBLIC_POLICE_LINK`   | Police filing link | ⬜       | Police filing URL    |

#### Docker Deployment

```sh
docker compose up -d
```

## License

[MIT](https://opensource.org/licenses/MIT) © Guany
