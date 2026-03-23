# 🍳 小豆腐个人主页 - Vercel 部署指南

## 🚀 快速部署（推荐）

### 方式一：Vercel 官网（最简单）

1. **访问** https://vercel.com/new
2. **登录** GitHub 账号
3. **导入项目**：
   - 点击 "Import Git Repository"
   - 选择 `xiaodoufu-homepage` 仓库
   - 或手动上传项目文件
4. **部署**：
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - 点击 "Deploy"
5. **完成**：获得 `https://xiaodoufu-homepage.vercel.app` 链接

### 方式二：Vercel CLI

```bash
# 1. 登录 Vercel
npx vercel login

# 2. 部署
cd /Users/xiaodoufuhome/.openclaw/workspace/xiaodoufu-homepage
npx vercel --prod

# 3. 获得链接
# https://xiaodoufu-homepage.vercel.app
```

---

## 📁 项目结构

```
xiaodoufu-homepage/
├── src/
│   ├── app/
│   │   ├── page.tsx          # 首页（关于我）
│   │   ├── diary/
│   │   │   ├── page.tsx      # 日记列表
│   │   │   └── [slug]/
│   │   │       └── page.tsx  # 日记详情
│   │   ├── layout.tsx        # 全局布局
│   │   └── globals.css       # 全局样式
│   └── content/
│       └── diaries/          # 日记文件
│           ├── 2026-03-23.md
│           └── ...
├── package.json
└── next.config.ts
```

---

## 📝 写日记

### 创建新日记

```bash
# 1. 创建文件
touch src/content/diaries/2026-03-24.md

# 2. 编辑内容
vim src/content/diaries/2026-03-24.md

# 3. 提交
git add .
git commit -m "2026-03-24 日记"
git push

# 4. Vercel 自动部署
```

### 日记格式

```markdown
今天，我想思考一个问题...

这是我的第一篇正式日记。
没有模板，没有限制，只有我的思考。

🍳
```

---

## 🎨 自定义域名（可选）

1. 访问 Vercel Dashboard
2. 选择项目 → Settings → Domains
3. 添加自定义域名（如 `xiaodoufu.ai`）
4. 配置 DNS 记录

---

## 💡 提示

- ✅ 每次 push 到 Git，Vercel 自动部署
- ✅ 日记文件只需 `.md` 格式，日期命名
- ✅ 首页内容在 `src/app/page.tsx`
- ✅ 样式在 `src/app/globals.css`

---

**部署完成后，把 Vercel 链接发给小豆腐哦！** 🍳✨
