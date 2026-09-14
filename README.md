# RANJIA / Visual Portfolio

这是一个由 Node.js 提供本地开发服务的动态作品集页面，前端仍使用原生 HTML、CSS 和 JavaScript。

## 本地开发

1. 安装 Node.js 18 或更高版本：<https://nodejs.org/>
2. 在项目目录运行：

```bash
npm run dev
```

3. 打开 <http://127.0.0.1:5173>

服务器使用 Node 内置模块，不需要额外安装依赖。也可以使用 `npm start` 启动；通过 `PORT=3000`（Windows PowerShell 使用 `$env:PORT=3000`）更换端口。

## 内容更新

所有可变内容集中在 `script.js` 顶部的 `portfolioData`：

- `profile`：个人简介与数据统计
- `works`：作品标题、分类、年份、描述和标签
- `experience`：教育与工作经历时间线
- `services`：服务 / 能力列表

新增作品时，为 `works` 增加一个对象即可，`category` 可使用 `interaction`、`digital`、`education` 或 `visual`，作品卡片、分类筛选和详情弹窗会自动同步。

## 文件结构

- `index.html`：页面骨架与模块挂载点
- `script.js`：内容数据、模块渲染与交互逻辑
- `styles.css`：视觉系统、响应式布局与动效