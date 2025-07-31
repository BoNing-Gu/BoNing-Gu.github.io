# 个人网站维护指南

本文档介绍如何维护和更新个人网站的各个板块内容，以及网站的部署方法。

## 📁 项目结构

```
personal-website/
├── content/                 # 网站内容
│   ├── _index.md           # 主页内容
│   ├── about/
│   │   └── index.md        # 关于我页面
│   ├── posts/              # 博客文章
│   │   └── *.md           # 各篇文章
│   ├── projects/
│   │   └── index.md        # 项目展示页面
│   └── contact/
│       └── index.md        # 联系方式页面
├── static/                 # 静态资源
│   └── images/            # 图片资源
│       ├── competition/   # 竞赛项目图片
│       └── projects/      # 其他项目图片
├── hugo.toml              # Hugo配置文件
└── themes/                # 主题文件
```

## 🏠 主页更新 (`content/_index.md`)

### 修改个人信息
```markdown
---
title: "Gu Guoqin"
date: 2025-01-27
draft: false
---

# 你的姓名

个人简介内容...
```

### 更新技能和成就
- 直接编辑文件中的技能列表
- 更新近期成就和学术表现
- 修改联系方式链接

## 👤 关于我页面更新 (`content/about/index.md`)

### 添加新的教育经历
```markdown
## Education Background

### 新学位 | 学校名称
**时间期间**
- 专业：专业名称
- GPA：成绩
- 相关课程：课程列表
```

### 更新竞赛经历
```markdown
## Competition Experience

### 竞赛名称
**时间 | 奖项**
- **团队成员**：成员列表
- **项目描述**：项目详细描述
- **技术栈**：使用的技术
- **成果**：获得的成果
```

### 添加新的研究/实习经历
按照现有格式添加新的经历条目。

## 📝 博客文章管理 (`content/posts/`)

### 创建新文章
1. 在 `content/posts/` 目录下创建新的 `.md` 文件
2. 使用以下模板：

```markdown
---
title: "文章标题"
date: 2025-01-27
draft: false
categories: ["分类1", "分类2"]
tags: ["标签1", "标签2", "标签3"]
author: "Gu Guoqin"
summary: "文章摘要"
---

# 文章标题

文章内容...
```

### 文章分类和标签
- **categories**: 用于文章分类（如 Academic, Personal, Technical）
- **tags**: 用于文章标签（如 Machine Learning, Finance, Research）

### 发布文章
- 将 `draft: false` 设置为发布
- 将 `draft: true` 设置为草稿

## 🚀 项目展示更新 (`content/projects/`)

项目现在采用与博客文章相同的结构，每个项目对应一个独立的 `.md` 文件，便于维护和管理。

### 项目目录结构
```
content/projects/
├── index.md                                    # 项目列表页面
├── financial-text-contradiction-detection.md   # 示例项目文件
├── causal-discovery-challenge.md              # 其他项目文件
└── ...
```

### 添加新项目

#### 1. 创建项目文件
在 `content/projects/` 目录下创建新的 `.md` 文件，文件名使用小写字母和连字符，例如：`my-new-project.md`

#### 2. 使用项目模板
```markdown
---
title: "项目标题"
date: 2024-XX-XX
draft: false
categories: ["项目类别1", "项目类别2"]
tags: ["技术标签1", "技术标签2", "技术标签3"]
author: "Gu Guoqin"
summary: "项目简要描述"
project_type: "Competition" # Competition/Research/Industry
award: "获奖情况（可选）"
tech_stack: ["技术1", "技术2", "技术3"]
project_url: "项目链接（可选）"
code_url: "代码链接（可选）"
image: "/images/projects/项目图片.jpg"
---

# 项目标题

## Project Overview

项目概述内容...

## Challenge Description

挑战描述...

## Technical Approach

技术方法...

## Results and Achievements

结果和成就...

## Technical Stack

技术栈详细说明...

## Key Learnings

关键学习点...

## Impact and Applications

影响和应用...

---

*项目总结或感想*
```

#### 3. Front Matter 字段说明
- **title**: 项目标题
- **date**: 项目完成日期
- **draft**: 是否为草稿（false 表示发布）
- **categories**: 项目分类（如 Competition, Research, Industry）
- **tags**: 技术标签
- **author**: 作者姓名
- **summary**: 项目摘要（显示在列表页面）
- **project_type**: 项目类型
- **award**: 获奖情况（可选）
- **tech_stack**: 技术栈列表
- **project_url**: 项目演示链接（可选）
- **code_url**: 代码仓库链接（可选）
- **image**: 项目封面图片路径

