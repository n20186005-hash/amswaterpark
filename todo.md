# 内容扩展与验收清单

- [x] 审阅现有主页、法律页面与研究笔记，识别需要扩展的具体文案位置。
- [x] 核对从 Soekarno–Hatta 机场、公共交通与出租车/网约车抵达 Kuta Jaya 的公共事实与免责声明边界。
- [x] 核对 Pasar Kemis 与 Kuta Jaya 的地方背景，避免把未经证实的故事或传说写成事实。
- [x] 将 WC、停车、餐饮、住宿、商超、加油/充电、医疗与现金服务补充为中立的按类型说明。
- [x] 扩展印尼语与英语对应文案，并补充专业科普所需的来源、状态和实地访问边界。
- [x] 检查主页与独立法律页面是否存在中英混排、未替换标签或翻译缺失。
- [x] 运行类型检查与生产构建，保存新版本并提交面向用户的优化建议。

## 完整文件包交付

- [ ] 确认当前网站项目目录、图像生成原始文件和所用资产 URL 的对应关系。
- [ ] 将项目源码、配置、文档、favicon 和网站所用的全部图片副本整理到独立交付目录。
- [ ] 生成文件清单与校验值，创建可下载的 ZIP 压缩包。
- [ ] 检查 ZIP 内文件数量、图片数量及关键入口文件，确认无遗漏后交付。

## 严格按用户素材重构

- [x] 以用户文件中可定位的 Amsterdam Waterpark 短地图链接为景点主体，不再混用 Villa Tomang Baru 住宅社区资料。
- [x] 按用户最新要求建立印尼语与英语双语路径，并以截图审校页面语言隔离。
- [x] 核对原 React 模板与所需 Astro、Tailwind、TypeScript、pnpm、Cloudflare Worker 单包架构之间的差异并完成重构。
- [x] 从用户地图链接、Google Maps、Traveloka、官方 Instagram 与公开图源核对名称、地址、坐标、电话、评分、动态票价和实景照片来源。
- [x] 创建 Astro + Tailwind CSS + TypeScript 单包项目，精确锁定 pnpm、Node.js、依赖版本和 Cloudflare 静态 Worker 入口。
- [x] 以可核实事实重写中英单页内容，包含费用、停车、机场/公交/出租车交通、周边服务类型、FAQ、反馈和非官方声明。
- [x] 加入本地 Logo 与 16/32/180/SVG favicon、真实照片、印尼语地图嵌入、TouristAttraction/LocalBusiness JSON-LD、FAQPage、域名单点配置和条件化 sitemap。
- [x] 创建独立隐私政策、服务条款与 Cookie 页面，并提供中英对应页面及分析 Cookie 同意控制。
- [x] 在清洁依赖环境执行锁定安装、Astro 检查、静态构建、Cloudflare Worker 干运行、产物扫描与 sitemap 降级检查；全部通过。

## 最终 Astro 交付包

- [ ] 核对最终 Astro 项目源码、精确依赖锁定、Cloudflare Worker、图标和文档的完整清单。
- [ ] 核对四张 Amsterdam Waterpark 实景照片的本地原始文件及其网站引用映射。
- [ ] 复制最终项目与照片到独立交付目录，生成文件清单和 SHA-256 校验清单。
- [ ] 压缩并测试 ZIP，确认入口页面、独立法律页、Worker、图标和每张照片均存在后交付。
