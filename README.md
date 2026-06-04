# 边缘造物 · Edge Maker

LoRa 远距离无线监测与定制控制器产品站。

无需 WiFi、无需 4G、无需流量费的低功耗远距离温湿度 / 多传感器监测方案。支持按现场需求定制开发。

## 在线访问

**GitHub Pages 正式版**：https://lanceakk.github.io/edge-marker/

**源代码仓库**：https://github.com/Lanceakk/edge-marker

## 本地预览

直接双击打开 `index.html` 即可查看（推荐）。

或使用开发服务器（需要 Node.js）：

```bash
npm install
npm run start   # 使用 Vite 启动开发服务器
```

构建（可选）：

```bash
npm run build   # 输出到 dist/ （已忽略进 git）
```

## 产品

- LoRa 温湿度采集器（¥199 起）
- USB LoRa 接收器（主推，¥299 起）
- 通用采集控制器（支持 RS485/RS232/DI/DO 等，按需报价）

## 购买渠道

- 闲鱼：https://www.goofish.com/personal?spm=a21ybx.home.nav.1.4c053da6WIb4aG
- 淘宝：https://m.tb.cn/h.RS9SEoXpHlJwpqd
- 邮箱：ffbkfmbd@qq.com （定制方案咨询）

## 部署

本项目为纯静态站点，推荐部署到 **Vercel**（免费、自动预览、CDN 快）：

### Vercel 部署（推荐）

**线上地址**：https://edge-maker-product-site.vercel.app

1. 访问 https://vercel.com/new/import?repository-url=https://github.com/Lanceakk/edge-marker
2. 使用 GitHub 账号登录 / 授权 Vercel
3. 选择仓库导入，点击 Deploy
4. 几秒钟后即可获得生产地址
5. 以后每次 push 到 main 都会自动重新部署（需先在 Vercel 账号设置中连接 GitHub）

或者使用 Vercel CLI（本地快速部署）：
```bash
npx vercel login
npx vercel --yes --prod
```

已添加 `vercel.json` 配置为纯静态站点（根目录直接服务 `index.html`）。当前部署使用了 Vite 检测 + build 脚本输出到 dist/。

### GitHub Pages（备选）

本项目也支持 GitHub Pages：
- 仓库 Settings → Pages → Deploy from a branch → main + / 
- 地址：https://lanceakk.github.io/edge-marker/

## 技术栈

- 纯 HTML + CSS + JS（无框架）
- 响应式 + 移动端汉堡菜单
- Vite（仅用于本地开发服务器）

## 联系

邮箱：ffbkfmbd@qq.com
闲鱼 / 淘宝 店铺链接见上

© 2026 边缘造物
