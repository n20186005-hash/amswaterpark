# Villa Tomang Baru Field Guide：完整网站文件包

本文件包包含当前网站的可编辑前端源码、构建配置、依赖锁定文件、法律与研究文档、favicon，以及所有为本网站准备的生成图像原文件。为保持仓库轻量，压缩包不含 `node_modules`、构建产物 `dist`、版本控制目录 `.git` 和运行日志；这些均不是编辑或重新构建所必需的源码文件。

## 快速开始

在解压目录中使用已锁定的 pnpm 版本安装依赖并构建：

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## 图像与部署说明

当前在线页面使用 `/manus-storage/` 下的持久化图片 URL。所有对应的原始 PNG 文件均在压缩包的 `assets/generated/` 目录中，文件名与 `ASSET_MANIFEST.md` 一一对应。若在其他托管环境复用本站，请先将这些图片上传到目标静态资产服务，再更新 `client/src/pages/Home.tsx` 中的对应 URL。

## 包含内容

| 位置 | 内容 |
| --- | --- |
| `client/` | React 前端、页面、样式、favicon 与静态配置 |
| `server/`、`shared/` | 当前模板附带的兼容性入口和共享常量 |
| 根目录配置 | `package.json`、`pnpm-lock.yaml`、TypeScript、Vite 与格式化配置 |
| 根目录文档 | 设计构想、公开资料核对、任务清单与图片资产清单 |
| `assets/generated/` | 网站用到及为网站准备的全部 PNG 图像原文件 |
