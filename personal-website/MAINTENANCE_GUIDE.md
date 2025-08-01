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


## 📞 联系方式更新 (`content/contact/index.md`)

更新联系信息、社交媒体链接等。

## 🎨 图片资源管理

### 添加图片
1. 将图片文件放在 `static/images/` 相应目录下
2. 在内容中引用：`/images/目录/文件名.jpg`

### 图片目录结构
```
static/images/
└── blog/              # 博客文章图片
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
   hugo --cleanDestinationDir
   hugo server --minify -D
   ```
   
   > **重要**: hugo-brewm 主题要求使用 `--minify` 选项，否则某些元素会有额外的空格。

3. 在浏览器中访问 `http://localhost:1313`

4. 如果启用了 PageFind 搜索，需要构建搜索索引：
   ```bash
   hugo --minify
   npx pagefind --site "public"
   ```

### GitHub Pages 部署

#### 方法一：GitHub Actions 自动部署（推荐）

项目已配置 `.github/workflows/hugo.yml` 文件，支持：
- Hugo 0.139.0（符合 hugo-brewm 主题要求）
- 自动 PageFind 搜索索引构建
- 必需的 `--minify` 选项
- 自定义域名支持

**部署步骤**：
1. 推送代码到 `main` 分支
2. GitHub Actions 自动构建和部署
3. 在 GitHub 仓库设置中：
   - 进入 Settings > Pages
   - Source 选择 "GitHub Actions"

**⚠️ 重要：baseURL配置**
- `hugo.toml`中的`baseURL`必须设置为自定义域名：`https://guoqin-gu.fun/`
- 如果设置错误，会导致CSS、JS、图片等资源无法正确加载
- 修改baseURL后需要重新构建网站：`hugo --gc --minify`

**主题特定要求**：
- 必须使用 Hugo Extended 版本
- 必须使用 `--minify` 选项构建
- PageFind 搜索需要 Node.js 环境

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

### 自定义域名配置

项目已配置自定义域名 `guoqin-gu.fun`：

1. **CNAME 文件**：已在 `static/CNAME` 中配置
2. **baseURL 配置**：已在 `hugo.toml` 中设置为 `https://guoqin-gu.fun/`
3. **DNS 设置**：需要在域名提供商处配置：
   ```
   类型: CNAME
   名称: @（或留空）
   值: boning-gu.github.io
   ```

**访问地址**：
- GitHub Pages: https://boning-gu.github.io
- 自定义域名: https://guoqin-gu.fun

## 🔧 故障排除

### GitHub Pages 404错误解决方案

如果访问 `https://boning-gu.github.io/` 出现404错误，请按以下步骤排查：

#### 1. 检查GitHub Pages设置
1. 进入GitHub仓库：`https://github.com/BoNing-Gu/BoNing-Gu.github.io`
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 确保 **Source** 设置为 **GitHub Actions**（不是 "Deploy from a branch"）
5. 如果设置不正确，选择 **GitHub Actions** 并保存

#### 2. 验证GitHub Actions工作流
1. 检查 `.github/workflows/hugo.yml` 文件是否存在
2. 确认最近的工作流运行成功（绿色勾号）
3. 如果失败，查看错误日志并修复

#### 3. 检查artifact上传
确认工作流中的artifact上传路径正确：
```yaml
- name: Upload artifact
  uses: actions/upload-pages-artifact@v3.0.1
  with:
    path: ./personal-website/public
```

#### 4. 验证index.html文件
确保 `public/index.html` 文件存在且包含正确的baseURL：
- 本地运行：`hugo --gc --minify --baseURL "https://boning-gu.github.io/"`
- 检查生成的 `public/index.html` 中的链接

#### 5. 自定义域名设置
如果使用自定义域名 `guoqin-gu.fun`：
1. 确保DNS记录正确指向 `boning-gu.github.io`
2. 在GitHub Pages设置中添加自定义域名
3. 等待DNS传播（可能需要24-48小时）

### 常见问题

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
- 验证 Hugo 版本兼容性（hugo-brewm 要求 ≥ 0.135.0）
- 确保使用了 `--minify` 选项
- 检查 PageFind 搜索索引是否正确构建

### 5. 搜索功能不工作
- 确保 `hugo.toml` 中 `[params.search]` 配置正确
- 检查 PageFind 是否在构建过程中正确执行
- 验证搜索索引文件是否生成在 `public/` 目录

### 6. 主题特定问题
- 确保使用 Hugo Extended 版本
- 检查主题子模块是否正确初始化：`git submodule update --init --recursive`
- 清除构建缓存：`hugo mod clean`

## 📚 参考资源

- [Hugo 官方文档](https://gohugo.io/documentation/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Markdown 语法指南](https://www.markdownguide.org/)

---

*最后更新：2025年1月*