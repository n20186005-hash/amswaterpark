# Amsterdam Waterpark Visitor Guide：完整交付包

本交付包包含当前可编辑的 Astro 网站源码、Cloudflare Worker 静态资产入口、精确版本依赖配置、`pnpm-lock.yaml`、中英双语页面、独立法律页面、JSON-LD、地图配置、favnicon 全套和全部四张实景照片原文件。

为避免把可由锁定文件恢复的依赖目录混入交付包，压缩包**不包含** `node_modules`、构建产物 `dist`、版本控制目录 `.git` 与临时日志。它们不是编辑或重新构建所必需的源码；重新安装时会由锁定文件精确恢复。

## 从干净环境开始

```bash
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm exec wrangler deploy --dry-run
```

如果当前环境的 Corepack 签名缓存无法验证 pnpm，可以先更新 Corepack；本项目本身将完整 pnpm 版本固定为 `pnpm@10.11.1`。

## 部署到 Cloudflare Worker

这是无数据库、无登录、无 CMS 的静态网站。`worker.js` 仅将请求交由 Cloudflare Assets 处理，`wrangler.jsonc` 使用 `dist/` 作为资产目录。要设置正式域名，请只在构建时设置 `SITE_URL`：

```bash
SITE_URL=https://your-real-domain.example pnpm build
```

只有设置了 `SITE_URL`，canonical、Open Graph 绝对 URL 和 `@astrojs/sitemap` 才会生成；没有域名时，网站仍可正常构建，且不会写入占位域名。

## 照片与版权

全部原始实景照片位于 `assets/photos/`。网站页面使用持久 CDN 地址以适配部署，压缩包中仍保留同一批照片的本地原件。请参见 `PHOTO_MANIFEST.md` 了解来源与归因要求。
