# 启名宝 - 智能宝宝起名系统

[![GitHub stars](https://img.shields.io/github/stars/your-username/启名宝?style=social)](https://github.com/your-username/启名宝)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

一个基于 DeepSeek AI 的专业宝宝起名应用，结合传统文化和现代AI技术，为您的宝宝推荐寓意美好的名字。

## 🌟 在线体验

[点击这里体验启名宝](https://your-domain.com) （部署后更新链接）

## 功能特色

- 🤖 **AI智能起名**：使用 DeepSeek 推理模型生成专业名字建议
- 📊 **传统文化结合**：考虑五行八字、生肖特点
- 🎨 **多种风格**：古风诗意、现代简约、优雅大方等
- 📱 **响应式设计**：完美适配手机和桌面端
- ⭐ **收藏功能**：保存喜欢的名字
- 🔄 **重新生成**：不满意可以重新生成新的建议

## 技术栈

- **前端框架**：Next.js 13 (App Router)
- **UI 组件**：Shadcn UI + Radix UI
- **样式方案**：Tailwind CSS
- **AI 服务**：DeepSeek API
- **开发语言**：TypeScript

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置 API 密钥

在项目根目录创建 `.env.local` 文件：

```bash
# DeepSeek API 配置
DEEPSEEK_API_KEY=your_deepseek_api_key_here
```

**重要**：请将 `your_deepseek_api_key_here` 替换为您的真实 DeepSeek API Key。

### 3. 获取 DeepSeek API Key

1. 访问 [DeepSeek 官网](https://platform.deepseek.com/)
2. 注册账号并登录
3. 在控制台中创建 API Key
4. 将 API Key 填入 `.env.local` 文件

### 4. 启动开发服务器

```bash
npm run dev
```

应用将在 [http://localhost:3000](http://localhost:3000) 启动。

## 使用说明

1. **填写基本信息**：输入宝宝姓氏、选择性别
2. **填写出生信息**：选择出生日期、时间、生肖
3. **个性化选项**：选择字数偏好和风格偏好
4. **生成名字**：点击"开始智能取名"按钮
5. **查看结果**：AI 会生成4个专业的名字建议
6. **收藏喜欢的名字**：点击心形图标收藏
7. **重新生成**：如果不满意可以点击"重新生成"

## API 说明

项目使用 DeepSeek 的推理模型 (`deepseek-reasoner`) 来生成名字建议。该模型会：

- 分析宝宝的基本信息和出生信息
- 结合传统文化中的五行理论和生肖特点
- 根据用户的风格偏好生成合适的名字
- 提供详细的名字含义和文化分析

## 项目结构

```
project/
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/            # React 组件
│   ├── ui/               # UI 基础组件
│   ├── name-generator.tsx # 名字生成器组件
│   └── progress-steps.tsx # 进度步骤组件
├── lib/                   # 工具库
│   ├── deepseek-api.ts   # DeepSeek API 服务
│   └── utils.ts          # 工具函数
└── README.md             # 项目说明
```

## 注意事项

- 确保您的 DeepSeek API Key 有足够的额度
- API 调用可能需要几秒钟时间，请耐心等待
- 如果 API 调用失败，系统会自动使用备用的示例数据
- 生成的名字建议仅供参考，建议结合专业命理师意见

## 开发说明

如果您想要修改或扩展功能：

1. **修改提示词**：编辑 `lib/deepseek-api.ts` 中的 `createNamingPrompt` 函数
2. **调整UI**：修改 `components/` 目录下的组件文件
3. **添加新功能**：在 `app/api/` 目录下创建新的API路由

## 许可证

本项目仅供学习和参考使用。 