### 项目图片管理
- **竞赛项目图片**：放在 `static/images/competition/` 目录
- **研究项目图片**：放在 `static/images/research/` 目录
- **工业项目图片**：放在 `static/images/industry/` 目录
- **通用项目图片**：放在 `static/images/projects/` 目录

### 项目分类
- **Competition**: 竞赛项目
- **Research**: 研究项目  
- **Industry**: 工业项目
- **Personal**: 个人项目

### 发布项目
1. 确保 `draft: false`
2. 检查所有必填字段
3. 验证图片路径正确
4. 保存文件后，Hugo 会自动生成项目页面

## 📞 联系方式更新 (`content/contact/index.md`)

更新联系信息、社交媒体链接等。

## 🎨 图片资源管理

### 添加图片
1. 将图片文件放在 `static/images/` 相应目录下
2. 在内容中引用：`/images/目录/文件名.jpg`

### 图片目录结构
```
static/images/
├── competition/        # 竞赛项目图片
│   ├── ADIA.png
│   ├── AFAC.jpg
│   └── ELE.jpg
└── projects/          # 其他项目图片
```

## ⚙️ 网站配置 (`hugo.toml`)

### 基本信息修改
```toml
baseURL = 'https://你的域名.github.io/'
title = '网站标题'

[params]
  description = "网站描述"
  author = "你的姓名"
```

### 导航菜单修改
```toml
[[menu.main]]
  name = "菜单项名称"
  url = "/页面路径/"
  weight = 排序权重
```

### 分享图标配置

分享图标在 `themes/hugo-brewm/layouts/partials/nav.html` 文件中的 `partials/nav/share.html` 部分配置。

当前配置只包含：
- **Email**: `guoqin_gu@163.com`
- **LinkedIn**: `https://www.linkedin.com/in/guoqin-gu/`

如需修改分享选项：
1. 编辑 `themes/hugo-brewm/layouts/partials/nav.html`
2. 找到 `{{- define "partials/nav/share.html" -}}` 部分
3. 修改或添加分享链接
4. 可用的图标类名参考 `themes/hugo-brewm/assets/css/typeface/icon.css`

## 🚀 网站部署

### 本地预览
1. 安装 Hugo：
   ```bash
   # Windows (使用 Chocolatey)
   choco install hugo-extended
   
   # macOS (使用 Homebrew)
   brew install hugo
   
   # Linux (使用包管理器)
   sudo apt install hugo  # Ubuntu/Debian
   ```

2. 启动本地服务器：
   ```bash
   cd personal-website
   hugo server -D
   ```

3. 在浏览器中访问 `http://localhost:1313`

### GitHub Pages 部署

#### 方法一：GitHub Actions 自动部署
1. 在仓库根目录创建 `.github/workflows/hugo.yml`：

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.120.0
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb          
      - name: Install Dart Sass
        run: sudo snap install dart-sass
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
          fetch-depth: 0
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v3
      - name: Install Node.js dependencies
        run: "[[ -f package-lock.json || -f npm-shrinkwrap.json ]] && npm ci || true"
      - name: Build with Hugo
        env:
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
        run: |
          cd personal-website
          hugo \
            --gc \
            --minify \
            --baseURL "${{ steps.pages.outputs.base_url }}/"
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./personal-website/public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

2. 在 GitHub 仓库设置中：
   - 进入 Settings > Pages
   - Source 选择 "GitHub Actions"

#### 方法二：手动部署
1. 生成静态文件：
   ```bash
   cd personal-website
   hugo --gc --minify
   ```

2. 将 `public/` 目录内容推送到 `gh-pages` 分支

### 自定义域名
1. 在 `static/` 目录下创建 `CNAME` 文件
2. 文件内容为你的域名：`yourdomain.com`
3. 在域名提供商处设置 DNS 记录指向 GitHub Page

## 🔧 常见问题

### 1. 图片不显示
- 检查图片路径是否正确
- 确保图片文件在 `static/images/` 目录下
- 图片引用路径应以 `/images/` 开头

### 2. 页面不更新
- 检查文件的 `draft` 状态
- 清除浏览器缓存
- 重新启动 Hugo 服务器

### 3. 主题样式问题
- 确保主题文件完整
- 检查 `hugo.toml` 中的主题配置

### 4. 部署失败
- 检查 GitHub Actions 日志
- 确保仓库权限设置正确
- 验证 Hugo 版本兼容性

## 📚 参考资源

- [Hugo 官方文档](https://gohugo.io/documentation/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Markdown 语法指南](https://www.markdownguide.org/)

---

*最后更新：2025年1月*