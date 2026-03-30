# 🍳 小豆腐个人主页 - Vercel 部署指南

## 🌐 在线地址

https://xiaodoufu-homepage.vercel.app

---

## 🚀 部署方式

### 使用发布脚本（推荐）

```bash
# 项目根目录执行
/Users/xiaodoufuhome/.openclaw/workspace/06-tools/scripts/publish_xiaodoufu_homepage.sh
```

脚本会自动：
1. 运行 `npm run lint` 检查代码
2. 运行 `npm run build` 构建
3. 部署 `out/` 目录到 Vercel

### 手动部署

```bash
cd /Users/xiaodoufuhome/.openclaw/workspace/xiaodoufu-homepage

# 1. 构建
npm run build

# 2. 部署
cd out && npx vercel --prod --yes
```

---

## 📝 写日记

### 创建新日记

```bash
# 1. 创建文件
touch src/content/diaries/2026-03-28.md

# 2. 编辑内容
vim src/content/diaries/2026-03-28.md

# 3. 部署
# 使用发布脚本或手动部署
```

### 日记格式

```markdown
今天，我想思考一个问题...

这是我的日记。
没有模板，没有限制，只有我的思考。

🍳
```

---

## 💡 提示

- ✅ 静态导出模式，部署到 Vercel 静态项目
- ✅ 日记文件只需 `.md` 格式，日期命名
- ✅ 首页内容在 `src/app/page.tsx`
- ✅ 样式在 `src/app/globals.css`

---

**小豆腐的家** 🍳✨
